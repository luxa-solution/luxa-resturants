type LeadPayload = Record<string, unknown>;
const SOURCE = "luxa-restaurants-funnel";
const MAX_BODY_BYTES = 16000;
const limits = {
  restaurant: 160,
  name: 120,
  whatsapp: 24,
  instagram: 300,
  city: 80,
  hasWebsite: 80,
  message: 2000,
} as const;
const attempts = new Map<string, { count: number; reset: number }>();
const clean = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";
const json = (
  body: unknown,
  status = 200,
  extra: Record<string, string> = {},
) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      ...extra,
    },
  });

// Best-effort protection per server instance. Hosting-level limits can supplement this.
function rateLimited(request: Request) {
  const ip = (
    request.headers.get("x-vercel-forwarded-for") ||
    request.headers.get("x-forwarded-for")
  )
    ?.split(",")[0]
    ?.trim();
  if (!ip) return false;
  const now = Date.now();
  for (const [key, value] of attempts)
    if (value.reset <= now) attempts.delete(key);
  const existing = attempts.get(ip);
  if (existing) {
    existing.count += 1;
    return existing.count > 5;
  }
  if (attempts.size >= 1000) return true;
  attempts.set(ip, { count: 1, reset: now + 60000 });
  return false;
}

async function readBody(request: Request) {
  const reader = request.body?.getReader();
  if (!reader) throw new Error("Invalid body");
  const chunks: Uint8Array[] = [];
  let length = 0;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new RangeError("Body too large");
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.length;
  }
  return JSON.parse(new TextDecoder().decode(bytes)) as unknown;
}

export async function POST(request: Request) {
  if (rateLimited(request))
    return json(
      {
        ok: false,
        error:
          "Too many requests. Please wait a minute or contact us on WhatsApp.",
      },
      429,
      { "Retry-After": "60" },
    );
  let body: LeadPayload;
  try {
    const parsed = await readBody(request);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      return json({ ok: false, error: "Invalid request body." }, 400);
    body = parsed as LeadPayload;
  } catch (error) {
    return json(
      {
        ok: false,
        error:
          error instanceof RangeError
            ? "Request is too large."
            : "Invalid request body.",
      },
      error instanceof RangeError ? 413 : 400,
    );
  }
  if (clean(body.company)) return json({ ok: true });
  for (const [key, max] of Object.entries(limits)) {
    if (body[key] != null && typeof body[key] !== "string")
      return json({ ok: false, error: "Please check the form fields." }, 400);
    if (clean(body[key]).length > max)
      return json({ ok: false, error: "A form field is too long." }, 400);
  }
  const lead = {
    restaurant: clean(body.restaurant),
    name: clean(body.name),
    whatsapp: clean(body.whatsapp),
    instagram: clean(body.instagram),
    city: clean(body.city),
    hasWebsite: clean(body.hasWebsite),
    message: clean(body.message),
  };
  if (!lead.restaurant || !lead.name || !lead.whatsapp)
    return json(
      {
        ok: false,
        error: "Restaurant name, your name and WhatsApp number are required.",
      },
      400,
    );
  const digits = lead.whatsapp.replace(/\D/g, "");
  if (
    !/^[+0-9() .-]+$/.test(lead.whatsapp) ||
    digits.length < 7 ||
    digits.length > 15
  )
    return json(
      { ok: false, error: "Please enter a valid WhatsApp number." },
      400,
    );
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl)
    return json({ ok: false, error: "Lead capture is not configured." }, 500);
  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        ...lead,
        source: SOURCE,
      }),
      signal: AbortSignal.timeout(12000),
    });
    if (!response.ok)
      return json({ ok: false, error: "Could not deliver the lead." }, 502);
    if (response.headers.get("content-type")?.includes("application/json")) {
      const result: unknown = await response.json();
      if (
        result &&
        typeof result === "object" &&
        (("ok" in result && result.ok === false) ||
          ("success" in result && result.success === false))
      )
        return json({ ok: false, error: "Could not deliver the lead." }, 502);
    }
  } catch {
    return json({ ok: false, error: "Could not deliver the lead." }, 502);
  }
  return json({ ok: true });
}
