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
  eyebrow: "[ VR Global Group Xidmətləri ]",
  heading: "Xidmətlərimiz",
  taglineTop: "Layihə • icra • nəzarət — bir məsuliyyət altında",
  intro:
    "Layihələndirmədən icraya, icradan audite qədər hər mərhələni VR standartları üzrə aparırıq. Ölçü otağa yox, insana görə seçilir; iş sənədlə təsdiqlənir; nəticə isə gözlə yox, rəqəmlə yoxlanılır.",
  items: [
    {
      icon: "/images/iconbox1.2.png",
      width: 74,
      height: 84,
      title: "Dizayn",
      description: "İnsan mərkəzli, funksional və estetik məkan həlli.",
    },
    {
      icon: "/images/iconbox2.png",
      width: 81,
      height: 70,
      title: "Layihə",
      description: "Memarlıq, işçi, konstruktiv və mühəndislik sənədləri.",
    },
    {
      icon: "/images/iconbox4.png",
      width: 64,
      height: 70,
      title: "Tikinti",
      description: "Fərdi, yaşayış və kommersiya obyektlərinin inşası.",
    },
    {
      icon: "/images/iconbox5.png",
      width: 80,
      height: 70,
      title: "Təmir",
      description: "Təsdiqlənmiş layihə və mərhələ ardıcıllığı üzrə icra.",
    },
    {
      icon: "/images/iconbox4.png",
      width: 64,
      height: 70,
      title: "Audit",
      description:
        "Layihə, smeta, material, proses və obyektin qiymətləndirilməsi.",
    },
    {
      icon: "/images/iconbox2.png",
      width: 81,
      height: 70,
      title: "Nəzarət",
      description: "İcra, gizli iş, mərhələ qəbulu və düzəlişlərin idarəsi.",
    },
    {
      icon: "/images/iconbox5.png",
      width: 80,
      height: 70,
      title: "Hüquqi-texniki müdafiə",
      description:
        "Qüsur və zərərin texniki sübuta, mediasiyaya və hüquqi müdafiəyə çevrilməsi.",
    },
  ],
  counters: [
    { value: 800, label: "Tamamlanmış İş" },
    { value: 24, suffix: " il", label: "Təcrübə" },
    { value: 32, label: "Tərəfdaş" },
    { value: 95, suffix: "%", label: "Müşdərİ məmnunİyyətİ" },
  ],
};
