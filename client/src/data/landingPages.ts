/* Landing page data — Aralo Studio
   Single source of truth for city + industry landing pages.
   Used by:
     - App.tsx (Wouter routes)
     - entry-server.tsx (SSR rendering)
     - prerender.mjs (per-route meta tags via tsx)
     - Footer.tsx (Service Areas + Industries We Serve columns)
     - LandingPageTemplate.tsx (rendering, BreadcrumbList schema)
   To add a new city/industry: append to CITIES or INDUSTRIES below.
   Slugs must start with "/" and contain no trailing slash.
   bodyParagraphs entries support inline [text](/url/) markdown links
   for cross-linking to other landing pages — parsed at render time. */

export type LandingPageData = {
  /** URL path, no trailing slash. Used as Wouter route + sitemap entry. */
  slug: string;
  /** "city" or "industry" — drives the breadcrumb path */
  category: "city" | "industry";
  /** Display label for footer + nav + breadcrumb leaf */
  label: string;
  /** <title> tag */
  metaTitle: string;
  /** <meta name="description"> — must include the city name (cities) */
  metaDescription: string;
  /** Hero H1 — split across two lines visually if needed */
  heading: string;
  /** Optional accent word in the heading (rendered in terracotta) */
  headingAccent?: string;
  /** Hero subtitle — short paragraph beneath H1 */
  subheading: string;
  /** Eyebrow label above the bio block */
  bodyEyebrow: string;
  /** H2 above the longer body paragraphs */
  bodyHeading: string;
  /** One or more body paragraphs. Each may contain [text](/url/) inline links. */
  bodyParagraphs: string[];
};

export const CITIES: LandingPageData[] = [
  {
    slug: "/web-design-boise",
    category: "city",
    label: "Boise",
    metaTitle: "Web Design Boise Idaho | Aralo Studio",
    metaDescription:
      "Custom websites for Boise small businesses. Designed, built, and hosted by Aralo Studio. Starting at $495. Live in 5 days.",
    heading: "Web Design in",
    headingAccent: "Boise, Idaho",
    subheading:
      "Custom websites for Boise small businesses — designed, built, hosted, and maintained by one person. No agency markup, no DIY headaches.",
    bodyEyebrow: "Serving Boise",
    bodyHeading: "Built for Boise businesses.",
    bodyParagraphs: [
      "Boise is a competitive market for local search. Whether you run a shop downtown, a service business in the North End, or work out of a home office in the foothills, your customers are checking Google before they call. I build sites for [contractors](/websites-for-contractors/), [restaurants](/websites-for-restaurants/), and [counselors](/websites-for-counselors/) across Boise that load fast, look professional, and tell Google exactly where you are and what you do — so the people searching nearby actually find you. I serve clients across Boise and the wider Treasure Valley, with local meetings available when you want them.",
    ],
  },
  {
    slug: "/web-design-meridian",
    category: "city",
    label: "Meridian",
    metaTitle: "Web Design Meridian Idaho | Aralo Studio",
    metaDescription:
      "Custom websites for Meridian small businesses. Designed, built, and hosted by Aralo Studio. Starting at $495. Live in 5 days.",
    heading: "Web Design in",
    headingAccent: "Meridian, Idaho",
    subheading:
      "I'm based in Meridian and I build websites for Meridian businesses. Local, hands-on, and reasonably priced.",
    bodyEyebrow: "Serving Meridian",
    bodyHeading: "Your neighbor in web design.",
    bodyParagraphs: [
      "I live and work in Meridian, which means I can meet you in person — at your shop, at a coffee place near The Village, or wherever's easy. I build websites for Meridian businesses across every part of town, including [contractors](/websites-for-contractors/), [restaurants](/websites-for-restaurants/), and [cleaning services](/websites-for-cleaning-services/). Every site is designed, hosted, and supported by me, so you always know who to call.",
    ],
  },
  {
    slug: "/web-design-nampa",
    category: "city",
    label: "Nampa",
    metaTitle: "Web Design Nampa Idaho | Aralo Studio",
    metaDescription:
      "Custom websites for Nampa small businesses. Designed, built, and hosted by Aralo Studio. Starting at $495. Live in 5 days.",
    heading: "Web Design in",
    headingAccent: "Nampa, Idaho",
    subheading:
      "Websites for Nampa businesses that need to look as good as they actually are. No agency prices, no template-bloat.",
    bodyEyebrow: "Serving Nampa",
    bodyHeading: "Built for Nampa businesses.",
    bodyParagraphs: [
      "Nampa has grown fast, and the businesses growing with it need websites that keep up. I build clean, fast sites for Nampa [contractors](/websites-for-contractors/), [cleaning services](/websites-for-cleaning-services/), and [counselors](/websites-for-counselors/) that show up in Google for searches like \"plumber Nampa\" or \"counselor near me\" — and that actually convert visitors into calls and bookings. I work with Nampa businesses across the city, from shops along 12th Avenue to service businesses serving the wider Canyon County area.",
    ],
  },
  {
    slug: "/web-design-eagle",
    category: "city",
    label: "Eagle",
    metaTitle: "Web Design Eagle Idaho | Aralo Studio",
    metaDescription:
      "Custom websites for Eagle small businesses. Designed, built, and hosted by Aralo Studio. Starting at $495. Live in 5 days.",
    heading: "Web Design in",
    headingAccent: "Eagle, Idaho",
    subheading:
      "Websites for Eagle businesses — clean, professional, and fast. The kind of site customers expect when they're choosing who to call.",
    bodyEyebrow: "Serving Eagle",
    bodyHeading: "Built for Eagle businesses.",
    bodyParagraphs: [
      "Eagle's customer base expects polish. A website that looks dated or loads slowly costs you the click. I build sites that match the quality of the businesses I work with — including [contractors](/websites-for-contractors/), [restaurants](/websites-for-restaurants/), and [counselors](/websites-for-counselors/) — whether that's a boutique downtown, a real estate practice, or a professional service firm. Every site is hand-built, hosted, and supported, so you get a real website without the agency price tag.",
    ],
  },
  {
    slug: "/web-design-caldwell",
    category: "city",
    label: "Caldwell",
    metaTitle: "Web Design Caldwell Idaho | Aralo Studio",
    metaDescription:
      "Custom websites for Caldwell small businesses. Designed, built, and hosted by Aralo Studio. Starting at $495. Live in 5 days.",
    heading: "Web Design in",
    headingAccent: "Caldwell, Idaho",
    subheading:
      "Honest, professional websites for Caldwell businesses. Built locally and supported personally.",
    bodyEyebrow: "Serving Caldwell",
    bodyHeading: "Built for Caldwell businesses.",
    bodyParagraphs: [
      "Caldwell businesses serve customers across Canyon County and beyond. Whether you're a [contractor](/websites-for-contractors/), a [cleaning service](/websites-for-cleaning-services/), a [counselor](/websites-for-counselors/), or a downtown shop, your website needs to do two things well: tell people what you do, and make it easy to get in touch. That's the kind of site I build — no fluff, no gimmicks, just a clean professional presence that earns calls.",
    ],
  },
  {
    slug: "/web-design-kuna",
    category: "city",
    label: "Kuna",
    metaTitle: "Web Design Kuna Idaho | Aralo Studio",
    metaDescription:
      "Custom websites for Kuna small businesses. Designed, built, and hosted by Aralo Studio. Starting at $495. Live in 5 days.",
    heading: "Web Design in",
    headingAccent: "Kuna, Idaho",
    subheading:
      "Websites for Kuna businesses serving the local community and beyond. Local, hands-on, and reasonably priced.",
    bodyEyebrow: "Serving Kuna",
    bodyHeading: "Built for Kuna businesses.",
    bodyParagraphs: [
      "Kuna's small-town feel is part of what makes it great — but you still need a website that holds up against the bigger players nearby. I build clean, fast, professional sites for Kuna [contractors](/websites-for-contractors/), [cleaning services](/websites-for-cleaning-services/), and [restaurants](/websites-for-restaurants/), with proper local SEO so you show up when nearby customers search. Every site is designed, hosted, and supported by me personally, so you never get bounced between departments.",
    ],
  },
];

export const INDUSTRIES: LandingPageData[] = [
  {
    slug: "/websites-for-contractors",
    category: "industry",
    label: "Contractors",
    metaTitle: "Websites for Contractors | Aralo Studio | Meridian, Idaho",
    metaDescription:
      "Professional websites for contractors and trades. Show your work, win bigger jobs, and get found on Google. Starting at $495.",
    heading: "Websites for",
    headingAccent: "Contractors",
    subheading:
      "Show off your work, capture more leads, and stop losing jobs to competitors with better websites.",
    bodyEyebrow: "For Contractors",
    bodyHeading: "Built for the trades.",
    bodyParagraphs: [
      "Contractors live and die by referrals — and the first thing a referred customer does is search you on Google. Whether you serve [Boise](/web-design-boise/), [Meridian](/web-design-meridian/), Nampa, or anywhere across the Treasure Valley, if your site is slow, hard to read on a phone, or missing photos of your work, you've already lost half of those leads to someone else. I build contractor sites that load fast on mobile, show your best work clearly, list your service area, and make it dead-simple to call or request a quote. No bloat, no DIY templates, no agency price tag.",
      "Customers don't just search for a contractor's name. They verify. They check Google reviews, scan your photos, look at your service area, and read your \"about\" page to see if you're a real business or a fly-by-night. Every one of those checks happens on a phone, often in the middle of another task — between appointments, during a lunch break, while standing in the kitchen they want repaired. If any of those signals is missing or sloppy, the next contractor in the search results gets the call instead.",
      "A fast-loading mobile site with clear photos of your past work is one of the highest-leverage marketing assets a contractor can have. It does the verification work for you. A neighbor recommends you, the homeowner pulls out their phone, sees your name on a clean professional page with photos that match the job they need done, and they're already half-decided to call. That's the difference between getting referrals and converting them.",
    ],
  },
  {
    slug: "/websites-for-restaurants",
    category: "industry",
    label: "Restaurants",
    metaTitle: "Websites for Restaurants | Aralo Studio | Meridian, Idaho",
    metaDescription:
      "Restaurant websites that load fast, show your menu, and bring people in. Built and hosted by Aralo Studio. Starting at $495.",
    heading: "Websites for",
    headingAccent: "Restaurants",
    subheading:
      "Hours, menu, location, and one-tap directions — exactly what hungry customers came to your site to find.",
    bodyEyebrow: "For Restaurants",
    bodyHeading: "Built for restaurants.",
    bodyParagraphs: [
      "When someone searches your restaurant, they want three things in under five seconds: are you open, what's on the menu, and how do I get there. Whether they're searching from [Boise](/web-design-boise/) or [Meridian](/web-design-meridian/), a slow site or a clunky PDF menu sends them straight to the next option. I build clean, fast restaurant sites with real, up-to-date menus, clear hours, photo galleries, easy phone-to-call buttons, and tight Google Maps integration — plus a Google Business Profile that's set up properly so you show up in local pack results.",
      "Almost every \"where should we eat\" decision now starts with a phone. A group standing on the sidewalk pulls up your site to confirm you're open, see if you have something for the picky eater in the group, and figure out how far away you are. If your hours are out of date, your menu downloads as a 4 MB PDF, or your site doesn't load at all on mobile, that group is at the restaurant down the block before they finish reading the URL.",
      "A restaurant's website doesn't need to be flashy. It needs to be fast, current, and honest. Hours should match what's on the door. The menu should match what's actually served, with prices that don't surprise anyone. Photos should look like the food customers will actually be eating. Get those right and the website does its job: get people through the door, more often.",
    ],
  },
  {
    slug: "/websites-for-cleaning-services",
    category: "industry",
    label: "Cleaning Services",
    metaTitle: "Websites for Cleaning Services | Aralo Studio | Meridian, Idaho",
    metaDescription:
      "Cleaning service websites that build trust and book appointments. Fast, professional, mobile-friendly. Starting at $495.",
    heading: "Websites for",
    headingAccent: "Cleaning Services",
    subheading:
      "Cleaning is a trust business. Your website needs to look the part — clean, organized, and easy to book.",
    bodyEyebrow: "For Cleaning Services",
    bodyHeading: "Built for cleaning businesses.",
    bodyParagraphs: [
      "Customers letting someone into their home or office need to feel confident before they pick up the phone. Whether you serve [Boise](/web-design-boise/) homeowners or [Nampa](/web-design-nampa/) commercial accounts, a messy website undermines that confidence instantly. I build cleaning service sites that feel professional and well-organized: clear services, transparent pricing or quote requests, real reviews, service area coverage, and a fast, mobile-friendly booking or contact flow. Plus the local SEO so people searching \"house cleaning near me\" actually find you.",
      "Cleaning is a trust business. Customers are giving you keys, alarm codes, access to their kids' rooms, their offices, their valuables. Before they call, they need a few signals that tell them you're a real, established business: a professional-looking site, recognizable photos of your team or vehicles, clear contact information, real reviews from people who sound like real people, a service area that makes sense, and a transparent process for getting started. Each of those signals is small. Together they're the difference between a call and a pass.",
      "A clean, organized website does more work than most cleaning business owners realize. It separates legitimate operators from the fly-by-night services that show up for one job and disappear. It pre-qualifies the people who reach out, so you spend less time on tire-kickers. And it gives existing customers an easy way to refer you — they send a link, and the new customer arrives already trusting that you're who you say you are.",
    ],
  },
  {
    slug: "/websites-for-counselors",
    category: "industry",
    label: "Counselors",
    metaTitle: "Websites for Counselors | Aralo Studio | Meridian, Idaho",
    metaDescription:
      "Calm, professional websites for counselors, therapists, and mental health practices. Privacy-conscious and easy to update. Starting at $495.",
    heading: "Websites for",
    headingAccent: "Counselors",
    subheading:
      "A warm, trustworthy presence online — built thoughtfully and with respect for client privacy.",
    bodyEyebrow: "For Counselors",
    bodyHeading: "Built for counselors and therapists.",
    bodyParagraphs: [
      "People reaching out to a counselor are often making a vulnerable decision. Whether they're searching from [Boise](/web-design-boise/) or [Eagle](/web-design-eagle/), your website needs to feel calm, professional, and human — not flashy or salesy. I build counselor sites with a warm tone, clear specialties and modalities, an honest \"about\" page, simple intake-friendly contact options, and privacy-conscious analytics. No tracking pixels you don't want, no third-party widgets that compromise client trust.",
      "Most people searching for a counselor are already anxious before they ever land on your site. They've worked themselves up to look. They're scanning for cues — does this person seem safe, do they understand what I'm dealing with, will the first call be awkward. A cluttered site with stock photos and salesy language pushes them away. A calm, clear page with real photos, plain language, and genuine warmth lowers the barrier. Every reduction in friction matters.",
      "The single most useful thing a counseling website can do is make it easy to take the first step. That means a clean explanation of who you work with, an honest sense of what sessions are like, transparent fees, and an intake flow that's no more complex than it needs to be. The goal isn't to convince someone they need therapy — they already know. The goal is to make reaching out feel doable on a hard day.",
    ],
  },
];
