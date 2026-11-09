import { contact as contactInfo } from "@/content/contact";
import type { SiteContent } from "@/content/i18n/types";
import { partners } from "@/content/partners";
import { services as serviceCounters } from "@/content/services";
import type { NewsItem } from "@/lib/news";
import type { ServicesData } from "@/lib/services";

export type SearchTarget = { section: string; service?: string; news?: string; panel?: string };

export type SearchItem = { kind: string; title: string; text: string; go: SearchTarget };

// everything the header search can find, built on the server from the same data the page renders
export function buildSearchIndex({ section, items: services }: ServicesData, news: NewsItem[], c: SiteContent): SearchItem[] {
  const k = c.ui.search.kinds;

  // a section is also found by the copy around its cards
  const sectionText: Record<string, string> = {
    "#xidmetler": [section.eyebrow, section.heading, section.tagline, section.intro, section.disclaimer].filter(Boolean).join(" "),
    "#xeberler": [c.news.eyebrow, c.news.all].join(" "),
    "#kalkulyator": [c.calc.heading, c.calc.heightLabel, ...Object.values(c.calc.elements).map((e) => e.title)].join(" "),
    "#ugurlar": c.countersHeading,
    "#kontaktlar": [c.footer.about, c.footer.copyright].join(" "),
  };
  const sections = c.mainNav
    .filter((item) => item.href.startsWith("#"))
    .map((item) => ({ kind: k.section, title: item.label, text: sectionText[item.href] ?? "", go: { section: item.href } }));

  const hero = c.hero.map((cue) => ({
    kind: k.home,
    title: cue.title,
    text: [cue.description, cue.trust].join(" "),
    go: { section: "main" },
  }));

  const quote = {
    kind: k.quote,
    title: c.quote.quote,
    text: [c.quote.motto, c.quote.name, c.quote.role].join(" "),
    go: { section: "#sitat" },
  };

  const counters = serviceCounters.counters.map((counter, i) => ({
    kind: c.countersHeading,
    title: c.counters[i]?.label ?? counter.label,
    text: `${counter.value}${c.counters[i]?.suffix ?? counter.suffix ?? ""}`,
    go: { section: "#ugurlar" },
  }));

  const panels = [c.sideNav.intro, ...c.sideNav.links].map((link) => ({
    kind: k.panel,
    title: link.label,
    text: link.body.map((block) => block.text).join(" "),
    go: { section: "#kitab", panel: link.id },
  }));

  const serviceItems = services.map((s) => ({
    kind: k.service,
    title: s.title,
    text: [s.description, ...s.points.map((p) => [p.label, p.text].filter(Boolean).join(": ")), s.note ?? "", s.cta].join(" "),
    go: { section: "#xidmetler", service: s.id },
  }));

  const newsItems = news.map((n) => ({
    kind: k.news,
    title: n.title,
    text: n.text,
    go: { section: "#xeberler", news: n.id },
  }));

  const partnerItems = partners.map((p) => ({
    kind: c.partnersHeading,
    title: p.name,
    text: "",
    go: { section: "#partnyorlar" },
  }));

  const contacts = c.footer.contacts.map((item) => ({
    kind: c.footer.contactHeading,
    title: item.label,
    text: item.value,
    go: { section: "#kontaktlar" },
  }));

  // what the card buttons offer, so a search for a request, an order or a call leads somewhere useful
  const reach = [
    { kind: c.footer.contactHeading, title: "WhatsApp", text: `${c.contact.chooseLabel} ${c.ui.search.whatsapp}`, go: { section: "#xidmetler" } },
    { kind: c.footer.contactHeading, title: c.contact.callLabel, text: `${contactInfo.phone} ${c.ui.search.call}`, go: { section: "#kontaktlar" } },
  ];

  return [...sections, ...serviceItems, ...hero, quote, ...panels, ...newsItems, ...counters, ...partnerItems, ...contacts, ...reach];
}
