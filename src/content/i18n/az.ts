import { contact } from "@/content/contact";
import { footer } from "@/content/footer";
import { heroCues } from "@/content/hero";
import { mainNav } from "@/content/navigation";
import { news } from "@/content/news";
import { partnersHeading } from "@/content/partners";
import { quoteBanner } from "@/content/quote";
import { countersHeading, services } from "@/content/services";
import { sideNav } from "@/content/sidenav";
import { siteDescription, siteKeywords, siteTitle } from "@/lib/site";

import type { SiteContent } from "./types";

// the Azerbaijani original, assembled from the content files it has always lived in
export const az: SiteContent = {
  meta: { title: siteTitle, description: siteDescription, keywords: siteKeywords },
  mainNav,
  hero: heroCues.map(({ watermark, title, description, trust }) => ({ watermark, title, description, trust })),
  quote: { motto: quoteBanner.motto, quote: quoteBanner.quote, name: quoteBanner.author.name, role: quoteBanner.author.role },
  sideNav,
  footer,
  contact: { callLabel: contact.callLabel, chooseLabel: contact.chooseLabel, message: contact.message("{service}") },
  news: { eyebrow: news.eyebrow, heading: news.heading, read: news.read, back: news.back, source: news.source, all: news.all },
  partnersHeading,
  countersHeading,
  counters: services.counters.map(({ label, suffix }) => ({ label, suffix })),
  ui: {
    search: {
      open: "Axtarış",
      label: "Saytda axtar",
      placeholder: "AXTAR...",
      submit: "Axtar",
      results: "Nəticələr",
      empty: "Saytda uyğun nəticə yoxdur.",
      kinds: { section: "Bölmə", service: "Xidmət", panel: "VR Standartları", news: "Xəbər", home: "Ana səhifə", quote: "Sitat" },
      whatsapp: "Müraciət et, sifariş et — xidmət kartındakı düymə ilə",
      call: "Telefonla müraciət",
    },
    menu: { open: "Menyunu aç", close: "Bağla", main: "Əsas menyu", language: "Dil" },
    calcLabel: "VR adaptiv hesablama",
    servicesCatalog: "Xidmətlər",
    book: {
      name: "VR STANDARTLARI 2026",
      subtitle: "İnteraktiv elektron kitab • R14",
      sampleBadge: "NÜMUNƏ · 24 / 889 SƏHİFƏ",
      overline: "Məkan insana uyğunlaşır",
      title: "Canlı səhifə çevirmə təcrübəsi",
      intro: "Kitabın üz qabığına klikləyin və ya aşağıdakı keçid düymələrindən istifadə edin.",
      back: "← Geri",
      forward: "İrəli →",
      prevAria: "Əvvəlki vərəq",
      nextAria: "Növbəti vərəq",
      zoom: "⛶ Böyüt",
      zoomTitle: "Mövcud səhifəni böyük aç",
      fullscreen: "▣ Tam ekran",
      fullscreenTitle: "Tam ekran",
      sliderAria: "Kitabda keçid zolağı",
      jumpAria: "Səhifəyə keç",
      frontCover: "Ön üz qabığı",
      backCover: "Arxa üz qabığı",
      page: "Səhifə {n} / 889",
      pages: "Səhifələr {a}–{b} / 889",
      hintCover: "Üz qabığına klikləyin — kitab açılacaq",
      hintBack: "Arxa üz • sol tərəfə klikləyərək geri qayıdın",
      hintPages: "Sağ səhifəyə klik — irəli · Sol səhifəyə klik — geri",
      optFront: "Ön üz",
      optBack: "Arxa üz",
      optPage: "Səhifə {n}",
      optPages: "Səhifələr {a}–{b}",
      zoomFront: "Ön üz — FINAL",
      zoomBack: "Arxa üz — FINAL",
      faceFront: "Təsdiqlənmiş ön üz",
      faceBack: "Təsdiqlənmiş arxa üz",
      faceInnerFront: "Ön daxili üz",
      faceInnerBack: "Arxa daxili üz",
      facePage: "PDF səhifəsi {n}",
      quickTitle: "Birbaşa keçid",
      quickNote: "Yoxlama üçün seçilmiş səhifələr",
      quick: { cover: "Üz qabığı", title: "Titul", copyright: "Müəlliflik", contents: "Mündəricat", contentsMore: "Mündəricatın davamı", firstSection: "İlk bölmə", back: "Arxa üz" },
      disclaimerLead: "İŞLƏK NÜMUNƏ · PRINT-001/R14.",
      disclaimer: "İçəridəki ilk 24 səhifə təqdim etdiyiniz 889 səhifəlik PDF-dən dəyişdirilmədən görüntü kimi götürülüb; ön və arxa üzlər təsdiqlənmiş orijinal fayllardır. Bu, bütün kitabın tamamlanmış elektron nəşri deyil.",
      controlsNote: "İdarəetmə:",
      swipe: "barmaqla sürüşdürmə.",
      bookAria: "VR Standartları 2026 — vərəqlənən 3D kitab",
      bookTitle: "Sağ tərəfə klikləyin: irəli; sol tərəfə: geri",
      controlsAria: "Kitab idarəetməsi",
      zoomDialog: "Səhifəyə yaxından baxış",
      close: "Bağla ✕",
      zoomImageAlt: "Seçilmiş kitab səhifəsi",
    },
  },
};
