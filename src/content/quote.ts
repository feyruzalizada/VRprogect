export interface QuoteBannerContent {
  motto: string;
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  background: string;
}

export const quoteBanner: QuoteBannerContent = {
  motto: "“Məkan insana uyğunlaşır; insan məkana məcbur edilmir.”",
  quote:
    "Muxtar Ərturan",
  author: {
    name: "Novator Memar",
    role: "İnşaat məsələləri üzrə ekspert",
    avatar: "/images/image1-home1.jpeg",
  },
  background: "/images/bg1-home1.jpg",
};
