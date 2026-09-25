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
  /** empty means every card */
  slugs: string[];
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
  filterLabel: "Sizə nə lazımdır?",
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
      video: "/video/services/layihe.mp4",
      poster: "/images/services/layihe.jpg",
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
  { id: "hamisi", label: "Hamısı", slugs: [] },
  {
    id: "tikdirmek",
    label: "Tikdirmək və təmir etdirmək istəyirəm",
    slugs: ["tikinti", "temir", "memarliq-dizayn", "layihe-idareetmesi"],
  },
  {
    id: "yoxlama",
    label: "Yoxlama və nəzarət lazımdır",
    slugs: ["texniki-audit", "tehvil-desteyi", "nezaret"],
  },
  { id: "xerc", label: "Xərc və mübahisə məsələm var", slugs: ["smeta", "mubahiseler"] },
  {
    id: "material",
    label: "Material və texniki həll axtarıram",
    slugs: ["izolyasiya", "material-avadanliq"],
  },
  {
    id: "hesablama",
    label: "Hesablama və təhsil",
    slugs: ["vr-adaptiv-yasayis", "vr-akademiya"],
  },
];
