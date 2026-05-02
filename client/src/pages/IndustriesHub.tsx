/* IndustriesHub — Aralo Studio
   /industries/ — top-level hub. Lists every industry as a card with an icon,
   then a "Don't see your industry?" callout linking to the contact form. */

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import IndustryIcon from "@/components/IndustryIcon";
import { INDUSTRIES } from "@/data/landingPages";

const SITE_ORIGIN = "https://aralostudio.com";

const SHORT_DESCRIPTIONS: Record<string, string> = {
  "/websites-for-contractors":
    "Sites that show your work, win bigger jobs, and earn the call.",
  "/websites-for-restaurants":
    "Hours, menu, location — exactly what hungry customers came to find.",
  "/websites-for-cleaning-services":
    "Trust signals and easy booking for a cleaning business.",
  "/websites-for-counselors":
    "A calm, professional presence that lowers the barrier to reach out.",
  "/websites-for-hvac":
    "Built to convert calls — emergency-ready and phone-first.",
  "/websites-for-landscapers":
    "Photo-forward portfolios that pre-sell quality work.",
  "/websites-for-plumbers":
    "Click-to-call on every page. Built for emergency searches.",
  "/websites-for-electricians":
    "License front and center. Residential and commercial done right.",
  "/websites-for-painters":
    "Before-and-after galleries that do the selling for you.",
  "/websites-for-salons":
    "Real photos, current menus, easy booking — what new clients expect.",
  "/websites-for-auto-detailers":
    "When you don't have a shop, your website is the storefront.",
  "/websites-for-real-estate":
    "Stand out from the cookie-cutter brokerage sites.",
};

export default function IndustriesHub() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo(0, 0);
    document.title =
      "Industries We Serve | Small Business Web Design Meridian Idaho | Aralo Studio";
  }, []);

  return (
    <div className="min-h-screen bg-[#f3efe6]">
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", url: `${SITE_ORIGIN}/` },
          { name: "Industries", url: `${SITE_ORIGIN}/industries/` },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1f2a22] pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="section-label" style={{ color: "#d97a55" }}>
            Aralo Studio · Industries
          </span>
          <h1
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Websites for{" "}
            <span style={{ color: "#d97a55" }}>every kind of business.</span>
          </h1>
          <p
            className="mt-5 text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            We work with small businesses across the Treasure Valley and
            beyond. If you need a website that looks professional and gets
            found on Google, we can build it.
          </p>
        </div>
      </section>

      {/* Industries grid */}
      <section className="py-14 sm:py-20 md:py-24">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {INDUSTRIES.map((ind) => (
              <a
                key={ind.slug}
                href={`${ind.slug}/`}
                className="group flex flex-col gap-4 p-6 sm:p-7 rounded-2xl bg-white border border-[#d6d2c5] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#e7e2d6] flex items-center justify-center text-[#9a4528] group-hover:bg-[#9a4528] group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    <IndustryIcon slug={ind.slug} size={24} />
                  </div>
                  <h2
                    className="text-lg font-bold text-[#1f2a22] group-hover:text-[#9a4528] transition-colors leading-tight"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {ind.label}
                  </h2>
                </div>
                <p
                  className="text-sm text-[#2f3b32] leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {SHORT_DESCRIPTIONS[ind.slug] ?? ""}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9a4528] mt-auto group-hover:gap-3 transition-all duration-200"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Don't see your industry */}
      <section className="py-14 sm:py-20 bg-white border-t border-[#d6d2c5]">
        <div className="container max-w-2xl mx-auto text-center">
          <span className="section-label">Don't See Your Industry?</span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#1f2a22] leading-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            We build websites for any business.
          </h2>
          <p
            className="mt-5 text-base text-[#2f3b32] leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            The industries listed here are where we have the most experience,
            but if you run a business and need a professional website, we can
            help. Get in touch and we'll put together a plan.
          </p>
          <div className="mt-8">
            <a
              href="/#contact"
              className="btn-terra inline-flex items-center gap-2 px-7 py-3.5 text-base"
            >
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
