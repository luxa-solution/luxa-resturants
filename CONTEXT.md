# Luxa Restaurant Funnel — Context

A conversion funnel that convinces restaurant brands in **Lagos, Abuja and Ilorin** to
buy a website from Luxa. Prospects are sent here from cold outreach/social; the goal is
to collect a lead via a free-website-audit request or a WhatsApp conversation.

## Domain glossary

- **Audit** — the free website-audit offer. The primary lead magnet. A prospect submits
  the audit form (`#audit`) and Luxa follows up.
- **Lead** — one audit-form submission: restaurant name, contact name, WhatsApp number,
  optional Instagram handle, city, whether they currently have a website, and a message.
- **Webhook** — the Google Apps Script `/exec` endpoint (`LEAD_WEBHOOK_URL`) that appends
  each lead as a row in a Google Sheet.
- **Package** — one of three service tiers: `Starter Menu Site`, `Growth`,
  `Signature Brand Experience`. Each has a price range.
- **Project** — a case study in the portfolio (`lib/projects.ts`), rendered at
  `/projects/<slug>` and surfaced on the home page work grid.
- **Focus cities** — Abuja, Lagos, Ilorin.

## Key values

- WhatsApp: `2347047494586`
- Email: `luxadigitalsolutions@gmail.com`
- Instagram: `https://www.instagram.com/luxa.build/`
- Brand/legal name: `Luxa Web Studio`
- Pricing: Starter `₦150,000–₦500,000` · Growth `₦500,000–₦1,500,000` · Signature `₦1,500,000+`

## Structure

- `app/page.tsx` → `components/luxa-home.tsx` (the whole funnel, one client component)
- `app/projects/[slug]/page.tsx` (case-study template)
- `lib/site.ts` (contact config + `waLink`), `lib/projects.ts`, `lib/offerings.ts`
- `app/api/lead/route.ts` (form → webhook)
- `public/projects/<slug>/` (case-study screenshots)

## Testing seams

Tests live next to behavior at these seams:
`waLink`, `POST /api/lead`, the audit form (`LuxaHome`), `projects`, `packages`,
`sitemap`, `robots`, `buildStructuredData`, `/privacy`, form labels.
