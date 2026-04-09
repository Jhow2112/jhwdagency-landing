/* HeroSection — Jeremy Howard Web Design
   Full-bleed background image hero, text overlaid on dark gradient
   Style reference: Silver Valley Painting — bold headline, left-aligned, dark overlay */

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/hero-fullbleed-BhXgiyH2FfTzqVDBwK9NU8.webp";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />

      {/* Dark overlay — heavier on left for text legibility, lighter on right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.72) 50%, rgba(10,22,40,0.35) 100%)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-44 pb-20 md:pt-52 md:pb-28">
        <div className="max-w-2xl flex flex-col gap-6">
          {/* Label */}
          <div className="fade-up fade-up-delay-1">
            <span
              className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#7BB8E8] border border-[#4A90D9]/40 rounded-full px-4 py-1.5"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Jeremy Howard Web Design · Meridian, ID
            </span>
          </div>

          {/* Headline */}
          <h1
            className="fade-up fade-up-delay-2 text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Websites that{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7BB8E8, #4A90D9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              actually
            </span>
            <br />
            work.
          </h1>

          {/* Subtext */}
          <p
            className="fade-up fade-up-delay-3 text-lg md:text-xl text-white/75 leading-relaxed max-w-lg"
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            Designed, built, hosted, and maintained — so you can focus on running your business. Live in as little as{" "}
            <strong className="text-white">5 days</strong>, starting at{" "}
            <strong className="text-white">$495</strong>.
          </p>

          {/* CTAs */}
          <div className="fade-up fade-up-delay-4 flex flex-wrap gap-4 items-center">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-7 py-4 text-base font-bold text-white rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #1E3A5F, #4A90D9)",
                fontFamily: "Syne, sans-serif",
                boxShadow: "0 4px 24px rgba(74,144,217,0.35)",
              }}
            >
              Choose a Plan
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-7 py-4 text-base font-bold text-white rounded-xl border border-white/30 hover:bg-white/10 transition-all duration-200"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              See Our Work
            </a>
          </div>

          {/* Trust strip — honest claims only */}
          <div className="fade-up fade-up-delay-4 flex flex-wrap items-center gap-6 pt-2">
            {[
              "Live in as little as 5 days",
              "No long-term contracts",
              "Hosting & support included",
            ].map((claim, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M5 8l2 2 4-4" stroke="#4A90D9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span
                  className="text-sm text-white/70"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
                >
                  {claim}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-white/60 tracking-widest uppercase" style={{ fontFamily: "Syne, sans-serif" }}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}
