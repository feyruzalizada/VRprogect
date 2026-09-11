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
    "“Even if you don’t have a ready sketch of what you want – we will help you to get the result you dreamed of.”",
  author: {
    name: "David Oswald",
    role: "founder of company",
    avatar: "/images/image1-home1.jpeg",
  },
  background: "/images/bg1-home1.jpg",
};
