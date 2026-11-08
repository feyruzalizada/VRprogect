import type { FooterContent } from "@/content/footer";
import type { NavItem } from "@/content/navigation";
import type { SideNavContent } from "@/content/sidenav";

// strings may hold {n}, {a}, {b} or {service}; fill them with fmt()
export type HeroCueText = { watermark: string; title: string; description: string; trust: string };

export type BookUi = {
  subtitle: string;
  sampleBadge: string;
  overline: string;
  title: string;
  intro: string;
  back: string;
  forward: string;
  prevAria: string;
  nextAria: string;
  zoom: string;
  zoomTitle: string;
  fullscreen: string;
  fullscreenTitle: string;
  sliderAria: string;
  jumpAria: string;
  frontCover: string;
  backCover: string;
  page: string;
  pages: string;
  hintCover: string;
  hintBack: string;
  hintPages: string;
  optFront: string;
  optBack: string;
  optPage: string;
  optPages: string;
  zoomFront: string;
  zoomBack: string;
  faceFront: string;
  faceBack: string;
  faceInnerFront: string;
  faceInnerBack: string;
  facePage: string;
  quickTitle: string;
  quickNote: string;
  quick: { cover: string; title: string; copyright: string; contents: string; contentsMore: string; firstSection: string; back: string };
  disclaimerLead: string;
  disclaimer: string;
  controlsNote: string;
  swipe: string;
  bookAria: string;
  bookTitle: string;
  controlsAria: string;
  zoomDialog: string;
  close: string;
  zoomImageAlt: string;
};

export type Ui = {
  search: {
    open: string;
    label: string;
    placeholder: string;
    submit: string;
    results: string;
    empty: string;
    kinds: { section: string; service: string; panel: string; news: string; home: string; quote: string };
    whatsapp: string;
    call: string;
  };
  menu: { open: string; close: string; main: string; language: string };
  calcLabel: string;
  servicesCatalog: string;
  book: BookUi;
};

export type SiteContent = {
  meta: { title: string; description: string; keywords: string[] };
  mainNav: NavItem[];
  hero: HeroCueText[];
  quote: { motto: string; quote: string; name: string; role: string };
  sideNav: SideNavContent;
  footer: FooterContent;
  contact: { callLabel: string; chooseLabel: string; message: string };
  news: { eyebrow: string; heading: string; read: string; back: string; source: string; all: string };
  partnersHeading: string;
  countersHeading: string;
  counters: { label: string; suffix?: string }[];
  ui: Ui;
};
