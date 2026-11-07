import { contact } from "@/content/contact";
import { footer } from "@/content/footer";
import { heroCues } from "@/content/hero";
import { mainNav } from "@/content/navigation";
import { news as newsCopy } from "@/content/news";
import { partners, partnersHeading } from "@/content/partners";
import { quoteBanner } from "@/content/quote";
import { countersHeading, services as serviceCounters } from "@/content/services";
import { sideNav } from "@/content/sidenav";
import type { NewsItem } from "@/lib/news";
import type { ServicesData } from "@/lib/services";

export type SearchTarget = { section: string; service?: string; news?: string; panel?: string };

export type SearchItem = { kind: string; title: string; text: string; go: SearchTarget };

// everything the header search can find, built on the server from the same data the page renders
export function buildSearchIndex({ section, items: services }: ServicesData, news: NewsItem[]): SearchItem[] {
  // a section is also found by the copy around its cards
  const sectionText: Record<string, string> = {
    "#xidmetler": [section.eyebrow, section.heading, section.tagline, section.intro, section.disclaimer].filter(Boolean).join(" "),
    "#xeberler": [newsCopy.eyebrow, newsCopy.all].join(" "),
    "#ugurlar": countersHeading,
    "#kontaktlar": [footer.about, footer.copyright].join(" "),
  };
  const sections = mainNav
    .filter((item) => item.href.startsWith("#"))
    .map((item) => ({ kind: "Bölmə", title: item.label, text: sectionText[item.href] ?? "", go: { section: item.href } }));

  const hero = heroCues.map((cue) => ({
    kind: "Ana səhifə",
    title: cue.title,
    text: [cue.description, cue.trust].join(" "),
    go: { section: "main" },
  }));

  const quote = {
    kind: "Sitat",
    title: quoteBanner.quote,
    text: [quoteBanner.motto, quoteBanner.author.name, quoteBanner.author.role].join(" "),
    go: { section: "#sitat" },
  };

  const counters = serviceCounters.counters.map((c) => ({
    kind: countersHeading,
    title: c.label,
    text: `${c.value}${c.suffix ?? ""}`,
    go: { section: "#ugurlar" },
  }));

  const panels = [sideNav.intro, ...sideNav.links].map((link) => ({
    kind: "VR Standartları",
    title: link.label,
    text: link.body.map((block) => block.text).join(" "),
    go: { section: "#kitab", panel: link.id },
  }));

  const serviceItems = services.map((s) => ({
    kind: "Xidmət",
    title: s.title,
    text: [s.description, ...s.points.map((p) => [p.label, p.text].filter(Boolean).join(": ")), s.note ?? "", s.cta].join(" "),
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

  // what the card buttons offer, so "müraciət", "sifariş" or "zəng" lead somewhere useful
  const reach = [
    { kind: footer.contactHeading, title: "WhatsApp", text: `${contact.chooseLabel} Müraciət et, sifariş et — xidmət kartındakı düymə ilə`, go: { section: "#xidmetler" } },
    { kind: footer.contactHeading, title: contact.callLabel, text: `${contact.phone} Telefonla müraciət`, go: { section: "#kontaktlar" } },
  ];

  return [...sections, ...serviceItems, ...hero, quote, ...panels, ...newsItems, ...counters, ...partnerItems, ...contacts, ...reach];
}
