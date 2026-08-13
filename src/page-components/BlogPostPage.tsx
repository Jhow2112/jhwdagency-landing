/* BlogPostPage — Aralo Studio
   Wrapper that resolves a slug from the wouter route param and renders
   BlogPostTemplate. Falls back to NotFound if the slug isn't recognized.
   Used for both client-side routing and SSR — see entry-server.tsx for the
   prerender path that resolves the slug from the URL directly. */

import { useRoute } from "wouter";
import BlogPostTemplate from "@/components/BlogPostTemplate";
import NotFound from "@/pages/NotFound";
import { getPostBySlug } from "@/data/blogPosts";

export default function BlogPostPage() {
  const [, params] = useRoute<{ slug: string }>("/blog/:slug");
  const slug = params?.slug;
  const post = slug ? getPostBySlug(slug) : undefined;
  if (!post) return <NotFound />;
  return <BlogPostTemplate post={post} />;
}
