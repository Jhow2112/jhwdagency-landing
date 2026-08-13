/* TestimonialsSection — Aralo Studio
   Two verified client endorsements presented side by side: a detailed Google
   review from Ann McGaver (Crisis to Comfort Counseling) and a Facebook review
   from Ice Ice Shavey. Each card carries its source platform's branding so the
   reviews read as genuine, verifiable third-party endorsements. */
import { useRef } from "react";

/* Official platform marks, rendered in their real brand colors so the
   "Verified" badges are recognizable at a glance. */
function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function FacebookMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#1877F2" d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8v8.44C19.61 23.08 24 18.09 24 12.07z" />
    </svg>
  );
}

type Testimonial = {
  platform: "Google" | "Facebook";
  quote: string;
  name: string;
  initials: string;
  role: React.ReactNode;
};

const TESTIMONIALS: Testimonial[] = [
  {
    platform: "Google",
    quote:
      "I had no idea where to start with getting a website for my counseling practice. Jeremy made the whole process easy. He asked the right questions, handled everything from design to hosting, and had my site live within a week. It looks professional, it's easy to navigate, and I've already had new clients find me through it. I couldn't be happier.",
    name: "Ann McGaver, LPC",
    initials: "AM",
    role: (
      <>
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
      </>
    ),
  },
  {
    platform: "Facebook",
    quote:
      "Aralo Studio did an amazing job on my website, very fast service and catered to everything I needed!! Highly recommend!!",
    name: "Ice Ice Shavey",
    initials: "IS",
    role: (
      <>
        Owner,{" "}
        <a
          href="https://iceiceshavey.net"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#9a4528] hover:underline"
        >
          Ice Ice Shavey
        </a>{" "}
        · North Idaho & Eastern WA
      </>
    ),
  },
];

function PlatformBadge({ platform }: { platform: Testimonial["platform"] }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#e7e2d6] border border-[#d6d2c5] text-xs font-bold text-[#1f2a22]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {platform === "Google" ? <GoogleMark /> : <FacebookMark />}
      Verified {platform} Review
    </span>
  );
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      className="py-16 sm:py-24 md:py-28 bg-[#f3efe6] border-y border-[#e2ddd0]"
      aria-label="Client endorsements"
    >
      <div className="container">
        <div className="grid gap-6 sm:gap-7 md:grid-cols-2 max-w-5xl mx-auto items-stretch">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="reveal [--reveal-y:28px] flex flex-col gap-5 bg-white rounded-2xl border border-[#e2ddd0] p-7 sm:p-8 shadow-sm"
            >
              {/* Stars + platform badge */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex gap-1 items-center">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} width="18" height="18" viewBox="0 0 16 16" fill="#9a4528">
                      <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.5l-3.71 1.95.71-4.13L2 5.5l4.15-.75L8 1z" />
                    </svg>
                  ))}
                </div>
                <PlatformBadge platform={t.platform} />
              </div>

              {/* Quote — semantic blockquote, flex-grows so attributions align */}
              <blockquote className="flex-grow font-display text-xl sm:text-2xl text-[#1f2a22] leading-snug">
                <p>"{t.quote}"</p>
              </blockquote>

              {/* Attribution */}
              <figcaption className="flex items-center gap-4 pt-5 border-t border-[#f0ece2]">
                <div className="w-12 h-12 rounded-full bg-[#9a4528] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold" style={{ fontFamily: "Inter, sans-serif" }}>
                    {t.initials}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {t.name}
                  </p>
                  <p className="text-xs text-[#6b6660]" style={{ fontFamily: "Inter, sans-serif" }}>
                    {t.role}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
