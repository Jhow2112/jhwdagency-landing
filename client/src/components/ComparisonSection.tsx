/* ComparisonSection — Contemporary Studio, Warm Geometric
   How We Compare table from the PDF */
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
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0F0E0D]" style={{ fontFamily: "Syne, sans-serif" }}>
            The smarter choice for local businesses.
          </h2>
        </div>

        <div
          className="overflow-x-auto rounded-2xl border border-[#E8E0D5] shadow-sm"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <table className="w-full min-w-[540px]">
            <thead>
              <tr className="bg-[#FAF7F4]">
                <th className="text-left px-6 py-4 text-xs font-bold text-[#8A7A72] tracking-widest uppercase" style={{ fontFamily: "Syne, sans-serif" }}>
                  &nbsp;
                </th>
                <th className="px-6 py-4 text-center text-xs font-bold text-[#8A7A72] tracking-widest uppercase" style={{ fontFamily: "Syne, sans-serif" }}>
                  Agency
                </th>
                <th className="px-6 py-4 text-center text-xs font-bold text-[#8A7A72] tracking-widest uppercase" style={{ fontFamily: "Syne, sans-serif" }}>
                  DIY Builder
                </th>
                <th className="px-6 py-4 text-center" style={{ fontFamily: "Syne, sans-serif" }}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#C96442] to-[#E8A882] text-white text-xs font-bold">
                    ✦ Our Service
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-t border-[#E8E0D5] ${i % 2 === 0 ? "bg-white" : "bg-[#FAF7F4]/50"}`}
                >
                  <td className="px-6 py-4 text-sm font-semibold text-[#0F0E0D]" style={{ fontFamily: "Syne, sans-serif" }}>
                    {row.label}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-[#8A7A72]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                    {row.agency}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-[#8A7A72]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                    {row.diy}
                  </td>
                  <td className="px-6 py-4 text-center text-sm font-semibold text-[#C96442] bg-[#FDF5F1]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
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
