/* IndustriesSection — Aralo Studio
   Homepage section between Services and Process. Compact grid of all
   industries (icon + name) linking to each dedicated page, plus a
   "Don't see your industry?" CTA below. */

import IndustryIcon from "@/components/IndustryIcon";
import { INDUSTRIES } from "@/data/landingPages";

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="py-14 sm:py-20 md:py-24 bg-white"
      aria-labelledby="industries-heading"
    >
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
            <div className="flex flex-col gap-3 max-w-xl">
              <span className="section-label">Industries We Serve</span>
              <h2
                id="industries-heading"
                className="text-4xl md:text-5xl font-extrabold text-[#1f2a22] leading-tight"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Built for{" "}
                <span style={{ color: "#9a4528" }}>local businesses</span>{" "}
                like yours.
              </h2>
            </div>
            <a
              href="/industries/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9a4528] hover:gap-3 transition-all duration-200 self-start md:self-end"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              See all industries
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {INDUSTRIES.map((ind) => (
              <a
                key={ind.slug}
                href={`${ind.slug}/`}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#f3efe6] border border-[#d6d2c5] hover:bg-white hover:border-[#9a4528]/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-[#9a4528] group-hover:bg-[#9a4528] group-hover:text-white transition-colors duration-200">
                  <IndustryIcon slug={ind.slug} size={22} />
                </div>
                <span
                  className="text-sm font-semibold text-[#1f2a22] group-hover:text-[#9a4528] transition-colors leading-snug"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {ind.label}
                </span>
              </a>
            ))}
          </div>

          {/* Don't see yours */}
          <p
            className="mt-10 text-center text-sm text-[#6b6660]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Don't see your industry? We build websites for any business.{" "}
            <a
              href="/#contact"
              className="font-semibold text-[#9a4528] hover:underline"
            >
              Get in touch.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
