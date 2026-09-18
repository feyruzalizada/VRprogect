export interface ServiceItem {
  icon: string;
  width: number;
  height: number;
  title: string;
  description: string;
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
  items: ServiceItem[];
  counters: ServiceCounter[];
}

export const services: ServicesContent = {
  eyebrow: "[ VR Adaptiv Hesablama Sistemi ]",
  heading: "Sizə uyğun məkanı hesablayın",
  taglineTop: "4 məqsəd • 4 pulsuz kalkulyator • fərdi ilkin nəticə",
  intro:
    "Evinizi almadan, tikintiyə və ya təmirə başlamadan əvvəl məqsədinizə uyğun pulsuz VR kalkulyatorunu seçin. Ailə üzvlərinizin sayı, yaşı, boy göstəriciləri, fiziki imkanları və yaşayış tərzi əsasında tövsiyə olunan otaq sayını, sahə diapazonunu və adaptiv erqonomik ölçüləri ödənişsiz hesablayın.",
  items: [
    {
      icon: "/images/iconbox1.2.png",
      width: 74,
      height: 84,
      title: "Dizayn",
      description: "Ailə profili, sahə bölgüsü və funksional planlaşdırma.",
    },
    {
      icon: "/images/iconbox2.png",
      width: 81,
      height: 70,
      title: "MƏNZİL ALIRAM",
      description: "Plan, işıqlanma, rahatlıq və ailəyə uyğunluq təhlili.",
    },
    {
      icon: "/images/iconbox4.png",
      width: 64,
      height: 70,
      title: "FƏRDİ EVİMİ TƏMİR EDİRƏM",
      description: "Mövcud vəziyyət, risklər və mərhələli fəaliyyət planı.",
    },
    {
      icon: "/images/iconbox5.png",
      width: 80,
      height: 70,
      title: "MƏNZİLİMİ TƏMİR EDİRƏM",
      description: "Təmir ardıcıllığı, təhlükəsizlik və ilkin yol xəritəsi.",
    },
  ],
  counters: [
    { value: 800, label: "Tamamlanmış İş" },
    { value: 24, suffix: " il", label: "Təcrübə" },
    { value: 32, label: "Tərəfdaş" },
    { value: 95, suffix: "%", label: "Müşdərİ məmnunİyyətİ" },
  ],
};
