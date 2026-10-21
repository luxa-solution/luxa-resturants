"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import ContactLink, { trackEvent } from "./contact-link";

export default function LeadForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const started = useRef(false);
  const feedback = useRef<HTMLDivElement>(null);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    setSending(true);
    setError("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(
      [
        "restaurant",
        "name",
        "whatsapp",
        "instagram",
        "city",
        "hasWebsite",
        "message",
        "company",
      ].map((key) => [key, data.get(key) || ""]),
    );
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error("Delivery failed");
      setSent(true);
      form.reset();
      trackEvent("lead_submitted", { placement: "contact-form" });
      requestAnimationFrame(() => feedback.current?.focus());
    } catch {
      setError(
        "We could not send your request. Your details are still here. Try again or contact us on WhatsApp.",
      );
      trackEvent("lead_failed", { placement: "contact-form" });
    } finally {
      setSending(false);
    }
  }
  return (
    <div className="lead-panel">
      {sent ? (
        <div
          ref={feedback}
          tabIndex={-1}
          className="form-success"
          role="status"
        >
          <Check size={30} />
          <h3>Request received.</h3>
          <p>
            We will use your WhatsApp number to discuss your restaurant and
            agree the next step.
          </p>
          <ContactLink placement="form-success" className="text-link">
            Continue on WhatsApp <ArrowUpRight size={17} />
          </ContactLink>
        </div>
      ) : (
        <form
          onSubmit={submit}
          aria-label="Restaurant website enquiry"
          aria-busy={sending}
          onFocusCapture={() => {
            if (!started.current) {
              started.current = true;
              trackEvent("form_start", { placement: "contact-form" });
            }
          }}
        >
          <p className="eyebrow">Prefer to leave your details?</p>
          <h3>Tell us a little about your restaurant.</h3>
          <p className="form-intro">
            We will follow up on WhatsApp. All fields are required unless marked
            optional.
          </p>
          <div className="form-grid">
            <label>
              Restaurant name
              <input
                name="restaurant"
                placeholder="Restaurant name"
                required
                maxLength={160}
                autoComplete="organization"
              />
            </label>
            <label>
              Your name
              <input
                name="name"
                placeholder="Your name"
                required
                maxLength={120}
                autoComplete="name"
              />
            </label>
          </div>
          <label>
            WhatsApp number
            <input
              name="whatsapp"
              type="tel"
              inputMode="tel"
              placeholder="WhatsApp number (+234)"
              required
              minLength={7}
              maxLength={24}
              autoComplete="tel"
              pattern={"\\+?[0-9\\s\\(\\)\\.\\-]{7,24}"}
              aria-describedby="phone-help"
            />
          </label>
          <p id="phone-help" className="field-help">
            Include your country code, for example +234.
          </p>
          <details className="optional-fields">
            <summary>
              Add restaurant details <span>(optional)</span>
            </summary>
            <div className="optional-fields-body">
              <label>
                Website or Instagram link (optional)
                <input
                  name="instagram"
                  placeholder="Website or Instagram link"
                  maxLength={300}
                  autoComplete="url"
                />
              </label>
              <div className="form-grid">
                <label>
                  City (optional)
                  <select name="city" defaultValue="">
                    <option value="">Select city</option>
                    {["Ilorin", "Lagos", "Abuja", "Other"].map((city) => (
                      <option key={city}>{city}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Do you have a website? (optional)
                  <select name="hasWebsite" defaultValue="">
                    <option value="">Select an option</option>
                    {[
                      "None",
                      "Outdated",
                      "Not mobile-friendly",
                      "It's fine",
                    ].map((value) => (
                      <option key={value}>{value}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label>
                What would you like help with? (optional)
                <textarea name="message" maxLength={2000} rows={3} />
              </label>
            </div>
          </details>
          <div hidden aria-hidden="true">
            <label>
              Leave this field empty
              <input name="company" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          {error && (
            <div className="form-error" role="alert">
              <p>{error}</p>
              <ContactLink placement="form-error" className="text-link">
                Contact us on WhatsApp <ArrowUpRight size={16} />
              </ContactLink>
            </div>
          )}
          <button
            type="submit"
            disabled={sending}
            className="button button-brown form-submit"
          >
            {sending ? "Sending request…" : "Request a free review"}
            {!sending && <ArrowUpRight size={17} />}
          </button>
          <p className="form-privacy">
            We use these details to reply to your enquiry. Read our{" "}
            <Link href="/privacy">privacy policy</Link>.
          </p>
        </form>
      )}
    </div>
  );
}
