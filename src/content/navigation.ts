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
      { label: "Interior Design", href: "/home-2" },
      { label: "Interior Design Light", href: "/home-2-light" },
      { label: "Studio Home", href: "/home-3" },
      { label: "Architecture Agency", href: "/home-4" },
      { label: "Design Company", href: "/home-5" },
      { label: "Home Video", href: "/home-7" },
      { label: "Home Full Screen", href: "/home-full-screen" },
      { label: "Home One Page", href: "/one-page" },
      { label: "Home with Side Menu", href: "/side-menu" },
      { label: "Home with Side Menu Light", href: "/side-menu-light" },
      {
        label: "Main Home Dark",
        href: "/dark",
        children: [
          { label: "Studio Home Dark", href: "/dark/home-3" },
          { label: "Architecture Agency Dark", href: "/dark/home-4" },
          { label: "Design Company Dark", href: "/dark/home-5" },
          { label: "Home Video Dark", href: "/dark/home-7" },
          { label: "Home One Page Dark", href: "/dark/one-page" },
        ],
      },
    ],
  },
  {
    label: "Pages",
    href: "#",
    children: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Services", href: "/our-services" },
      { label: "Our Team", href: "/our-team" },
      { label: "Single Team", href: "/our-team/single-team" },
      { label: "Our Process", href: "/our-process" },
      { label: "Our Studio", href: "/our-studio" },
      {
        label: "Shop",
        href: "/shop",
        children: [
          { label: "Product Catalog", href: "/shop" },
          { label: "Single Product", href: "/product/grey-velvet-chair" },
          { label: "Cart", href: "/cart" },
          { label: "Checkout", href: "/checkout" },
        ],
      },
      { label: "Typography", href: "/typography" },
      { label: "Elements", href: "/elements" },
      { label: "FAQs", href: "/faqs" },
      { label: "Coming Soon", href: "/coming-soon" },
      { label: "404 Error", href: "/404" },
    ],
  },
  {
    label: "Services",
    href: "/our-services",
    children: [
      { label: "Design & Planning", href: "/our-services/design-planning" },
      { label: "Exterior Design", href: "/our-services/exterior-design" },
      { label: "Custom Solutions", href: "/our-services/custom-solutions" },
      { label: "Furniture & Decor", href: "/our-services/furniture-decor" },
      { label: "Creating Concept", href: "/our-services/creating-concept" },
      { label: "Author's Control", href: "/our-services/authors-control" },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    children: [
      { label: "Blog List", href: "/blog" },
      { label: "Blog Grid Masonry", href: "/blog-grid" },
      {
        label: "Blog Format",
        href: "/blog/standard",
        children: [
          { label: "Standard", href: "/blog/standard" },
          { label: "Gallery", href: "/blog/gallery" },
          { label: "Quote", href: "/blog/quote" },
          { label: "Video", href: "/blog/video" },
          { label: "Link", href: "/blog/link" },
          { label: "Audio", href: "/blog/audio" },
        ],
      },
    ],
  },
  { label: "Contacts", href: "/contacts" },
];

export const sidePanel = {
  logo: "/images/logo-footer.svg",
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
