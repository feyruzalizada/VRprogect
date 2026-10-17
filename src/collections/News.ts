import type { CollectionConfig } from "payload";

import { dropFilesOnDelete } from "./dropUnusedMedia";
import { revalidateHome } from "./revalidate";

// a deleted post takes its picture along, unless a service or another post still uses it
const files = dropFilesOnDelete("news", ["image"]);

export const News: CollectionConfig = {
  slug: "news",
  labels: {
    singular: { az: "Xəbər", ru: "Новость", en: "News post" },
    plural: { az: "Xəbərlər", ru: "Новости", en: "News" },
  },
  versions: { maxPerDoc: 20 },
  defaultSort: "-date",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "date", "image"],
    pagination: { defaultLimit: 50 },
    description: {
      az: "Saytda ən yeni 8 xəbər göstərilir, tarixə görə.",
      ru: "На сайте показываются 8 самых новых, по дате.",
      en: "The site shows the 8 newest posts, by date.",
    },
  },
  hooks: {
    afterChange: [revalidateHome],
    beforeDelete: files.beforeDelete,
    afterDelete: [revalidateHome, ...files.afterDelete],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      maxLength: 160,
      label: { az: "Başlıq", ru: "Заголовок", en: "Title" },
    },
    {
      name: "date",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
      label: { az: "Tarix", ru: "Дата", en: "Date" },
      admin: {
        position: "sidebar",
        date: { pickerAppearance: "dayOnly", displayFormat: "d MMMM yyyy" },
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      filterOptions: { mimeType: { contains: "image" } },
      label: { az: "Şəkil", ru: "Картинка", en: "Image" },
    },
    {
      name: "text",
      type: "textarea",
      required: true,
      label: { az: "Mətn", ru: "Текст", en: "Text" },
      admin: {
        rows: 12,
        description: {
          az: "Kartın arxasında görünür. Uzun mətn kartın içində sürüşür.",
          ru: "Видно на обороте карточки. Длинный текст прокручивается внутри.",
          en: "Shown on the back of the card; long text scrolls inside it.",
        },
      },
    },
    {
      name: "link",
      type: "text",
      label: { az: "Facebook linki", ru: "Ссылка на Facebook", en: "Facebook link" },
      admin: {
        position: "sidebar",
        description: { az: "İstəyə bağlı.", ru: "Необязательно.", en: "Optional." },
      },
      validate: (value: string | null | undefined) =>
        !value || /^https?:\/\/\S+$/.test(value) || "https:// ilə başlayan link yazın.",
    },
  ],
};
