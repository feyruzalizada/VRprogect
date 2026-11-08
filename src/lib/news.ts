import config from "@payload-config";
import { getPayload } from "payload";

import type { Lang } from "@/i18n/config";

export type NewsItem = {
  id: string;
  title: string;
  text: string;
  date: string;
  link?: string;
  image?: { url: string; alt: string };
};

export async function getNews(lang: Lang = "az"): Promise<NewsItem[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: "news", sort: "-date", limit: 8, depth: 1 });

  // an empty translation falls back to the Azerbaijani post
  return docs.map((doc) => ({
    id: String(doc.id),
    title: (lang !== "az" && doc[lang]?.title) || doc.title,
    text: (lang !== "az" && doc[lang]?.text) || doc.text,
    date: doc.date,
    link: doc.link ?? undefined,
    image: typeof doc.image === "object" && doc.image?.url ? { url: doc.image.url, alt: doc.image.alt ?? "" } : undefined,
  }));
}
