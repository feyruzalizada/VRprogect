export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContact {
  label: string;
  value: string;
  href?: string;
}

export interface FooterContent {
  about: string;
  navHeading: string;
  nav: FooterLink[];
  contactHeading: string;
  contacts: FooterContact[];
  socialHeading: string;
  copyright: string;
  legal: FooterLink[];
}

export const footer: FooterContent = {
  about:
    "Layihədən icraya, icradan auditə qədər hər mərhələni VR standartları üzrə aparırıq. Ölçü insana görə seçilir, iş sənədlə təsdiqlənir.",
  navHeading: "Naviqasiya",
  nav: [
    { label: "VR standartları 2026", href: "#kitab" },
    { label: "VR adaptiv hesablama", href: "#kalkulyator" },
    { label: "Üslub statistikası", href: "#uslub-statistikasi" },
    { label: "Xidmətlər", href: "#xidmetler" },
    { label: "Rəsmi tərəfdaşlar", href: "#partnyorlar" },
    { label: "Uğurlar", href: "#ugurlar" },
  ],
  contactHeading: "Əlaqə",
  // TODO: real address, phone and mail from the client
  contacts: [
    { label: "Ünvan", value: "Bakı, Azərbaycan" },
    { label: "Telefon", value: "+994 00 000 00 00", href: "tel:+99400000000" },
    { label: "E-poçt", value: "info@vrproject.az", href: "mailto:info@vrproject.az" },
    { label: "İş saatları", value: "B.e — Şən, 09:00 — 18:00" },
  ],
  socialHeading: "Bizi izləyin",
  copyright: "VR Global Group. Bütün hüquqlar qorunur.",
  legal: [
    { label: "Məxfilik siyasəti", href: "#" },
    { label: "İstifadə şərtləri", href: "#" },
  ],
};
