/**
 * prerender.mjs
 * Post-build SSR script: renders each route to full static HTML using
 * react-dom/server + tsx. No browser required — works in any Node.js
 * environment including cloud build containers.
 *
 * Usage: node prerender.mjs
 * Run after: vite build
 *
 * How it works:
 * 1. Reads the Vite-built index.html as a shell template
 * 2. Loads city + industry landing-page data from client/src/data/landingPages.ts
 *    (via tsx so we can keep one source of truth in TS)
 * 3. Uses tsx to run entry-server.tsx (React SSR entry point) per route
 * 4. Injects the rendered HTML string into the shell's <div id="root">
 * 5. Writes the result to dist/public/<route>/index.html
 * 6. Generates dist/public/sitemap.xml from the same route list
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, 'dist/public');
const SITE_ORIGIN = 'https://aralostudio.com';
const LOGO_URL = 'https://aralostudio.com/og-image.png';

// ─── Static-route metadata ────────────────────────────────────────────────
// Per-route head tags for the four hand-built routes. Landing pages (cities +
// industries) are appended below from landingPages.ts so adding a new entry
// only requires a single edit in that data file.
const ROUTE_META = {
  '/': {
    title: 'Web Design Meridian Idaho | Aralo Studio | Starting at $495',
    description:
      'Professional web design in Meridian, Idaho for local businesses. Custom websites designed, built, hosted, and maintained by Jeremy Howard. Live in 5 days. Starting at $495. Serving Boise, Nampa, Caldwell, and the Treasure Valley.',
    canonical: `${SITE_ORIGIN}/`,
    ogTitle: 'Professional Web Design for Local Businesses | Aralo Studio',
    ogDescription:
      'Websites designed, built, hosted, and maintained for small businesses. Starting at $495. Live in 5 days.',
    ogUrl: `${SITE_ORIGIN}/`,
    ogImage: LOGO_URL,
    twitterTitle: 'Professional Web Design for Local Businesses | Aralo Studio',
    twitterDescription:
      'Websites designed, built, hosted, and maintained for small businesses. Starting at $495. Live in 5 days.',
    twitterImage: LOGO_URL,
    sitemapPriority: '1.0',
    sitemapChangefreq: 'monthly',
  },
  '/seo-aeo': {
    title: 'SEO & AEO Services Meridian Idaho | Aralo Studio',
    description:
      'On-page SEO, Answer Engine Optimization, and Google Business Profile setup for local businesses. Included in Plus and Premium web design plans. Meridian, Idaho.',
    canonical: `${SITE_ORIGIN}/seo-aeo/`,
    ogTitle: 'SEO & AEO Services | Aralo Studio',
    ogDescription:
      'Get found on Google and in AI search. On-page SEO, AEO, and Google Business Profile setup for local businesses.',
    ogUrl: `${SITE_ORIGIN}/seo-aeo/`,
    ogImage: LOGO_URL,
    twitterTitle: 'SEO & AEO Services | Aralo Studio',
    twitterDescription:
      'Get found on Google and in AI search. On-page SEO, AEO, and Google Business Profile setup for local businesses.',
    twitterImage: LOGO_URL,
    sitemapPriority: '0.8',
    sitemapChangefreq: 'monthly',
  },
  '/privacy': {
    title: 'Privacy Policy | Aralo Studio',
    description:
      'Privacy policy for Aralo Studio — how we collect, use, and protect information on our website.',
    canonical: `${SITE_ORIGIN}/privacy/`,
    ogTitle: 'Privacy Policy | Aralo Studio',
    ogDescription: 'How Aralo Studio handles information collected through this site.',
    ogUrl: `${SITE_ORIGIN}/privacy/`,
    ogImage: LOGO_URL,
    twitterTitle: 'Privacy Policy | Aralo Studio',
    twitterDescription: 'How Aralo Studio handles information collected through this site.',
    twitterImage: LOGO_URL,
    sitemapPriority: '0.3',
    sitemapChangefreq: 'yearly',
  },
  '/terms': {
    title: 'Terms of Service | Aralo Studio',
    description: 'Terms of service for Aralo Studio — the agreement governing use of our services.',
    canonical: `${SITE_ORIGIN}/terms/`,
    ogTitle: 'Terms of Service | Aralo Studio',
    ogDescription: 'The agreement governing engagement with Aralo Studio.',
    ogUrl: `${SITE_ORIGIN}/terms/`,
    ogImage: LOGO_URL,
    twitterTitle: 'Terms of Service | Aralo Studio',
    twitterDescription: 'The agreement governing engagement with Aralo Studio.',
    twitterImage: LOGO_URL,
    sitemapPriority: '0.3',
    sitemapChangefreq: 'yearly',
  },
  '/active-seo': {
    title: 'SEO & Growth Plans Meridian & Treasure Valley | Aralo Studio',
    description:
      'Monthly SEO and AEO management for local businesses. Three plans starting at $199/month: on-page SEO, schema tuning, Google Business Profile management, and SEO-optimized content. No contracts.',
    canonical: `${SITE_ORIGIN}/active-seo/`,
    ogTitle: 'SEO & Growth | Monthly SEO Plans | Aralo Studio',
    ogDescription:
      'Monthly SEO and AEO management. Three plans starting at $199/month. Google Business Profile, schema tuning, optimized content. No contracts.',
    ogUrl: `${SITE_ORIGIN}/active-seo/`,
    ogImage: LOGO_URL,
    twitterTitle: 'SEO & Growth | Monthly SEO Plans | Aralo Studio',
    twitterDescription:
      'Monthly SEO and AEO management. Three plans starting at $199/month. Google Business Profile, schema tuning, optimized content. No contracts.',
    twitterImage: LOGO_URL,
    sitemapPriority: '0.8',
    sitemapChangefreq: 'monthly',
  },
};

// ─── Load landing page + blog data from TS via tsx ────────────────────────
const dataHelper = join(__dirname, '.prerender-data.tsx');
writeFileSync(
  dataHelper,
  `import { CITIES, INDUSTRIES } from "./client/src/data/landingPages";
import { POSTS_BY_DATE, getExcerpt } from "./client/src/data/blogPosts";
import { PORTFOLIO_PROJECTS } from "./client/src/data/portfolioProjects";
process.stdout.write(JSON.stringify({
  cities: CITIES,
  industries: INDUSTRIES,
  posts: POSTS_BY_DATE.map(p => ({
    slug: p.slug,
    title: p.title,
    date: p.date,
    category: p.category,
    headerImage: p.headerImage,
    excerpt: getExcerpt(p),
  })),
  projects: PORTFOLIO_PROJECTS.map(p => ({
    slug: p.slug,
    name: p.name,
    metaTitle: p.metaTitle,
    metaDescription: p.metaDescription,
    heroImage: p.heroImage,
  })),
}));
`
);
let cities = [];
let industries = [];
let posts = [];
let projects = [];
try {
  const dataJson = execSync(
    `npx tsx --tsconfig tsconfig.ssr.json "${dataHelper}"`,
    {
      cwd: __dirname,
      env: { ...process.env, NODE_ENV: 'production', VITE_SSR: 'true' },
      maxBuffer: 10 * 1024 * 1024,
    }
  ).toString();
  const parsed = JSON.parse(dataJson);
  cities = parsed.cities || [];
  industries = parsed.industries || [];
  posts = parsed.posts || [];
  projects = parsed.projects || [];
} finally {
  try { unlinkSync(dataHelper); } catch {}
}

for (const lp of [...cities, ...industries]) {
  ROUTE_META[lp.slug] = {
    title: lp.metaTitle,
    description: lp.metaDescription,
    canonical: `${SITE_ORIGIN}${lp.slug}/`,
    ogTitle: lp.metaTitle,
    ogDescription: lp.metaDescription,
    ogUrl: `${SITE_ORIGIN}${lp.slug}/`,
    ogImage: LOGO_URL,
    twitterTitle: lp.metaTitle,
    twitterDescription: lp.metaDescription,
    twitterImage: LOGO_URL,
    sitemapPriority: '0.7',
    sitemapChangefreq: 'monthly',
  };
}

// Portfolio hub
ROUTE_META['/portfolio'] = {
  title: 'Web Design Portfolio | Aralo Studio | Meridian, Idaho',
  description:
    'See real websites built by Aralo Studio for small businesses. Custom web design for mortgage, construction, counseling, and more.',
  canonical: `${SITE_ORIGIN}/portfolio/`,
  ogTitle: 'Web Design Portfolio | Aralo Studio',
  ogDescription:
    'Real websites built for real businesses. Each project is designed, built, and hosted by Aralo Studio.',
  ogUrl: `${SITE_ORIGIN}/portfolio/`,
  ogImage: LOGO_URL,
  twitterTitle: 'Web Design Portfolio | Aralo Studio',
  twitterDescription:
    'Real websites built for real businesses. Each project is designed, built, and hosted by Aralo Studio.',
  twitterImage: LOGO_URL,
  sitemapPriority: '0.8',
  sitemapChangefreq: 'monthly',
};

// Individual case studies
for (const p of projects) {
  const route = `/portfolio/${p.slug}`;
  const ogImage = `${SITE_ORIGIN}${p.heroImage}`;
  ROUTE_META[route] = {
    title: p.metaTitle,
    description: p.metaDescription,
    canonical: `${SITE_ORIGIN}${route}/`,
    ogTitle: p.metaTitle,
    ogDescription: p.metaDescription,
    ogUrl: `${SITE_ORIGIN}${route}/`,
    ogImage,
    twitterTitle: p.metaTitle,
    twitterDescription: p.metaDescription,
    twitterImage: ogImage,
    sitemapPriority: '0.7',
    sitemapChangefreq: 'monthly',
  };
}

// Industries hub
ROUTE_META['/industries'] = {
  title:
    'Industries We Serve | Small Business Web Design Meridian Idaho | Aralo Studio',
  description:
    'Professional websites for contractors, restaurants, HVAC companies, salons, and more. Aralo Studio builds affordable websites for small businesses across the Treasure Valley.',
  canonical: `${SITE_ORIGIN}/industries/`,
  ogTitle: 'Industries We Serve | Aralo Studio',
  ogDescription:
    'Websites for small businesses across the Treasure Valley. If you need a site that looks professional and gets found on Google, we can build it.',
  ogUrl: `${SITE_ORIGIN}/industries/`,
  ogImage: LOGO_URL,
  twitterTitle: 'Industries We Serve | Aralo Studio',
  twitterDescription:
    'Websites for small businesses across the Treasure Valley. If you need a site that looks professional and gets found on Google, we can build it.',
  twitterImage: LOGO_URL,
  sitemapPriority: '0.8',
  sitemapChangefreq: 'monthly',
};

// Blog index
ROUTE_META['/blog'] = {
  title: 'Blog | Aralo Studio',
  description:
    'Plain-language writing on web design, local search, and getting found — from Aralo Studio in Meridian, Idaho.',
  canonical: `${SITE_ORIGIN}/blog/`,
  ogTitle: 'Aralo Studio Blog',
  ogDescription:
    'Notes on web design, local search, and getting found. For small business owners.',
  ogUrl: `${SITE_ORIGIN}/blog/`,
  ogImage: LOGO_URL,
  twitterTitle: 'Aralo Studio Blog',
  twitterDescription:
    'Notes on web design, local search, and getting found. For small business owners.',
  twitterImage: LOGO_URL,
  sitemapPriority: '0.7',
  sitemapChangefreq: 'weekly',
};

// Individual blog posts
for (const p of posts) {
  const route = `/blog/${p.slug}`;
  const ogImage = `${SITE_ORIGIN}${p.headerImage}`;
  ROUTE_META[route] = {
    title: `${p.title} | Aralo Studio`,
    description: p.excerpt,
    canonical: `${SITE_ORIGIN}${route}/`,
    ogTitle: p.title,
    ogDescription: p.excerpt,
    ogUrl: `${SITE_ORIGIN}${route}/`,
    ogImage,
    twitterTitle: p.title,
    twitterDescription: p.excerpt,
    twitterImage: ogImage,
    sitemapPriority: '0.6',
    sitemapChangefreq: 'monthly',
    sitemapLastmod: p.date,
    /** og:type override — articles get "article" instead of the default "website". */
    ogType: 'article',
  };
}

const ROUTES = Object.keys(ROUTE_META);


function escapeAttr(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function replaceMetaContent(html, selectorRegex, value) {
  return html.replace(selectorRegex, (match) =>
    match.replace(/content="[^"]*"/, `content="${escapeAttr(value)}"`)
  );
}

function applyRouteMeta(html, meta) {
  let out = html;
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(meta.title)}</title>`);
  out = replaceMetaContent(out, /<meta name="description"[^>]*>/, meta.description);
  out = out.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${escapeAttr(meta.canonical)}" />`);
  out = replaceMetaContent(out, /<meta property="og:url"[^>]*>/, meta.ogUrl);
  out = replaceMetaContent(out, /<meta property="og:title"[^>]*>/, meta.ogTitle);
  out = replaceMetaContent(out, /<meta property="og:description"[^>]*>/, meta.ogDescription);
  out = replaceMetaContent(out, /<meta property="og:image"[^>]*content="[^"]*"[^>]*>/, meta.ogImage);
  out = replaceMetaContent(out, /<meta name="twitter:title"[^>]*>/, meta.twitterTitle);
  out = replaceMetaContent(out, /<meta name="twitter:description"[^>]*>/, meta.twitterDescription);
  out = replaceMetaContent(out, /<meta name="twitter:image"[^>]*>/, meta.twitterImage);
  if (meta.ogType) {
    out = replaceMetaContent(out, /<meta property="og:type"[^>]*>/, meta.ogType);
  }
  return out;
}

const indexHtml = readFileSync(join(DIST_DIR, 'index.html'), 'utf-8');

const helperScript = join(__dirname, '.prerender-helper.tsx');
writeFileSync(helperScript, `
import { render } from "./client/src/entry-server";
const url = process.argv[2] || "/";
const html = render(url);
process.stdout.write(html);
`);

for (const route of ROUTES) {
  try {
    const renderedBody = execSync(
      `npx tsx --tsconfig tsconfig.ssr.json "${helperScript}" "${route}"`,
      {
        cwd: __dirname,
        env: { ...process.env, NODE_ENV: 'production', VITE_SSR: 'true' },
        maxBuffer: 10 * 1024 * 1024,
      }
    ).toString();

    const meta = ROUTE_META[route];
    const htmlWithMeta = meta ? applyRouteMeta(indexHtml, meta) : indexHtml;
    const fullHtml = htmlWithMeta.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedBody}</div>`
    );

    const outputDir = route === '/' ? DIST_DIR : join(DIST_DIR, route.slice(1));
    if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });
    const outputPath = join(outputDir, 'index.html');
    writeFileSync(outputPath, fullHtml, 'utf-8');

    const textLength = renderedBody.replace(/<[^>]+>/g, '').trim().length;
    console.log(`✓ Pre-rendered ${route} → ${outputPath} (${textLength} chars of text content)`);
  } catch (err) {
    console.error(`✗ Failed to pre-render ${route}:`, err.message?.slice(0, 300));
    const outputDir = route === '/' ? DIST_DIR : join(DIST_DIR, route.slice(1));
    if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });
    const meta = ROUTE_META[route];
    const fallbackHtml = meta ? applyRouteMeta(indexHtml, meta) : indexHtml;
    writeFileSync(join(outputDir, 'index.html'), fallbackHtml, 'utf-8');
    console.log(`  → Fell back to empty shell for ${route}`);
  }
}

try { unlinkSync(helperScript); } catch {}

// ─── Generate sitemap.xml from the same route list ───────────────────────
const today = new Date().toISOString().slice(0, 10);
const sitemapEntries = ROUTES.map((route) => {
  const m = ROUTE_META[route];
  // Trailing slash matches canonicals + Netlify's pretty-URL normalization,
  // so Googlebot crawls the sitemap URL directly with no 301 redirect.
  const loc = route === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${route}/`;
  // Per-route lastmod override (used by blog posts so date reflects publish).
  const lastmod = m.sitemapLastmod || today;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${m.sitemapChangefreq}</changefreq>
    <priority>${m.sitemapPriority}</priority>
  </url>`;
}).join('\n\n');
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${sitemapEntries}

</urlset>
`;
writeFileSync(join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log(`✓ Generated sitemap.xml with ${ROUTES.length} URLs`);

// ─── Generate og-image.png (1200×630) for social previews ────────────────
// Brand lockup + tagline on cream. Rasterized with @resvg/resvg-js using
// bundled Inter fonts so the output is identical across build environments.
{
  const { Resvg } = await import('@resvg/resvg-js');
  const interRegular = readFileSync(
    join(__dirname, 'node_modules/@fontsource/inter/files/inter-latin-400-normal.woff')
  );
  const interSemibold = readFileSync(
    join(__dirname, 'node_modules/@fontsource/inter/files/inter-latin-600-normal.woff')
  );

  // Mark at 240×224, centered horizontally at x=600 (so x_left = 480), y_top=120
  // ARALO wordmark below at y=440, STUDIO tag at y=505, tagline at y=560
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#f3efe6"/>
    <rect x="40" y="40" width="1120" height="550" fill="none" stroke="rgba(31,42,34,0.14)" stroke-width="1"/>
    <g transform="translate(480 120) scale(4 4)">
      <path d="M2 50 L20 6 L38 50 Z" stroke="#1f2a22" stroke-width="2.6" stroke-linejoin="round" fill="none"/>
      <path d="M22 50 L40 6 L58 50 Z" stroke="#b85433" stroke-width="2.6" stroke-linejoin="round" fill="none"/>
    </g>
    <text x="600" y="440" font-family="Inter" font-weight="600" font-size="84" letter-spacing="3.4" text-anchor="middle" fill="#1f2a22">ARALO</text>
    <text x="600" y="478" font-family="Inter" font-weight="400" font-size="14" letter-spacing="3.1" text-anchor="middle" fill="#b85433">STUDIO</text>
    <text x="600" y="558" font-family="Inter" font-weight="400" font-size="26" text-anchor="middle" fill="#2f3b32">Built to last. Made to grow.</text>
  </svg>`;

  const resvg = new Resvg(svg, {
    font: {
      fontBuffers: [interRegular, interSemibold],
      loadSystemFonts: false,
    },
  });
  const png = resvg.render().asPng();
  writeFileSync(join(DIST_DIR, 'og-image.png'), png);
  console.log(`✓ Generated og-image.png (1200×630, ${(png.length / 1024).toFixed(1)} KB)`);
}

console.log('Pre-rendering complete.');
