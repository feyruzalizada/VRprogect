export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  /** clip for the left half of the card; without one the icon panel shows instead */
  video?: string;
  poster?: string;
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

export const countersHeading = "Uğurlar";

export const services: ServicesContent = {
  eyebrow: "[ VRPROJECT ]",
  heading: "Xidmətlərimiz",
  taglineTop: "Layihə • icra • nəzarət — bir məsuliyyət altında",
  intro:
    "Layihələndirmədən icraya, icradan audite qədər hər mərhələni VR standartları üzrə aparırıq. Ölçü otağa yox, insana görə seçilir; iş sənədlə təsdiqlənir; nəticə isə gözlə yox, rəqəmlə yoxlanılır.",
  items: [
    {
      icon: "dizayn",
      title: "Dizayn",
      description: "VR standartları ilə, muasirlik və zövq.",
    },
    {
      icon: "layihe",
      title: "Layihə",
      description: "Hər detal hesablanır, hər qərar layihə ilə əsaslandırılır.",
      video: "/video/services/layihe.mp4",
      poster: "/images/services/layihe.jpg",
    },
    {
      icon: "tikinti",
      title: "Tikinti",
      description: "Layihədən təhvilə — hər mərhələ vahid standartla idarə olunur.",
    },
    {
      icon: "temir",
      title: "Təmir",
      description: "Layihədən icraya, nəzarətdən auditə tam təhvil..",
    },
    {
      icon: "audit",
      title: "Audit",
      description:
        "Riskləri əvvəlcədən görün. Qərar ekspert, rəyi akt.",
    },
    {
      icon: "nezaret",
      title: "Nəzarət",
      description: "Qüsurların aşkarlanması, yerində həlli, ustaya nəzarət.",
    },
    {
      icon: "mudafie",
      title: "Hüquqi-texniki müdafiə",
      description:
        "Şəffaf rəy, sənədləşdirilmiş nəticə və əsaslandırılmış qərar.",
    },
  ],
  counters: [
    { value: 800, label: "Tamamlanmış İş" },
    { value: 24, suffix: " il", label: "Təcrübə" },
    { value: 32, label: "Tərəfdaş" },
    { value: 95, suffix: "%", label: "Müştəri məmnuniyyəti" },
  ],
};
