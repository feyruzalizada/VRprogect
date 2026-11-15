export interface QuoteBannerContent {
  motto: string;
  quote: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  bio: string[];
}

export const quoteBanner: QuoteBannerContent = {
  motto: "“Məkan insana uyğunlaşmalıdır; insan məkana məcbur edilməməlidir.”",
  quote:
    "Muxtar Ərturan",
  author: {
    name: "Novator Memar",
    role: "İnşaat məsələləri üzrə ekspert",
    avatar: "/images/muxtar-erturan-v3.jpg",
  },
  bio: [
    "Muxtar Ərturan — azərbaycanlı memar-dizayner, insan mərkəzli şəhərsalma üzrə mütəxəssis, inşaat və təmir üzrə ekspertdir. Onun layihələndirmə yanaşması iki miqyası birləşdirir: şəhərdə müxtəlif yaş və hərəkət imkanları olan insanlar üçün əlçatan ictimai məkanlar, mənzildə isə sakinlərin fərdi ehtiyaclarına uyğun həllər.",
    "Muxtar Ərturan “VR Standartları 2026” elmi əsərinin, VR Adaptiv Erqonomik Əmsalının və VR Adaptiv Erqonomik Ölçü Sisteminin müəllifidir. Kitabda ilk dəfə sistemli şəkildə təqdim etdiyi metod əsasında VR Adaptiv Erqonomik Kalkulyatoru hazırlayıb. Bu alət memar və dizaynerlərə istifadəçinin bədən ölçülərinə əsasən layihə ölçülərini seçməyə və ortaq məkanlarda ailə üzvlərinin ehtiyaclarını uzlaşdırmağa kömək edir.",
    "Muxtar Ərturan metodikanı VR GLOBAL GROUP layihələrində tətbiq edir, VR Akademiyasında isə onun praktik əsaslarını real obyektlər üzərində tədris edir.",
  ],
};
