/* Fails the build if any internal link points at a page that doesn't ship.
 *
 * Why this exists: hiding the Silver Valley Painting case study removed
 * /portfolio/silver-valley-painting/, but ten paragraphs of landing-page copy
 * still linked to it as Markdown inside data files. Nothing would have caught
 * that — the build succeeds, and _redirects quietly bounces visitors to the
 * hub, so the page "works" while the copy promises a case study that isn't
 * there. Any removed, renamed, or hidden page has the same failure mode.
 *
 * Like check-images.mjs, this scans dist/ rather than src/: links are
 * assembled from Markdown in data files, slugs, and components, and dist/ is
 * the only place they all exist as real hrefs.
 *
 * A link to a _redirects source is an error too, except 200 rewrites (the
 * analytics proxy). Linking to a 301/302 means the copy is stale; point it at
 * the destination instead.
 */
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const DIST = resolve(process.argv[2] ?? "dist");

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

/* Paths served by a 200 rewrite in _redirects exist at runtime even though
   no file backs them in dist/. */
function rewrittenPaths() {
  const file = join(DIST, "_redirects");
  if (!existsSync(file)) return new Set();
  const out = new Set();
  for (const line of readFileSync(file, "utf8").split("\n")) {
    const parts = line.trim().split(/\s+/);
    if (parts[0]?.startsWith("/") && /^200!?$/.test(parts[2] ?? "")) {
      out.add(parts[0]);
    }
  }
  return out;
}

function resolves(path) {
  const p = decodeURIComponent(path);
  if (p.endsWith("/")) return existsSync(join(DIST, p, "index.html"));
  return (
    (existsSync(join(DIST, p)) && statSync(join(DIST, p)).isFile()) ||
    existsSync(join(DIST, p, "index.html"))
  );
}

if (!existsSync(DIST)) {
  console.error(`check-links: no build output at ${DIST} — run the build first.`);
  process.exit(1);
}

const rewrites = rewrittenPaths();
const broken = new Map(); // href -> Set of pages linking to it
let checked = 0;

for (const file of walk(DIST)) {
  if (!file.endsWith(".html")) continue;
  const rel = file.slice(DIST.length + 1);
  const html = readFileSync(file, "utf8");

  for (const m of html.matchAll(/<a\b[^>]*?\bhref="(\/(?!\/)[^"]*)"/gi)) {
    const path = m[1].split("#")[0].split("?")[0];
    if (!path) continue;
    checked++;
    if (rewrites.has(path) || resolves(path)) continue;
    if (!broken.has(path)) broken.set(path, new Set());
    broken.get(path).add(rel);
  }
}

if (broken.size) {
  console.error(`\ncheck-links: ${broken.size} internal link target(s) don't exist\n`);
  for (const [href, pages] of broken) {
    console.error(`  ${href}\n    linked from: ${[...pages].sort().join(", ")}\n`);
  }
  process.exit(1);
}

console.log(`check-links: ${checked} internal link(s) OK — every target ships.`);
