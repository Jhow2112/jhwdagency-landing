/* AboutPage — Aralo Studio
   Standalone /about page. A dark intro header gives the transparent navbar
   contrast and carries the page H1 (Idaho roots + nationwide reach),
   followed by the personal bio section (photo, first-person intro, and
   direct contact details) reused from AboutSection. */

import AboutSection from "@/components/AboutSection";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const SITE_ORIGIN = "https://aralostudio.com";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f3efe6]">
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", url: `${SITE_ORIGIN}/` },
          { name: "About", url: `${SITE_ORIGIN}/about/` },
        ]}
      />

      <main id="main-content">
        {/* Intro header — dark band so the transparent navbar stays legible */}
        <header className="bg-[#1f2a22] pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center flex flex-col gap-5">
              <span className="section-label" style={{ color: "#d97a55" }}>
                About
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#f3efe6] leading-[1.05]">
                Built in Idaho.{" "}
                <em
                  className="not-italic"
                  style={{ color: "#d97a55", fontStyle: "normal" }}
                >
                  Working everywhere.
                </em>
              </h1>
              <p
                className="text-base sm:text-lg text-[rgba(243,239,230,0.75)] leading-relaxed max-w-xl mx-auto"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Aralo Studio builds websites for small businesses across Idaho
                and all over the U.S. Wherever you are, the work
                is the same: designed, built, hosted, and supported by hand.
              </p>
            </div>
          </div>
        </header>

        <AboutSection />

        {/* CTA — mirrors the blog/case-study templates, links to contact form */}
        <section className="py-14 sm:py-20 bg-[#1f2a22]">
          <div className="container max-w-2xl mx-auto text-center">
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Ready to talk about your website?
            </h2>
            <p
              className="text-base text-white/60 mb-8 max-w-md mx-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Tell us about your business, and we'll get back to you within one business day.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#9a4528] text-white text-sm font-bold hover:bg-[#d97a55] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </section>
      </main>

    </div>
  );
}
