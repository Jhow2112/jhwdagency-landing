/* AboutSection — Aralo Studio
   Personal "Who's Building Your Website" intro: photo, first-person bio,
   and direct contact. Rendered on the standalone /about page (AboutPage). */
import { useEffect, useRef, useState } from "react";

const PHONE = "(208) 615-2884";
const PHONE_HREF = "tel:+12086152884";
const EMAIL = "info@aralostudio.com";

export default function AboutSection() {
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
    <section id="about" className="py-14 sm:py-20 md:py-24 bg-[#f3efe6]" aria-labelledby="about-heading">
      <div className="container">
        <div
          ref={ref}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 md:gap-12 items-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Photo */}
          <div className="w-full aspect-square md:w-[260px] md:h-[260px] rounded-2xl overflow-hidden border border-[#d6d2c5] shadow-sm mx-auto">
            <img
              src="/jeremy.jpg"
              alt="Jeremy, web designer based in Meridian, Idaho"
              width="800"
              height="800"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Bio */}
          <div className="flex flex-col gap-5">
            <span className="section-label">About Jeremy</span>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f2a22] leading-tight"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Who's building your website?
            </h2>
            <p
              className="text-base text-[#2f3b32] leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              I'm Jeremy, a web designer based in Meridian, Idaho. I build websites for small businesses that need to look professional online without paying agency prices or dealing with DIY headaches. Every site is handled by me personally, from the first sketch to ongoing updates. When you call, you get me — not a sales rep, not a project manager, not a ticket system. Whether you're down the street in Meridian or across the country, you work with me directly, and I take on clients anywhere in the U.S.
            </p>

            {/* Direct contact */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 pt-1">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#9a4528] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 2h3l1.5 3.5-1.75 1.25c.8 1.6 2 2.8 3.5 3.5L10.5 8.5 14 10v3a1 1 0 01-1 1C6.27 14 2 9.73 2 4a1 1 0 011-2z"/>
                  </svg>
                </div>
                <span
                  className="text-sm font-semibold text-[#1f2a22] group-hover:text-[#9a4528] transition-colors"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {PHONE}
                </span>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#9a4528] flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 4h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1V4z"/>
                    <path d="M2 4l6 5 6-5"/>
                  </svg>
                </div>
                <span
                  className="text-sm font-semibold text-[#1f2a22] group-hover:text-[#9a4528] transition-colors break-all"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {EMAIL}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
