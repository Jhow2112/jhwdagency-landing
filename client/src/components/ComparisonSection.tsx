/* ComparisonSection — Contemporary Studio, Cool Blue */
import { useEffect, useRef, useState } from "react";

const rows = [
  { label: "Build cost", agency: "$3,000–$10,000+", diy: "$20–$200+", us: "$395–$995" },
  { label: "Monthly", agency: "$100–$500", diy: "$15–$50", us: "$29–$99" },
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
    <section className="py-20 bg-white" ref={ref}>
      <div className="container">
        <div className="text-center mb-12">
          <span className="section-label">How We Compare</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0D1B2A]" style={{ fontFamily: "Syne, sans-serif" }}>
            The smarter choice for local businesses.
          </h2>
        </div>

        <div
          className="overflow-x-auto rounded-2xl border border-[#C8DCF0] shadow-sm"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <table className="w-full min-w-[540px]">
            <thead>
              <tr className="bg-[#F4F7FA]">
                <th className="text-left px-6 py-4 text-xs font-bold text-[#6B8BAA] tracking-widest uppercase" style={{ fontFamily: "Syne, sans-serif" }}>
                  &nbsp;
                </th>
                <th className="px-6 py-4 text-center text-xs font-bold text-[#6B8BAA] tracking-widest uppercase" style={{ fontFamily: "Syne, sans-serif" }}>
                  Agency
                </th>
                <th className="px-6 py-4 text-center text-xs font-bold text-[#6B8BAA] tracking-widest uppercase" style={{ fontFamily: "Syne, sans-serif" }}>
                  DIY Builder
                </th>
                <th className="px-6 py-4 text-center" style={{ fontFamily: "Syne, sans-serif" }}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#1E3A5F] to-[#4A90D9] text-white text-xs font-bold">
                    ✦ Our Service
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-t border-[#C8DCF0] ${i % 2 === 0 ? "bg-white" : "bg-[#F4F7FA]/50"}`}
                >
                  <td className="px-6 py-4 text-sm font-semibold text-[#0D1B2A]" style={{ fontFamily: "Syne, sans-serif" }}>
                    {row.label}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-[#6B8BAA]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                    {row.agency}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-[#6B8BAA]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                    {row.diy}
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-semibold text-[#1E3A5F] bg-[#EEF4FB]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                    {row.us}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
