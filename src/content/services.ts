export interface ServiceItem {
  title: string;
  points: string[];
  /** clip for the left half of the card; without one the panel stays dark */
  video?: string;
  poster?: string;
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
  moreLabel: string;
  lessLabel: string;
  disclaimer: string;
  items: ServiceItem[];
  counters: ServiceCounter[];
}

export const countersHeading = "Uğurlar";

/** how many points a card shows before it folds the rest away */
export const VISIBLE_POINTS = 5;

export const services: ServicesContent = {
  eyebrow: "[ VRPROJECT ]",
  heading: "Xidmətlərimiz",
  taglineTop: "Layihə • icra • nəzarət — bir məsuliyyət altında",
  intro:
    "Layihələndirmədən icraya, icradan audite qədər hər mərhələni VR standartları üzrə aparırıq. Ölçü otağa yox, insana görə seçilir; iş sənədlə təsdiqlənir; nəticə isə gözlə yox, rəqəmlə yoxlanılır.",
  moreLabel: "Ətraflı",
  lessLabel: "Gizlət",
  disclaimer:
    "VR GLOBAL GROUP-un vahid xidmət platforması və peşəkar tərəfdaş şəbəkəsi vasitəsilə təqdim olunan xidmətlər.",
  items: [
    {
      title: "Hüquq, mediasiya və mübahisələrin həlli",
      points: [
        "Hüquqi konsultasiya və yazılı hüquqi rəylər",
        "İnşaat, təmir və daşınmaz əmlak mübahisələri üzrə hüquqi dəstək",
        "İnşaat şirkətlərindən zərər çəkmiş şəxslərin hüquqlarının müdafiəsi",
        "VR audit və ekspertiza materiallarına hüquqi qiymət verilməsi",
        "Pretenziya, ərizə, şikayət və müqavilələrin hazırlanması",
        "Tərəflər arasında danışıqların və barışıq prosesinin təşkili",
        "Mediasiya xidmətinin qanuni səlahiyyətli mediator vasitəsilə təşkili",
        "Məhkəməyədək hüquqi müşayiət",
        "Mülki məhkəmə prosesində nümayəndəlik",
        "İcra mərhələsində hüquqi dəstək",
        "Korporativ müqavilələrin hüquqi auditi",
        "Hüquqi risklərin qiymətləndirilməsi",
      ],
    },
    {
      title: "Texniki audit və ekspertiza",
      points: [
        "Mənzil, villa, bina və kommersiya obyektlərinin texniki auditi",
        "Tikinti və təmir işlərinin keyfiyyət yoxlaması",
        "Vizual və instrumental texniki baxış",
        "Faktiki ölçülərin və layihəyə uyğunluğun yoxlanılması",
        "Görülmüş işlərin texniki qiymətləndirilməsi",
        "Qüsur, risk və uyğunsuzluqların müəyyən edilməsi",
        "Qüsur reyestrinin hazırlanması",
        "Material sertifikatlarının və texniki pasportların yoxlanılması",
        "Gizli işlərin sənədlər və foto-video materiallar əsasında araşdırılması",
        "Foto-video sübut bazasının yaradılması",
        "Texniki audit hesabatı və ekspert rəyinin hazırlanması",
        "Təkrar audit və düzəlişlərin yoxlanılması",
        "Təmir və tikinti mübahisələri üçün texniki-faktoloji materialların hazırlanması",
      ],
    },
    {
      title: "Hesablama, smeta və büdcələndirmə",
      points: [
        "İşçilik və material smetasının hazırlanması",
        "İş həcmlərinin və material miqdarlarının hesablanması",
        "Layihənin ümumi büdcəsinin formalaşdırılması",
        "Material, işçilik və əlaqəli xərclərin ayrıca hesablanması",
        "Təklif və qiymətlərin müqayisəli təhlili",
        "Əlavə və dəyişdirilmiş işlərin qiymətləndirilməsi",
        "Təmir mərhələləri üzrə ödəniş planının hazırlanması",
        "Faktiki görülmüş işlə ödənilmiş məbləğin müqayisəsi",
        "Büdcədən kənaraçıxmaların müəyyən edilməsi",
        "İcra qrafiki və maliyyə planlaması",
      ],
    },
    {
      title: "Dizayn və layihələndirmə",
      video: "/video/services/layihe.mp4",
      poster: "/images/services/layihe.jpg",
      points: [
        "İnteryer dizaynı",
        "Funksional planlama",
        "Obyektin ölçülərinin götürülməsi",
        "Mövcud vəziyyət planının hazırlanması",
        "Planlama variantlarının işlənməsi",
        "Dizayn konsepsiyasının hazırlanması",
        "2D işçi layihə paketi",
        "Planlar, açılışlar və texniki sxemlər",
        "3D vizualizasiya",
        "Material, rəng və mebel seçimi",
        "Material cədvəllərinin hazırlanması",
        "İnsan mərkəzli və adaptiv erqonomik planlama",
        "Müəllif nəzarəti",
      ],
    },
    {
      title: "Layihə idarəetməsi və təmirə nəzarət",
      points: [
        "Təmir prosesinin təşkilati idarə edilməsi",
        "Sifarişçi, podratçı, usta və təchizatçıların koordinasiyası",
        "Podratçı və icraçı namizədlərinin qiymətləndirilməsi",
        "İş ardıcıllığının və mərhələlərin planlaşdırılması",
        "Dizayn–smeta–icra uyğunluğunun yoxlanılması",
        "VR Standartları əsasında mərhələli keyfiyyət monitorinqi",
        "Obyektdə mərhələli baxışların keçirilməsi",
        "Uyğunsuzluqların sənədləşdirilməsi",
        "Düzəliş tədbirlərinin hazırlanması",
        "Gizli işlərin bağlanmasından əvvəl baxışın təşkili",
        "Baxış protokolları və monitorinq qeydlərinin hazırlanması",
        "Təhvil-təslim prosesində ekspert və məsləhətçi iştirakı",
      ],
    },
    {
      title: "Mülki və sənaye tikintisi",
      points: [
        "Yaşayış və qeyri-yaşayış obyektlərinin inşası",
        "Mülki tikinti işləri",
        "Sənaye tikintisi",
        "Tikinti-quraşdırma işləri",
        "Montaj və mühəndis-quraşdırma işləri",
        "Əsaslı təmir",
        "Cari təmir",
        "Bina və qurğuların yenidən qurulması",
        "Tikinti materialları və avadanlıqlarının təşkili",
        "Sınaq, qəbul və təhvil işləri",
      ],
    },
    {
      title: "İnfrastruktur və metal konstruksiya işləri",
      points: [
        "Metal konstruksiyaların hazırlanması və montajı",
        "Tunel tikintisi",
        "Yol tikintisi",
        "Körpü tikintisi",
        "Mühəndis-infrastruktur qurğularının inşası",
        "Konstruktiv montaj və bərkitmə işləri",
        "Metal konstruksiyaların qoruyucu örtükləri",
        "Qaynaq və montaj birləşmələrinin təşkili",
      ],
    },
    {
      title: "Dam, fasad və izolyasiya sistemləri",
      points: [
        "Hidroizolyasiya",
        "Termoizolyasiya və istilik izolyasiyası",
        "Dam örtüklərində su və rütubət izolyasiyası",
        "Damların isti və soyuq təsirlərdən qorunması",
        "Fasadların istilik və rütubət izolyasiyası",
        "XPS izolyasiya sistemləri",
        "Daş yunu və mineral yun tətbiqi",
        "İzolyasiya boyaları və qoruyucu örtüklər",
        "İzolyasiya materiallarının satışı və təchizatı",
        "İzolyasiya materiallarının daşınması",
        "İzolyasiya sistemlərinin quraşdırılması və tətbiqi",
        "Villa, fərdi ev və binalar üçün kompleks izolyasiya həlləri",
      ],
    },
    {
      title: "İşıqlandırma və elektrik avadanlıqları",
      points: [
        "İşıqlandırma sistemlərinin seçilməsi",
        "Müasir LED işıqlandırma həlləri",
        "Dekorativ çılçıraq və işıqlandırma avadanlıqları",
        "Elektrik avadanlıqlarının satışı və təchizatı",
        "İşıqlandırma avadanlıqlarının daşınması",
        "İşıqlandırma sistemlərinin quraşdırılması və qoşulması",
        "İşıqlandırma üzrə konsultasiya",
        "Obyektdə praktiki işıqlandırma təqdimatı",
        "İnteryerə uyğun işıqlandırma seçimi",
        "İşıqlandırma üzrə ekspert xidməti",
      ],
    },
    {
      title: "Şüşə, alüminium və PVC sistemləri",
      points: [
        "Pəncərə sistemlərinin hazırlanması",
        "Alüminium qapı-pəncərə sistemləri",
        "PVC qapı-pəncərə sistemləri",
        "Çərçivəli şüşə balkon sistemləri",
        "Çərçivəsiz şüşə balkon sistemləri",
        "Cam-balkon sistemləri",
        "HS/HBS qaldırılıb-sürülən sistemlər",
        "Sürməli pəncərə və qapı sistemləri",
        "Ölçülərin götürülməsi",
        "Texniki həll və işçi çertyojların hazırlanması",
        "İstehsal, təchizat və quraşdırma",
        "Şüşə, profil, furnitura və montaj üzrə zəmanət xidməti",
      ],
    },
    {
      title: "Qobustan daşı və təbii daş həlləri",
      points: [
        "GOBUSTONE markalı Qobustan daşlarının istehsalı",
        "Təbii daşların emalı",
        "Daşların ölçüyə uyğun kəsilməsi",
        "Daş səthlərinin işlənməsi",
        "Təbii daşların satışı və təchizatı",
        "Daşların qablaşdırılması və daşınması",
        "Yükün boşaldılması və saxlanması",
        "Fasadlarda təbii daş üzlüklərin quraşdırılması",
        "İnteryer divarlarında daş tətbiqi",
        "Döşəmə və digər tikinti səthlərinin daşla üzlənməsi",
        "Daş nümunəsi, rəng və tekstura seçimi",
        "Ankerli və yapışdırıcılı montaj sistemləri",
        "Daş məhsulları üzrə təhvil və zəmanət xidməti",
      ],
    },
    {
      title: "Material təchizatı və logistika",
      points: [
        "Tikinti və təmir materiallarının seçilməsi",
        "Materialların texniki göstəricilərinin yoxlanılması",
        "Materialların satışı və təchizatı",
        "Obyektə çatdırılma və daşınma",
        "Yüklərin boşaldılması və saxlanması",
        "İstehsalçı və təchizatçıların koordinasiyası",
        "Material nümunələrinin təqdim edilməsi",
        "Məhsul pasportu, sertifikat və sınaq sənədlərinin yoxlanılması",
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
