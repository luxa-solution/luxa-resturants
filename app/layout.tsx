import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Plus_Jakarta_Sans } from 'next/font/google'
import { site } from '@/lib/site'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' })
const instrument = Instrument_Serif({ subsets: ['latin'], variable: '--font-instrument', weight: '400' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: 'Luxa | Premium Websites for Growing Restaurants',
  description: 'Beautiful, fast websites for restaurants in Abuja, Lagos and Ilorin. Built for conversion with menus, WhatsApp ordering, reservations and Google visibility.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Luxa | Websites for Growing Restaurants',
    description: 'Built for restaurants that are already growing.',
    url: site.url,
    siteName: site.legalName,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxa | Websites for Growing Restaurants',
    description: 'Built for restaurants that are already growing.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [{ media: '(prefers-color-scheme: dark)', color: '#ff8a2a' }],
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} ${instrument.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
