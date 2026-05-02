/* BlogPostTemplate — Aralo Studio
   Single template renders any blog post:
   - Full-width header image
   - JetBrains Mono date + category eyebrow
   - Fraunces 300 display title
   - Marked-rendered markdown body (.blog-prose styles)
   - CTA section linking to homepage contact form
   - Article JSON-LD + per-post meta tags (client-side; SSR side-handled by prerender.mjs) */

import { useEffect } from "react";
import { marked } from "marked";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbSchema, { type Crumb } from "@/components/BreadcrumbSchema";
import {
  type BlogPost,
  formatPostDate,
  getExcerpt,
} from "@/data/blogPosts";

const SITE_ORIGIN = "https://aralostudio.com";

marked.setOptions({ gfm: true, breaks: false });

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    const [key, rawName] = selector.replace(/^meta\[/, "").replace(/\]$/, "").split("=");
    const name = rawName?.replace(/['"]/g, "");
    if (key && name) el.setAttribute(key, name);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function buildBreadcrumbs(post: BlogPost): Crumb[] {
  return [
    { name: "Home", url: `${SITE_ORIGIN}/` },
    { name: "Blog", url: `${SITE_ORIGIN}/blog/` },
    { name: post.title, url: `${SITE_ORIGIN}/blog/${post.slug}/` },
  ];
}

function ArticleSchema({ post }: { post: BlogPost }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: [`${SITE_ORIGIN}${post.headerImage}`],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Jeremy Howard",
      url: `${SITE_ORIGIN}/`,
    },
    publisher: {
      "@type": "Organization",
      name: "Aralo Studio",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_ORIGIN}/aralo-mark.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_ORIGIN}/blog/${post.slug}/`,
    },
    description: getExcerpt(post),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function BlogPostTemplate({ post }: { post: BlogPost }) {
  const url = `${SITE_ORIGIN}/blog/${post.slug}/`;
  const ogImage = `${SITE_ORIGIN}${post.headerImage}`;
  const description = getExcerpt(post);
  const bodyHtml = marked.parse(post.body) as string;

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo(0, 0);
    document.title = `${post.title} | Aralo Studio`;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", post.title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", ogImage);
    setMeta('meta[property="og:type"]', "content", "article");
    setMeta('meta[name="twitter:title"]', "content", post.title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", ogImage);
    const canonical = document.head.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute("href", url);
  }, [post.slug, post.title, url, ogImage, description]);

  return (
    <div className="min-h-screen bg-[#f3efe6]">
      <ArticleSchema post={post} />
      <BreadcrumbSchema crumbs={buildBreadcrumbs(post)} />
      <Navbar />

      {/* Header image — full bleed under navbar, capped height so it
           doesn't dominate the viewport on desktop. */}
      <header className="bg-[#1f2a22] pt-16 md:pt-20">
        <div className="w-full h-[200px] sm:h-[260px] md:h-[320px] lg:h-[380px] overflow-hidden">
          <img
            src={post.headerImage}
            alt={post.headerImageAlt ?? post.title}
            width="1200"
            height="630"
            className="w-full h-full object-cover"
            decoding="async"
          />
        </div>
      </header>

      {/* Article body */}
      <article className="py-14 sm:py-20">
        <div className="container max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="section-label">{post.category}</span>
            <span
              className="text-xs text-[#6b6660] tracking-widest uppercase"
              style={{ fontFamily: "JetBrains Mono, monospace" }}
            >
              {formatPostDate(post.date)}
            </span>
          </div>

          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1f2a22] leading-[1.05] mb-10"
          >
            {post.title}
          </h1>

          <div
            className="blog-prose"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        </div>
      </article>

      {/* CTA — links to homepage contact form */}
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
            Tell me about your business — I'll get back to you within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#9a4528] text-white text-sm font-bold hover:bg-[#d97a55] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="/blog/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              More Posts
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
