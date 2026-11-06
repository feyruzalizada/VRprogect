import config from "@payload-config";
import type { MetadataRoute } from "next";
import { getPayload } from "payload";

import { siteUrl } from "@/lib/site";

export const revalidate = 3600;

async function lastChange() {
  try {
    const payload = await getPayload({ config });
    const latest = await Promise.all(
      (["services", "news"] as const).map((collection) =>
        payload.find({ collection, sort: "-updatedAt", limit: 1, depth: 0, pagination: false }),
      ),
    );
    const dates = latest.flatMap((r) => r.docs.map((d) => new Date(d.updatedAt).getTime()));
    return dates.length ? new Date(Math.max(...dates)) : new Date();
  } catch {
    return new Date();
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: await lastChange(),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteUrl}/images/og.jpg`],
    },
  ];
}
