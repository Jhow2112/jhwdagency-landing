/* CaseStudyPage — Aralo Studio
   Wrapper that resolves a slug from the wouter route param and renders
   CaseStudyTemplate. Falls back to NotFound if the slug isn't recognized.
   The SSR/prerender path resolves the slug directly from the URL — see
   entry-server.tsx. */

import { useRoute } from "wouter";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
import NotFound from "@/pages/NotFound";
import { getProjectBySlug } from "@/data/portfolioProjects";

export default function CaseStudyPage() {
  const [, params] = useRoute<{ slug: string }>("/portfolio/:slug");
  const slug = params?.slug;
  const project = slug ? getProjectBySlug(slug) : undefined;
  if (!project) return <NotFound />;
  return <CaseStudyTemplate project={project} />;
}
