// VR MINI DEMO — WEB R3, text as in the approved HTML (VR_MINI_DEMO_WEB_R3_ONBAXIS)
import { registryAz } from "./registry-az";
import type { CalcDemo } from "./types";

export const calcDemoAz: CalcDemo = {
  topics: {
    book: {
      text: "Salam. “VR Standartları 2026” kitabını sifariş etmək istəyirəm.",
      subject: "VR Standartları 2026 — kitab sifarişi",
    },
    training: {
      text: "Salam. “VR Standartları 2026” metodiki təlimlərinə qeydiyyatdan keçmək istəyirəm.",
      subject: "VR Standartları 2026 — təlimlərə qeydiyyat",
    },
    design: {
      text: "Salam. VR Standartları 2026 əsasında dizayn və layihə sifariş etmək istəyirəm.",
      subject: "VR Standartları 2026 — dizayn və layihə sifarişi",
    },
    corporate: {
      text: "Salam. İnşaat şirkətimiz üçün müqavilə əsasında VR Standartları 2026 və kalkulyatorun professional istifadəsi üzrə korporativ təlim təşkil etmək istəyirəm.",
      subject: "VR Standartları 2026 — korporativ təlim müraciəti",
    },
    general: {
      text: "Salam. VR Standartları 2026 kitabı, metodiki təlimlər və xidmətləriniz haqqında məlumat almaq istəyirəm.",
      subject: "VR MINI DEMO — məlumat sorğusu",
    },
  },
  actions: {
    whatsapp: "WhatsApp ilə müraciət et",
    email: "E-poçtla müraciət et",
    whatsappShort: "WhatsApp",
    emailShort: "E-poçt",
  },

  nav: {
    brandAria: "VR GLOBAL GROUP MMC rəsmi saytı",
    brand: "VR GLOBAL GROUP",
    brandSub: "MİLLİ STANDARTLAR",
    aria: "Səhifə naviqasiyası",
    links: [
      { label: "İmkanlar", href: "#kalk-imkanlar" },
      { label: "Layihə və təlim", href: "#kalk-yollar" },
      { label: "İstinadlar", href: "#kalk-istinadlar" },
    ],
    contact: "Bizimlə əlaqə",
  },

  hero: {
    eyebrow: "VR STANDARTLARI 2026",
    eyebrowSub: "MƏHDUD NÜMAYİŞ",
    title: "Məkan sizə",
    titleAccent: "uyğunlaşsın.",
    copy: "Eyni ölçü, fərqli insanlar. Boyunuzu daxil edin və üç interyer elementində baza ölçü ilə ilkin fərdi nəticənin fərqini görün.",
    byline: "Muxtar Ərturanın VR Adaptiv Erqonomik Ölçü Sistemi",
    proLine:
      "Professional sistem: erqonomika · işıqlandırma · havalandırma · isitmə-soyutma · təhlükəsizlik",
    accessLabel: "PROFESSIONAL VERSİYAYA GİRİŞ",
    access:
      "Yalnız metodiki təlimi tamamlayan və xüsusi sertifikat alan tələbələr üçün.",
    accessMore: "Təqdimat şərtinə baxın",
    asideAria: "Nümayişin əhatəsi",
    scopeTitle: "VR MINI DEMO",
    scopeSub: "WEB / R3",
    scopeCountLabel: "seçilmiş element",
    scopeLines:
      "Bir boy göstəricisi.\nÜç ilkin müqayisə.\nİnsan mərkəzli yanaşma.",
    scopeBottom: "Pulsuz · Qeydiyyatsız",
  },

  capabilities: {
    eyebrow: "PROFESSIONAL SİSTEMİN ƏHATƏSİ",
    heading: "Yalnız üç ölçü deyil.\nBütöv məkan yanaşması.",
    intro:
      "Bu açıq demo sistemin kiçik hissəsini göstərir. Professional kalkulyatorda erqonomika ilə yanaşı işıqlandırma, havalandırma, isitmə-soyutma və təhlükəsizlik üzrə ilkin hesab və yoxlama bölmələri də yer alır.",
    items: [
      {
        title: "Fərdi və ailəvi erqonomika",
        text: "İstifadəçi antropometriyası, element bazası, fərdi nəticələr və uyğun olduqda ortaq ilkin namizədlər.",
        tag: "Ölçmə · müqayisə · funksional yoxlama",
      },
      {
        title: "İşıqlandırma",
        text: "Fəaliyyət zonaları üzrə işıqlanma, ilkin işıq axını və işıqlandırma həllərinin qiymətləndirilməsi.",
        tag: "lx · lm · fəaliyyət səthləri",
      },
      {
        title: "Havalandırma",
        text: "Otağın funksiyası və həcminə bağlı ilkin hava sərfi, hava yolu və daxili hava keyfiyyəti üzrə yoxlamalar.",
        tag: "m³/saat · hava axını · mənbə nəzarəti",
      },
      {
        title: "İsitmə və soyutma",
        text: "İqlim, otaq və konstruksiya məlumatları üzrə ilkin istilik-soyutma qiymətləndirməsi və avadanlıq seçiminə hazırlıq.",
        tag: "W / kW · iqlim · istilik yükü",
      },
      {
        title: "Təhlükəsizlik sistemləri",
        text: "Yanğın aşkarlanması, elektrik, qaz / CO, su sızması, təxliyə və əlçatanlıq üzrə texniki yoxlama istiqamətləri.",
        tag: "Risk · mühəndis baxışı · təhlükəsizlik",
      },
      {
        title: "Otaq və layihə hesabatı",
        text: "Məkanlar üzrə ölçülər, baza və mənbə statusları, fərdi nəticələr və mütəxəssis dəqiqləşdirməsi tələb edən hissələr.",
        tag: "Mənbə · nəticə · qərar izi",
      },
    ],
    callout:
      "**Professional imkanlar burada tanıdılır, açıq demoda işə salınmır.** İlkin mühəndis hesabları tam layihəni, cihaz seçimini və təhlükəsizlik təsdiqini əvəz etmir. Nəticələr faktiki ölçülər, tətbiq olunan tələblər və mütəxəssis yoxlaması ilə tamamlanır.",
  },

  method: {
    eyebrow: "RƏQƏMDƏN QƏRARA",
    heading: "Hesab başlanğıcdır.\nUyğunluq ayrıca yoxlanır.",
    intro:
      "İlkin nəticə bir göstəricidir. Onun sizin məkanınızda düzgün tətbiqi əlavə ölçmə və peşəkar qərar tələb edir.",
    steps: [
      {
        title: "Baza ölçüsü",
        text: "Kitabdakı ilkin istinad göstərilir. Bu rəqəm universal montaj norması deyil.",
      },
      {
        title: "Fərdi müqayisə",
        text: "Boyunuz əsasında yalnız ilkin proporsional nəticə hesablanır.",
      },
      {
        title: "Funksional yoxlama",
        text: "Açarda əlçatma, oturacaqda dizaltı, iş səthində dirsək ölçüsü və real istifadə qiymətləndirilir.",
      },
      {
        title: "Layihə qərarı",
        text: "Məhsul, təhlükəsizlik və obyektin şərtləri yoxlandıqdan sonra mütəxəssis tərəfindən müəyyən edilir.",
      },
    ],
  },

  family: {
    eyebrow: "BİR EV. FƏRQLİ İNSANLAR.",
    heading: "Ailə üçün necə işləyir?",
    intro:
      "Üç şərti yetkin profil üzrə hazır nümunəyə baxın. Öz ailə üzvlərinizi əlavə etmək demo imkanına daxil deyil.",
    status:
      "İşıq açarının mərkəzi · baza: 900 mm. Üç şərti yetkin profil. Bu, ailənizin hesabı deyil. Ortaq montaj hündürlüyü hesablanmır.",
    profile: "{name} profili",
    height: "Boy: {n} sm",
    unitMm: "mm",
    profiles: [
      { name: "A", height: 160 },
      { name: "B", height: 170 },
      { name: "C", height: 180 },
    ],
    note: "**Ortaq ölçü avtomatik orta rəqəm deyil.** Burada ortaq montaj hündürlüyü hesablanmır. Hər şəxsin faktiki əlçatması, istifadə rolu və təhlükəsizlik ayrıca qiymətləndirilməlidir.",
  },

  certification: {
    eyebrow: "PROFESSIONAL İSTİFADƏ ÜÇÜN MƏCBURİ ŞƏRT",
    heading: "Metodiki təlim.\nXüsusi sertifikat.",
    headingAccent: "Professional kalkulyator.",
    key: "VR Adaptiv Erqonomik Kalkulyatorun professional versiyası yalnız “VR Standartları 2026” metodiki təlimini tamamlayan və xüsusi sertifikat alan tələbələrə təqdim ediləcək.",
    copy: "Bu, əldə edilən biliklərin gələcək peşəkar fəaliyyətdə düzgün tətbiqi üçündür. **Kursda sadəcə iştirak etmək kifayət etmir.**",
    channelAria: "Təlimlərə qeydiyyat üçün əlaqə kanalı",
    whatsappAria: "Təlimlərə qeydiyyat — WhatsApp",
    emailAria: "Təlimlərə qeydiyyat — e-poçt",
    stepsAria: "Professional versiyanın təqdimat ardıcıllığı",
    steps: [
      "“VR Standartları 2026”\n**metodiki təlimini tamamlayın.**",
      "Təlim üzrə\n**xüsusi sertifikat əldə edin.**",
      "Professional kalkulyatorla\n**peşəkar fəaliyyətinizi davam etdirin.**",
    ],
    small:
      "Professional versiyanın təqdimatı və istifadəsi şirkətin müəyyən etdiyi qaydalarla rəsmiləşdirilir. Korporativ təlimdə iştirak da metodiki təlim və xüsusi sertifikat şərtini əvəz etmir. Açıq demoda professional versiyanın yüklənməsi və avtomatik giriş yoxdur.",
  },

  pathways: {
    eyebrow: "LAYİHƏ · TƏHSİL · KORPORATİV ƏMƏKDAŞLIQ",
    heading: "VR ilə işləməyin üç yolu.",
    intro: "Nümayişdən real layihəyə, təlimdən professional istifadəyə.",
    items: [
      {
        kicker: "01 / LAYİHƏ SİFARİŞİ",
        title: "Hesablanmış ölçülərlə\ndaxili məkan həlləri.",
        text: "VR Standartları 2026 əsasında dizayn və layihə sifariş verdikdə, VR Adaptiv Erqonomik Kalkulyatorla hesablamalar aparılır və istifadəçi, məkan və avadanlıq xüsusiyyətlərinə uyğun daxili məkan həlləri hazırlanır.",
        note: "Baza → fərdi hesab → funksional yoxlama → layihə həlli",
        topic: "design",
        channelAria: "Dizayn və layihə sifarişi üçün əlaqə kanalı",
        whatsappAria: "Dizayn və layihə sifarişi — WhatsApp",
        emailAria: "Dizayn və layihə sifarişi — e-poçt",
      },
      {
        kicker: "02 / TƏLƏBƏLƏR ÜÇÜN",
        title: "Sertifikatlı təlimdən\npeşəkar istifadəyə.",
        text: "“VR Standartları 2026” metodiki təlimini tamamlayan və xüsusi sertifikat alan tələbələrə gələcək peşəkar fəaliyyətlərində istifadə üçün VR Adaptiv Erqonomik Kalkulyatorun professional versiyası təqdim ediləcək. Təlimdə hesabların aparılması, nəticələrin şərhi və tətbiq sərhədləri öyrədilir.",
        note: "Yalnız metodiki təlimi tamamlayan və xüsusi sertifikat alan tələbələr. Kursda sadəcə iştirak etmək kifayət etmir.",
        topic: "training",
        channelAria: "Təlimlərə qeydiyyat üçün əlaqə kanalı",
        whatsappAria: "Təlimlərə qeydiyyat — WhatsApp",
        emailAria: "Təlimlərə qeydiyyat — e-poçt",
      },
      {
        kicker: "03 / İNŞAAT ŞİRKƏTLƏRİ ÜÇÜN",
        title: "Komandanız üçün\nkorporativ təlimlər.",
        text: "İnşaat şirkətləri ilə müqavilə əsasında korporativ treninqlər keçirilir. Proqrama VR Standartları metodologiyasının layihə prosesində tətbiqi və kalkulyatorun professional istifadəsi üzrə təlimlər daxildir.",
        note: "Təlimin formatı və əhatəsi müqavilə ilə müəyyən olunur. Professional versiyanın təqdimatında metodiki təlimi tamamlamaq və xüsusi sertifikat almaq şərti qorunur.",
        topic: "corporate",
        channelAria: "Korporativ təlim üçün əlaqə kanalı",
        whatsappAria: "Korporativ təlim — WhatsApp",
        emailAria: "Korporativ təlim — e-poçt",
      },
    ],
    access:
      "Professional versiya yalnız metodiki təlimi tamamlayan və xüsusi sertifikat alan tələbələrə, ayrıca istifadə qaydaları çərçivəsində təqdim ediləcək. Kitab sifarişi, layihə sifarişi və ya açıq demodan istifadə avtomatik professional giriş yaratmır.",
  },

  standards: {
    eyebrow: "ELMİ VƏ TEXNİKİ İSTİNAD XƏRİTƏSİ",
    heading: "Mənbəsi görünən\nlayihə yanaşması.",
    intro:
      "VR Standartları 2026-da yerli normalar və beynəlxalq texniki mənbələr fərqli tətbiq sahələri ilə təqdim olunur. Aşağıdakı adlar istinaddır; şirkətin, kalkulyatorun və ya nəticələrin bu qurumlar tərəfindən sertifikatlaşdırıldığını bildirmir.",
    badgesAria: "İstinad ailələri; sertifikat nişanları deyil",
    badges: [
      "AzDTN",
      "AZS / GOST",
      "ISO",
      "EN",
      "IEC",
      "DIN",
      "BS",
      "ASTM",
      "ASHRAE",
      "CIE / IES",
      "ADA",
      "NFPA",
    ],
    disclaimer:
      "**Yerli tətbiq tələbləri əsasdır.** Standart, qanun, elmi bələdçi, məhsul bəyannaməsi və sertifikatlaşdırma sistemi eyni anlayış deyil. Konkret hissə, qüvvədə olan redaksiya və obyektə tətbiq sahəsi hər layihə üçün ayrıca yoxlanılır. Rəsmi loqolar və sertifikat nişanları istifadə edilmir.",
    registryTitle: "R14 kitabının seçilmiş mənbə reyestri",
    registryMeta: "Əlavə C · 70 qeyd · 12 qrup",
    registryCaption:
      "Reyestrdəki 70 nömrəli qeydin hamısı aşağıda qruplaşdırılıb. Bu, dünyada mövcud bütün standartların və ya kitabın bütün biblioqrafiyasının siyahısı deyil. İstinadın görünməsi onun bütöv metodunun demoda hesablandığı mənasına gəlmir.",
    count: {
      one: "{n} qeyd",
      few: "{n} qeyd",
      many: "{n} qeyd",
      other: "{n} qeyd",
    },
    ...registryAz,
  },

  contact: {
    eyebrow: "NÖVBƏTİ ADDIM",
    heading: "Üç ölçüdən\nbütöv məkana.",
    copy: "Kitabı sifariş edin, VR hesablamaları ilə dizayn və layihə həlləri üçün müraciət edin. Tələbə təlimləri və şirkətiniz üçün müqavilə əsaslı korporativ treninqlər haqqında məlumat alın.",
    small:
      "Tam otaq proqramı, çoxistifadəçili hesablamalar və peşəkar hesabatlar bu açıq demoya daxil deyil.",
    routes: [
      {
        title: "Kitabı sifariş et",
        topic: "book",
        whatsappAria: "Kitab sifarişi — WhatsApp",
        emailAria: "Kitab sifarişi — e-poçt",
      },
      {
        title: "Təlimlərə qeydiyyatdan keç",
        topic: "training",
        whatsappAria: "Təlimlərə qeydiyyat — WhatsApp",
        emailAria: "Təlimlərə qeydiyyat — e-poçt",
      },
      {
        title: "Dizayn və layihə sifarişi",
        topic: "design",
        whatsappAria: "Dizayn və layihə sifarişi — WhatsApp",
        emailAria: "Dizayn və layihə sifarişi — e-poçt",
      },
      {
        title: "Korporativ təlim sifarişi",
        topic: "corporate",
        whatsappAria: "Korporativ təlim — WhatsApp",
        emailAria: "Korporativ təlim — e-poçt",
      },
    ],
    channelAriaSuffix: "{title} üçün əlaqə kanalı",
    generalWhatsappAria: "Ümumi müraciət — WhatsApp",
    generalEmailAria: "Ümumi müraciət — e-poçt",
    phoneLabel: "WhatsApp · 050 200 51 21",
    sendNote:
      "Seçdiyiniz müraciətin mətni hazır açılır. Mesaj yalnız siz “Göndər” düyməsini basdıqdan sonra göndərilir; bu keçid avtomatik sifariş və ya qeydiyyat təsdiqi deyil.",
    certNote:
      "Professional versiya yalnız metodiki təlimi tamamlayan və xüsusi sertifikat alan tələbələrə təqdim ediləcək.",
    certLink: "Təqdimat şərtinə baxın.",
    website: "Kitabın tanışlıq hissəsi · millistandart.az",
  },

  rights: {
    eyebrow: "ƏQLİ MÜLKİYYƏT VƏ MÜƏLLİFLİK",
    heading: "VR GLOBAL GROUP MMC-nin əqli mülkiyyətidir.",
    lead: "VR Adaptiv Erqonomik Kalkulyator və “VR MINI DEMO — WEB” müəlliflik hüququ ilə qorunur.",
    author:
      "VR Adaptiv Erqonomik Əmsalı və VR Adaptiv Erqonomik Ölçü Sisteminin müəllifi **Muxtar Ərturandır**. Metod ilk dəfə “VR Standartları 2026” elmi əsərində sistemli şəkildə təqdim edilmişdir.",
    small:
      "Qanunvericilikdə nəzərdə tutulan istisnalar saxlanılmaqla, hüquq sahibinin yazılı icazəsi olmadan proqram kodunun, mətnlərin və orijinal təqdimat materiallarının köçürülməsi, dəyişdirilərək yayılması və kommersiya istifadəsinə yol verilmir. Professional istifadə üçün şirkətlə razılaşdırılmış şərtlər tətbiq olunur.",
  },

  faq: {
    aria: "Mənbə və istifadə şərtləri",
    items: [
      {
        q: "Professional kalkulyator kimlərə təqdim edilir?",
        a: [
          "**Yalnız “VR Standartları 2026” metodiki təlimini tamamlayan və xüsusi sertifikat alan tələbələrə.** Kursda sadəcə iştirak etmək kifayət etmir. Professional versiya gələcək peşəkar fəaliyyətdə istifadə üçün şirkətin müəyyən etdiyi qaydalarla təqdim ediləcək. Açıq demoda sertifikat yoxlanması, professional hesab açılması və ya proqramın yüklənməsi aparılmır.",
        ],
      },
      {
        q: "İnşaat şirkətləri üçün korporativ təlimlər necə təşkil olunur?",
        a: [
          "İnşaat şirkətləri ilə müqavilə əsasında korporativ treninqlər və kalkulyatorun professional istifadəsi üzrə təlimlər keçirilir. Proqram, format və iştirak şərtləri müqavilədə müəyyən olunur. Professional versiyanın təqdimatı üçün metodiki təlimin tamamlanması və xüsusi sertifikat şərti korporativ iştirakçılara da aiddir.",
        ],
      },
      {
        q: "Mənbə və elmi tətbiq sərhədi",
        a: [
          "“VR Standartları 2026”, PRINT-001/R14: §6.5–§6.6 — ilkin proporsional model; §6.7 — işıq açarı; §6.8 — mətbəx iş səthi; §6.10 — oturacaq. Metodoloji istinad boyu 1700 mm-dir. Bu, əhalinin rəsmi orta boyu deyil.",
          "Göstərilən rəqəmlər təqdimat üçün 1 mm-ə yuvarlaqlaşdırılır; montaj müsaidəsi deyil. Eyni boy müxtəlif funksional bədən ölçülərini əvəz etmir. Uşaq, xüsusi əlçatanlıq və fərqli funksional ehtiyaclar bu məhdud nümunədə qiymətləndirilmir. Mütəxəssisə müraciət edin.",
          "VR Adaptiv Erqonomik Əmsalı və VR Adaptiv Erqonomik Ölçü Sisteminin müəllifi Muxtar Ərturandır. Metod ilk dəfə “VR Standartları 2026” elmi əsərində sistemli şəkildə təqdim edilmişdir.",
        ],
      },
      {
        q: "Demo nəyi açmır?",
        a: [
          "Yalnız üç seçilmiş element üzrə ilkin müqayisə açıqdır. Əlavə istifadəçi və otaq yaratmaq, tam element reyestrini görmək, mühəndislik hesablamaları aparmaq, PDF/Excel/JSON hesabatı çıxarmaq mümkün deyil. Hazır ailə nümunəsi dəyişdirilə bilən layihə deyil.",
          "Kitabın tam faylı və peşəkar kalkulyator bu layihəyə daxil edilməyib. Ekranda göstərilən məlumatı kopyalamaq və ya ekran görüntüsü çəkmək texniki olaraq mümkündür.",
        ],
      },
      {
        q: "Məlumatınız necə işlənir?",
        a: [
          "Demo ad, e-poçt və telefon toplamır; hesablamadan əvvəl qeydiyyat tələb etmir. Göndərilən boy yalnız serverdəki cari hesablama üçün istifadə olunur və bu tətbiqin bazasında və tətbiq jurnalında saxlanılmır. Cookie, reklam izləyicisi və analitika əlavə edilməyib.",
          "Sorğu limitinə nəzarət üçün IP ünvanından alınan müvəqqəti texniki iz server yaddaşında saxlanılır. Hostinq və şəbəkə provayderinin giriş jurnalları ayrıca işləyə bilər. Əlaqə düymələri seçdiyiniz müraciətə uyğun hazır mətnlə WhatsApp və ya e-poçt tətbiqini açır. Mesajı istifadəçi özü göndərir; sifariş və qeydiyyat avtomatik təsdiqlənmir. Boy göstəriciniz həmin müraciətə avtomatik əlavə edilmir. WhatsApp keçidinə daxil olduqda üçüncü tərəfin xidməti açılır.",
        ],
      },
    ],
  },

  footer: {
    company: "VR GLOBAL GROUP MMC",
    copyright: "© 2026 VR GLOBAL GROUP MMC",
    author: "Müəllif: Muxtar Ərturan · Müəlliflik hüququ ilə qorunur.",
    product: "VR MINI DEMO — WEB",
    version: "R3 / 1.1.1",
    note: "İlkin müqayisə. Yekun montaj qərarı deyil.",
  },
};
