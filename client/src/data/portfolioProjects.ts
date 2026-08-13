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
      "Crystal Howard Mortgage homepage: luxury and new construction lending in Garden City, Idaho.",
    challenge:
      "A luxury and new construction mortgage specialist needed a site that positioned her as a high-end expert, not a generic loan officer. The site had to speak to jumbo loan buyers, builders, and self-employed borrowers with complex financial situations, audiences that won't engage with template-driven, brokerage-issued sites.",
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
    filterCategory: "Construction",
    location: "North Idaho (Idaho Panhandle & Western Montana)",
    liveUrl: "https://silvervalleypainting.com/",
    shortDescription:
      "A full-featured site for a growing painting and construction company with commercial clients.",
    services: ["Web Design", "Copywriting", "SEO", "Hosting"],
    heroImage: "/portfolio/silver-valley-hero-1440.jpg",
    heroWidth: 1440,
    heroHeight: 723,
    heroImageAlt:
      "Silver Valley Painting & Construction homepage: interior, exterior, and commercial work across North Idaho.",
    challenge:
      "A growing painting and construction company needed a professional website to match their growing reputation. They had commercial clients like Best Buy, Idaho Fish & Game, and NexGen Building Group, but no online presence to show for it, which was costing them credibility on bigger-ticket bids.",
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
      "Crisis to Comfort Counseling homepage: a warm, professional presence for a Treasure Valley counseling practice.",
    challenge:
      "A counseling practice needed a website that felt calm and approachable, not clinical. Potential clients searching for therapy are already anxious, and the site needed to lower the barrier to reaching out, not add to it with sales-heavy copy or a cluttered layout. The practice also wanted to sell related products directly from the site without bolting on a separate platform that broke the design.",
    solution:
      "Clean, warm design with clear service descriptions, easy-to-find contact information, and a layout that feels reassuring rather than overwhelming. Built with on-page SEO so the practice ranks for local counseling searches across the Treasure Valley. Ecwid was integrated for the product side so the client can manage inventory, take orders, and process payments without leaving the site or compromising the brand.",
    keyFeatures: [
      "Mobile-responsive design",
      "Contact form built for low-friction first contact",
      "Clear service and modality descriptions",
      "Calming visual design: warm tones, generous whitespace",
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
      "Ice Ice Shavey homepage: Hawaiian-style shave ice for events across North Idaho and Eastern Washington.",
    challenge:
      "Ice Ice Shavey is a mobile Hawaiian shave ice business that lives or dies by event bookings: fairs, festivals, and weddings across North Idaho and Eastern Washington. Founded in 2024, it needed a website that captured the fun, summery energy of the brand while making two things effortless: browsing the flavor lineup and booking the truck for an event.",
    solution:
      "A bright, playful single-page site built around the booking goal. A bold hero states exactly what they do and where, a scrolling banner reinforces the key selling points (20+ flavors, available for events, est. 2024), and prominent \"See Our Flavors\" and \"Book Us for an Event\" calls to action send visitors straight to what they came for. A tap-to-call number, social links, and an events section round it out, all tuned for the phones most customers browse on.",
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
  {
    slug: "nexgen-building-group",
    name: "NEXGEN Building Group",
    industry: "Construction & Custom Homes",
    filterCategory: "Construction",
    location: "Cataldo, Idaho",
    liveUrl: "https://nexgenbuilt.net",
    shortDescription:
      "A dark, high-contrast site for a North Idaho builder covering custom homes, commercial, barndominiums, and pole buildings.",
    services: ["Web Design", "Copywriting", "SEO", "Hosting"],
    heroImage: "/portfolio/nexgen-hero-1440.jpg",
    heroWidth: 1440,
    heroHeight: 762,
    heroImageAlt:
      "NEXGEN Building Group homepage: custom homes, commercial construction, and pole buildings across North Idaho.",
    challenge:
      "NEXGEN Building Group builds four very different things — custom homes, commercial buildings, barndominiums, and pole buildings — for four very different buyers. A homeowner planning a custom build and a developer scoping a tenant improvement need to see themselves on the page within seconds, without wading through the other three. The company also had real differentiators that were invisible online: 45+ years of combined hands-on experience and a lifetime structural warranty on every build.",
    solution:
      "A dark, high-contrast site that leads with the work itself — full-bleed build photography behind a headline that names what they do and where. Each of the four service lines gets its own dedicated page so every audience lands somewhere written for them, and the lifetime warranty is stated in the hero rather than buried in fine print. An eight-step process page answers the \"what does this actually look like\" question that stalls most construction inquiries, and the Faith • Family • Build line carries the family-owned positioning without turning it into a sermon.",
    keyFeatures: [
      "Dedicated service pages for custom homes, commercial construction, barndominiums, and pole buildings",
      "Lifetime structural warranty surfaced in the hero, not the footer",
      "Eight-step build process page from consultation to final walkthrough",
      "Full-bleed build photography as the primary visual language",
      "Google review testimonials section",
      "Service area pages for North Idaho and Western Montana",
      "Tap-to-call header number plus a project inquiry form",
      "SEO-optimized for regional construction and custom home searches",
    ],
    metaTitle: "NEXGEN Building Group Website | Aralo Studio Portfolio",
    metaDescription:
      "Case study: a multi-service construction website for a Cataldo, Idaho builder covering custom homes, commercial, barndominiums, and pole buildings. Designed and built by Aralo Studio.",
  },
  {
    slug: "cda-structures",
    name: "CDA Structures, Inc.",
    industry: "Post-Frame & Steel Construction",
    filterCategory: "Construction",
    location: "Hayden, Idaho",
    liveUrl: "https://cdastructures.com",
    shortDescription:
      "A WordPress-to-custom rebuild for a three-state pole building and steel structure contractor.",
    services: ["Web Design", "Copywriting", "SEO", "Hosting"],
    heroImage: "/portfolio/cdastructures-hero-1440.jpg",
    heroWidth: 1440,
    heroHeight: 762,
    heroImageAlt:
      "CDA Structures homepage: pole buildings, shops, garages, and steel structures across Idaho, Washington, and Montana.",
    challenge:
      "CDA Structures had hundreds of completed builds across Idaho, Washington, and Montana, a public works license, and projects for the City of Coeur d'Alene, Idaho Parks and Recreation, and the North Idaho Armory. None of that came across on an aging WordPress site that had fallen behind the business. Slow, dated, and hard to update, it made an established contractor look smaller than the work it had actually done — a real problem when the goal is winning quote requests against competitors with sharper sites.",
    solution:
      "A ground-up custom rebuild off WordPress. The new site is fast, mobile-first, and organized around how buyers actually shop: by building type. A structured Buildings directory covers shops and garages, barndominiums, agricultural and equestrian, and commercial, while a project gallery and projects map turn decades of completed work into visible proof. \"Get a Free Quote\" is the single, repeated call to action throughout, and the public works credential and municipal client list are given the prominence they earn.",
    keyFeatures: [
      "Full rebuild off an outdated WordPress site onto a fast custom build",
      "Buildings directory organized by type: shops and garages, barndominiums, agricultural and equestrian, commercial",
      "Project gallery and projects map showing completed work across three states",
      "Post frame, all steel, and conventional construction methods explained side by side",
      "Free quote request form as the primary conversion path",
      "Municipal and public works credentials given prominent placement",
      "FAQ section handling common pole building questions before the sales call",
      "SEO-optimized for pole building and steel structure searches across ID, WA, and MT",
    ],
    metaTitle: "CDA Structures Website | Aralo Studio Portfolio",
    metaDescription:
      "Case study: a WordPress-to-custom website rebuild for a Hayden, Idaho pole building and steel structure contractor serving ID, WA, and MT. Designed and built by Aralo Studio.",
  },
  {
    slug: "dirty-ducts-done-right",
    name: "Dirty Ducts Done Right",
    industry: "Home Services",
    filterCategory: "Home Services",
    location: "Whidbey Island & Snohomish County, Washington",
    liveUrl: "https://dirtyductsdoneright.com",
    shortDescription:
      "A clean, owner-forward site for a one-man duct cleaning business competing against call-center franchises.",
    services: ["Web Design", "Copywriting", "SEO", "Hosting"],
    heroImage: "/portfolio/dirtyducts-hero-1440.jpg",
    heroWidth: 1440,
    heroHeight: 762,
    heroImageAlt:
      "Dirty Ducts Done Right homepage: air duct, dryer vent, and mini-split cleaning across Whidbey Island and Snohomish County.",
    challenge:
      "Duct cleaning is a category crowded with call centers, bait-and-switch pricing, and franchises that dispatch whoever is available. Nate started Dirty Ducts Done Right at 53 after a career in sales and leadership and 2,300 wood stove installations, and his advantage is precisely that he shows up himself. The site had to make that single fact impossible to miss, while still looking credible enough that a homeowner trusts a one-man operation with their house.",
    solution:
      "A clean, bright site built around one line: done by the owner, not a subcontractor. The brand's rubber-duck logo keeps it approachable while generous whitespace and restrained typography keep it professional — the balance a solo operator needs to look established without looking corporate. Bonded, insured, same-day service, and free estimates sit directly under the hero calls to action, and a tap-to-call number stays fixed in the header because this is a phone-call business. An About Nate page does the trust work, and a Guides section builds organic search presence around the questions homeowners ask before they book.",
    keyFeatures: [
      "Owner-not-subcontractor positioning as the central message",
      "Tap-to-call and text-first CTAs throughout, matched to how customers actually book",
      "Trust signals — bonded, insured, same-day service, free estimates — directly under the hero",
      "Service pages for air duct, dryer vent, and mini-split cleaning",
      "Before-and-after photography showing real results",
      "About Nate page carrying the personal credibility a solo operation depends on",
      "Guides section targeting homeowner research searches",
      "Service area coverage for Whidbey Island, Mukilteo, Everett, Camano Island, and Snohomish County",
    ],
    metaTitle: "Dirty Ducts Done Right Website | Aralo Studio Portfolio",
    metaDescription:
      "Case study: a clean, owner-forward website for an air duct and dryer vent cleaning business serving Whidbey Island and Snohomish County, Washington. Designed and built by Aralo Studio.",
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
