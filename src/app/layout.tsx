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

export const metadata: Metadata = {
  title: "VR Global Group",
  description:
    "We create architectural and creative solutions to help people realize their vision and make them a reality.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
