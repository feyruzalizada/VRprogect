import type { Metadata, Viewport } from "next";
import { Exo_2, Raleway } from "next/font/google";

import { siteDescription, siteKeywords, siteName, siteTitle, siteUrl } from "@/lib/site";

import "./globals.css";

const display = Exo_2({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const ogImage = { url: "/images/og.jpg", width: 1200, height: 630, alt: siteTitle, type: "image/jpeg" };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteTitle, template: `%s | ${siteName}` },
  description: siteDescription,
  applicationName: siteName,
  keywords: siteKeywords,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "construction",
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined },
  openGraph: {
    type: "website",
    locale: "az_AZ",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="az" className={`${display.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
