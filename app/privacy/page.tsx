import type { Metadata } from 'next'
import Link from 'next/link'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy | Luxa',
  description: 'How Luxa Web Studio collects, uses and protects the information you share through the free website audit form.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#100b08] px-5 py-10 text-[#fff6e9] sm:px-8">
      <div className="mx-auto max-w-3xl">
        <header className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-[-.06em]">
            luxa<span className="text-orange-300">.</span>
          </Link>
          <Link href="/" className="inline-flex min-h-11 items-center gap-2 text-sm text-[#cbb9aa] hover:text-white">
            Back home
          </Link>
        </header>

        <article className="prose-invert mt-16 pb-24">
          <p className="text-xs font-bold uppercase tracking-[.24em] text-orange-300">Your data</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Privacy Policy</h1>
          <p className="mt-6 leading-7 text-[#cbb9aa]">
            This policy explains how {site.legalName} handles the information you share with us. It applies to
            this website and the free website audit offer. By submitting the audit form or contacting us, you
            agree to the practices described here.
          </p>

          <section className="mt-12 space-y-4">
            <h2 className="text-2xl font-semibold">What we collect</h2>
            <p className="leading-7 text-[#cbb9aa]">
              When you request a free audit, we collect the details you provide: your restaurant name, your name,
              your WhatsApp number, and — if you choose to share them — your Instagram handle, city, whether you
              already have a website, and any message you add.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">How we use it</h2>
            <p className="leading-7 text-[#cbb9aa]">
              We use your information only to prepare and follow up on your audit, to answer your enquiry, and to
              contact you about the services you asked about. We do not sell your information.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">Where it is stored</h2>
            <p className="leading-7 text-[#cbb9aa]">
              Audit requests are delivered to a private spreadsheet we control, so our team can follow up. This
              website is hosted on Vercel, which may process basic, aggregated usage analytics. We keep your
              details only for as long as they are useful for the conversation you started.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">Your choices</h2>
            <p className="leading-7 text-[#cbb9aa]">
              You can ask us to update or delete the information we hold about you at any time. Just reach out
              using the contact details below and we will action your request.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-2xl font-semibold">Contact us</h2>
            <p className="leading-7 text-[#cbb9aa]">
              Questions about this policy? Email{' '}
              <a className="text-orange-300 hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>{' '}
              or message us on{' '}
              <a className="text-orange-300 hover:underline" href={`https://wa.me/${site.whatsapp}`}>
                WhatsApp
              </a>
              .
            </p>
          </section>

          <p className="mt-12 text-sm text-[#9d8a7b]">Last updated: 2026.</p>
        </article>
      </div>
    </main>
  )
}
