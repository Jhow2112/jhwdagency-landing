/* LogosCarousel — Contemporary Studio, Warm Geometric
   Infinite marquee of client logos with pause-on-hover */

const logos = [
  { name: "Bloom Bakery", abbr: "BB" },
  { name: "Peak Fitness", abbr: "PF" },
  { name: "Verdant Co.", abbr: "VC" },
  { name: "Harbor Law", abbr: "HL" },
  { name: "Solstice Spa", abbr: "SS" },
  { name: "Ridgeline Realty", abbr: "RR" },
  { name: "Craft & Co.", abbr: "CC" },
  { name: "Ember Eats", abbr: "EE" },
  { name: "Tidal Media", abbr: "TM" },
  { name: "Foxwood Studio", abbr: "FS" },
];

function LogoItem({ name, abbr }: { name: string; abbr: string }) {
  return (
    <div className="flex items-center gap-3 px-8 select-none">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#E8E0D5] to-[#D4C8BE] flex items-center justify-center flex-shrink-0">
        <span className="text-xs font-bold text-[#6B5C52]" style={{ fontFamily: "Syne, sans-serif" }}>{abbr}</span>
      </div>
      <span className="text-base font-semibold text-[#8A7A72] whitespace-nowrap" style={{ fontFamily: "Syne, sans-serif" }}>
        {name}
      </span>
    </div>
  );
}

export default function LogosCarousel() {
  const doubled = [...logos, ...logos];

  return (
    <section className="py-16 bg-white border-y border-[#E8E0D5] overflow-hidden">
      <div className="container mb-8">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-[#B0A098]" style={{ fontFamily: "Syne, sans-serif" }}>
          Trusted by local businesses across the country
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }} />

        <div className="flex overflow-hidden">
          <div className="flex marquee-track">
            {doubled.map((logo, i) => (
              <LogoItem key={`${logo.name}-${i}`} name={logo.name} abbr={logo.abbr} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
