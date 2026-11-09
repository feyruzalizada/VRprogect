// The rest of the VR Mini Demo R3 page around the calculator.
// Text marked Rich may hold **bold** runs and \n line breaks.
export type Rich = string;

export type Topic = "book" | "training" | "design" | "corporate" | "general";

export type RegistryRow = { title: string; desc: string; kind: string };
export type RegistryGroup = { title: string; rows: RegistryRow[] };

export type CalcDemo = {
  // a ready message per contact topic: WhatsApp text and e-mail body, plus the e-mail subject
  topics: Record<Topic, { text: string; subject: string }>;
  actions: {
    whatsapp: string;
    email: string;
    whatsappShort: string;
    emailShort: string;
  };

  nav: {
    brandAria: string;
    brand: string;
    brandSub: string;
    aria: string;
    links: { label: string; href: string }[];
    contact: string;
  };

  hero: {
    eyebrow: string;
    eyebrowSub: string;
    title: string;
    titleAccent: string;
    copy: string;
    byline: string;
    proLine: string;
    accessLabel: string;
    access: string;
    accessMore: string;
    asideAria: string;
    scopeTitle: string;
    scopeSub: string;
    scopeCountLabel: string;
    scopeLines: Rich;
    scopeBottom: string;
  };

  capabilities: {
    eyebrow: string;
    heading: Rich;
    intro: string;
    items: { title: string; text: string; tag: string }[];
    callout: Rich;
  };

  method: {
    eyebrow: string;
    heading: Rich;
    intro: string;
    steps: { title: string; text: string }[];
  };

  family: {
    eyebrow: string;
    heading: string;
    intro: string;
    status: string;
    profile: string;
    height: string;
    unitMm: string;
    profiles: { name: string; height: number }[];
    note: Rich;
  };

  certification: {
    eyebrow: string;
    heading: Rich;
    headingAccent: string;
    key: string;
    copy: Rich;
    channelAria: string;
    whatsappAria: string;
    emailAria: string;
    stepsAria: string;
    steps: Rich[];
    small: string;
  };

  pathways: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: {
      kicker: string;
      title: Rich;
      text: string;
      note: string;
      topic: Topic;
      channelAria: string;
      whatsappAria: string;
      emailAria: string;
    }[];
    access: string;
  };

  standards: {
    eyebrow: string;
    heading: Rich;
    intro: string;
    badgesAria: string;
    badges: string[];
    disclaimer: Rich;
    registryTitle: string;
    registryMeta: string;
    registryCaption: string;
    count: { one: string; few: string; many: string; other: string };
    groups: RegistryGroup[];
    supplemental: RegistryGroup;
    official: {
      title: string;
      count: string;
      checked: string;
      links: { href: string; label: string; text: string }[];
    };
  };

  contact: {
    eyebrow: string;
    heading: Rich;
    copy: string;
    small: string;
    routes: {
      title: string;
      topic: Topic;
      whatsappAria: string;
      emailAria: string;
    }[];
    channelAriaSuffix: string;
    generalWhatsappAria: string;
    generalEmailAria: string;
    phoneLabel: string;
    sendNote: string;
    certNote: string;
    certLink: string;
    website: string;
  };

  rights: {
    eyebrow: string;
    heading: string;
    lead: string;
    author: Rich;
    small: string;
  };

  faq: { aria: string; items: { q: string; a: Rich[] }[] };

  footer: {
    company: string;
    copyright: string;
    author: string;
    product: string;
    version: string;
    note: string;
  };
};
