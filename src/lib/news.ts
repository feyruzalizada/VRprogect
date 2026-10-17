import config from "@payload-config";
import { getPayload } from "payload";

export type NewsItem = {
  id: string;
  title: string;
  text: string;
  date: string;
  link?: string;
  image?: { url: string; alt: string };
};

export async function getNews(): Promise<NewsItem[]> {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: "news", sort: "-date", limit: 8, depth: 1 });

  return docs.map((doc) => ({
    id: String(doc.id),
    title: doc.title,
    text: doc.text,
    date: doc.date,
    link: doc.link ?? undefined,
    image: typeof doc.image === "object" && doc.image?.url ? { url: doc.image.url, alt: doc.image.alt ?? "" } : undefined,
  }));
}
