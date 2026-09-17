export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Ana səhifə", href: "/" },
  { label: "Kitab haqqında", href: "#kitab" },
  { label: "VR kalkulyator", href: "#kalkulyator" },
  { label: "Partnyorlar", href: "#partnyorlar" },
  { label: "Contacts", href: "#" },
];

export const sidePanel = {
  logo: "/images/vr_logo.png",
  galleryTitle: "Our Gallery",
  gallery: [
    "/images/panel/p4-gallery2-150x150.jpg",
    "/images/panel/p3-gallery2-150x150.jpg",
    "/images/panel/p3-gallery1-150x150.jpg",
    "/images/panel/p3-gallery5-150x150.jpg",
    "/images/panel/p4-gallery1-150x150.jpg",
    "/images/panel/p3-gallery4-150x150.jpg",
  ],
  contactTitle: "Contact Info",
  address: "411 University St, Seattle, USA",
  email: "theratio_interior@mail.com",
  phone: "+1 800 456 789 123",
  social: [
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};
