/* BlogTeaserSection — Aralo Studio
   Homepage section above ReferralCallout. Two most recent posts as compact
   cards with header image, category eyebrow, title, and a "Read more" link.
   Pulls from POSTS_BY_DATE so it auto-updates as new posts are added. */

import { POSTS_BY_DATE, formatPostDate } from "@/data/blogPosts";

export default function BlogTeaserSection() {
  const recent = POSTS_BY_DATE.slice(0, 2);
  if (recent.length === 0) return null;

  return (
    <section
      className="py-14 sm:py-20 md:py-24 bg-white"
      aria-labelledby="blog-teaser-heading"
    >
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
            <div className="flex flex-col gap-3">
              <span className="section-label">From the Blog</span>
              <h2
                id="blog-teaser-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f2a22] leading-tight"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Notes on getting found.
              </h2>
            </div>
            <a
              href="/blog/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9a4528] hover:gap-3 transition-all duration-200 self-start sm:self-end"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              View all posts
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

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {recent.map((post) => (
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
                <div className="flex flex-col gap-3 p-6">
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
                  <h3
                    className="text-lg sm:text-xl font-extrabold text-[#1f2a22] leading-snug group-hover:text-[#9a4528] transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {post.title}
                  </h3>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9a4528] mt-1 group-hover:gap-3 transition-all duration-200"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Read more
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
