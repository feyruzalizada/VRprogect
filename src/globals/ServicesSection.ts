import type { GlobalConfig } from "payload";

import { revalidateHome } from "../collections/revalidate";

export const ServicesSection: GlobalConfig = {
  slug: "services-section",
  label: { az: "Bölmənin mətnləri", ru: "Тексты раздела", en: "Section texts" },
  admin: { group: { az: "Xidmətlər bölməsi", ru: "Раздел «Xidmətlər»", en: "Services section" } },
  hooks: { afterChange: [revalidateHome] },
  fields: [
    { name: "eyebrow", type: "text", required: true, label: { az: "Üst yazı", ru: "Надзаголовок", en: "Eyebrow" } },
    { name: "heading", type: "text", required: true, label: { az: "Başlıq", ru: "Заголовок", en: "Heading" } },
    { name: "tagline", type: "text", label: { az: "Alt başlıq", ru: "Подзаголовок", en: "Tagline" } },
    { name: "intro", type: "textarea", label: { az: "Giriş mətni", ru: "Вводный текст", en: "Intro" } },
    { name: "filterLabel", type: "text", label: { az: "Filtrlərin üstündəki yazı", ru: "Надпись над фильтрами", en: "Filter label" } },
    {
      type: "row",
      fields: [
        { name: "moreLabel", type: "text", label: { az: "«Aç» düyməsi", ru: "Кнопка «раскрыть»", en: "More label" } },
        { name: "lessLabel", type: "text", label: { az: "«Gizlət» düyməsi", ru: "Кнопка «свернуть»", en: "Less label" } },
      ],
    },
    { name: "disclaimer", type: "textarea", label: { az: "Aşağıdakı qeyd", ru: "Примечание внизу", en: "Disclaimer" } },
  ],
};
