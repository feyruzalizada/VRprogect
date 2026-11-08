import config from "@payload-config";
import { getPayload } from "payload";

import type { Lang } from "@/i18n/config";
import type { Media } from "@/payload-types";

export type ServicePoint = { label?: string | null; text: string };

export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  points: ServicePoint[];
  note?: string | null;
  cta: string;
  video?: string;
  poster?: string;
};

export type ServiceFilter = {
  id: string;
  label: string;
  all: boolean;
  ids: string[];
  empty?: string | null;
};

export type ServicesSection = {
  eyebrow: string;
  heading: string;
  tagline?: string | null;
  intro?: string | null;
  filterLabel?: string | null;
  moreLabel?: string | null;
  lessLabel?: string | null;
  disclaimer?: string | null;
};

export type ServicesData = { section: ServicesSection; items: ServiceCard[]; filters: ServiceFilter[] };

function fileUrl(file: number | Media | null | undefined) {
  return typeof file === "object" && file?.url ? file.url : undefined;
}

// a translation shows where it was written; anything left empty falls back to the Azerbaijani text
function pick<T>(az: T, tr: T | null | undefined): T {
  if (tr === null || tr === undefined || tr === "") return az;
  if (Array.isArray(tr) && tr.length === 0) return az;
  return tr;
}

export async function getServices(lang: Lang = "az"): Promise<ServicesData> {
  const payload = await getPayload({ config });

  const [services, filters, sectionDoc] = await Promise.all([
    payload.find({ collection: "services", sort: "_order", limit: 0, depth: 1 }),
    payload.find({ collection: "service-filters", sort: "_order", limit: 0, depth: 0 }),
    payload.findGlobal({ slug: "services-section" }),
  ]);

  const sec = lang === "az" ? undefined : sectionDoc[lang];
  const section: ServicesSection = {
    eyebrow: pick(sectionDoc.eyebrow, sec?.eyebrow),
    heading: pick(sectionDoc.heading, sec?.heading),
    tagline: pick(sectionDoc.tagline, sec?.tagline),
    intro: pick(sectionDoc.intro, sec?.intro),
    filterLabel: pick(sectionDoc.filterLabel, sec?.filterLabel),
    moreLabel: pick(sectionDoc.moreLabel, sec?.moreLabel),
    lessLabel: pick(sectionDoc.lessLabel, sec?.lessLabel),
    disclaimer: pick(sectionDoc.disclaimer, sec?.disclaimer),
  };

  return {
    section,
    items: services.docs.map((doc) => {
      const tr = lang === "az" ? undefined : doc[lang];
      const points = pick(doc.points ?? [], tr?.points?.filter((p) => p.text));
      return {
        id: String(doc.id),
        title: pick(doc.title, tr?.title),
        description: pick(doc.description, tr?.description),
        points: points.map(({ label, text }) => ({ label, text: text ?? "" })),
        note: pick(doc.note, tr?.note),
        cta: pick(doc.cta, tr?.cta),
        video: fileUrl(doc.video),
        poster: fileUrl(doc.poster),
      };
    }),
    filters: filters.docs.map((doc) => {
      const tr = lang === "az" ? undefined : doc[lang];
      return {
        id: String(doc.id),
        label: pick(doc.label, tr?.label),
        all: Boolean(doc.showAll),
        ids: (doc.services ?? []).map((s) => String(typeof s === "object" ? s.id : s)),
        empty: pick(doc.empty, tr?.empty),
      };
    }),
  };
}
