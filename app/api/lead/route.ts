type LeadPayload = {
  restaurant?: unknown
  name?: unknown
  whatsapp?: unknown
  instagram?: unknown
  city?: unknown
  hasWebsite?: unknown
  message?: unknown
  company?: unknown
}

const SOURCE = 'luxa-restaurants-funnel'

const clean = (value: unknown) => (typeof value === 'string' ? value.trim() : '')

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })

export async function POST(request: Request) {
  let body: LeadPayload
  try {
    body = (await request.json()) as LeadPayload
  } catch {
    return json({ ok: false, error: 'Invalid request body.' }, 400)
  }

  if (clean(body.company)) {
    return json({ ok: true })
  }

  const lead = {
    restaurant: clean(body.restaurant),
    name: clean(body.name),
    whatsapp: clean(body.whatsapp),
    instagram: clean(body.instagram),
    city: clean(body.city),
    hasWebsite: clean(body.hasWebsite),
    message: clean(body.message),
  }

  if (!lead.restaurant || !lead.name || !lead.whatsapp) {
    return json(
      { ok: false, error: 'Restaurant name, your name and WhatsApp number are required.' },
      400,
    )
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL
  if (!webhookUrl) {
    return json({ ok: false, error: 'Lead capture is not configured.' }, 500)
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        ...lead,
        source: SOURCE,
      }),
    })

    if (!response.ok) {
      return json({ ok: false, error: 'Could not deliver the lead.' }, 502)
    }
  } catch {
    return json({ ok: false, error: 'Could not deliver the lead.' }, 502)
  }

  return json({ ok: true })
}
