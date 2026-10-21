import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Dancing_Script, Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});
const accent = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: "500",
  display: "swap",
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
        url: "/icon-light-32x32.png?v=2",
        sizes: "32x32",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png?v=2",
        sizes: "32x32",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg?v=2",
        type: "image/svg+xml",
        sizes: "any",
      },
    ],
    apple: "/apple-icon.png?v=2",
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
      <body className={`${jakarta.variable} ${accent.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" &&
          process.env.VERCEL === "1" && <Analytics />}
      </body>
    </html>
  );
}
