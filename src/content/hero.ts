export interface HeroCue {
  id: string;
  /** seconds — the cue shows while the video is between `from` and `to` */
  from: number;
  to: number;
  watermark: string;
  title: string;
  description: string;
  /** small line under the description */
  trust: string;
}

export const heroVideo = {
  /** HLS playlist — the clip is served as segments, not as one downloadable file */
  hls: "/stream/hero.m3u8",
  /** used only by browsers without HLS support */
  mp4: "",
  poster: "/images/hero-poster.jpg",
};

export const heroCues: HeroCue[] = [
  {
    id: "cue-01",
    from: 0,
    to: 8,
    watermark: "STANDART",
    title: "VR GLOBAL GROUP",
    description:
      "Standartlarla qururuq. Audit ilə yoxlayırıq.",
    trust: "TİKİNTİ • TƏMİR • AUDİT • TEXNİKİ NƏZARƏT",
  },
  {
    id: "cue-02",
    from: 8,
    to: 22,
    watermark: "TİKİNTİ",
    title: "VR TİKİNTİ XİDMƏTİ",
    description:
      "Layihədən təhvilə — hər mərhələ vahid standartla idarə olunur.",
    trust: "PLANLAŞDIRMA • İCRA • NƏZARƏT",
  },
  {
    id: "cue-03",
    from: 22,
    to: 38,
    watermark: "AUDİT",
    title: "VR EKSPERT AUDİT",
    description:
      "Riskləri əvvəlcədən görün. Qərar ekspert, rəyi akt.",
    trust: "OBYEKTİV BAXIŞ • SƏNƏDLƏŞDİRİLMİŞ NƏTİCƏ",
  },
  {
    id: "cue-04",
    from: 38,
    to: 55,
    watermark: "YOXLAMA",
    title: "VR YOXLAMA XİDMƏTLƏRİ",
    description:
      "Ölçürük. Yoxlayırıq. Sənədləşdiririk.",
    trust: "KONSTRUKSİYA • İCRA • ÖLÇÜ UYĞUNLUĞU",
  },
  {
    id: "cue-05",
    from: 55,
    to: 70,
    watermark: "MATERİAL",
    title: "MATERİAL VƏ İCRA KEYFİYYƏTİ",
    description:
      "Düzgün material. Düzgün texnologiya. Uzunömürlü nəticə.",
    trust: "QƏBUL YOXLAMASI • İCRA NƏZARƏTİ",
  },
  {
    id: "cue-06",
    from: 70,
    to: 84,
    watermark: "LAYİHƏ",
    title: "LAYİHƏLƏNDİRMƏ VƏ MÜHƏNDİSLİK",
    description:
      "Hər detal hesablanır, hər qərar layihə ilə əsaslandırılır.",
    trust: "MEMARLIQ • KONSTRUKSİYA • MÜHƏNDİS HƏLLƏRİ",
  },
  {
    id: "cue-07",
    from: 84,
    to: 95,
    watermark: "AKADEMİYA",
    title: "VR AKADEMİYA",
    description:
      "Biliyi praktikaya, təcrübəni peşəkar standarta çeviririk.",
    trust: "TƏLİM • DİZAYN DƏRSLƏRİ • PEŞƏKAR İNKİŞAF",
  },
  {
    id: "cue-08",
    from: 95,
    to: 111,
    watermark: "SİSTEM",
    title: "MÜHƏNDİS SİSTEMLƏRİNİN AUDİTİ",
    description:
      "Su, elektrik, isitmə və ventilyasiya sistemlərinin kompleks auditi.",
    trust: "TƏHLÜKƏSİZLİK • SƏMƏRƏLİLİK • UYĞUNLUQ",
  },
  {
    id: "cue-09",
    from: 111,
    to: 127,
    watermark: "TƏMİR",
    title: "VR TƏMİR XİDMƏTİ",
    description:
      "Layihədən icraya, nəzarətdən auditə tam təhvil.",
    trust: "DİZAYN • İCRA • NƏZARƏT • TƏHVİL",
  },
  {
    id: "cue-10",
    from: 127,
    to: 142,
    watermark: "NƏZARƏT",
    title: "MƏNZİLLƏRDƏ TƏMİRƏ NƏZARƏT",
    description:
      "Qüsurların aşkarlanması, yerində həlli, ustaya nəzarət.",
    trust: "MƏRHƏLƏLİ YOXLAMA • QÜSUR QEYDİ • TƏHVİL AUDİTİ",
  },
  {
    id: "cue-11",
    from: 142,
    to: 158,
    watermark: "DİZAYN",
    title: "VR ADAPTİV DİZAYN",
    description:
      "VR standartları ilə, muasirlik və zövq.",
    trust: "VR STANDARTLARI 2026",
  },
  {
    id: "cue-12",
    from: 158,
    to: 174,
    watermark: "EKSPERTİZA",
    title: "FƏRDİ EVLƏRDƏ VR AUDİTİ",
    description:
      "Konstruksiya, havalandırma, isitmə və soyutma, izolyasiya, təhlükəsizlik və zəmanət.",
    trust: "ALIŞDAN ƏVVƏL • TƏMİRDƏN ƏVVƏL • TƏHVİL ZAMANI",
  },
  {
    id: "cue-13",
    from: 174,
    to: 185,
    watermark: "İZOLYASİYA",
    title: "İZOLYASİYA SİSTEMLƏRİ",
    description:
      "Səs, rütubət, termal, yanğın, isti və soyuq.",
    trust: "İSTİLİK • SU • SƏS",
  },
  {
    id: "cue-14",
    from: 185,
    to: 193,
    watermark: "EKSPERT",
    title: "VR EKSPERT GRUP",
    description:
      "Şəffaf rəy, sənədləşdirilmiş nəticə və əsaslandırılmış qərar.",
    trust: "OBYEKTİV, QƏRƏZSİZ, KOMPLEKS EKSPERTIZA",
  },
  {
    id: "cue-15",
    from: 193,
    to: 199,
    watermark: "ETİBAR",
    title: "VR GLOBAL GROUP",
    description:
      "Standart. Nəzarət. Etibar.",
    trust: "PEŞƏKAR KONSULTASİYA AL",
  },
];

export interface HeroSocialLink {
  id: "youtube" | "tiktok" | "facebook" | "instagram";
  href: string;
  label: string;
}

export const heroSocial: HeroSocialLink[] = [
  {
    id: "youtube",
    href: "https://youtube.com/@vrprojectaz?si=MyBR-4mzQdGecUab",
    label: "Youtube",
  },
  {
    id: "tiktok",
    href: "https://www.tiktok.com/@vrproject.az?_r=1&_t=ZS-99iislsgC0d",
    label: "Tik Tok",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/share/1dPk5xoG5L/?mibextid=wwXIfr",
    label: "Facebook",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/vrproject.az?stkn=MXVqM3Jrc2xlajJrZg%3D%3D&utm_source=qr",
    label: "Instagram",
  },
];
