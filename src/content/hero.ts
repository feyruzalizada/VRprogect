export interface HeroSlide {
  id: string;
  watermark: string;
  title: string;
  description: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    watermark: "design",
    title: "VR Standartlari 2026",
    description:
      "Məkanı insan və ailə profilinə, istifadə ssenarisinə, funksiyaya və təhlükəsizlik tələblərinə uyğunlaşdıran müəllif metodologiyası və onun rəqəmsal tətbiq sistemi.",
    image: "/images/slider1-home1-1.jpg",
    ctaLabel: "View Projects",
    ctaHref: "#projects",
  },
  {
    id: "slide-2",
    watermark: "quality",
    title: "Temir",
    description:
      "We pride ourselves on being builders — creating architectural and creative solutions to help people realize their vision and make them a reality. Wanna work with us?",
    image: "/images/slider2-home1-1.jpg",
    ctaLabel: "View Projects",
    ctaHref: "#projects",
  },
  {
    id: "slide-3",
    watermark: "studio",
    title: "Best Furniture and Decor",
    description:
      "We pride ourselves on being builders — creating architectural and creative solutions to help people realize their vision and make them a reality. Wanna work with us?",
    image: "/images/slider3-home1-1.jpg",
    ctaLabel: "View Projects",
    ctaHref: "#projects",
  },
];

export const heroSocial = [
  { label: "Youtube", href: "https://youtube.com/@vrprojectaz?si=MyBR-4mzQdGecUab" },
  { label: "Tik Tok", href: "https://www.tiktok.com/@vrproject.az?_r=1&_t=ZS-99iislsgC0d" },
  { label: "Facebook", href: "https://www.facebook.com/share/1dPk5xoG5L/?mibextid=wwXIfr" },
  { label: "Instagram", href: "https://www.instagram.com/vrproject.az?stkn=MXVqM3Jrc2xlajJrZg%3D%3D&utm_source=qr" },
];
