import { heroSocial } from "@/content/hero";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.millistandart.az").replace(/\/$/, "");

export const siteName = "VR Global Group";

export const siteTitle = "VR Global Group — tikinti, təmir, audit və texniki nəzarət";

export const siteDescription =
  "Tikinti, təmir, ekspert audit və texniki nəzarət VR Standartları 2026 üzrə. Layihədən təhvilə hər mərhələ ölçülür və sənədlə təsdiqlənir. Bakı, Azərbaycan.";

export const siteKeywords = [
  "VR Global Group",
  "VR Standartları 2026",
  "tikinti",
  "təmir",
  "ekspert audit",
  "texniki nəzarət",
  "təmirə nəzarət",
  "tikinti auditi",
  "Bakı",
  "Azərbaycan",
];

export const sitePhone = "+994502005121";

// profile links without share/tracking params
export const siteSocial: string[] = [
  "https://www.facebook.com/vrprojectaz",
  ...heroSocial
    .filter((s) => s.id !== "facebook")
    .map((s) => {
      const u = new URL(s.href);
      return `${u.origin}${u.pathname}`.replace(/\/$/, "");
    }),
];
