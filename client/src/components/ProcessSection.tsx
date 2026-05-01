/* ProcessSection — Contemporary Studio, Cool Blue */
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "1",
    title: "Quick Intake",
    description: "A 15–30 minute call or questionnaire about your business, goals, and style preferences.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    number: "2",
    title: "We Design & Build",
    description: "Your site is designed, written, and built for you. No technical knowledge needed on your end.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    number: "3",
    title: "You Review",
    description: "Preview your site and request changes. Revisions included: 1 round on Minimum, 2 on Plus, and 3 on Premium.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    number: "4",
    title: "Go Live",
    description: "Domain connected, hosting configured, and you're online. We stay on for ongoing support.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
];

export default function ProcessSection() {
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
    <section className="py-14 sm:py-20 md:py-24 bg-[#f3efe6]" ref={ref}>
      <div className="container">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="section-label">How It Works</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>
            From idea to live in{" "}
            <span style={{ color: "#9a4528" }}>4 simple steps</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-[rgba(31,42,34,0.14)] z-0" />

          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center gap-4 z-10"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
              }}
            >
              {/* Icon circle */}
              <div className="w-20 h-20 rounded-2xl bg-white border border-[#d6d2c5] shadow-md flex items-center justify-center text-[#9a4528] relative">
                {step.icon}
                <div className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-[#9a4528] flex items-center justify-center shadow-sm">
                  <span className="text-white text-xs font-bold" style={{ fontFamily: "Inter, sans-serif" }}>{step.number}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>
                {step.title}
              </h3>
              <p className="text-sm text-[#2f3b32] leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
