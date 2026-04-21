/* ServicesSection — Jeremy Howard Web Design
   Services: Web Design & Development, Visual Identity, SEO & Local Search */
import { useEffect, useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Web Design & Development",
    description:
      "Fast, beautiful websites built for real businesses. Custom-designed on proven templates and live in days, not months. Hosting, updates, and support are all included.",
    tags: ["Custom Design", "Mobile-First", "Hosting Included"],
<<<<<<< Updated upstream
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/service-digital-blue-HMTqZKgc45AQW58YVHRsCA.webp",
    imageAlt: "Web design and development services illustration — custom websites for local businesses",
=======
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/portfolio-contractor-bgXiBQZvn3CX4CGsizQjKp.webp",
>>>>>>> Stashed changes
    color: "from-[#1E3A5F]/10 to-[#4A90D9]/5",
  },
  {
    number: "02",
    title: "Visual Identity",
    description:
      "Your website should look like it belongs to you. I create cohesive visual styles in color, typography, and layout that reflect your brand and build trust with visitors.",
    tags: ["Color & Typography", "Consistent Branding", "Professional Look"],
<<<<<<< Updated upstream
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/service-visual-blue-XZbzys4F3eFwQpn4ipiTFq.webp",
    imageAlt: "Visual identity and branding services illustration — color, typography, and layout for small businesses",
=======
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/portfolio-restaurant-aREJ6AvRtneKLgdTb2u3gm.webp",
>>>>>>> Stashed changes
    color: "from-[#4A90D9]/10 to-[#B8D4F0]/5",
  },
  {
    number: "03",
    title: "SEO & Local Search",
    description:
      "Get found by the customers who are already searching for you. I set up Google Business profiles, optimize your pages for local search, and make sure your site loads fast.",
    tags: ["Google Business", "Local SEO", "Page Speed"],
<<<<<<< Updated upstream
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/service-brand-blue-ceD9U4C6TzLE84JPXJRjXv.webp",
    imageAlt: "SEO and local search services illustration — Google Business Profile setup and page speed optimization",
=======
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/portfolio-counseling-nG9Npw57ZJtcFSmQsfdxd9.webp",
>>>>>>> Stashed changes
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
          alt={service.imageAlt}
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
    <section id="services" className="py-14 sm:py-20 md:py-24 bg-[#F4F7FA]" aria-labelledby="services-heading">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-14">
          <div className="flex flex-col gap-3 max-w-xl">
            <span className="section-label">What I Do</span>
            <h2 id="services-heading" className="text-4xl md:text-5xl font-extrabold text-[#0D1B2A] leading-tight" style={{ fontFamily: "Syne, sans-serif" }}>
              Everything your business needs to{" "}
              <span style={{ color: "#4A90D9" }}>get found online</span>.
            </h2>
          </div>
          <p className="text-base text-[#3D5A7A] max-w-xs leading-relaxed" style={{ fontFamily: "Nunito Sans, sans-serif" }}>
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
