/* SEOPage — Aralo Studio
   Dedicated SEO & AEO services page
   Honest, specific, no overpromising
   Design: matches main site — cream/forest palette, Inter + Fraunces */

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

// ─── Data ────────────────────────────────────────────────────────────────────

const whatIsDone = [
  {
    title: "On-Page SEO",
    description:
      "Your site is built so Google can actually read it. The right page titles, descriptions, and structure are all set up from the start so search engines know what your business is and who it's for.",
    included: ["Minimum", "Plus", "Premium"],
  },
  {
    title: "AEO: Answer Engine Optimization",
    description:      "More people are using AI tools like ChatGPT and Google's AI search to find local businesses. I make sure your site is set up so those tools can accurately describe your business: what you do, where you are, and what customers say about you.",
    included: ["Plus", "Premium"],
  },
  {
    title: "Google Business Profile Setup",
    description:      "A complete, accurate Google Business Profile is one of the most impactful things a local business can have. I set up or clean up your profile (business category, service areas, hours, photos, and description) so you show up correctly in Maps and local search.",
    included: ["Plus", "Premium"],
  },
  {
    title: "Local SEO Signals",
    description:
      "Your site includes geo-targeted meta tags, city and region references in content, and areaServed schema markup. This helps search engines understand where you operate and who you serve.",
    included: ["Plus", "Premium"],
  },
  {
    title: "Monthly SEO Audit",
    description:
      "Every month I review your page titles, meta descriptions, and on-page structure for the changes that matter most. Premium hosting includes a monthly audit; SEO & Growth plans add active updates on top of the audit.",
    included: ["Premium", "SEO & Growth"],
  },
  {
    title: "Monthly AEO Schema Tuning",
    description:
      "AI answer engines update their indexes constantly. I refine your FAQ content and structured-data markup monthly so tools like ChatGPT, Perplexity, and Google's AI Overviews keep representing your business accurately. Available through SEO & Growth.",
    included: ["SEO & Growth"],
  },
  {
    title: "Google Business Profile Management",
    description:
      "Plus and Premium hosting plans include the initial Google Business Profile setup. Ongoing management — keeping hours, photos, posts, and service descriptions current — lives in the SEO & Growth (Growth tier and above) service so it doesn't go stale.",
    included: ["SEO & Growth"],
  },
  {
    title: "Local Citation Monitoring",
    description:
      "Inconsistent business listings across the web hurt local rankings. I monitor your NAP (Name, Address, Phone) consistency and flag or fix discrepancies as they appear. Available through SEO & Growth (Growth tier and above).",
    included: ["SEO & Growth"],
  },
];

const whatIDontDo = [
  "I don't guarantee specific Google rankings. No one honestly can.",  "I don't run paid ad campaigns (Google Ads, Meta Ads).",
  "I don't do link-building outreach or backlink acquisition.",
  "I don't manage social media accounts.",
  "I don't write blog posts or ongoing content unless it's part of an SEO & Growth plan (Growth tier and above).",
];

const faqs = [
  {
    q: "How long does it take to see results from SEO?",
    a: "Honest answer: it varies. For local searches with low competition, some clients see movement in 4–8 weeks. For more competitive markets, it can take 3–6 months. SEO is a long-term investment, not a quick fix. What I can do is make sure your site is set up correctly from day one so you're not starting from behind.",
  },
  {
    q: "What is AEO and why does it matter?",    a: "AEO stands for Answer Engine Optimization. It's the practice of structuring your content so that AI tools like ChatGPT, Perplexity, Google's AI Overviews, and Siri can accurately represent your business when someone asks a relevant question. As more people use AI to find local services, being well-represented in those answers matters more and more." },
  {
    q: "Will my site show up on Google Maps?",
    a: "Google Maps results are driven primarily by your Google Business Profile, not your website. Plus and Premium hosting plans include the initial profile setup. For ongoing management — keeping hours, photos, and posts current month over month — that's part of the SEO & Growth service (Growth tier and above). Your website supports this by providing consistent NAP (Name, Address, Phone) information and local schema markup.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function PlanBadge({ plan }: { plan: string }) {
  const colors: Record<string, string> = {
    Minimum: "bg-[#e7e2d6] text-[#2f3b32] border border-[#d6d2c5]",
    Plus: "bg-[#1f2a22] text-white",
    Premium: "bg-[#9a4528] text-white",
    "SEO & Growth": "bg-white text-[#1f2a22] border border-[#1f2a22]",
  };
  return (
    <span
      className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${colors[plan] ?? colors.Premium}`}
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {plan}
    </span>
  );
}

function ServiceCard({ item, index }: { item: typeof whatIsDone[0]; index: number }) {
  return (
    <div
      className="bg-white rounded-2xl border border-[#d6d2c5] p-6 sm:p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex flex-col gap-2">
        <h3
          className="text-lg font-bold text-[#1f2a22]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {item.title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {item.included.map((plan) => (
            <PlanBadge key={plan} plan={plan} />
          ))}
        </div>
      </div>
      <p
        className="text-sm text-[#2f3b32] leading-relaxed"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {item.description}
      </p>
    </div>
  );
}

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open
          ? "border-[#9a4528]/40 bg-white shadow-md"
          : "border-[#d6d2c5] bg-white/60 hover:bg-white hover:border-[#9a4528]/30"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span
          className="text-base font-bold text-[#1f2a22]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
            open ? "bg-[#9a4528] rotate-45" : "bg-[#e7e2d6]"
          }`}
        >
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            stroke={open ? "white" : "#1f2a22"} strokeWidth="2" strokeLinecap="round"
          >
            <path d="M6 1v10M1 6h10" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <p
          className="px-6 pb-5 text-sm text-[#2f3b32] leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {faq.a}
        </p>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SEOPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "SEO & AEO Services for Small Businesses | Aralo Studio | Meridian, Idaho";

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const [key, rawName] = selector.replace(/^meta\[/, "").replace(/\]$/, "").split("=");
        const name = rawName?.replace(/['"]/g, "");
        if (key && name) el.setAttribute(key, name);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const description =
      "On-page SEO, Answer Engine Optimization, and Google Business Profile setup for local businesses. Included in Plus and Premium web design plans. Meridian, Idaho.";

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", "SEO & AEO Services | Aralo Studio");
    setMeta(
      'meta[property="og:description"]',
      "content",
      "Get found on Google and in AI search. On-page SEO, AEO, and Google Business Profile setup for local businesses."
    );
    setMeta('meta[property="og:url"]', "content", "https://aralostudio.com/seo-aeo/");
    setMeta('meta[name="twitter:title"]', "content", "SEO & AEO Services | Aralo Studio");
    setMeta(
      'meta[name="twitter:description"]',
      "content",
      "Get found on Google and in AI search. On-page SEO, AEO, and Google Business Profile setup for local businesses."
    );

    const canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.setAttribute("href", "https://aralostudio.com/seo-aeo/");
  }, []);

  return (
    <div className="min-h-screen bg-[#f3efe6]">
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", url: "https://aralostudio.com/" },
          { name: "Services", url: "https://aralostudio.com/" },
          { name: "SEO & AEO", url: "https://aralostudio.com/seo-aeo/" },
        ]}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-[#1f2a22] pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="container max-w-3xl mx-auto text-center">
          <span
            className="inline-block text-xs font-bold tracking-[0.18em] uppercase text-[#f3efe6] border border-[#9a4528]/40 rounded-full px-3 py-1.5 mb-5"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            SEO & AEO Services
          </span>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Get found on Google.<br />
            <span className="text-[#d97a55]">And in AI search.</span>
          </h1>
          <p
            className="text-base sm:text-lg text-white/65 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Every site I build includes foundational SEO. Plus and Premium plans go further with structured data, AEO setup, and Google Business Profile setup. For ongoing management and optimized content month over month, see the <a href="/active-seo/" className="link-accent underline-offset-2">SEO & Growth</a> service.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#9a4528] text-white text-sm font-bold hover:bg-[#d97a55] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              See Pricing Plans
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Ask a Question
            </a>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-14 sm:py-20">
        <div className="container">
          <div className="text-center mb-10 sm:mb-14">
            <span className="section-label">What's Included</span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#1f2a22]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              What I actually do.
            </h2>
            <p
              className="mt-3 text-sm sm:text-base text-[#2f3b32] max-w-lg mx-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              No vague promises. Here's exactly what each service involves and which plans include it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {whatIsDone.map((item, i) => (
              <ServiceCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* What I don't do */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Honest Scope</span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#1f2a22]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              What I don't do.
            </h2>
            <p
              className="mt-3 text-sm sm:text-base text-[#2f3b32] max-w-md mx-auto"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              I'd rather be upfront than overpromise. These services are outside my scope.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {whatIDontDo.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-[#f3efe6] rounded-xl px-5 py-4 border border-[#d6d2c5]"
              >
                <svg
                  className="flex-shrink-0 mt-0.5"
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                >
                  <circle cx="8" cy="8" r="7.5" stroke="#6b6660" strokeOpacity="0.6"/>
                  <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#6b6660" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
                <span
                  className="text-sm text-[#2f3b32] leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Common Questions</span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#1f2a22]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              SEO questions, answered.
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-[#1f2a22]">
        <div className="container max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Ready to get found?
          </h2>
          <p
            className="text-base text-white/60 mb-8 max-w-md mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Start with a plan that includes SEO and AEO from day one. No add-ons, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#9a4528] text-white text-sm font-bold hover:bg-[#d97a55] transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              View Pricing Plans
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Contact Jeremy
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
