/* eslint-disable @next/next/no-css-tags */
import BetterResultSection from "@/views/Home/BetterResultSection";
import FeaturesSection from "@/views/Home/FeaturesSection";
import HeroSection from "@/views/Home/HeroSection";
import OurSolutionSection from "@/views/Home/OurSolutionSection";
import PerformanceSection from "@/views/Home/PerformanceSection";
import TestimonialSection from "@/views/Home/TestimonialSection";
import TrackRecordSection from "@/views/Home/TrackRecordSection";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>reLIMS: Home</title>
        <meta property="og:type" content="website"></meta>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <HeroSection />
      <BetterResultSection />
      <PerformanceSection />
      <FeaturesSection />
      <TrackRecordSection />
      <OurSolutionSection />
      <TestimonialSection />
    </>
  );
};

export default Home;
