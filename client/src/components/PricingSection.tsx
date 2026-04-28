/* PricingSection — Jeremy Howard Web Design
   Mobile-first: cards stack single column on mobile, 3-col on md+
   Highlighted card does NOT scale on mobile (causes overflow) */
import { useEffect, useRef, useState } from "react";

const plans = [
  {
    name: "Minimum",
    tagline: "Get online and look professional.",
    oneTime: "$495",
    monthly: "$29",
    description: "Everything you need to get online fast.",
    features: [
      "3-page website",
      "Custom design on templates",
      "Contact form",
      "Hosting included",
      "5 edits per year",
      "1 revision during design",
      "Live in 5–7 business days",
    ],
    cta: "Get Started",
    popular: false,
    highlight: false,
    stripeUrl: "https://buy.stripe.com/dRmdR9bCy9ox1lbdtkcMM00",
  },
  {
    name: "Plus",
    tagline: "Get found on Google.",
    oneTime: "$895",
    monthly: "$49",
    description: "More pages, more reach, and built to be found.",
    features: [
      "5-page website",
      "Everything in Minimum",
      "2 edits per month",
      "On-page SEO & AEO optimization",
      "Google Business Profile setup",
      "2 revisions during design",
      "Live in 7–10 business days",
    ],
    cta: "Choose Plus",
    popular: true,
    highlight: true,
    stripeUrl: "https://buy.stripe.com/28EaEX0XU58h0h7gFwcMM01",
  },
  {
    name: "Premium",
    tagline: "Dominate local search.",
    oneTime: "$1,295",
    monthly: "$99",
    description: "Full-service with copy, SEO/AEO, and ongoing optimization.",
    features: [
      "10-page website",
      "Everything in Plus",
      "Professional copywriting",
      "Domain setup assistance",
      "Monthly on-page SEO updates",
      "Monthly AEO content tuning",
      "Google Business Profile management",
      "3 edits per month",
      "3 revision rounds during design",
    ],
    cta: "Go Premium",
    popular: false,
    highlight: false,
    stripeUrl: "https://buy.stripe.com/3cI14nayucAJgg5fBscMM02",
  },
];

const checkIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
    <circle cx="8" cy="8" r="7.5" stroke="#4A90D9" strokeOpacity="0.4"/>
    <path d="M5 8l2 2 4-4" stroke="#4A90D9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const checkIconWhite = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
    <circle cx="8" cy="8" r="7.5" stroke="white" strokeOpacity="0.4"/>
    <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function PlanCard({ plan, index }: { plan: (typeof plans)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        plan.highlight
          ? "shadow-2xl md:scale-105 md:z-10 ring-2 ring-[#4A90D9]/40"
          : "border border-[#C8DCF0] bg-white shadow-md hover:shadow-xl"
      }`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s, box-shadow 0.3s ease`,
        background: plan.highlight
          ? "linear-gradient(160deg, #1E3A5F 0%, #1a3357 40%, #0f2240 100%)"
          : undefined,
      }}
    >
      {/* Most Popular badge */}
      {plan.popular && (
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div className="bg-white text-[#1E3A5F] text-xs font-bold px-4 py-1.5 rounded-b-xl shadow-sm" style={{ fontFamily: "Syne, sans-serif" }}>
            MOST POPULAR
          </div>
        </div>
      )}

      <div className={`flex flex-col flex-1 p-6 sm:p-7 gap-5 sm:gap-6 ${plan.popular ? "pt-10" : ""}`}>
        {/* Plan name + tagline + description */}
        <div>
          <h3
            className={`text-xl font-bold ${plan.highlight ? "text-white" : "text-[#0D1B2A]"}`}
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {plan.name}
          </h3>
          <p
            className={`text-sm font-semibold mb-2 ${plan.highlight ? "text-[#B8D4F0]" : "text-[#4A90D9]"}`}
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {plan.tagline}
          </p>
          <p
            className={`text-sm ${plan.highlight ? "text-white/65" : "text-[#6B8BAA]"}`}
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            {plan.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="flex flex-col gap-1">
          <div className="flex items-end gap-2">
            <span
              className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-[#0D1B2A]"}`}
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {plan.oneTime}
            </span>
            <span
              className={`text-sm pb-1.5 ${plan.highlight ? "text-white/55" : "text-[#6B8BAA]"}`}
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              one-time
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className={`text-lg font-bold ${plan.highlight ? "text-[#B8D4F0]" : "text-[#4A90D9]"}`}
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {plan.monthly}
              <span className={`text-sm font-normal ${plan.highlight ? "text-white/55" : "text-[#6B8BAA]"}`}>/mo hosting &amp; upkeep</span>
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px ${plan.highlight ? "bg-white/15" : "bg-[#C8DCF0]"}`} />

        {/* Features */}
        <ul className="flex flex-col gap-3 flex-1">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              {plan.highlight ? checkIconWhite : checkIcon}
              <span
                className={`text-sm ${plan.highlight ? "text-white/80" : "text-[#3D5A7A]"}`}
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA — Stripe Payment Link */}
        <a
          href={plan.stripeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold transition-all duration-200 ${
            plan.highlight
              ? "bg-white text-[#1E3A5F] hover:bg-[#EEF4FB] shadow-lg"
              : "btn-terra"
          }`}
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {/* Lock icon for trust */}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          {plan.cta}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        {/* Stripe trust note */}
        <p className={`text-center text-xs mt-1 ${plan.highlight ? "text-white/40" : "text-[#9BB5CC]"}`} style={{ fontFamily: "Nunito Sans, sans-serif" }}>
          Secure checkout via Stripe
        </p>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#F4F7FA]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="section-label">Pricing Plans</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D1B2A]" style={{ fontFamily: "Syne, sans-serif" }}>
            Simple, transparent pricing.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#3D5A7A] max-w-md mx-auto" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
            No long-term contracts. Cancel monthly plans anytime with 30 days notice.
          </p>
        </div>

        {/* Comparison teaser */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-10 sm:mb-14">
          {[
            { label: "Agency cost", value: "$3,000–$10,000+" },
            { label: "DIY builder", value: "$15–$150/mo" },
            { label: "Our service", value: "$495–$1,295", highlight: true },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm ${
                item.highlight
                  ? "bg-[#1E3A5F] text-white font-bold"
                  : "bg-white border border-[#C8DCF0] text-[#3D5A7A]"
              }`}
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              <span className="font-semibold">{item.label}:</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>

        {/* Cards — single col on mobile, 3-col on md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 items-center">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Custom build note */}
        <div className="mt-10 sm:mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-5 sm:px-6 py-4 rounded-2xl bg-white border border-[#C8DCF0] shadow-sm w-full sm:w-auto">
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-sm font-bold text-[#0D1B2A]" style={{ fontFamily: "Syne, sans-serif" }}>Need a Fully Custom Build?</span>
              <span className="text-xs text-[#6B8BAA]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                E-commerce, integrations, and advanced features — contact us for a custom quote.
              </span>
            </div>
            <a href="#contact" className="btn-ghost-pill px-5 py-2 text-sm whitespace-nowrap">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
