/* PortfolioHub — Aralo Studio
   /portfolio/ — filterable grid of every case study. Filter buttons are
   derived from the data (one per filterCategory + "All") so adding a new
   project with a new category auto-extends the filter row. */

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import {
  PORTFOLIO_PROJECTS,
  getFilterCategories,
} from "@/data/portfolioProjects";

const SITE_ORIGIN = "https://aralostudio.com";
const ALL = "All";

export default function PortfolioHub() {
  const [activeFilter, setActiveFilter] = useState<string>(ALL);
  const filters = [ALL, ...getFilterCategories()];
  const visible =
    activeFilter === ALL
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.filterCategory === activeFilter);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo(0, 0);
    document.title = "Web Design Portfolio | Aralo Studio | Meridian, Idaho";
  }, []);

  return (
    <div className="min-h-screen bg-[#f3efe6]">
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", url: `${SITE_ORIGIN}/` },
          { name: "Portfolio", url: `${SITE_ORIGIN}/portfolio/` },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1f2a22] pt-32 pb-14 sm:pt-40 sm:pb-16">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="section-label" style={{ color: "#d97a55" }}>
            Aralo Studio · Portfolio
          </span>
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] mt-4"
          >
            Our work.
          </h1>
          <p
            className="mt-5 text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Real websites built for real businesses. Each project is
            designed, built, and hosted by Aralo Studio.
          </p>
        </div>
      </section>

      {/* Filter row */}
      <section className="pt-10 sm:pt-14">
        <div className="container max-w-6xl mx-auto">
          <div
            className="flex flex-wrap gap-2 sm:gap-3 justify-center"
            role="group"
            aria-label="Filter portfolio by category"
          >
            {filters.map((f) => {
              const active = f === activeFilter;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActiveFilter(f)}
                  aria-pressed={active}
                  className={`text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 ${
                    active
                      ? "bg-[#1f2a22] text-white"
                      : "bg-white text-[#1f2a22] border border-[#d6d2c5] hover:border-[#9a4528]/60 hover:text-[#9a4528]"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project grid */}
      <section className="py-10 sm:py-14 md:py-20">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {visible.map((p) => (
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
                <div className="flex flex-col gap-3 p-6 sm:p-7 flex-1">
                  <span className="inline-block self-start text-xs font-bold tracking-widest uppercase text-[#9a4528]">
                    {p.industry}
                  </span>
                  <h2
                    className="text-xl sm:text-2xl font-extrabold text-[#1f2a22] leading-tight"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <a
                      href={`/portfolio/${p.slug}/`}
                      className="hover:text-[#9a4528] transition-colors"
                    >
                      {p.name}
                    </a>
                  </h2>
                  <p
                    className="text-sm text-[#2f3b32] leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {p.shortDescription}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-2">
                    <a
                      href={`/portfolio/${p.slug}/`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9a4528] hover:gap-3 transition-all duration-200"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      View Case Study
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1f2a22] hover:text-[#9a4528] transition-colors"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      View Live Site
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M5 2H2.5A1.5 1.5 0 001 3.5v6A1.5 1.5 0 002.5 11h6A1.5 1.5 0 0010 9.5V7M7 1h4m0 0v4M11 1L5.5 6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {visible.length === 0 && (
            <p
              className="text-center text-[#6b6660] py-12"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              No projects in that category yet.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
