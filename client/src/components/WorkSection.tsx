/* WorkSection — Contemporary Studio, Cool Blue */
import { useEffect, useRef, useState } from "react";

const caseStudies = [
  {
    client: "Modern Earth Goods",
    category: "E-commerce · Brand Identity",
    headline: "A 6-day launch that tripled online inquiries.",
    description:
      "Modern Earth Goods needed a web presence that matched their handcrafted aesthetic. We designed and launched a 5-page site with product showcase, contact form, and Google Analytics — live in under a week.",
    results: [
      { label: "Days to Launch", value: "6" },
      { label: "Inquiry Increase", value: "3×" },
      { label: "Bounce Rate Drop", value: "−38%" },
    ],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/case-study-blue-Q9LWBmoJfQhZ5JkTfYb5Gb.webp",
    plan: "Plus Plan",
  },
];

export default function WorkSection() {
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

  const cs = caseStudies[0];

  return (
    <section id="work" className="py-24 bg-white" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-12">
          <span className="section-label">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D1B2A]" style={{ fontFamily: "Syne, sans-serif" }}>
            Real results for real businesses.
          </h2>
        </div>

        {/* Case study card */}
        <div
          className="relative rounded-3xl overflow-hidden bg-[#0D1B2A] shadow-2xl"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={cs.image}
              alt={cs.client}
              className="w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A]/95 via-[#0D1B2A]/65 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 md:p-14 min-h-[420px] items-center">
            <div className="flex flex-col gap-6">
              {/* Category + plan */}
              <div className="flex items-center gap-3">
                <span className="text-xs px-3 py-1 rounded-full bg-[#4A90D9]/20 text-[#B8D4F0] font-semibold border border-[#4A90D9]/30" style={{ fontFamily: "Syne, sans-serif" }}>
                  {cs.category}
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 font-semibold border border-white/20" style={{ fontFamily: "Syne, sans-serif" }}>
                  {cs.plan}
                </span>
              </div>

              <div>
                <p className="text-sm text-[#B8D4F0] font-semibold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                  {cs.client}
                </p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight" style={{ fontFamily: "Syne, sans-serif" }}>
                  {cs.headline}
                </h3>
              </div>

              <p className="text-base text-white/70 leading-relaxed" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                {cs.description}
              </p>

              <a
                href="#contact"
                className="btn-terra inline-flex items-center gap-2 px-6 py-3 text-sm self-start"
              >
                Start Your Project
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Results */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
              {cs.results.map((r) => (
                <div
                  key={r.label}
                  className="glass-card flex-1 lg:flex-none p-5 bg-white/8 border-white/12"
                >
                  <p className="text-3xl font-extrabold text-white" style={{ fontFamily: "Syne, sans-serif" }}>
                    {r.value}
                  </p>
                  <p className="text-sm text-white/55 mt-1" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                    {r.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* More work teaser */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#6B8BAA]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
            More case studies available on request.{" "}
            <a href="#contact" className="text-[#4A90D9] font-semibold hover:underline">
              Get in touch →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
