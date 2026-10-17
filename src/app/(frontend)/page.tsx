import AdaptiveCalc from "@/components/AdaptiveCalc";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import News from "@/components/News";
import PartnerStrip from "@/components/PartnerStrip";
import PercentBand from "@/components/PercentBand";
import ProgressStats from "@/components/ProgressStats";
import QuoteBanner from "@/components/QuoteBanner";
import Services from "@/components/Services";
import SideNavShowcase from "@/components/SideNavShowcase";
import { getNews } from "@/lib/news";
import { getServices } from "@/lib/services";

export default async function Home() {
  const [services, news] = await Promise.all([getServices(), getNews()]);

  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <QuoteBanner />
        <SideNavShowcase />
        <AdaptiveCalc />
        <ProgressStats />
        <Services id="xidmetler" data={services} />
        <PartnerStrip />
        <PercentBand />
        <News items={news} />
      </main>
      <Footer />
    </>
  );
}
