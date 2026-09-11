import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import QuoteBanner from "@/components/QuoteBanner";
import SideNavShowcase from "@/components/SideNavShowcase";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <QuoteBanner />
        <SideNavShowcase />
      </main>
    </>
  );
}
