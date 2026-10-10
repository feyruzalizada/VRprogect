import config from "@payload-config";
import { getPayload } from "payload";

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

export async function getServices(): Promise<ServicesData> {
  const payload = await getPayload({ config });

  const [services, filters, section] = await Promise.all([
    payload.find({ collection: "services", sort: "_order", limit: 0, depth: 1 }),
    payload.find({ collection: "service-filters", sort: "_order", limit: 0, depth: 0 }),
    payload.findGlobal({ slug: "services-section" }),
  ]);

  return {
    section,
    items: services.docs.map((doc) => ({
      id: String(doc.id),
      title: doc.title,
      description: doc.description,
      points: (doc.points ?? []).map(({ label, text }) => ({ label, text })),
      note: doc.note,
      cta: doc.cta,
      video: fileUrl(doc.video),
      poster: fileUrl(doc.poster),
    })),
    filters: filters.docs.map((doc) => ({
      id: String(doc.id),
      label: doc.label,
      all: Boolean(doc.showAll),
      ids: (doc.services ?? []).map((s) => String(typeof s === "object" ? s.id : s)),
      empty: doc.empty,
    })),
  };
}
