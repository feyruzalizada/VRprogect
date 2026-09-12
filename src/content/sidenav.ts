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
  subtitle: string;
  description: string[];
  author: string;
  authorRole: string;
  ctaLabel: string;
  ctaHref: string;
}

export const sideNav: SideNavContent = {
  logo: "/images/vr_logo.png",
  links: [
    { label: "MİLLİ STANDARTLAŞDIRMA MODELİ", href: "#" },
    { label: "MÜASİR TƏMİR EKOSİSTEMİ", href: "#" },
    { label: "PEŞƏKARLIQDA YENİ MƏRHƏLƏ", href: "#" },
    { label: "İNSAN MƏRKƏZLİ TƏHLÜKƏSİZ MƏKAN", href: "#" },
    { label: "MİLLİ İNKİŞAF VƏ RƏQƏMSAL GƏLƏCƏK", href: "#" },
    { label: "MÜASİR AZƏRBAYCAN — DÜNYAYA AÇILAN MODEL", href: "#" },
    { label: "DİZAYN VƏ MƏKANIN YENİ VİZYONU", href: "#" },
  ],
  slides: ["/images/slideshow1-home6.jpg", "/images/slideshow2-home6.jpg"],
  mark: "/images/logo-home6.png",
  heading: ["VR STANDARTLARI 2026"],
  subtitle: "VR Adaptiv Erqonomik Ölçü Sistemi",
  description: [
    "Daxili məkanların insan mərkəzli planlaşdırılması, layihələndirilməsi, icrası və auditi üzrə metodoloji elmi əsər",
    "2026-cı ilin “Şəhərsalma və Memarlıq İli” elan edilməsi münasibətilə hazırlanmışdır",
  ],
  author: "Müəllif: Muxtar Ərturan",
  authorRole: "Novator-memar, inşaat məsələləri üzrə ekspert",
  ctaLabel: "Kitabı yüklə",
  ctaHref: "#",
};
