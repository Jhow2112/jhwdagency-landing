/**
 * seo-parity.mjs — diff two snapshots from seo-snapshot.mjs.
 *
 *   node scripts/seo-parity.mjs <baseline.json> <candidate.json>
 *
 * Exits non-zero on any BLOCKING drift, so it can gate a deploy.
 *
 * Findings are split by consequence, not by field:
 *   BLOCKING — changes Google acts on: a lost route, a changed canonical or
 *              URL, a robots flip, a missing sitemap entry.
 *   WARNING  — worth a human look but not ranking-critical on its own:
 *              wording changes, word-count swings, link-set changes.
 * Cosmetic copy edits are expected during a migration; a canonical moving is
 * never expected, and that distinction is the whole point of the split.
 */
import { readFileSync } from 'fs';

const [baseFile, candFile] = process.argv.slice(2);
if (!baseFile || !candFile) {
  console.error('usage: node scripts/seo-parity.mjs <baseline.json> <candidate.json>');
  process.exit(1);
}

const base = JSON.parse(readFileSync(baseFile, 'utf8'));
const cand = JSON.parse(readFileSync(candFile, 'utf8'));

const BLOCKING = ['canonical', 'ogUrl', 'robots', 'lang', 'h1Count', 'ogType', 'twitterCard'];
const WARNING = ['title', 'description', 'ogTitle', 'ogDescription', 'ogImage', 'h1'];

const blocking = [];
const warning = [];

// ── Route set ───────────────────────────────────────────────────────────────
const baseRoutes = Object.keys(base.pages);
const candRoutes = Object.keys(cand.pages);
for (const r of baseRoutes) {
  if (!candRoutes.includes(r)) blocking.push(`ROUTE LOST: ${r} — was built before, is not built now`);
}
for (const r of candRoutes) {
  if (!baseRoutes.includes(r)) warning.push(`ROUTE ADDED: ${r}`);
}

// ── Sitemap ─────────────────────────────────────────────────────────────────
for (const u of base.sitemap) {
  if (!cand.sitemap.includes(u)) blocking.push(`SITEMAP LOST: ${u}`);
}
for (const u of cand.sitemap) {
  if (!base.sitemap.includes(u)) warning.push(`SITEMAP ADDED: ${u}`);
}

// ── Per-route fields ────────────────────────────────────────────────────────
for (const route of baseRoutes) {
  const b = base.pages[route];
  const c = cand.pages[route];
  if (!c) continue;

  for (const f of BLOCKING) {
    if (JSON.stringify(b[f]) !== JSON.stringify(c[f])) {
      blocking.push(`${route}\n    ${f}: ${JSON.stringify(b[f])} → ${JSON.stringify(c[f])}`);
    }
  }
  for (const f of WARNING) {
    if (JSON.stringify(b[f]) !== JSON.stringify(c[f])) {
      warning.push(`${route}\n    ${f}: ${JSON.stringify(b[f])}\n         → ${JSON.stringify(c[f])}`);
    }
  }

  // Structured-data entity types must survive; losing LocalBusiness or
  // BreadcrumbList silently is exactly the kind of regression this exists for.
  const lost = b.jsonLdTypes.filter((t) => !c.jsonLdTypes.includes(t));
  if (lost.length) blocking.push(`${route}\n    JSON-LD types lost: ${lost.join(', ')}`);
  const gained = c.jsonLdTypes.filter((t) => !b.jsonLdTypes.includes(t));
  if (gained.length) warning.push(`${route}\n    JSON-LD types added: ${gained.join(', ')}`);

  const lostLinks = b.internalLinks.filter((l) => !c.internalLinks.includes(l));
  if (lostLinks.length) {
    warning.push(`${route}\n    internal links dropped (${lostLinks.length}): ${lostLinks.slice(0, 8).join(', ')}`);
  }

  // Big content swings usually mean a section failed to render.
  if (b.wordCount > 0) {
    const delta = (c.wordCount - b.wordCount) / b.wordCount;
    if (Math.abs(delta) > 0.15) {
      const msg = `${route}\n    word count: ${b.wordCount} → ${c.wordCount} (${(delta * 100).toFixed(0)}%)`;
      (Math.abs(delta) > 0.4 ? blocking : warning).push(msg);
    }
  }
}

// ── Report ──────────────────────────────────────────────────────────────────
console.log(`baseline:  ${base.routeCount} routes, ${base.sitemap.length} sitemap URLs`);
console.log(`candidate: ${cand.routeCount} routes, ${cand.sitemap.length} sitemap URLs\n`);

if (warning.length) {
  console.log(`── WARNINGS (${warning.length}) — review, not necessarily wrong ──`);
  warning.forEach((w) => console.log(`  ${w}`));
  console.log('');
}
if (blocking.length) {
  console.log(`── BLOCKING (${blocking.length}) — fix before cutover ──`);
  blocking.forEach((b) => console.log(`  ${b}`));
  console.log(`\n✗ PARITY FAILED: ${blocking.length} blocking difference(s)`);
  process.exit(1);
}
console.log(`✓ PARITY PASSED — no blocking drift across ${base.routeCount} routes${warning.length ? ` (${warning.length} warnings above)` : ''}`);
