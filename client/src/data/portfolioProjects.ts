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
  /** Path to hero screenshot in /public, e.g. "/portfolio/foo-hero.png" */
  heroImage: string;
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
    heroImage: "/portfolio/crystal-howard-hero.png",
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
    liveUrl: "https://silvervalleypainting.netlify.app/",
    shortDescription:
      "A full-featured site for a growing painting and construction company with commercial clients.",
    services: ["Web Design", "Copywriting", "SEO", "Hosting"],
    heroImage: "/portfolio/silver-valley-hero.png",
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
    services: ["Web Design", "Copywriting", "SEO", "Hosting"],
    heroImage: "/portfolio/crisis2comfort-hero.png",
    heroImageAlt:
      "Crisis to Comfort Counseling homepage — a warm, professional presence for a Treasure Valley counseling practice.",
    challenge:
      "A counseling practice needed a website that felt calm and approachable, not clinical. Potential clients searching for therapy are already anxious, and the site needed to lower the barrier to reaching out — not add to it with sales-heavy copy or a cluttered layout.",
    solution:
      "Clean, warm design with clear service descriptions, easy-to-find contact information, and a layout that feels reassuring rather than overwhelming. Built with on-page SEO so the practice ranks for local counseling searches across the Treasure Valley.",
    keyFeatures: [
      "Mobile-responsive design",
      "Contact form built for low-friction first contact",
      "Clear service and modality descriptions",
      "Calming visual design — warm tones, generous whitespace",
      "On-page SEO targeting local counseling keywords",
      "Fast load times across mobile and desktop",
    ],
    metaTitle: "Crisis to Comfort Counseling Website | Aralo Studio Portfolio",
    metaDescription:
      "Case study: a calm, approachable website for a Treasure Valley, Idaho counseling practice. Designed and built by Aralo Studio.",
  },
];

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
