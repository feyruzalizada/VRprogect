import type { MigrateDownArgs, MigrateUpArgs } from "@payloadcms/db-postgres";

import { filterTranslations, sectionTranslations, serviceTranslations } from "../migrations-data/translations-2026-11-08";
import { newsTranslations } from "../migrations-data/translations-news-2026-11-08";

// Fills the new English and Russian fields with the reviewed translations.
// A document is touched only when its Azerbaijani title still matches the one that was translated,
// and only fields that are still empty are written, so anything already typed in the admin is never overwritten.
type Lang = "en" | "ru";
const isEmpty = (v: unknown) => v === null || v === undefined || v === "" || (Array.isArray(v) && v.length === 0);

// the translation for the fields still empty in the document, or nothing when every field is taken
function missing<T extends object>(current: unknown, translation: T): T | undefined {
  const have = (current ?? {}) as Record<string, unknown>;
  const out: Record<string, unknown> = { ...have };
  let changed = false;
  for (const [key, value] of Object.entries(translation)) {
    if (isEmpty(have[key]) && !isEmpty(value)) {
      out[key] = value;
      changed = true;
    }
  }
  return changed ? (out as T) : undefined;
}

export async function up({ payload, req }: MigrateUpArgs): Promise<void> {
  const log = (msg: string) => payload.logger.info(`translation_copy: ${msg}`);

  for (const t of serviceTranslations) {
    const doc = await payload.findByID({ collection: "services", id: t.id, depth: 0, req, disableErrors: true });
    if (!doc || doc.title !== t.az) {
      log(`service ${t.id} skipped (title differs)`);
      continue;
    }
    const data: Partial<Record<Lang, (typeof t)[Lang]>> = {};
    for (const lang of ["en", "ru"] as const) {
      const add = missing(doc[lang], t[lang]);
      if (add) data[lang] = add;
    }
    if (Object.keys(data).length) await payload.update({ collection: "services", id: t.id, data, req, depth: 0 });
  }

  const filters = await payload.find({ collection: "service-filters", limit: 0, depth: 0, req });
  for (const doc of filters.docs) {
    const t = filterTranslations.find((f) => f.az === doc.label);
    if (!t) {
      log(`filter ${doc.id} skipped (no translation for its label)`);
      continue;
    }
    const data: Partial<Record<Lang, (typeof t)[Lang]>> = {};
    for (const lang of ["en", "ru"] as const) {
      const add = missing(doc[lang], t[lang]);
      if (add) data[lang] = add;
    }
    if (Object.keys(data).length) await payload.update({ collection: "service-filters", id: doc.id, data, req, depth: 0 });
  }

  const section = await payload.findGlobal({ slug: "services-section", depth: 0, req });
  if (section.heading === sectionTranslations.azHeading) {
    const data: Partial<Record<Lang, (typeof sectionTranslations)[Lang]>> = {};
    for (const lang of ["en", "ru"] as const) {
      const add = missing(section[lang], sectionTranslations[lang]);
      if (add) data[lang] = add;
    }
    if (Object.keys(data).length) await payload.updateGlobal({ slug: "services-section", data, req, depth: 0 });
  } else log("services-section skipped (heading differs)");

  for (const t of newsTranslations) {
    const doc = await payload.findByID({ collection: "news", id: t.id, depth: 0, req, disableErrors: true });
    if (!doc || doc.title !== t.az) {
      log(`news ${t.id} skipped (title differs)`);
      continue;
    }
    const data: Partial<Record<Lang, (typeof t)[Lang]>> = {};
    for (const lang of ["en", "ru"] as const) {
      const add = missing(doc[lang], t[lang]);
      if (add) data[lang] = add;
    }
    if (Object.keys(data).length) await payload.update({ collection: "news", id: t.id, data, req, depth: 0 });
  }
}

// translations stay; the fields themselves go with the previous migration's down
export async function down(_args: MigrateDownArgs): Promise<void> {}
