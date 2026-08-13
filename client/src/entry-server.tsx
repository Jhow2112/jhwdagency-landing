/**
 * entry-server.tsx
 * SSR entry point — renders each route's page component directly to HTML string.
 * Bypasses wouter router to avoid useSyncExternalStore SSR incompatibility.
 * Used by prerender.mjs via tsx.
 */
import { renderToString } from "react-dom/server";
import Home from "./pages/Home";
import SEOPage from "./pages/SEOPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import ActiveSEOPage from "./pages/ActiveSEOPage";
import BlogListPage from "./pages/BlogListPage";
import BlogPostTemplate from "./components/BlogPostTemplate";
import IndustriesHub from "./pages/IndustriesHub";
import PortfolioHub from "./pages/PortfolioHub";
import CaseStudyTemplate from "./components/CaseStudyTemplate";
import FreePreviewPage from "./pages/FreePreviewPage";
import AboutPage from "./pages/AboutPage";
import LandingPageTemplate from "./components/LandingPageTemplate";
import NotFound from "./pages/NotFound";
import { CITIES, INDUSTRIES } from "./data/landingPages";
import { getPostBySlug } from "./data/blogPosts";
import { getProjectBySlug } from "./data/portfolioProjects";

const ROUTE_MAP: Record<string, React.ComponentType> = {
  "/": Home,
  "/seo-aeo": SEOPage,
  "/privacy": PrivacyPage,
  "/terms": TermsPage,
  "/active-seo": ActiveSEOPage,
  "/blog": BlogListPage,
  "/industries": IndustriesHub,
  "/portfolio": PortfolioHub,
  "/free-preview": FreePreviewPage,
  "/about": AboutPage,
  // Rendered to dist/public/404.html, not to /404/index.html — it is served
  // for every unknown path, so it stays out of ROUTE_META and the sitemap.
  "/404": NotFound,
};

export function render(url: string): string {
  const Page = ROUTE_MAP[url];
  if (Page) return renderToString(<Page />);

  // Blog post: /blog/{slug}
  const blogMatch = url.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const post = getPostBySlug(blogMatch[1]);
    if (post) return renderToString(<BlogPostTemplate post={post} />);
  }

  // Case study: /portfolio/{slug}
  const portfolioMatch = url.match(/^\/portfolio\/([^/]+)$/);
  if (portfolioMatch) {
    const project = getProjectBySlug(portfolioMatch[1]);
    if (project) return renderToString(<CaseStudyTemplate project={project} />);
  }

  const data = [...CITIES, ...INDUSTRIES].find((d) => d.slug === url);
  if (data) return renderToString(<LandingPageTemplate data={data} />);

  throw new Error(`No component found for route: ${url}`);
}
