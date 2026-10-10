import type { CollectionConfig } from "payload";

import { revalidateHome } from "./revalidate";

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: { az: "Fayl", ru: "Файл", en: "File" },
    plural: { az: "Fayllar", ru: "Файлы", en: "Files" },
  },
  admin: { group: { az: "Sistem", ru: "Система", en: "System" } },
  access: { read: () => true },
  upload: {
    staticDir: "media",
    mimeTypes: ["video/mp4", "image/jpeg", "image/png", "image/webp"],
  },
  hooks: {
    afterChange: [revalidateHome],
    afterDelete: [revalidateHome],
  },
  fields: [
    {
      name: "alt",
      type: "text",
      label: { az: "Təsvir", ru: "Описание", en: "Alt text" },
    },
  ],
};
