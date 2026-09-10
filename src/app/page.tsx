import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import QuoteBanner from "@/components/QuoteBanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <QuoteBanner />
      </main>
    </>
  );
}
