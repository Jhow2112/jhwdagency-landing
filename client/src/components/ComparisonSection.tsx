/* ComparisonSection — Aralo Studio
   Mobile: stacked cards per row, each showing Agency / DIY / Us values
   Desktop: traditional table layout with overflow-x-auto fallback */
import { useEffect, useRef, useState } from "react";

const rows = [
  { label: "Build cost", agency: "$3,000–$10,000+", diy: "$20–$200+", us: "$495–$1,295" },
  { label: "Monthly", agency: "$100–$500", diy: "$15–$150", us: "$29–$99" },
  { label: "Turnaround", agency: "4–8 weeks", diy: "Days to ∞", us: "5–10 days" },
  { label: "Your effort", agency: "Multiple meetings", diy: "All yours", us: "Answer questions, approve" },
  { label: "Support", agency: "Varies", diy: "You figure it out", us: "Included in plan" },
];

export default function ComparisonSection() {
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
    <section className="py-16 sm:py-20 bg-white" ref={ref} aria-labelledby="comparison-heading">
      <div className="container">
        <div className="text-center mb-10 sm:mb-12">
          <span className="section-label">How We Compare</span>
          <h2 id="comparison-heading" className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>
            The smarter choice for local businesses.
          </h2>
        </div>

        {/* Styled comparison — card-per-row layout */}
        <div
          className="flex flex-col gap-3 max-w-4xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Column header */}
          <div className="grid grid-cols-3 gap-2 px-3 pb-1">
            <span className="text-xs sm:text-sm font-bold text-[#8a857a] tracking-widest uppercase text-center" style={{ fontFamily: "Inter, sans-serif" }}>Agency</span>
            <span className="text-xs sm:text-sm font-bold text-[#8a857a] tracking-widest uppercase text-center" style={{ fontFamily: "Inter, sans-serif" }}>DIY Builder</span>
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-center" style={{ fontFamily: "Inter, sans-serif" }}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#b85433] text-white text-xs font-bold">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="white"><path d="M4 0l.9 2.6H8L5.5 4.2l.9 2.6L4 5.2l-2.4 1.6.9-2.6L0 2.6h3.1z"/></svg>
                Our Service
              </span>
            </span>
          </div>

          {rows.map((row) => (
            <div key={row.label} className="rounded-xl border border-[#d6d2c5] overflow-hidden shadow-sm">
              {/* Row label */}
              <div className="bg-[#f3efe6] px-4 sm:px-6 py-2 sm:py-3 border-b border-[#d6d2c5]">
                <span className="text-xs sm:text-sm font-bold text-[#1f2a22] uppercase tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>
                  {row.label}
                </span>
              </div>
              {/* Values */}
              <div className="grid grid-cols-3 divide-x divide-[#d6d2c5]">
                <div className="px-3 sm:px-5 py-3 sm:py-4 text-center">
                  <span className="text-xs sm:text-sm text-[#8a857a]" style={{ fontFamily: "Inter, sans-serif" }}>{row.agency}</span>
                </div>
                <div className="px-3 sm:px-5 py-3 sm:py-4 text-center">
                  <span className="text-xs sm:text-sm text-[#8a857a]" style={{ fontFamily: "Inter, sans-serif" }}>{row.diy}</span>
                </div>
                <div className="px-3 sm:px-5 py-3 sm:py-4 text-center bg-[#e7e2d6]">
                  <span className="text-xs sm:text-sm font-semibold text-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>{row.us}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
