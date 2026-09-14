export interface ServiceItem {
  icon: string;
  width: number;
  height: number;
  title: string;
  description: string;
  href: string;
}

export interface ServiceCounter {
  value: number;
  label: string;
  suffix?: string;
}

export interface ServicesContent {
  eyebrow: string;
  heading: string;
  linkLabel: string;
  items: ServiceItem[];
  counters: ServiceCounter[];
}

export const services: ServicesContent = {
  eyebrow: "[ our services ]",
  heading: "What Can We Offer",
  linkLabel: "PULSUZ BAŞLA",
  items: [
    {
      icon: "/images/iconbox1.2.png",
      width: 74,
      height: 84,
      title: "FƏRDİ EV TİKİRƏM",
      description: "Ailə profili, sahə bölgüsü və funksional planlaşdırma.",
      href: "#",
    },
    {
      icon: "/images/iconbox2.png",
      width: 81,
      height: 70,
      title: "MƏNZİL ALIRAM",
      description: "Plan, işıqlanma, rahatlıq və ailəyə uyğunluq təhlili.",
      href: "#",
    },
    {
      icon: "/images/iconbox4.png",
      width: 64,
      height: 70,
      title: "FƏRDİ EVİMİ TƏMİR EDİRƏM",
      description: "Mövcud vəziyyət, risklər və mərhələli fəaliyyət planı.",
      href: "#",
    },
    {
      icon: "/images/iconbox5.png",
      width: 80,
      height: 70,
      title: "MƏNZİLİMİ TƏMİR EDİRƏM",
      description: "Təmir ardıcıllığı, təhlükəsizlik və ilkin yol xəritəsi.",
      href: "#",
    },
  ],
  counters: [
    { value: 800, label: "Tamamlanmış iş" },
    { value: 66, suffix: " il", label: "Təcrübə" },
    { value: 92, label: "Tərəfdaş" },
    { value: 95, suffix: "%", label: "Müşdəri məmnuniyyəti" },
  ],
};
