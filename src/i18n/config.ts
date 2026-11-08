export const langs = ["az", "en", "ru"] as const;

export type Lang = (typeof langs)[number];

// Azerbaijani stays on the bare domain, the others get a prefix
export const langHome: Record<Lang, string> = { az: "/", en: "/en", ru: "/ru" };

export const langLabel: Record<Lang, string> = { az: "AZ", en: "EN", ru: "RU" };

export const ogLocale: Record<Lang, string> = { az: "az_AZ", en: "en_US", ru: "ru_RU" };

export const dateLocale: Record<Lang, string> = { az: "az-AZ", en: "en-GB", ru: "ru-RU" };
