import Link from "next/link";
import ContactLink from "@/components/contact-link";
export default function NotFound() {
  return (
    <main className="recovery-page">
      <p className="eyebrow">404 / Page not found</p>
      <h1>We could not find this page.</h1>
      <p>Check the address or return to the restaurant website page.</p>
      <div className="action-row">
        <Link href="/" className="button button-brown">
          Back home
        </Link>
        <ContactLink placement="not-found" className="text-link">
          Contact Luxa
        </ContactLink>
      </div>
    </main>
  );
}
