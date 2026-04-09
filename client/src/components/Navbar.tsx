/* Navbar — Jeremy Howard Web Design
   Logo is large and prominent — triple the original size
   Transparent over hero, frosted glass on scroll */
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
    { label: "Work", href: "#work" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D1B2A]/90 backdrop-blur-md shadow-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20 md:h-24">
        {/* Logo — large and prominent */}
        <a href="#" className="flex items-center group flex-shrink-0">
          <img
            src={LOGO_URL}
            alt="Jeremy Howard Web Design"
            className="h-16 md:h-20 w-auto object-contain group-hover:opacity-90 transition-opacity"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </a>

        {/* Desktop Nav */}
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

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 text-sm font-bold text-white rounded-xl border border-white/30 hover:bg-white/15 transition-all duration-200"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-[#0D1B2A]/95 backdrop-blur-md border-b border-white/10`}
      >
        <nav className="container flex flex-col gap-1 py-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-semibold text-white/80 hover:text-white transition-colors border-b border-white/10 last:border-0"
              style={{ fontFamily: "Nunito Sans, sans-serif" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center mt-3 px-5 py-3 text-sm font-bold text-white rounded-xl border border-white/30 hover:bg-white/15 transition-all"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
