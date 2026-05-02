/* CaseStudyTemplate — Aralo Studio
   Renders any portfolio project. Same editorial pattern as the blog post
   template: capped-height hero image, Fraunces title, metadata strip,
   Challenge / Solution / Key Features sections, optional gallery, dark
   CTA section. BreadcrumbList JSON-LD + per-page meta tags (set client-
   side; SSR side handled by prerender.mjs). */

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbSchema, { type Crumb } from "@/components/BreadcrumbSchema";
import type { PortfolioProject } from "@/data/portfolioProjects";

const SITE_ORIGIN = "https://aralostudio.com";

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

function buildBreadcrumbs(project: PortfolioProject): Crumb[] {
  return [
    { name: "Home", url: `${SITE_ORIGIN}/` },
    { name: "Portfolio", url: `${SITE_ORIGIN}/portfolio/` },
    { name: project.name, url: `${SITE_ORIGIN}/portfolio/${project.slug}/` },
  ];
}

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className="inline-block flex-shrink-0">
    <path
      d="M5 2H2.5A1.5 1.5 0 001 3.5v6A1.5 1.5 0 002.5 11h6A1.5 1.5 0 0010 9.5V7M7 1h4m0 0v4M11 1L5.5 6.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-1">
    <circle cx="8" cy="8" r="7.5" stroke="#9a4528" strokeOpacity="0.45"/>
    <path d="M5 8l2 2 4-4" stroke="#9a4528" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function CaseStudyTemplate({ project }: { project: PortfolioProject }) {
  const url = `${SITE_ORIGIN}/portfolio/${project.slug}/`;
  const ogImage = `${SITE_ORIGIN}${project.heroImage}`;

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo(0, 0);
    document.title = project.metaTitle;
    setMeta('meta[name="description"]', "content", project.metaDescription);
    setMeta('meta[property="og:title"]', "content", project.metaTitle);
    setMeta('meta[property="og:description"]', "content", project.metaDescription);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", ogImage);
    setMeta('meta[name="twitter:title"]', "content", project.metaTitle);
    setMeta('meta[name="twitter:description"]', "content", project.metaDescription);
    setMeta('meta[name="twitter:image"]', "content", ogImage);
    const canonical = document.head.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute("href", url);
  }, [project.slug, project.metaTitle, project.metaDescription, url, ogImage]);

  return (
    <div className="min-h-screen bg-[#f3efe6]">
      <BreadcrumbSchema crumbs={buildBreadcrumbs(project)} />
      <Navbar />

      {/* Hero image — capped height so it doesn't dominate */}
      <header className="bg-[#1f2a22] pt-16 md:pt-20">
        <div className="w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[460px] overflow-hidden">
          <img
            src={project.heroImage}
            alt={project.heroImageAlt ?? `${project.name} website screenshot`}
            width="1920"
            height="950"
            className="w-full h-full object-cover object-top"
            decoding="async"
          />
        </div>
      </header>

      {/* Title + metadata */}
      <section className="py-12 sm:py-16">
        <div className="container max-w-3xl mx-auto">
          <span className="section-label">Case Study</span>
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl text-[#1f2a22] leading-[1.05] mt-4 mb-8"
          >
            {project.name}
          </h1>

          {/* Metadata strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 p-6 sm:p-7 rounded-2xl border border-[#d6d2c5] bg-white">
            <MetaRow label="Industry" value={project.industry} />
            <MetaRow label="Location" value={project.location} />
            <MetaRow label="Services" value={project.services.join(" · ")} />
            <div className="flex flex-col gap-1.5">
              <span
                className="text-xs font-bold tracking-widest uppercase text-[#6b6660]"
                style={{ fontFamily: "JetBrains Mono, monospace" }}
              >
                Live Site
              </span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9a4528] hover:underline self-start"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {project.liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                <ExternalIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge / Solution */}
      <section className="pb-12 sm:pb-16">
        <div className="container max-w-3xl mx-auto flex flex-col gap-12 sm:gap-14">
          <CaseSection heading="The Challenge" body={project.challenge} />
          <CaseSection heading="The Solution" body={project.solution} />

          {/* Key Features */}
          <div>
            <span className="section-label">Key Features</span>
            <h2
              className="mt-3 text-2xl sm:text-3xl font-extrabold text-[#1f2a22] leading-tight mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              What's on the page.
            </h2>
            <ul className="flex flex-col gap-3">
              {project.keyFeatures.map((feat) => (
                <li
                  key={feat}
                  className="flex items-start gap-3 text-base text-[#2f3b32] leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  <CheckIcon />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Optional gallery */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="pb-12 sm:pb-16">
          <div className="container max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8">
            {project.galleryImages.map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border border-[#d6d2c5] shadow-md"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width="1920"
                  height="950"
                  className="w-full h-auto block"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-[#1f2a22]">
        <div className="container max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Ready to build something like this?
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
              <ArrowIcon />
            </a>
            <a
              href="/portfolio/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              More Case Studies
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span
        className="text-xs font-bold tracking-widest uppercase text-[#6b6660]"
        style={{ fontFamily: "JetBrains Mono, monospace" }}
      >
        {label}
      </span>
      <span
        className="text-sm text-[#1f2a22]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {value}
      </span>
    </div>
  );
}

function CaseSection({ heading, body }: { heading: string; body: string }) {
  return (
    <div>
      <span className="section-label">{heading}</span>
      <p
        className="mt-3 text-base sm:text-lg text-[#2f3b32] leading-relaxed"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {body}
      </p>
    </div>
  );
}
