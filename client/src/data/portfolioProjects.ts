/* Portfolio project data — Aralo Studio
   Single source of truth for all case studies.
   Used by:
     - App.tsx (Wouter routes)
     - entry-server.tsx (SSR rendering)
     - prerender.mjs (per-route meta tags + sitemap, via tsx)
     - PortfolioHub.tsx, WorkSection.tsx (rendering)
   To add a new project: append to PORTFOLIO_PROJECTS below.
   Slug must NOT include the "/portfolio/" prefix or any trailing slash. */

export type PortfolioProject = {
  /** URL slug, no slashes. Final path will be /portfolio/{slug}/ */
  slug: string;
  /** Full client / business name */
  name: string;
  /** Long-form industry label, shown on the case study page */
  industry: string;
  /** Filter category — used by the hub page filter buttons. Multiple
      projects can share a filter category. */
  filterCategory: string;
  /** Display location of the client */
  location: string;
  /** Live site URL (external) */
  liveUrl: string;
  /** One-line description used on grid cards */
  shortDescription: string;
  /** Services delivered, shown in the case study metadata strip */
  services: string[];
  /** Path to the hero screenshot in /public. Points at the 1440w variant;
      smaller responsive widths (480/960) are derived by heroSrcSet(). */
  heroImage: string;
  /** Intrinsic width/height of heroImage, used to reserve layout space and
      avoid CLS where the image renders at its natural aspect (case study hero). */
  heroWidth?: number;
  heroHeight?: number;
  /** Optional alt text override. Defaults to "{name} website screenshot". */
  heroImageAlt?: string;
  /** Optional gallery images shown after the Key Features section. */
  galleryImages?: { src: string; alt: string }[];
  /** "The Challenge" — 2-3 sentences */
  challenge: string;
  /** "The Solution" — 2-3 sentences */
  solution: string;
  /** Notable features of the build, rendered as a bullet list */
  keyFeatures: string[];
  /** <title> for the case study page */
  metaTitle: string;
  /** <meta name="description"> for the case study page */
  metaDescription: string;
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    slug: "crystal-howard-mortgage",
    name: "Crystal Howard Mortgage",
    industry: "Mortgage & Finance",
    filterCategory: "Mortgage & Finance",
    location: "Garden City, Idaho",
    liveUrl: "https://crystalhowardmortgage.com",
    shortDescription:
      "A multi-page mortgage site for jumbo, construction, and complex-borrower specialists.",
    services: ["Web Design", "Copywriting", "SEO", "Hosting"],
    heroImage: "/portfolio/crystal-howard-hero-1440.jpg",
    heroWidth: 1440,
    heroHeight: 775,
    heroImageAlt:
      "Crystal Howard Mortgage homepage — luxury and new construction lending in Garden City, Idaho.",
    challenge:
      "A luxury and new construction mortgage specialist needed a site that positioned her as a high-end expert, not a generic loan officer. The site had to speak to jumbo loan buyers, builders, and self-employed borrowers with complex financial situations — audiences that won't engage with template-driven, brokerage-issued sites.",
    solution:
      "A multi-page site with dedicated landing pages for each specialty: jumbo loans, construction financing, builder programs, renovation loans, and bank statement loans. Professional copywriting tailored to high-value borrowers, paired with a clean visual identity that communicates competence and trust before the first scroll.",
    keyFeatures: [
      "6+ specialty landing pages (jumbo, construction, builder, renovation, bank statement, relocation)",
      "Mortgage application integration (Fairway)",
      "Builder partner section",
      "Idaho relocation guide",
      "Blog section for ongoing content",
      "SEO-optimized for Idaho mortgage keywords",
      "NMLS compliance built into the footer and disclosures",
      "Mobile-responsive across every page",
    ],
    metaTitle: "Crystal Howard Mortgage Website | Aralo Studio Portfolio",
    metaDescription:
      "Case study: a multi-page mortgage website for a Garden City, Idaho jumbo and construction lending specialist. Designed and built by Aralo Studio.",
  },
  {
    slug: "silver-valley-painting",
    name: "Silver Valley Painting & Construction",
    industry: "Painting & Construction",
    filterCategory: "Painting & Construction",
    location: "North Idaho (Idaho Panhandle & Western Montana)",
    liveUrl: "https://silvervalleypainting.com/",
    shortDescription:
      "A full-featured site for a growing painting and construction company with commercial clients.",
    services: ["Web Design", "Copywriting", "SEO", "Hosting"],
    heroImage: "/portfolio/silver-valley-hero-1440.jpg",
    heroWidth: 1440,
    heroHeight: 723,
    heroImageAlt:
      "Silver Valley Painting & Construction homepage — interior, exterior, and commercial work across North Idaho.",
    challenge:
      "A growing painting and construction company needed a professional website to match their growing reputation. They had commercial clients like Best Buy, Idaho Fish & Game, and NexGen Building Group — but no online presence to show for it, which was costing them credibility on bigger-ticket bids.",
    solution:
      "A full-featured site with a project gallery, testimonials section, detailed service pages, and a commercial client logo strip that immediately communicates credibility. Service area pages targeting specific cities across North Idaho and Western Montana so the site ranks for the searches that actually generate work.",
    keyFeatures: [
      "Project photo gallery",
      "Commercial client logo showcase (Best Buy, Idaho Fish & Game, NexGen)",
      "Service area pages for North Idaho and Western Montana cities",
      "Testimonials section",
      "Detailed service breakdowns: interior painting, exterior painting, drywall, construction",
      "Contact form with project-type qualifiers",
      "Mobile-responsive throughout",
      "SEO-optimized for regional painting and construction keywords",
    ],
    metaTitle: "Silver Valley Painting Website | Aralo Studio Portfolio",
    metaDescription:
      "Case study: a full-featured website for a North Idaho painting and construction company with commercial clients. Designed and built by Aralo Studio.",
  },
  {
    slug: "crisis-to-comfort",
    name: "Crisis to Comfort Counseling",
    industry: "Counseling & Therapy",
    filterCategory: "Counseling",
    location: "Treasure Valley, Idaho",
    liveUrl: "https://crisis2comfort.com",
    shortDescription:
      "A calm, approachable counseling website that lowers the barrier to reach out.",
    services: ["Web Design", "Copywriting", "SEO", "E-commerce Integration", "Hosting"],
    heroImage: "/portfolio/crisis2comfort-hero-1440.jpg",
    heroWidth: 1440,
    heroHeight: 710,
    heroImageAlt:
      "Crisis to Comfort Counseling homepage — a warm, professional presence for a Treasure Valley counseling practice.",
    challenge:
      "A counseling practice needed a website that felt calm and approachable, not clinical. Potential clients searching for therapy are already anxious, and the site needed to lower the barrier to reaching out — not add to it with sales-heavy copy or a cluttered layout. The practice also wanted to sell related products directly from the site without bolting on a separate platform that broke the design.",
    solution:
      "Clean, warm design with clear service descriptions, easy-to-find contact information, and a layout that feels reassuring rather than overwhelming. Built with on-page SEO so the practice ranks for local counseling searches across the Treasure Valley. Ecwid was integrated for the product side so the client can manage inventory, take orders, and process payments without leaving the site or compromising the brand.",
    keyFeatures: [
      "Mobile-responsive design",
      "Contact form built for low-friction first contact",
      "Clear service and modality descriptions",
      "Calming visual design — warm tones, generous whitespace",
      "Ecwid e-commerce integration for selling products directly from the site",
      "On-page SEO targeting local counseling keywords",
      "Fast load times across mobile and desktop",
    ],
    metaTitle: "Crisis to Comfort Counseling | Aralo Studio Portfolio",
    metaDescription:
      "Case study: a calm, approachable website for a Treasure Valley, Idaho counseling practice. Designed and built by Aralo Studio.",
  },
  {
    slug: "pertch",
    name: "Pertch",
    industry: "Software & SaaS",
    filterCategory: "Software & SaaS",
    location: "Online · SaaS",
    liveUrl: "https://pertch.app/",
    shortDescription:
      "A conversion-focused marketing site for a real-time AI sales-coaching tool, in a neo-brutalist control-room style.",
    services: ["Web Design", "Brand Identity", "Copywriting", "SEO"],
    heroImage: "/portfolio/pertch-hero-1440.jpg",
    heroWidth: 1440,
    heroHeight: 789,
    heroImageAlt:
      "Pertch website homepage, designed and built by Aralo Studio.",
    challenge:
      "Pertch is a brand-new kind of product — an AI sales coach that listens to live calls and surfaces a single tactical prompt at just the right moment. The website had to make an unfamiliar, abstract tool instantly understandable to skeptical sales professionals: powerful but not gimmicky, clear at a glance, and honest about what an early product actually does.",
    solution:
      "A neo-brutalist \"control room\" website that makes the live-coaching idea tangible. Dark matte surfaces, cyan live-signal accents, and terminal-style labels frame the product as a precise instrument rather than a flashy gadget. A sharp hero message, a how-it-works walkthrough, custom product mockups, and commercially credible copy carry a skeptical visitor from confusion to a free trial. Built on Astro for near-instant loads, with full SEO, Open Graph, and structured data.",
    keyFeatures: [
      "Neo-brutalist \"control room\" design system: dark matte surfaces, cyan live-signal accents, terminal-style labels",
      "Conversion-focused hero with a single clear message and primary call to action",
      "How-it-works, features, pricing, and FAQ sections that explain an unfamiliar product",
      "Custom product mockups that make an abstract real-time tool tangible",
      "Commercially credible copywriting tuned for skeptical sales professionals",
      "Custom brand identity: logo, wordmark, and visual language",
      "Fast static Astro build with full SEO, Open Graph, and structured data",
      "Fully responsive across desktop and mobile",
    ],
    metaTitle: "Pertch SaaS Website | Aralo Studio Portfolio",
    metaDescription:
      "Case study: a neo-brutalist marketing website for Pertch, a real-time AI sales-coaching tool. Designed and built by Aralo Studio.",
  },
  {
    slug: "ice-ice-shavey",
    name: "Ice Ice Shavey",
    industry: "Food & Beverage",
    filterCategory: "Food & Beverage",
    location: "North Idaho & Eastern Washington",
    liveUrl: "https://iceiceshavey.net",
    shortDescription:
      "A bright, booking-focused site for a mobile Hawaiian shave ice business serving events across North Idaho and Eastern WA.",
    services: ["Web Design", "Copywriting", "SEO", "Hosting"],
    heroImage: "/portfolio/iceiceshavey-hero-1440.jpg",
    heroWidth: 1440,
    heroHeight: 791,
    heroImageAlt:
      "Ice Ice Shavey homepage — Hawaiian-style shave ice for events across North Idaho and Eastern Washington.",
    challenge:
      "Ice Ice Shavey is a mobile Hawaiian shave ice business that lives or dies by event bookings — fairs, festivals, and weddings across North Idaho and Eastern Washington. Founded in 2024, it needed a website that captured the fun, summery energy of the brand while making two things effortless: browsing the flavor lineup and booking the truck for an event.",
    solution:
      "A bright, playful single-page site built around the booking goal. A bold hero states exactly what they do and where, a scrolling banner reinforces the key selling points (20+ flavors, available for events, est. 2024), and prominent \"See Our Flavors\" and \"Book Us for an Event\" calls to action send visitors straight to what they came for. A tap-to-call number, social links, and an events section round it out — all tuned for the phones most customers browse on.",
    keyFeatures: [
      "Playful, summery design that matches the brand's energy",
      "Dual primary CTAs: browse flavors and book the truck for an event",
      "Flavors showcase highlighting 20+ flavors",
      "Menu section",
      "Events section for fairs, festivals, and weddings",
      "Tap-to-call phone number in the header",
      "Instagram and social media integration",
      "Animated selling-point marquee",
      "Mobile-first, fast-loading build",
      "On-page SEO targeting North Idaho and Eastern Washington event searches",
    ],
    metaTitle: "Ice Ice Shavey Website | Aralo Studio Portfolio",
    metaDescription:
      "Case study: a playful, booking-focused website for a Hawaiian shave ice business serving events across North Idaho and Eastern Washington. Designed and built by Aralo Studio.",
  },
];

/** Responsive widths pre-generated for every hero image (see
    /public/portfolio/*-{480,960,1440}.jpg, produced with sips). */
const HERO_SRCSET_WIDTHS = [480, 960, 1440];

/** Build a srcset string from a heroImage path. heroImage points at the
    1440w variant (e.g. "/portfolio/foo-hero-1440.jpg"); this swaps in the
    smaller widths so the browser downloads the size it actually needs. */
export function heroSrcSet(heroImage: string): string {
  const stem = heroImage.replace(/-1440\.jpg$/, "");
  return HERO_SRCSET_WIDTHS.map((w) => `${stem}-${w}.jpg ${w}w`).join(", ");
}

/** Find a project by slug. */
export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug);
}

/** Unique filter categories present in the data, in declaration order. */
export function getFilterCategories(): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const p of PORTFOLIO_PROJECTS) {
    if (!seen.has(p.filterCategory)) {
      seen.add(p.filterCategory);
      out.push(p.filterCategory);
    }
  }
  return out;
}
