# LUXA audit and proposed strategy

Date: 21 October 2026. Status: proposal for review. No implementation approved.

## 1. Executive assessment

LUXA explains that it builds restaurant websites. The page needs stronger evidence, clearer scope, and more complete buying information. Visual changes alone will not resolve these gaps.

The strongest available offer is a restaurant website with a clear menu and contact path, customer ownership, a project-specific quote, and one month of free maintenance. The exact functions and maintenance limits still need definition.

Recommend WhatsApp as the main contact path. Use a restaurant demonstration as the secondary action. Keep the enquiry form as an alternative. Remove the revenue calculator and unsupported popularity claims.

Success means more suitable restaurant enquiries and paid projects. No conversion increase can be claimed before measurement.

## 2. Evidence and limits

Inspected: homepage source and live page, four portfolio records and their shared project template, live Markazul Bayaan project page, privacy page, error pages, lead API, styles, assets, metadata, sitemap, robots, structured data, analytics calls, and existing test definitions.

Captured the live homepage at desktop width and a 390 px phone viewport. Also captured the project and privacy pages at phone width. These three phone views had no horizontal document overflow. These checks do not prove support for all devices or browsers.

Screenshots are in `C:/Users/HP/AppData/Local/Temp/luxa-audit-20261021/`. Files: `desktop-full.png`, `mobile-full.png`, `mobile-project.png`, `mobile-privacy.png`. Earlier files named `desktop.png` and `mobile.png` used window-size capture; do not use the earlier phone capture to judge layout.

No live enquiry was submitted. Production webhook delivery, keyboard interactions, screen-reader behavior, Core Web Vitals, and historical analytics remain unverified. Dependencies are not installed locally. Existing tests were read, not run.

Evidence labels used below:

- Observed: source code, live HTML, or browser capture.
- Research: published guidance or a reference website.
- Hypothesis: needs testing with LUXA prospects.
- Design judgement: proposed visual choice, not a conversion finding.

## 3. Business basis

Confirmed by the user from CEO-supplied information:

- Business: Luxa Web Studio. Website: `https://eat.luxasolution.com/`.
- Target: single restaurants. Initial cities: Ilorin, Lagos, Abuja.
- Main contact: WhatsApp. No prospects or measured objections yet.
- Quotes depend on project complexity. Published prices are general guidance.
- Payment: 40% upfront, 48% of the total at the agreed progress stage, 12% after project submission.
- Customer owns the domain, hosting account, source code, and content.
- One month of free maintenance.
- Free audit reviews the restaurant's service and explains possible website uses. Restaurants without websites can request a new-build quote.
- No analytics baseline supplied. Analytics code exists, but that does not establish usable production data.

Still unspecified: paid or unpaid status of portfolio work, publication permission, exact maintenance coverage, recurring costs, delivery capacity, and supported restaurant functions. Do not fill these gaps with claims.

## 4. Findings by route and section

| Priority | Location | Observed issue | Proposed action |
| --- | --- | --- | --- |
| High | Hero and social preview | Headline links a website directly to orders without results evidence. | Explain the service and practical customer actions. Remove implied sales certainty. |
| High | Hero demonstration | Savour is not clearly labelled as a concept. Food images are coloured blocks. Its order button has no action. | Label it as a demonstration. Use licensed food images. Provide a working, clearly described preview. Never imply a client relationship. |
| High | Cream sections | Shared supporting text uses `#cbb9aa` on `#f7eddf`: about 1.64:1 contrast. | Add dark text styles for light surfaces. Check all text and control states. |
| High | Revenue calculator | Default inputs produce 63 missed orders and ₦535,500. No data links these losses to website problems. | Remove. A disclaimer does not validate the calculation's business assumptions. |
| High | Package section | Growth has a “Popular” label although no prospects were reported. | Remove. A recommendation can be labelled only with a clear reason. |
| High | Offer and FAQ | Self-editing, reservations, Google visibility, and a 7 to 14 day window are offered without confirmed delivery scope. | Confirm each capability. Distinguish contact links from order management and booking requests from confirmed reservations. Agree a timeline per quote. |
| High | Audit and form | Audit contents, delivery arrangement, and path for restaurants without websites are unclear. | Explain what is reviewed and what the owner receives. Agree delivery time in the conversation. Offer new-build quotes separately. |
| High | Metadata | Site config uses `luxasolutions.com`. Live project page declares that domain's homepage as canonical. | Use the confirmed domain. Set a unique canonical URL for each project. Check social metadata and sitemap too. |
| Medium | Problem, transformation, benefits | Three sections repeat benefits before showing real work. Generic supporting text repeats across problem cards. | Combine into one section with three practical uses. Bring demonstration and evidence forward. |
| Medium | Work grid and four project routes | Work is from other sectors. One record is “In progress”; another is “Concept build”. Project pages use generic results language. | Retain honest status labels. Explain role, brief, delivered functions, and evidence. Distinguish design goals from measured results. |
| Medium | Pricing | Broad ranges do not explain price drivers or recurring costs. | Keep guidance with scope examples and exclusions. Publish confirmed ownership and payment terms. |
| Medium | Process | Audit, preview, build, and growth omit quote approval, content duties, review limits, and handover. | Show the actual stages. Define the payment milestone with accepted deliverables, not a subjective percentage alone. |
| Medium | Form | Seven visible fields; placeholders act as visible labels. Phone input lacks telephone settings. Website audit has no dedicated URL field. | Keep permanent labels. Request only essential details. Use telephone input and autocomplete. Put optional links in one field or collect them in chat. |
| Medium | Form feedback | Error copy refers to WhatsApp without a direct recovery link. Success copy gives no agreed next step. | Add a direct WhatsApp link and a clear follow-up description. Preserve entered values on failure. |
| Medium | Phone navigation and fixed CTA | Sticky audit action duplicates the page action. Source does not close the menu from its audit button or manage focus as a modal. | Use one main contact action. Close menu on selection. Verify focus, Escape, keyboard, safe areas, and form visibility. |
| Medium | Fonts and visual system | Jakarta is loaded through a CSS variable, but body CSS uses a literal family name. Repeated blur, gradients, rounded cards, and tight headline spacing dominate. | Use the loaded variable. Define shared colour, type, space, and radius values. Reduce effects and improve word separation. |
| Medium | Lead API | Has required-field checks and a honeypot. No explicit length limits, request-shape guard, phone format check, rate limit, or webhook timeout. | Add proportionate server validation and timeout handling. Verify spreadsheet acceptance rather than relying solely on HTTP success. |
| Medium | Analytics | Three events exist. Some WhatsApp links and project contact links bypass them. No placement or enquiry-quality record. | Use one contact tracking component. Add source and placement. Link actual enquiries to a simple sales record. |
| Low | Identity, favicon, footer | Text logo and L-dot SVG already share the palette. Raster favicon consistency remains unverified. Footer has limited company context. | Refine spacing and small-size legibility. Add verified company information. No evidence justifies a full logo replacement. |
| Low | Privacy and error pages | Privacy retention is vague. Error page suggests WhatsApp but only gives retry and home buttons. Some copy contains em dashes. | State the actual retention process after confirmation. Add direct error recovery. Remove em dashes from text, alt text, and social copy during approved implementation. |

## 5. Research and market implications

Research supports principles. It does not establish LUXA's conversion rate or prove Nigerian restaurant buying behavior.

| Source | Finding or observed approach | LUXA decision |
| --- | --- | --- |
| [NN/g: trust factors](https://www.nngroup.com/articles/trustworthy-design/) | Trust relates to design quality, disclosure, complete current content, and external connections. | Show real work, clear company identity, scope, ownership, and costs together. |
| [CXL: value propositions](https://cxl.com/blog/types-value-propositions/) | Each requested action needs a reason to take it. | Explain the value of the review, not only the value of a website. |
| [Baymard: mobile labels](https://baymard.com/research-articles/mobile-forms-avoid-inline-labels) | Permanent labels avoid the problems caused by labels that disappear during entry. | Add visible field labels. Its ecommerce research does not supply a LUXA conversion forecast. |
| [Bumpa](https://www.getbumpa.com/) | Explains practical tasks and offers subscription website and business tools. | Explain when custom work earns its cost. Do not position a custom site as the only reasonable option. |
| [Chowdeck vendors](https://www.chowdeck.com/vendors) | Connects its service to reach and displays product screens. | Demonstrate the customer path. A LUXA website does not provide a delivery network or marketplace audience. |
| [eBrand restaurant services](https://ebrandpromotion.com/hospitality-tourism/website-online-marketing-solutions-for-restaurants/) | Uses a sector page, portfolio links, named testimonials, and a proposal path. Also makes broad growth promises. | Use specific evidence and clear services. Do not copy unsupported growth guarantees. |
| [SkyFig, Ilorin](https://skyfigtech.com.ng/web-design-and-development) | Search-visible service copy already offers clear, fast, responsive custom websites. Direct page fetch failed. | Those adjectives alone cannot distinguish LUXA. Compete through restaurant-specific scope and transparent delivery. |
| [Red Flames, Ilorin](https://redflames.ng/reservation) | Offers a reservation request form, but visible template filler and confusing time text remain. | Content accuracy and a usable request path are practical improvements. One example does not describe the whole market. |
| [Ramotion](https://www.ramotion.com/) | Explains specific contributions next to named work. | Explain what LUXA did on each project. Separate concepts from commissioned work. |
| [Metalab](https://www.metalab.com/) | Uses a short service statement and work-led presentation. | Keep the first explanation short. Do not copy interaction-heavy navigation for phone visitors. |

Local hypotheses: owners may value fewer repeated menu questions, a dependable menu link, directions, and easier catering enquiries. Likely concerns include cost, content updates, ownership, support, and whether their team can handle incoming requests. These are research questions, not observed objections. WhatsApp priority comes from the user's stated preference, not a national usage assumption.

Validate with five short owner interviews across the focus cities. Ask how customers find the menu, what questions staff repeat, who updates prices, what a missed enquiry means, and what would justify paying for a site. Do not infer budgets by city.

## 6. Recommended offer and funnel

Position: custom websites for single restaurants that need a clear place to show their menu and receive enquiries.

Proposed base scope for approval: menu, food photos, opening hours, directions, contact links, phone layout, and agreed handover. A menu editing system, reservation flow, basket, payments, and integrations require separate scope and delivery checks. Do not advertise unconfirmed functions as included.

| Order | Section | Purpose and treatment |
| --- | --- | --- |
| 1 | Clear offer | Business, audience, practical use, WhatsApp action, demonstration link. Dark brown surface. |
| 2 | Restaurant demonstration | Show menu to WhatsApp contact in a working concept. Wide cream section. Explain what the button does. |
| 3 | Three practical uses | Find the menu, plan a visit, send an enquiry. Use short examples rather than nine benefit cards. |
| 4 | Selected work | Two strongest verified projects, with role and status. Link to all four project pages. |
| 5 | Scope and price guidance | Explain inclusions, price drivers, exclusions, ownership, and maintenance. Use a comparison table or stacked rows. |
| 6 | Delivery process | Review, written quote, deposit, design approval, build and review, final payment and handover. State client content duties. |
| 7 | Buyer questions | Existing Instagram account, no website, updates, hosting costs, timeline, ownership, support. |
| 8 | Contact | WhatsApp first. Short form alternative. Explain review versus new-build quote and delivery by agreement. |
| 9 | Footer | Verified business name, service area, contact details, privacy, and existing social account. |

Outreach visitors need continuity with the message that brought them. Referral visitors need proof. Search visitors need service and location clarity. Use source tags and contextual WhatsApp messages before building separate campaign pages.

## 7. Proposed copy for approval

Hero label: “Websites for restaurants in Nigeria”

Headline: “Your menu, location and contact details. In one clear website.”

Supporting copy: “Luxa Web Studio builds websites for restaurants in Ilorin, Lagos and Abuja. Help customers browse your menu, find your restaurant and contact your team on WhatsApp.”

Primary action: “Discuss my restaurant”. Secondary action: “View restaurant demo”. Demo label: “Restaurant website concept. Not client work.”

Ownership line: “You own your website, domain, hosting account and content. One month of free maintenance is included.” Publish maintenance details only after scope is defined.

Review heading: “Find out what your restaurant needs.”

Review copy: “We review your restaurant's service and current online information. We explain where a website could help. If you need a new website, we prepare a quote based on the work required.”

Delivery copy: “We agree a review date with you on WhatsApp.” Do not publish an instant-delivery promise.

Price note: “Prices depend on the agreed scope. Your quote states the work, payment stages and recurring costs.” Retain current ranges as guidance unless the CEO changes them. Do not call ₦150,000 a fixed starting price without confirming that minimum.

WhatsApp opening message: “Hello Luxa. I would like to discuss a website for my restaurant.” This works for owners with and without a website.

## 8. Visual direction for approval

Recommended concept: cream-led editorial layout with dark brown opening and closing sections. Keep orange for actions and selected details. Use real interface views as the main imagery.

- Palette: dark brown `#100b08`, cream `#f7eddf`, orange `#ff8a2a`. Set darker text on cream. Check contrast before adopting new colour pairs.
- Typography: retain Plus Jakarta Sans for body and controls. Retain Instrument Serif for short accents. Use readable spacing and 16 px or larger form text. Avoid extremely tight word spacing.
- Layout: 1120 to 1200 px desktop content area; 20 to 24 px phone gutters; varied full-width sections. Use few card groups. Prefer straight content rows and clear comparisons.
- Identity: refine the existing wordmark and L-dot icon. Present any replacement logo separately before use.
- Imagery: show a restaurant interface, menu changes, and the enquiry path. Use owned or licensed images. Do not use client logos without permission.
- Motion: short focus, hover, menu, and disclosure transitions. Remove continuous glows and button shine. Preserve reduced-motion support.
- Phone view: short opening copy, one clear contact action, then the demonstration. Hide a fixed action when it would cover the form or repeat an action already in view.

Alternative: a darker, image-led composition. It retains more of the current mood but needs careful contrast and image loading. The cream-led option is the recommendation, based on design judgement.

Breathine: evaluate the [MJB Letters version and licence](https://www.myfonts.com/collections/breathine-font-mjb-letters). Several fonts share this name. Website embedding needs the appropriate webfont licence. Use, at most, a short decorative accent after a readability check. File weight and loading cost are unknown until the licensed files are available. Recommendation: keep Instrument Serif for the first design; compare Breathine later if desired.

## 9. Technical plan and measurement

Keep Next.js and existing routes. Split static sections into server components. Keep client code for navigation, form, disclosure, and event tracking. Preserve lead API and webhook integration unless a change is approved.

Use shared tokens and accessible button styles. Set correct font variables. Optimise screenshots through Next Image with accurate sizes and reserved dimensions. Load only necessary fonts and images. Check text and controls against [WCAG contrast requirements](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).

Targets, not current measurements: LCP at most 2.5 seconds, INP at most 200 milliseconds, CLS at most 0.1, at the 75th percentile. Use [Google's field and lab guidance](https://web.dev/articles/vitals). Lighthouse alone does not establish real-user INP.

Primary business conversion: a confirmed enquiry from a single-restaurant owner or authorised decision-maker with a relevant need and willingness to discuss scope and budget. Record enquiries, quotes, deposits, and project wins in a simple sales sheet.

Supporting events: `whatsapp_click`, `demo_open`, `form_start`, `lead_submitted`, `lead_failed`. Record placement and traffic source. Do not put names, telephone numbers, or message contents in analytics. Keep existing event names where their meaning remains correct. Deprecate `audit_click` only as part of the approved contact change.

A WhatsApp click is not a conversation or qualified enquiry. Form success is not a sale. Record the later steps manually until a reliable integration is justified. Agree data retention and update the privacy page to match actual practice.

Testing hypotheses:

- WhatsApp-first contact may increase useful conversations. Compare qualified enquiries per relevant visit and staff time, not clicks alone.
- Demonstration before extended benefits may improve understanding. Check whether owners can explain the offer and next step after a short visit.
- Clear costs and ownership may improve enquiry quality. Record questions about cost and ownership, plus quote acceptance.

Start with a measured baseline. With low traffic, use interviews and structured observation before an A/B test. Keep traffic sources separate. No promised uplift or fixed sample-size claim.

## 10. Implementation roadmap

| Stage | Priority | Work | Effort | Dependency |
| --- | --- | --- | --- | --- |
| 1 | Critical | Approve positioning, contact action, offer boundaries, copy, and visual direction. | Small | Owner review |
| 2 | Critical | Verify work status, maintenance scope, recurring costs, payment milestone, and delivery timeline. | Small | Business facts |
| 3 | High | Correct claims, remove calculator and popularity label, define offer and process. | Medium | Stages 1 and 2 |
| 4 | High | Build approved page sections and labelled restaurant demonstration. | Large | Approved copy, scope, and image rights |
| 5 | High | Correct contrast, fonts, domain metadata, form states, navigation, and API validation. | Medium | Approved implementation |
| 6 | High | Verify lead delivery and event recording. Add enquiry qualification records. | Medium | Webhook access and business follow-up |
| 7 | High | Test phone and desktop layouts, keyboard paths, failures, performance, and existing behavior. | Medium | Completed build |
| 8 | Optional | Breathine comparison, logo replacement, campaign pages, automated sales integration. | Variable | Evidence of need and separate identity approval |

Acceptance checks: no invented proof, no em dashes in application copy, correct links and unique metadata, visible labels, readable contrast, successful and failed form paths, reliable WhatsApp actions, reduced-motion support, no horizontal overflow at agreed widths, and measured performance results with stated limits.

## 11. Approval request

Approve or amend the cream-led direction, practical offer, WhatsApp primary action, demonstration secondary action, proposed page sequence, removal of unsupported claims, and technical corrections.

Unverified facts remain excluded from public claims. Detailed maintenance coverage, portfolio status, and a defined payment milestone must be resolved before those details are published. Approval of the strategy is required before implementation code changes.
