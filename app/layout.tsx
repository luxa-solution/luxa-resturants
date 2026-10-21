import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Luxa Web Studio | Websites for Restaurants",
  description:
    "Custom websites for restaurants in Ilorin, Lagos and Abuja. Clear menus, location details and WhatsApp contact. Customer ownership and project-specific quotes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Luxa Web Studio | Websites for Restaurants",
    description:
      "Your menu, location and contact details. In one clear website.",
    url: site.url,
    siteName: site.legalName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxa Web Studio | Websites for Restaurants",
    description:
      "Your menu, location and contact details. In one clear website.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#100b08",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${instrument.variable} antialiased`}
      >
        {children}
        {process.env.NODE_ENV === "production" && process.env.VERCEL === "1" && <Analytics />}
      </body>
    </html>
  );
}
