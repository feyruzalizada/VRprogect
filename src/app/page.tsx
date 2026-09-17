import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import PartnerStrip from "@/components/PartnerStrip";
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
        <PartnerStrip />
        <ProgressStats />
      </main>
    </>
  );
}
