import HeroSection from "../components/home/HeroSection";
import CallToAction from "../components/home/CallToAction";
import Quality from "../components/home/Quality";
import ServicesSection from "../components/home/ServicesSection";
import Showcase from "../components/home/Showcase";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CallToAction />
      <Quality />
      <Showcase />
      <ServicesSection />
    </>
  );
}
