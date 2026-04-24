import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import SpecialOffers from "@/components/SpecialOffers";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import HVACTipsSection from "@/components/HVACTipsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import useSEO from "@/hooks/useSEO";

const Index = () => {
  useSEO({
    title: "Nello's Flooring | Professional Flooring Services",
    description: "Nello's Flooring provides expert hardwood, luxury vinyl plank, laminate flooring installation, sand & refinish, and floor cleaning. Over 40 years of experience. Call (727) 644-2305.",
    canonical: "https://nellosflooring.lovable.app/",
  });

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw]">
      <main>
        <div className="relative">
          <Header />
          <HeroSection />
        </div>
        <TrustBadges />
        <SpecialOffers />
        <TestimonialsSection />
        <ServicesSection />
        <AboutSection />
        <GallerySection />
        <HVACTipsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
