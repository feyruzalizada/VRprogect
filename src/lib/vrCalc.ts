// VR Mini Demo R3 (R14 §6.5–§6.6): base × height / 1700 mm, shown rounded to 1 mm
export const REFERENCE_MM = 1700;

export const vrValue = (baseMm: number, heightMm: number) => Math.round((baseMm * heightMm) / REFERENCE_MM);
