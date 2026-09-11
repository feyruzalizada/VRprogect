export interface QuoteBannerContent {
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  background: string;
}

export const quoteBanner: QuoteBannerContent = {
  quote:
    "Novator Memar",
  author: {
    name: "Muxtar Ərturan",
    role: "İnşaat məsələləri üzrə ekspert",
    avatar: "/images/image1-home1.jpeg",
  },
  background: "/images/bg1-home1.jpg",
};
