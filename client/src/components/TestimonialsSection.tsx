/* TestimonialsSection — Jeremy Howard Web Design
   Real testimonial from Ann McGaver, owner of Crisis to Comfort
   Her site was built by Jeremy Howard Web Design */
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
    <section className="py-24 bg-[#F4F7FA]" ref={ref}>
      <div className="container">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="section-label">From Our Clients</span>
          <h2
            className="mt-3 text-4xl md:text-5xl font-extrabold text-[#0D1B2A]"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            What clients say.
          </h2>
        </div>

        {/* Testimonial card */}
        <div
          className="max-w-2xl mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div className="relative flex flex-col gap-6 p-10 rounded-3xl bg-white border border-[#C8DCF0] shadow-lg">
            {/* Decorative quote mark */}
            <div
              className="absolute top-6 right-8 text-8xl font-serif leading-none select-none pointer-events-none"
              style={{ color: "#EEF4FB", fontFamily: "Georgia, serif" }}
            >
              "
            </div>

            {/* Stars */}
            <div className="flex gap-1 items-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 16 16" fill="#4A90D9">
                  <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.5l-3.71 1.95.71-4.13L2 5.5l4.15-.75L8 1z" />
                </svg>
              ))}
              <span
                className="ml-2 text-xs text-[#6B8BAA] self-center font-semibold"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                5-Star Google Review
              </span>
            </div>

            {/* Quote — semantic blockquote for crawlers */}
            <blockquote
              className="text-xl text-[#0D1B2A] leading-relaxed font-medium relative z-10 not-italic"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              <p>"I had no idea where to start with getting a website for my counseling practice. Jeremy made the whole process easy — he asked the right questions, handled everything from design to hosting, and had my site live within a week. It looks professional, it's easy to navigate, and I've already had new clients find me through it. I couldn't be happier."</p>
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4 pt-2 border-t border-[#C8DCF0]">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#1E3A5F] to-[#4A90D9] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-sm font-bold" style={{ fontFamily: "Syne, sans-serif" }}>
                  AM
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-[#0D1B2A]" style={{ fontFamily: "Syne, sans-serif" }}>
                  Ann McGaver, LPC
                </p>
                <p className="text-xs text-[#6B8BAA]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                  Owner,{" "}
                  <a
                    href="https://crisis2comfort.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4A90D9] hover:underline"
                  >
                    Crisis to Comfort Counseling
                  </a>{" "}
                  &mdash; Meridian, ID
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA below */}
        <div
          className="mt-12 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease 0.2s",
          }}
        >
          <p className="text-sm text-[#6B8BAA] mb-4" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
            Ready to be our next success story?
          </p>
          <a href="#contact" className="btn-terra inline-flex items-center gap-2 px-7 py-3.5 text-base">
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
