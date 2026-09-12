import type { Metadata } from "next";
import { Titillium_Web, Raleway } from "next/font/google";
import "./globals.css";

const titillium = Titillium_Web({
  variable: "--font-titillium",
  subsets: ["latin"],
  weight: ["200", "400", "600", "900"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VR Global Group",
  description:
    "We create architectural and creative solutions to help people realize their vision and make them a reality.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${titillium.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
