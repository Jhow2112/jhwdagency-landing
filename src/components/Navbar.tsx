/* Navbar — Aralo Studio
   Lockup over dark hero (transparent) or solid forest (scrolled).
   On both, the lockup uses cream + terracotta (on-forest contrast).
   Desktop: 6 nav items + CTA, with a Services dropdown that consolidates
   Web Design / SEO Plans so the row fits at 1024px+. The /seo-aeo/
   educational page is reached from the footer + cross-links on /active-seo/.
   Mobile: hamburger menu with the dropdown's children rendered as
   flat indented entries (no nested interaction). */
import { useState, useEffect, useRef } from "react";
import Lockup from "./brand/Lockup";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href?: string; children?: NavChild[] };

const LINKS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "Web Design", href: "/#services" },
      { label: "SEO Plans", href: "/active-seo/" },
    ],
  },
  { label: "Industries", href: "/industries/" },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Blog", href: "/blog/" },
  { label: "Pricing", href: "/#pricing" },
];

const ChevronDown = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 12 12"
    fill="none"
    aria-hidden="true"
    className="flex-shrink-0"
  >
    <path
      d="M3 4.5l3 3 3-3"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click / Escape
  useEffect(() => {
    if (!openDropdown) return;
    const onDocClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [openDropdown]);

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
        <a
          href="/"
          aria-label="Aralo Studio home"
          className="flex items-center flex-shrink-0 py-1"
        >
          <Lockup markSize={28} primary="#f3efe6" accent="#9a4528" />
        </a>

        {/* Desktop nav — 6 items, dropdown for Services */}
        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((item) =>
            item.children ? (
              <div
                key={item.label}
                ref={openDropdown === item.label ? dropdownRef : undefined}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                  className="flex items-center gap-1.5 text-sm text-[rgba(243,239,230,0.72)] hover:text-[#f3efe6] transition-colors duration-200"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                >
                  {item.label}
                  <ChevronDown />
                </button>

                {/* Dropdown panel */}
                <div
                  className={`absolute left-0 top-full pt-2 transition-all duration-200 ${
                    openDropdown === item.label
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible -translate-y-1 pointer-events-none"
                  }`}
                >
                  <div
                    className="min-w-[200px] py-2 rounded-xl bg-[#1f2a22] border border-[rgba(243,239,230,0.16)] shadow-xl"
                    role="menu"
                  >
                    {item.children.map((c) => (
                      <a
                        key={c.label}
                        href={c.href}
                        role="menuitem"
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2.5 text-sm text-[rgba(243,239,230,0.72)] hover:text-[#f3efe6] hover:bg-[rgba(243,239,230,0.05)] transition-colors"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                      >
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-[rgba(243,239,230,0.72)] hover:text-[#f3efe6] transition-colors duration-200"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* Desktop CTA — bordered pill on dark */}
        <div className="hidden lg:block">
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
          className="lg:hidden flex flex-col justify-center gap-[5px] p-2 -mr-1 flex-shrink-0"
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

      {/* Mobile dropdown — flatten Services children as indented entries */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-[#1f2a22] border-b border-[rgba(243,239,230,0.16)]`}
      >
        <nav className="container flex flex-col py-3">
          {LINKS.map((item) =>
            item.children ? (
              <div key={item.label} className="border-b border-[rgba(243,239,230,0.12)] last:border-0">
                <p
                  className="pt-4 pb-2 text-xs uppercase tracking-widest text-[rgba(243,239,230,0.5)]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
                >
                  {item.label}
                </p>
                {item.children.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 pl-3 text-base text-[rgba(243,239,230,0.72)] hover:text-[#f3efe6] transition-colors"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                  >
                    {c.label}
                  </a>
                ))}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-4 text-base text-[rgba(243,239,230,0.72)] hover:text-[#f3efe6] transition-colors border-b border-[rgba(243,239,230,0.12)] last:border-0"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
              >
                {item.label}
              </a>
            )
          )}
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
