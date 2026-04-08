/* PricingSection — Contemporary Studio, Warm Geometric
   3-tier pricing cards from service-one-pager-v2.pdf
   Center card elevated with terracotta gradient, "Most Popular" badge */
import { useEffect, useRef, useState } from "react";

const plans = [
  {
    name: "Minimum",
    oneTime: "$395",
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
  },
  {
    name: "Plus",
    oneTime: "$795",
    monthly: "$49",
    description: "More pages, more edits, faster launch.",
    features: [
      "5-page website",
      "Everything in Minimum",
      "2 edits per month",
      "Google Analytics setup",
      "2 revisions during design",
      "Live in 7–10 business days",
    ],
    cta: "Choose Plus",
    popular: true,
    highlight: true,
  },
  {
    name: "Premium",
    oneTime: "$995",
    monthly: "$99",
    description: "Full-service with copy, SEO, and Google optimization.",
    features: [
      "10-page website",
      "Everything in Plus",
      "Professional copywriting",
      "Domain setup assistance",
      "Google Business optimization",
      "SEO optimization",
      "3 edits per month",
      "3 revisions during design",
    ],
    cta: "Go Premium",
    popular: false,
    highlight: false,
  },
];

const checkIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
    <circle cx="8" cy="8" r="7.5" stroke="#C96442" strokeOpacity="0.3"/>
    <path d="M5 8l2 2 4-4" stroke="#C96442" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const checkIconWhite = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
    <circle cx="8" cy="8" r="7.5" stroke="white" strokeOpacity="0.4"/>
    <path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function PlanCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
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
          ? "shadow-2xl scale-105 z-10"
          : "border border-[#E8E0D5] bg-white shadow-md hover:shadow-xl"
      }`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? plan.highlight ? "scale(1.05) translateY(0)" : "translateY(0)"
          : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s, box-shadow 0.3s ease`,
        background: plan.highlight
          ? "linear-gradient(160deg, #C96442 0%, #B5522F 40%, #8A3A1E 100%)"
          : undefined,
      }}
    >
      {/* Most Popular badge */}
      {plan.popular && (
        <div className="absolute top-0 left-0 right-0 flex justify-center">
          <div className="bg-white text-[#C96442] text-xs font-bold px-4 py-1.5 rounded-b-xl shadow-sm" style={{ fontFamily: "Syne, sans-serif" }}>
            MOST POPULAR
          </div>
        </div>
      )}

      <div className={`flex flex-col flex-1 p-7 gap-6 ${plan.popular ? "pt-10" : ""}`}>
        {/* Plan name + description */}
        <div>
          <h3
            className={`text-xl font-bold mb-1 ${plan.highlight ? "text-white" : "text-[#0F0E0D]"}`}
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {plan.name}
          </h3>
          <p
            className={`text-sm ${plan.highlight ? "text-white/70" : "text-[#8A7A72]"}`}
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            {plan.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="flex flex-col gap-1">
          <div className="flex items-end gap-2">
            <span
              className={`text-4xl font-extrabold ${plan.highlight ? "text-white" : "text-[#0F0E0D]"}`}
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {plan.oneTime}
            </span>
            <span
              className={`text-sm pb-1.5 ${plan.highlight ? "text-white/60" : "text-[#8A7A72]"}`}
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              one-time
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className={`text-lg font-bold ${plan.highlight ? "text-white/90" : "text-[#C96442]"}`}
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {plan.monthly}
              <span className={`text-sm font-normal ${plan.highlight ? "text-white/60" : "text-[#8A7A72]"}`}>/mo</span>
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px ${plan.highlight ? "bg-white/20" : "bg-[#E8E0D5]"}`} />

        {/* Features */}
        <ul className="flex flex-col gap-3 flex-1">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              {plan.highlight ? checkIconWhite : checkIcon}
              <span
                className={`text-sm ${plan.highlight ? "text-white/85" : "text-[#4A3F38]"}`}
                style={{ fontFamily: "Nunito Sans, sans-serif" }}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold transition-all duration-200 ${
            plan.highlight
              ? "bg-white text-[#C96442] hover:bg-[#FAF7F4] shadow-lg"
              : "btn-terra"
          }`}
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {plan.cta}
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-[#FAF7F4]">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="section-label">Pricing Plans</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-[#0F0E0D]" style={{ fontFamily: "Syne, sans-serif" }}>
            Simple, transparent pricing.
          </h2>
          <p className="mt-4 text-base text-[#6B5C52] max-w-md mx-auto" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
            No long-term contracts. Cancel monthly plans anytime with 30 days notice.
          </p>
        </div>

        {/* Comparison teaser */}
        <div className="flex flex-wrap justify-center gap-6 mb-14">
          {[
            { label: "Agency cost", value: "$3,000–$10,000+" },
            { label: "DIY builder", value: "$20–$200+" },
            { label: "Our service", value: "$395–$995", highlight: true },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm ${
                item.highlight
                  ? "bg-[#C96442] text-white font-bold"
                  : "bg-white border border-[#E8E0D5] text-[#6B5C52]"
              }`}
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              <span className="font-semibold">{item.label}:</span>
              <span>{item.value}</span>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Custom build note */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-4 rounded-2xl bg-white border border-[#E8E0D5] shadow-sm">
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold text-[#0F0E0D]" style={{ fontFamily: "Syne, sans-serif" }}>Need a Fully Custom Build?</span>
              <span className="text-xs text-[#8A7A72]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                E-commerce, integrations, and advanced features — contact us for a custom quote.
              </span>
            </div>
            <a
              href="#contact"
              className="btn-ghost-pill px-5 py-2 text-sm whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
