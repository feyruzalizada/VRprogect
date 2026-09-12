export type SideNavBlockKind = "p" | "flow" | "quote" | "author";

export interface SideNavBlock {
  kind: SideNavBlockKind;
  text: string;
}

export interface SideNavLink {
  id: string;
  label: string;
  body: SideNavBlock[];
}

export interface SideNavContent {
  asideTitle: string;
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
  asideTitle: "VR standartları nədir?",
  links: [
    {
      id: "panel-1",
      label: "ADAPTİV ERQONOMİK ÖLÇÜ SİSTEMİ VƏ ƏMSAL",
      body: [
        { kind: "p", text: "VR Adaptiv Erqonomik Ölçü Sistemi məkanı insanın boyuna, yaşına, fiziki imkanlarına, ailə tərkibinə və həyat tərzinə uyğunlaşdıran elmi-metodoloji müəllif modelidir." },
        { kind: "p", text: "VR Adaptiv Erqonomik Əmsalı və VR Adaptiv Erqonomik Ölçü Sisteminin müəllifi azərbaycanlı Novator Memar Muxtar Ərturandır. Metod onun müəllif kəşfi kimi ilk dəfə “VR Standartları 2026” əsərində sistemli şəkildə təqdim edilmişdir." },
        { kind: "p", text: "VR əmsalı baza ölçüsündən fərdi nəticəyə keçidi təmin edir. P5, P50 və P95 göstəriciləri, yaş, cins, əlçatanlıq, məkanın funksiyası və təhlükəsizlik sərhədləri vahid hesablama məntiqində qiymətləndirilir:" },
        { kind: "flow", text: "Baza ölçüsü → adaptiv hesablama → antropometrik yoxlama → təhlükəsizlik sərhədi → layihə → icra → audit." },
        { kind: "p", text: "Nəticə dəyişməz rəqəm deyil; normativ tələblər və real istifadə sınaqları ilə dəqiqləşdirilən ölçü diapazonudur. Bu yanaşma Azərbaycan memarlıq düşüncəsinin insan mərkəzli və elmi inkişafına verilən orijinal müəllif töhfəsidir." },
        { kind: "quote", text: "“İnsan layihənin son istifadəçisi deyil, onun başlanğıc nöqtəsidir.”" },
        { kind: "author", text: "Novator-Memar, inşaat məsələləri üzrə ekspert Muxtar Ərturan" },
      ],
    },
    {
      id: "panel-2",
      label: "MİLLİ STANDARTLAŞDIRMA MODELİ",
      body: [
        { kind: "p", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo." },
        { kind: "p", text: "Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper." },
      ],
    },
    {
      id: "panel-3",
      label: "MÜASİR TƏMİR EKOSİSTEMİ",
      body: [
        { kind: "p", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo." },
        { kind: "p", text: "Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper." },
      ],
    },
    {
      id: "panel-4",
      label: "PEŞƏKARLIQDA YENİ MƏRHƏLƏ",
      body: [
        { kind: "p", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo." },
        { kind: "p", text: "Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper." },
      ],
    },
    {
      id: "panel-5",
      label: "İNSAN MƏRKƏZLİ TƏHLÜKƏSİZ MƏKAN",
      body: [
        { kind: "p", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo." },
        { kind: "p", text: "Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper." },
      ],
    },
    {
      id: "panel-6",
      label: "MİLLİ İNKİŞAF VƏ RƏQƏMSAL GƏLƏCƏK",
      body: [
        { kind: "p", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo." },
        { kind: "p", text: "Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper." },
      ],
    },
    {
      id: "panel-7",
      label: "MÜASİR AZƏRBAYCAN — DÜNYA MODELI",
      body: [
        { kind: "p", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo." },
        { kind: "p", text: "Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper." },
      ],
    },
    {
      id: "panel-8",
      label: "DİZAYN VƏ MƏKANDA YENİ VİZYON",
      body: [
        { kind: "p", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu leo." },
        { kind: "p", text: "Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper." },
      ],
    },
  ],
  slides: ["/images/slideshow1-home6.jpg", "/images/slideshow2-home6.jpg"],
  mark: "/images/vr_logo.png",
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
