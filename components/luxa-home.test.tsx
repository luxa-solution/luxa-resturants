import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import LeadForm from "./lead-form";

async function fill() {
  const user = userEvent.setup();
  render(<LeadForm />);
  await user.type(screen.getByLabelText("Restaurant name"), "Savour Lagos");
  await user.type(screen.getByLabelText("Your name"), "Ada");
  await user.type(screen.getByLabelText("WhatsApp number"), "+2348012345678");
  return user;
}

describe("restaurant enquiry", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi
        .fn()
        .mockResolvedValue(
          new Response(JSON.stringify({ ok: true }), { status: 200 }),
        ),
    );
  });
  afterEach(() => {
    vi.unstubAllGlobals();
  });
  it("delivers the required fields and confirms receipt", async () => {
    const user = await fill();
    await user.click(
      screen.getByRole("button", { name: /request a free review/i }),
    );
    expect(await screen.findByText("Request received.")).toBeInTheDocument();
    const [url, init] = vi.mocked(fetch).mock.calls[0];
    expect(url).toBe("/api/lead");
    expect(JSON.parse(init?.body as string)).toMatchObject({
      restaurant: "Savour Lagos",
      name: "Ada",
      whatsapp: "+2348012345678",
      city: "",
      hasWebsite: "",
    });
    expect(
      screen.getByRole("link", { name: /continue on whatsapp/i }),
    ).toHaveAttribute(
      "href",
      expect.stringContaining("https://wa.me/2347047494586"),
    );
  });
  it("keeps entered values and provides a contact link after failure", async () => {
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response(JSON.stringify({ ok: false }), { status: 502 }),
    );
    const user = await fill();
    await user.click(
      screen.getByRole("button", { name: /request a free review/i }),
    );
    expect(await screen.findByRole("alert")).toHaveTextContent(
      /could not send/i,
    );
    expect(screen.getByLabelText("Restaurant name")).toHaveValue(
      "Savour Lagos",
    );
    expect(
      screen.getByRole("link", { name: /contact us on whatsapp/i }),
    ).toHaveAttribute("href", expect.stringContaining("https://wa.me/"));
    expect(
      screen.getByRole("button", { name: /request a free review/i }),
    ).toBeEnabled();
  });
  it("preserves optional fields in the webhook contract", async () => {
    const user = await fill();
    await user.click(screen.getByText("Add restaurant details"));
    await user.type(
      screen.getByLabelText("Website or Instagram link (optional)"),
      "https://example.com",
    );
    await user.selectOptions(screen.getByLabelText("City (optional)"), "Lagos");
    await user.selectOptions(
      screen.getByLabelText("Do you have a website? (optional)"),
      "None",
    );
    await user.click(
      screen.getByRole("button", { name: /request a free review/i }),
    );
    expect(await screen.findByText("Request received.")).toBeInTheDocument();
    expect(
      JSON.parse(vi.mocked(fetch).mock.calls[0][1]?.body as string),
    ).toMatchObject({
      instagram: "https://example.com",
      city: "Lagos",
      hasWebsite: "None",
    });
  });
});
