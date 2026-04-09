/* WorkSection — Jeremy Howard Web Design
   Real case study: Crisis to Comfort (crisis2comfort.com)
   Mobile-first: single column, no min-h, no overflow clipping */
import { useEffect, useRef, useState } from "react";

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

  return (
    <section id="work" className="py-16 sm:py-24 bg-white" ref={ref} aria-labelledby="work-heading">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-8 sm:mb-12">
          <span className="section-label">Featured Work</span>
          <h2
            id="work-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D1B2A]"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Real results for real businesses.
          </h2>
        </div>

        {/* Case study card — full card is a link */}
        <a
          href="https://crisis2comfort.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0D1B2A] shadow-2xl hover:shadow-[0_24px_64px_rgba(74,144,217,0.25)] transition-shadow duration-300"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/crisis2comfort-hero_96f700ed.webp"
              alt="Screenshot of Crisis to Comfort counseling website built by Jeremy Howard Web Design"
              className="w-full h-full object-cover object-top opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A]/95 via-[#0D1B2A]/85 to-[#0D1B2A]/95 lg:bg-gradient-to-r lg:from-[#0D1B2A]/97 lg:via-[#0D1B2A]/70 lg:to-transparent" />
          </div>

          {/* Visit site banner */}
          <div className="relative z-10 flex items-center justify-center gap-2 py-2.5 sm:py-3 bg-[#4A90D9]/20 border-b border-[#4A90D9]/30 group-hover:bg-[#4A90D9]/30 transition-colors">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M6 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1v-3M10 2h4m0 0v4m0-4L7 9" stroke="#B8D4F0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs font-bold text-[#B8D4F0] tracking-wide" style={{ fontFamily: "Syne, sans-serif" }}>
              Click to visit crisis2comfort.com ↗
            </span>
          </div>

          {/* Content — single col on mobile, 2-col on lg+ */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-10 md:p-12 lg:p-14">

            {/* Left: text content */}
            <div className="flex flex-col gap-5 sm:gap-6">
              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span
                  className="text-xs px-3 py-1 rounded-full bg-[#4A90D9]/20 text-[#B8D4F0] font-semibold border border-[#4A90D9]/30"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Counseling Practice · Service Business
                </span>
                <span
                  className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/60 font-semibold border border-white/20"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  crisis2comfort.com ↗
                </span>
              </div>

              <div>
                <p className="text-sm text-[#B8D4F0] font-semibold mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                  Crisis to Comfort — Coeur d'Alene, ID
                </p>
                <h3
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  A compassionate counselor needed a site that matched her mission.
                </h3>
              </div>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                Ann McGaver, M.A., BCMHC, runs a Christian counseling and coaching practice serving individuals, couples, and families in Coeur d'Alene and across the Inland Northwest via telehealth. She needed a warm, professional web presence that communicated trust, reflected her faith-based approach, and made it easy for people in crisis to take the first step — without her having to write a single word or touch a line of code.
              </p>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-white/80" style={{ fontFamily: "Syne, sans-serif" }}>What we delivered:</p>
                <ul className="flex flex-col gap-1.5">
                  {[
                    "Full 5-page site — Home, About, Services, FAQs, Contact",
                    "Professional copywriting aligned with her voice and values",
                    "Telehealth booking integration and free consultation CTA",
                    "Google Business optimization for local Coeur d'Alene search",
                    "Mobile-first design with warm, calming visual identity",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                        <circle cx="8" cy="8" r="7.5" stroke="#4A90D9" strokeOpacity="0.5"/>
                        <path d="M5 8l2 2 4-4" stroke="#4A90D9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-sm text-white/65" style={{ fontFamily: "Nunito Sans, sans-serif" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA — stops the click from bubbling to the outer link */}
              <div
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.hash = "#contact"; }}
                className="btn-terra inline-flex items-center gap-2 px-6 py-3 text-sm self-start cursor-pointer rounded-full"
                role="link"
              >
                Start Your Project
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Right: site preview + quote — shown below text on mobile */}
            <div className="flex flex-col gap-4 lg:items-end">
              {/* Browser mockup */}
              <div className="w-full lg:max-w-sm rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <div className="bg-[#1a2a3a] px-3 py-2 flex items-center gap-1.5">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/20" />
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/20" />
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/20" />
                  <span className="ml-2 text-xs text-white/40 font-mono truncate">crisis2comfort.com</span>
                </div>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/crisis2comfort-hero_96f700ed.webp"
                  alt="Crisis to Comfort counseling website homepage"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "180px" }}
                />
              </div>

              {/* Quote card */}
              <div className="w-full lg:max-w-sm p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/6 border border-white/12">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} width="12" height="12" viewBox="0 0 16 16" fill="#4A90D9">
                      <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.5l-3.71 1.95.71-4.13L2 5.5l4.15-.75L8 1z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-white/70 leading-relaxed italic" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                  "Jeremy built me a beautiful website that truly reflects my practice. He handled everything — the design, the writing, even setting up my Google listing. I had zero technical knowledge and he made the whole process easy and stress-free."
                </p>
                <p className="text-xs text-white/40 mt-3 font-semibold" style={{ fontFamily: "Syne, sans-serif" }}>
                  — Ann McGaver, LPC · Crisis to Comfort Counseling
                </p>
              </div>
            </div>
          </div>
        </a>

        {/* More work teaser */}
        <div className="mt-6 sm:mt-8 text-center">
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
