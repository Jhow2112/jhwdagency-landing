/* Home — Jeremy Howard Web Design
   SEO/AEO optimized: proper semantic landmarks, section ordering
   FAQSection added before Footer for AEO answer targeting */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogosCarousel from "@/components/LogosCarousel";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import WorkSection from "@/components/WorkSection";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F7FA]" style={{ scrollBehavior: "smooth" }}>
      {/* Skip to main content for accessibility / crawlers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#1E3A5F] focus:rounded-lg focus:font-bold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        {/* Hero — primary H1, business identity */}
        <HeroSection />

        {/* Logos placeholder — currently null */}
        <LogosCarousel />

        {/* Services — what we offer */}
        <ServicesSection />

        {/* Process — how it works */}
        <ProcessSection />

        {/* Work — case studies / portfolio */}
        <WorkSection />

        {/* Pricing — transparent pricing signals */}
        <PricingSection />

        {/* Comparison — agency vs DIY vs us */}
        <ComparisonSection />

        {/* Testimonials — social proof */}
        <TestimonialsSection />

        {/* FAQ — AEO answer targeting, mirrors JSON-LD FAQPage schema */}
        <FAQSection />
      </main>

      {/* Footer — contact form, office locations, nav */}
      <Footer />
    </div>
  );
}
