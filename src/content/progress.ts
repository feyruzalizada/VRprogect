export interface ProgressItem {
  id: string;
  percent: number;
  label: string;
  description: string;
}

export const progressItems: ProgressItem[] = [
  {
    id: "modern",
    percent: 25,
    label: "Modern",
    description: "İşıqlı, rahat, gündəlik istifadəyə hazır. Zamanla köhnəlmir.",
  },
  {
    id: "klassika",
    percent: 10,
    label: "Klassika",
    description: "Ağır materiallar, ölçülü detallar. Statusu qışqırmadan bildirir.",
  },
  {
    id: "neoklassika",
    percent: 15,
    label: "Neo klassika",
    description: "Klassik nizam, müasir ölçülər. Təmtəraq gedir, xətt qalır.",
  },
  {
    id: "minimalizm",
    percent: 25,
    label: "Minimalizm",
    description: "Gözün dincəldiyi məkan. Yalnız lazım olan qalır.",
  },
  {
    id: "loft",
    percent: 10,
    label: "Loft",
    description: "Açıq həcm, sərbəst plan. Şablondan uzaq, xarakterli.",
  },
];
