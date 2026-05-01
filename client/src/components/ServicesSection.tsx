/* ServicesSection — Aralo Studio
   Services: Web Design & Development, Visual Identity, SEO & Local Search */
import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "Fast, beautiful websites built for real businesses. Custom-designed on proven templates and live in days, not months. Hosting, updates, and support are all included.",
    tags: ["Custom Design", "Mobile-First", "Hosting Included"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/portfolio-contractor-bgXiBQZvn3CX4CGsizQjKp.webp",
    color: "bg-[#e7e2d6]",
  },
  {
    number: "02",
    title: "Visual Identity",
    description:
      "Your website should look like it belongs to you. I create cohesive visual styles in color, typography, and layout that reflect your brand and build trust with visitors.",
    tags: ["Color & Typography", "Consistent Branding", "Professional Look"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/portfolio-restaurant-aREJ6AvRtneKLgdTb2u3gm.webp",
    color: "bg-[#e7e2d6]",
  },
  {
    number: "03",
    title: "SEO & Local Search",
    description:
      "Get found by the customers who are already searching for you. I set up Google Business profiles, optimize your pages for local search, and make sure your site loads fast.",
    tags: ["Google Business", "Local SEO", "Page Speed"],
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/portfolio-counseling-nG9Npw57ZJtcFSmQsfdxd9.webp",
    color: "bg-[#e7e2d6]",
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
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-[#d6d2c5] bg-white/70 hover:shadow-xl transition-all duration-400 hover:-translate-y-1"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s, box-shadow 0.3s ease`,
      }}
    >
      {/* Image area */}
      <div className={`relative h-48 overflow-hidden ${service.color}`}>
        <img
          src={service.image}
          alt={service.title}
          width="1920"
          height="1434"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
        {/* Number badge */}
        <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-white/85 backdrop-blur-sm flex items-center justify-center shadow-sm">
          <span className="text-xs font-bold text-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>{service.number}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3 className="text-xl font-bold text-[#1f2a22]" style={{ fontFamily: "Inter, sans-serif" }}>
          {service.title}
        </h3>
        <p className="text-sm text-[#2f3b32] leading-relaxed flex-1" style={{ fontFamily: "Inter, sans-serif" }}>
          {service.description}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-[#e7e2d6] text-[#1f2a22] font-semibold"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Arrow link */}
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#9a4528] hover:gap-3 transition-all duration-200 mt-1"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Get started
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
    <section id="services" className="py-14 sm:py-20 md:py-24 bg-[#f3efe6]" aria-labelledby="services-heading">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-14">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="section-label">What I Do</span>
            <h2 id="services-heading" className="text-4xl md:text-5xl font-extrabold text-[#1f2a22] leading-tight" style={{ fontFamily: "Inter, sans-serif" }}>
              Everything your business needs to{" "}
              <span style={{ color: "#9a4528" }}>get found online</span>.
            </h2>
          </div>
          <p className="text-base text-[#2f3b32] max-w-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
            From design to launch to ongoing support, I handle it all so you can focus on your business.
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
