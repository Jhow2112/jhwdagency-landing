/* FAQSection — Jeremy Howard Web Design
   AEO-optimized: questions mirror the JSON-LD FAQPage schema in index.html
   Uses semantic <details>/<summary> for native accessibility and crawler readability
   Design: clean accordion on off-white background */
import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Websites start at $495 for the Minimum package (up to 3 pages), $895 for the Plus package (up to 5 pages), and $1,295 for the Premium package (up to 10 pages). Every package includes a one-time setup fee plus a low monthly hosting and support fee of $29–$99/month depending on your plan — no surprise costs.",
  },
  {
    q: "How long does it take to build my website?",
    a: "Most websites are live within 5 business days of receiving your content and approval. The exact timeline depends on how quickly you can provide feedback and any written content you'd like on the site — I'll guide you through exactly what I need.",
  },
  {
    q: "Do I own my website?",
    a: "Yes — you own your website and all its content outright. The monthly fee of $29–$99/month covers hosting, maintenance, and support, not ownership. You can take your site to another host at any time.",
  },
  {
    q: "Is hosting included in the price?",
    a: "Yes. All packages include managed hosting, an SSL certificate (the padlock in your browser), and ongoing support for $29–$99/month depending on your plan. There are no hidden fees.",
  },
  {
    q: "Can you help my business show up on Google?",
    a: "Yes. All packages include on-page SEO basics. The Plus and Premium packages also include Google Business Profile setup and optimization so your business appears in local search results and Google Maps when nearby customers search for your services.",
  },
  {
    q: "Do you work with businesses outside of Meridian, Idaho?",
    a: "Absolutely. While I'm based in Meridian, Idaho, I work with clients anywhere in the U.S. via Zoom and remote collaboration. If you're in the Treasure Valley, we can also meet in person.",
  },
  {
    q: "Are there long-term contracts?",
    a: "No. There are no long-term contracts. Monthly hosting and support plans can be cancelled with 30 days notice at any time — no penalties, no hassle.",
  },
  {
    q: "What types of businesses do you build websites for?",
    a: "I work with a wide range of local businesses — counselors, therapists, contractors, restaurants, retail shops, real estate agents, coaches, consultants, and service businesses of all kinds. If you need a professional website that attracts local customers, I can help.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s`,
      }}
    >
      <div
        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
          open
            ? "border-[#4A90D9]/40 bg-white shadow-md"
            : "border-[#C8DCF0] bg-white/60 hover:bg-white hover:border-[#4A90D9]/30 hover:shadow-sm"
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
              open
                ? "bg-[#4A90D9] rotate-45"
                : "bg-[#EEF4FB]"
            }`}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke={open ? "white" : "#1E3A5F"}
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 1v10M1 6h10" />
            </svg>
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p
            className="px-6 pb-5 text-sm text-[#3D5A7A] leading-relaxed"
            style={{ fontFamily: "Nunito Sans, sans-serif" }}
          >
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-14 sm:py-20 md:py-24 bg-white" aria-labelledby="faq-heading">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="section-label">Common Questions</span>
            <h2
              id="faq-heading"
              className="mt-3 text-4xl md:text-5xl font-extrabold text-[#0D1B2A] leading-tight"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Answers before you ask.
            </h2>
            <p
              className="mt-4 text-base text-[#3D5A7A] max-w-lg mx-auto leading-relaxed"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Everything you need to know about working with Jeremy Howard Web Design.
            </p>
          </div>

          {/* FAQ items */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p
              className="text-sm text-[#6B8BAA] mb-4"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              Still have questions? I'm happy to chat.
            </p>
            <a
              href="#contact"
              className="btn-terra inline-flex items-center gap-2 px-7 py-3.5 text-base"
            >
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
        </div>
      </div>
    </section>
  );
}
