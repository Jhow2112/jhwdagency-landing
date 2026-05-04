/* FreePreviewPage — Aralo Studio
   /free-preview/ — Standalone conversion page targeted at Meta ad
   traffic. Intentionally NOT using the main Navbar or Footer — visitors
   should have one path: submit the form. Mobile-first, no heavy assets,
   no autoplay, no distractions.

   Form posts to the same Formspree endpoint as the main contact form,
   with a `source: "free-preview"` field so leads from this page are
   distinguishable from regular contact submissions. Fires a GA event
   and a Meta Pixel "Lead" event on success (the pixel call is defensive
   — runs only if window.fbq exists). */

import { useEffect, useState } from "react";
import Lockup from "@/components/brand/Lockup";

const SITE_ORIGIN = "https://aralostudio.com";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgpdyqn";
const CALENDLY_URL = "https://calendly.com/jeremyhowardwebdesign-info/30min";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8h10M9 4l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExternalIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 12 12"
    fill="none"
    className="inline-block flex-shrink-0"
  >
    <path
      d="M5 2H2.5A1.5 1.5 0 001 3.5v6A1.5 1.5 0 002.5 11h6A1.5 1.5 0 0010 9.5V7M7 1h4m0 0v4M11 1L5.5 6.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

type Status = "idle" | "sending" | "success" | "error";

type FormState = {
  businessName: string;
  name: string;
  email: string;
  phone: string;
  description: string;
  websiteUrl: string;
  referralCode: string;
};

const initialForm: FormState = {
  businessName: "",
  name: "",
  email: "",
  phone: "",
  description: "",
  websiteUrl: "",
  referralCode: "",
};

function fireConversionEvents() {
  if (typeof window === "undefined") return;
  // GA4 — gtag is loaded site-wide via index.html
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };
  if (typeof w.gtag === "function") {
    w.gtag("event", "free_preview_request", {
      event_category: "lead",
      event_label: "free-preview-form",
    });
  }
  // Meta Pixel — defensive, only fires if a pixel has been installed.
  if (typeof w.fbq === "function") {
    w.fbq("track", "Lead");
  }
}

export default function FreePreviewPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo(0, 0);
    document.title =
      "Free Website Preview | See Your New Site Before You Pay | Aralo Studio";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, source: "free-preview" }),
      });
      if (res.ok) {
        setStatus("success");
        fireConversionEvents();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const update = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [key]: e.target.value });

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white border border-[#d6d2c5] text-[#1f2a22] placeholder-[#8a857a] text-base focus:outline-none focus:border-[#9a4528] focus:ring-2 focus:ring-[#9a4528]/20 transition-all duration-200";

  return (
    <div className="min-h-screen bg-[#f3efe6]" style={{ scrollBehavior: "smooth" }}>
      {/* ── Tiny header — Aralo mark only, no nav ── */}
      <header className="border-b border-[#d6d2c5] bg-[#f3efe6]">
        <div className="container py-4 sm:py-5 flex items-center">
          <a
            href="/"
            aria-label="Aralo Studio home"
            className="flex items-center opacity-90 hover:opacity-100 transition-opacity"
          >
            <Lockup markSize={26} primary="#1f2a22" accent="#9a4528" />
          </a>
        </div>
      </header>

      {/* ── 1. HERO ── */}
      <section className="bg-[#1f2a22] py-16 sm:py-20 md:py-24">
        <div className="container max-w-3xl mx-auto text-center">
          <span className="section-label" style={{ color: "#d97a55" }}>
            Free Preview
          </span>
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] mt-4 mb-5"
          >
            See your new website{" "}
            <span style={{ color: "#d97a55" }}>before you spend a dime.</span>
          </h1>
          <p
            className="text-base sm:text-lg text-white/75 max-w-xl mx-auto leading-relaxed mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Tell us about your business. We'll design a custom homepage preview
            just for you. Like it? We'll build the full site. Don't? Walk away.
            No cost, no catch, no awkward sales call.
          </p>
          <a
            href="#form"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#9a4528] text-white text-base font-bold hover:bg-[#d97a55] transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Get My Free Preview
            <ArrowIcon />
          </a>
          <p
            className="mt-4 text-sm text-white/55"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Takes 60 seconds. No credit card. No commitment. Full sites
            starting at $495.
          </p>
        </div>
      </section>

      {/* ── 2. HOW IT WORKS ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <span className="section-label">How It Works</span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#1f2a22] leading-tight"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Three steps. No surprises.
            </h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {[
              {
                title: "Tell us about your business",
                body: "Fill out the short form below. Business name, what you do, where you're located.",
              },
              {
                title: "We design your homepage",
                body: "Within 48 hours, you'll get a custom preview of your new homepage. Built specifically for your business.",
              },
              {
                title: "You decide",
                body: "Love it? We'll finish the full site. Not for you? No hard feelings. The preview is yours either way.",
              },
            ].map((step, i) => (
              <li key={step.title} className="flex flex-col items-start gap-3">
                <div className="w-11 h-11 rounded-full bg-[#1f2a22] text-white flex items-center justify-center text-base font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <h3
                  className="text-lg font-bold text-[#1f2a22]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm text-[#2f3b32] leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Outcomes pause — no heading, no decoration. Three quiet lines
           sitting between How It Works and Social Proof. ── */}
      <section className="py-12 sm:py-16 bg-white" aria-label="Why a website matters">
        <div className="container max-w-2xl mx-auto">
          <div className="flex flex-col gap-6 sm:gap-7 text-center">
            {[
              "Customers who can't find you online call your competitor instead.",
              "One new customer from your website pays for it many times over.",
              "A professional site doesn't just look good. It makes the phone ring.",
            ].map((line) => (
              <p
                key={line}
                className="text-lg sm:text-xl text-[#2f3b32] leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SOCIAL PROOF ── */}
      <section className="py-14 sm:py-20 bg-[#f3efe6]">
        <div className="container max-w-5xl mx-auto">
          <p
            className="text-center text-base sm:text-lg text-[#2f3b32] mb-8 sm:mb-10"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Recent work for real businesses.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                name: "Crystal Howard Mortgage",
                industry: "Mortgage & Finance",
                liveUrl: "https://crystalhowardmortgage.com",
                image: "/portfolio/crystal-howard-hero.png",
                alt: "Crystal Howard Mortgage homepage screenshot",
              },
              {
                name: "Silver Valley Painting",
                industry: "Painting & Construction",
                liveUrl: "https://silvervalleypainting.netlify.app/",
                image: "/portfolio/silver-valley-hero.png",
                alt: "Silver Valley Painting homepage screenshot",
              },
            ].map((p) => (
              <div
                key={p.name}
                className="flex flex-col rounded-2xl overflow-hidden bg-white border border-[#d6d2c5] shadow-sm"
              >
                <div className="aspect-[1920/950] overflow-hidden bg-[#e7e2d6]">
                  <img
                    src={p.image}
                    alt={p.alt}
                    width="1920"
                    height="950"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-col gap-2 p-5 sm:p-6">
                  <span className="text-xs font-bold tracking-widest uppercase text-[#9a4528]">
                    {p.industry}
                  </span>
                  <h3
                    className="text-lg font-bold text-[#1f2a22]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {p.name}
                  </h3>
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9a4528] hover:underline self-start mt-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    View live site
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. THE FORM ── */}
      <section id="form" className="py-14 sm:py-20 bg-white scroll-mt-8">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="section-label">Request Your Free Preview</span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#1f2a22] leading-tight"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Let's see what your site could look like.
            </h2>
          </div>

          {status === "success" ? (
            <div className="rounded-2xl border border-[#9a4528]/40 bg-[#9a4528]/8 p-8 sm:p-10 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#9a4528] flex items-center justify-center mx-auto mb-5">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3
                className="text-2xl font-extrabold text-[#1f2a22] mb-3"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                You're in.
              </h3>
              <p
                className="text-base text-[#2f3b32] leading-relaxed mb-7 max-w-md mx-auto"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                We'll start on your preview and have it in your inbox within
                48 hours. If you'd like to chat sooner, book a quick call below.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1f2a22] text-white text-sm font-bold hover:bg-[#9a4528] transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Book a 30-minute call
                <ExternalIcon />
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Hidden source — distinguishes free-preview leads from regular contact */}
              <input type="hidden" name="source" value="free-preview" />

              <FieldLabel htmlFor="fp-business" required>
                Business name
              </FieldLabel>
              <input
                id="fp-business"
                type="text"
                required
                placeholder="Acme Plumbing"
                value={form.businessName}
                onChange={update("businessName")}
                className={inputClass}
                style={{ fontFamily: "Inter, sans-serif" }}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <FieldLabel htmlFor="fp-name" required>
                    Your name
                  </FieldLabel>
                  <input
                    id="fp-name"
                    type="text"
                    required
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={update("name")}
                    className={inputClass}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <FieldLabel htmlFor="fp-email" required>
                    Email
                  </FieldLabel>
                  <input
                    id="fp-email"
                    type="email"
                    required
                    placeholder="jane@business.com"
                    value={form.email}
                    onChange={update("email")}
                    className={inputClass}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  />
                </div>
              </div>

              <FieldLabel htmlFor="fp-phone">Phone (optional)</FieldLabel>
              <input
                id="fp-phone"
                type="tel"
                placeholder="(208) 555-0100"
                value={form.phone}
                onChange={update("phone")}
                className={inputClass}
                style={{ fontFamily: "Inter, sans-serif" }}
              />

              <FieldLabel htmlFor="fp-description" required>
                What does your business do?
              </FieldLabel>
              <input
                id="fp-description"
                type="text"
                required
                placeholder="e.g. Residential plumbing in Meridian"
                value={form.description}
                onChange={update("description")}
                className={inputClass}
                style={{ fontFamily: "Inter, sans-serif" }}
              />

              <FieldLabel htmlFor="fp-website">Website URL (optional)</FieldLabel>
              <input
                id="fp-website"
                type="url"
                placeholder="https://yourbusiness.com"
                value={form.websiteUrl}
                onChange={update("websiteUrl")}
                className={inputClass}
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              <p
                className="text-xs text-[#6b6660] -mt-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Leave blank if you don't have one yet.
              </p>

              <FieldLabel htmlFor="fp-referral">Referral code (optional)</FieldLabel>
              <input
                id="fp-referral"
                type="text"
                placeholder="PREVIEW50"
                value={form.referralCode}
                onChange={update("referralCode")}
                className={inputClass}
                style={{ fontFamily: "Inter, sans-serif" }}
              />
              <p
                className="text-xs text-[#6b6660] -mt-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Have a code? Enter it for $50 off your build.
              </p>

              {status === "error" && (
                <p
                  className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Something went wrong submitting the form. Please try again,
                  or email{" "}
                  <a
                    href="mailto:jeremy@aralostudio.com"
                    className="underline font-semibold"
                  >
                    jeremy@aralostudio.com
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#1f2a22] text-white text-base font-bold hover:bg-[#9a4528] transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {status === "sending" ? "Sending…" : "Get My Free Preview"}
                {status !== "sending" && <ArrowIcon />}
              </button>

              <div className="text-center mt-1 flex flex-col gap-1.5">
                <p
                  className="text-sm font-semibold text-[#1f2a22]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Full websites start at $495. The preview is free.
                </p>
                <p
                  className="text-xs text-[#6b6660]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  We'll have your preview ready within 48 hours. No spam, no
                  sales pressure.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── 5. FAQ ── */}
      <section className="py-14 sm:py-20 bg-[#f3efe6]">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <span className="section-label">Common Questions</span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#1f2a22] leading-tight"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              A few quick answers.
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {[
              {
                q: "Is the preview really free?",
                a: "Yes. We build you a custom homepage preview at no cost. If you like it and want to move forward, our full website packages start at $495. If not, you keep the preview and we part ways. No invoice, no follow-up pressure.",
              },
              {
                q: "How long does the preview take?",
                a: "48 hours or less from when you submit the form. You'll get an email with a link to view your preview.",
              },
              {
                q: "What if I already have a website?",
                a: "Even better. We'll show you what an upgrade could look like. Drop your current URL in the form and we'll use it as context.",
              },
              {
                q: "What's the referral code?",
                a: "If someone referred you to us, ask them for their code. Enter it on the form and you'll get $50 off your build if you decide to move forward.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-[#d6d2c5] bg-white px-5 sm:px-6 py-4 sm:py-5 [&[open]]:border-[#9a4528]/40 [&[open]]:shadow-md transition-shadow"
              >
                <summary
                  className="flex items-center justify-between gap-4 cursor-pointer text-base font-bold text-[#1f2a22] list-none"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {faq.q}
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#e7e2d6] group-open:bg-[#9a4528] flex items-center justify-center transition-all duration-300 group-open:rotate-45">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-[#1f2a22] group-open:text-white"
                    >
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p
                  className="mt-3 text-sm text-[#2f3b32] leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FINAL CTA + tiny attribution ── */}
      <section className="py-16 sm:py-20 bg-[#1f2a22]">
        <div className="container max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Your competitors already have a website.{" "}
            <span style={{ color: "#d97a55" }}>Yours should be better.</span>
          </h2>
          <a
            href="#form"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#9a4528] text-white text-base font-bold hover:bg-[#d97a55] transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Get My Free Preview
            <ArrowIcon />
          </a>
        </div>
        <div className="container max-w-2xl mx-auto text-center mt-12">
          <p
            className="text-xs text-white/50"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Aralo Studio · Meridian, Idaho ·{" "}
            <a
              href={SITE_ORIGIN}
              className="hover:text-white/80 transition-colors"
            >
              aralostudio.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}

function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-xs font-bold tracking-widest uppercase text-[#1f2a22]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {children}
      {required && <span className="text-[#9a4528] ml-1">*</span>}
    </label>
  );
}
