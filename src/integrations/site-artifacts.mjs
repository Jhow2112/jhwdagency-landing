/**
 * site-artifacts — Astro integration emitting og-image.png.
 *
 * Ported from prerender.mjs. The sitemap moved to src/pages/sitemap.xml.ts
 * instead of living here: it needs the TS data modules, which Node's ESM
 * loader cannot resolve extensionless from a build hook, and an endpoint gets
 * Astro's module graph for free.
 */
import { writeFileSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

export default function siteArtifacts() {
  return {
    name: 'aralo:site-artifacts',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);

        // ── og-image.png (1200×630) ──────────────────────────────────────────
        // Rasterised with bundled Inter fonts so output is byte-stable across
        // build environments.
        const { Resvg } = await import('@resvg/resvg-js');
        const root = fileURLToPath(new URL('../../', import.meta.url));
        const font = (f) =>
          readFileSync(join(root, 'node_modules/@fontsource/inter/files', f));

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

        const png = new Resvg(svg, {
          font: {
            fontBuffers: [
              font('inter-latin-400-normal.woff'),
              font('inter-latin-600-normal.woff'),
            ],
            loadSystemFonts: false,
          },
        })
          .render()
          .asPng();
        writeFileSync(join(outDir, 'og-image.png'), png);
        logger.info(`Generated og-image.png (1200×630, ${(png.length / 1024).toFixed(1)} KB)`);
      },
    },
  };
}
