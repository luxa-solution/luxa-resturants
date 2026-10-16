'use client'

import Link from 'next/link'

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#100b08] px-5 text-center text-[#fff6e9]">
      <p className="text-xs font-bold uppercase tracking-[.24em] text-orange-300">Something went wrong</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">
        That didn&apos;t load as expected.
      </h1>
      <p className="mt-4 max-w-md leading-7 text-[#cbb9aa]">
        Please try again. If it keeps happening, reach us on WhatsApp and we&apos;ll sort it out.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ffb347] to-[#ff7a1a] px-5 py-3 text-sm font-semibold text-[#1a0e08]"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/8 px-5 py-3 text-sm font-semibold text-[#fff6e9]"
        >
          Back home
        </Link>
      </div>
    </main>
  )
}
