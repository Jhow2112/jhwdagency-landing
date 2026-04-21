/* Footer — Jeremy Howard Web Design
   Mobile-first: single column on mobile, 2-col on lg+
   Contact form powered by Formspree
   Email: jeremy@jeremyhowardwebdesign.com */
import { useState } from "react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/jhwd-logo_27f82782.webp";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgpdyqn";
const EMAIL = "info@jeremyhowardwebdesign.com";
const PHONE = "(208) 615-2884";
const PHONE_HREF = "tel:+12086152884";

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "", plan: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#4A90D9]/60 focus:bg-white/12 transition-all duration-200";

  return (
    <footer id="contact" className="bg-[#0D1B2A] text-white">
      <div className="container py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* ── LEFT: Contact form ── */}
          <div>
            <span className="section-label" style={{ color: "#B8D4F0" }}>Get In Touch</span>
            <h2
              className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight mb-2"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Ready for a website that{" "}
              <span style={{ color: "#4A90D9" }}>actually works?</span>
            </h2>
            <p className="text-sm text-white/50 mb-6 sm:mb-8" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
              No long-term contracts. Cancel monthly plans anytime with 30 days notice.
            </p>

            {status === "success" ? (
              <div className="rounded-2xl border border-[#4A90D9]/30 bg-[#4A90D9]/10 p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#4A90D9] flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Syne, sans-serif" }}>Message Received!</h3>
                <p className="text-sm text-white/55" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                  I'll be in touch within one business day to schedule a free consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name + Email row — stacks on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white/45 mb-1.5 tracking-wide uppercase" style={{ fontFamily: "Syne, sans-serif" }}>
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/45 mb-1.5 tracking-wide uppercase" style={{ fontFamily: "Syne, sans-serif" }}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@business.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      style={{ fontFamily: "Nunito Sans, sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/45 mb-1.5 tracking-wide uppercase" style={{ fontFamily: "Syne, sans-serif" }}>
                    Interested Plan
                  </label>
                  <select
                    value={form.plan}
                    onChange={(e) => setForm({ ...form, plan: e.target.value })}
                    className={`${inputClass} appearance-none`}
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  >
                    <option value="" className="bg-[#0D1B2A]">Select a plan...</option>
                    <option value="minimum" className="bg-[#0D1B2A]">Minimum ($495 + $29/mo)</option>
                    <option value="plus" className="bg-[#0D1B2A]">Plus ($895 + $49/mo)</option>
                    <option value="premium" className="bg-[#0D1B2A]">Premium ($1,295 + $99/mo)</option>
                    <option value="custom" className="bg-[#0D1B2A]">Custom Build (Let's talk)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/45 mb-1.5 tracking-wide uppercase" style={{ fontFamily: "Syne, sans-serif" }}>
                    Tell me about your business
                  </label>
                  <textarea
                    rows={4}
                    placeholder="What does your business do? What's your website goal?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                    style={{ fontFamily: "Nunito Sans, sans-serif" }}
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                    Something went wrong. Please try again or email me at{" "}
                    <a href={`mailto:${EMAIL}`} className="underline hover:text-red-300">{EMAIL}</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-terra inline-flex items-center justify-center gap-2 px-7 py-4 text-base mt-1 disabled:opacity-60 w-full sm:w-auto"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                  {status !== "sending" && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── RIGHT: Location + contact info + links ── */}
          <div className="flex flex-col gap-8 sm:gap-10">

            {/* Direct contact */}
            <div>
              <span className="section-label" style={{ color: "#B8D4F0" }}>Direct Contact</span>
              <div className="mt-4 flex flex-col gap-3">
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1E3A5F] to-[#4A90D9] flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 4h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1V4z"/>
                      <path d="M2 4l6 5 6-5"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors break-all" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                    {EMAIL}
                  </span>
                </a>
                <a href={PHONE_HREF} className="inline-flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1E3A5F] to-[#4A90D9] flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 2h3l1.5 3.5-1.75 1.25c.8 1.6 2 2.8 3.5 3.5L10.5 8.5 14 10v3a1 1 0 01-1 1C6.27 14 2 9.73 2 4a1 1 0 011-2z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                    {PHONE}
                  </span>
                </a>
              </div>
            </div>

            {/* Locations */}
            <div>
              <span className="section-label" style={{ color: "#B8D4F0" }}>Where to Find Me</span>
              <div className="mt-4 flex flex-col gap-3">
                {/* In-person */}
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1E3A5F] to-[#4A90D9] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z"/>
                      <circle cx="8" cy="6" r="1.5"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>Meridian, Idaho</p>
                    <p className="text-xs text-white/50 mt-0.5" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                      Available for in-person meetings in the Treasure Valley
                    </p>
                  </div>
                </div>

                {/* Remote */}
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1E3A5F] to-[#4A90D9] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="4" width="14" height="9" rx="1.5"/>
                      <path d="M11 4V3a1 1 0 00-1-1H6a1 1 0 00-1 1v1"/>
                      <path d="M6 10l2-1.5L10 10V7L8 8.5 6 7v3z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>Zoom / Web</p>
                    <p className="text-xs text-white/50 mt-0.5" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                      Serving clients anywhere via Zoom, phone, or email
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8">
              <div>
                <p className="text-xs font-bold text-white/35 tracking-widest uppercase mb-3 sm:mb-4" style={{ fontFamily: "Syne, sans-serif" }}>Services</p>
                <ul className="flex flex-col gap-2 sm:gap-2.5">
                  {["Web Design", "Visual Identity", "SEO & Local Search", "Custom Builds"].map((s) => (
                    <li key={s}>
                      <a href="/#services" className="text-sm text-white/55 hover:text-white transition-colors" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-white/35 tracking-widest uppercase mb-3 sm:mb-4" style={{ fontFamily: "Syne, sans-serif" }}>Quick Links</p>
                <ul className="flex flex-col gap-2 sm:gap-2.5">
                  {[
                    { label: "Our Work", href: "/#work" },
                    { label: "Pricing", href: "/#pricing" },
                    { label: "How It Works", href: "/#services" },
                    { label: "FAQ", href: "/#faq" },
                  ].map((s) => (
                    <li key={s.label}>
                      <a href={s.href} className="text-sm text-white/55 hover:text-white transition-colors" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <a href="#" className="flex items-center">
            <img src={LOGO_URL} alt="Jeremy Howard Web Design logo" className="h-7 sm:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
          </a>
          <p className="text-xs text-white/30 order-last sm:order-none" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
            © {new Date().getFullYear()} Jeremy Howard Web Design. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-xs text-white/30 hover:text-white/65 transition-colors" style={{ fontFamily: "Nunito Sans, sans-serif" }}>Privacy</a>
            <a href="/terms" className="text-xs text-white/30 hover:text-white/65 transition-colors" style={{ fontFamily: "Nunito Sans, sans-serif" }}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
