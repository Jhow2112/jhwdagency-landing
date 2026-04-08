/* ServicesSection — Contemporary Studio, Warm Geometric
   3-column services grid with hover lift, terracotta accents, and service images */
import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description:
      "We help you define who you are, who you serve, and how to communicate it. From positioning to messaging, we build the foundation your business stands on.",
    tags: ["Positioning", "Messaging", "Voice & Tone"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/service-brand-kPBmRjERHn6nWYzjEoXhWj.webp",
    color: "from-[#C96442]/10 to-[#E8A882]/5",
  },
  {
    number: "02",
    title: "Visual Identity",
    description:
      "Logos, color systems, typography, and brand guidelines that make your business instantly recognizable and consistently beautiful across every touchpoint.",
    tags: ["Logo Design", "Color Systems", "Brand Guidelines"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/service-visual-nkdjm7guY6pLJDmJgyAa85.webp",
    color: "from-[#8A7A72]/10 to-[#C96442]/5",
  },
  {
    number: "03",
    title: "Digital Design",
    description:
      "Fast, beautiful websites designed for real businesses. Custom-built on proven templates, live in days — not months. Hosting, updates, and support included.",
    tags: ["Web Design", "Hosting", "Ongoing Support"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/service-digital-7ntY8u7Myx9BEXUXyYKzhW.webp",
    color: "from-[#E8A882]/15 to-[#FAF7F4]/5",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-[#E8E0D5] bg-white/70 hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s, box-shadow 0.3s ease, translate 0.3s ease`,
      }}
    >
      {/* Image area */}
      <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${service.color}`}>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Number badge */}
        <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm">
          <span className="text-xs font-bold text-[#C96442]" style={{ fontFamily: "Syne, sans-serif" }}>{service.number}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3 className="text-xl font-bold text-[#0F0E0D]" style={{ fontFamily: "Syne, sans-serif" }}>
          {service.title}
        </h3>
        <p className="text-sm text-[#6B5C52] leading-relaxed flex-1" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
          {service.description}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-[#F5EDE7] text-[#C96442] font-semibold"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Arrow link */}
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C96442] hover:gap-3 transition-all duration-200 mt-1"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          Learn more
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#FAF7F4]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="section-label">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F0E0D] leading-tight" style={{ fontFamily: "Syne, sans-serif" }}>
              Everything your brand needs to{" "}
              <span style={{ color: "#C96442" }}>stand out</span>.
            </h2>
          </div>
          <p className="text-base text-[#6B5C52] max-w-xs leading-relaxed" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
            From strategy to pixels — we handle the full picture so you don't have to.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
