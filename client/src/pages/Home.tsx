/* Home — Aralo Studio
   SEO/AEO optimized: proper semantic landmarks, section ordering
   FAQSection added before Footer for AEO answer targeting */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogosCarousel from "@/components/LogosCarousel";
import ServicesSection from "@/components/ServicesSection";
import IndustriesSection from "@/components/IndustriesSection";
import ProcessSection from "@/components/ProcessSection";
import WorkSection from "@/components/WorkSection";
import PricingSection from "@/components/PricingSection";
import ComparisonSection from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import BlogTeaserSection from "@/components/BlogTeaserSection";
import ReferralCallout from "@/components/ReferralCallout";
import Footer from "@/components/Footer";

// Toggle to true when the About Jeremy section is ready to go public.
const SHOW_ABOUT = false;

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3efe6]" style={{ scrollBehavior: "smooth" }}>
      {/* Skip to main content for accessibility / crawlers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#1f2a22] focus:rounded-lg focus:font-bold"
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

        {/* Industries — who we serve */}
        <IndustriesSection />

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

        {/* About Jeremy — hidden until SHOW_ABOUT is flipped to true */}
        {SHOW_ABOUT && <AboutSection />}

        {/* FAQ — AEO answer targeting, mirrors JSON-LD FAQPage schema */}
        <FAQSection />

        {/* Blog teaser — drives homepage traffic to /blog */}
        <BlogTeaserSection />

        {/* Referral callout — above footer */}
        <ReferralCallout />
      </main>

      {/* Footer — contact form, office locations, nav */}
      <Footer />
    </div>
  );
}
