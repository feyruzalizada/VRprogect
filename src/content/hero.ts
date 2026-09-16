export interface HeroCue {
  id: string;
  /** seconds — the cue shows while the video is between `from` and `to` */
  from: number;
  to: number;
  watermark: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export const heroVideo = {
  /** HLS playlist — the clip is served as segments, not as one downloadable file */
  hls: "/stream/hero.m3u8",
  /** used only by browsers without HLS support */
  mp4: "",
  poster: "/images/hero-poster.jpg",
};

export const heroCues: HeroCue[] = [
  {
    id: "slide-1",
    from: 0,
    to: 10,
    watermark: "design",
    title: "VR Standartları 2026",
    description:
      "Məkanı insan və ailə profilinə, istifadə ssenarisinə, funksiyaya və təhlükəsizlik tələblərinə uyğunlaşdıran müəllif metodologiyası və onun rəqəmsal tətbiq sistemi.",
    ctaLabel: "Xidmətlərə keç",
    ctaHref: "#projects",
  },
  {
    id: "slide-2",
    from: 10,
    to: 50,
    watermark: "quality",
    title: "Temir",
    description:
      "We pride ourselves on being builders — creating architectural and creative solutions to help people realize their vision and make them a reality. Wanna work with us?",
    ctaLabel: "Xidmətlərə keç",
    ctaHref: "#projects",
  },
  {
    id: "slide-3",
    from: 50,
    to: 198,
    watermark: "studio",
    title: "Best Furniture and Decor",
    description:
      "We pride ourselves on being builders — creating architectural and creative solutions to help people realize their vision and make them a reality. Wanna work with us?",
    ctaLabel: "Xidmətlərə keç",
    ctaHref: "#projects",
  },
];

export const heroSocial = [
  { label: "Youtube", href: "https://youtube.com/@vrprojectaz?si=MyBR-4mzQdGecUab" },
  { label: "Tik Tok", href: "https://www.tiktok.com/@vrproject.az?_r=1&_t=ZS-99iislsgC0d" },
  { label: "Facebook", href: "https://www.facebook.com/share/1dPk5xoG5L/?mibextid=wwXIfr" },
  { label: "Instagram", href: "https://www.instagram.com/vrproject.az?stkn=MXVqM3Jrc2xlajJrZg%3D%3D&utm_source=qr" },
];
