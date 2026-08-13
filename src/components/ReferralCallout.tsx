/* ReferralCallout — Aralo Studio
   Above-footer referral CTA: free month of hosting per signed-up referral */
import { useEffect, useRef, useState } from "react";

export default function ReferralCallout() {
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
    <section className="py-14 sm:py-20 bg-[#f3efe6]">
      <div className="container">
        <div
          ref={ref}
          className="max-w-3xl mx-auto rounded border border-[rgba(31,42,34,0.14)] bg-white px-6 sm:px-10 py-10 sm:py-14 text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span className="section-label">Referral Program</span>
          <h2
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#1f2a22] leading-tight"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Know a business that needs a website?
          </h2>
          <p
            className="mt-4 text-base text-[#2f3b32] max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Refer a client and earn a free month of hosting for every referral that signs up. No limits, no minimums.
          </p>
          <div className="mt-7 flex justify-center">
            <a
              href="#contact"
              className="btn-terra inline-flex items-center gap-2 px-7 py-3.5 text-base"
            >
              Send a Referral
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
