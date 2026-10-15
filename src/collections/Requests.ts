import type { CollectionAfterReadHook, CollectionConfig } from "payload";

// opening a request in the admin counts as seeing it; lists and deletes don't
const markSeen: CollectionAfterReadHook = async ({ doc, findMany, req, context }) => {
  if (findMany || !req.user || doc.seen || context.skipSeen || req.method === "DELETE") return doc;

  // same transaction as the read, or a pending write on this row would block it
  await req.payload.update({
    collection: "requests",
    id: doc.id,
    data: { seen: true },
    depth: 0,
    context: { skipSeen: true },
    req,
  });
  return { ...doc, seen: true };
};

// filled only by the site form through /api/muraciet; the admin just reads them and moves the status
export const Requests: CollectionConfig = {
  slug: "requests",
  labels: {
    singular: { az: "Müraciət", ru: "Заявка", en: "Request" },
    plural: { az: "Müraciətlər", ru: "Заявки", en: "Requests" },
  },
  defaultSort: "-createdAt",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["createdAt", "name", "phone", "servicesText", "status"],
    pagination: { defaultLimit: 50 },
    group: { az: "Müraciətlər", ru: "Заявки", en: "Requests" },
    description: {
      az: "Saytdakı formadan gələn müraciətlər. Statusu dəyişərək işi izləyin.",
      ru: "Заявки из формы на сайте. Меняйте статус, чтобы вести работу.",
      en: "Requests from the site form. Change the status to track them.",
    },
  },
  access: {
    create: () => false,
  },
  hooks: { afterRead: [markSeen] },
  fields: [
    {
      name: "seen",
      type: "checkbox",
      defaultValue: false,
      admin: { hidden: true },
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "new",
      label: { az: "Status", ru: "Статус", en: "Status" },
      options: [
        { value: "new", label: { az: "Yeni", ru: "Новая", en: "New" } },
        { value: "in-progress", label: { az: "İşdə", ru: "В работе", en: "In progress" } },
        { value: "done", label: { az: "Bağlanıb", ru: "Закрыта", en: "Closed" } },
      ],
      admin: { position: "sidebar" },
    },
    {
      name: "comment",
      type: "textarea",
      label: { az: "Daxili qeyd", ru: "Внутренняя заметка", en: "Internal note" },
      admin: {
        position: "sidebar",
        description: { az: "Müştəri görmür.", ru: "Клиент это не видит.", en: "Not shown to the client." },
      },
    },
    {
      type: "row",
      fields: [
        { name: "name", type: "text", required: true, label: { az: "Ad", ru: "Имя", en: "Name" }, admin: { readOnly: true } },
        { name: "phone", type: "text", required: true, label: { az: "Telefon", ru: "Телефон", en: "Phone" }, admin: { readOnly: true } },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "area", type: "number", label: { az: "Sahə, m²", ru: "Площадь, м²", en: "Area, m²" }, admin: { readOnly: true } },
        { name: "place", type: "text", label: { az: "Ünvan", ru: "Адрес", en: "Address" }, admin: { readOnly: true } },
      ],
    },
    {
      // kept as text so the request still reads right after a service is renamed or deleted
      name: "servicesText",
      type: "textarea",
      label: { az: "Xidmətlər", ru: "Услуги", en: "Services" },
      admin: { readOnly: true },
    },
  ],
};
