import type { Metadata, Viewport } from "next";
import { Exo_2, Raleway } from "next/font/google";

import { getContent } from "@/content/i18n";
import { langHome, langs, ogLocale, type Lang } from "@/i18n/config";
import { siteName, siteUrl } from "@/lib/site";

import "./globals.css";

// cyrillic for the Russian page; browsers fetch only the ranges a page uses
const display = Exo_2({
  variable: "--font-display",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});

export function siteMetadata(lang: Lang): Metadata {
  const { title, description, keywords } = getContent(lang).meta;
  const ogImage = { url: "/images/og.jpg", width: 1200, height: 630, alt: title, type: "image/jpeg" };

  return {
    metadataBase: new URL(siteUrl),
    title: { default: title, template: `%s | ${siteName}` },
    description,
    applicationName: siteName,
    keywords,
    authors: [{ name: siteName, url: siteUrl }],
    creator: siteName,
    publisher: siteName,
    category: "construction",
    alternates: {
      canonical: langHome[lang],
      languages: { ...Object.fromEntries(langs.map((l) => [l, langHome[l]])), "x-default": "/" },
    },
    formatDetection: { telephone: false, email: false, address: false },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined },
    openGraph: {
      type: "website",
      locale: ogLocale[lang],
      alternateLocale: langs.filter((l) => l !== lang).map((l) => ogLocale[l]),
      url: langHome[lang],
      siteName,
      title,
      description,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export const siteViewport: Viewport = {
  themeColor: "#1a1a1a",
  colorScheme: "light",
};

export default function SiteDocument({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${display.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
