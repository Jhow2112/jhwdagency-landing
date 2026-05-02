/* Navbar — Aralo Studio
   Lockup over dark hero (transparent) or solid forest (scrolled).
   On both, the lockup uses cream + terracotta (on-forest contrast). */
import { useState, useEffect } from "react";
import Lockup from "./brand/Lockup";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "/#services" },
    { label: "Industries", href: "/industries/" },
    { label: "SEO & AEO", href: "/seo-aeo/" },
    { label: "SEO & Growth", href: "/active-seo/" },
    { label: "Work", href: "/#work" },
    { label: "Blog", href: "/blog/" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1f2a22]/95 backdrop-blur-md border-b border-[rgba(243,239,230,0.16)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Lockup — cream + terracotta for dark contexts */}
        <a href="/" aria-label="Aralo Studio home" className="flex items-center flex-shrink-0 py-1">
          <Lockup markSize={28} primary="#f3efe6" accent="#9a4528" />
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-[rgba(243,239,230,0.72)] hover:text-[#f3efe6] transition-colors duration-200"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA — bordered pill on dark */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] rounded-full border border-[rgba(243,239,230,0.32)] text-[#f3efe6] hover:bg-[rgba(243,239,230,0.08)] transition-colors"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, letterSpacing: "0.02em" }}
          >
            Get in touch
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
            className={`block w-6 h-[2px] bg-[#f3efe6] rounded transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#f3efe6] rounded transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#f3efe6] rounded transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-[#1f2a22] border-b border-[rgba(243,239,230,0.16)]`}
      >
        <nav className="container flex flex-col py-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-4 text-base text-[rgba(243,239,230,0.72)] hover:text-[#f3efe6] transition-colors border-b border-[rgba(243,239,230,0.12)] last:border-0"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 mb-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#9a4528] text-[#f3efe6]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "13px", letterSpacing: "0.02em" }}
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
