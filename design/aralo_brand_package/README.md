# Handoff: Aralo Studio — Brand Identity (Direction 03 · Forest + Terracotta)

## Overview
This handoff documents the Aralo Studio visual identity so a developer can apply it to the existing aralo.studio website. The identity is "Direction 03" of an exploration: a wordmark + abstract A·A mark system, locked to a Forest + Terracotta palette on cream. The design is meant to feel quiet, considered, and to age well.

## About the Design Files
The files in this bundle (`*.html`, `*.jsx`) are **design references created in HTML** — prototypes showing the intended look and the design system's primitives. They are **not production code to copy directly**.

Your task is to **recreate this identity in the existing aralo.studio codebase**, using whatever framework, styling system, and patterns are already in use there (Next.js, Astro, plain HTML, Webflow, etc.). The README below is the source of truth for tokens, typography, mark geometry, and components — refer to it first; use the HTML files only as visual confirmation.

## Fidelity
**High-fidelity.** All colors, typography, spacing, mark geometry, and lockup proportions are final. Recreate them pixel-accurately using the existing site's component conventions. If the existing site uses a CSS-in-JS solution, Tailwind, or a token file — translate the values below into that system rather than copy raw inline styles from the JSX.

---

## Design Tokens

### Color
```
--bg-cream:        #f3efe6   /* default page background */
--bg-surface:      #ffffff   /* cards, sheets, lifted surfaces */
--bg-paper:        #e7e2d6   /* inset / mat / page surround */

--ink-primary:     #1f2a22   /* forest — primary ink, mark, headings */
--ink-soft:        #2f3b32   /* body copy, secondary headings */
--ink-mute:        #8a857a   /* stone — captions, labels */
--ink-rule:        rgba(31,42,34,0.14)  /* hairlines, dividers */

--accent:          #b85433   /* terracotta — mark, links, eyebrows */
--accent-soft:     #d97a55   /* hover only — never primary */
```

Reverse contexts (logo on deep background):
```
--on-forest:       #f3efe6
--on-forest-soft:  rgba(243,239,230,0.72)
--on-forest-rule:  rgba(243,239,230,0.16)
```

**Rule:** Terracotta does the work that gradients usually do. No gradients anywhere.

### Typography

Three families, loaded from Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,300;9..144,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

| Role            | Family            | Weight | Size  | LH   | Tracking |
|-----------------|-------------------|--------|-------|------|----------|
| Display D1      | Fraunces opsz 144 | 300    | 88px  | 1.0  | -0.022em |
| Display D2      | Fraunces opsz 144 | 300    | 56px  | 1.05 | -0.02em  |
| Headline H1     | Inter             | 600    | 36px  | 1.1  | -0.01em  |
| Headline H2     | Inter             | 600    | 24px  | 1.2  | -0.01em  |
| Body B1         | Inter             | 400    | 16px  | 1.55 | 0        |
| Body B2         | Inter             | 400    | 13px  | 1.55 | 0        |
| Mono M1 (caps)  | JetBrains Mono    | 500    | 11px  | 1.4  | 0.22em   |

**Notes:**
- Fraunces uses optical size 144 (variation setting `"opsz" 144`) for display headings.
- Mono is used for *eyebrows*, timestamps, labels — short, all-caps, generously tracked. Always preceded by a `—` em-dash for eyebrow style.
- Wordmark itself is **Inter SemiBold (600)** with letter-spacing `0.04em` (all-caps) or `-0.025em` (mixed/lowercase).

### Spacing & Grid
- **Baseline:** 8px. Every margin/padding is a multiple of 8.
- **Web:** 12-column grid, 24px gutter, 80px desktop margin, 24px mobile margin, 1280px container max.
- **Print:** 6-column grid, 8mm gutter.
- **Radius:** 4px on cards/sheets. 0 on full-bleed containers. 999px on pill buttons. ~22% of size on app icons (squircle).
- **Shadows:** Avoid heavy elevation. Cards use `0 1px 0 rgba(0,0,0,0.05)` plus optionally `0 16px 40px -16px rgba(0,0,0,0.18)` only when the card is meant to feel like paper.

---

## The Mark (A · A)

Two facing triangles on a 60 × 56 source grid. One in **forest**, one in **terracotta**. They overlap by 16 source units — the negative space between their meeting peaks reads as the "·" between two A's.

### Geometry (source units)
- Triangle 1: `M 2,50 L 20,6 L 38,50 Z` — primary ink (forest)
- Triangle 2: `M 22,50 L 40,6 L 58,50 Z` — accent (terracotta)
- Baseline: y = 50
- Peak: y = 6
- Each triangle: base 36 units, height 44 units
- Stroke: 2.6 units default (i.e., 2.6/60 of mark width)
- Overlap: 16 source units
- Optional `gap` parameter widens or tightens the meeting point — defaults to 4 source units of separation (each triangle translated outward by gap/2)

### SVG (drop-in)
```svg
<svg width="60" height="56" viewBox="0 0 60 56" fill="none" aria-label="Aralo">
  <path d="M2 50 L20 6 L38 50 Z" stroke="#1f2a22" stroke-width="2.6" stroke-linejoin="round" fill="none"/>
  <path d="M22 50 L40 6 L58 50 Z" stroke="#b85433" stroke-width="2.6" stroke-linejoin="round" fill="none"/>
</svg>
```

### Mark variants (use sparingly, by surface)
| Variant     | Stroke | Gap | Fill   | Use case                           |
|-------------|--------|-----|--------|------------------------------------|
| Default     | 2.6    | 4   | none   | All web headers, signatures        |
| Light       | 1.6    | 4   | none   | Watermarks, ghosted backgrounds    |
| Heavy       | 4.0    | 4   | none   | Favicons, single-color stamps      |
| Open        | 2.6    | 10  | none   | Editorial, large display contexts  |
| Tight       | 2.6    | 0   | none   | Dense layouts, footers             |
| Solid fill  | —      | 4   | filled | Reverse on dark, app icon at scale |

### Clearspace
Minimum padding around the lockup on every side equals **half the mark's width** (so if the mark is 48px tall, clearspace is 24px on every side). No copy, image, or other element may enter this zone.

### Do / Don't
- ✓ Reverse on deep backgrounds (use cream + terracotta).
- ✓ Use the mark alone at favicon / avatar sizes.
- ✗ Do not recolor the accent triangle to anything other than terracotta.
- ✗ Do not stretch, rotate, or skew the mark.
- ✗ Do not add drop shadows or glows.
- ✗ Do not apply gradients to the wordmark or the mark.
- ✗ Do not invert the ink/accent assignments.

---

## The Wordmark & Lockup

### Wordmark
- **Family:** Inter
- **Weight:** 600 (SemiBold)
- **Casings supported:**
  - All-caps "ARALO" — letter-spacing `0.04em` — **default**
  - Title-case "Aralo" — letter-spacing `-0.025em` — editorial / long-form
  - Lowercase "aralo" — letter-spacing `-0.025em` — conversational (invoices, casual emails)

### Lockup composition
A horizontal row: `[mark] [wordmark · Studio tag]`

Proportions, given a wordmark size `S`:
- Mark size: `S × 1.05` (slightly taller than the cap height for optical balance)
- Gap between mark and wordmark: `S × 0.42`
- Gap between wordmark and "Studio" tag: `S × 0.26`
- "Studio" tag: Inter 500, size `S × 0.22`, letter-spacing `0.32em`, uppercase, color `--ink-soft`
- Vertical hairline divider before "Studio": 1px solid `--ink-rule`, `S × 0.26` left padding

### Compact lockup (for nav, footer, signatures)
At small sizes (under ~24px wordmark), drop the "Studio" tag and tighten the mark↔wordmark gap to `S × 0.55`. Increase mark stroke to ~3.4 (still in source units) so the triangles read at small sizes.

---

## Components & Patterns

### Page background & containers
- Page background: `--bg-cream`.
- Cards / sheets: `--bg-surface` with a 1px solid `--ink-rule` border, 4px radius.
- Print "paper" surfaces sit on `--bg-paper` so the cream cards feel lifted.

### Eyebrow
Mono, 11px, `0.22em` tracking, uppercase, color `--accent`, prefixed with an em-dash:
```
— Independent design studio · est. 2026
```
Use above headlines on hero, section, and card components.

### Buttons
- **Primary:** background `--ink-primary`, color `--bg-cream`, padding `13px 22px`, radius 999px, Inter 500 13px, tracking `0.02em`. Trailing `→` arrow allowed.
- **Secondary:** transparent background, 1px border `--ink-rule`, color `--ink-soft`, otherwise same dimensions as primary.
- **Inline link:** color `--accent`, no underline by default, underline on hover.

### Nav
- Items: Inter 500 13px, color `--ink-soft`, gap 28–30px.
- Right-most item: pill outline button "Start a project →" using the secondary button spec but with `--ink-primary` border color (slightly heavier than other nav items).
- Hairline divider below the nav: 1px `--ink-rule`, inset by the page margin.

### Hero
- Eyebrow (mono, terracotta).
- Headline: Fraunces 300, 76px on desktop, `-0.022em` tracking, line-height 1.0.
- Sub-copy: Inter 400, 16px, line-height 1.55, color `--ink-soft`, max-width ~460px.
- Primary + secondary buttons.
- Right column: case-study image at 4:5 aspect with a 1px `--ink-rule` border, 4px radius. While imagery is unavailable, render the diagonal-stripe placeholder (see below).

### Image placeholder
For unfinished imagery, use a 1px-bordered tile filled with a 135° diagonal stripe pattern at low contrast:
```css
background: repeating-linear-gradient(135deg, var(--ink-rule) 0 1px, transparent 1px 16px);
border: 1px solid var(--ink-rule);
border-radius: 4px;
```
Add a small mono caption in the bottom-left like `case study image · 4×5`.

### Marquee / footer
A single horizontal row at the bottom of hero or section bands:
- Top border: 1px `--ink-rule`.
- Mark at small size (20px) on the left.
- Service names in Mono 11px, `0.14em` tracking, uppercase, color `--ink-mute`, separated by `·`.
- URL (`aralo.studio`) right-aligned.

### Email signature pattern
A two-column block, divided by a 1px vertical rule:
- Left: compact lockup at ~20px wordmark.
- Right: name (Inter 600, 12px, `#111`), role (Inter 400, 12px, `#555`), then mono 11px row of `aralo.studio · maren@aralo.studio` in `--accent`.

### Favicon / app icon
- 16/32/64 px: heavy-weight A·A mark, no rounding, transparent background.
- 96/160 px: same mark on a `--bg-cream` (or `--ink-primary` for dark mode) squircle, ~22% radius. Forest variant uses cream mark stroke + terracotta second triangle.

---

## Files in this bundle

- `Aralo Identity System.html` — the canonical canvas with all artboards (cover, construction, clearspace, do/don'ts, mark variants, lockup casings, type scale, color tokens, grid, web hero, business card, letterhead, invoice). Open in a browser to visually verify any spec in this README.
- `identity-marks.jsx` — the React primitives: `AAMark`, `Wordmark`, `Lockup`, `LockupCompact`, and the `ARALO` palette object. **Useful as a reference for proportions** — the `size`-derived gaps, paddings, and stroke values are the source of truth for the lockup math.
- `identity-system.jsx` — the artboards rendered on the canvas (web hero, print kit, etc.). Useful to see the spec applied; not for direct copy.
- `design-canvas.jsx` — the canvas runtime (irrelevant to the website implementation; included so the HTML opens locally).

## What to do on aralo.studio
1. Add the three Google Fonts to the existing site's font loading.
2. Create a `tokens` module in the existing styling system that mirrors the **Color** and **Typography** tables above. Replace any current site colors/fonts that are now superseded.
3. Build a single SVG component for the A·A mark with `size`, `stroke`, `gap`, `primary`, `accent`, and `fill` props.
4. Build a `Lockup` component matching the proportion math (mark = wordmark × 1.05, gaps as ratios of S). Use it in the site header, footer, and any inline brand reference.
5. Restyle the existing nav, hero, buttons, and footer to match the **Components & Patterns** specs. Replace any photography placeholders with the diagonal-stripe pattern until real imagery is delivered.
6. Update the favicon set to use the heavy-weight A·A mark per **Favicon / app icon**.
7. Audit the rest of the site for: gradients (remove), drop shadows on the logo (remove), any blue accent colors (replace with terracotta where appropriate, or with neutrals).

## Anti-patterns to avoid
- Tech-startup blue. There is no blue in this brand.
- Gradients of any kind.
- Drop shadows or glows on the wordmark or mark.
- Emoji in marketing copy.
- Generic agency tropes (swooshes, lightbulbs, abstract human silhouettes, growth charts).
- Trendy aesthetics (Y2K revival, brutalist web, 80s memphis, neumorphism).

## Open questions for the developer
- What's the existing site's framework / styling system? Translate tokens into its conventions rather than copying raw values from the JSX.
- Is there a CMS for case studies? If so, the case-study image placeholder needs a graceful fallback for unpublished items.
- Dark mode: not specified in this round. Default behavior should be cream-only until decided. If a dark mode is required, use `--ink-primary` as the background and the reverse palette listed under **Color**.
