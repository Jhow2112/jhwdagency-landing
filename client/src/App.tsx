import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import SEOPage from "./pages/SEOPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import ActiveSEOPage from "./pages/ActiveSEOPage";
import LandingPageTemplate from "./components/LandingPageTemplate";
import { CITIES, INDUSTRIES } from "./data/landingPages";
import BlogListPage from "./pages/BlogListPage";
import BlogPostPage from "./pages/BlogPostPage";
import IndustriesHub from "./pages/IndustriesHub";
import PortfolioHub from "./pages/PortfolioHub";
import CaseStudyPage from "./pages/CaseStudyPage";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/seo-aeo"} component={SEOPage} />
      <Route path={"/privacy"} component={PrivacyPage} />
      <Route path={"/terms"} component={TermsPage} />
      <Route path={"/active-seo"} component={ActiveSEOPage} />
      <Route path={"/industries"} component={IndustriesHub} />
      <Route path={"/portfolio"} component={PortfolioHub} />
      <Route path={"/portfolio/:slug"} component={CaseStudyPage} />
      <Route path={"/blog"} component={BlogListPage} />
      <Route path={"/blog/:slug"} component={BlogPostPage} />
      {[...CITIES, ...INDUSTRIES].map((d) => (
        <Route key={d.slug} path={d.slug}>
          <LandingPageTemplate data={d} />
        </Route>
      ))}
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
