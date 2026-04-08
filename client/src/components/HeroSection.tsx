/* HeroSection — Contemporary Studio, Warm Geometric
   Split layout: left bold headline + CTA, right floating abstract image
   Fade-up entrance animations, terracotta gradient accents */

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAF7F4] pt-20">
      {/* Subtle radial gradient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 75% 45%, oklch(0.74 0.09 42 / 0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, oklch(0.52 0.13 38 / 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-16 lg:py-24">
        {/* Left: Text */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="fade-up fade-up-delay-1">
            <span className="section-label">Web Design Agency</span>
          </div>

          <h1
            className="fade-up fade-up-delay-2 text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0F0E0D] leading-[1.05] tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Websites that{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #C96442, #E8A882)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              actually
            </span>{" "}
            work.
          </h1>

          <p
            className="fade-up fade-up-delay-3 text-lg md:text-xl text-[#6B5C52] leading-relaxed max-w-md"
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            Designed, built, hosted, and maintained — so you can focus on
            running your business. Live in as little as{" "}
            <strong className="text-[#0F0E0D]">5 days</strong>, starting at{" "}
            <strong className="text-[#C96442]">$395</strong>.
          </p>

          <div className="fade-up fade-up-delay-4 flex flex-wrap gap-4 items-center">
            <a
              href="#pricing"
              className="btn-terra inline-flex items-center gap-2 px-7 py-3.5 text-base"
            >
              Choose a Plan
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#work"
              className="btn-ghost-pill inline-flex items-center gap-2 px-7 py-3.5 text-base"
            >
              See Our Work
            </a>
          </div>

          {/* Social proof strip */}
          <div className="fade-up fade-up-delay-4 flex items-center gap-6 pt-2">
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-[#0F0E0D]" style={{ fontFamily: "Syne, sans-serif" }}>50+</span>
              <span className="text-xs text-[#8A7A72]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>Sites Launched</span>
            </div>
            <div className="w-px h-10 bg-[#E8E0D5]" />
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-[#0F0E0D]" style={{ fontFamily: "Syne, sans-serif" }}>5 days</span>
              <span className="text-xs text-[#8A7A72]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>Avg. Turnaround</span>
            </div>
            <div className="w-px h-10 bg-[#E8E0D5]" />
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-[#0F0E0D]" style={{ fontFamily: "Syne, sans-serif" }}>100%</span>
              <span className="text-xs text-[#8A7A72]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Right: Abstract hero image */}
        <div className="relative flex items-center justify-center lg:justify-end fade-up fade-up-delay-2">
          {/* Floating card behind image */}
          <div
            className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl opacity-60"
            style={{
              background: "linear-gradient(135deg, #C96442 0%, #E8A882 100%)",
              filter: "blur(40px)",
            }}
          />
          <div className="relative glass-card overflow-hidden w-full max-w-lg lg:max-w-full aspect-[4/3] shadow-2xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/hero-abstract-Eyt8iHdTYZSf3jfFqmc3Wc.webp"
              alt="Abstract design composition"
              className="w-full h-full object-cover"
            />
            {/* Floating stat card */}
            <div className="absolute bottom-4 left-4 glass-card px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C96442] to-[#E8A882] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2v12M2 8h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0F0E0D]" style={{ fontFamily: "Syne, sans-serif" }}>New site live!</p>
                  <p className="text-xs text-[#8A7A72]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>Launched in 6 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-[#8A7A72] tracking-widest uppercase" style={{ fontFamily: "Syne, sans-serif" }}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#C96442] to-transparent" />
      </div>
    </section>
  );
}
