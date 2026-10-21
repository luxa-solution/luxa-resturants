import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { projects } from "@/lib/projects";
import { packages } from "@/lib/offerings";
import { faqs } from "@/lib/faqs";
import { site } from "@/lib/site";
import ContactLink from "@/components/contact-link";
import SiteHeader from "@/components/site-header";
import RestaurantDemo from "@/components/restaurant-demo";
import LeadForm from "@/components/lead-form";

const uses = [
  [
    "A menu they can find.",
    "Give customers a clear place to see your dishes and prices. Share the same link from Instagram, WhatsApp and your Google Business Profile.",
  ],
  [
    "A visit they can plan.",
    "Put your location, opening hours and contact details together. Help customers check the details before they set out.",
  ],
  [
    "A conversation they can start.",
    "Let customers contact your team from the page. Discuss an order, a table or a catering enquiry through your existing WhatsApp number.",
  ],
];
const steps = [
  [
    "Review & quote",
    "We discuss your restaurant and current online information. You receive a quote with the scope, costs and payment stages.",
  ],
  [
    "Design & agree",
    "You share your menu, photos and brand details. We present the design for review before the full build.",
  ],
  [
    "Build & review",
    "We build the agreed pages and functions. You review the website before handover. Delivery dates are agreed for your project.",
  ],
  [
    "Launch & handover",
    "We complete the agreed launch and handover. You own the website and accounts. One month of free maintenance is included.",
  ],
];

export default function LuxaHome() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section id="intro" className="hero dark-surface">
          <div className="container hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" /> Websites for restaurants in
                Nigeria
              </p>
              <h1>
                Your menu.
                <br />
                Your restaurant.
                <br />
                <span className="editorial orange-text">
                  One clear website.
                </span>
              </h1>
              <p className="hero-description">
                Help customers browse your menu, find your restaurant and
                contact your team on WhatsApp.
              </p>
              <div className="action-row">
                <ContactLink placement="hero" className="button button-orange">
                  Discuss my restaurant <ArrowUpRight size={18} />
                </ContactLink>
                <a className="text-link light-link" href="#demo">
                  View restaurant demo <ArrowDown size={16} />
                </a>
              </div>
              <p className="hero-location">
                <MapPin size={14} /> Ilorin, Lagos, Abuja. Built by Luxa Web
                Studio.
              </p>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrap">
                <Image
                  src="/images/restaurant-dining.webp"
                  alt="A restaurant dining space with tables set for guests"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(min-width: 1296px) 502px, (min-width: 640px) 42vw, calc(100vw - 40px)"
                  className="hero-image"
                />
                <div className="hero-image-caption">
                  <span>Good food deserves</span>
                  <span className="editorial">a clear way to find it.</span>
                </div>
              </div>
              <div className="hero-note">
                <span className="note-number">01 /</span>
                <p>
                  A website shaped around
                  <br />
                  how your restaurant works.
                </p>
                <ArrowDown size={20} />
              </div>
            </div>
          </div>
          <div className="container hero-bottom">
            <span>Custom design. Clear scope. Your ownership.</span>
            <a
              href="#demo"
              aria-label="Explore the restaurant website demonstration"
            >
              <ArrowDown size={18} />
            </a>
          </div>
        </section>
        <section id="demo" className="section demo-section">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">01 / See the idea</p>
                <h2>
                  Show the food.
                  <br />
                  <span className="editorial">Make the next step clear.</span>
                </h2>
              </div>
              <p>
                A menu, useful details and a direct contact link. Explore this
                example of a restaurant website.
              </p>
            </div>
            <RestaurantDemo />
          </div>
        </section>
        <section id="why" className="section uses-section">
          <div className="container uses-layout">
            <div className="section-heading">
              <p className="eyebrow">02 / Built for the everyday</p>
              <h2>
                Less searching.
                <br />
                <span className="editorial">Clearer decisions.</span>
              </h2>
              <p>
                Your Instagram page starts a conversation. Your website gives
                customers a place to check the details.
              </p>
            </div>
            <div className="uses-list">
              {uses.map(([title, copy], i) => (
                <article className="use-row" key={title}>
                  <span className="row-number">0{i + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="work" className="section work-section">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">03 / Selected work</p>
                <h2>
                  Different businesses.
                  <br />
                  <span className="editorial">Care in every detail.</span>
                </h2>
              </div>
              <p>
                Websites from education and consultancy. These examples show our
                design and development work, not restaurant sales results.
              </p>
            </div>
            <div className="featured-work">
              {projects.slice(0, 2).map((project, i) => (
                <Link
                  href={`/projects/${project.slug}`}
                  className="work-item"
                  key={project.slug}
                >
                  <div className="work-image">
                    <Image
                      src={project.images[0]}
                      alt={`${project.title} website preview`}
                      fill
                      sizes="(min-width: 800px) 46vw, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="work-meta">
                    <div>
                      <p className="eyebrow">{project.category}</p>
                      <h3>{i === 0 ? "Markazul Bayaan" : project.title}</h3>
                    </div>
                    <span className="round-arrow">
                      <ArrowUpRight size={22} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="more-work">
              <span>More from the studio</span>
              {projects.slice(2).map((project) => (
                <Link key={project.slug} href={`/projects/${project.slug}`}>
                  {project.title}
                  <span>{project.status}</span>
                  <ArrowUpRight size={16} />
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section id="packages" className="section scope-section dark-surface">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">04 / Scope & cost</p>
                <h2>
                  The right website.
                  <br />
                  <span className="editorial orange-text">
                    A clear agreement.
                  </span>
                </h2>
              </div>
              <p>
                Prices depend on the work required. These ranges are guidance.
                Your written quote sets out the pages, functions and costs.
              </p>
            </div>
            <div className="package-list">
              {packages.map((pkg, i) => (
                <article key={pkg.name} className="package-row">
                  <span className="row-number">0{i + 1}</span>
                  <div>
                    <h3>{pkg.name}</h3>
                    <p>{pkg.blurb}</p>
                  </div>
                  <ul>
                    {pkg.features.map((feature) => (
                      <li key={feature}>
                        <Check size={14} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="package-price">
                    {pkg.price}
                    <span>Scope agreed before work starts</span>
                  </p>
                </article>
              ))}
            </div>
            <p className="scope-note">
              Menu editing, reservation requests, online payments and other
              integrations require a separate scope check. We confirm what is
              included before you commit.
            </p>
            <div className="ownership-strip">
              <div>
                <p className="eyebrow">Yours from the start</p>
                <h3>
                  Your website.
                  <br />
                  Your accounts. Your content.
                </h3>
              </div>
              <div>
                <p>
                  You own the domain, hosting account, source code and content.
                  One month of free website maintenance is included.
                </p>
                <p>
                  Your quote states recurring costs and maintenance coverage.
                  Further support is agreed separately.
                </p>
                <ContactLink placement="scope" className="text-link light-link">
                  Discuss the scope <ArrowUpRight size={17} />
                </ContactLink>
              </div>
            </div>
          </div>
        </section>
        <section id="process" className="section process-section">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">05 / From first chat to handover</p>
                <h2>
                  Know what happens
                  <br />
                  <span className="editorial">before you begin.</span>
                </h2>
              </div>
              <p>
                A written scope. A design to review. Clear payment stages. A
                handover to your team.
              </p>
            </div>
            <div className="process-grid">
              {steps.map(([title, copy], i) => (
                <article key={title}>
                  <span className="step-number">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
            <div className="payment-note">
              <span className="eyebrow">Payment stages</span>
              <p>
                <strong>40%</strong> upfront <span>/</span> <strong>48%</strong>{" "}
                at the agreed progress milestone <span>/</span>{" "}
                <strong>12%</strong> after project submission.
              </p>
              <p>
                Your quote defines the progress milestone and handover terms.
              </p>
            </div>
          </div>
        </section>
        <section id="faq" className="section faq-section">
          <div className="container faq-layout">
            <div className="section-heading">
              <p className="eyebrow">06 / Before you decide</p>
              <h2>
                Good questions.
                <br />
                <span className="editorial">Clear answers.</span>
              </h2>
              <p>Need a detail that is not covered here?</p>
              <ContactLink placement="faq" className="text-link">
                Ask us on WhatsApp <ArrowUpRight size={17} />
              </ContactLink>
            </div>
            <div className="faq-list">
              {faqs.map(({ question, answer }) => (
                <details key={question}>
                  <summary>
                    {question}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section id="audit" className="section contact-section dark-surface">
          <div className="container contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">07 / Your restaurant, next</p>
              <h2>
                Let’s start with
                <br />
                <span className="editorial orange-text">your restaurant.</span>
              </h2>
              <p>
                Tell us about your restaurant and what you need. We review your
                service and current online information, then explain where a
                website could help.
              </p>
              <p>
                No website yet? We can prepare a quote for a new one. We agree
                the review date with you on WhatsApp.
              </p>
              <ContactLink placement="contact" className="button button-orange">
                <MessageCircle size={18} /> Discuss my restaurant{" "}
                <ArrowUpRight size={18} />
              </ContactLink>
              <span className="contact-small">
                The review is free. Project work starts after you accept a
                quote.
              </span>
            </div>
            <LeadForm />
          </div>
        </section>
      </main>
      <footer className="site-footer dark-surface">
        <div className="container footer-top">
          <div>
            <Link
              href="/"
              className="wordmark"
              aria-label="Luxa Web Studio home"
            >
              luxa<span>.</span>
            </Link>
            <p>
              Websites for restaurants.
              <br />
              Ilorin. Lagos. Abuja.
            </p>
          </div>
          <div className="footer-links">
            <ContactLink placement="footer">
              WhatsApp <ArrowUpRight size={14} />
            </ContactLink>
            <a href={`mailto:${site.email}`}>
              Email <ArrowUpRight size={14} />
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              Instagram <ArrowUpRight size={14} />
            </a>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.legalName}
          </span>
          <span>Clear websites. Considered work.</span>
        </div>
      </footer>
    </>
  );
}
