/* TestimonialsSection — Aralo Studio
   Single featured endorsement from Ann McGaver, owner of Crisis to Comfort.
   Presented as a full-width pull-quote callout between sections — no section
   heading, so it reads as a featured endorsement rather than a one-item list. */
import { useEffect, useRef, useState } from "react";

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
    <section
      className="py-16 sm:py-24 md:py-28 bg-[#f3efe6] border-y border-[#e2ddd0]"
      ref={ref}
      aria-label="Client endorsement"
    >
      <div className="container">
        <figure
          className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-7"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Oversized decorative quote mark */}
          <span
            aria-hidden="true"
            className="text-7xl sm:text-8xl leading-none select-none"
            style={{ color: "#9a4528", fontFamily: "Fraunces, serif" }}
          >
            "
          </span>

          {/* Stars + verified badge */}
          <div className="flex flex-wrap items-center justify-center gap-3 -mt-6 sm:-mt-8">
            <div className="flex gap-1 items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 16 16" fill="#9a4528">
                  <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.5l-3.71 1.95.71-4.13L2 5.5l4.15-.75L8 1z" />
                </svg>
              ))}
            </div>
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#e7e2d6] border border-[#d6d2c5] text-xs font-bold text-[#1f2a22]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" fill="#9a4528" />
                <path
                  d="M5 8.2l2.2 2L11 6"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              Verified Google Review
            </span>
          </div>

          {/* Quote — large Fraunces pull-quote, semantic blockquote for crawlers */}
          <blockquote className="font-display text-2xl sm:text-3xl md:text-[2.5rem] text-[#1f2a22] leading-snug md:leading-[1.2]">
            <p>"I had no idea where to start with getting a website for my counseling practice. Jeremy made the whole process easy. He asked the right questions, handled everything from design to hosting, and had my site live within a week. It looks professional, it's easy to navigate, and I've already had new clients find me through it. I couldn't be happier."</p>
          </blockquote>

          {/* Attribution */}
          <figcaption className="flex items-center justify-center gap-4 pt-2">
            <div className="w-12 h-12 rounded-full bg-[#9a4528] flex items-center justify-center flex-shrink-0">
              <span className="text-white text-sm font-bold" style={{ fontFamily: "Inter, sans-serif" }}>
                AM
              </span>
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>
                Ann McGaver, LPC
              </p>
              <p className="text-xs text-[#6b6660]" style={{ fontFamily: "Inter, sans-serif" }}>
                Owner,{" "}
                <a
                  href="https://crisis2comfort.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9a4528] hover:underline"
                >
                  Crisis to Comfort Counseling
                </a>{" "}
                · Coeur d'Alene, ID
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
