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

export type BodySection = {
  /** H2 subheading rendered above the section's paragraphs. */
  heading: string;
  /** Paragraphs for this section. Each may contain [text](/url/) inline links. */
  paragraphs: string[];
};

export type LandingPageData = {
  /** URL path, no trailing slash. Used as Wouter route + sitemap entry. */
  slug: string;
  /** "city" or "industry" — drives the breadcrumb path */
  category: "city" | "industry";
  /** For city pages, the geographic region — drives footer grouping. */
  region?: "Treasure Valley" | "North Idaho";
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
  /** One or more body paragraphs. Each may contain [text](/url/) inline links.
      These form the lead/intro under bodyHeading. */
  bodyParagraphs: string[];
  /** Optional deeper sections, each rendered as an H2 + paragraphs. Used to
      give the page real depth (what's included, cost drivers, why Aralo). */
  bodySections?: BodySection[];
};

export const CITIES: LandingPageData[] = [
  {
    slug: "/web-design-boise",
    category: "city",
    region: "Treasure Valley",
    label: "Boise",
    metaTitle: "Web Design Boise Idaho | Aralo Studio",
    metaDescription:
      "Hand-built websites for Boise small businesses. Fast on mobile, sharp on desktop, with the local SEO that gets your shop found in Google.",
    heading: "Web Design in",
    headingAccent: "Boise, Idaho",
    subheading:
      "Custom websites for Boise small businesses: designed, built, hosted, and maintained by one person. No agency markup, no DIY headaches.",
    bodyEyebrow: "Serving Boise",
    bodyHeading: "Built for Boise businesses.",
    bodyParagraphs: [
      "Boise is the most competitive local search market in Idaho. Downtown, the North End, the Bench, Garden City, the foothills: every one of those areas has businesses fighting for the same Google results, and most of the people searching are doing it from a phone before they ever pick up the call. A site that loads fast, shows up correctly in Google's local pack, and answers the question your customer actually came to ask is worth more than a slow template that looks busy and ranks nowhere.",
      "We build sites for Boise [contractors](/websites-for-contractors/), [restaurants](/websites-for-restaurants/), [counselors](/websites-for-counselors/), [HVAC companies](/websites-for-hvac/), [real estate agents](/websites-for-real-estate/), and [mortgage brokers](/websites-for-mortgage-brokers/) that get the basics right: speed, mobile usability, structured data, and a clear path to contact you. Every site is designed, built, hosted, and maintained by one person, so there is no agency markup and no DIY headache. When something needs changing, you talk to the person who built it.",
    ],
    bodySections: [
      {
        heading: "What's included in a Boise small-business site",
        paragraphs: [
          "Most Boise businesses don't need a twenty-page site. They need a small set of pages that load quickly and answer the questions a real customer asks: what you do, where you work, what it costs to get started, and how to reach you. A typical build is a homepage, a services page, an about page, and a contact page, with extra pages added when a business has distinct service lines worth ranking separately.",
          "Every build includes mobile-first design, on-page SEO and AEO so the pages are readable by Google and by AI answer engines, a Google Business Profile setup so you appear in the local pack and on Maps, and structured data that tells search engines your name, address, hours, and service area. The process is short: a quick intake, a first design you review, revisions, then go live, usually inside five to ten business days depending on the plan. Boise sits at the center of everything, so the same site is built to pull searches from nearby [Meridian](/web-design-meridian/), [Eagle](/web-design-eagle/), and [Nampa](/web-design-nampa/) when your service area reaches them.",
        ],
      },
      {
        heading: "What a Boise website costs",
        paragraphs: [
          "Pricing is published below, not hidden behind a quote. Sites start at $495 plus $29 a month and run to $1,295 plus $99 a month for the full build with copywriting and a monthly SEO check-in. What moves you between tiers is mostly page count and whether you want the writing handled for you. A single-location service business with a handful of pages sits at the low end, while a business with several distinct service lines, a photo gallery, or done-for-you copywriting needs the larger plan.",
          "There are no long-term contracts. The monthly covers hosting, maintenance, and a set number of edits, and you can cancel with thirty days notice. Set against the $3,000 to $10,000 a Boise agency typically charges, or the hours a DIY builder quietly eats, a hand-built site at this price is the practical middle.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy, based in nearby Meridian. You work with the designer directly from the first sketch to ongoing updates, not a sales rep or a ticket queue. That matters most after launch, the point where small businesses usually get abandoned by whoever built the site.",
          "The work is real and it's local. We built and maintain [Crystal Howard Mortgage](/portfolio/crystal-howard-mortgage/) in Garden City, a multi-page site for a jumbo and construction lending specialist, and [Crisis to Comfort Counseling](/portfolio/crisis-to-comfort/) here in the Treasure Valley. SEO is built into every page from the start instead of sold as an upsell later, and the sites are hand-coded to load fast and pass Core Web Vitals rather than assembled from a heavy page-builder template. If you run a business in Boise and want a site that earns calls instead of just existing, that's the work we do.",
        ],
      },
    ],
  },
  {
    slug: "/web-design-meridian",
    category: "city",
    region: "Treasure Valley",
    label: "Meridian",
    metaTitle: "Web Design Meridian Idaho | Aralo Studio",
    metaDescription:
      "Meridian's local web designer. Custom small-business websites built and hosted by hand for Meridian and Kuna, with local SEO included from day one.",
    heading: "Web Design in",
    headingAccent: "Meridian, Idaho",
    subheading:
      "We're based in Meridian and we build websites for Meridian and Kuna businesses. Local, hands-on, and reasonably priced.",
    bodyEyebrow: "Serving Meridian",
    bodyHeading: "Your neighbor in web design.",
    bodyParagraphs: [
      "Aralo Studio is based in Meridian, which means we can meet you in person, at your shop, at a coffee place near The Village, or wherever's easy. We build websites for businesses across Meridian and neighboring Kuna, including [contractors](/websites-for-contractors/), [restaurants](/websites-for-restaurants/), [cleaning services](/websites-for-cleaning-services/), [landscapers](/websites-for-landscapers/), and [real estate agents](/websites-for-real-estate/). Every site is designed, hosted, and supported by us, so you always know who to call.",
      "Meridian has grown from a quiet farming town into one of the fastest-growing cities in the country, and Kuna right next door is growing with it. Long-time owners now compete for the same searches as new arrivals from Boise and out of state. The advantage goes to whoever's website is easiest to use on a phone: clear hours, quick contact, photos that match the actual business.",
    ],
    bodySections: [
      {
        heading: "What you get in a Meridian website build",
        paragraphs: [
          "We keep things simple: one page or ten, every site is structured around the questions a real customer asks, not the buzzwords a template assumes. A standard build covers a homepage, your services, an about page that makes you feel like a real local business, and an easy contact path. If you run distinct service lines, each one can get its own page so it ranks on its own.",
          "Mobile-first design, on-page SEO and AEO, Google Business Profile setup, and structured data come standard. Because Kuna sits just south and searches there often spill over to Meridian and Nampa, we build the site to claim that nearby demand too. Kuna businesses get the same in-person service: the drive is ten minutes. The typical timeline is five to ten business days from intake to launch.",
        ],
      },
      {
        heading: "What a Meridian website costs",
        paragraphs: [
          "Pricing is shown in full below. Builds start at $495 plus $29 a month for a clean, professional presence and go up to $1,295 plus $99 a month for the full package with professional copywriting and a monthly SEO audit. The main cost drivers are how many pages you need and whether you want the writing done for you.",
          "No long-term contracts, no agency markup. The monthly plan covers hosting, ongoing maintenance, and a set number of edits, and you can cancel anytime with thirty days notice. For most Meridian and Kuna small businesses, the Plus plan is the sweet spot: enough pages and SEO to actually get found, without paying for things you won't use.",
        ],
      },
      {
        heading: "Why work with a local designer",
        paragraphs: [
          "When you call Aralo Studio, you get Jeremy, the person who designs and builds your site, not a project manager passing notes. Being based in Meridian means real local meetings when you want them and a designer who actually knows the market you're selling into.",
          "The work speaks for itself. We build and maintain real production sites across Idaho, from [Crisis to Comfort Counseling](/portfolio/crisis-to-comfort/) in the Treasure Valley to [Silver Valley Painting & Construction](/portfolio/silver-valley-painting/) up north. SEO is included from day one rather than bolted on, and every site is hand-coded to be fast on the five-year-old phones your customers actually use. If you want a website built by your neighbor instead of a faceless agency, that's exactly what this is.",
        ],
      },
    ],
  },
  {
    slug: "/web-design-nampa",
    category: "city",
    region: "Treasure Valley",
    label: "Nampa",
    metaTitle: "Web Design Nampa Idaho | Aralo Studio",
    metaDescription:
      "Custom websites for Nampa and Caldwell businesses serving Canyon County. Mobile-first, fast, and built to convert searches into customer calls.",
    heading: "Web Design in",
    headingAccent: "Nampa, Idaho",
    subheading:
      "Websites for Nampa and Caldwell businesses that need to look as good as they actually are. No agency prices, no template bloat.",
    bodyEyebrow: "Serving Nampa & Canyon County",
    bodyHeading: "Built for Nampa and Canyon County businesses.",
    bodyParagraphs: [
      "Nampa and Caldwell have grown fast, and the businesses growing with them need websites that keep up. We build clean, fast sites for Canyon County [contractors](/websites-for-contractors/), [plumbers](/websites-for-plumbers/), [cleaning services](/websites-for-cleaning-services/), [HVAC companies](/websites-for-hvac/), and [auto detailers](/websites-for-auto-detailers/) that show up in Google for searches like \"plumber Nampa\" or \"house cleaning Caldwell,\" and that actually convert visitors into calls and bookings.",
      "We work with businesses across the whole county, from shops along 12th Avenue in Nampa to service businesses in downtown Caldwell and out toward the wider Canyon County area. Many of these businesses serve both cities and into Boise, so the site is built to rank across that footprint rather than just one neighborhood.",
    ],
    bodySections: [
      {
        heading: "What a Canyon County website needs to do",
        paragraphs: [
          "Most Nampa and Caldwell customers reach a website through a phone screen, often while standing in a yard, a kitchen, or a parking lot. That changes how a site has to work. Big tappable buttons, hours and address visible without scrolling, page loads measured in seconds rather than tens of seconds. We build mobile-first by default, not as an afterthought, and the same site still looks right on a desktop monitor at the office.",
          "Because so many Canyon County businesses serve customers across both cities and into Boise, we list service areas clearly, add directions and parking notes when they matter, and signal trust with real photos, real reviews, and real contact info. Every build includes on-page SEO and AEO, Google Business Profile setup, and structured data so search engines know exactly which cities you serve.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "Full pricing is below. Sites start at $495 plus $29 a month and top out at $1,295 plus $99 a month for the complete build with copywriting and a monthly SEO check-in. What drives the price is page count and whether you want the writing handled for you. A single-trade Nampa service business sits at the low end; a company covering several services across Nampa, Caldwell, and Boise usually wants the larger plan so each service and area can rank.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, and you can cancel with thirty days notice. For a Canyon County business weighing a $3,000-plus agency quote against a DIY builder that never quite looks finished, a hand-built site in this range is the honest middle ground.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy, based just up the road in Meridian. You work with the designer directly, before and after launch, instead of getting handed off to whoever's free. That continuity is the difference between a site that stays current and one that goes stale the week after it ships.",
          "We build and maintain real sites for real Idaho businesses, with SEO built into every page from the start rather than sold later as an add-on. Sites are hand-coded to load fast and pass Core Web Vitals, not assembled from a bloated template. If you run a business in Nampa or Caldwell and want a site that turns local searches into calls, that's the work.",
        ],
      },
    ],
  },
  {
    slug: "/web-design-eagle",
    category: "city",
    region: "Treasure Valley",
    label: "Eagle",
    metaTitle: "Web Design Eagle Idaho | Aralo Studio",
    metaDescription:
      "Polished small-business websites for Eagle, Idaho. Hand-built, hosted, and supported by one designer who actually picks up the phone.",
    heading: "Web Design in",
    headingAccent: "Eagle, Idaho",
    subheading:
      "Websites for Eagle businesses: clean, professional, and fast. The kind of site customers expect when they're choosing who to call.",
    bodyEyebrow: "Serving Eagle",
    bodyHeading: "Built for Eagle businesses.",
    bodyParagraphs: [
      "Eagle's customer base expects polish. A website that looks dated or loads slowly costs you the click before the visitor reads a single word. We build sites that match the quality of the businesses we work with, from [counselors](/websites-for-counselors/), [real estate agents](/websites-for-real-estate/), and [mortgage brokers](/websites-for-mortgage-brokers/) to [landscapers](/websites-for-landscapers/), [painters](/websites-for-painters/), and [salons](/websites-for-salons/), whether that's a boutique downtown, a real estate practice, or a professional service firm.",
      "The same standard applies to professional services, where the website does the verification work before the first call. We take time on typography, photo selection, and color so the site signals the same quality your business delivers. No template that looks like a hundred other Eagle businesses, no stock-photo model in a hard hat.",
    ],
    bodySections: [
      {
        heading: "What an Eagle website includes",
        paragraphs: [
          "For Eagle businesses, design is not decoration, it's the credibility check. A standard build covers a homepage that sets the tone in the first scroll, service pages that read like a professional wrote them, an about page that earns trust, and a clean contact path. Real photos and a considered layout read as legitimate immediately; a generic template reads as a hobby.",
          "Every site includes mobile-first design, on-page SEO and AEO, Google Business Profile setup, and structured data. Eagle searches often overlap with nearby [Boise](/web-design-boise/) and [Meridian](/web-design-meridian/), so the site is built to compete across that affluent corridor, not just one ZIP code. From intake to launch is usually five to ten business days.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "Pricing is published below. Builds run from $495 plus $29 a month for a sharp, professional presence to $1,295 plus $99 a month for the full package with done-for-you copywriting and a monthly SEO audit. For most Eagle professional-service businesses, the higher tiers earn their keep, because the copywriting and design polish are exactly what the market is judging you on.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice. Compared with an agency build at $3,000 to $10,000, you get the same hand-crafted quality without the overhead of a team you'll never meet.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy, based nearby in Meridian. You work directly with the designer, so the taste and care that go into the first design are the same ones maintaining the site a year later. Nothing gets handed down to a junior or a queue.",
          "We build and maintain real production sites across Idaho, including [Crystal Howard Mortgage](/portfolio/crystal-howard-mortgage/), a high-end multi-page site built to speak to discerning clients. SEO is included from the start, and every site is hand-coded to be fast and pass Core Web Vitals. If your Eagle business needs a site that looks as good as the work you do, that's what we build.",
        ],
      },
    ],
  },
  {
    slug: "/web-design-coeur-dalene",
    category: "city",
    region: "North Idaho",
    label: "Coeur d'Alene",
    metaTitle: "Web Design Coeur d'Alene Idaho | Aralo Studio",
    metaDescription:
      "Custom websites for Coeur d'Alene small businesses. Fast, mobile-first, with local SEO built in. Aralo Studio already builds and maintains sites across North Idaho.",
    heading: "Web Design in",
    headingAccent: "Coeur d'Alene, Idaho",
    subheading:
      "Hand-built websites for Coeur d'Alene businesses competing in one of North Idaho's fastest-growing markets. Designed, hosted, and maintained personally.",
    bodyEyebrow: "Serving Coeur d'Alene",
    bodyHeading: "Built for Coeur d'Alene businesses.",
    bodyParagraphs: [
      "Coeur d'Alene has become one of the most competitive small markets in the Northwest. Out-of-state arrivals, a strong tourism season around the lake and Sherman Avenue, and a steady flow of new businesses mean the search results are crowded year-round. A fast, professional website that shows up in Google's local pack is no longer optional here. We build sites for Coeur d'Alene [contractors](/websites-for-contractors/), [painters](/websites-for-painters/), [restaurants](/websites-for-restaurants/), [real estate agents](/websites-for-real-estate/), and [salons](/websites-for-salons/) that load fast, look the part, and turn local searches into calls.",
      "Aralo Studio is not new to North Idaho. We already build and maintain [Silver Valley Painting & Construction](/portfolio/silver-valley-painting/), a Panhandle company with commercial clients including Best Buy and Idaho Fish & Game, with service-area pages targeting cities across the region. We know what it takes to rank up here.",
    ],
    bodySections: [
      {
        heading: "What's included in a Coeur d'Alene website",
        paragraphs: [
          "A standard build is a homepage, service pages, an about page, and a clear contact path, with extra pages when you have distinct services or service areas worth ranking on their own. For a lake-town market with heavy seasonal swings, we make sure hours, service areas, and booking or contact options are obvious on a phone, because that's where most of the decisions happen.",
          "Every site includes mobile-first design, on-page SEO and AEO, Google Business Profile setup, and structured data that tells search engines exactly which North Idaho cities you serve. Because Coeur d'Alene sits at the center of the Kootenai County market, the same site is built to reach nearby [Post Falls](/web-design-post-falls/), [Hayden](/web-design-hayden/), and [Rathdrum](/web-design-rathdrum/) when your work takes you there.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "Pricing is the same wherever you are and it's published below. Sites start at $495 plus $29 a month and run to $1,295 plus $99 a month for the full build with copywriting and a monthly SEO check-in. Page count and whether you want the writing handled for you are the main cost drivers. A single-service CDA business sits at the low end; a company covering several services or multiple Panhandle cities usually wants the larger plan.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice. Working remotely keeps the price down without changing the quality: the same hand-built site a Treasure Valley client gets is the same one a Coeur d'Alene client gets.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy. You work with the designer directly from first sketch to ongoing updates, by phone, email, or video, with the same responsiveness whether you're across town or across the state. North Idaho clients are not an afterthought here; the region is a focus.",
          "The proof is already on the ground: a maintained, ranking North Idaho site in [Silver Valley Painting & Construction](/portfolio/silver-valley-painting/), plus a portfolio of Idaho businesses in mortgage, counseling, and the trades. SEO is built into every page from the start, and sites are hand-coded to load fast and pass Core Web Vitals. If you run a Coeur d'Alene business and want a site that competes, this is built for exactly that.",
        ],
      },
    ],
  },
  {
    slug: "/web-design-post-falls",
    category: "city",
    region: "North Idaho",
    label: "Post Falls",
    metaTitle: "Web Design Post Falls Idaho | Aralo Studio",
    metaDescription:
      "Websites for Post Falls businesses in the Coeur d'Alene-to-Spokane growth corridor. Fast, mobile-first, with local SEO included from day one.",
    heading: "Web Design in",
    headingAccent: "Post Falls, Idaho",
    subheading:
      "Custom websites for Post Falls businesses growing along the Idaho-Washington line. Built, hosted, and maintained by one designer.",
    bodyEyebrow: "Serving Post Falls",
    bodyHeading: "Built for Post Falls businesses.",
    bodyParagraphs: [
      "Post Falls sits in the growth corridor between Coeur d'Alene and Spokane, which is both an opportunity and a problem. The customer base is expanding fast, but so is the competition, and a Post Falls business with a weak website loses searches to the next town in either direction. We build clean, fast sites for Post Falls [contractors](/websites-for-contractors/), [HVAC companies](/websites-for-hvac/), [plumbers](/websites-for-plumbers/), and [electricians](/websites-for-electricians/) that hold their own in that corridor.",
      "Aralo Studio already works across North Idaho. We build and maintain [Silver Valley Painting & Construction](/portfolio/silver-valley-painting/), a regional Panhandle company, so we understand how local search works in Kootenai County and what it takes to keep a trades business booked.",
    ],
    bodySections: [
      {
        heading: "What a Post Falls website needs",
        paragraphs: [
          "Many Post Falls businesses, especially in the trades, win or lose on how fast and how legitimate their site looks on a phone. A working build puts a tappable phone number at the top of every page, makes the service area obvious, and shows real photos of real work. We cover the essentials first, then add pages for distinct services so each one can rank.",
          "Every site includes mobile-first design, on-page SEO and AEO, Google Business Profile setup, and structured data. Because Post Falls customers and searches flow toward [Coeur d'Alene](/web-design-coeur-dalene/), [Rathdrum](/web-design-rathdrum/), and across the line into Washington, we set the site up to claim the parts of that corridor you actually serve.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "Full pricing is below. Builds start at $495 plus $29 a month and run to $1,295 plus $99 a month for the complete package with copywriting and a monthly SEO check-in. The price is driven by page count and whether you want the writing done for you. A single-trade Post Falls business sits at the low end; a multi-service company wanting to rank across several cities usually needs the larger plan.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, and you can cancel with thirty days notice. It's a fraction of an agency build and far less hassle than fighting a DIY builder into shape.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy. You deal with the designer directly, before and after launch, which is exactly what a busy Post Falls owner wants: one number, one person who knows your site, no ticket queue.",
          "We already build and maintain a ranking North Idaho trades site, so this isn't a studio guessing at the market from somewhere else. SEO is included on every page from day one, and the sites are hand-coded to load fast and pass Core Web Vitals. If you want a Post Falls website that brings in work instead of just sitting there, that's the job.",
        ],
      },
    ],
  },
  {
    slug: "/web-design-hayden",
    category: "city",
    region: "North Idaho",
    label: "Hayden",
    metaTitle: "Web Design Hayden Idaho | Aralo Studio",
    metaDescription:
      "Polished websites for Hayden, Idaho businesses. Hand-built, fast, and supported personally, with local SEO included from the start.",
    heading: "Web Design in",
    headingAccent: "Hayden, Idaho",
    subheading:
      "Clean, professional websites for Hayden businesses serving the north end of the Coeur d'Alene area. Built and maintained by one designer.",
    bodyEyebrow: "Serving Hayden",
    bodyHeading: "Built for Hayden businesses.",
    bodyParagraphs: [
      "Hayden's customer base, anchored around Hayden Lake and the established neighborhoods north of Coeur d'Alene, tends to expect quality. A dated or slow website undercuts that expectation before a visitor reads a word. We build polished, fast sites for Hayden [landscapers](/websites-for-landscapers/), [painters](/websites-for-painters/), [real estate agents](/websites-for-real-estate/), and [cleaning services](/websites-for-cleaning-services/) that match the standard their customers are looking for.",
      "Aralo Studio already builds and maintains sites across North Idaho, including [Silver Valley Painting & Construction](/portfolio/silver-valley-painting/) in the Panhandle. We know the Kootenai County market and how to rank in it.",
    ],
    bodySections: [
      {
        heading: "What a Hayden website includes",
        paragraphs: [
          "For Hayden businesses, the website is a quality signal as much as an information source. A standard build covers a homepage that sets the tone, service pages, an about page that earns trust, and an easy contact path, with real photos rather than stock imagery. Quiet, considered design reads as competence in this market.",
          "Every site includes mobile-first design, on-page SEO and AEO, Google Business Profile setup, and structured data. Hayden searches overlap heavily with [Coeur d'Alene](/web-design-coeur-dalene/) and [Post Falls](/web-design-post-falls/), so the site is built to compete across that north-county area, not just one town.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "Pricing is published below. Builds run from $495 plus $29 a month for a sharp professional presence to $1,295 plus $99 a month for the full package with copywriting and a monthly SEO audit. Page count and done-for-you writing are the main cost drivers. For quality-focused Hayden businesses, the higher tiers usually pay off, because the polish is exactly what customers are judging.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice. You get hand-crafted work without an agency's overhead.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy. The care that goes into your first design is the same care maintaining the site later, because it's the same person throughout. No handoff, no queue.",
          "We build and maintain a ranking North Idaho site already, and our wider portfolio spans Idaho mortgage, counseling, and trades businesses. SEO is included from day one, and every site is hand-coded to be fast and pass Core Web Vitals. If your Hayden business wants a site that looks as good as the work you do, that's what we build.",
        ],
      },
    ],
  },
  {
    slug: "/web-design-sandpoint",
    category: "city",
    region: "North Idaho",
    label: "Sandpoint",
    metaTitle: "Web Design Sandpoint Idaho | Aralo Studio",
    metaDescription:
      "Websites for Sandpoint, Idaho businesses serving the Lake Pend Oreille and Schweitzer area. Fast, mobile-first, with local SEO built in.",
    heading: "Web Design in",
    headingAccent: "Sandpoint, Idaho",
    subheading:
      "Custom websites for Sandpoint businesses in a seasonal resort market. Built, hosted, and maintained by one designer who picks up the phone.",
    bodyEyebrow: "Serving Sandpoint",
    bodyHeading: "Built for Sandpoint businesses.",
    bodyParagraphs: [
      "Sandpoint is a distinct market from the rest of the Panhandle: a resort town shaped by Lake Pend Oreille, Schweitzer, and a tourism season that swings demand hard through the year. A business here needs a website that works for both locals and the visitors planning a trip from out of town. We build fast, professional sites for Sandpoint [contractors](/websites-for-contractors/), [painters](/websites-for-painters/), [restaurants](/websites-for-restaurants/), and [auto detailers](/websites-for-auto-detailers/) that handle both audiences.",
      "Aralo Studio already builds and maintains [Silver Valley Painting & Construction](/portfolio/silver-valley-painting/) and other sites across North Idaho, so we understand how seasonal Panhandle markets search and book.",
    ],
    bodySections: [
      {
        heading: "What a Sandpoint website needs to do",
        paragraphs: [
          "Sandpoint's seasonality changes the job. The planning happens off-season, the booking happens in-season, and the website has to be alive for both. We make sure hours, service areas, and contact or booking options are obvious on a phone, and that the site reads as current rather than something last touched two summers ago.",
          "Every build includes mobile-first design, on-page SEO and AEO, Google Business Profile setup, and structured data. Because Sandpoint serves Bonner County and draws visitors from across the region and down to [Coeur d'Alene](/web-design-coeur-dalene/), we set the site up to capture both local intent and trip-planning searches.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "Pricing is below and it's the same wherever you are. Sites start at $495 plus $29 a month and go to $1,295 plus $99 a month for the full build with copywriting and a monthly SEO check-in. Page count and done-for-you writing are the cost drivers. A single-service Sandpoint business sits at the low end; a business serving both locals and visitors with several offerings usually wants the larger plan.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice. Working remotely keeps the cost down without touching the quality of the build.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy. You work directly with the designer, by phone, email, or video, with the same attention a local shop would get. Distance doesn't change the responsiveness.",
          "We already maintain ranking sites in North Idaho, and the broader portfolio covers Idaho mortgage, counseling, and the trades. SEO is included on every page from the start, and sites are hand-coded to load fast and pass Core Web Vitals, which matters double when half your visitors are checking you from a phone with one bar near the lake. If you run a Sandpoint business and want a site that earns work in both seasons, that's the build.",
        ],
      },
    ],
  },
  {
    slug: "/web-design-rathdrum",
    category: "city",
    region: "North Idaho",
    label: "Rathdrum",
    metaTitle: "Web Design Rathdrum Idaho | Aralo Studio",
    metaDescription:
      "Websites for Rathdrum, Idaho businesses serving the fast-growing Rathdrum Prairie. Fast, mobile-first, with local SEO included from day one.",
    heading: "Web Design in",
    headingAccent: "Rathdrum, Idaho",
    subheading:
      "Custom websites for Rathdrum businesses growing with the Prairie. Built, hosted, and maintained by one designer.",
    bodyEyebrow: "Serving Rathdrum",
    bodyHeading: "Built for Rathdrum businesses.",
    bodyParagraphs: [
      "Rathdrum is one of the fastest-growing parts of Kootenai County, a bedroom community filling in across the Rathdrum Prairie with new families and the service businesses that follow them. That growth brings customers and competition at the same time. We build clean, fast sites for Rathdrum [contractors](/websites-for-contractors/), [cleaning services](/websites-for-cleaning-services/), [HVAC companies](/websites-for-hvac/), and [electricians](/websites-for-electricians/) that get found as the area grows.",
      "Aralo Studio already builds and maintains sites across North Idaho, including [Silver Valley Painting & Construction](/portfolio/silver-valley-painting/) in the Panhandle, so we know how search works in this county.",
    ],
    bodySections: [
      {
        heading: "What a Rathdrum website includes",
        paragraphs: [
          "For a growing bedroom community, the businesses that win are the ones a new arrival can find and trust in thirty seconds on a phone. A standard build covers a homepage, service pages, an about page, and a clear contact path, with a tappable phone number for the trades that live on quick calls.",
          "Every site includes mobile-first design, on-page SEO and AEO, Google Business Profile setup, and structured data. Rathdrum searches overlap with [Post Falls](/web-design-post-falls/), [Hayden](/web-design-hayden/), and [Coeur d'Alene](/web-design-coeur-dalene/), so the site is built to claim the slice of that fast-growing area you serve.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "Pricing is published below. Builds run from $495 plus $29 a month to $1,295 plus $99 a month for the full package with copywriting and a monthly SEO check-in. Page count and whether you want the writing handled for you are the main cost drivers. Most single-trade Rathdrum businesses do well on the entry or middle plan.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice. It's far cheaper than an agency and far less work than wrestling a template builder yourself.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy. You get the designer directly, before and after launch: one number, one person who knows your site. For a small Rathdrum business, that's worth more than a big agency's letterhead.",
          "We already build and maintain a ranking North Idaho trades site, so we're not learning this market on your dime. SEO is included from day one, and the sites are hand-coded to be fast and pass Core Web Vitals. If you want a Rathdrum website that pulls in work as the Prairie keeps growing, that's the build.",
        ],
      },
    ],
  },
];

export const INDUSTRIES: LandingPageData[] = [
  {
    slug: "/websites-for-contractors",
    category: "industry",
    label: "Contractors",
    metaTitle: "Contractor Web Design Idaho | Aralo Studio",
    metaDescription:
      "Mobile-first websites for contractors and trades across Idaho. Show your work, win bigger jobs, get found on Google. Built, hosted, and maintained by hand.",
    heading: "Websites for",
    headingAccent: "Contractors",
    subheading:
      "Show off your work, capture more leads, and stop losing jobs to competitors with better websites.",
    bodyEyebrow: "For Contractors",
    bodyHeading: "Built for the trades.",
    bodyParagraphs: [
      "Contractors live and die by referrals, and the first thing a referred customer does is search you on Google. Whether you serve [Boise](/web-design-boise/), [Meridian](/web-design-meridian/), or [Coeur d'Alene](/web-design-coeur-dalene/), if your site is slow, hard to read on a phone, or missing photos of your work, you've already lost half of those leads to someone else.",
      "Customers don't just search for a contractor's name, they verify. They check Google reviews, scan your photos, look at your service area, and read your about page to decide whether you're a real business or a fly-by-night. Every one of those checks happens on a phone, often in the middle of another task. If any of those signals is missing or sloppy, the next contractor in the results gets the call instead.",
    ],
    bodySections: [
      {
        heading: "What a contractor website includes",
        paragraphs: [
          "A working contractor site is built around a few jobs: show your best work clearly, make the service area obvious, prove you're licensed and real, and make it dead-simple to call or request a quote. A standard build covers a homepage, a services breakdown, a project gallery, an about page, and a contact path, with a tappable phone number on every page.",
          "Every site includes mobile-first design, on-page SEO and AEO so you rank for the trades-and-city searches that generate work, Google Business Profile setup, and structured data that lists your service area by city. We've done exactly this for [Silver Valley Painting & Construction](/portfolio/silver-valley-painting/), a North Idaho contractor with commercial clients like Best Buy and Idaho Fish & Game, including service-area pages targeting specific cities so the site ranks where the jobs are.",
        ],
      },
      {
        heading: "What drives the cost",
        paragraphs: [
          "Full pricing is below. Contractor sites start at $495 plus $29 a month and run to $1,295 plus $99 a month. For the trades, what usually moves the price is the photo gallery, the number of distinct services you want to rank for, and whether you want separate pages for each city you serve. A single-trade local outfit sits at the low end; a multi-service company covering several cities wants the larger plan.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice. A fast mobile site with clear photos of your past work is one of the highest-leverage marketing assets a contractor can own, and it costs a fraction of one good job.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy, and you work with him directly. That continuity matters for the trades, because your site needs to stay current as your services and service area change, and you need someone who picks up when you call.",
          "We build and maintain real contractor sites, SEO included from day one rather than sold later, hand-coded to load fast and pass Core Web Vitals. When a neighbor recommends you and the homeowner pulls out their phone and sees a clean, professional page with photos that match the job they need done, they're already half-decided to call. That's the difference between getting referrals and converting them.",
        ],
      },
    ],
  },
  {
    slug: "/websites-for-restaurants",
    category: "industry",
    label: "Restaurants",
    metaTitle: "Restaurant Web Design Idaho | Aralo Studio",
    metaDescription:
      "Restaurant websites for Idaho. Fast menus, current hours, and photos that bring hungry customers through the door. Built and maintained by hand.",
    heading: "Websites for",
    headingAccent: "Restaurants",
    subheading:
      "Hours, menu, location, and one-tap directions: exactly what hungry customers came to your site to find.",
    bodyEyebrow: "For Restaurants",
    bodyHeading: "Built for restaurants.",
    bodyParagraphs: [
      "When someone searches your restaurant, they want three things in under five seconds: are you open, what's on the menu, and how do I get there. Whether they're searching from [Boise](/web-design-boise/), [Meridian](/web-design-meridian/), or [Coeur d'Alene](/web-design-coeur-dalene/), a slow site or a clunky PDF menu sends them straight to the next option.",
      "Almost every \"where should we eat\" decision now starts with a phone. A group standing on the sidewalk pulls up your site to confirm you're open, check whether there's something for the picky eater, and see how far away you are. If your hours are out of date, your menu downloads as a 4 MB PDF, or the site doesn't load on mobile, that group is at the restaurant down the block before they finish reading the URL.",
    ],
    bodySections: [
      {
        heading: "What a restaurant website needs",
        paragraphs: [
          "A restaurant site doesn't need to be flashy. It needs to be fast, current, and honest. We build clean sites with a real, up-to-date menu that loads as a web page rather than a heavy PDF, clear hours, a photo gallery that looks like the food customers will actually eat, one-tap call and directions buttons, and tight Google Maps integration.",
          "Every build includes mobile-first design, on-page SEO and AEO, and a Google Business Profile set up properly so you show up in local pack results when people search nearby. Hours should match what's on the door, and the menu should match what's actually served, with prices that don't surprise anyone. Get those right and the site does its one job: get more people through the door.",
        ],
      },
      {
        heading: "What drives the cost",
        paragraphs: [
          "Pricing is published below, from $495 plus $29 a month to $1,295 plus $99 a month. For restaurants, the cost usually comes down to menu complexity, how many photos you want, and whether you need ongoing menu updates handled for you. A single-menu spot sits at the low end; a place with multiple menus, events, and frequent changes does better on a plan with more monthly edits.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice, which means keeping your hours and menu current is part of the deal, not a separate scramble every season.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy, and you reach him directly when the menu changes or the hours shift for a holiday. No ticket system, no waiting a week for a one-line edit.",
          "Sites are hand-coded to load fast and pass Core Web Vitals, which matters when a hungry table is deciding in real time, and SEO is built in from the start so you rank for local searches. If you want a restaurant site that's quick, current, and actually brings people in, that's what we build.",
        ],
      },
    ],
  },
  {
    slug: "/websites-for-cleaning-services",
    category: "industry",
    label: "Cleaning Services",
    metaTitle: "Cleaning Service Web Design Idaho | Aralo Studio",
    metaDescription:
      "Cleaning service websites for Idaho. Build trust, show service area, book more appointments. Fast, mobile-first, with local SEO included.",
    heading: "Websites for",
    headingAccent: "Cleaning Services",
    subheading:
      "Cleaning is a trust business. Your website needs to look the part: clean, organized, and easy to book.",
    bodyEyebrow: "For Cleaning Services",
    bodyHeading: "Built for cleaning businesses.",
    bodyParagraphs: [
      "Customers letting someone into their home or office need to feel confident before they pick up the phone. Whether you serve [Boise](/web-design-boise/) homeowners, [Nampa](/web-design-nampa/) commercial accounts, or [Meridian](/web-design-meridian/) families, a messy website undermines that confidence instantly.",
      "Cleaning is a trust business. Customers are giving you keys, alarm codes, and access to their valuables. Before they call, they look for a few signals that you're a real, established operation: a professional-looking site, recognizable photos of your team or vehicles, clear contact information, real reviews, a service area that makes sense, and a transparent process for getting started. Each signal is small; together they're the difference between a call and a pass.",
    ],
    bodySections: [
      {
        heading: "What a cleaning service website includes",
        paragraphs: [
          "We build cleaning sites that feel professional and well-organized: clear services, transparent pricing or quote requests, real reviews, service-area coverage, and a fast, mobile-friendly booking or contact flow. The goal is to make a nervous first-time customer feel safe enough to reach out.",
          "Every build includes mobile-first design, on-page SEO and AEO so people searching \"house cleaning near me\" actually find you, Google Business Profile setup, and structured data listing the cities you cover. A clean, organized site also pre-qualifies the people who contact you, so you spend less time on tire-kickers, and it gives happy customers an easy link to refer.",
        ],
      },
      {
        heading: "What drives the cost",
        paragraphs: [
          "Pricing is below, from $495 plus $29 a month to $1,295 plus $99 a month. For cleaning businesses, cost usually tracks with how many service types you offer (residential, commercial, move-out, recurring), whether you want online booking, and whether you want the copy written for you. A solo residential cleaner sits at the low end; a company with crews, commercial accounts, and booking needs the larger plan.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy, and you deal with the designer directly. For a trust business, it helps that the site is built and maintained by someone you can actually reach.",
          "Sites are hand-coded to load fast and pass Core Web Vitals, with SEO built in from day one. A clean, organized website does more work than most cleaning owners realize: it separates legitimate operators from the fly-by-night services, pre-qualifies leads, and makes referrals effortless. If that's the site you want, that's what we build.",
        ],
      },
    ],
  },
  {
    slug: "/websites-for-counselors",
    category: "industry",
    label: "Counselors",
    metaTitle: "Counselor Web Design Idaho | Aralo Studio",
    metaDescription:
      "Calm, professional websites for counselors and therapists in Idaho. Privacy-conscious, warm in tone, easy to update. Built and maintained by hand.",
    heading: "Websites for",
    headingAccent: "Counselors",
    subheading:
      "A warm, trustworthy presence online, built thoughtfully and with respect for client privacy.",
    bodyEyebrow: "For Counselors",
    bodyHeading: "Built for counselors and therapists.",
    bodyParagraphs: [
      "People reaching out to a counselor are often making a vulnerable decision. Whether they're searching from [Boise](/web-design-boise/) or [Eagle](/web-design-eagle/), your website needs to feel calm, professional, and human, not flashy or salesy.",
      "Most people searching for a counselor are already anxious before they land on your site. They're scanning for cues: does this person seem safe, do they understand what I'm dealing with, will the first call be awkward. A cluttered site with stock photos and salesy language pushes them away. A calm, clear page with real photos, plain language, and genuine warmth lowers the barrier. Every reduction in friction matters.",
    ],
    bodySections: [
      {
        heading: "What a counseling website includes",
        paragraphs: [
          "We build counselor sites with a warm tone, clear specialties and modalities, an honest about page, simple intake-friendly contact options, and privacy-conscious analytics. No tracking pixels you don't want, no third-party widgets that compromise client trust. The single most useful thing a counseling website can do is make it easy to take the first step.",
          "This is work we've actually done. [Crisis to Comfort Counseling](/portfolio/crisis-to-comfort/) in the Treasure Valley needed a site that felt calm rather than clinical, with low-friction contact and the ability to sell related products directly. We built it warm and clear, integrated Ecwid so the practice could manage products without breaking the design, and optimized it for local counseling searches. Every build includes mobile-first design, on-page SEO and AEO, and structured data.",
        ],
      },
      {
        heading: "What drives the cost",
        paragraphs: [
          "Pricing is below, from $495 plus $29 a month to $1,295 plus $99 a month. For counselors, cost usually depends on how many services or specialties you want detailed, whether you need intake forms or product sales integrated, and whether you want the copy written for you, which matters a lot in a field where tone is everything.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy, so the care and tone in your copy and design come from, and are maintained by, the same person. There's no junior rewriting your warmth into corporate filler.",
          "We've built a real, calming counseling site that ranks locally, with privacy handled thoughtfully and SEO included from the start. Sites are hand-coded to be fast and pass Core Web Vitals. The goal isn't to convince someone they need therapy, they already know. It's to make reaching out feel doable on a hard day. That's what we build for.",
        ],
      },
    ],
  },
  {
    slug: "/websites-for-hvac",
    category: "industry",
    label: "HVAC Companies",
    metaTitle: "HVAC Web Design Idaho | Aralo Studio",
    metaDescription:
      "Websites for HVAC companies in Idaho. Tappable phone numbers, 24/7 callouts, real photos. Built to convert calls, hosted and maintained by hand.",
    heading: "Websites for",
    headingAccent: "HVAC Companies",
    subheading:
      "Emergency calls go to whoever's website looks ready to take them. Yours should be.",
    bodyEyebrow: "For HVAC Companies",
    bodyHeading: "Built for HVAC.",
    bodyParagraphs: [
      "When the heat fails at 9pm, the homeowner doesn't browse. They search and call the first company that looks legitimate. That decision happens in seconds on a phone, and most HVAC sites lose it before the visitor reads the company name. Whether the call comes from [Nampa](/web-design-nampa/), [Post Falls](/web-design-post-falls/), or anywhere in between, the same pattern holds: the top result with a working phone number gets the work.",
      "That's why a tappable phone number at the top of every page matters more than the logo, the tagline, or the photo gallery. Customers in panic mode want one thing: someone who can be at their house tonight. A site that buries the phone number, requires scrolling on mobile, or routes through a contact form costs you the call.",
    ],
    bodySections: [
      {
        heading: "What an HVAC website needs",
        paragraphs: [
          "Beyond the phone number, your site has to broadcast what customers verify before they call: 24/7 emergency availability if you offer it, the cities you actually serve by name (not just \"the Treasure Valley\" or \"North Idaho\" but the specific towns people search), and real photos of your trucks, your team, and completed installs. Stock photos of models in hard hats actively hurt you.",
          "Every build includes mobile-first design with a click-to-call button on every page, on-page SEO and AEO so you rank for emergency and city-specific searches, Google Business Profile setup, and structured data listing your service area. We've written more about the specifics in [what every HVAC company's website needs to convert calls](/blog/hvac-website-convert-calls/). The short version: emergency-ready, phone number above the fold, real photos, service area listed by city. Not a brochure, a working tool.",
        ],
      },
      {
        heading: "What drives the cost",
        paragraphs: [
          "Pricing is below, from $495 plus $29 a month to $1,295 plus $99 a month. For HVAC companies, cost usually tracks with how many cities you want to rank for separately, whether you split residential and commercial, and whether you want the copy and photos handled for you.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice. One captured emergency call usually covers months of the plan.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy, and you reach him directly. When you need a seasonal promo added or a new service city listed before the cold snap, that's a quick message, not a support ticket.",
          "Sites are hand-coded to load fast and pass Core Web Vitals, which is exactly what wins the panic-mode search, and SEO is included from day one. If you want an HVAC site built to turn emergencies into booked calls, that's the work.",
        ],
      },
    ],
  },
  {
    slug: "/websites-for-landscapers",
    category: "industry",
    label: "Landscapers",
    metaTitle: "Landscaping Web Design Idaho | Aralo Studio",
    metaDescription:
      "Websites for landscaping and lawn care businesses in Idaho. Photo galleries, clear services, local SEO included. Built and maintained by hand.",
    heading: "Websites for",
    headingAccent: "Landscapers",
    subheading:
      "Photos sell landscaping. Your website should be a portfolio first.",
    bodyEyebrow: "For Landscapers",
    bodyHeading: "Built for landscaping and lawn care.",
    bodyParagraphs: [
      "Landscaping is seasonal but your website isn't. The homeowner planning a backyard overhaul in March is looking in February. The one figuring out fall cleanup is searching in late September. If your site only feels alive during peak season, you're missing the planning conversations that lead to bigger jobs. Your competitors in [Meridian](/web-design-meridian/), [Eagle](/web-design-eagle/), and [Hayden](/web-design-hayden/) are already in those conversations.",
      "Before-and-after photos do more selling than any copy ever will. The homeowner comparing three landscapers picks the one whose past work looks like the yard they want. A grid of clear, well-lit photos of recent jobs is the difference between a quote request and a back-button. Stock photos of generic green lawns won't do it.",
    ],
    bodySections: [
      {
        heading: "What a landscaping website includes",
        paragraphs: [
          "We build photo-forward landscaping sites: a gallery organized by project type (paver patios, sod installs, retaining walls, full design projects), a clear list of services with rough scope so leads pre-qualify themselves, a service area covering the cities you'll drive to, and an easy contact or quote path. Customers want to know whether you do design work, hardscape, irrigation, fertilization, or just mow-and-blow, so we say it plainly.",
          "Every build includes mobile-first design, on-page SEO and AEO, Google Business Profile setup, and structured data. A clean, photo-forward site also sets you apart from the lowball operators. The customer who chooses a landscaper on a $200 lower estimate is rarely the one you want anyway; the site that signals quality attracts customers who care about quality.",
        ],
      },
      {
        heading: "What drives the cost",
        paragraphs: [
          "Pricing is below, from $495 plus $29 a month to $1,295 plus $99 a month. For landscapers, the cost usually depends on the size of your photo gallery, how many distinct services you want detailed, and whether you want the copy written for you.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice, so adding photos from this season's best jobs is part of the deal.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy, and you work with him directly. Keeping a landscaping gallery current is the whole game, and it's easier when one message gets new photos live.",
          "Sites are hand-coded to load fast and pass Core Web Vitals, important when your gallery is image-heavy, and SEO is built in from day one. If you want a landscaping site that works like a portfolio and pulls in the planning-stage jobs, that's what we build.",
        ],
      },
    ],
  },
  {
    slug: "/websites-for-plumbers",
    category: "industry",
    label: "Plumbers",
    metaTitle: "Plumber Web Design Idaho | Aralo Studio",
    metaDescription:
      "Websites for plumbers in Idaho. Click-to-call on every page, emergency callouts, visible license info. Built to convert, hosted and maintained by hand.",
    heading: "Websites for",
    headingAccent: "Plumbers",
    subheading:
      "Emergency searches go to whoever shows up first and looks legitimate.",
    bodyEyebrow: "For Plumbers",
    bodyHeading: "Built for plumbing.",
    bodyParagraphs: [
      "Plumbing emergencies don't wait. A burst pipe at 6am, a basement filling at midnight, a water heater that died Sunday afternoon: the homeowner is searching from a phone, stressed, and calling the first plumber who looks like they can show up fast. Your competitors in [Meridian](/web-design-meridian/), [Nampa](/web-design-nampa/), and [Post Falls](/web-design-post-falls/) know this, and their sites are built for it.",
      "A working plumber's website is built around one button: call now. It needs to be tappable, visible without scrolling, and present on every page. Not buried in a contact section, not behind a form. Right there at the top, big enough to hit with a thumb. Combined with a clear 24/7 emergency callout if you offer it, that turns visitors into calls.",
    ],
    bodySections: [
      {
        heading: "What a plumbing website needs",
        paragraphs: [
          "The other thing customers verify before calling is that you're a real, licensed business. Your Idaho plumbing license, your bonding and insurance status, and the cities you serve all tell the homeowner you're legitimate, not a handyman with a Craigslist ad. We list cities by name, because each one is a search term Google can match. Reviews and real photos of your truck, your team, and completed installs do the rest.",
          "Every build includes mobile-first design with click-to-call on every page, on-page SEO and AEO so you rank for emergency and city searches, Google Business Profile setup, and structured data listing your service area. Spend twenty minutes photographing your next three jobs and those photos will do more for your bookings than any amount of copywriting.",
        ],
      },
      {
        heading: "What drives the cost",
        paragraphs: [
          "Pricing is below, from $495 plus $29 a month to $1,295 plus $99 a month. For plumbers, cost usually tracks with how many cities you want to rank for separately and whether you want the copy and photos handled for you. A single-city plumber sits at the low end; a company covering a wide service area wants the larger plan.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice. One captured emergency call covers months of the plan.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy, and you reach him directly, which is what a plumber wants: one number, no queue, fast changes when your hours or service area shift.",
          "Sites are hand-coded to load fast and pass Core Web Vitals, the thing that wins the emergency search, and SEO is included from day one. If you want a plumbing site built to convert panic into booked calls, that's the job.",
        ],
      },
    ],
  },
  {
    slug: "/websites-for-electricians",
    category: "industry",
    label: "Electricians",
    metaTitle: "Electrician Web Design Idaho | Aralo Studio",
    metaDescription:
      "Websites for electricians in Idaho. License info visible, residential and commercial sections, emergency callouts. Built and maintained by hand.",
    heading: "Websites for",
    headingAccent: "Electricians",
    subheading:
      "Trust is the whole game. Your website is where customers verify you before they call.",
    bodyEyebrow: "For Electricians",
    bodyHeading: "Built for electrical contractors.",
    bodyParagraphs: [
      "Electrical work is a trust business. The homeowner letting someone open a breaker panel, run wire through their walls, or tie a new circuit into their service is making a decision they take seriously. They're going to look you up before they call. What they find determines whether they reach out, or pick the next electrician in the results in [Meridian](/web-design-meridian/), [Post Falls](/web-design-post-falls/), or [Rathdrum](/web-design-rathdrum/).",
      "License and bonding information needs to be visible, not buried. Your Idaho electrical contractor license number, your insurance carrier, any specialty certifications: these are what a careful homeowner checks before they pick up the phone. A site that lists them clearly signals professionalism. A site that hides them feels evasive.",
    ],
    bodySections: [
      {
        heading: "What an electrician website needs",
        paragraphs: [
          "Your site also has to split residential from commercial work clearly. The homeowner with a buzzing outlet shouldn't land on a page about industrial three-phase installations and assume you don't do small jobs. The property manager looking for a commercial electrician shouldn't have to wade through a homeowner FAQ. Two clear sections, or two pages, with the work you do under each, make both kinds of customer feel like you're for them.",
          "Every build includes mobile-first design with a tappable phone number, on-page SEO and AEO, Google Business Profile setup, and structured data listing your service cities. If you offer 24/7 or after-hours emergency service, we make that prominent, because it's a real differentiator and exactly what someone with a tripping main breaker at 11pm is searching for.",
        ],
      },
      {
        heading: "What drives the cost",
        paragraphs: [
          "Pricing is below, from $495 plus $29 a month to $1,295 plus $99 a month. For electricians, cost usually depends on whether you split residential and commercial, how many cities you want to rank for, and whether you want the copy written for you.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy, and you work with him directly. Updating your license display, adding a service city, or listing a new certification is a quick message to the person who built the site.",
          "Sites are hand-coded to be fast and pass Core Web Vitals, with SEO included from day one. Combined with a clear license display, a tappable phone number, and the cities you cover, you've covered the things that turn a Google search into a call. That's what we build.",
        ],
      },
    ],
  },
  {
    slug: "/websites-for-painters",
    category: "industry",
    label: "Painters",
    metaTitle: "Painter Web Design Idaho | Aralo Studio",
    metaDescription:
      "Websites for interior and exterior painters in Idaho. Before-and-after galleries and real testimonials. Built and maintained by hand.",
    heading: "Websites for",
    headingAccent: "Painters",
    subheading:
      "Painting is sold visually. Your website should be a portfolio that does the selling.",
    bodyEyebrow: "For Painters",
    bodyHeading: "Built for interior and exterior painters.",
    bodyParagraphs: [
      "Painting is sold visually. The homeowner choosing between three painters, for an interior repaint, an exterior refresh, or a full custom-color job, picks the one whose finished work looks like what they want. Photos do the selling. If your site has a small handful of dim, low-resolution shots, you're losing to the painter in [Eagle](/web-design-eagle/), [Coeur d'Alene](/web-design-coeur-dalene/), or [Sandpoint](/web-design-sandpoint/) whose portfolio actually shows quality work.",
      "A real before-and-after gallery is the most valuable real estate on a painting website. Group projects by type: interior rooms with attention to cut lines and trim, full exteriors showing prep and finish, cabinet refinishes, decks. Each project should have at least one wide shot and one close-up of the finish. Bad lighting and crooked phone photos undersell good work.",
    ],
    bodySections: [
      {
        heading: "What a painting website includes",
        paragraphs: [
          "We build painting sites around the gallery, with clear service descriptions (interior, exterior, commercial, residential, cabinet refinishing, decks and fences, color consulting) so the customer with a 3,000-square-foot exterior and the one with a single accent wall both know you're for them. Testimonials carry a lot of weight in a price-sensitive trade, so we feature short, specific quotes from past customers by name and neighborhood.",
          "This is proven work for us. We build and maintain [Silver Valley Painting & Construction](/portfolio/silver-valley-painting/), a North Idaho painting and construction company with commercial clients like Best Buy and Idaho Fish & Game, complete with a project gallery, a commercial client logo strip, and service-area pages that rank for regional painting searches. Every build includes mobile-first design, on-page SEO and AEO, Google Business Profile setup, and structured data.",
        ],
      },
      {
        heading: "What drives the cost",
        paragraphs: [
          "Pricing is below, from $495 plus $29 a month to $1,295 plus $99 a month. For painters, cost usually tracks with gallery size, how many service types and cities you want to rank for, and whether you want the copy written for you. A solo residential painter sits at the low end; a company with commercial work and a wide service area wants the larger plan.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice, which keeps your gallery current as you finish new jobs.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy, and you work with him directly. We've already built a painting site that wins commercial bids, so this isn't theory.",
          "Sites are hand-coded to load fast and pass Core Web Vitals despite heavy galleries, with SEO included from day one. A clean, photo-forward site sets you apart from the lowball operators and attracts customers who care about quality work. You don't have to compete on price if you can show why your work holds up. That's what we build.",
        ],
      },
    ],
  },
  {
    slug: "/websites-for-salons",
    category: "industry",
    label: "Salons & Barbershops",
    metaTitle: "Salon & Barbershop Web Design Idaho | Aralo Studio",
    metaDescription:
      "Websites for hair salons and barbershops in Idaho. Real photos, current service menus, easy online booking. Built and maintained by hand.",
    heading: "Websites for",
    headingAccent: "Salons & Barbershops",
    subheading:
      "New clients pick a salon by the photos. Your website should make it easy to book.",
    bodyEyebrow: "For Salons & Barbershops",
    bodyHeading: "Built for hair salons and barbershops.",
    bodyParagraphs: [
      "A new client picks a salon the way they pick a restaurant: by checking the photos, reading the reviews, and seeing if the vibe matches what they're looking for. Your Instagram does some of this, your Google Business Profile does some, and your website is where serious prospects land when they want to commit. If your site is a dead page with no photos and no booking link, you're losing them to the salon in [Meridian](/web-design-meridian/) or [Coeur d'Alene](/web-design-coeur-dalene/) whose site felt like a real, current business.",
      "The most important thing on a salon website, besides the booking link, is photography. Photos of the space, the chairs, the front desk, the energy of the room. Photos of recent work from each stylist or barber: color, cuts, fades, balayage, beard work. Clients are picking a person and a chair as much as a service.",
    ],
    bodySections: [
      {
        heading: "What a salon website includes",
        paragraphs: [
          "We build salon sites around photos and the booking flow. A clear, current service menu with starting prices builds trust; vague \"call for quote\" pricing turns away clients who want to know what they're committing to. We list services in plain language with starting prices, and note when pricing varies by stylist.",
          "The booking link is one tap from anywhere on the site, whether you use Vagaro, Booksy, Square Appointments, or your own scheduler, and it sits in the navigation, on the homepage, and on every service page. Location, hours, and phone number are just as findable. Every build includes mobile-first design, on-page SEO and AEO, Google Business Profile setup, and structured data.",
        ],
      },
      {
        heading: "What drives the cost",
        paragraphs: [
          "Pricing is below, from $495 plus $29 a month to $1,295 plus $99 a month. For salons, cost usually depends on how many stylists or services you want featured, whether you want a full photo gallery per stylist, and whether you want the copy written for you.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice, so updating your menu or adding a new stylist is part of the deal.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy, and you reach him directly. Salon menus and staff change often, and one message gets the update live.",
          "Sites are hand-coded to load fast and pass Core Web Vitals, with SEO included from day one. A website that makes it easy to book turns browsers into appointments, and that's exactly what we build for.",
        ],
      },
    ],
  },
  {
    slug: "/websites-for-auto-detailers",
    category: "industry",
    label: "Auto Detailers",
    metaTitle: "Auto Detailer Web Design Idaho | Aralo Studio",
    metaDescription:
      "Websites for mobile auto detailers in Idaho. Before-and-after photos, package pricing, service area maps. Built and maintained by hand.",
    heading: "Websites for",
    headingAccent: "Auto Detailers",
    subheading:
      "When you don't have a shop, your website is the storefront.",
    bodyEyebrow: "For Auto Detailers",
    bodyHeading: "Built for mobile detailing.",
    bodyParagraphs: [
      "When you don't have a physical shop, your website is the storefront. The customer comparing three mobile detailers in [Meridian](/web-design-meridian/), [Nampa](/web-design-nampa/), or [Sandpoint](/web-design-sandpoint/) is deciding based entirely on what they can see online: photos, pricing, reviews, and whether your site looks legitimate. There's no walk-in foot traffic to back you up.",
      "Before-and-after photos sell detailing better than any list of services. A muddy truck next to the same truck after a full exterior detail. A crumb-filled interior next to a vacuumed, conditioned one. Engine bays, headlight restoration, paint correction with the swirl marks visible before and gone after. The customer paying $200 to $400 wants to see you can actually deliver.",
    ],
    bodySections: [
      {
        heading: "What a detailing website includes",
        paragraphs: [
          "We build detailing sites around a before-and-after gallery and clear package pricing. \"Express wash $50, full detail $250, ceramic coating from $800\" lets customers self-select and pre-qualifies your leads, so you spend less time on free quotes that go nowhere. Vague pricing or \"contact for quote\" feels like a sales gimmick in this trade.",
          "Because you're mobile, the service area is the other thing customers need stated clearly. We list the cities you'll drive to or show a coverage map, and put a booking link or simple contact form front and center so customers can pull the trigger from their phone. Every build includes mobile-first design (which matters double in a mobile business), on-page SEO and AEO, Google Business Profile setup, and structured data.",
        ],
      },
      {
        heading: "What drives the cost",
        paragraphs: [
          "Pricing is below, from $495 plus $29 a month to $1,295 plus $99 a month. For detailers, cost usually tracks with gallery size, how many packages and service areas you want detailed, and whether you want online booking or the copy handled for you.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy, and you work with him directly. Adding new before-and-after sets or a new package is a quick message, not a support queue.",
          "Sites are hand-coded to load fast and pass Core Web Vitals, with SEO included from day one. If you want a detailing site that works as your storefront and books jobs from a phone, that's what we build.",
        ],
      },
    ],
  },
  {
    slug: "/websites-for-real-estate",
    category: "industry",
    label: "Real Estate Agents",
    metaTitle: "Real Estate Agent Web Design Idaho | Aralo Studio",
    metaDescription:
      "Personal websites for real estate agents in Idaho. Stand out from brokerage templates with real bios and area expertise. Built and maintained by hand.",
    heading: "Websites for",
    headingAccent: "Real Estate Agents",
    subheading:
      "The brokerage gives you a generic site. Your prospects need to see who you actually are.",
    bodyEyebrow: "For Real Estate Agents",
    bodyHeading: "Built for individual real estate agents.",
    bodyParagraphs: [
      "Every real estate agent has a brokerage-provided website, and most look identical: same template, same stock photos, same bio block, same MLS feed. The agent who stands out has a personal site that shows who they are, where they work, and why a buyer or seller in [Meridian](/web-design-meridian/), [Eagle](/web-design-eagle/), or [Hayden](/web-design-hayden/) should pick them over the next agent on the results page.",
      "A professional headshot and a bio that reads like a person, not a corporate template, is the foundation. Where you grew up, how long you've worked the area, which clients you specialize in (first-time buyers, downsizing seniors, investors, custom builds): the specifics that help a prospect feel like you understand their situation. Generic \"experienced realtor with a passion for serving clients\" copy doesn't differentiate you from anyone.",
    ],
    bodySections: [
      {
        heading: "What an agent website includes",
        paragraphs: [
          "Area expertise is an agent's strongest differentiator, so we build pages that prove it. A page about Eagle that names specific neighborhoods, a Meridian page that talks about new construction north of the freeway versus the established neighborhoods south, a North Idaho page that knows the difference between lakefront and Prairie: that sends a clear signal that you're from here, not just licensed here.",
          "Testimonials carry more weight in real estate than almost any industry, because buying or selling a house is a six-figure decision. We feature three or four short, specific testimonials by name, neighborhood, and transaction type. Your contact info goes on every page with multiple ways to reach you. Every build includes mobile-first design, on-page SEO and AEO, Google Business Profile setup, and structured data.",
        ],
      },
      {
        heading: "What drives the cost",
        paragraphs: [
          "Pricing is below, from $495 plus $29 a month to $1,295 plus $99 a month. For agents, cost usually depends on how many neighborhood or area pages you want, whether you need IDX or MLS integration, and whether you want the bio and area copy written for you, which is often worth it since the writing is what separates you from the template.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy, and you work with the designer directly. We build high-end, personal sites for people whose business depends on credibility, including [Crystal Howard Mortgage](/portfolio/crystal-howard-mortgage/), a multi-page site built to position a lending specialist as a genuine expert. The same approach works for an agent who wants to stand out from the brokerage template.",
          "Sites are hand-coded to be fast and pass Core Web Vitals, with SEO included from day one. If you want a real estate site that shows prospects who you actually are, that's what we build.",
        ],
      },
    ],
  },
  {
    slug: "/websites-for-mortgage-brokers",
    category: "industry",
    label: "Mortgage Brokers",
    metaTitle: "Mortgage Broker Web Design Idaho | Aralo Studio",
    metaDescription:
      "Websites for mortgage brokers and loan officers in Idaho. Specialty loan pages, application integration, NMLS-compliant, built to win borrowers and referral partners.",
    heading: "Websites for",
    headingAccent: "Mortgage Brokers",
    subheading:
      "The lender hands you a generic, locked-down template. Borrowers and referral partners need to see why they should pick you.",
    bodyEyebrow: "For Mortgage Brokers",
    bodyHeading: "Built for loan officers and mortgage brokers.",
    bodyParagraphs: [
      "Most loan officers work off a corporate site that looks identical to every other officer at the lender: same template, same stock photo, same compliance-locked layout you can't really change. The broker who stands out has a personal site that shows their specialties, their market, and why a borrower or a referral partner in [Boise](/web-design-boise/), [Eagle](/web-design-eagle/), or [Coeur d'Alene](/web-design-coeur-dalene/) should call them instead of defaulting to a rate-shopping app.",
      "A mortgage site has two audiences, and both matter. Borrowers are checking whether you understand their situation, whether that's a jumbo purchase, new construction, a self-employed borrower with complex income, or a first-time buyer who needs the process explained in plain language. The realtors and builders who send you deals are deciding whether handing a client your name makes them look good. A weak, generic site costs you on both sides.",
    ],
    bodySections: [
      {
        heading: "What a mortgage broker website includes",
        paragraphs: [
          "The highest-leverage thing on a mortgage site is a dedicated page for each loan type you actually want to win. A jumbo page, a construction-financing page, a bank-statement-loan page, a renovation page, a first-time-buyer page: each one ranks on its own and tells a specific borrower you handle exactly their situation, instead of burying everything under a generic \"loan programs\" list. We pair those with an application or pre-approval start that connects to your point-of-sale system, a referral-partner section for the realtors and builders you work with, and the trust signals borrowers look for before they hand over their financials: real reviews, a real photo, and clear NMLS, licensing, and equal-housing disclosures handled properly in the footer and on every page.",
          "This is work we've done at the top end of the market. We built and maintain [Crystal Howard Mortgage](/portfolio/crystal-howard-mortgage/) in Garden City, a multi-page site for a jumbo and construction lending specialist, with dedicated landing pages for jumbo, construction, builder programs, renovation, and bank statement loans, a Fairway application integration, a builder partner section, an Idaho relocation guide, and NMLS compliance built into the disclosures. Every build includes mobile-first design, on-page SEO and AEO targeting Idaho mortgage keywords, Google Business Profile setup, and structured data.",
        ],
      },
      {
        heading: "What drives the cost",
        paragraphs: [
          "Pricing is published below, from $495 plus $29 a month to $1,295 plus $99 a month. For mortgage brokers, the cost is driven mostly by how many specialty loan-type pages you want, since each one is a separate ranking opportunity, whether you need application or point-of-sale integration, and whether you want the copy written for you, which matters in a field where the writing has to be both persuasive and compliant.",
          "No long-term contracts. The monthly covers hosting, maintenance, and edits, cancellable with thirty days notice. A multi-page specialist site like Crystal Howard's sits at the upper tier because the specialty pages and professional copywriting are exactly what position you as an expert rather than an order-taker. A single-focus loan officer can start smaller and add specialty pages as the business grows.",
        ],
      },
      {
        heading: "Why work with Aralo Studio",
        paragraphs: [
          "Aralo Studio is one person, Jeremy, and you work with him directly. Compliance and disclosures change, rates and programs shift, and referral partners come and go, so you want a site maintained by someone you can actually reach, not a ticket queue at the lender's marketing department.",
          "We've already built a high-end, ranking mortgage site for a real Idaho lender, so this isn't theory. SEO is included from day one rather than sold later, and the site is hand-coded to load fast and pass Core Web Vitals. If you trade referrals back and forth with [real estate agents](/websites-for-real-estate/), a site that makes both of you look professional is worth more than any rate sheet. That's what we build.",
        ],
      },
    ],
  },
];
