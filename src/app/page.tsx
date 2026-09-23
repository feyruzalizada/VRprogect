import AdaptiveCalc from "@/components/AdaptiveCalc";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import PartnerStrip from "@/components/PartnerStrip";
import PercentBand from "@/components/PercentBand";
import ProgressStats from "@/components/ProgressStats";
import QuoteBanner from "@/components/QuoteBanner";
import Services from "@/components/Services";
import SideNavShowcase from "@/components/SideNavShowcase";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <QuoteBanner />
        <SideNavShowcase />
        <AdaptiveCalc />
        <ProgressStats />
        <Services id="xidmetler" />
        <PartnerStrip />
        <PercentBand />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
