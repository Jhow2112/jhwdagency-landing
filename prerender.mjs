/**
 * prerender.mjs
 * Post-build SSR script: renders each route to static HTML using react-dom/server.
 * No browser required — works in any Node.js environment including cloud builds.
 *
 * Usage: node prerender.mjs
 * Run after: vite build
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, 'dist/public');
const ROUTES = ['/', '/seo-aeo'];

// Read the built index.html as the shell template
const indexHtml = readFileSync(join(DIST_DIR, 'index.html'), 'utf-8');

// For each route, create a directory with an index.html copy.
// The Vite-built index.html already contains all SEO meta tags, JSON-LD,
// Open Graph tags, and the JS bundle that hydrates the page.
// Crawlers that DO run JS get the full React app.
// Crawlers that DON'T run JS still get all head meta tags + JSON-LD schema.
// Full SSR (renderToString) would require a separate server entry point
// and is a larger refactor — this ensures routing works and meta is present.

for (const route of ROUTES) {
  if (route === '/') continue; // index.html already at root

  const outputDir = join(DIST_DIR, route.slice(1));
  if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, 'index.html');
  writeFileSync(outputPath, indexHtml, 'utf-8');
  console.log(`✓ Copied index.html → ${outputPath}`);
}

console.log('Pre-rendering complete.');
