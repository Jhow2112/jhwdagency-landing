/* Sitewide JSON-LD — Aralo Studio
   Was inlined in client/index.html and shipped byte-identical on every page.
   Lives here now so BaseLayout can emit it and per-page schema (Article,
   BreadcrumbList, FAQPage) can reference the same @id nodes instead of
   redeclaring the business.

   Ported verbatim from the pre-Astro head with two additions noted below. */

export const SITE_ORIGIN = "https://aralostudio.com";
export const SITE_NAME = "Aralo Studio";

/** Meridian, ID — matches the geo.position meta tag carried over from the
    previous head, and the PostalAddress below. */
export const GEO = { lat: 43.6121, lng: -116.3915 };

export const localBusiness = {
  "@type": "LocalBusiness",
  "@id": `${SITE_ORIGIN}/#business`,
  name: SITE_NAME,
  description:
    "Aralo Studio is a one-person web design practice in Idaho. We build professional, affordable websites for local businesses across the Treasure Valley, North Idaho, and nationwide. Services include custom web design, visual identity, SEO, hosting, and ongoing support.",
  url: `${SITE_ORIGIN}/`,
  telephone: "+12086152884",
  email: "info@aralostudio.com",

  // Added during the Astro migration: Google lists `image` as recommended for
  // LocalBusiness, and its absence was flagged in the SEO audit. `logo` is the
  // mark; `image` is the social card, the only brand image at a usable size.
  image: `${SITE_ORIGIN}/og-image.png`,
  logo: `${SITE_ORIGIN}/aralo-mark.png`,

  // Also added during the migration. Values match the geo.position/ICBM meta
  // tags that were already in the head, so this asserts nothing new.
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.lat,
    longitude: GEO.lng,
  },

  // Profiles that identify this same business elsewhere. These tie the site to
  // the Google Business Profile and Facebook page as one entity rather than
  // three unrelated ones.
  //
  // The Google entry is the canonical ?cid= permalink, resolved from the
  // share.google shortlink that was supplied: shortlinks are regenerable and
  // carry campaign parameters, whereas the CID is the profile's stable
  // identifier. Derived from the Maps place URL's hex pair
  // (0xc9d2d032ad462f98) and confirmed to load the Aralo Studio listing.
  sameAs: [
    "https://maps.google.com/?cid=14542915062806753176",
    "https://www.facebook.com/profile.php?id=61588879543196",
  ],

  founder: {
    "@type": "Person",
    name: "Jeremy Howard",
    jobTitle: "Web Designer & Developer",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "3953 N Park Crossing Ave",
    addressLocality: "Meridian",
    addressRegion: "ID",
    postalCode: "83646",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "City", name: "Meridian", sameAs: "https://en.wikipedia.org/wiki/Meridian,_Idaho" },
    { "@type": "City", name: "Boise", sameAs: "https://en.wikipedia.org/wiki/Boise,_Idaho" },
    { "@type": "City", name: "Nampa", sameAs: "https://en.wikipedia.org/wiki/Nampa,_Idaho" },
    { "@type": "City", name: "Caldwell", sameAs: "https://en.wikipedia.org/wiki/Caldwell,_Idaho" },
    { "@type": "City", name: "Eagle", sameAs: "https://en.wikipedia.org/wiki/Eagle,_Idaho" },
    { "@type": "City", name: "Star" },
    {
      "@type": "City",
      name: "Coeur d'Alene",
      sameAs: "https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho",
    },
    { "@type": "City", name: "Post Falls", sameAs: "https://en.wikipedia.org/wiki/Post_Falls,_Idaho" },
    { "@type": "City", name: "Hayden", sameAs: "https://en.wikipedia.org/wiki/Hayden,_Idaho" },
    { "@type": "City", name: "Rathdrum", sameAs: "https://en.wikipedia.org/wiki/Rathdrum,_Idaho" },
    { "@type": "City", name: "Sandpoint", sameAs: "https://en.wikipedia.org/wiki/Sandpoint,_Idaho" },
    { "@type": "State", name: "Idaho" },
    { "@type": "AdministrativeArea", name: "Treasure Valley" },
    { "@type": "AdministrativeArea", name: "North Idaho" },
  ],
  serviceType: ["Web Design", "Web Development", "Visual Identity", "Local SEO", "Website Hosting"],
  priceRange: "$495 – $1,295",
  openingHours: "Mo-Fr 09:00-18:00",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Design Packages",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Minimum Website Package",
        description:
          "Up to 3 pages, custom design, mobile-friendly, hosting and support included. Ideal for businesses that need a clean, professional online presence fast.",
        price: "495",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "495",
          priceCurrency: "USD",
          unitText: "one-time setup",
        },
      },
      {
        "@type": "Offer",
        name: "Plus Website Package",
        description:
          "Up to 5 pages, custom design, contact form, Google Business setup, SEO optimization, hosting and support included.",
        price: "895",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "895",
          priceCurrency: "USD",
          unitText: "one-time setup",
        },
      },
      {
        "@type": "Offer",
        name: "Premium Website Package",
        description:
          "Up to 10 pages, full custom design, professional copywriting, domain setup assistance, monthly SEO audit, hosting and maintenance included.",
        price: "1295",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "1295",
          priceCurrency: "USD",
          unitText: "one-time setup",
        },
      },
    ],
  },

  // NOTE: `review` and `aggregateRating` are carried over unchanged, but the
  // SEO audit flagged them: Google has excluded self-serving reviews (a
  // business marking up reviews about itself, on its own site) from rich
  // results since 2019. They will not produce stars and may draw a Search
  // Console notice. Kept pending a decision — removing them costs nothing
  // visible, since the testimonials render from their own component.
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Ann McGaver" },
      reviewBody:
        "Jeremy made the whole process easy. He asked the right questions, handled everything from design to hosting, and had my site live within a week. It looks professional, it's easy to navigate, and I've already had new clients find me through it.",
      itemReviewed: { "@type": "LocalBusiness", name: SITE_NAME },
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Organization", name: "Ice Ice Shavey" },
      reviewBody:
        "Aralo Studio did an amazing job on my website, very fast service and catered to everything I needed! Highly recommend!",
      itemReviewed: { "@type": "LocalBusiness", name: SITE_NAME },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "2",
    bestRating: "5",
  },
};

export const webSite = {
  "@type": "WebSite",
  "@id": `${SITE_ORIGIN}/#website`,
  url: `${SITE_ORIGIN}/`,
  name: SITE_NAME,
  description:
    "Built to last. Made to grow. Based in Meridian, Idaho. Starting at $495.",
  publisher: { "@id": `${SITE_ORIGIN}/#business` },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_ORIGIN}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

/** The sitewide graph every page emits. */
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [localBusiness, webSite],
};

/** Breadcrumbs for a route, matching the shape BreadcrumbSchema.tsx emitted. */
export function breadcrumbList(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}
