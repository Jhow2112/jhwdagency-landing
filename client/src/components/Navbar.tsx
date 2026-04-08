/* Navbar — Contemporary Studio, Warm Geometric
   Sticky top nav with logo, links, and CTA pill */
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
          ? "bg-[#FAF7F4]/90 backdrop-blur-md shadow-sm border-b border-[#E8E0D5]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#C96442] to-[#E8A882] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-sm" style={{ fontFamily: 'Syne, sans-serif' }}>S</span>
          </div>
          <span className="text-[#0F0E0D] font-bold text-lg tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
            Studio
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-[#4A3F38] hover:text-[#C96442] transition-colors duration-200 relative group"
              style={{ fontFamily: 'Nunito Sans, sans-serif' }}
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#C96442] rounded-full transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="btn-terra inline-flex items-center px-5 py-2.5 text-sm"
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
          <span className={`block w-6 h-0.5 bg-[#0F0E0D] rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0F0E0D] rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#0F0E0D] rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-[#FAF7F4]/95 backdrop-blur-md border-b border-[#E8E0D5]`}
      >
        <nav className="container flex flex-col gap-1 py-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-medium text-[#4A3F38] hover:text-[#C96442] transition-colors border-b border-[#E8E0D5] last:border-0"
              style={{ fontFamily: 'Nunito Sans, sans-serif' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-terra inline-flex items-center justify-center mt-3 px-5 py-3 text-sm"
          >
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
