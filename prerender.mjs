/**
 * prerender.mjs
 * Post-build script: renders each route to static HTML so crawlers
 * (including non-JS AI bots) can read all content without executing JS.
 *
 * Usage: node prerender.mjs
 * Run after: vite build
 */

import puppeteer from './node_modules/.pnpm/puppeteer@24.41.0_typescript@5.6.3/node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js';
import { createServer } from 'http';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import handler from 'serve-handler';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_DIR = join(__dirname, 'dist/public');
const PORT = 5173;
const ROUTES = ['/', '/seo-aeo'];

// Serve the built dist folder on a local port
const server = createServer((req, res) => handler(req, res, {
  public: DIST_DIR,
  rewrites: [{ source: '**', destination: '/index.html' }],
}));

async function prerender() {
  await new Promise(resolve => server.listen(PORT, resolve));
  console.log(`Static server running on http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    headless: true,
  });

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

    // Wait for React to finish rendering
    await page.waitForSelector('#root > *', { timeout: 10000 });

    const html = await page.content();
    const outputDir = route === '/' ? DIST_DIR : join(DIST_DIR, route.slice(1));
    if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });
    const outputPath = join(outputDir, 'index.html');
    writeFileSync(outputPath, html, 'utf-8');
    console.log(`✓ Pre-rendered ${route} → ${outputPath}`);
    await page.close();
  }

  await browser.close();
  server.close();
  console.log('Pre-rendering complete.');
}

prerender().catch(err => {
  console.error('Pre-render failed:', err);
  server.close();
  process.exit(1);
});
