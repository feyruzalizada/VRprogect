export interface QuoteBannerContent {
  motto: string;
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export const quoteBanner: QuoteBannerContent = {
  motto: "“Məkan insana uyğunlaşmalıdır; insan məkana məcbur edilməməlidir.”",
  quote:
    "Muxtar Ərturan",
  author: {
    name: "Novator Memar",
    role: "İnşaat məsələləri üzrə ekspert",
    avatar: "/images/image1-home1.jpeg",
  },
};
