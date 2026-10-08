/** a point is plain text, or a named sub-section like the ones under "Material" */
export type ServicePoint = string | { label: string; text: string };

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  points: ServicePoint[];
  cta: string;
  badge?: string;
  note?: string;
  /** clip for the left half of the card; without one the panel stays dark */
  video?: string;
  poster?: string;
}

export interface ServiceFilter {
  id: string;
  label: string;
  slugs: string[];
  /** the one filter that shows every card */
  all?: boolean;
  /** shown in place of the cards while nothing is tagged yet */
  empty?: string;
}

export interface ServiceCounter {
  value: number;
  label: string;
  suffix?: string;
}

export interface ServicesContent {
  eyebrow: string;
  heading: string;
  taglineTop: string;
  intro: string;
  filterLabel: string;
  moreLabel: string;
  lessLabel: string;
  disclaimer: string;
  items: ServiceItem[];
  counters: ServiceCounter[];
}

export const countersHeading = "Uğurlar";

export const services: ServicesContent = {
  eyebrow: "[ VRPROJECT ]",
  heading: "Xidmətlərimiz",
  taglineTop: "Layihə • icra • nəzarət — bir məsuliyyət altında",
  intro:
    "Layihələndirmədən icraya, icradan audite qədər hər mərhələni VR standartları üzrə aparırıq. Ölçü otağa yox, insana görə seçilir; iş sənədlə təsdiqlənir; nəticə isə gözlə yox, rəqəmlə yoxlanılır.",
  filterLabel: "Xidməti seç",
  moreLabel: "Daxil olan xidmətlər",
  lessLabel: "Gizlət",
  disclaimer:
    "VR GLOBAL GROUP-un vahid xidmət platforması və peşəkar tərəfdaş şəbəkəsi vasitəsilə təqdim olunan xidmətlər.",
  items: [
    {
      slug: "tikinti",
      title: "Tikinti xidmətləri",
      description:
        "Fərdi evlərdən sənaye obyektlərinədək tikinti işlərinin layihəyə uyğun təşkili və icra koordinasiyası.",
      cta: "Tikinti üçün müraciət et",
      video: "/video/services/tikinti.mp4",
      points: [
        "Fərdi ev və villaların tikintisi.",
        "Yaşayış və qeyri-yaşayış obyektlərinin inşası.",
        "Mülki və sənaye tikintisi.",
        "Metal konstruksiya və quraşdırma-montaj işləri.",
        "Yol, körpü, tunel və digər infrastruktur işləri üzrə partnyor xidmətləri.",
      ],
    },
    {
      slug: "temir",
      title: "Təmir və yenilənmə",
      description:
        "Mənzil, ev və kommersiya məkanlarının təmiri, yarımçıq işlərin tamamlanması və qüsurların aradan qaldırılmasının təşkili.",
      cta: "Təmir üçün müraciət et",
      video: "/video/services/temir.mp4",
      points: [
        "Mənzil, fərdi ev və villa təmiri.",
        "Ofis və kommersiya məkanlarının təmiri.",
        "Əsaslı, cari və qismən təmir.",
        "Yarımçıq təmirin qiymətləndirilməsi və davam etdirilməsi.",
        "Problemli işlərin düzəldilməsi üçün texniki iş planı.",
        "Təmir mərhələlərinin və icraçıların koordinasiyası.",
      ],
    },
    {
      slug: "memarliq-dizayn",
      title: "Memarlıq və interyer dizaynı",
      description:
        "Məkanın imkanlarını, gündəlik istifadəni və estetik seçimləri birləşdirən layihə həlləri.",
      cta: "Layihə sifariş et",
      video: "/video/services/memarliq-dizayn.mp4",
      poster: "/images/services/memarliq-dizayn.jpg",
      points: [
        "Memarlıq layihələndirməsi.",
        "İnteryer dizaynı.",
        "Funksional planlaşdırma və alternativ plan variantları.",
        "Obyektin ölçülməsi və mövcud vəziyyət planı.",
        "Material, avadanlıq və interyer elementlərinin seçilməsi.",
        "Layihə həllərinin icra ilə uyğunlaşdırılması.",
      ],
    },
    {
      slug: "texniki-audit",
      title: "Texniki audit və yoxlama",
      description:
        "Obyektin texniki vəziyyətini, görülmüş işlərin keyfiyyətini və aşkar edilə bilən uyğunsuzluqları qiymətləndirin.",
      cta: "Audit sifariş et",
      video: "/video/services/texniki-audit.mp4",
      poster: "/images/services/texniki-audit.jpg",
      points: [
        "Mənzil, fərdi ev və kommersiya obyektlərinin auditi.",
        "Əmlak alınmazdan əvvəl texniki baxış.",
        "Təmirə başlamazdan əvvəl mövcud vəziyyətin yoxlanılması.",
        "Material və icra keyfiyyətinin qiymətləndirilməsi.",
        "Faktiki ölçülərin layihə ilə müqayisəsi.",
        "Su, elektrik, isitmə və havalandırma sistemlərinin razılaşdırılmış həcmdə yoxlanılması.",
        "Qüsurların qeydə alınması və texniki tövsiyələr.",
      ],
    },
    {
      slug: "tehvil-desteyi",
      title: "İşlərin təhvil alınmasına dəstək",
      description:
        "Şirkət, podratçı və ya ustanın təqdim etdiyi işi qəbul etməzdən əvvəl keyfiyyətini və tamamlanma vəziyyətini yoxladın.",
      cta: "Təhvil yoxlaması sifariş et",
      video: "/video/services/tehvil-desteyi.mp4",
      points: [
        "Usta və briqadanın gördüyü işlərin yoxlanılması.",
        "Tikinti və təmir şirkətinin təhvil verdiyi işlərə baxış.",
        "Ayrı-ayrı iş mərhələlərinin qəbuluna texniki dəstək.",
        "Tamamlanmış təmirin yekun yoxlanılması.",
        "Müqavilə, layihə və faktiki nəticənin müqayisəsi.",
        "Natamam, qüsurlu və görülməmiş işlərin müəyyənləşdirilməsi.",
        "Qüsurlar düzəldildikdən sonra təkrar baxış.",
      ],
    },
    {
      slug: "nezaret",
      title: "Tikinti və təmirə nəzarət",
      description:
        "İşlər davam edərkən keyfiyyəti, tətbiq ardıcıllığını və razılaşdırılmış qrafiki mərhələli izləyin.",
      cta: "Nəzarət üçün müraciət et",
      video: "/video/services/nezaret.mp4",
      points: [
        "Mənzillərdə təmirə nəzarət.",
        "Fərdi evlərdə tikinti və təmir monitorinqi.",
        "Materialların düzgün tətbiqinin yoxlanılması.",
        "Sonradan örtüləcək işlərə vaxtında baxışın planlaşdırılması.",
        "Layihədən kənaraçıxmaların və icra qüsurlarının qeyd edilməsi.",
        "İş qrafikinin izlənilməsi.",
        "Müqaviləyə uyğun video və səsli məlumatlandırma.",
      ],
    },
    {
      slug: "layihe-idareetmesi",
      title: "Layihə idarəetməsi və koordinasiya",
      description:
        "Layihə, büdcə, iş qrafiki və icraçılar arasında əlaqəni vahid idarəetmə ilə təşkil edin.",
      cta: "Layihəni müzakirə et",
      video: "/video/services/Layih%C9%99%20idar%C9%99etm%C9%99si%20v%C9%99%20koordinasiya.mp4",
      points: [
        "İş mərhələlərinin və ardıcıllığının planlaşdırılması.",
        "Sifarişçi, layihəçi, podratçı, usta və təchizatçıların əlaqələndirilməsi.",
        "İcraçı namizədlərinin qiymətləndirilməsi.",
        "Dizayn–smeta–icra uyğunluğunun izlənilməsi.",
        "Material sifarişləri ilə iş qrafikinin uyğunlaşdırılması.",
        "Əlavə iş və dəyişikliklərin razılaşdırılması prosesinin təşkili.",
        "İşlərin təhvilə hazırlanmasının koordinasiyası.",
      ],
    },
    {
      slug: "smeta",
      title: "Smeta və faktiki xərc hesablamaları",
      description:
        "Tikinti və təmirə nə qədər xərc lazım olduğunu, görülmüş işlərin dəyərini və təqdim edilmiş hesabların uyğunluğunu müəyyənləşdirin.",
      cta: "Xərcləri hesablat",
      video: "/video/services/Smeta%20v%C9%99%20faktiki%20x%C9%99rc%20hesablamalar%C4%B1.mp4",
      note: "Faktiki ödəniş sənədlə təsdiqlənir; sənəd və ya gizli işlər barədə məlumat çatışmadıqda nəticədə qiymətləndirmənin əsası və məhdudiyyəti göstərilir.",
      points: [
        "İlkin smeta və büdcənin hazırlanması.",
        "Görüləcək və görülmüş işlərin həcminin hesablanması.",
        "Təmir olunmuş mənzildə istifadə edilmiş materialların miqdarının qiymətləndirilməsi.",
        "Tikintiyə və təmirə çəkilmiş xərclərin sənədlər əsasında yoxlanılması.",
        "İşçilik və material dəyərinin ayrıca hesablanması.",
        "Şirkət və ustanın hesablarının faktiki işlə müqayisəsi.",
        "Artıq sərfiyyatın, israfın və hesab fərqlərinin təhlili.",
        "Yarımçıq işlərin tamamlanması və qüsurların düzəldilməsi üçün xərc hesablaması.",
      ],
    },
    {
      slug: "mubahiseler",
      title: "Mübahisələr, mediasiya və hüquqi dəstək",
      description:
        "Problemli tikinti və təmirdə texniki vəziyyətin, hesablaşmaların və hüquqi mövqeyin aydınlaşdırılması.",
      cta: "Probleminizi bildirin",
      video: "/video/services/Mu%CC%88bahis%C9%99l%C9%99r%2C%20mediasiya%20v%C9%99%20hu%CC%88quqi%20d%C9%99st%C9%99k.mp4",
      points: [
        "Müştəri ilə şirkət, podratçı və ya usta arasındakı mübahisənin texniki araşdırılması.",
        "İşin keyfiyyəti, həcmi və tamamlanma vəziyyətinin qiymətləndirilməsi.",
        "Mübahisəli smeta və material hesablarının təhlilinin təşkili.",
        "Texniki faktların, ölçülərin və audit materiallarının toplanması.",
        "Tərəflərlə texniki həll variantlarının müzakirəsi.",
        "Problemli təmirlərdə səlahiyyətli mediator vasitəsilə mediasiyanın təşkili və texniki dəstək.",
        "Hüquqi partnyor vasitəsilə pretenziya, şikayət və müqavilələrin hazırlanması.",
        "Ayrıca müqavilə və səlahiyyət əsasında məhkəməyədək, məhkəmə və icra mərhələsində hüquqi dəstək.",
      ],
    },
    {
      slug: "izolyasiya",
      title: "Dam, fasad və izolyasiya",
      description:
        "Su, rütubət və istilik itkisinə qarşı obyektin xüsusiyyətlərinə uyğun izolyasiya həlləri.",
      cta: "İzolyasiya üçün müraciət et",
      video: "/video/services/izolyasiya.mp4",
      poster: "/images/services/izolyasiya.jpg",
      points: [
        "Hidroizolyasiya.",
        "İstilik izolyasiyası.",
        "Dam və fasadlarda su və rütubətə qarşı həllər.",
        "XPS, daş yunu, mineral yun və digər sistemlərin seçilməsi.",
        "İzolyasiya materiallarının təchizatı və tətbiqi.",
        "Mövcud izolyasiya problemlərinə baxış və həllin seçilməsi.",
      ],
    },
    {
      slug: "material-avadanliq",
      title: "Material, avadanlıq və quraşdırma",
      description:
        "Layihəyə uyğun məhsulların seçilməsi, təchizatı və ixtisaslaşmış partnyorlar vasitəsilə quraşdırılması.",
      cta: "Həlləri nəzərdən keçir",
      video: "/video/services/material-avadanliq.mp4",
      poster: "/images/services/material-avadanliq.jpg",
      points: [
        {
          label: "Qapı-pəncərə və şüşə",
          text: "alüminium, PVC, şüşə balkon, sürgülü sistemlər və arakəsmələr.",
        },
        {
          label: "Perqola və qış bağçası",
          text: "bioklimatik perqola, motorlu örtüklər, şüşə tavan və zip pərdə.",
        },
        { label: "İşıqlandırma", text: "LED, çılçıraq, avadanlıq seçimi, təchizat və montaj." },
        {
          label: "Santexnika və sanitar avadanlıqlar",
          text: "məhsul seçimi, komplektasiya, təchizat və quraşdırma üzrə texniki dəstək.",
        },
        {
          label: "Təbii daş",
          text: "emal, ölçüyə kəsilmə, səthin işlənməsi, təchizat və üzlük işləri.",
        },
      ],
    },
    {
      slug: "mebel-dekor",
      title: "Mebel və dekor",
      description: "Mebel və dekor həllərinin seçilməsi və məkana uyğunlaşdırılması.",
      cta: "Mebel və dekor üçün müraciət et",
      video: "/video/services/Mebel%20Dekor.mp4",
      points: ["Mebel və dekor həllərinin seçilməsi və məkana uyğunlaşdırılması."],
    },
    {
      slug: "agilli-ev-sistemleri",
      title: "Ağıllı ev sistemləri",
      description:
        "İşıqlandırma, iqlim, pərdə və təhlükəsizlik sistemlərinin vahid idarəetmə altında birləşdirilməsi və gündəlik ehtiyaclara uyğun avtomatlaşdırılması.",
      cta: "Ağıllı ev üçün müraciət et",
      video: "/video/services/VR%20agilliev.mp4",
      points: [
        "Ağıllı ev sisteminin layihələndirilməsi və uyğun avadanlıqların seçilməsi.",
        "İşıqlandırma, parlaqlıq və işıq ssenarilərinin idarəsi.",
        "İsitmə, soyutma və havalandırmanın avtomatlaşdırılması.",
        "Motorlu pərdə, jalüz, darvaza və qaraj qapılarının idarəsi.",
        "Video-domofon, elektron kilid, siqnalizasiya və videomüşahidənin inteqrasiyası.",
        "Su sızması, tüstü və qaz sensorları ilə xəbərdarlıq sistemləri.",
        "Enerji sərfiyyatının izlənməsi və seçilmiş cihazların avtomatik idarəsi.",
        "Panel, mobil tətbiq və uyğun cihazlarda səsli əmrlə idarəetmə.",
        "“Evdəyəm”, “Gecə” və “Tətil” kimi fərdi ssenarilərin qurulması.",
        "Quraşdırma, proqramlaşdırma, sistem sınaqları və texniki xidmət.",
      ],
    },
    {
      slug: "vr-adaptiv-yasayis",
      title: "VR Adaptiv Yaşayış",
      description:
        "Ailənizin tərkibinə, fərdi ölçülərə və gündəlik ehtiyaclara uyğun ilkin məkan hesablamaları.",
      cta: "Hesablamaya başla",
      badge: "Pulsuz hesablama",
      points: [
        "Mənzil seçimi üçün sahə və otaq ehtiyacları.",
        "Fərdi ev tikintisi üçün ilkin məkan proqramı.",
        "Mənzil və fərdi ev təmiri üçün adaptiv erqonomik hesablamalar.",
        "İnteryer elementləri üzrə fərdi ilkin ölçülər.",
        "Uşaqların inkişafı və gələcək ailə ehtiyaclarının nəzərə alınması.",
        "Funksional istifadə və əlçatanlıq ehtiyaclarının qiymətləndirilməsi.",
      ],
    },
    {
      slug: "vr-akademiya",
      title: "VR Akademiya",
      description:
        "Memarlıq, dizayn, tikinti və təmir sahələrində biliklərin praktik tətbiqlə inkişaf etdirilməsi.",
      cta: "Təlimlərlə tanış ol",
      points: [
        "İnteryer dizaynı və funksional planlaşdırma təlimləri.",
        "3ds Max üzrə təlimlər.",
        "Tikinti və təmir auditi üzrə praktiki məşğələlər.",
        "Material seçimi və tətbiqi üzrə təlimlər.",
        "VR Standartları və adaptiv erqonomika üzrə təhsil.",
        "Ustad dərsləri və partnyorlarla texniki seminarlar.",
      ],
    },
  ],
  counters: [
    { value: 800, label: "Tamamlanmış İş" },
    { value: 24, suffix: " il", label: "Təcrübə" },
    { value: 32, label: "Tərəfdaş" },
    { value: 95, suffix: "%", label: "Müştəri məmnuniyyəti" },
  ],
};

export const serviceFilters: ServiceFilter[] = [
  { id: "hamisi", label: "Hamısı", slugs: [], all: true },
  {
    id: "tikdirmek",
    label: "Tikinti və təmir xidmətləri",
    slugs: ["tikinti", "temir", "memarliq-dizayn", "layihe-idareetmesi"],
  },
  {
    id: "yoxlama",
    label: "Audit • Nəzarət • Yoxlama",
    slugs: ["texniki-audit", "tehvil-desteyi", "nezaret"],
  },
  { id: "xerc", label: "Mübahisə • Hüquq • Mediasiya", slugs: ["smeta", "mubahiseler"] },
  {
    id: "material",
    label: "İzolyasiya • Dam • Fasad",
    slugs: ["izolyasiya", "material-avadanliq"],
  },
  {
    id: "agilli-ev",
    label: "Ağıllı ev sistemləri",
    slugs: ["agilli-ev-sistemleri"],
  },
  {
    id: "hesablama",
    label: "VR Akademiya",
    slugs: ["vr-akademiya"],
  },
  {
    id: "mebel",
    label: "Mebel • Dekor",
    slugs: ["mebel-dekor"],
  },
];
