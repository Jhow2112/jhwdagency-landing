/* SEO & Growth (route: /active-seo/) — Aralo Studio
   Monthly SEO + AEO management with 3 tiers: Essentials, Growth, Full Service.
   The route slug stays /active-seo/ but all visible text uses "SEO & Growth".
   Design: matches main site — cream/forest palette, Inter + Fraunces */
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
    <circle cx="8" cy="8" r="7.5" fill="#b85433" fillOpacity="0.15" stroke="#b85433" strokeOpacity="0.5"/>
    <path d="M5 8l2 2 4-4" stroke="#b85433" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DashIcon = () => (
  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
    <circle cx="8" cy="8" r="7.5" fill="#8a857a" fillOpacity="0.10" stroke="#8a857a" strokeOpacity="0.3"/>
    <path d="M5 8h6" stroke="#8a857a" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

// ─── Tier definitions ──────────────────────────────────────────────────────
const tiers = [
  {
    name: "Essentials",
    price: "$199",
    cadence: "/month",
    description: "Keep your existing site current and crawlable.",
    features: [
      "On-page SEO updates",
      "Monthly AEO schema tuning",
      "Monthly SEO audit",
      "Works with any existing website",
      "No contracts, cancel anytime",
    ],
    cta: "Start with Essentials",
    popular: false,
    highlight: false,
  },
  {
    name: "Growth",
    price: "$399",
    cadence: "/month",
    description: "Active local-search management plus monthly content.",
    features: [
      "Everything in Essentials",
      "Google Business Profile management",
      "Local citation monitoring",
      "Quarterly competitor snapshot",
      "2 SEO-optimized blog posts per month",
      "Works with any existing website",
      "No contracts, cancel anytime",
    ],
    cta: "Choose Growth",
    popular: true,
    highlight: true,
  },
  {
    name: "Full Service",
    price: "$599",
    cadence: "/month",
    description: "Search-intent content strategy and the highest cadence.",
    features: [
      "Everything in Growth",
      "4 SEO-optimized blog posts per month",
      "Content strategy aligned to search intent",
      "Works with any existing website",
      "No contracts, cancel anytime",
    ],
    cta: "Go Full Service",
    popular: false,
    highlight: false,
  },
];

// ─── Comparison rows ──────────────────────────────────────────────────────
// Three-column matrix across the new tiers. true = check, false = dash,
// string = text label (e.g., "2/mo" for blog post counts).
type CellValue = boolean | string;
const compareRows: { feature: string; cells: [CellValue, CellValue, CellValue] }[] = [
  { feature: "On-page SEO updates", cells: [true, true, true] },
  { feature: "Monthly AEO schema tuning", cells: [true, true, true] },
  { feature: "Monthly SEO audit", cells: [true, true, true] },
  { feature: "Google Business Profile management", cells: [false, true, true] },
  { feature: "Local citation monitoring", cells: [false, true, true] },
  { feature: "Quarterly competitor snapshot", cells: [false, true, true] },
  { feature: "SEO-optimized blog posts", cells: [false, "2/mo", "4/mo"] },
  { feature: "Content strategy aligned to search intent", cells: [false, false, true] },
  { feature: "Works with any existing website", cells: [true, true, true] },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What's the difference between SEO & Growth and the SEO included in my website plan?",
    a: "Every website I build includes foundational on-page SEO: proper titles, descriptions, schema markup, and a Google Business Profile setup on Plus and Premium plans. The Premium plan also includes a monthly SEO audit. SEO & Growth is a separate, ongoing monthly service that goes further: active Google Business Profile management, monthly AEO schema tuning, citation monitoring, and SEO-optimized blog content on the Growth and Full Service tiers. Think of the website plan as the foundation and SEO & Growth as the marketing engine that keeps it visible.",
  },
  {
    q: "Do I need to already have a website with you to sign up?",
    a: "No. SEO & Growth works with any existing website, whether I built it or someone else did. I'll do an initial audit of your current setup and let you know what's in good shape and what needs work before we start.",
  },
  {
    q: "Which plan should I start with?",
    a: "Most local businesses do well on Growth. Essentials is right if your site is already in good shape and you mainly want it kept current. Full Service is for businesses that want to publish content regularly and treat search as a primary growth channel.",
  },
  {
    q: "How long does it take to see results?",
    a: "Honest answer: it varies. For local searches with low competition, some clients see movement in 4 to 8 weeks. For more competitive markets, it can take 3 to 6 months. SEO is a long-term investment. What I can promise is that your site will be set up correctly and kept current every single month.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes. Every SEO & Growth plan is month-to-month with 30 days notice to cancel. No contracts, no penalties.",
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
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="px-6 pb-5 text-sm text-[#2f3b32] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
          {faq.a}
        </p>
      </div>
    </div>
  );
}

function TierCard({ tier }: { tier: typeof tiers[0] }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        tier.highlight
          ? "shadow-2xl md:scale-105 md:z-10 ring-2 ring-[#b85433]/40"
          : "border border-[#d6d2c5] bg-white shadow-md hover:shadow-xl"
      }`}
      style={{ background: tier.highlight ? "#1f2a22" : undefined }}
    >
      {tier.popular && (
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div className="bg-white text-[#1f2a22] text-xs font-bold px-4 py-1.5 rounded-b-xl shadow-sm" style={{ fontFamily: "Inter, sans-serif" }}>
            MOST POPULAR
          </div>
        </div>
      )}

      <div className={`flex flex-col flex-1 p-6 sm:p-7 gap-5 ${tier.popular ? "pt-10" : ""}`}>
        <div>
          <h3
            className={`text-xl font-bold ${tier.highlight ? "text-white" : "text-[#1f2a22]"}`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {tier.name}
          </h3>
          <p
            className={`mt-2 text-sm ${tier.highlight ? "text-white/65" : "text-[#8a857a]"}`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {tier.description}
          </p>
        </div>

        <div className="flex items-end gap-1.5">
          <span
            className={`text-4xl font-extrabold ${tier.highlight ? "text-white" : "text-[#1f2a22]"}`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {tier.price}
          </span>
          <span
            className={`text-sm pb-1.5 ${tier.highlight ? "text-white/55" : "text-[#8a857a]"}`}
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {tier.cadence}
          </span>
        </div>

        <div className={`h-px ${tier.highlight ? "bg-white/15" : "bg-[#d6d2c5]"}`} />

        <ul className="flex flex-col gap-3 flex-1">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                <circle cx="8" cy="8" r="7.5" stroke={tier.highlight ? "white" : "#b85433"} strokeOpacity="0.4"/>
                <path d="M5 8l2 2 4-4" stroke={tier.highlight ? "white" : "#b85433"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span
                className={`text-sm ${tier.highlight ? "text-white/80" : "text-[#2f3b32]"}`}
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>

        <a
          href="/#contact"
          className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm transition-colors ${
            tier.highlight
              ? "bg-white text-[#1f2a22] hover:bg-[#f3efe6]"
              : "bg-[#1f2a22] text-[#f3efe6] hover:bg-[#b85433]"
          }`}
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, letterSpacing: "0.02em" }}
        >
          {tier.cta}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function ActiveSEOPage() {
  return (
    <div className="min-h-screen bg-[#f3efe6]">
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", url: "https://aralostudio.com/" },
          { name: "Services", url: "https://aralostudio.com/" },
          { name: "SEO & Growth", url: "https://aralostudio.com/active-seo/" },
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
            <h1 className="font-display mt-3 text-5xl sm:text-6xl md:text-7xl text-[#f3efe6] leading-[1.05] mb-6">
              SEO & Growth.{" "}
              <span style={{ color: "#d97a55" }}>Done for you.</span>
            </h1>
            <p
              className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mb-8"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Monthly SEO and AEO management that keeps your business visible in Google, Google Maps, and AI search tools. Three plans to match your goals. No contracts. Cancel any time.
            </p>

            {/* Price callout */}
            <div className="inline-flex items-baseline gap-2 mb-8">
              <span className="text-base text-white/55" style={{ fontFamily: "Inter, sans-serif" }}>Starting at</span>
              <span className="text-5xl sm:text-6xl font-extrabold text-white" style={{ fontFamily: "Inter, sans-serif" }}>$199</span>
              <span className="text-lg text-white/50" style={{ fontFamily: "Inter, sans-serif" }}>/month</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#plans"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#b85433] text-[#f3efe6] hover:bg-[#d97a55] transition-colors"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "13px", letterSpacing: "0.02em" }}
              >
                See Plans
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="/seo-aeo/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[rgba(243,239,230,0.32)] text-[#f3efe6] hover:border-[#f3efe6] transition-colors"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "13px", letterSpacing: "0.02em" }}
              >
                Learn About SEO & AEO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tier cards */}
      <section id="plans" className="py-16 sm:py-24 bg-[#f3efe6]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">Pricing</span>
            <h2
              className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f2a22] leading-tight"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Three plans. Pick the one that fits.
            </h2>
            <p
              className="mt-4 text-base text-[#2f3b32] max-w-lg mx-auto leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Each plan is month-to-month. Cancel any time with 30 days notice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto items-center">
            {tiers.map((tier) => (
              <TierCard key={tier.name} tier={tier} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table — three columns, no Premium plan column */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label">How They Compare</span>
            <h2
              className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f2a22] leading-tight"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              What's in each plan.
            </h2>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 px-5 text-[#1f2a22] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>Feature</th>
                  <th className="py-4 px-5 text-center text-[#1f2a22] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>Essentials</th>
                  <th className="py-4 px-5 text-center text-white font-bold rounded-t-xl bg-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>Growth</th>
                  <th className="py-4 px-5 text-center text-[#1f2a22] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>Full Service</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row, i) => (
                  <tr key={row.feature} className={`border-t border-[#e7e2d6] ${i % 2 === 0 ? "bg-[#f3efe6]" : "bg-white"}`}>
                    <td className="py-3.5 px-5 text-[#2f3b32]" style={{ fontFamily: "Inter, sans-serif" }}>{row.feature}</td>
                    {row.cells.map((cell, idx) => (
                      <td
                        key={idx}
                        className={`py-3.5 px-5 text-center ${idx === 1 ? "bg-[#e7e2d6]/60" : ""}`}
                      >
                        {typeof cell === "string" ? (
                          <span className="text-sm text-[#1f2a22] font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>{cell}</span>
                        ) : cell ? (
                          <span className="inline-flex justify-center"><CheckIcon /></span>
                        ) : (
                          <span className="inline-flex justify-center"><DashIcon /></span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="border-t border-[#e7e2d6]">
                  <td className="py-3.5 px-5 font-bold text-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>Monthly cost</td>
                  <td className="py-3.5 px-5 text-center font-bold text-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>$199</td>
                  <td className="py-3.5 px-5 text-center font-bold text-[#b85433] bg-[#e7e2d6]/60" style={{ fontFamily: "Inter, sans-serif" }}>$399</td>
                  <td className="py-3.5 px-5 text-center font-bold text-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>$599</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-[#8a857a] mt-4 max-w-lg mx-auto" style={{ fontFamily: "Inter, sans-serif" }}>
            SEO & Growth is a standalone monthly service. It works with any existing website and does not include website hosting or design.
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
                className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f2a22] leading-tight"
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
            Tell me about your business and I'll start with a free audit of your current SEO setup. From there we'll pick the plan that fits.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#b85433] text-[#f3efe6] hover:bg-[#d97a55] transition-colors"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "13px", letterSpacing: "0.02em" }}
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
