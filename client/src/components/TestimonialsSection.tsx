/* TestimonialsSection — Contemporary Studio, Warm Geometric
   3 testimonial cards with avatar initials, star ratings, and quotes */
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "Rachel M.",
    business: "Bloom Bakery",
    location: "Austin, TX",
    plan: "Plus Plan",
    quote:
      "I was dreading the whole website process. Studio made it so easy — I answered a few questions, approved the draft, and we were live in 8 days. My online orders have doubled.",
    initials: "RM",
    stars: 5,
  },
  {
    name: "David K.",
    business: "Peak Fitness",
    location: "Denver, CO",
    plan: "Premium Plan",
    quote:
      "The copywriting alone was worth the premium price. I didn't have to write a single word. The site looks more professional than studios charging 5× as much.",
    initials: "DK",
    stars: 5,
  },
  {
    name: "Sandra T.",
    business: "Harbor Law Group",
    location: "Seattle, WA",
    plan: "Minimum Plan",
    quote:
      "Needed something simple and professional fast. Got exactly that. The ongoing support means I never have to worry about the site — it just works.",
    initials: "ST",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 16 16" fill="#C96442">
          <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.5l-3.71 1.95.71-4.13L2 5.5l4.15-.75L8 1z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
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
    <section className="py-24 bg-[#FAF7F4]" ref={ref}>
      <div className="container">
        <div className="text-center mb-14">
          <span className="section-label">Client Stories</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-[#0F0E0D]" style={{ fontFamily: "Syne, sans-serif" }}>
            Don't take our word for it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="flex flex-col gap-5 p-7 rounded-2xl bg-white border border-[#E8E0D5] shadow-sm hover:shadow-lg transition-shadow duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
              }}
            >
              {/* Stars */}
              <StarRating count={t.stars} />

              {/* Quote */}
              <p className="text-sm text-[#4A3F38] leading-relaxed flex-1" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                "{t.quote}"
              </p>

              {/* Plan tag */}
              <span className="self-start text-xs px-3 py-1 rounded-full bg-[#F5EDE7] text-[#C96442] font-semibold" style={{ fontFamily: "Syne, sans-serif" }}>
                {t.plan}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t border-[#E8E0D5]">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C96442] to-[#E8A882] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold" style={{ fontFamily: "Syne, sans-serif" }}>{t.initials}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0F0E0D]" style={{ fontFamily: "Syne, sans-serif" }}>{t.name}</p>
                  <p className="text-xs text-[#8A7A72]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>{t.business} · {t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
