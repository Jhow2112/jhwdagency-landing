/* WorkSection — Aralo Studio
   Real case study: Crisis to Comfort (crisis2comfort.com)
   Mobile-first: single column, no emoji, clean SVG icons only */
import { useEffect, useRef, useState } from "react";

const ExternalLinkIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="inline-block flex-shrink-0">
    <path d="M5 2H2.5A1.5 1.5 0 001 3.5v6A1.5 1.5 0 002.5 11h6A1.5 1.5 0 0010 9.5V7M7 1h4m0 0v4M11 1L5.5 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
    <circle cx="8" cy="8" r="7.5" stroke="#b85433" strokeOpacity="0.5"/>
    <path d="M5 8l2 2 4-4" stroke="#b85433" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 16 16" fill="#b85433">
    <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.5l-3.71 1.95.71-4.13L2 5.5l4.15-.75L8 1z"/>
  </svg>
);

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
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f2a22]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Real results for real businesses.
          </h2>
        </div>

        {/* Case study card */}
        <a
          href="https://crisis2comfort.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#1f2a22] shadow-2xl hover:shadow-[0_24px_64px_rgba(74,144,217,0.2)] transition-shadow duration-300"
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
              alt="Crisis to Comfort counseling website designed by Aralo Studio"
              className="w-full h-full object-cover object-top opacity-20"
            />
            <div className="absolute inset-0 bg-[#1f2a22]/85" />
          </div>

          {/* Visit site banner — no emoji */}
          <div className="relative z-10 flex items-center justify-center gap-2 py-3 bg-[#b85433]/20 border-b border-[#b85433]/30 group-hover:bg-[#b85433]/30 transition-colors">
            <ExternalLinkIcon />
            <span className="text-xs font-bold text-[#f3efe6] tracking-wide" style={{ fontFamily: "Inter, sans-serif" }}>
              Click to visit crisis2comfort.com
            </span>
            <ExternalLinkIcon />
          </div>

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-10 md:p-12 lg:p-14">

            {/* Left: text */}
            <div className="flex flex-col gap-5 sm:gap-6 min-w-0 overflow-hidden">
              {/* Tags — no emoji, clean text only */}
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="text-xs px-3 py-1 rounded-full bg-[#b85433]/20 text-[#f3efe6] font-semibold border border-[#b85433]/30"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Counseling Practice
                </span>
                <span
                  className="text-xs px-3 py-1 rounded-full bg-[#b85433]/20 text-[#f3efe6] font-semibold border border-[#b85433]/30"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Service Business
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-white/10 text-white/60 font-semibold border border-white/20"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  crisis2comfort.com
                  <ExternalLinkIcon />
                </span>
              </div>

              <div>
                <p className="text-sm text-[#f3efe6] font-semibold mb-2" style={{ fontFamily: "Inter, sans-serif" }}>
                  Crisis to Comfort · Coeur d'Alene, ID
                </p>
                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white leading-tight"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  A counselor needed a site that matched her mission.
                </h3>
              </div>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                Ann McGaver, M.A., BCMHC, runs a Christian counseling and coaching practice serving individuals, couples, and families in Coeur d'Alene and across the Inland Northwest via telehealth. She needed a warm, professional web presence that communicated trust, reflected her faith-based approach, and made it easy for people in crisis to take the first step.
              </p>

              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold text-white/80" style={{ fontFamily: "Inter, sans-serif" }}>What we delivered:</p>
                <ul className="flex flex-col gap-2">
                  {[
                    "Full 5-page site: Home, About, Services, FAQs, Contact",
                    "Professional copywriting aligned with her voice and values",
                    "Telehealth booking integration and free consultation CTA",
                    "Google Business optimization for local Coeur d'Alene search",
                    "Mobile-first design with warm, calming visual identity",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span className="text-sm text-white/65" style={{ fontFamily: "Inter, sans-serif" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA — intercepts click so it goes to #contact, not the external site */}
              <div
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); window.location.hash = "#contact"; }}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full self-start cursor-pointer transition-all duration-200 hover:opacity-90"
                style={{
                  background: "#b85433",
                  fontFamily: "Inter, sans-serif",
                }}
                role="link"
                tabIndex={0}
              >
                Start Your Project
                <ArrowIcon />
              </div>
            </div>

            {/* Right: preview + quote */}
            <div className="flex flex-col gap-4 lg:items-end">
              {/* Browser mockup */}
              <div className="w-full lg:max-w-sm rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                <div className="bg-[#1f2a22] px-3 py-2 flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  <span className="ml-2 text-xs text-white/40 font-mono truncate">crisis2comfort.com</span>
                </div>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/crisis2comfort-hero_96f700ed.webp"
                  alt="Crisis to Comfort counseling website designed by Aralo Studio"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "180px" }}
                />
              </div>

              {/* Quote card */}
              <div className="w-full lg:max-w-sm p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/6 border border-white/12">
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                </div>
                <p className="text-sm text-white/70 leading-relaxed italic" style={{ fontFamily: "Inter, sans-serif" }}>
                  "Jeremy built me a beautiful website that truly reflects my practice. He handled everything: the design, the writing, even setting up my Google listing. I had zero technical knowledge and he made the whole process easy and stress-free."
                </p>
                <p className="text-xs text-white/40 mt-3 font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>
                  Ann McGaver, LPC · Crisis to Comfort Counseling
                </p>
              </div>
            </div>
          </div>
        </a>

        {/* More work teaser */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-sm text-[#8a857a]" style={{ fontFamily: "Inter, sans-serif" }}>
            More case studies available on request.{" "}
            <a href="#contact" className="text-[#b85433] font-semibold hover:underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
