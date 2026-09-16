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
      "Standartlarla qururuq. Ekspertiza ilə qoruyuruq.",
    trust: "TİKİNTİ • TƏMİR • AUDİT • TEXNİKİ NƏZARƏT",
  },
  {
    id: "cue-02",
    from: 8,
    to: 22,
    watermark: "TİKİNTİ",
    title: "VR TİKİNTİ XİDMƏTİ",
    description:
      "Layihədən təhvila — hər mərhələ vahid standartla idarə olunur.",
    trust: "PLANLAŞDIRMA • İCRA • NƏZARƏT",
  },
  {
    id: "cue-03",
    from: 22,
    to: 38,
    watermark: "AUDİT",
    title: "VR MÜSTƏQİL AUDİT",
    description:
      "Riskləri əvvəlcədən görün. Daha əmin qərarı ekspert rəyi ilə verin.",
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
      "Su, elektrik, isitmə və ventilyasiya sistemlərini kompleks yoxlayırıq.",
    trust: "TƏHLÜKƏSİZLİK • SƏMƏRƏLİLİK • UYĞUNLUQ",
  },
  {
    id: "cue-09",
    from: 111,
    to: 127,
    watermark: "TƏMİR",
    title: "VR TƏMİR XİDMƏTİ",
    description:
      "Layihədən son detala qədər — nəzarət olunan tam icra.",
    trust: "PLAN • İCRA • TƏHVİL",
  },
  {
    id: "cue-10",
    from: 127,
    to: 142,
    watermark: "NƏZARƏT",
    title: "MƏNZİLLƏRDƏ TƏMİRƏ NƏZARƏT",
    description:
      "Qüsuru təhvil zamanı deyil, yarandığı mərhələdə aşkar edirik.",
    trust: "MƏRHƏLƏLİ YOXLAMA • QÜSUR QEYDİ • TƏHVİL AUDİTİ",
  },
  {
    id: "cue-11",
    from: 142,
    to: 158,
    watermark: "DİZAYN",
    title: "VR ADAPTİV DİZAYN",
    description:
      "Məkan insana uyğunlaşmalıdır — insan məkana deyil.",
    trust: "VR STANDARTLARI 2026",
  },
  {
    id: "cue-12",
    from: 158,
    to: 174,
    watermark: "EKSPERTİZA",
    title: "FƏRDİ EVLƏRDƏ VR AUDİTİ",
    description:
      "Konstruksiya, mühəndis sistemləri və icra keyfiyyəti müstəqil qiymətləndirilir.",
    trust: "ALIŞDAN ƏVVƏL • TƏMİRDƏN ƏVVƏL • TƏHVİL ZAMANI",
  },
  {
    id: "cue-13",
    from: 174,
    to: 185,
    watermark: "İZOLYASİYA",
    title: "İZOLYASİYA SİSTEMLƏRİ",
    description:
      "İzolyasiya görünmür. Nəticəsi illərlə hiss olunur.",
    trust: "İSTİLİK • SU • SƏS",
  },
  {
    id: "cue-14",
    from: 185,
    to: 193,
    watermark: "EKSPERT",
    title: "SİZİN TƏRƏFİNİZDƏ MÜSTƏQİL EKSPERT",
    description:
      "Şəffaf rəy, sənədləşdirilmiş nəticə və əsaslandırılmış qərar.",
    trust: "MÜŞTƏRİNİN MARAQLARI QORUNUR",
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

export const heroSocial = [
  { label: "Youtube", href: "https://youtube.com/@vrprojectaz?si=MyBR-4mzQdGecUab" },
  { label: "Tik Tok", href: "https://www.tiktok.com/@vrproject.az?_r=1&_t=ZS-99iislsgC0d" },
  { label: "Facebook", href: "https://www.facebook.com/share/1dPk5xoG5L/?mibextid=wwXIfr" },
  { label: "Instagram", href: "https://www.instagram.com/vrproject.az?stkn=MXVqM3Jrc2xlajJrZg%3D%3D&utm_source=qr" },
];
