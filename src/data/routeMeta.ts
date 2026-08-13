/* Route metadata — Aralo Studio
   Ported from the ROUTE_META object in prerender.mjs, which built this at
   build time by shelling out to tsx to read the data files. Astro imports the
   data directly, so the indirection is gone but the values are unchanged —
   scripts/seo-parity.mjs checks that page-for-page against the React build.

   Also carries the sitemap fields (priority/changefreq/lastmod), since the
   sitemap is generated from this same list. */
import { CITIES, INDUSTRIES } from "./landingPages";
import { POSTS_BY_DATE, getExcerpt } from "./blogPosts";
import { PORTFOLIO_PROJECTS } from "./portfolioProjects";
import { SITE_ORIGIN } from "./siteSchema";

const LOGO_URL = `${SITE_ORIGIN}/og-image.png`;

export type RouteMeta = {
  /** Route path WITHOUT trailing slash ("/about"); "/" for the home page. */
  route: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType?: "website" | "article";
  sitemapPriority: string;
  sitemapChangefreq: string;
  /** Blog posts override lastmod so it reflects publish date, not build date. */
  sitemapLastmod?: string;
};

/** Path form used for canonicals and links: always a trailing slash. */
export const pathFor = (route: string) => (route === "/" ? "/" : `${route}/`);

const STANDALONE: RouteMeta[] = [
  {
    route: "/",
    title: "Web Design Meridian Idaho | Aralo Studio | From $495",
    description:
      "Custom small-business websites in Meridian, Idaho. Designed, built, hosted, and maintained by Jeremy Howard. Live in 5 days. Starting at $495.",
    ogTitle: "Web Design for Local Businesses | Aralo Studio",
    ogDescription:
      "Websites designed, built, hosted, and maintained for small businesses. From $495. Live in 5 days.",
    ogImage: LOGO_URL,
    sitemapPriority: "1.0",
    sitemapChangefreq: "monthly",
  },
  {
    route: "/seo-aeo",
    title: "SEO & AEO Services Meridian Idaho | Aralo Studio",
    description:
      "On-page SEO, Answer Engine Optimization, and Google Business Profile setup for Meridian and Treasure Valley businesses. Included in Plus and Premium plans.",
    ogTitle: "SEO & AEO Services | Aralo Studio",
    ogDescription:
      "Get found on Google and in AI search. On-page SEO, AEO, and Google Business Profile setup for local businesses.",
    ogImage: LOGO_URL,
    sitemapPriority: "0.8",
    sitemapChangefreq: "monthly",
  },
  {
    route: "/privacy",
    title: "Privacy Policy | Aralo Studio",
    description:
      "Privacy policy for Aralo Studio: what we collect, why, and how we protect your information when you use this website or send a contact form.",
    ogTitle: "Privacy Policy | Aralo Studio",
    ogDescription: "How Aralo Studio handles information collected through this site.",
    ogImage: LOGO_URL,
    sitemapPriority: "0.3",
    sitemapChangefreq: "yearly",
  },
  {
    route: "/terms",
    title: "Terms of Service | Aralo Studio",
    description:
      "Terms of service for Aralo Studio: the agreement governing engagement with our web design, hosting, and ongoing support services.",
    ogTitle: "Terms of Service | Aralo Studio",
    ogDescription: "The agreement governing engagement with Aralo Studio.",
    ogImage: LOGO_URL,
    sitemapPriority: "0.3",
    sitemapChangefreq: "yearly",
  },
  {
    route: "/active-seo",
    title: "SEO & Growth Plans Meridian & Treasure Valley | Aralo Studio",
    description:
      "Monthly SEO and AEO management for local businesses. Three plans from $199/month: schema tuning, Google Business Profile, optimized content.",
    ogTitle: "SEO & Growth | Monthly SEO Plans | Aralo Studio",
    ogDescription:
      "Monthly SEO and AEO management. Three plans starting at $199/month. Google Business Profile, schema tuning, optimized content. No contracts.",
    ogImage: LOGO_URL,
    sitemapPriority: "0.8",
    sitemapChangefreq: "monthly",
  },
  {
    route: "/free-preview",
    title: "Free Website Preview | Aralo Studio | Meridian Idaho",
    description:
      "Get a free custom homepage preview for your business. No cost, no commitment. Built by Aralo Studio in Meridian, Idaho. Ready in 48 hours.",
    ogTitle: "Free Website Preview | Aralo Studio",
    ogDescription:
      "Get a free custom homepage preview for your business. No cost, no commitment. Ready in 48 hours.",
    ogImage: `${SITE_ORIGIN}/aralo-mark.png`,
    sitemapPriority: "0.9",
    sitemapChangefreq: "monthly",
  },
  {
    route: "/about",
    title: "About Aralo Studio | Web Design in Meridian, Idaho & Nationwide",
    description:
      "Aralo Studio is a hands-on web studio for small businesses, based in Meridian, Idaho and working with clients across the U.S. Designed, built, hosted, and supported by Jeremy Howard.",
    ogTitle: "About Aralo Studio",
    ogDescription:
      "A hands-on web studio for small businesses, based in Meridian, Idaho and working with clients across the U.S.",
    ogImage: `${SITE_ORIGIN}/jeremy.jpg`,
    sitemapPriority: "0.7",
    sitemapChangefreq: "monthly",
  },
  {
    route: "/portfolio",
    title: "Web Design Portfolio | Aralo Studio | Meridian, Idaho",
    description:
      "See real websites built by Aralo Studio for small businesses. Custom web design for mortgage, construction, counseling, and more.",
    ogTitle: "Web Design Portfolio | Aralo Studio",
    ogDescription:
      "Real websites built for real businesses. Each project is designed, built, and hosted by Aralo Studio.",
    ogImage: LOGO_URL,
    sitemapPriority: "0.8",
    sitemapChangefreq: "monthly",
  },
  {
    route: "/industries",
    title: "Industries We Serve | Aralo Studio | Meridian, Idaho",
    description:
      "Websites for contractors, restaurants, HVAC, salons, and more across the Treasure Valley. Aralo Studio builds affordable sites for small businesses.",
    ogTitle: "Industries We Serve | Aralo Studio",
    ogDescription:
      "Websites for small businesses across the Treasure Valley. If you need a site that looks professional and gets found on Google, we can build it.",
    ogImage: LOGO_URL,
    sitemapPriority: "0.8",
    sitemapChangefreq: "monthly",
  },
  {
    route: "/blog",
    title: "Web Design & Local SEO Blog | Aralo Studio",
    description:
      "Plain-language writing on web design, local search, and getting found on Google. For small business owners, from Aralo Studio in Meridian, Idaho.",
    ogTitle: "Aralo Studio Blog",
    ogDescription:
      "Notes on web design, local search, and getting found. For small business owners.",
    ogImage: LOGO_URL,
    sitemapPriority: "0.7",
    sitemapChangefreq: "weekly",
  },
];

/** City + industry landing pages. `slug` already carries a leading slash. */
const LANDING: RouteMeta[] = [...CITIES, ...INDUSTRIES].map((lp) => ({
  route: lp.slug,
  title: lp.metaTitle,
  description: lp.metaDescription,
  ogTitle: lp.metaTitle,
  ogDescription: lp.metaDescription,
  ogImage: LOGO_URL,
  sitemapPriority: "0.7",
  sitemapChangefreq: "monthly",
}));

const CASE_STUDIES: RouteMeta[] = PORTFOLIO_PROJECTS.map((p) => ({
  route: `/portfolio/${p.slug}`,
  title: p.metaTitle,
  description: p.metaDescription,
  ogTitle: p.metaTitle,
  ogDescription: p.metaDescription,
  ogImage: `${SITE_ORIGIN}${p.heroImage}`,
  sitemapPriority: "0.7",
  sitemapChangefreq: "monthly",
}));

const BLOG: RouteMeta[] = POSTS_BY_DATE.map((p) => ({
  route: `/blog/${p.slug}`,
  title: `${p.title} | Aralo Studio`,
  // Matches the pre-Astro build, which called getExcerpt(p) with its default
  // 150-char cap rather than reading the optional `excerpt` field directly.
  description: getExcerpt(p),
  ogTitle: p.title,
  ogDescription: getExcerpt(p),
  ogImage: `${SITE_ORIGIN}${p.headerImage}`,
  ogType: "article",
  sitemapPriority: "0.6",
  sitemapChangefreq: "monthly",
  sitemapLastmod: p.date,
}));

/** Every indexable route. The 404 page is deliberately not here: it must stay
    out of the sitemap and carries noindex. */
export const ALL_ROUTES: RouteMeta[] = [
  ...STANDALONE,
  ...LANDING,
  ...CASE_STUDIES,
  ...BLOG,
];

const BY_ROUTE = new Map(ALL_ROUTES.map((m) => [m.route, m]));

/** Look up a route's meta, throwing rather than silently emitting a page with
    no title if a route file and this list ever drift apart. */
export function metaFor(route: string): RouteMeta {
  const m = BY_ROUTE.get(route);
  if (!m) throw new Error(`No route meta defined for "${route}"`);
  return m;
}
