/* Landing page data — Jeremy Howard Web Design
   Single source of truth for city + industry landing pages.
   Used by:
     - App.tsx (Wouter routes)
     - entry-server.tsx (SSR rendering)
     - prerender.mjs (per-route meta tags via tsx)
     - Footer.tsx (Service Areas + Industries We Serve columns)
   To add a new city/industry: append to CITIES or INDUSTRIES below.
   Slugs must start with "/" and contain no trailing slash. */

export type LandingPageData = {
  /** URL path, no trailing slash. Used as Wouter route + sitemap entry. */
  slug: string;
  /** Display label for footer + nav */
  label: string;
  /** <title> tag */
  metaTitle: string;
  /** <meta name="description"> */
  metaDescription: string;
  /** Hero H1 — split across two lines visually if needed */
  heading: string;
  /** Optional accent word in the heading (rendered in blue) */
  headingAccent?: string;
  /** Hero subtitle — short paragraph beneath H1 */
  subheading: string;
  /** Eyebrow label above the bio block */
  bodyEyebrow: string;
  /** H2 above the longer body paragraph */
  bodyHeading: string;
  /** Longer paragraph with city/industry-specific reasons */
  bodyParagraph: string;
};

export const CITIES: LandingPageData[] = [
  {
    slug: "/web-design-boise",
    label: "Boise",
    metaTitle: "Web Design Boise Idaho | Jeremy Howard Web Design",
    metaDescription:
      "Professional web design for small businesses in Boise, Idaho. Designed, built, hosted, and maintained for you. Starting at $495. Live in 5 days.",
    heading: "Web Design in",
    headingAccent: "Boise, Idaho",
    subheading:
      "Custom websites for Boise small businesses — designed, built, hosted, and maintained by one person. No agency markup, no DIY headaches.",
    bodyEyebrow: "Serving Boise",
    bodyHeading: "Built for Boise businesses.",
    bodyParagraph:
      "Boise is a competitive market for local search. Whether you run a shop downtown, a service business in the North End, or work out of a home office in the foothills, your customers are checking Google before they call. I build sites that load fast, look professional, and tell Google exactly where you are and what you do — so the people searching nearby actually find you. I serve clients across Boise and the wider Treasure Valley, with local meetings available when you want them.",
  },
  {
    slug: "/web-design-meridian",
    label: "Meridian",
    metaTitle: "Web Design Meridian Idaho | Jeremy Howard Web Design",
    metaDescription:
      "Web design for Meridian, Idaho small businesses. Built and hosted locally. Starting at $495. Live in 5 days.",
    heading: "Web Design in",
    headingAccent: "Meridian, Idaho",
    subheading:
      "I'm based in Meridian and I build websites for Meridian businesses. Local, hands-on, and reasonably priced.",
    bodyEyebrow: "Serving Meridian",
    bodyHeading: "Your neighbor in web design.",
    bodyParagraph:
      "I live and work in Meridian, which means I can meet you in person — at your shop, at a coffee place near The Village, or wherever's easy. I build websites for Meridian businesses across every part of town: contractors out near Eagle Road, restaurants and retail along Main Street, service businesses, professional offices, and home-based businesses. Every site is designed, hosted, and supported by me, so you always know who to call.",
  },
  {
    slug: "/web-design-nampa",
    label: "Nampa",
    metaTitle: "Web Design Nampa Idaho | Jeremy Howard Web Design",
    metaDescription:
      "Affordable, professional web design for Nampa, Idaho small businesses. Hosting and support included. Starting at $495.",
    heading: "Web Design in",
    headingAccent: "Nampa, Idaho",
    subheading:
      "Websites for Nampa businesses that need to look as good as they actually are. No agency prices, no template-bloat.",
    bodyEyebrow: "Serving Nampa",
    bodyHeading: "Built for Nampa businesses.",
    bodyParagraph:
      "Nampa has grown fast, and the businesses growing with it need websites that keep up. I build clean, fast sites that show up in Google for searches like \"plumber Nampa\" or \"counselor near me\" — and that actually convert visitors into calls and bookings. I work with Nampa businesses across the city, from shops along 12th Avenue to service businesses serving the wider Canyon County area.",
  },
  {
    slug: "/web-design-eagle",
    label: "Eagle",
    metaTitle: "Web Design Eagle Idaho | Jeremy Howard Web Design",
    metaDescription:
      "Custom web design for Eagle, Idaho small businesses. Designed, built, and hosted by one person. Starting at $495.",
    heading: "Web Design in",
    headingAccent: "Eagle, Idaho",
    subheading:
      "Websites for Eagle businesses — clean, professional, and fast. The kind of site customers expect when they're choosing who to call.",
    bodyEyebrow: "Serving Eagle",
    bodyHeading: "Built for Eagle businesses.",
    bodyParagraph:
      "Eagle's customer base expects polish. A website that looks dated or loads slowly costs you the click. I build sites that match the quality of the businesses I work with — whether that's a boutique downtown, a real estate practice, a contractor, or a professional service firm. Every site is hand-built, hosted, and supported, so you get a real website without the agency price tag.",
  },
  {
    slug: "/web-design-caldwell",
    label: "Caldwell",
    metaTitle: "Web Design Caldwell Idaho | Jeremy Howard Web Design",
    metaDescription:
      "Web design for Caldwell, Idaho small businesses. Built, hosted, and maintained by Jeremy Howard. Starting at $495.",
    heading: "Web Design in",
    headingAccent: "Caldwell, Idaho",
    subheading:
      "Honest, professional websites for Caldwell businesses. Built locally and supported personally.",
    bodyEyebrow: "Serving Caldwell",
    bodyHeading: "Built for Caldwell businesses.",
    bodyParagraph:
      "Caldwell businesses serve customers across Canyon County and beyond. Whether you're a winery on the Sunnyslope Wine Trail, a contractor, a service business, or a downtown shop, your website needs to do two things well: tell people what you do, and make it easy to get in touch. That's the kind of site I build — no fluff, no gimmicks, just a clean professional presence that earns calls.",
  },
  {
    slug: "/web-design-kuna",
    label: "Kuna",
    metaTitle: "Web Design Kuna Idaho | Jeremy Howard Web Design",
    metaDescription:
      "Professional web design for Kuna, Idaho small businesses. Hosting and support included. Starting at $495.",
    heading: "Web Design in",
    headingAccent: "Kuna, Idaho",
    subheading:
      "Websites for Kuna businesses serving the local community and beyond. Local, hands-on, and reasonably priced.",
    bodyEyebrow: "Serving Kuna",
    bodyHeading: "Built for Kuna businesses.",
    bodyParagraph:
      "Kuna's small-town feel is part of what makes it great — but you still need a website that holds up against the bigger players nearby. I build clean, fast, professional sites for Kuna businesses, with proper local SEO so you show up when nearby customers search. Every site is designed, hosted, and supported by me personally, so you never get bounced between departments.",
  },
];

export const INDUSTRIES: LandingPageData[] = [
  {
    slug: "/websites-for-contractors",
    label: "Contractors",
    metaTitle: "Websites for Contractors | Jeremy Howard Web Design | Meridian, Idaho",
    metaDescription:
      "Professional websites for contractors and trades. Show your work, win bigger jobs, and get found on Google. Starting at $495.",
    heading: "Websites for",
    headingAccent: "Contractors",
    subheading:
      "Show off your work, capture more leads, and stop losing jobs to competitors with better websites.",
    bodyEyebrow: "For Contractors",
    bodyHeading: "Built for the trades.",
    bodyParagraph:
      "Contractors live and die by referrals — and the first thing a referred customer does is search you on Google. If your site is slow, hard to read on a phone, or missing photos of your work, you've already lost half of those leads to someone else. I build contractor sites that load fast on mobile, show your best work clearly, list your service area, and make it dead-simple to call or request a quote. No bloat, no DIY templates, no agency price tag.",
  },
  {
    slug: "/websites-for-restaurants",
    label: "Restaurants",
    metaTitle: "Websites for Restaurants | Jeremy Howard Web Design | Meridian, Idaho",
    metaDescription:
      "Restaurant websites that load fast, show your menu, and bring people in. Built and hosted for you. Starting at $495.",
    heading: "Websites for",
    headingAccent: "Restaurants",
    subheading:
      "Hours, menu, location, and one-tap directions — exactly what hungry customers came to your site to find.",
    bodyEyebrow: "For Restaurants",
    bodyHeading: "Built for restaurants.",
    bodyParagraph:
      "When someone searches your restaurant, they want three things in under five seconds: are you open, what's on the menu, and how do I get there. A slow site or a clunky PDF menu sends them straight to the next option. I build clean, fast restaurant sites with real, up-to-date menus, clear hours, photo galleries, easy phone-to-call buttons, and tight Google Maps integration — plus a Google Business Profile that's set up properly so you show up in local pack results.",
  },
  {
    slug: "/websites-for-cleaning-services",
    label: "Cleaning Services",
    metaTitle: "Websites for Cleaning Services | Jeremy Howard Web Design | Meridian, Idaho",
    metaDescription:
      "Cleaning service websites that build trust and book appointments. Fast, professional, mobile-friendly. Starting at $495.",
    heading: "Websites for",
    headingAccent: "Cleaning Services",
    subheading:
      "Cleaning is a trust business. Your website needs to look the part — clean, organized, and easy to book.",
    bodyEyebrow: "For Cleaning Services",
    bodyHeading: "Built for cleaning businesses.",
    bodyParagraph:
      "Customers letting someone into their home or office need to feel confident before they pick up the phone. A messy website undermines that instantly. I build cleaning service sites that feel professional and well-organized: clear services, transparent pricing or quote requests, real reviews, service area coverage, and a fast, mobile-friendly booking or contact flow. Plus the local SEO so people searching \"house cleaning near me\" actually find you.",
  },
  {
    slug: "/websites-for-counselors",
    label: "Counselors",
    metaTitle: "Websites for Counselors | Jeremy Howard Web Design | Meridian, Idaho",
    metaDescription:
      "Calm, professional websites for counselors, therapists, and mental health practices. Privacy-conscious and easy to update. Starting at $495.",
    heading: "Websites for",
    headingAccent: "Counselors",
    subheading:
      "A warm, trustworthy presence online — built thoughtfully and with respect for client privacy.",
    bodyEyebrow: "For Counselors",
    bodyHeading: "Built for counselors and therapists.",
    bodyParagraph:
      "People reaching out to a counselor are often making a vulnerable decision. Your website needs to feel calm, professional, and human — not flashy or salesy. I build counselor sites with a warm tone, clear specialties and modalities, an honest \"about\" page, simple intake-friendly contact options, and privacy-conscious analytics. No tracking pixels you don't want, no third-party widgets that compromise client trust.",
  },
];
