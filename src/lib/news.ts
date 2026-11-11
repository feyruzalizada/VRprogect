import config from "@payload-config";
import { getPayload } from "payload";

import type { Lang } from "@/i18n/config";

export type NewsItem = {
  id: string;
  title: string;
  subtitle?: string;
  text: string;
  date: string;
  link?: string;
  source?: string;
  image?: { url: string; alt: string };
};

// the site the post came from, as a reader would name it: facebook.com, report.az
function sourceName(link: string) {
  try {
    return new URL(link).hostname.replace(/^(www|m|web)\./, "");
  } catch {
    return undefined;
  }
}

export async function getNews(lang: Lang = "az"): Promise<NewsItem[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "news",
    sort: "-date",
    limit: 8,
    depth: 1,
  });

  // an empty translation falls back to the Azerbaijani post
  return docs.map((doc) => {
    const title = (lang !== "az" && doc[lang]?.title) || doc.title;
    return {
      id: String(doc.id),
      title,
      subtitle: ((lang !== "az" && doc[lang]?.subtitle) || doc.subtitle) ?? undefined,
      text: (lang !== "az" && doc[lang]?.text) || doc.text,
      date: doc.date,
      link: doc.link ?? undefined,
      source: doc.link ? sourceName(doc.link) : undefined,
      // the media alt is written in Azerbaijani, so other languages describe the photo by the post title
      image:
        typeof doc.image === "object" && doc.image?.url
          ? {
              url: doc.image.url,
              alt: lang === "az" ? (doc.image.alt ?? "") : title,
            }
          : undefined,
    };
  });
}
