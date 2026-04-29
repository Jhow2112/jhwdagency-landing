/* ActiveSEOPage — Aralo Studio
   Active SEO: monthly done-for-you SEO and AEO service at $399/mo
   Design: matches main site — cream/forest palette, Inter + Fraunces */
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
    <circle cx="8" cy="8" r="7.5" fill="#b85433" fillOpacity="0.15" stroke="#b85433" strokeOpacity="0.5"/>
    <path d="M5 8l2 2 4-4" stroke="#b85433" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
    <circle cx="8" cy="8" r="7.5" fill="#8a857a" fillOpacity="0.15" stroke="#8a857a" strokeOpacity="0.4"/>
    <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#8a857a" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const deliverables = [
  {
    icon: "01",
    title: "Monthly SEO Audit & Updates",
    description: "Every month I review your page titles, meta descriptions, header structure, and keyword targeting. I update what needs updating and report what I changed and why.",
  },
  {
    icon: "02",
    title: "Google Business Profile Management",
    description: "I keep your Google Business Profile current with updated hours, photos, service descriptions, and posts. Active profiles rank higher in local search and Google Maps.",
  },
  {
    icon: "03",
    title: "AEO Schema Tuning",
    description: "I review and refine your FAQ content and structured data markup monthly so AI tools like ChatGPT, Perplexity, and Google's AI Overviews accurately represent your business.",
  },
  {
    icon: "04",
    title: "Local Citation Monitoring",
    description: "Inconsistent business listings across the web hurt your local rankings. I monitor your NAP (Name, Address, Phone) consistency and flag or fix discrepancies as they appear.",
  },
  {
    icon: "05",
    title: "Monthly Performance Report",
    description: "A plain-English report each month showing your Google Search Console impressions, clicks, top queries, and any ranking movements. No jargon, just what matters.",
  },
  {
    icon: "06",
    title: "Competitor Snapshot",
    description: "Once a quarter I review how your top local competitors are showing up in search and AI results, and adjust your strategy accordingly.",
  },
];

const faqs = [
  {
    q: "What's the difference between Active SEO and the SEO included in my website plan?",
    a: "Every website I build includes foundational on-page SEO: proper titles, descriptions, schema markup, and a Google Business setup on Plus and Premium plans. Active SEO is an ongoing monthly service that keeps everything current, monitors your rankings, manages your Google Business Profile, and tunes your AEO schema as AI search evolves. Think of the website plan as the foundation and Active SEO as the ongoing maintenance that keeps it performing.",
  },
  {
    q: "Do I need to already have a website with you to sign up?",
    a: "No. Active SEO works with any existing website, whether I built it or someone else did. I'll do an initial audit of your current setup and let you know what's in good shape and what needs work before we start.",
  },
  {
    q: "How long does it take to see results?",
    a: "Honest answer: it varies. For local searches with low competition, some clients see movement in 4 to 8 weeks. For more competitive markets, it can take 3 to 6 months. SEO is a long-term investment. What I can promise is that your site will be set up correctly and kept current every single month.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes. Active SEO is month-to-month with 30 days notice to cancel. No contracts, no penalties.",
  },
  {
    q: "What do I need to provide each month?",
    a: "Very little. I handle everything. Occasionally I may ask for updated photos, a new service you're offering, or confirmation of a change to your hours. Most months you just receive your report.",
  },
  {
    q: "Will you guarantee I rank number one on Google?",
    a: "No. No one can honestly make that guarantee. What I can guarantee is that your site will be technically sound, your Google Business Profile will be active and accurate, and your content will be structured correctly for both search engines and AI tools. That gives you the best possible foundation.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? "border-[#b85433]/40 bg-white shadow-md"
          : "border-[#d6d2c5] bg-white/60 hover:bg-white hover:border-[#b85433]/30 hover:shadow-sm"
      }`}
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-bold text-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>
          {faq.q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-[#b85433] rotate-45" : "bg-[#e7e2d6]"}`}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={open ? "white" : "#1f2a22"} strokeWidth="2" strokeLinecap="round">
            <path d="M6 1v10M1 6h10" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-6 pb-5 text-sm text-[#2f3b32] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function ActiveSEOPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", url: "https://aralostudio.com/" },
          { name: "Services", url: "https://aralostudio.com/" },
          { name: "Active SEO", url: "https://aralostudio.com/active-seo/" },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-[#1f2a22] pt-36 pb-20 sm:pt-44 sm:pb-28">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="section-label" style={{ color: "#d97a55" }}>
              Monthly Service
            </span>
            <h1
              className="font-display mt-3 text-5xl sm:text-6xl md:text-7xl text-[#f3efe6] leading-[1.05] mb-6"
            >
              Active SEO.{" "}
              <span style={{ color: "#d97a55" }}>Done for you.</span>
            </h1>
            <p
              className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Monthly SEO and AEO management that keeps your business visible in Google, Google Maps, and AI search tools. No contracts. Cancel any time.
            </p>

            {/* Price callout */}
            <div className="inline-flex items-baseline gap-2 mb-8">
              <span className="text-5xl sm:text-6xl font-extrabold text-white" style={{ fontFamily: "Inter, sans-serif" }}>$399</span>
              <span className="text-lg text-white/50" style={{ fontFamily: "Inter, sans-serif" }}>/month</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: "#b85433",
                  fontFamily: "Inter, sans-serif",
                  boxShadow: "0 4px 24px rgba(74,144,217,0.35)",
                }}
              >
                Get Started
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="/seo-aeo/"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold text-white rounded-xl border border-white/25 hover:bg-white/10 transition-all duration-200"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Learn About SEO & AEO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 sm:py-24 bg-[#f3efe6]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">What's Included</span>
            <h2
              className="mt-3 text-4xl md:text-5xl font-extrabold text-[#1f2a22] leading-tight"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Everything done for you, every month.
            </h2>
            <p
              className="mt-4 text-base text-[#2f3b32] max-w-lg mx-auto leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              One flat monthly fee. No hourly billing, no surprise invoices.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {deliverables.map((item) => (
              <div
                key={item.icon}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-[#d6d2c5] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#e7e2d6] flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1f2a22] mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#2f3b32] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">How It Compares</span>
            <h2
              className="mt-3 text-4xl md:text-5xl font-extrabold text-[#1f2a22] leading-tight"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Active SEO vs. website plans.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-5 text-[#1f2a22] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>Feature</th>
                  <th className="py-4 px-5 text-center text-[#1f2a22] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>Premium Plan</th>
                  <th className="py-4 px-5 text-center text-white font-bold rounded-t-xl bg-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>Active SEO</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["On-page SEO setup", true, true],
                  ["Google Business Profile setup", true, true],
                  ["JSON-LD schema markup", true, true],
                  ["Monthly SEO audit and updates", true, true],
                  ["Monthly AEO schema tuning", true, true],
                  ["Monthly GBP management", true, true],
                  ["Monthly performance report", true, true],
                  ["Local citation monitoring", false, true],
                  ["Quarterly competitor snapshot", false, true],
                  ["Works with any existing website", false, true],
                ].map(([feature, premium, active], i) => (
                  <tr key={i} className={`border-t border-[#e7e2d6] ${i % 2 === 0 ? "bg-[#f3efe6]" : "bg-white"}`}>
                    <td className="py-3.5 px-5 text-[#2f3b32]" style={{ fontFamily: "Inter, sans-serif" }}>{feature as string}</td>
                    <td className="py-3.5 px-5 text-center">
                      {premium ? <CheckIcon /> : <XIcon />}
                    </td>
                    <td className="py-3.5 px-5 text-center bg-[#e7e2d6]/60">
                      {active ? <CheckIcon /> : <XIcon />}
                    </td>
                  </tr>
                ))}
                <tr className="border-t border-[#e7e2d6]">
                  <td className="py-3.5 px-5 font-bold text-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>Monthly cost</td>
                  <td className="py-3.5 px-5 text-center font-bold text-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>$99/mo</td>
                  <td className="py-3.5 px-5 text-center font-bold text-[#b85433] bg-[#e7e2d6]/60" style={{ fontFamily: "Inter, sans-serif" }}>$399/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-[#8a857a] mt-4 max-w-lg mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            Active SEO is a standalone add-on service. It does not include website hosting or design. Premium plan hosting ($99/mo) is separate.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-[#f3efe6]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label">Questions</span>
              <h2
                className="mt-3 text-4xl md:text-5xl font-extrabold text-[#1f2a22] leading-tight"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Common questions.
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-[#1f2a22]">
        <div className="container text-center">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Ready to stay visible?
          </h2>
          <p
            className="text-base text-white/60 mb-8 max-w-md mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            $399/month. Month-to-month. Cancel any time. Get in touch and I'll start with a free audit of your current SEO setup.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{
              background: "#b85433",
              fontFamily: "Inter, sans-serif",
              boxShadow: "0 4px 24px rgba(74,144,217,0.35)",
            }}
          >
            Get a Free SEO Audit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
