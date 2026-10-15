import type { CollectionAfterDeleteHook, CollectionConfig } from "payload";

import { revalidateHome } from "./revalidate";

// a deleted card takes its clip and poster along, unless another card still uses them
const dropUnusedFiles: CollectionAfterDeleteHook = async ({ doc, req }) => {
  for (const file of [doc.video, doc.poster]) {
    const id = typeof file === "object" ? file?.id : file;
    if (!id) continue;

    const used = await req.payload.count({
      collection: "services",
      where: { or: [{ video: { equals: id } }, { poster: { equals: id } }] },
      req,
    });
    if (used.totalDocs === 0) await req.payload.delete({ collection: "media", id, req });
  }
};

export const Services: CollectionConfig = {
  slug: "services",
  labels: {
    singular: { az: "Xidmət", ru: "Услуга", en: "Service" },
    plural: { az: "Xidmətlər", ru: "Услуги", en: "Services" },
  },
  orderable: true,
  versions: { maxPerDoc: 20 },
  defaultSort: "_order",
  admin: {
    useAsTitle: "title",
    pagination: { defaultLimit: 100 },
    defaultColumns: ["title", "cta", "video"],
    group: { az: "Xidmətlər bölməsi", ru: "Раздел «Xidmətlər»", en: "Services section" },
    description: {
      az: "Kartların saytdakı sırası — siyahıda sürüşdürərək dəyişin.",
      ru: "Порядок карточек на сайте — перетаскивайте строки в списке.",
      en: "Drag rows in the list to change the order on the site.",
    },
  },
  hooks: {
    afterChange: [revalidateHome],
    afterDelete: [revalidateHome, dropUnusedFiles],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: { az: "Başlıq", ru: "Заголовок", en: "Title" },
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: { az: "Qısa təsvir", ru: "Короткое описание", en: "Short description" },
    },
    {
      name: "points",
      type: "array",
      label: { az: "Daxil olan xidmətlər", ru: "Пункты («Daxil olan xidmətlər»)", en: "Included services" },
      labels: {
        singular: { az: "Bənd", ru: "Пункт", en: "Point" },
        plural: { az: "Bəndlər", ru: "Пункты", en: "Points" },
      },
      fields: [
        {
          name: "label",
          type: "text",
          label: { az: "Qalın başlıq (istəyə görə)", ru: "Жирный заголовок (необязательно)", en: "Bold label (optional)" },
        },
        {
          name: "text",
          type: "textarea",
          required: true,
          label: { az: "Mətn", ru: "Текст", en: "Text" },
        },
      ],
    },
    {
      name: "note",
      type: "textarea",
      label: { az: "Qeyd (siyahının altında)", ru: "Примечание (под списком)", en: "Note (under the list)" },
    },
    {
      name: "cta",
      type: "text",
      required: true,
      label: { az: "Düymənin mətni", ru: "Текст кнопки", en: "Button text" },
    },
    {
      type: "row",
      fields: [
        {
          name: "video",
          type: "upload",
          relationTo: "media",
          filterOptions: { mimeType: { equals: "video/mp4" } },
          label: { az: "Video (MP4, 1280×720)", ru: "Видео (MP4, 1280×720)", en: "Video (MP4, 1280×720)" },
        },
        {
          name: "poster",
          type: "upload",
          relationTo: "media",
          filterOptions: { mimeType: { contains: "image" } },
          label: { az: "Poster (şəkil)", ru: "Постер (картинка)", en: "Poster (image)" },
        },
      ],
    },
  ],
};
