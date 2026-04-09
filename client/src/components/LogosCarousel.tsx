/* ValueStrip — replaces the logos carousel until real client logos are available
   Shows honest, specific value props instead of fake client names */

const props = [
  { icon: "⚡", label: "Live in 5–10 days" },
  { icon: "📍", label: "Meridian, ID — serving clients everywhere" },
  { icon: "🔒", label: "No long-term contracts" },
  { icon: "📱", label: "Mobile-first design" },
  { icon: "🛠️", label: "Hosting & support included" },
  { icon: "📞", label: "Meet via Zoom or in person" },
];

export default function LogosCarousel() {
  const doubled = [...props, ...props];

  return (
    <section className="py-10 bg-white border-y border-[#C8DCF0] overflow-hidden">
      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, transparent)" }} />

        <div className="flex overflow-hidden">
          <div className="flex marquee-track">
            {doubled.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 px-8 select-none whitespace-nowrap">
                <span className="text-base">{item.icon}</span>
                <span className="text-sm font-semibold text-[#3D5A7A]" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
                  {item.label}
                </span>
                <span className="ml-6 text-[#C8DCF0] text-lg">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
