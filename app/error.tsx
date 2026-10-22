"use client";
import Link from "next/link";
import ContactLink from "@/components/contact-link";
export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="recovery-page">
      <p className="eyebrow">Page error</p>
      <h1>This page could not load.</h1>
      <p>Try again. If the problem continues, contact Luxa on WhatsApp.</p>
      <div className="action-row">
        <button type="button" onClick={reset} className="button button-brown">
          Try again
        </button>
        <ContactLink placement="error" className="text-link">
          Contact us on WhatsApp
        </ContactLink>
        <Link href="/" className="text-link">
          Back home
        </Link>
      </div>
    </main>
  );
}
