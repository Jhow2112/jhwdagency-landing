/* Footer — Contemporary Studio, Cool Blue
   Deep navy footer with contact form and office locations */
import { useState } from "react";

const offices = [
  {
    city: "Austin",
    state: "TX",
    address: "1204 S Congress Ave, Suite 300",
    email: "austin@studio.agency",
    phone: "+1 (512) 000-0000",
  },
  {
    city: "Denver",
    state: "CO",
    address: "2400 Larimer St, Suite 110",
    email: "denver@studio.agency",
    phone: "+1 (720) 000-0000",
  },
];

export default function Footer() {
  const [form, setForm] = useState({ name: "", email: "", message: "", plan: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/8 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#4A90D9]/60 focus:bg-white/12 transition-all duration-200";

  return (
    <footer id="contact" className="bg-[#0D1B2A] text-white">
      {/* Main footer content */}
      <div className="container py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact form */}
          <div>
            <span className="section-label" style={{ color: "#B8D4F0" }}>Get In Touch</span>
            <h2
              className="mt-3 text-3xl md:text-4xl font-extrabold text-white leading-tight mb-2"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Ready for a website that{" "}
              <span style={{ color: "#4A90D9" }}>actually works?</span>
            </h2>
            <p className="text-sm text-white/50 mb-8" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
              No long-term contracts. Cancel monthly plans anytime with 30 days notice.
            </p>

            {submitted ? (
              <div className="rounded-2xl border border-[#4A90D9]/30 bg-[#4A90D9]/10 p-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#4A90D9] flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "Syne, sans-serif" }}>Message Received!</h3>
                <p className="text-sm text-white/55" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                  We'll be in touch within one business day to schedule your free intake call.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                      Email
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
                    <option value="minimum" className="bg-[#0D1B2A]">Minimum — $395 + $29/mo</option>
                    <option value="plus" className="bg-[#0D1B2A]">Plus — $795 + $49/mo</option>
                    <option value="premium" className="bg-[#0D1B2A]">Premium — $995 + $99/mo</option>
                    <option value="custom" className="bg-[#0D1B2A]">Custom Build — Let's talk</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/45 mb-1.5 tracking-wide uppercase" style={{ fontFamily: "Syne, sans-serif" }}>
                    Tell us about your business
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

                <button
                  type="submit"
                  className="btn-terra inline-flex items-center justify-center gap-2 px-7 py-4 text-base mt-1"
                >
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>

          {/* Right: Offices + links */}
          <div className="flex flex-col gap-10">
            {/* Office locations */}
            <div>
              <span className="section-label" style={{ color: "#B8D4F0" }}>Our Offices</span>
              <div className="mt-4 flex flex-col gap-6">
                {offices.map((office) => (
                  <div key={office.city} className="flex flex-col gap-1.5 p-5 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#1E3A5F] to-[#4A90D9] flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z"/>
                          <circle cx="8" cy="6" r="1.5"/>
                        </svg>
                      </div>
                      <span className="text-base font-bold text-white" style={{ fontFamily: "Syne, sans-serif" }}>
                        {office.city}, {office.state}
                      </span>
                    </div>
                    <p className="text-sm text-white/50 pl-9" style={{ fontFamily: "Nunito Sans, sans-serif" }}>{office.address}</p>
                    <a href={`mailto:${office.email}`} className="text-sm text-[#4A90D9] hover:text-white transition-colors pl-9" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                      {office.email}
                    </a>
                    <a href={`tel:${office.phone}`} className="text-sm text-white/50 hover:text-white transition-colors pl-9" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                      {office.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs font-bold text-white/35 tracking-widest uppercase mb-4" style={{ fontFamily: "Syne, sans-serif" }}>Services</p>
                <ul className="flex flex-col gap-2.5">
                  {["Brand Strategy", "Visual Identity", "Digital Design", "Custom Builds"].map((s) => (
                    <li key={s}>
                      <a href="#services" className="text-sm text-white/55 hover:text-white transition-colors" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-bold text-white/35 tracking-widest uppercase mb-4" style={{ fontFamily: "Syne, sans-serif" }}>Company</p>
                <ul className="flex flex-col gap-2.5">
                  {["Our Work", "Pricing", "How It Works", "Contact"].map((s) => (
                    <li key={s}>
                      <a href="#contact" className="text-sm text-white/55 hover:text-white transition-colors" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                        {s}
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
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#1E3A5F] to-[#4A90D9] flex items-center justify-center">
              <span className="text-white font-bold text-xs" style={{ fontFamily: "Syne, sans-serif" }}>S</span>
            </div>
            <span className="text-sm font-bold text-white/75" style={{ fontFamily: "Syne, sans-serif" }}>Studio</span>
          </div>
          <p className="text-xs text-white/30" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
            © {new Date().getFullYear()} Studio Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy", "Terms"].map((l) => (
              <a key={l} href="#" className="text-xs text-white/30 hover:text-white/65 transition-colors" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
