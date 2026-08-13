import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import siteArtifacts from './src/integrations/site-artifacts.mjs';

const r = (p) => fileURLToPath(new URL(p, import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://aralostudio.com',

  // Every canonical, sitemap entry and internal link on the live site ends in a
  // slash, and Netlify normalises to that form. Astro must agree or every URL
  // on the site shifts — the single highest-risk setting in this migration.
  trailingSlash: 'always',

  // 'directory' emits /about/index.html rather than /about.html, matching the
  // paths the pre-renderer produced and the URLs Google has indexed.
  build: { format: 'directory' },

  integrations: [react(), siteArtifacts()],

  vite: {
    plugins: [tailwindcss()],
    // Declared here rather than relying on tsconfig `paths`: the components
    // being imported are the pre-existing React tree, which uses "@/" imports
    // throughout, and Rolldown does not pick the aliases up from tsconfig.
    resolve: {
      alias: {
        '@': r('./src'),
        '@shared': r('./shared'),
      },
    },
  },
});
