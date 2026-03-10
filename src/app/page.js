import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Tests from "@/components/sections/Tests";
import CTA from "@/components/sections/CTA";
import FloatingShapes from "@/components/effects/FloatingShapes";
import PartnerWithUs from "@/components/sections/PartnerWithUs";
import PartnersSection from "@/components/sections/Partners";

export default function Home() {
  return (
    <>
      <FloatingShapes />
      <Header />
      <main>
        <Hero />
        <PartnersSection />
        {/* <Stats /> */}
        <Features />
        <HowItWorks />
        <Tests />
        <PartnerWithUs />
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}
