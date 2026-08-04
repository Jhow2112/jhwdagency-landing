/* FreePreviewCallout — Aralo Studio
   Slim secondary-CTA bar on the homepage that points price-curious
   visitors at the standalone /free-preview/ landing page. Outline
   styling so it doesn't compete with the primary pricing CTAs above. */
import { trackConversion } from "@/lib/analytics";

export default function FreePreviewCallout() {
  return (
    <section
      className="py-10 sm:py-12 bg-[#f3efe6] border-t border-[#d6d2c5]"
      aria-label="Try a free preview before committing"
    >
      <div className="container max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-8 text-center sm:text-left">
          <div>
            <p
              className="text-sm font-bold tracking-widest uppercase text-[#9a4528] mb-1.5"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Not ready to commit?
            </p>
            <p
              className="text-base sm:text-lg text-[#1f2a22] leading-snug"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Get a free homepage preview first.
            </p>
          </div>
          <a
            href="/free-preview/"
            onClick={() => trackConversion("quote_cta_click")}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#1f2a22] text-[#1f2a22] text-sm font-bold hover:bg-[#1f2a22] hover:text-white transition-colors flex-shrink-0"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Get a Free Preview
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
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
    </section>
  );
}
