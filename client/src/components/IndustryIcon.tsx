/* IndustryIcon — Aralo Studio
   Single stroke-style SVG per industry slug, sized via the size prop.
   Uses currentColor so callers control stroke color via Tailwind text-*. */

import type { ReactElement } from "react";

type Props = {
  slug: string;
  size?: number;
  className?: string;
};

const PATHS: Record<string, ReactElement> = {
  // Contractors — crossed wrench + screwdriver
  "/websites-for-contractors": (
    <>
      <path d="M14.7 6.3a3 3 0 0 0-4 4L4 17l3 3 6.7-6.7a3 3 0 0 0 4-4l-2 2-1.4-1.4 2-2z" />
      <path d="M3 14l4 4" />
    </>
  ),
  // Restaurants — fork + spoon
  "/websites-for-restaurants": (
    <>
      <path d="M7 3v8a2 2 0 0 1-2 2v8" />
      <path d="M9 3v6" />
      <path d="M5 3v6" />
      <path d="M16 3a3 3 0 0 0-3 3v5a2 2 0 0 0 2 2h1v8" />
    </>
  ),
  // Cleaning Services — spray bottle
  "/websites-for-cleaning-services": (
    <>
      <path d="M9 3h4v3l3 1v3H8V7l1-1z" />
      <path d="M9 10v2a3 3 0 0 0 3 3h0a3 3 0 0 1 3 3v3H8v-9" />
      <path d="M16 5h2" />
      <path d="M17 7h2" />
    </>
  ),
  // Counselors — leaf
  "/websites-for-counselors": (
    <>
      <path d="M5 19c0-7 5-12 14-14-1 9-7 14-14 14z" />
      <path d="M5 19c4-3 7-7 9-12" />
    </>
  ),
  // HVAC — fan blades
  "/websites-for-hvac": (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M12 10c0-4 1-7 4-7 0 4-1 7-4 7z" />
      <path d="M14 12c4 0 7 1 7 4-4 0-7-1-7-4z" />
      <path d="M12 14c0 4-1 7-4 7 0-4 1-7 4-7z" />
      <path d="M10 12c-4 0-7-1-7-4 4 0 7 1 7 4z" />
    </>
  ),
  // Landscapers — tree
  "/websites-for-landscapers": (
    <>
      <path d="M12 3l4 5h-2l3 4h-2l3 4H6l3-4H7l3-4H8l4-5z" />
      <path d="M12 16v5" />
    </>
  ),
  // Plumbers — pipe wrench (S-curve pipe + wrench head)
  "/websites-for-plumbers": (
    <>
      <path d="M3 5h4a3 3 0 0 1 3 3v8a3 3 0 0 0 3 3h4" />
      <path d="M14 19l3 3 3-3-3-3-3 3z" />
      <path d="M3 3v4" />
      <path d="M21 21v-4" />
    </>
  ),
  // Electricians — lightning bolt
  "/websites-for-electricians": (
    <>
      <path d="M13 2L4 14h7l-2 8 9-12h-7l2-8z" />
    </>
  ),
  // Painters — paint brush
  "/websites-for-painters": (
    <>
      <path d="M19 3l2 2-7 7-2-2 7-7z" />
      <path d="M12 10l2 2-4 4-2-2 4-4z" />
      <path d="M8 14c-2 0-4 2-4 5 3 0 5-2 5-4l-1-1z" />
    </>
  ),
  // Salons — scissors
  "/websites-for-salons": (
    <>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M9 8l11 11" />
      <path d="M9 16L20 5" />
    </>
  ),
  // Auto Detailers — car
  "/websites-for-auto-detailers": (
    <>
      <path d="M5 16h14v-3l-2-5H7l-2 5v3z" />
      <path d="M5 16v3h3v-3" />
      <path d="M16 16v3h3v-3" />
      <circle cx="8" cy="16" r="1" />
      <circle cx="16" cy="16" r="1" />
    </>
  ),
  // Real Estate — house
  "/websites-for-real-estate": (
    <>
      <path d="M4 11l8-7 8 7v9h-5v-6h-6v6H4v-9z" />
    </>
  ),
};

export default function IndustryIcon({ slug, size = 24, className }: Props) {
  const path = PATHS[slug];
  if (!path) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
