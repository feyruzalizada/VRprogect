export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Home",
    href: "/",
    children: [
      { label: "Main Home", href: "/" },
      { label: "Interior Design", href: "#" },
      { label: "Interior Design Light", href: "#" },
      { label: "Studio Home", href: "#" },
      { label: "Architecture Agency", href: "#" },
      { label: "Design Company", href: "#" },
      { label: "Home Video", href: "#" },
      { label: "Home Full Screen", href: "#" },
      { label: "Home One Page", href: "#" },
      { label: "Home with Side Menu", href: "#" },
      { label: "Home with Side Menu Light", href: "#" },
      {
        label: "Main Home Dark",
        href: "#",
        children: [
          { label: "Studio Home Dark", href: "#" },
          { label: "Architecture Agency Dark", href: "#" },
          { label: "Design Company Dark", href: "#" },
          { label: "Home Video Dark", href: "#" },
          { label: "Home One Page Dark", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "About Us", href: "#" },
      { label: "Our Services", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Single Team", href: "#" },
      { label: "Our Process", href: "#" },
      { label: "Our Studio", href: "#" },
      {
        label: "Shop",
        href: "#",
        children: [
          { label: "Product Catalog", href: "#" },
          { label: "Single Product", href: "#" },
          { label: "Cart", href: "#" },
          { label: "Checkout", href: "#" },
        ],
      },
      { label: "Typography", href: "#" },
      { label: "Elements", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Coming Soon", href: "#" },
      { label: "404 Error", href: "#" },
    ],
  },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Design & Planning", href: "#" },
      { label: "Exterior Design", href: "#" },
      { label: "Custom Solutions", href: "#" },
      { label: "Furniture & Decor", href: "#" },
      { label: "Creating Concept", href: "#" },
      { label: "Author's Control", href: "#" },
    ],
  },
  {
    label: "Blog",
    href: "#",
    children: [
      { label: "Blog List", href: "#" },
      { label: "Blog Grid Masonry", href: "#" },
      {
        label: "Blog Format",
        href: "#",
        children: [
          { label: "Standard", href: "#" },
          { label: "Gallery", href: "#" },
          { label: "Quote", href: "#" },
          { label: "Video", href: "#" },
          { label: "Link", href: "#" },
          { label: "Audio", href: "#" },
        ],
      },
    ],
  },
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
