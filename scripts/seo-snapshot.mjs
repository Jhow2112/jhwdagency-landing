/**
 * seo-snapshot.mjs — capture every SEO-relevant signal from a built site.
 *
 * Used as the safety net for the Astro migration: snapshot the React build,
 * then diff the Astro build against it. A migration damages rankings through
 * small silent drift (a canonical changing, a trailing slash appearing, a
 * route quietly not building), not through obvious breakage, so this compares
 * field-by-field rather than eyeballing pages.
 *
 *   node scripts/seo-snapshot.mjs <distDir> <outFile>
 *   node scripts/seo-parity.mjs   <baseline> <candidate>
 *
 * Deliberately reads built HTML rather than source: it verifies what actually
 * ships, which is the only thing Google sees.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const distDir = process.argv[2];
const outFile = process.argv[3];
if (!distDir || !outFile) {
  console.error('usage: node scripts/seo-snapshot.mjs <distDir> <outFile>');
  process.exit(1);
}

/** Recursively collect every index.html (one per route). */
function findPages(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) findPages(full, acc);
    else if (entry === 'index.html') acc.push(full);
  }
  return acc;
}

const attr = (html, re) => {
  const m = html.match(re);
  return m ? m[1].trim() : null;
};

/** Decode entities so lengths and comparisons reflect what a human sees. */
const decode = (s) =>
  s == null
    ? null
    : s
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#(?:39|x27);/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&nbsp;/g, ' ');

/**
 * Collect JSON-LD as a sorted list of @type values rather than raw text.
 * The two builds serialise JSON differently (key order, whitespace), so
 * comparing raw strings would produce noise; the set of entity types is the
 * part that actually matters to a crawler.
 */
function jsonLdTypes(html) {
  const types = [];
  for (const block of html.matchAll(
    /<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g
  )) {
    try {
      const parsed = JSON.parse(block[1]);
      const nodes = Array.isArray(parsed) ? parsed : parsed['@graph'] || [parsed];
      for (const node of nodes) {
        const t = node['@type'];
        types.push(Array.isArray(t) ? t.join('+') : t || '(untyped)');
      }
    } catch {
      types.push('(INVALID JSON)');
    }
  }
  return types.sort();
}

const pages = {};
for (const file of findPages(distDir).sort()) {
  const html = readFileSync(file, 'utf8');
  const rel = '/' + relative(distDir, file).replace(/index\.html$/, '');
  const route = rel === '/' ? '/' : rel;

  // Strip script/style before counting words so bundled JS never inflates it.
  const text = (html.match(/<body[\s\S]*<\/body>/) || [''])[0]
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]*>/g, ' ');

  pages[route] = {
    title: decode(attr(html, /<title>([\s\S]*?)<\/title>/)),
    description: decode(attr(html, /<meta name="description" content="([^"]*)"/)),
    canonical: attr(html, /<link rel="canonical" href="([^"]*)"/),
    robots: attr(html, /<meta name="robots" content="([^"]*)"/),
    ogTitle: decode(attr(html, /<meta property="og:title" content="([^"]*)"/)),
    ogDescription: decode(attr(html, /<meta property="og:description" content="([^"]*)"/)),
    ogUrl: attr(html, /<meta property="og:url" content="([^"]*)"/),
    ogImage: attr(html, /<meta property="og:image" content="([^"]*)"/),
    ogType: attr(html, /<meta property="og:type" content="([^"]*)"/),
    twitterCard: attr(html, /<meta name="twitter:card" content="([^"]*)"/),
    lang: attr(html, /<html[^>]*lang="([^"]*)"/),
    h1Count: (html.match(/<h1[\s>]/g) || []).length,
    h1: decode(
      attr(html, /<h1[^>]*>([\s\S]*?)<\/h1>/)?.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ')
    ),
    jsonLdTypes: jsonLdTypes(html),
    // Internal link targets, deduped — catches a nav or footer link silently
    // dropping out during conversion.
    internalLinks: [
      ...new Set(
        [...html.matchAll(/href="(\/[^"#?]*)"/g)]
          .map((m) => m[1])
          .filter((h) => !/\.[a-z0-9]{2,5}$/i.test(h))
      ),
    ].sort(),
    wordCount: text.split(/\s+/).filter(Boolean).length,
  };
}

// Sitemap URLs, so a route dropping out of the sitemap is caught too.
let sitemap = [];
try {
  sitemap = [...readFileSync(join(distDir, 'sitemap.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1])
    .sort();
} catch {
  sitemap = ['(no sitemap.xml)'];
}

writeFileSync(
  outFile,
  JSON.stringify({ routeCount: Object.keys(pages).length, sitemap, pages }, null, 2)
);
console.log(`✓ Snapshot: ${Object.keys(pages).length} routes, ${sitemap.length} sitemap URLs → ${outFile}`);
