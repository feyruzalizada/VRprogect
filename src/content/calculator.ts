export interface CalculatorOption {
  id: string;
  label: string;
  hint?: string;
}

export interface CalculatorStep {
  id: string;
  question: string;
  note?: string;
  multiple?: boolean;
  options: CalculatorOption[];
}

export const calculatorSteps: CalculatorStep[] = [
  {
    id: "people",
    question: "Ailənizdə neçə nəfər yaşayacaq?",
    note: "Daimi yaşayan üzvləri nəzərə alın.",
    options: [
      { id: "1-2", label: "1–2 nəfər" },
      { id: "3-4", label: "3–4 nəfər" },
      { id: "5+", label: "5 və daha çox" },
    ],
  },
  {
    id: "profile",
    question: "Ailə tərkibində kim var?",
    note: "Bir neçəsini seçə bilərsiniz.",
    multiple: true,
    options: [
      { id: "child", label: "Məktəbəqədər uşaq" },
      { id: "teen", label: "Məktəbli və ya yeniyetmə" },
      { id: "senior", label: "Yaşlı ailə üzvü" },
      { id: "access", label: "Hərəkət imkanı məhdud üzv" },
    ],
  },
  {
    id: "height",
    question: "Ən hündür ailə üzvünün boyu nə qədərdir?",
    note: "Mətbəx və şkaf hündürlükləri buna görə hesablanır.",
    options: [
      { id: "short", label: "165 sm-dən aşağı" },
      { id: "mid", label: "165 – 180 sm" },
      { id: "tall", label: "180 sm-dən yuxarı" },
    ],
  },
  {
    id: "lifestyle",
    question: "Məkandan necə istifadə edəcəksiniz?",
    note: "Bir neçəsini seçə bilərsiniz.",
    multiple: true,
    options: [
      { id: "remote", label: "Evdən işləyirəm" },
      { id: "guests", label: "Tez-tez qonaq qəbul edirik" },
      { id: "play", label: "Uşaq üçün oyun sahəsi lazımdır" },
      { id: "minimal", label: "Minimal, sadə həyat tərzi" },
    ],
  },
];

/** Tuning numbers — replace with the values from the book. */
export const calculatorModel = {
  baseRooms: { "1-2": 2, "3-4": 3, "5+": 4 } as Record<string, number>,
  extraRoom: { remote: 1, guests: 1, play: 1 },
  areaPerRoom: { min: 26, max: 34 },
  counterHeight: { short: "82–86 sm", mid: "88–92 sm", tall: "94–98 sm" },
  shelfReach: { short: "175 sm", mid: "185 sm", tall: "195 sm" },
  corridor: { base: "90 sm", access: "120 sm" },
};
