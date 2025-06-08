import HeroSection from "../components/HeroSection";
import CallToAction from "../components/CallToAction";
import Quality from "../components/Quality";
import ServicesSection from "../components/ServicesSection";
import Showcase from "../components/Showcase";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CallToAction />
      <Quality />
      <Showcase />
      <ServicesSection />
    </main>
  );
}
