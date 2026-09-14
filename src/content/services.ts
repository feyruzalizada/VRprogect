export interface ServiceItem {
  icon: string;
  width: number;
  height: number;
  title: string;
  description: string;
  href: string;
}

export interface ServiceCounter {
  value: number;
  label: string;
}

export interface ServicesContent {
  eyebrow: string;
  heading: string;
  linkLabel: string;
  items: ServiceItem[];
  counters: ServiceCounter[];
}

export const services: ServicesContent = {
  eyebrow: "[ our services ]",
  heading: "What Can We Offer",
  linkLabel: "Read more",
  items: [
    {
      icon: "/images/iconbox1.2.png",
      width: 74,
      height: 84,
      title: "Design & Planning",
      description: "We will help you to get the result you dreamed of.",
      href: "#",
    },
    {
      icon: "/images/iconbox2.png",
      width: 81,
      height: 70,
      title: "Custom Solutions",
      description: "Individual, aesthetically stunning solutions for customers.",
      href: "#",
    },
    {
      icon: "/images/iconbox3.png",
      width: 72,
      height: 80,
      title: "Furniture & Decor",
      description: "We create and produce our product design lines.",
      href: "#",
    },
    {
      icon: "/images/iconbox4.png",
      width: 64,
      height: 70,
      title: "Exterior Design",
      description: "We will help you to get the result you dreamed of.",
      href: "#",
    },
    {
      icon: "/images/iconbox5.png",
      width: 80,
      height: 70,
      title: "Creating a Concept",
      description: "Individual, aesthetically stunning solutions for customers.",
      href: "#",
    },
    {
      icon: "/images/iconbox6.png",
      width: 81,
      height: 70,
      title: "Author's Control",
      description: "We create and produce our product design lines.",
      href: "#",
    },
  ],
  counters: [
    { value: 180, label: "Current Clients" },
    { value: 10, label: "years of experience" },
    { value: 35, label: "awards winning" },
    { value: 5, label: "Offices Worldwide" },
  ],
};
