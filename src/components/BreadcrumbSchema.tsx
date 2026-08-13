/* BreadcrumbSchema — emits BreadcrumbList JSON-LD for a subpage.
   Renders a single <script type="application/ld+json"> tag with the
   schema.org BreadcrumbList shape so search engines and AI crawlers can
   reconstruct the page's place in the site hierarchy.
   Component output is server-side rendered by prerender.mjs, so the JSON
   ships in the static HTML — no JS execution required to read it. */

export type Crumb = {
  /** Human-readable label (e.g., "Home", "Service Areas", "Boise") */
  name: string;
  /** Absolute URL for this crumb */
  url: string;
};

export default function BreadcrumbSchema({ crumbs }: { crumbs: Crumb[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
