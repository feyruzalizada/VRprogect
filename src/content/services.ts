export interface ServiceCounter {
  value: number;
  label: string;
  suffix?: string;
}

export const countersHeading = "Uğurlar";

export const services: { counters: ServiceCounter[] } = {
  counters: [
    { value: 800, label: "Tamamlanmış İş" },
    { value: 24, suffix: " il", label: "Təcrübə" },
    { value: 32, label: "Tərəfdaş" },
    { value: 95, suffix: "%", label: "Müştəri məmnuniyyəti" },
  ],
};
