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
 * 2. Uses tsx to run entry-server.tsx (React SSR entry point)
 * 3. Injects the rendered HTML string into the shell's <div id="root">
 * 4. Writes the result to dist/public/<route>/index.html
 *
 * The output HTML contains full page content (headings, body text, FAQ answers,
 * pricing, etc.) so non-JS crawlers can read everything.
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, 'dist/public');
<<<<<<< Updated upstream
const SITE_ORIGIN = 'https://jeremyhowardwebdesign.com';
const LOGO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663460467706/iZSGqPDN3DQvDbvL5mKtyB/jhwd-logo_27f82782.webp';

// Per-route metadata for head tag injection. Each route inherits defaults from index.html,
// but title, description, canonical, OG, and Twitter tags are replaced so crawlers see
// page-specific metadata even without executing JavaScript.
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
  },
};

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
  // <title>
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(meta.title)}</title>`);
  // <meta name="description">
  out = replaceMetaContent(out, /<meta name="description"[^>]*>/, meta.description);
  // <link rel="canonical">
  out = out.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${escapeAttr(meta.canonical)}" />`);
  // Open Graph
  out = replaceMetaContent(out, /<meta property="og:url"[^>]*>/, meta.ogUrl);
  out = replaceMetaContent(out, /<meta property="og:title"[^>]*>/, meta.ogTitle);
  out = replaceMetaContent(out, /<meta property="og:description"[^>]*>/, meta.ogDescription);
  out = replaceMetaContent(out, /<meta property="og:image"[^>]*content="[^"]*"[^>]*>/, meta.ogImage);
  // Twitter
  out = replaceMetaContent(out, /<meta name="twitter:title"[^>]*>/, meta.twitterTitle);
  out = replaceMetaContent(out, /<meta name="twitter:description"[^>]*>/, meta.twitterDescription);
  out = replaceMetaContent(out, /<meta name="twitter:image"[^>]*>/, meta.twitterImage);
  return out;
}
=======
const ROUTES = ['/', '/seo-aeo', '/active-seo', '/privacy', '/terms'];
>>>>>>> Stashed changes

// Read the Vite-built index.html shell
const indexHtml = readFileSync(join(DIST_DIR, 'index.html'), 'utf-8');

// Write a small helper script that tsx can run to get the rendered HTML
const helperScript = join(__dirname, '.prerender-helper.tsx');
writeFileSync(helperScript, `
import { render } from "./client/src/entry-server";
const url = process.argv[2] || "/";
const html = render(url);
process.stdout.write(html);
`);

for (const route of ROUTES) {
  try {
    // Run the helper via tsx to get the server-rendered HTML string
    const renderedBody = execSync(
      `npx tsx --tsconfig tsconfig.ssr.json "${helperScript}" "${route}"`,
      {
        cwd: __dirname,
        env: {
          ...process.env,
          NODE_ENV: 'production',
          // Suppress browser-only API warnings
          VITE_SSR: 'true',
        },
        maxBuffer: 10 * 1024 * 1024, // 10MB
      }
    ).toString();

    // Apply per-route head metadata (title, description, canonical, OG, Twitter)
    const meta = ROUTE_META[route];
    const htmlWithMeta = meta ? applyRouteMeta(indexHtml, meta) : indexHtml;

    // Inject rendered HTML into the <div id="root"> placeholder
    const fullHtml = htmlWithMeta.replace(
      '<div id="root"></div>',
      `<div id="root">${renderedBody}</div>`
    );

    // Write to the correct output path
    const outputDir = route === '/' ? DIST_DIR : join(DIST_DIR, route.slice(1));
    if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });
    const outputPath = join(outputDir, 'index.html');
    writeFileSync(outputPath, fullHtml, 'utf-8');

    // Quick sanity check: count text nodes in output
    const textLength = renderedBody.replace(/<[^>]+>/g, '').trim().length;
    console.log(`✓ Pre-rendered ${route} → ${outputPath} (${textLength} chars of text content)`);
  } catch (err) {
    console.error(`✗ Failed to pre-render ${route}:`, err.message?.slice(0, 300));
    // Don't fail the build — fall back to the empty shell with per-route meta applied
    const outputDir = route === '/' ? DIST_DIR : join(DIST_DIR, route.slice(1));
    if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });
    const meta = ROUTE_META[route];
    const fallbackHtml = meta ? applyRouteMeta(indexHtml, meta) : indexHtml;
    writeFileSync(join(outputDir, 'index.html'), fallbackHtml, 'utf-8');
    console.log(`  → Fell back to empty shell for ${route}`);
  }
}

// Clean up helper script
try { execSync(`rm "${helperScript}"`); } catch {}

console.log('Pre-rendering complete.');
