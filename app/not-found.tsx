import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#100b08] px-5 text-center text-[#fff6e9]">
      <p className="text-xs font-bold uppercase tracking-[.24em] text-orange-300">404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">
        This page moved off the menu.
      </h1>
      <p className="mt-4 max-w-md leading-7 text-[#cbb9aa]">
        The page you are looking for is not here. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#ffb347] to-[#ff7a1a] px-5 py-3 text-sm font-semibold text-[#1a0e08]"
      >
        Back home
      </Link>
    </main>
  )
}
