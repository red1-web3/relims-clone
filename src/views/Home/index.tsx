import BetterResultSection from "@/views/Home/BetterResultSection";
import FeaturesSection from "@/views/Home/FeaturesSection";
import HeroSection from "@/views/Home/HeroSection";
import OurSolutionSection from "@/views/Home/OurSolutionSection";
import PerformanceSection from "@/views/Home/PerformanceSection";
import TrackRecordSection from "@/views/Home/TrackRecordSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <BetterResultSection />
      <PerformanceSection />
      <FeaturesSection />
      <TrackRecordSection />
      <OurSolutionSection />
    </>
  );
};

export default Home;
