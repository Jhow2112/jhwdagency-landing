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

const ROUTE_MAP: Record<string, React.ComponentType> = {
  "/": Home,
  "/seo-aeo": SEOPage,
  "/privacy": PrivacyPage,
  "/terms": TermsPage,
};

export function render(url: string): string {
  const Page = ROUTE_MAP[url];
  if (!Page) throw new Error(`No component found for route: ${url}`);
  return renderToString(<Page />);
}
