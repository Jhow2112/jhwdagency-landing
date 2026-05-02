/* WorkSection — Aralo Studio
   Homepage portfolio section. Three featured project cards driven by
   PORTFOLIO_PROJECTS. Each card links to its case study; "See full
   portfolio" link sends visitors to /portfolio/. Keeps id="work" so
   existing in-page anchors continue to scroll here. */

import { PORTFOLIO_PROJECTS } from "@/data/portfolioProjects";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function WorkSection() {
  const featured = PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <section
      id="work"
      className="py-14 sm:py-20 md:py-24 bg-white"
      aria-labelledby="work-heading"
    >
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-12">
            <div className="flex flex-col gap-3 max-w-xl">
              <span className="section-label">Featured Work</span>
              <h2
                id="work-heading"
                className="text-4xl md:text-5xl font-extrabold text-[#1f2a22] leading-tight"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Real websites for{" "}
                <span style={{ color: "#9a4528" }}>real businesses</span>.
              </h2>
            </div>
            <a
              href="/portfolio/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9a4528] hover:gap-3 transition-all duration-200 self-start md:self-end"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              See full portfolio
              <ArrowIcon />
            </a>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featured.map((p) => (
              <article
                key={p.slug}
                className="flex flex-col rounded-2xl overflow-hidden bg-white border border-[#d6d2c5] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <a
                  href={`/portfolio/${p.slug}/`}
                  className="block aspect-[1920/950] overflow-hidden bg-[#e7e2d6] group"
                  aria-label={`View ${p.name} case study`}
                >
                  <img
                    src={p.heroImage}
                    alt={p.heroImageAlt ?? `${p.name} website screenshot`}
                    width="1920"
                    height="950"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </a>
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <span className="inline-block self-start text-xs font-bold tracking-widest uppercase text-[#9a4528]">
                    {p.industry}
                  </span>
                  <h3
                    className="text-lg sm:text-xl font-extrabold text-[#1f2a22] leading-snug"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <a
                      href={`/portfolio/${p.slug}/`}
                      className="hover:text-[#9a4528] transition-colors"
                    >
                      {p.name}
                    </a>
                  </h3>
                  <p
                    className="text-sm text-[#2f3b32] leading-relaxed flex-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {p.shortDescription}
                  </p>
                  <a
                    href={`/portfolio/${p.slug}/`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9a4528] mt-1 group-hover:gap-3 transition-all duration-200"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    View Case Study
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
