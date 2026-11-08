import type { Lang } from "@/i18n/config";

import { az } from "./az";
import { en } from "./en";
import { ru } from "./ru";
import type { SiteContent } from "./types";

const all: Record<Lang, SiteContent> = { az, en, ru };

export function getContent(lang: Lang): SiteContent {
  return all[lang];
}

export type { SiteContent } from "./types";

