/* First-party conversion tracking — feeds the Traffic tab in seo-dash.
 *
 * The tracker script itself is loaded in client/index.html and auto-tracks
 * pageviews. This module covers the part it cannot infer: which clicks and
 * submissions count as a client outcome.
 *
 * Two design notes worth keeping:
 *
 * 1. Event names are a fixed set shared across every client site. Divergent
 *    naming per site makes cross-client reporting impossible and is painful to
 *    retrofit, so add to CONVERSION_EVENTS rather than passing a loose string.
 *
 * 2. The path is read at click time, not at render time. The obvious approach —
 *    a data-umami-event-page attribute computed from the router — does not work
 *    here: entry-server.tsx renders pages with no Router mounted (it bypasses
 *    wouter to dodge a useSyncExternalStore SSR incompatibility), so any
 *    useLocation call would break the prerender build. Reading window.location
 *    during render instead would bake the prerendered path into components that
 *    outlive a route change, like Footer, and desync after client-side
 *    navigation. Reading at click time sidesteps both and is always accurate.
 */

export const CONVERSION_EVENTS = [
  "phone_click",
  "email_click",
  "form_submit",
  "directions_click",
  "quote_cta_click",
] as const;

export type ConversionEvent = (typeof CONVERSION_EVENTS)[number];

declare global {
  interface Window {
    umami?: {
      track: (name: string, data?: Record<string, unknown>) => void;
    };
  }
}

/* Canonicalize a path so it joins against Search Console data downstream.
 * Mirrors the normalizer in seo-dash (spec 8.1) — trailing slash, lowercase,
 * no query or fragment, no repeated slashes. These rules have to stay in sync
 * on both sides or the join silently drops rows rather than failing loudly. */
export function normalizeEventPath(rawPath: string): string {
  const path = rawPath.split("#")[0].split("?")[0];
  const collapsed = ("/" + path).replace(/\/+/g, "/");
  const withSlash = collapsed.endsWith("/") ? collapsed : collapsed + "/";
  return withSlash.toLowerCase();
}

/* Fire a conversion. Safe to call before the tracker has loaded, while it is
 * blocked, or during SSR — all of which are normal, none of which should throw
 * inside a submit handler and take the form down with them. */
export function trackConversion(
  event: ConversionEvent,
  extra?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") return;
  try {
    window.umami?.track(event, {
      page: normalizeEventPath(window.location.pathname),
      ...extra,
    });
  } catch {
    /* Analytics must never break the interaction it is measuring. */
  }
}
