/* BlogListPage — Aralo Studio
   /blog index — lists all posts newest-first.
   Card layout: header image, category tag + date eyebrow, title, excerpt, "Read more". */

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { POSTS_BY_DATE, getExcerpt, formatPostDate } from "@/data/blogPosts";

const SITE_ORIGIN = "https://aralostudio.com";

export default function BlogListPage() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo(0, 0);
    document.title = "Blog | Aralo Studio";
  }, []);

  return (
    <div className="min-h-screen bg-[#f3efe6]">
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", url: `${SITE_ORIGIN}/` },
          { name: "Blog", url: `${SITE_ORIGIN}/blog/` },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1f2a22] pt-32 pb-14 sm:pt-40 sm:pb-16">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="section-label" style={{ color: "#d97a55" }}>
            Aralo Studio · Blog
          </span>
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] mt-4"
          >
            Notes on web design,{" "}
            <span style={{ color: "#d97a55" }}>local search, and getting found.</span>
          </h1>
          <p
            className="mt-5 text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Plain-language writing for small business owners trying to make
            sense of a website that does its job.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-14 sm:py-20">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {POSTS_BY_DATE.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white border border-[#d6d2c5] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[1200/630] overflow-hidden bg-[#e7e2d6]">
                  <img
                    src={post.headerImage}
                    alt={post.headerImageAlt ?? post.title}
                    width="1200"
                    height="630"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6 sm:p-7">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#9a4528]">
                      {post.category}
                    </span>
                    <span
                      className="text-xs text-[#6b6660] tracking-widest uppercase"
                      style={{ fontFamily: "JetBrains Mono, monospace" }}
                    >
                      {formatPostDate(post.date)}
                    </span>
                  </div>
                  <h2
                    className="text-xl sm:text-2xl font-extrabold text-[#1f2a22] leading-tight group-hover:text-[#9a4528] transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="text-sm text-[#2f3b32] leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {getExcerpt(post)}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9a4528] mt-1 group-hover:gap-3 transition-all duration-200"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Read more
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
