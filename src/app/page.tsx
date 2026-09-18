import Contacts from "@/components/Contacts";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import OurServices from "@/components/OurServices";
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
        <Services />
        <ProgressStats />
        <OurServices />
        <PartnerStrip />
        <PercentBand />
        <Contacts />
      </main>
    </>
  );
}
