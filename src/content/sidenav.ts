export interface SideNavLink {
  label: string;
  href: string;
}

export interface SideNavContent {
  logo: string;
  links: SideNavLink[];
  slides: string[];
  mark: string;
  heading: string[];
  ctaLabel: string;
  ctaHref: string;
  scrollLabel: string;
  scrollHref: string;
}

export const sideNav: SideNavContent = {
  logo: "/images/home6.svg",
  links: [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Services", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contacts", href: "#" },
  ],
  slides: ["/images/slideshow1-home6.jpg", "/images/slideshow2-home6.jpg"],
  mark: "/images/logo-home6.png",
  heading: ["Loft Interior Design", "for All House"],
  ctaLabel: "View Project",
  ctaHref: "#",
  scrollLabel: "Scroll Down",
  scrollHref: "#",
};
