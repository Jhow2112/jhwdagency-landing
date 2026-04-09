/* ServicesSection — Contemporary Studio, Cool Blue */
import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Brand Strategy",
    description:
      "We help you define who you are, who you serve, and how to communicate it. From positioning to messaging, we build the foundation your business stands on.",
    tags: ["Positioning", "Messaging", "Voice & Tone"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/service-brand-blue-ceD9U4C6TzLE84JPXJRjXv.webp",
    color: "from-[#1E3A5F]/10 to-[#4A90D9]/5",
  },
  {
    number: "02",
    title: "Visual Identity",
    description:
      "Logos, color systems, typography, and brand guidelines that make your business instantly recognizable and consistently beautiful across every touchpoint.",
    tags: ["Logo Design", "Color Systems", "Brand Guidelines"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/service-visual-blue-XZbzys4F3eFwQpn4ipiTFq.webp",
    color: "from-[#4A90D9]/10 to-[#B8D4F0]/5",
  },
  {
    number: "03",
    title: "Digital Design",
    description:
      "Fast, beautiful websites designed for real businesses. Custom-built on proven templates, live in days — not months. Hosting, updates, and support included.",
    tags: ["Web Design", "Hosting", "Ongoing Support"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/service-digital-blue-HMTqZKgc45AQW58YVHRsCA.webp",
    color: "from-[#B8D4F0]/20 to-[#F4F7FA]/5",
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
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-[#C8DCF0] bg-white/70 hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s, box-shadow 0.3s ease`,
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
        <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/85 backdrop-blur-sm flex items-center justify-center shadow-sm">
          <span className="text-xs font-bold text-[#1E3A5F]" style={{ fontFamily: "Syne, sans-serif" }}>{service.number}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3 className="text-xl font-bold text-[#0D1B2A]" style={{ fontFamily: "Syne, sans-serif" }}>
          {service.title}
        </h3>
        <p className="text-sm text-[#3D5A7A] leading-relaxed flex-1" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
          {service.description}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-[#EEF4FB] text-[#1E3A5F] font-semibold"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Arrow link */}
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4A90D9] hover:gap-3 transition-all duration-200 mt-1"
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
    <section id="services" className="py-24 bg-[#F4F7FA]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="section-label">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D1B2A] leading-tight" style={{ fontFamily: "Syne, sans-serif" }}>
              Everything your brand needs to{" "}
              <span style={{ color: "#4A90D9" }}>stand out</span>.
            </h2>
          </div>
          <p className="text-base text-[#3D5A7A] max-w-xs leading-relaxed" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
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
