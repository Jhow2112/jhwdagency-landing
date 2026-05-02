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
    metaTitle: "Contractor Web Design Meridian & Treasure Valley | Aralo Studio",
    metaDescription:
      "Professional websites for contractors and trades in Meridian and across the Treasure Valley. Show your work, win bigger jobs, get found on Google. Starting at $495.",
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
    metaTitle: "Restaurant Web Design Meridian & Treasure Valley | Aralo Studio",
    metaDescription:
      "Restaurant websites for Meridian and Treasure Valley spots that load fast, show your menu, and bring people in. Built and hosted by Aralo Studio. Starting at $495.",
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
    metaTitle: "Cleaning Service Web Design Meridian & Treasure Valley | Aralo Studio",
    metaDescription:
      "Cleaning service websites for Meridian and Treasure Valley businesses that build trust and book appointments. Fast, professional, mobile-friendly. Starting at $495.",
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
    metaTitle: "Counselor & Therapist Web Design Meridian & Treasure Valley | Aralo Studio",
    metaDescription:
      "Calm, professional websites for counselors and therapists in Meridian and across the Treasure Valley. Privacy-conscious and easy to update. Starting at $495.",
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
  {
    slug: "/websites-for-hvac",
    category: "industry",
    label: "HVAC Companies",
    metaTitle: "HVAC Web Design Meridian & Treasure Valley | Aralo Studio",
    metaDescription:
      "Websites for HVAC companies in Meridian and across the Treasure Valley. Tappable phone numbers, 24/7 callouts, real photos. Built to convert calls. Starting at $495.",
    heading: "Websites for",
    headingAccent: "HVAC Companies in the Treasure Valley",
    subheading:
      "Emergency calls go to whoever's website looks ready to take them. Yours should be.",
    bodyEyebrow: "For HVAC Companies",
    bodyHeading: "Built for HVAC.",
    bodyParagraphs: [
      "When the heat fails at 9pm, the homeowner doesn't browse — they search and call the first company that looks legitimate. That decision happens in seconds on a phone, and most HVAC sites lose it before the visitor reads the company name. Whether the call is coming from [Meridian](/web-design-meridian/), Eagle, or [Boise](/web-design-boise/), the same pattern holds: the top result with a working phone number gets the work.",
      "That's why a tappable phone number at the top of every page matters more than the logo, the tagline, or the photo gallery. Customers in panic mode want one thing: someone who can be at their house tonight. A site that buries the phone number, requires scrolling on mobile, or routes through a contact form costs you the call.",
      "Beyond the phone number, your website needs to broadcast what customers verify before they call: 24/7 emergency availability if you offer it, the cities you actually serve (not just \"Treasure Valley\" but Meridian, Eagle, Nampa, Caldwell — the names people search), and real photos of your trucks, your team, and your completed installations. Stock photos of models in hard hats actively hurt you.",
      "We've written more about the specifics in [what every HVAC company's website needs to convert calls](/blog/hvac-website-convert-calls/). The short version: emergency-ready, phone number above the fold, real photos, service area listed by city. Not a brochure. A working tool.",
    ],
  },
  {
    slug: "/websites-for-landscapers",
    category: "industry",
    label: "Landscapers",
    metaTitle: "Landscaping Web Design Meridian & Treasure Valley | Aralo Studio",
    metaDescription:
      "Websites for landscaping and lawn care businesses in Meridian and across the Treasure Valley. Photo galleries, clear services, year-round visibility. Starting at $495.",
    heading: "Websites for",
    headingAccent: "Landscapers in the Treasure Valley",
    subheading:
      "Photos sell landscaping. Your website should be a portfolio first.",
    bodyEyebrow: "For Landscapers",
    bodyHeading: "Built for landscaping and lawn care.",
    bodyParagraphs: [
      "Landscaping is seasonal but your website isn't. The homeowner planning a backyard overhaul in March is looking in February. The one trying to figure out fall cleanup is searching in late September. If your site only feels alive during peak season, you're missing the planning conversations that lead to bigger jobs. Your competitors in [Meridian](/web-design-meridian/) and [Eagle](/web-design-eagle/) are already in those conversations.",
      "Before-and-after photos do more selling than any copy ever will. The homeowner comparing three landscapers picks the one whose past work looks like the yard they want. A grid of clear, well-lit photos of recent jobs — paver patios, sod installs, retaining walls, full design projects — is the difference between a quote request and a back-button. Stock photos of generic green lawns won't do it.",
      "The other thing customers want clearly stated: what services you actually offer and roughly what they cost. Most landscaping sites are vague about whether they do design work, hardscape, irrigation, fertilization, or just mow-and-blow. A short list with descriptions sets expectations and pre-qualifies the leads who fill out your contact form. So does a clear service area covering the cities you'll drive to — Meridian, Eagle, Star, Kuna, the parts of the Treasure Valley you actually serve.",
      "A clean, photo-forward website also sets you apart from the lowball operators. The customer who chooses a landscaper based on a $200 lower estimate is rarely the customer you want anyway. The site that signals quality work attracts customers who care about quality work. You don't have to compete on price if you compete on showing up looking professional.",
    ],
  },
  {
    slug: "/websites-for-plumbers",
    category: "industry",
    label: "Plumbers",
    metaTitle: "Plumber Web Design Meridian & Treasure Valley | Aralo Studio",
    metaDescription:
      "Websites for plumbers in Meridian and across the Treasure Valley. Click-to-call on every page, emergency callouts, license info visible. Built to convert calls. Starting at $495.",
    heading: "Websites for",
    headingAccent: "Plumbers in the Treasure Valley",
    subheading:
      "Emergency searches go to whoever shows up first and looks legitimate.",
    bodyEyebrow: "For Plumbers",
    bodyHeading: "Built for plumbing.",
    bodyParagraphs: [
      "Plumbing emergencies don't wait. A burst pipe at 6am, a basement filling at midnight, a water heater that died Sunday afternoon — the homeowner is searching from a phone, panicked, and calling the first plumber who looks like they can show up fast. Your competitors in [Meridian](/web-design-meridian/) and [Nampa](/web-design-nampa/) know this, and their sites are built for it.",
      "A working plumber's website is built around one button: call now. That button needs to be tappable, visible without scrolling, and present on every page. Not buried in a contact section. Not behind a form. Right there at the top, big enough to hit with a thumb. Combined with a clear \"24/7 emergency service\" callout (if you offer it), this turns visitors into calls.",
      "The other thing customers verify before calling: that you're a real, licensed business. Your Idaho plumbing license, your bonding and insurance status, the cities you serve — all of these tell the homeowner you're legitimate, not a fly-by-night handyman with a Craigslist ad. List the cities by name (Meridian, Nampa, Caldwell, Boise, Eagle), not just \"the Treasure Valley.\" Each city name is a search term Google can match.",
      "Reviews matter. So do real photos — your truck, your team, completed installs — that signal you're an actual plumbing business and not a stock-photo template. Spend the 20 minutes to take photos of the next three jobs you complete. They'll do more for your bookings than any amount of copywriting.",
    ],
  },
  {
    slug: "/websites-for-electricians",
    category: "industry",
    label: "Electricians",
    metaTitle: "Electrician Web Design Meridian & Treasure Valley | Aralo Studio",
    metaDescription:
      "Websites for electricians in Meridian and across the Treasure Valley. License info visible, residential and commercial sections, emergency callouts. Starting at $495.",
    heading: "Websites for",
    headingAccent: "Electricians in the Treasure Valley",
    subheading:
      "Trust is the whole game. Your website is where customers verify you before they call.",
    bodyEyebrow: "For Electricians",
    bodyHeading: "Built for electrical contractors.",
    bodyParagraphs: [
      "Electrical work is a trust business. The homeowner letting someone open a breaker panel, run wire through their walls, or tie a new circuit into their service is making a decision they take seriously. They're going to look you up before they call. What they find on your website determines whether they reach out — or pick the next electrician on the search results page in [Meridian](/web-design-meridian/), [Caldwell](/web-design-caldwell/), or wherever they're based.",
      "License and bonding information needs to be visible, not buried. Your Idaho electrical contractor license number, your insurance carrier, any specialty certifications — these are the things a careful homeowner checks before they pick up the phone. A site that lists them clearly signals professionalism. A site that hides them feels evasive.",
      "The other thing your site needs to do is split residential from commercial work clearly. The homeowner with a buzzing outlet doesn't want to land on a page about industrial three-phase installations and assume you don't do small jobs. Likewise, the property manager looking for a commercial electrician doesn't want to read a homeowner FAQ. Two clear sections — or two pages — with the kinds of work you do under each, makes both kinds of customers feel like you're for them.",
      "If you offer 24/7 or after-hours emergency service, say so prominently. That's a competitive differentiator and it's what someone with a tripping main breaker at 11pm is searching for. Combined with the cities you cover (Meridian, Caldwell, Boise, Eagle, Nampa), a clear license display, and a tappable phone number, you've covered the things that turn a Google search into a call.",
    ],
  },
  {
    slug: "/websites-for-painters",
    category: "industry",
    label: "Painters",
    metaTitle: "Painter Web Design Meridian & Treasure Valley | Aralo Studio",
    metaDescription:
      "Websites for interior and exterior painters in Meridian and across the Treasure Valley. Before-and-after galleries, clear service descriptions, real testimonials. Starting at $495.",
    heading: "Websites for",
    headingAccent: "Painters in the Treasure Valley",
    subheading:
      "Painting is sold visually. Your website should be a portfolio that does the selling.",
    bodyEyebrow: "For Painters",
    bodyHeading: "Built for interior and exterior painters.",
    bodyParagraphs: [
      "Painting is sold visually. The homeowner choosing between three painters — for an interior repaint, an exterior refresh, or a full custom-color job — picks the one whose finished work looks like what they want. Photos do the selling. If your site has a small handful of dim, low-resolution shots, you're losing to the painter in [Meridian](/web-design-meridian/) or [Eagle](/web-design-eagle/) whose portfolio actually shows quality work.",
      "A real before-and-after gallery is the most valuable real estate on a painting website. Group projects by type: interior rooms (with attention to cut lines and trim work), full exteriors (showing prep, primer, finish coats), kitchen cabinet refinishes, decks. Each project should have at least one wide shot and one close-up of the finish. Bad lighting and crooked phone photos undersell good work — take the time to shoot in good daylight.",
      "Be clear about what kinds of jobs you take. Interior, exterior, commercial, residential, cabinet refinishing, decks and fences, color consulting — list them. The customer with a 3,000-square-foot exterior repaint shouldn't have to wonder if you do that scale. The customer with a single accent wall shouldn't worry they're too small. Clear service descriptions pre-qualify your leads so you spend less time on phone calls that go nowhere.",
      "Testimonials carry a lot of weight in a price-sensitive trade. Pick three or four short quotes from past customers — by name, by neighborhood — that mention the things that distinguish your work. Cleanliness, on-time finish, no surprises on the bill, careful prep. These are the proof points that let a customer pick the painter they trust over the one who quoted $400 less. You don't have to compete on price if you can show why your work holds up longer.",
    ],
  },
  {
    slug: "/websites-for-salons",
    category: "industry",
    label: "Salons & Barbershops",
    metaTitle: "Salon & Barbershop Web Design Meridian & Treasure Valley | Aralo Studio",
    metaDescription:
      "Websites for hair salons and barbershops in Meridian and across the Treasure Valley. Real photos, current service menus, easy booking. Starting at $495.",
    heading: "Websites for",
    headingAccent: "Salons & Barbershops in the Treasure Valley",
    subheading:
      "New clients pick a salon by the photos. Your website should make it easy to book.",
    bodyEyebrow: "For Salons & Barbershops",
    bodyHeading: "Built for hair salons and barbershops.",
    bodyParagraphs: [
      "A new client picks a salon the way they pick a restaurant: by checking the photos, reading the reviews, and seeing if the vibe matches what they're looking for. Your Instagram does some of this work. Your Google Business Profile does some. Your website is where serious prospects land when they want to commit. If your site is a dead WordPress page with no photos and no booking link, you're losing them to the salon in [Meridian](/web-design-meridian/) or [Nampa](/web-design-nampa/) whose site felt like a real, current business.",
      "The most important thing on a salon website, besides the booking link, is photography. Photos of the space — chairs, sinks, the front desk, the energy of the room. Photos of recent work from each stylist or barber on staff. Color, cuts, fades, balayage, beard work — whatever your specialties are, show them. Clients are picking a person and a chair as much as they're picking a service.",
      "A clear, current service menu with pricing builds trust. Vague \"starting at\" pricing or \"call for quote\" turns away clients who want to know what they're committing to before they book. List your services in plain language — women's cut, men's cut, root touch-up, partial highlights, balayage, color correction — with starting prices. If pricing varies by stylist, say so. Transparency wins clients.",
      "The booking link should be one tap from anywhere on the site. Whether you use Vagaro, Booksy, Square Appointments, or your own scheduler, that link needs to be in the navigation, on the homepage, on every service page. Clients who decide they want to book don't want to hunt for the button. The location, hours, and phone number should be just as findable. A website that makes it easy to book turns browsers into appointments.",
    ],
  },
  {
    slug: "/websites-for-auto-detailers",
    category: "industry",
    label: "Auto Detailers",
    metaTitle: "Auto Detailer Web Design Meridian & Treasure Valley | Aralo Studio",
    metaDescription:
      "Websites for mobile auto detailers in Meridian and across the Treasure Valley. Before-and-after photos, package pricing, service area maps. Starting at $495.",
    heading: "Websites for",
    headingAccent: "Auto Detailers in the Treasure Valley",
    subheading:
      "When you don't have a shop, your website is the storefront.",
    bodyEyebrow: "For Auto Detailers",
    bodyHeading: "Built for mobile detailing.",
    bodyParagraphs: [
      "When you don't have a physical shop, your website is the storefront. The customer comparing three mobile detailers in [Meridian](/web-design-meridian/), [Kuna](/web-design-kuna/), or anywhere across the Treasure Valley is making a decision based entirely on what they can see online. Photos. Pricing. Reviews. Whether your site looks legitimate. There's no walk-in foot traffic to back you up.",
      "Before-and-after photos sell detailing work better than any list of services. A muddy F-150 next to the same truck after a full exterior detail. An interior shot showing crumb-filled carpet next to a vacuumed, conditioned interior. Engine bay shots, headlight restoration, paint correction with the swirl marks visible before and gone after. The customer paying $200–$400 for a detail wants to see that you can actually deliver.",
      "Package pricing in plain English helps customers self-select. \"Express wash $50, full detail $250, ceramic coating from $800\" gives someone a sense of what they're committing to. Vague pricing or \"contact for quote\" feels like a sales gimmick. Transparent packages — what's included, how long it takes, the price — pre-qualify your leads so you spend less time on free quotes that go nowhere.",
      "Because you're mobile, the service area is the other thing customers need clearly stated. List the cities you'll drive to (Meridian, Kuna, Boise, Nampa, Eagle, wherever you actually serve), or show a coverage map. A booking link or a simple contact form lets the customer pull the trigger from their phone, where they're probably reading your site in the first place. Mobile-first matters double in a mobile business.",
    ],
  },
  {
    slug: "/websites-for-real-estate",
    category: "industry",
    label: "Real Estate Agents",
    metaTitle: "Real Estate Agent Web Design Meridian & Treasure Valley | Aralo Studio",
    metaDescription:
      "Personal websites for real estate agents in Meridian and across the Treasure Valley. Stand out from cookie-cutter brokerage sites. Real bios, area expertise, real testimonials. Starting at $495.",
    heading: "Websites for",
    headingAccent: "Real Estate Agents in the Treasure Valley",
    subheading:
      "The brokerage gives you a generic site. Your prospects need to see who you actually are.",
    bodyEyebrow: "For Real Estate Agents",
    bodyHeading: "Built for individual real estate agents.",
    bodyParagraphs: [
      "Every real estate agent in the Treasure Valley has a brokerage-provided website. Most of them look identical. Same template, same stock photos, same bio block, same MLS feed. The agent who stands out is the one with a personal site that actually shows who they are, where they work, and why a buyer or seller in [Meridian](/web-design-meridian/), [Eagle](/web-design-eagle/), or anywhere across the Valley should pick them over the next agent on the search results page.",
      "A professional headshot and a bio that reads like a person, not a corporate template, is the foundation. Where you grew up, how long you've worked the area, what kinds of clients you specialize in — first-time buyers, downsizing seniors, investors, custom builds — the specifics that help a prospect feel like you understand their situation. Generic \"experienced realtor with a passion for serving clients\" copy doesn't differentiate you from anyone else.",
      "Area expertise is a real estate agent's strongest differentiator. A site that shows you know specific neighborhoods — schools, HOAs, recent comps, what kinds of homes sell where — proves you bring more than MLS access. A page about Eagle that mentions specific neighborhoods, a Meridian page that talks about new construction north of the freeway versus the more established neighborhoods south, sends a clear signal: this agent is from here, not just licensed here.",
      "Testimonials from past clients carry more weight in real estate than almost any industry. Buying or selling a house is a six-figure decision. The buyer or seller wants to hear from other buyers or sellers — by name, by neighborhood, by what kind of transaction — that you handled their deal well. Three or four short, specific testimonials do more than any list of designations. Your contact info should be on every page, with multiple ways to reach you, because the prospect ready to pick up the phone shouldn't have to hunt.",
    ],
  },
];
