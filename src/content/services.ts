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
  taglineTop: string;
  intro: string;
  taglineBottom: string;
  ctaLabel: string;
  ctaHref: string;
  linkLabel: string;
  items: ServiceItem[];
  counters: ServiceCounter[];
}

export const services: ServicesContent = {
  eyebrow: "[ VR Adaptiv Hesablama Sistemi ]",
  heading: "Sizə uyğun məkanı hesablayın",
  taglineTop: "4 məqsəd • 4 pulsuz kalkulyator • fərdi ilkin nəticə",
  intro:
    "Evinizi almadan, tikintiyə və ya təmirə başlamadan əvvəl məqsədinizə uyğun pulsuz VR kalkulyatorunu seçin. Ailə üzvlərinizin sayı, yaşı, boy göstəriciləri, fiziki imkanları və yaşayış tərzi əsasında tövsiyə olunan otaq sayını, sahə diapazonunu və adaptiv erqonomik ölçüləri ödənişsiz hesablayın.",
  taglineBottom: "Pulsuz • Qeydiyyatsız • İnsan mərkəzli",
  ctaLabel: "Pulsuz hesablamağa başla",
  ctaHref: "#kalkulyatorlar",
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
    { value: 800, label: "Tamamlanmış İş" },
    { value: 66, suffix: " il", label: "Təcrübə" },
    { value: 92, label: "Tərəfdaş" },
    { value: 95, suffix: "%", label: "Müşdərİ məmnuniyyətİ" },
  ],
};
