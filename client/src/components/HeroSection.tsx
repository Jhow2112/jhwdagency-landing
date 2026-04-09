/* HeroSection — Contemporary Studio, Cool Blue
   Split layout: left bold headline + CTA, right floating abstract image
   Fade-up entrance animations, navy-to-sky gradient accents */

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F4F7FA] pt-20">
      {/* Subtle radial gradient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 75% 45%, oklch(0.80 0.055 230 / 0.25) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, oklch(0.52 0.14 240 / 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center py-16 lg:py-24">
        {/* Left: Text */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="fade-up fade-up-delay-1">
            <span className="section-label">Jeremy Howard Web Design</span>
          </div>

          <h1
            className="fade-up fade-up-delay-2 text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0D1B2A] leading-[1.05] tracking-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Websites that{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #1E3A5F, #4A90D9)",
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
            className="fade-up fade-up-delay-3 text-lg md:text-xl text-[#3D5A7A] leading-relaxed max-w-md"
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            Designed, built, hosted, and maintained — so you can focus on
            running your business. Live in as little as{" "}
            <strong className="text-[#0D1B2A]">5 days</strong>, starting at{" "}
            <strong className="text-[#1E3A5F]">$495</strong>.
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

          {/* Trust strip — only real claims */}
          <div className="fade-up fade-up-delay-4 flex flex-wrap items-center gap-5 pt-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#EEF4FB] flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M5 8l2 2 4-4" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className="text-sm text-[#3D5A7A]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>Live in as little as <strong className="text-[#0D1B2A]">5 days</strong></span>
            </div>
            <div className="w-px h-6 bg-[#C8DCF0] hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#EEF4FB] flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M5 8l2 2 4-4" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className="text-sm text-[#3D5A7A]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>No long-term contracts</span>
            </div>
            <div className="w-px h-6 bg-[#C8DCF0] hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#EEF4FB] flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M5 8l2 2 4-4" stroke="#4A90D9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span className="text-sm text-[#3D5A7A]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>Hosting &amp; support included</span>
            </div>
          </div>
        </div>

        {/* Right: Abstract hero image */}
        <div className="relative flex items-center justify-center lg:justify-end fade-up fade-up-delay-2">
          {/* Glow behind image */}
          <div
            className="absolute -top-6 -left-6 w-32 h-32 rounded-3xl opacity-50"
            style={{
              background: "linear-gradient(135deg, #1E3A5F 0%, #4A90D9 100%)",
              filter: "blur(48px)",
            }}
          />
          <div className="relative glass-card overflow-hidden w-full max-w-lg lg:max-w-full aspect-[4/3] shadow-2xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/hero-abstract-blue-PRqk8G7XcZsrFedaNHmhRw.webp"
              alt="Abstract blue design composition"
              className="w-full h-full object-cover"
            />
            {/* Floating stat card */}
            <div className="absolute bottom-4 left-4 glass-card px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#4A90D9] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2v12M2 8h12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0D1B2A]" style={{ fontFamily: "Syne, sans-serif" }}>New site live!</p>
                  <p className="text-xs text-[#6B8BAA]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>Launched in 6 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-[#6B8BAA] tracking-widest uppercase" style={{ fontFamily: "Syne, sans-serif" }}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#4A90D9] to-transparent" />
      </div>
    </section>
  );
}
