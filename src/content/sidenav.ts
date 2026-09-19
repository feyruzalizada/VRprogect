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
  intro: SideNavLink;
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
  intro: {
    id: "panel-intro",
    label: "VR STANDARTLARI NƏDİR?",
    body: [
      { kind: "p", text: "VR Standartları 2026 — VR Adaptiv Erqonomik Ölçü Sistemi yaşayış və digər daxili məkanların insanın real ehtiyaclarına uyğun planlaşdırılması, layihələndirilməsi, icrası və yoxlanılması üçün hazırlanmış metodoloji dərslikdir. Kitab mənzil alan və ya şəxsi ev inşaa etmək istəyən vətəndaşa düzgün məkan seçimini anlamaqda, dizayner və memara istifadəçi ehtiyacını layihə qərarına çevirməkdə, mühəndis və icraçıya isə həmin qərarın təhlükəsiz, ölçülə bilən və icraolunan olmasını yoxlamaqda kömək edir." },
      { kind: "p", text: "Metodologiyanın əsas xətti bir ölçünü bütün insanlara tətbiq etmək deyil. Baza göstəricisi istifadəçinin antropometrik və funksional xüsusiyyətləri, otağın təyinatı, istifadə tezliyi, təhlükəsizlik, əlçatanlıq, mühəndis sistemləri və real fəaliyyət sınağı ilə birlikdə qiymətləndirilir. Kitabda interyer ölçüləri, ailə və otaq proqramı, işıqlandırma, daxili hava keyfiyyəti, isitmə və soyutma, material sənədləri, risklərin idarə edilməsi, gizli işlərin auditi, təhvil-təslim və tədrisə inteqrasiya vahid metodoloji ardıcıllıqda təqdim olunur." },
      { kind: "p", text: "Azərbaycanın qüvvədə olan tələbləri, beynəlxalq və xarici ölkə təcrübəsi, istehsalçı məlumatları və müəllifin VR göstəriciləri eyni hüquqi statusda göstərilmir. Kitab rəsmi dövlət və ya beynəlxalq standartı əvəz etmir; onun məqsədi mənbənin statusunu, layihə qərarını, ölçməni, real istifadəni və audit sübutunu birləşdirən aydın qərar sistemi yaratmaqdır. 2026 nəşri elmi yoxlama, pilot tətbiq və gələcək kalibrləmə üçün baza metodoloji versiya kimi təqdim edilir." },
      { kind: "flow", text: "Açar sözlər:" },
      { kind: "p", text: "VR Standartları; adaptiv erqonomika; antropometriya; insan mərkəzli dizayn; daxili məkan; mənzil planlaşdırılması; universal istifadə; əlçatanlıq; interyer layihəsi; tikinti və təmir auditi; gizli işlər; istifadəçi profili." },
    ],
  },
  links: [
    {
      id: "panel-1",
      label: "ADAPTİV ERQONOMİK ÖLÇÜ SİSTEMİ",
      body: [
        { kind: "p", text: "VR Adaptiv Erqonomik Ölçü Sistemi məkanı insanın boyuna, yaşına, fiziki imkanlarına, ailə tərkibinə və həyat tərzinə uyğunlaşdıran elmi-metodoloji müəllif modelidir." },
        { kind: "p", text: "VR Adaptiv Erqonomik Əmsalı və VR Adaptiv Erqonomik Ölçü Sisteminin müəllifi azərbaycanlı Novator Memar Muxtar Ərturandır. Metod onun müəllif kəşfi kimi ilk dəfə “VR Standartları 2026” əsərində sistemli şəkildə təqdim edilmişdir." },
        { kind: "p", text: "VR əmsalı baza ölçüsündən fərdi nəticəyə keçidi təmin edir. P5, P50 və P95 göstəriciləri, yaş, cins, əlçatanlıq, məkanın funksiyası və təhlükəsizlik sərhədləri vahid hesablama məntiqində qiymətləndirilir:" },
        { kind: "quote", text: "Baza ölçüsü → adaptiv hesablama → antropometrik yoxlama → təhlükəsizlik sərhədi → layihə → icra → audit." },
        { kind: "p", text: "Nəticə dəyişməz rəqəm deyil; normativ tələblər və real istifadə sınaqları ilə dəqiqləşdirilən ölçü diapazonudur. Bu yanaşma Azərbaycan memarlıq düşüncəsinin insan mərkəzli və elmi inkişafına verilən orijinal müəllif töhfəsidir." },
        { kind: "flow", text: "Muxtar Ərturan:" },
        { kind: "quote", text: "“İnsan layihənin son istifadəçisi deyil, onun başlanğıc nöqtəsidir.”" },
      ],
    },
    {
      id: "panel-2",
      label: "MİLLİ STANDARTLAŞDIRMA MODELİ",
      body: [
        { kind: "p", text: "Güclü dövlət yalnız böyük layihələr deyil, vahid keyfiyyət, təhlükəsizlik və məsuliyyət sistemi yaradır. “VR Standartları 2026” Azərbaycanın tikinti, təmir və dizayn təcrübəsində ortaq texniki dilin formalaşdırılmasına xidmət edən milli müəllif modelidir." },
        { kind: "p", text: "Muxtar Ərturanın yaratdığı metodologiya Azərbaycan insanının yaşayış xüsusiyyətlərini, yerli iqlimi, tikinti təcrübəsini, material bazarını və qüvvədə olan normativləri nəzərə alır. Beynəlxalq ergonomika, əlçatanlıq və təhlükəsizlik prinsipləri isə müqayisəli elmi baza kimi tətbiq edilir." },
        { kind: "p", text: "Sistemdə hər qərarın mənbəyi, ölçüsü, risk səviyyəsi və yoxlama üsulu müəyyənləşdirilir. Bu yanaşma qanunun aliliyinə, ictimai təhlükəsizliyə və dövlətçilik məsuliyyətinə əsaslanan tikinti mədəniyyətinin inkişafına xidmət edir." },
        { kind: "p", text: "VR metodologiyası hazırda rəsmi dövlət standartını əvəz etmir. O, ekspertiza, pilot tətbiq və gələcək standartlaşdırma üçün yaradılmış milli elmi-metodoloji bazadır." },
        { kind: "flow", text: "Muxtar Ərturan:" },
        { kind: "quote", text: "“Milli model dünya təcrübəsini Azərbaycan insanının ehtiyacları və dövlətimizin inkişaf məqsədləri ilə birləşdirən sistemdir.”" },
      ],
    },
    {
      id: "panel-3",
      label: "MÜASİR TƏMİR - TİKİNTİ EKOSİSTEMİ",
      body: [
        { kind: "p", text: "Müasir təmir - tikinti yalnız dizayn və icra deyil. O, insan ehtiyacı, layihə, smeta, material, mühəndis sistemləri, audit, nəzarət və təhvil proseslərini birləşdirən bütöv ekosistemdir." },
        { kind: "p", text: "“VR Standartları 2026” sifarişçini prosesdən kənarda qalan müşahidəçidən məlumatlı qərar sahibinə çevirir. İstifadəçi hansı sənədləri tələb etməli, hansı işləri bağlanmazdan əvvəl yoxlatmalı və nəticəni hansı sübutlarla qəbul etməli olduğunu anlayır." },
        { kind: "p", text: "Elektrik, qaz, su, havalandırma, istilik və hidroizolyasiya üzrə gizli səhvlər insan həyatı və dövlətin ümumi tikinti fondu üçün ciddi riskdir. Buna görə VR metodologiyasında təhlükəsizlik estetikadan üstün tutulur. Gizli işlər ölçü, foto, video, sınaq və aktlarla sənədləşdirilir." },
        { kind: "p", text: "Muxtar Ərturanın Novator Memar yanaşması sifarişçi ilə icraçı arasındakı etimadı şifahi vədlərdən çıxararaq layihə, audit və sübut üzərində qurur." },
        { kind: "flow", text: "Muxtar Ərturan:" },
        { kind: "quote", text: "“Keyfiyyət görünən nəticədən əvvəl, görünməyən işlərin necə yoxlanılması ilə başlayır.”" },
      ],
    },
    {
      id: "panel-4",
      label: "PEŞƏKARLIQDA YENİ MƏRHƏLƏ",
      body: [
        { kind: "p", text: "Yeni dövrün memarı, dizayneri və mühəndisi yalnız layihə yaradan deyil, verdiyi qərarı əsaslandıran və nəticəsinə cavabdeh olan mütəxəssisdir." },
        { kind: "p", text: "“VR Standartları 2026” layihəçilər, mühəndislər, icraçılar və auditorlar üçün vahid peşəkar dil yaradır. Planlar, işçi çertyojlar, şərti işarələr, material spesifikasiyaları, mühəndis həlləri və dəyişikliklər eyni sistem daxilində idarə olunur." },
        { kind: "p", text: "Üçölçülü vizual layihənin görünən hissəsidir. Peşəkar layihə isə obyektin necə tikiləcəyini, hansı materialların istifadə olunacağını, mühəndis sistemlərinin necə əlaqələndiriləcəyini və nəticənin necə yoxlanılacağını göstərməlidir." },
        { kind: "p", text: "VR Adaptiv Erqonomik Əmsalı hazır ölçülərin mexaniki tətbiqini insan, funksiya, təhlükəsizlik və real istifadə əsasında verilən qərarla əvəz edir." },
        { kind: "p", text: "Muxtar Ərturanın Novator Memar yaradıcılığı nəzəri biliklə tikinti meydançası arasında milli peşəkarlıq körpüsü yaradır." },
        { kind: "flow", text: "Muxtar Ərturan:" },
        { kind: "quote", text: "“Peşəkar nə etdiyini, nə üçün etdiyini və nəticənin necə yoxlanılacağını göstərməlidir.”" },
      ],
    },
    {
      id: "panel-5",
      label: "İNSAN MƏRKƏZLİ TƏHLÜKƏSİZ MƏKAN",
      body: [
        { kind: "p", text: "Memarlığın əsas vəzifəsi yalnız gözəl görünən deyil, insanın sağlamlığını, təhlükəsizliyini və ləyaqətli həyatını qoruyan məkan yaratmaqdır." },
        { kind: "p", text: "“VR Standartları 2026” layihənin mərkəzinə real insanı gətirir. Boy, yaş, fiziki imkanlar, ailə tərkibi və gündəlik davranışlar məkan qərarlarının əsas məlumatlarına çevrilir. Uşaq, yaşlı və hərəkət imkanları məhdud insan üçün eyni ölçü eyni rahatlığı yaratmır." },
        { kind: "p", text: "VR Adaptiv Erqonomik Əmsalı ölçülərin istifadəçiyə uyğunlaşdırılmasına kömək edir. Təhlükəsizlik, əlçatanlıq, mühəndis tələbləri və qanunla müəyyənləşdirilən minimumlar isə hər zaman üstün tutulur." },
        { kind: "p", text: "İşıqlandırma, havalandırma, daxili hava keyfiyyəti, temperatur, material təhlükəsizliyi, rahat keçidlər və təxliyə imkanları vahid sistem daxilində qiymətləndirilir. Audit bu prinsiplərin layihədən real icraya qədər qorunmasını təmin edir." },
        { kind: "p", text: "Muxtar Ərturanın Novator Memar baxışında insan təhlükəsizliyi memarlığın əlavəsi deyil, dövlət və cəmiyyət qarşısında peşəkar borcdur." },
        { kind: "flow", text: "Muxtar Ərturan:" },
        { kind: "quote", text: "“Gözəl məkan heyran edir, insan mərkəzli təhlükəsiz məkan isə həyatı qoruyur.”" },
      ],
    },
    {
      id: "panel-6",
      label: "MİLLİ İNKİŞAF VƏ RƏQƏMSAL GƏLƏCƏK",
      body: [
        { kind: "p", text: "Müasir Azərbaycanın inkişafı tikililərin sayı ilə yanaşı, onların keyfiyyəti, təhlükəsizliyi və insan həyatına verdiyi dəyərlə ölçülməlidir. Dövlətçilik düşüncəsi bu keyfiyyətin sistemləşdirilməsini və gələcək nəsillərə ötürülməsini tələb edir." },
        { kind: "p", text: "“VR Standartları 2026” ölçü, mənbə, qərar və sübut arasında rəqəmsal əlaqə yaradır. VR Adaptiv Atlası, erqonomik kalkulyator, versiya reyestri, elektron audit və layihə tarixçəsi bu gələcəyin əsas alətləridir." },
        { kind: "p", text: "Rəqəmsal sistem yalnız nəticə göstərməməli, həmin nəticənin hansı məlumat, əmsal və təhlükəsizlik sərhədi əsasında yaradıldığını da izah etməlidir." },
        { kind: "p", text: "2026-cı ilin “Şəhərsalma və Memarlıq İli” elan olunması milli ənənələrin qorunmasını, qabaqcıl yanaşmaların tətbiqini və dayanıqlı məskunlaşmanı dövlət inkişafının mühüm istiqamətinə çevirir." },
        { kind: "p", text: "Muxtar Ərturanın Novator Memar vizyonu VR sisteminin gələcəkdə yaşayış kompleksləri, ictimai binalar, şəhər məkanları və infrastruktur layihələri üçün ayrıca modullarla genişləndirilməsini nəzərdə tutur." },
        { kind: "flow", text: "Muxtar Ərturan:" },
        { kind: "quote", text: "“Rəqəmsal gələcək hər qərarın mənbəyinin, məsuliyyətinin və nəticəsinin görünməsidir.”" },
      ],
    },
    {
      id: "panel-7",
      label: "MÜASİR AZƏRBAYCAN — DÜNYA MODELİ",
      body: [
        { kind: "p", text: "Azərbaycan tarixi irslə müasir inkişafın, milli memarlıqla qlobal təcrübənin qovuşduğu güclü yaradıcılıq məkanıdır. Məqsəd dünyanı təkrarlamaq deyil, Azərbaycan təcrübəsini elmi əsaslarla dünyaya təqdim etməkdir." },
        { kind: "p", text: "“VR Standartları 2026” ölkəmizdə yaradılmış və beynəlxalq peşəkar dialoqa açıq müəllif modelidir. Sistem ISO, EN, BS, DIN, ADA və digər mötəbər mənbələrin ergonomika, təhlükəsizlik və əlçatanlıq prinsiplərini yerli qanunvericilik, iqlim, tikinti təcrübəsi və insan ehtiyacları ilə əlaqələndirir." },
        { kind: "p", text: "Bakıda keçirilən WUF13 təhlükəsiz, inklüziv və dayanıqlı şəhərlərin əhəmiyyətini dünya gündəliyinə çıxardı. VR metodologiyasının insan mərkəzli fəlsəfəsi bu geniş inkişaf vizyonu ilə səsləşir." },
        { kind: "p", text: "Muxtar Ərturanın Novator Memar yanaşması böyük yaşayış, ictimai, turizm və infrastruktur layihələrində ölçü, təhlükəsizlik və audit mədəniyyətinin inkişafı üçün yeni imkanlar açır." },
        { kind: "flow", text: "Muxtar Ərturan:" },
        { kind: "quote", text: "“Azərbaycan xarici modelləri təkrarlayan deyil, milli təcrübəsini elm və sübutla dünyaya təqdim edən memarlıq məktəbi yaratmalıdır.”" },
      ],
    },
    {
      id: "panel-8",
      label: "DİZAYN VƏ MƏKANDA YENİ VİZYON",
      body: [
        { kind: "p", text: "Yeni dövrün dizayn və memarlığı yalnız rəng və forma deyil. O, insan ehtiyacını, funksiyanı, mühəndisliyi, təhlükəsizliyi və bədii ideyanı vahid məkan həllində birləşdirən sənətdir." },
        { kind: "p", text: "“VR Standartları 2026” dizaynı subyektiv zövqdən ölçülə, əsaslandırıla və yoxlanıla bilən qərarlar sisteminə yüksəldir. Hər elementin harada yerləşməsi ilə yanaşı, nə üçün orada olduğu, kim tərəfindən istifadə ediləcəyi və nəticəsinin necə qəbul olunacağı müəyyənləşdirilir." },
        { kind: "p", text: "VR Adaptiv Erqonomik Əmsalı məkanın real istifadəçiyə uyğunlaşdırılmasını təmin edir. Elektrik, su, havalandırma, istilik, akustika, işıqlandırma və material həlləri dizaynın görünməyən, lakin həlledici hissəsinə çevrilir." },
        { kind: "p", text: "Muxtar Ərturanın Novator Memar yaradıcılığı Azərbaycan memarlıq və dizayn sənətinə milli kimliyi, insan mərkəzliliyi və texniki dəqiqliyi birləşdirən yeni vizyon təqdim edir. Bu fəaliyyət milli memarlıq düşüncəmizin inkişafı üçün özünəməxsus və strateji müəllif missiyasıdır." },
        { kind: "flow", text: "Muxtar Ərturan:" },
        { kind: "quote", text: "“Sübut yaradıcılığı məhdudlaşdırmır; onu real və davamlı keyfiyyətə çevirir.”" },
      ],
    },
  ],
  slides: ["/images/showcase-1.jpg", "/images/showcase-2.jpg"],
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
