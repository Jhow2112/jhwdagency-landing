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
const ROUTES = ['/', '/seo-aeo', '/privacy', '/terms'];

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

    // Inject rendered HTML into the <div id="root"> placeholder
    const fullHtml = indexHtml.replace(
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
    // Don't fail the build — fall back to the empty shell for this route
    const outputDir = route === '/' ? DIST_DIR : join(DIST_DIR, route.slice(1));
    if (!existsSync(outputDir)) mkdirSync(outputDir, { recursive: true });
    writeFileSync(join(outputDir, 'index.html'), indexHtml, 'utf-8');
    console.log(`  → Fell back to empty shell for ${route}`);
  }
}

// Clean up helper script
try { execSync(`rm "${helperScript}"`); } catch {}

console.log('Pre-rendering complete.');
