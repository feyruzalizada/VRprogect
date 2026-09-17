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
    description: "Sadə həndəsə, geniş işıq, artıq detalsız. Ən çox seçilən üslub.",
  },
  {
    id: "klassik",
    percent: 88,
    label: "Klassik",
    description: "Simmetriya və mütənasiblik — dəbdən asılı olmayan qərar.",
  },
  {
    id: "minimalist",
    percent: 92,
    label: "Minimalist",
    description: "Az element, çox hava. Hər əşya yerini qazanmalıdır.",
  },
  {
    id: "loft",
    percent: 84,
    label: "Loft",
    description: "Beton, metal, açıq kommunikasiya — xarakteri gizlətmədən.",
  },
];
