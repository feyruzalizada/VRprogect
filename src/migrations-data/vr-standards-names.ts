// The book's name in English and Russian (the user's decision, 2026-11-08): VR Standards 2026 / VR Стандарты 2026.
// Russian declines the name, so the longer phrases come first and keep the grammar right.
const pairs: Record<"en" | "ru", [string, string][]> = {
  en: [
    ["VR Standartları 2026 (VR Standards 2026)", "VR Standards 2026"],
    ["VR STANDARTLARI 2026", "VR STANDARDS 2026"],
    ["VR Standartları 2026", "VR Standards 2026"],
    ["VR Standards 2026 takes", "“VR Standards 2026” takes"],
  ],
  ru: [
    ["VR Standartları 2026 («VR Стандарты 2026»)", "VR Стандарты 2026"],
    ["ПО VR STANDARTLARI 2026", "ПО VR СТАНДАРТАМ 2026"],
    ["VR STANDARTLARI 2026", "VR СТАНДАРТЫ 2026"],
    ["по VR Standartları 2026", "по VR Стандартам 2026"],
    ["VR Standartları 2026 берёт", "VR Стандарты 2026 берут"],
    ["методики VR Standartları 2026", "методики «VR Стандарты 2026»"],
    ["В системе VR Standartları 2026", "В системе «VR Стандарты 2026»"],
    ["«VR Standartları 2026»", "«VR Стандарты 2026»"],
    ["VR Standartları 2026", "VR Стандарты 2026"],
  ],
};

export function renameVrStandards(text: string, lang: "en" | "ru"): string {
  return pairs[lang].reduce((out, [from, to]) => out.split(from).join(to), text);
}
