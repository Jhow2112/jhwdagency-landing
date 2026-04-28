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
const SITE_ORIGIN = 'https://jeremyhowardwebdesign.com';
const LOGO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/jhwd-logo_27f82782.webp';

// ─── Static-route metadata ────────────────────────────────────────────────
// Per-route head tags for the four hand-built routes. Landing pages (cities +
// industries) are appended below from landingPages.ts so adding a new entry
// only requires a single edit in that data file.
const ROUTE_META = {
  '/': {
    title: 'Web Design Meridian Idaho | Jeremy Howard Web Design | Starting at $495',
    description:
      'Professional web design in Meridian, Idaho for local businesses. Custom websites designed, built, hosted, and maintained by Jeremy Howard. Live in 5 days. Starting at $495. Serving Boise, Nampa, Caldwell, and the Treasure Valley.',
    canonical: `${SITE_ORIGIN}/`,
    ogTitle: 'Professional Web Design for Local Businesses | Jeremy Howard Web Design',
    ogDescription:
      'Websites designed, built, hosted, and maintained for small businesses. Starting at $495. Live in 5 days.',
    ogUrl: `${SITE_ORIGIN}/`,
    ogImage: LOGO_URL,
    twitterTitle: 'Professional Web Design for Local Businesses | Jeremy Howard Web Design',
    twitterDescription:
      'Websites designed, built, hosted, and maintained for small businesses. Starting at $495. Live in 5 days.',
    twitterImage: LOGO_URL,
    sitemapPriority: '1.0',
    sitemapChangefreq: 'monthly',
  },
  '/seo-aeo': {
    title: 'SEO & AEO Services for Small Businesses | Jeremy Howard Web Design | Meridian, Idaho',
    description:
      'On-page SEO, Answer Engine Optimization, and Google Business Profile setup for local businesses. Included in Plus and Premium web design plans. Meridian, Idaho.',
    canonical: `${SITE_ORIGIN}/seo-aeo/`,
    ogTitle: 'SEO & AEO Services | Jeremy Howard Web Design',
    ogDescription:
      'Get found on Google and in AI search. On-page SEO, AEO, and Google Business Profile setup for local businesses.',
    ogUrl: `${SITE_ORIGIN}/seo-aeo/`,
    ogImage: LOGO_URL,
    twitterTitle: 'SEO & AEO Services | Jeremy Howard Web Design',
    twitterDescription:
      'Get found on Google and in AI search. On-page SEO, AEO, and Google Business Profile setup for local businesses.',
    twitterImage: LOGO_URL,
    sitemapPriority: '0.8',
    sitemapChangefreq: 'monthly',
  },
  '/privacy': {
    title: 'Privacy Policy | Jeremy Howard Web Design',
    description:
      'Privacy policy for Jeremy Howard Web Design — how we collect, use, and protect information on our website.',
    canonical: `${SITE_ORIGIN}/privacy/`,
    ogTitle: 'Privacy Policy | Jeremy Howard Web Design',
    ogDescription: 'How Jeremy Howard Web Design handles information collected through this site.',
    ogUrl: `${SITE_ORIGIN}/privacy/`,
    ogImage: LOGO_URL,
    twitterTitle: 'Privacy Policy | Jeremy Howard Web Design',
    twitterDescription: 'How Jeremy Howard Web Design handles information collected through this site.',
    twitterImage: LOGO_URL,
    sitemapPriority: '0.3',
    sitemapChangefreq: 'yearly',
  },
  '/terms': {
    title: 'Terms of Service | Jeremy Howard Web Design',
    description: 'Terms of service for Jeremy Howard Web Design — the agreement governing use of our services.',
    canonical: `${SITE_ORIGIN}/terms/`,
    ogTitle: 'Terms of Service | Jeremy Howard Web Design',
    ogDescription: 'The agreement governing engagement with Jeremy Howard Web Design.',
    ogUrl: `${SITE_ORIGIN}/terms/`,
    ogImage: LOGO_URL,
    twitterTitle: 'Terms of Service | Jeremy Howard Web Design',
    twitterDescription: 'The agreement governing engagement with Jeremy Howard Web Design.',
    twitterImage: LOGO_URL,
    sitemapPriority: '0.3',
    sitemapChangefreq: 'yearly',
  },
};

// ─── Load landing page data from TS via tsx ──────────────────────────────
const dataHelper = join(__dirname, '.prerender-data.tsx');
writeFileSync(
  dataHelper,
  `import { CITIES, INDUSTRIES } from "./client/src/data/landingPages";\nprocess.stdout.write(JSON.stringify({ cities: CITIES, industries: INDUSTRIES }));\n`
);
let cities = [];
let industries = [];
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
  const loc = route === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${route}`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
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

console.log('Pre-rendering complete.');
