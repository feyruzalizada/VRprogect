import type { MigrateDownArgs, MigrateUpArgs } from "@payloadcms/db-postgres";

import { renameVrStandards } from "../migrations-data/vr-standards-names";

// The English and Russian copy written by translation_copy kept the book's Azerbaijani name;
// this swaps it for "VR Standards 2026" / «VR Стандарты 2026» in those two languages only.
type Lang = "en" | "ru";

function renamed<T>(value: T, lang: Lang): T {
  if (typeof value === "string") return renameVrStandards(value, lang) as T;
  if (Array.isArray(value)) return value.map((v) => renamed(v, lang)) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, k === "id" ? v : renamed(v, lang)])) as T;
  }
  return value;
}

function changes(doc: Record<string, unknown>) {
  const data: Partial<Record<Lang, unknown>> = {};
  for (const lang of ["en", "ru"] as const) {
    const next = renamed(doc[lang], lang);
    if (JSON.stringify(next) !== JSON.stringify(doc[lang])) data[lang] = next;
  }
  return Object.keys(data).length ? data : undefined;
}

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  for (const collection of ["services", "service-filters", "news"] as const) {
    const { docs } = await payload.find({ collection, limit: 0, depth: 0, req });
    for (const doc of docs) {
      const data = changes(doc as unknown as Record<string, unknown>);
      if (data) {
        await payload.update({ collection, id: doc.id, data: data as never, req, depth: 0 });
        payload.logger.info(`vr_standards_names: ${collection} ${doc.id} updated`);
      }
    }
  }
  const section = await payload.findGlobal({ slug: "services-section", depth: 0, req });
  const data = changes(section as unknown as Record<string, unknown>);
  if (data) await payload.updateGlobal({ slug: "services-section", data: data as never, req, depth: 0 });
}

export async function down(_args: MigrateDownArgs): Promise<void> {}
