/* HeroSection — Aralo Studio
   Full-bleed hero photo with solid forest scrim (no gradients).
   Display heading uses Fraunces 300 + tight tracking. */

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/hero-fullbleed-BhXgiyH2FfTzqVDBwK9NU8.webp";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />

      {/* Solid forest scrim (no gradients) */}
      <div className="absolute inset-0 bg-[#1f2a22]/85" />

      {/* Content — pt accounts for fixed navbar height */}
      <div className="container relative z-10 pt-28 pb-16 sm:pt-36 sm:pb-20 md:pt-44 md:pb-24 lg:pt-48 lg:pb-28">
        <div className="max-w-2xl flex flex-col gap-6 md:gap-7">

          {/* Eyebrow */}
          <div className="fade-up fade-up-delay-1">
            <span
              className="section-label"
              style={{ color: "#d97a55" }}
            >
              Aralo Studio · Meridian, Idaho
            </span>
          </div>

          {/* Display headline — Fraunces */}
          <h1
            className="fade-up fade-up-delay-2 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#f3efe6] leading-[1.02]"
          >
            Websites that{" "}
            <em className="not-italic" style={{ color: "#d97a55", fontStyle: "normal" }}>
              actually
            </em>
            <br />
            work.
          </h1>

          {/* Subtext */}
          <p
            className="fade-up fade-up-delay-3 text-base sm:text-lg text-[rgba(243,239,230,0.75)] leading-relaxed max-w-lg"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Designed, built, hosted, and maintained so you can focus on running your business. Live in as little as{" "}
            <strong className="text-[#f3efe6] font-semibold">5 days</strong>, starting at{" "}
            <strong className="text-[#f3efe6] font-semibold">$495</strong>.
          </p>

          {/* CTAs */}
          <div className="fade-up fade-up-delay-4 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#b85433] text-[#f3efe6] hover:bg-[#d97a55] transition-colors"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                letterSpacing: "0.02em",
                padding: "13px 22px",
              }}
            >
              Choose a Plan
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(243,239,230,0.32)] text-[#f3efe6] hover:border-[#f3efe6] transition-colors"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "13px",
                letterSpacing: "0.02em",
                padding: "13px 22px",
              }}
            >
              See Our Work
            </a>
          </div>

          {/* Trust strip */}
          <div className="fade-up fade-up-delay-4 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2.5 sm:gap-6 pt-1">
            {[
              "Live in as little as 5 days",
              "No long-term contracts",
              "Hosting & support included",
            ].map((claim, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M5 8l2 2 4-4" stroke="#b85433" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span
                  className="text-sm text-[rgba(243,239,230,0.7)]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {claim}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator — solid faint line */}
      <div className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-[rgba(243,239,230,0.6)] tracking-widest uppercase" style={{ fontFamily: "JetBrains Mono, monospace" }}>Scroll</span>
        <div className="w-px h-8 bg-[rgba(243,239,230,0.4)]" />
      </div>
    </section>
  );
}
