/* Home — Contemporary Studio, Warm Geometric
   Assembles all landing page sections in order */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogosCarousel from "@/components/LogosCarousel";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WorkSection from "@/components/WorkSection";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF7F4]" style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <HeroSection />
      <LogosCarousel />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <PricingSection />
      <ComparisonSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
