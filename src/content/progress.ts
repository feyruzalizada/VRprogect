export interface ProgressItem {
  id: string;
  percent: number;
  label: string;
  description: string;
}

export const progressItems: ProgressItem[] = [
  {
    id: "modern",
    percent: 96,
    label: "Modern",
    description: "İşıqlı, rahat, gündəlik istifadəyə hazır. Zamanla köhnəlmir.",
  },
  {
    id: "klassik",
    percent: 88,
    label: "Klassik",
    description: "Ağır materiallar, ölçülü detallar. Statusu qışqırmadan bildirir.",
  },
  {
    id: "minimalist",
    percent: 92,
    label: "Minimalist",
    description: "Gözün dincəldiyi məkan. Yalnız lazım olan qalır.",
  },
  {
    id: "loft",
    percent: 84,
    label: "Loft",
    description: "Açıq həcm, sərbəst plan. Şablondan uzaq, xarakterli.",
  },
];
