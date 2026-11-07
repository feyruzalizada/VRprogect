import { footer } from "@/content/footer";
import { mainNav } from "@/content/navigation";
import { partners, partnersHeading } from "@/content/partners";
import { sideNav } from "@/content/sidenav";
import type { NewsItem } from "@/lib/news";
import type { ServiceCard } from "@/lib/services";

export type SearchTarget = { section: string; service?: string; news?: string; panel?: string };

export type SearchItem = { kind: string; title: string; text: string; go: SearchTarget };

// everything the header search can find, built on the server from the same data the page renders
export function buildSearchIndex(services: ServiceCard[], news: NewsItem[]): SearchItem[] {
  const sections = mainNav
    .filter((item) => item.href.startsWith("#"))
    .map((item) => ({ kind: "Bölmə", title: item.label, text: "", go: { section: item.href } }));

  const panels = [sideNav.intro, ...sideNav.links].map((link) => ({
    kind: "VR Standartları",
    title: link.label,
    text: link.body.map((block) => block.text).join(" "),
    go: { section: "#kitab", panel: link.id },
  }));

  const serviceItems = services.map((s) => ({
    kind: "Xidmət",
    title: s.title,
    text: [s.description, ...s.points.map((p) => [p.label, p.text].filter(Boolean).join(": ")), s.note ?? ""].join(" "),
    go: { section: "#xidmetler", service: s.id },
  }));

  const newsItems = news.map((n) => ({
    kind: "Xəbər",
    title: n.title,
    text: n.text,
    go: { section: "#xeberler", news: n.id },
  }));

  const partnerItems = partners.map((p) => ({
    kind: partnersHeading,
    title: p.name,
    text: "",
    go: { section: "#partnyorlar" },
  }));

  const contacts = footer.contacts.map((c) => ({
    kind: footer.contactHeading,
    title: c.label,
    text: c.value,
    go: { section: "#kontaktlar" },
  }));

  return [...sections, ...serviceItems, ...panels, ...newsItems, ...partnerItems, ...contacts];
}
