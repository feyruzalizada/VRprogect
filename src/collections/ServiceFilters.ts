import type { CollectionConfig } from "payload";

import { revalidateHome } from "./revalidate";

export const ServiceFilters: CollectionConfig = {
  slug: "service-filters",
  labels: {
    singular: { az: "Filtr", ru: "Фильтр", en: "Filter" },
    plural: { az: "Filtrlər", ru: "Фильтры", en: "Filters" },
  },
  orderable: true,
  defaultSort: "_order",
  admin: {
    useAsTitle: "label",
    pagination: { defaultLimit: 100 },
    defaultColumns: ["label", "showAll", "services"],
    group: { az: "Xidmətlər bölməsi", ru: "Раздел «Xidmətlər»", en: "Services section" },
    description: {
      az: "Birinci filtr saytda açıq gəlir. Sıranı siyahıda sürüşdürərək dəyişin.",
      ru: "Первый фильтр открыт на сайте по умолчанию. Порядок — перетаскиванием в списке.",
      en: "The first filter is selected on the site. Drag rows to reorder.",
    },
  },
  hooks: {
    afterChange: [revalidateHome],
    afterDelete: [revalidateHome],
  },
  fields: [
    {
      name: "label",
      type: "text",
      required: true,
      label: { az: "Filtrin adı", ru: "Название фильтра", en: "Label" },
    },
    {
      name: "showAll",
      type: "checkbox",
      defaultValue: false,
      label: { az: "Bütün xidmətləri göstər", ru: "Показывать все услуги", en: "Show every service" },
    },
    {
      name: "services",
      type: "relationship",
      relationTo: "services",
      hasMany: true,
      label: { az: "Bu filtrdəki xidmətlər", ru: "Услуги в этом фильтре", en: "Services in this filter" },
      admin: { condition: (data) => !data?.showAll },
    },
    {
      name: "empty",
      type: "text",
      defaultValue: "Bu bölmə üzrə xidmətlər tezliklə əlavə olunacaq.",
      label: { az: "Xidmət olmayanda göstərilən mətn", ru: "Текст, если услуг нет", en: "Text when empty" },
      admin: { condition: (data) => !data?.showAll },
    },
  ],
};
