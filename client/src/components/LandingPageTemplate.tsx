/* LandingPageTemplate — Aralo Studio
   Single reusable template powering all city + industry landing pages.
   Adding a new city/industry is just a new entry in client/src/data/landingPages.ts —
   the route in App.tsx and the SSR + prerender meta are wired up automatically. */
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import type { LandingPageData } from "@/data/landingPages";

const SITE_ORIGIN = "https://aralostudio.com";

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    const [key, rawName] = selector.replace(/^meta\[/, "").replace(/\]$/, "").split("=");
    const name = rawName?.replace(/['"]/g, "");
    if (key && name) el.setAttribute(key, name);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export default function LandingPageTemplate({ data }: { data: LandingPageData }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = data.metaTitle;

    setMeta('meta[name="description"]', "content", data.metaDescription);
    setMeta('meta[property="og:title"]', "content", data.metaTitle);
    setMeta('meta[property="og:description"]', "content", data.metaDescription);
    setMeta('meta[property="og:url"]', "content", `${SITE_ORIGIN}${data.slug}/`);
    setMeta('meta[name="twitter:title"]', "content", data.metaTitle);
    setMeta('meta[name="twitter:description"]', "content", data.metaDescription);

    const canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute("href", `${SITE_ORIGIN}${data.slug}/`);
  }, [data.slug, data.metaTitle, data.metaDescription]);

  return (
    <div className="min-h-screen bg-[#f3efe6]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1f2a22] pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="container max-w-3xl mx-auto text-center">
          <span
            className="inline-block text-xs font-bold tracking-[0.18em] uppercase text-[#f3efe6] border border-[#b85433]/40 rounded-full px-3 py-1.5 mb-5"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {data.bodyEyebrow}
          </span>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {data.heading}
            {data.headingAccent && (
              <>
                <br />
                <span className="text-[#b85433]">{data.headingAccent}</span>
              </>
            )}
          </h1>
          <p
            className="text-base sm:text-lg text-white/65 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {data.subheading}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#b85433] text-white text-sm font-bold hover:bg-[#d97a55] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              See Pricing
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Body paragraph */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container max-w-3xl mx-auto">
          <span className="section-label">{data.bodyEyebrow}</span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#1f2a22] leading-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {data.bodyHeading}
          </h2>
          <p
            className="mt-5 text-base text-[#2f3b32] leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {data.bodyParagraph}
          </p>
        </div>
      </section>

      {/* Pricing tiers — reused */}
      <PricingSection />

      {/* How it works — reused */}
      <ProcessSection />

      {/* CTA — links to homepage contact form */}
      <section className="py-14 sm:py-20 bg-[#1f2a22]">
        <div className="container max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Ready to get started?
          </h2>
          <p
            className="text-base text-white/60 mb-8 max-w-md mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Tell me about your business — I'll get back to you within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#b85433] text-white text-sm font-bold hover:bg-[#d97a55] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Contact Jeremy
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
