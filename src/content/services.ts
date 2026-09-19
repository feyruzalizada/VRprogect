export interface ServiceItem {
  icon: string;
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
  eyebrow: "[ VR Global Group Xidmətləri ]",
  heading: "Xidmətlərimiz",
  taglineTop: "Layihə • icra • nəzarət — bir məsuliyyət altında",
  intro:
    "Layihələndirmədən icraya, icradan audite qədər hər mərhələni VR standartları üzrə aparırıq. Ölçü otağa yox, insana görə seçilir; iş sənədlə təsdiqlənir; nəticə isə gözlə yox, rəqəmlə yoxlanılır.",
  items: [
    {
      icon: "dizayn",
      title: "Dizayn",
      description: "İnsan mərkəzli, funksional və estetik məkan həlli.",
    },
    {
      icon: "layihe",
      title: "Layihə",
      description: "Memarlıq, işçi, konstruktiv və mühəndislik sənədləri.",
    },
    {
      icon: "tikinti",
      title: "Tikinti",
      description: "Fərdi, yaşayış və kommersiya obyektlərinin inşası.",
    },
    {
      icon: "temir",
      title: "Təmir",
      description: "Təsdiqlənmiş layihə və mərhələ ardıcıllığı üzrə icra.",
    },
    {
      icon: "audit",
      title: "Audit",
      description:
        "Layihə, smeta, material, proses və obyektin qiymətləndirilməsi.",
    },
    {
      icon: "nezaret",
      title: "Nəzarət",
      description: "İcra, gizli iş, mərhələ qəbulu və düzəlişlərin idarəsi.",
    },
    {
      icon: "mudafie",
      title: "Hüquqi-texniki müdafiə",
      description:
        "Qüsur və zərərin texniki sübuta, mediasiyaya və hüquqi müdafiəyə çevrilməsi.",
    },
  ],
  counters: [
    { value: 800, label: "Tamamlanmış İş" },
    { value: 24, suffix: " il", label: "Təcrübə" },
    { value: 32, label: "Tərəfdaş" },
    { value: 95, suffix: "%", label: "Müştəri məmnuniyyəti" },
  ],
};
