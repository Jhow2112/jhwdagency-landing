/* Navbar — Jeremy Howard Web Design
   Mobile: logo h-16 in h-20 bar — clearly visible, no clipping
   Desktop: logo h-24 in h-28 bar — large, prominent branding
   No emoji anywhere — all icons are inline SVG */
import { useState, useEffect } from "react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/jhwd-logo_27f82782.webp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "SEO & AEO", href: "/seo-aeo" },
    { label: "Work", href: "#work" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D1B2A]/95 backdrop-blur-md shadow-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Bar: h-20 mobile, h-28 desktop */}
      <div className="container flex items-center justify-between h-20 md:h-28">

        {/* Logo — h-14 mobile (fits in h-20 bar), h-24 desktop */}
        <a href="/" className="flex items-center group flex-shrink-0 py-1">
          <img
            src={LOGO_URL}
            alt="Jeremy Howard Web Design logo"
            className="h-14 md:h-24 w-auto object-contain group-hover:opacity-90 transition-opacity"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-semibold text-white/80 hover:text-white transition-colors duration-200 relative group"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#4A90D9] rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-white rounded-xl border border-white/30 hover:bg-white/15 transition-all duration-200"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Get Started
          </a>
        </div>

        {/* Mobile: hamburger only */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-1 flex-shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#0D1B2A] border-b border-white/10`}
      >
        <nav className="container flex flex-col py-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-base font-semibold text-white/80 hover:text-white transition-colors border-b border-white/8 last:border-0"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 mb-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white rounded-xl"
            style={{
              background: "linear-gradient(135deg, #1E3A5F, #4A90D9)",
              fontFamily: "Syne, sans-serif",
            }}
          >
            Get Started
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
