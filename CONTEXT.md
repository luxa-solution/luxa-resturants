# Luxa Restaurant Funnel

Restaurant website service funnel for Luxa Web Studio. Focus: single restaurants in Ilorin, Lagos and Abuja. Canonical domain: https://eat.luxasolution.com.

## Contact and delivery

Primary action: WhatsApp discussion. Secondary: labelled restaurant demonstration. Alternative: three required form fields, optional restaurant details, POST /api/lead. Existing webhook fields remain unchanged. LEAD_WEBHOOK_URL sends leads to the existing spreadsheet integration. Never commit that URL or submit test leads to the live spreadsheet.

The free review covers current restaurant services and online information. Its date is agreed on WhatsApp. New websites receive a scoped quote. Published price ranges are guidance. Payment stages: 40%, 48%, 12%. Customer owns domain, hosting account, source code and content. One month of free maintenance. Exact coverage, recurring costs and payment milestone belong in the quote. No restaurant results, testimonials or paid project status have been verified.

## Architecture

- components/luxa-home.tsx: server-rendered page sections.
- components/site-header.tsx: mobile navigation and contact shortcut.
- components/restaurant-demo.tsx: illustrative menu filters and enquiry preview; sends no orders or payments.
- components/lead-form.tsx: enquiry state and POST handling.
- components/contact-link.tsx: common WhatsApp link and anonymous event helper.
- lib/site.ts, lib/offerings.ts, lib/faqs.ts, lib/projects.ts: content and configuration.
- app/projects/[slug]/page.tsx: four existing portfolio pages with unique metadata.
- app/api/lead/route.ts: validation, bounded request body, best-effort per-instance rate limit, webhook timeout.

## Measurement

Vercel Analytics in production. whatsapp_click, demo_open, form_start, lead_submitted, lead_failed. Properties: placement and campaign source. No form answers in analytics. A click is not a qualified enquiry. No historical baseline supplied.

## Checks

pnpm test, pnpm typecheck, pnpm build. Browser checks cover phone and desktop layout, keyboard navigation, menu filters, FAQ, form validation and error recovery. Use a local mock webhook to verify lead delivery without contacting real prospects.

Approved strategy and evidence: LUXA-AUDIT-STRATEGY.md. Project-wide rules: AGENTS.md.

## User review refinements

Plus Jakarta Sans for body text. Dancing Script 500 for short accents. Licensed Breathine files are not present. The phone opening keeps one WhatsApp action. Extra trust details follow the demonstration. Payment stages use full-width phone rows and a once-only count-up, with stable final values for screen readers and reduced motion. Favicon retains the L and orange dot. FAQs focus on the restaurant's goals and the planning process.

Meal photos show premium settings without people. The desktop preview uses corrected jollof rice and chicken. The menu demo uses grilled fish. The contact section has no meal photo. Image prompts and asset paths are in MEAL-IMAGES.md. The rice photo uses a versioned filename to avoid the old image cache.

app/premium-details.css adds fine patterns and warm shading to dark sections. Small interaction effects cover actions, navigation, work cards, FAQs, filters and form fields. Motion respects the reduced-motion setting. Patterns use CSS, with no image or animation dependency.
