import AdaptiveCalc from "@/components/AdaptiveCalc";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import JsonLd from "@/components/JsonLd";
import News from "@/components/News";
import PartnerStrip from "@/components/PartnerStrip";
import PercentBand from "@/components/PercentBand";
import QuoteBanner from "@/components/QuoteBanner";
import Services from "@/components/Services";
import SideNavShowcase from "@/components/SideNavShowcase";
import { heroCues } from "@/content/hero";
import { getContent } from "@/content/i18n";
import type { Lang } from "@/i18n/config";
import { getNews } from "@/lib/news";
import { buildSearchIndex } from "@/lib/searchIndex";
import { getServices } from "@/lib/services";

// one page in three languages; each language route renders this with its own lang
export default async function HomePage({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const [services, news] = await Promise.all([getServices(lang), getNews(lang)]);
  // cue timings belong to the video, the words to the language
  const cues = heroCues.map((cue, i) => ({ ...cue, ...c.hero[i] }));

  return (
    <>
      <Header
        searchIndex={buildSearchIndex(services, news, c)}
        lang={lang}
        nav={c.mainNav}
        ui={{ search: c.ui.search, menu: c.ui.menu }}
      />
      <main>
        <HeroSlider cues={cues} />
        <QuoteBanner t={c.quote} />
        <SideNavShowcase sideNav={c.sideNav} book={c.ui.book} />
        <AdaptiveCalc label={c.ui.calcLabel} />
        <Services id="xidmetler" data={services} contact={c.contact} />
        <PartnerStrip heading={c.partnersHeading} />
        <PercentBand heading={c.countersHeading} counters={c.counters} />
        <News items={news} lang={lang} t={c.news} />
      </main>
      <Footer t={c.footer} />
      <JsonLd services={services.items} lang={lang} description={c.meta.description} catalog={c.ui.servicesCatalog} />
    </>
  );
}
