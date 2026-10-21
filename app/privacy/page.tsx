import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site } from "@/lib/site";
import ContactLink from "@/components/contact-link";

export const metadata: Metadata = {
  title: "Privacy Policy | Luxa",
  description:
    "How Luxa Web Studio handles restaurant website enquiries and website usage information.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Luxa",
    description:
      "How Luxa Web Studio handles enquiries and website usage information.",
    url: "/privacy",
  },
};
export default function PrivacyPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header dark-surface">
        <div className="container header-inner">
          <Link href="/" className="wordmark" aria-label="Luxa Web Studio home">
            luxa<span>.</span>
          </Link>
          <Link href="/" className="header-contact">
            <ArrowLeft size={16} /> Back home
          </Link>
        </div>
      </header>
      <main id="main-content" className="privacy-page container">
        <p className="eyebrow">Your information</p>
        <h1>Privacy Policy</h1>
        <p>
          This policy explains how {site.legalName} handles the information you
          share through this website and our enquiry channels.
        </p>
        <section>
          <h2>What we collect</h2>
          <p>
            The enquiry form asks for your restaurant name, your name and your
            WhatsApp number. You may also provide a website or Instagram link,
            city, current website status and a message.
          </p>
        </section>
        <section>
          <h2>How we use it</h2>
          <p>
            We use these details to reply, review your needs and discuss the
            services you ask about. We do not sell your information.
          </p>
        </section>
        <section>
          <h2>Where enquiries go</h2>
          <p>
            Form submissions are sent through our lead service to a private
            spreadsheet for follow-up. If you choose WhatsApp, your conversation
            takes place on WhatsApp and is also subject to its privacy policy.
          </p>
        </section>
        <section>
          <h2>Website usage information</h2>
          <p>
            This website uses Vercel hosting and Vercel Analytics in production.
            We record page visits and actions such as contact clicks,
            demonstration use and form submission results. Events can include
            the page location and campaign source. We do not add your form
            answers, name, telephone number or message to these analytics
            events.
          </p>
        </section>
        <section>
          <h2>Keeping and removing information</h2>
          <p>
            We retain enquiry details for follow-up and service discussions. You
            can ask us to correct or delete the details we hold by using the
            contact information below.
          </p>
        </section>
        <section>
          <h2>Contact us</h2>
          <p>
            Email <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
            <ContactLink placement="privacy">
              contact us on WhatsApp
            </ContactLink>{" "}
            about your information.
          </p>
        </section>
        <p className="privacy-date">Last updated: 21 October 2026.</p>
      </main>
    </>
  );
}
