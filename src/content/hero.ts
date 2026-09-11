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
  { label: "Youtube", href: "#" },
  { label: "Tik Tok", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
];
