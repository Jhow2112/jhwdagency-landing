/* sitemap.xml — Aralo Studio
   An endpoint rather than @astrojs/sitemap, which emits sitemap-index.xml +
   sitemap-0.xml. robots.txt has pointed Google at /sitemap.xml for the life of
   the site; changing that mid-migration would need a Search Console
   re-submission for no benefit. Format is preserved exactly.

   Built as a route (not a build:done hook) so it resolves the TS data modules
   through Astro's own module graph. */
import type { APIRoute } from "astro";
import { execFileSync } from "node:child_process";
import { ALL_ROUTES, pathFor, type RouteMeta } from "@/data/routeMeta";
import { SITE_ORIGIN } from "@/data/siteSchema";

const BUILD_DATE = new Date().toISOString().slice(0, 10);

/**
 * Last commit date (YYYY-MM-DD) touching any of `paths`.
 *
 * Before the migration, lastmod was the build date for all but the 8 blog
 * posts, so every deploy told Google that 40 pages had just changed. A lastmod
 * that always says "today" is one Google learns to discount. Falls back to the
 * build date when git is unavailable, so a source tarball still builds.
 */
function lastCommitDate(paths: string[]): string {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", ...paths], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : BUILD_DATE;
  } catch {
    return BUILD_DATE;
  }
}

/** Sources that actually determine each route family's content. */
const SRC = {
  landing: ["src/data/landingPages.ts", "src/components/LandingPageTemplate.tsx"],
  portfolio: ["src/data/portfolioProjects.ts", "src/components/CaseStudyTemplate.tsx"],
  standalone: ["src/page-components", "src/components", "src/data/routeMeta.ts"],
};

function lastmodFor(m: RouteMeta): string {
  if (m.sitemapLastmod) return m.sitemapLastmod; // blog posts: publish date
  if (m.route.startsWith("/portfolio/")) return lastCommitDate(SRC.portfolio);
  if (/^\/(web-design|websites-for)-/.test(m.route)) return lastCommitDate(SRC.landing);
  return lastCommitDate(SRC.standalone);
}

export const GET: APIRoute = () => {
  const entries = ALL_ROUTES.map(
    (m) => `  <url>
    <loc>${SITE_ORIGIN}${pathFor(m.route)}</loc>
    <lastmod>${lastmodFor(m)}</lastmod>
    <changefreq>${m.sitemapChangefreq}</changefreq>
    <priority>${m.sitemapPriority}</priority>
  </url>`
  ).join("\n\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${entries}

</urlset>
`,
    { headers: { "Content-Type": "application/xml" } }
  );
};
