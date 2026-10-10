import type { Metadata } from "next";
import { Exo_2, Raleway } from "next/font/google";
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vr-project-umber.vercel.app";

const title = "VR Global Group";
const description =
  "We create architectural and creative solutions to help people realize their vision and make them a reality.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "az_AZ",
    url: "/",
    siteName: title,
    title,
    description,
    images: [{ url: "/images/hero-poster.jpg", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-poster.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="az" className={`${display.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
