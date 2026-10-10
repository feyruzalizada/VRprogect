import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: { az: "İstifadəçi", ru: "Пользователь", en: "User" },
    plural: { az: "İstifadəçilər", ru: "Пользователи", en: "Users" },
  },
  auth: true,
  admin: { useAsTitle: "email", group: { az: "Sistem", ru: "Система", en: "System" } },
  fields: [],
};
