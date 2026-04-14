/* SEOPage — Jeremy Howard Web Design
   Dedicated SEO & AEO services page
   Honest, specific, no overpromising
   Design: matches main site — navy/blue palette, Syne + Nunito Sans */

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Data ────────────────────────────────────────────────────────────────────

const whatIsDone = [
  {
    title: "On-Page SEO",
    description:
      "Every page is built with clean, crawlable HTML. Title tags, meta descriptions, heading hierarchy (H1–H3), image alt text, and internal linking are all set up intentionally — not as an afterthought.",
    included: ["Minimum", "Plus", "Premium"],
  },
  {
    title: "AEO — Answer Engine Optimization",
    description:
      "AI tools like ChatGPT, Perplexity, and Google's AI Overviews pull answers from structured content. I add JSON-LD schema markup (LocalBusiness, FAQPage, Service, Review) and write FAQ content that directly answers the questions your customers are already asking.",
    included: ["Plus", "Premium"],
  },
  {
    title: "Google Business Profile Setup",
    description:
      "A complete, accurate Google Business Profile is one of the most impactful things a local business can have. I set up or clean up your profile — business category, service areas, hours, photos, and description — so you show up correctly in Maps and local search.",
    included: ["Plus", "Premium"],
  },
  {
    title: "Local SEO Signals",
    description:
      "Your site includes geo-targeted meta tags, city and region references in content, and areaServed schema markup. This helps search engines understand where you operate and who you serve.",
    included: ["Plus", "Premium"],
  },
  {
    title: "Monthly On-Page SEO Updates",
    description:
      "Search rankings shift over time. On the Premium plan, I review and update your page titles, descriptions, and keyword targeting monthly based on what's working and what's changed in your local market.",
    included: ["Premium"],
  },
  {
    title: "Monthly AEO Content Tuning",
    description:
      "AI answer engines update their indexes regularly. On the Premium plan, I review and refine your FAQ content and schema markup monthly to keep your business well-represented in AI-generated answers.",
    included: ["Premium"],
  },
  {
    title: "Google Business Profile Management",
    description:
      "On the Premium plan, I handle ongoing updates to your Google Business Profile — keeping your hours, photos, and service descriptions current. Consistent, active profiles rank better in local search.",
    included: ["Premium"],
  },
];

const whatIDontDo = [
  "I don't guarantee specific Google rankings — no one honestly can.",
  "I don't run paid ad campaigns (Google Ads, Meta Ads).",
  "I don't do link-building outreach or backlink acquisition.",
  "I don't manage social media accounts.",
  "I don't write blog posts or ongoing content (beyond the initial site copy on Premium).",
  "I don't provide keyword rank tracking reports — though I can point you to free tools to do this yourself.",
];

const faqs = [
  {
    q: "How long does it take to see results from SEO?",
    a: "Honest answer: it varies. For local searches with low competition, some clients see movement in 4–8 weeks. For more competitive markets, it can take 3–6 months. SEO is a long-term investment, not a quick fix. What I can do is make sure your site is set up correctly from day one so you're not starting from behind.",
  },
  {
    q: "What is AEO and why does it matter?",
    a: "AEO stands for Answer Engine Optimization. It's the practice of structuring your content so that AI tools — like ChatGPT, Perplexity, Google's AI Overviews, and Siri — can accurately represent your business when someone asks a relevant question. As more people use AI to find local services, being well-represented in those answers matters more and more.",
  },
  {
    q: "Will my site show up on Google Maps?",
    a: "Google Maps results are driven primarily by your Google Business Profile, not your website. I set up and optimize your profile on Plus and Premium plans. Your website supports this by providing consistent NAP (Name, Address, Phone) information and local schema markup.",
  },
  {
    q: "Do I need to do anything for SEO after the site launches?",
    a: "On the Minimum plan, the site is optimized at launch but you'd need to maintain it yourself going forward. On Plus, the initial setup is done for you. On Premium, I handle monthly updates so your SEO stays current without you having to think about it.",
  },
  {
    q: "What is JSON-LD schema markup?",
    a: "It's a block of structured data added to your website's code that tells search engines and AI tools exactly what your business is, where you're located, what you offer, and what customers say about you. It's invisible to visitors but very readable by Google and AI crawlers.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function PlanBadge({ plan }: { plan: string }) {
  const colors: Record<string, string> = {
    Minimum: "bg-[#EEF4FB] text-[#3D5A7A] border border-[#C8DCF0]",
    Plus: "bg-[#1E3A5F] text-white",
    Premium: "bg-[#4A90D9] text-white",
  };
  return (
    <span
      className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${colors[plan]}`}
      style={{ fontFamily: "Syne, sans-serif" }}
    >
      {plan}
    </span>
  );
}

function ServiceCard({ item, index }: { item: typeof whatIsDone[0]; index: number }) {
  return (
    <div
      className="bg-white rounded-2xl border border-[#C8DCF0] p-6 sm:p-7 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex flex-col gap-2">
        <h3
          className="text-lg font-bold text-[#0D1B2A]"
          style={{ fontFamily: "Syne, sans-serif" }}
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
        className="text-sm text-[#3D5A7A] leading-relaxed"
        style={{ fontFamily: "Nunito Sans, sans-serif" }}
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
          ? "border-[#4A90D9]/40 bg-white shadow-md"
          : "border-[#C8DCF0] bg-white/60 hover:bg-white hover:border-[#4A90D9]/30"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span
          className="text-base font-bold text-[#0D1B2A]"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {faq.q}
        </span>
        <span
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
            open ? "bg-[#4A90D9] rotate-45" : "bg-[#EEF4FB]"
          }`}
        >
          <svg
            width="12" height="12" viewBox="0 0 12 12" fill="none"
            stroke={open ? "white" : "#1E3A5F"} strokeWidth="2" strokeLinecap="round"
          >
            <path d="M6 1v10M1 6h10" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <p
          className="px-6 pb-5 text-sm text-[#3D5A7A] leading-relaxed"
          style={{ fontFamily: "Nunito Sans, sans-serif" }}
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
    document.title = "SEO & AEO Services | Jeremy Howard Web Design | Meridian, ID";
  }, []);

  return (
    <div className="min-h-screen bg-[#F4F7FA]">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#0D1B2A] pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="container max-w-3xl mx-auto text-center">
          <span
            className="inline-block text-xs font-bold tracking-[0.18em] uppercase text-[#7BB8E8] border border-[#4A90D9]/40 rounded-full px-3 py-1.5 mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            SEO & AEO Services
          </span>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Get found on Google.<br />
            <span className="text-[#4A90D9]">And in AI search.</span>
          </h1>
          <p
            className="text-base sm:text-lg text-white/65 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            Every site I build includes foundational SEO. Plus and Premium plans go further — with structured data, Google Business setup, and ongoing optimization so your business shows up where your customers are looking.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#4A90D9] text-white text-sm font-bold hover:bg-[#3a7bc8] transition-colors"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              See Pricing Plans
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-colors"
              style={{ fontFamily: "Syne, sans-serif" }}
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
              className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0D1B2A]"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              What I actually do.
            </h2>
            <p
              className="mt-3 text-sm sm:text-base text-[#3D5A7A] max-w-lg mx-auto"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
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
              className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0D1B2A]"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              What I don't do.
            </h2>
            <p
              className="mt-3 text-sm sm:text-base text-[#3D5A7A] max-w-md mx-auto"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              I'd rather be upfront than overpromise. These services are outside my scope.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {whatIDontDo.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-[#F4F7FA] rounded-xl px-5 py-4 border border-[#E2EAF2]"
              >
                <svg
                  className="flex-shrink-0 mt-0.5"
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                >
                  <circle cx="8" cy="8" r="7.5" stroke="#9BB5CC" strokeOpacity="0.6"/>
                  <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="#9BB5CC" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
                <span
                  className="text-sm text-[#3D5A7A] leading-relaxed"
                  style={{ fontFamily: "Nunito Sans, sans-serif" }}
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
              className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#0D1B2A]"
              style={{ fontFamily: "Syne, sans-serif" }}
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
      <section className="py-14 sm:py-20 bg-[#0D1B2A]">
        <div className="container max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Ready to get found?
          </h2>
          <p
            className="text-base text-white/60 mb-8 max-w-md mx-auto"
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            Start with a plan that includes SEO and AEO from day one — no add-ons, no surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#4A90D9] text-white text-sm font-bold hover:bg-[#3a7bc8] transition-colors"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              View Pricing Plans
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-colors"
              style={{ fontFamily: "Syne, sans-serif" }}
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
