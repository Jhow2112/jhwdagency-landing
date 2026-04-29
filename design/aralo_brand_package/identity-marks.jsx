// identity-marks.jsx — Aralo Studio identity primitives
// Locked direction: 03 — A·A mark + wordmark.
// All identity surfaces (system, web, print) draw from these primitives so
// proportions, palette, and type are coherent across artboards.

// ─────────────────────────────────────────────────────────────
// Palette (Forest + Terracotta — locked)
// ─────────────────────────────────────────────────────────────
const ARALO = {
  // Backgrounds
  cream: '#f3efe6',
  creamSurface: '#ffffff',
  paperShadow: '#e7e2d6',
  // Inks
  forest: '#1f2a22',
  forestSoft: '#2f3b32',
  forestRule: 'rgba(31,42,34,0.14)',
  forestMute: 'rgba(31,42,34,0.55)',
  // Accent + neutrals
  terracotta: '#b85433',
  terracottaSoft: '#d97a55',
  stone: '#8a857a',
  bone: '#d8d2c2',
  // Reverse roles
  onForest: '#f3efe6',
  onForestSoft: 'rgba(243,239,230,0.72)',
};

// ─────────────────────────────────────────────────────────────
// The A·A mark — primitive, parameterized
// Stroke version: two facing triangles, optional weight + size + tone
// Solid version: filled triangles
// All marks share the same geometry: triangle base on the floor,
// peak above; second triangle mirrored such that they touch at the
// vertical center.
// ─────────────────────────────────────────────────────────────
function AAMark({ size = 48, stroke = 2.6, primary = ARALO.forest, accent = ARALO.terracotta, fill = false, gap = 4 }) {
  // Source geometry on a 60×56 grid (matches earlier directions). gap is
  // pixels of horizontal space between the two triangles in source units.
  // The first triangle occupies x: 2-38, the second 22-58 — overlap of 16
  // source units. We translate them apart by gap/2 each.
  const g = gap / 2;
  return (
    <svg width={size * 1.05} height={size * (56 / 60)} viewBox="0 0 60 56" fill="none" aria-hidden>
      <path d={`M${2 - g} 50 L${20 - g} 6 L${38 - g} 50 Z`}
        stroke={fill ? 'none' : primary}
        fill={fill ? primary : 'none'}
        strokeWidth={stroke} strokeLinejoin="round" />
      <path d={`M${22 + g} 50 L${40 + g} 6 L${58 + g} 50 Z`}
        stroke={fill ? 'none' : accent}
        fill={fill ? accent : 'none'}
        strokeWidth={stroke} strokeLinejoin="round" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────
// Wordmark — three lockup variants share weight/family. Casing is the
// only variable. Tracking is tuned per-casing.
// ─────────────────────────────────────────────────────────────
function Wordmark({ casing = 'upper', size = 54, primary = ARALO.forest }) {
  const word = casing === 'upper' ? 'ARALO' : casing === 'title' ? 'Aralo' : 'aralo';
  return (
    <span style={{
      fontFamily: 'Inter, "Helvetica Neue", sans-serif',
      fontWeight: 600,
      fontSize: size,
      letterSpacing: casing === 'upper' ? '0.04em' : '-0.025em',
      lineHeight: 1,
      color: primary,
    }}>{word}</span>
  );
}

// ─────────────────────────────────────────────────────────────
// Lockup — mark + wordmark + optional Studio tag
// ─────────────────────────────────────────────────────────────
function Lockup({
  casing = 'upper',
  size = 54,
  showStudio = true,
  primary = ARALO.forest,
  accent = ARALO.terracotta,
  soft = ARALO.forestSoft,
  rule = ARALO.forestRule,
  markStroke = 2.6,
  markFill = false,
  markGap = 4,
}) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.42, color: primary }}>
      <AAMark size={size * 1.05} stroke={markStroke} primary={primary} accent={accent} fill={markFill} gap={markGap} />
      <div style={{ display: 'inline-flex', alignItems: 'baseline', gap: size * 0.26 }}>
        <Wordmark casing={casing} size={size} primary={primary} />
        {showStudio && (
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: size * 0.22,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: soft,
            paddingLeft: size * 0.26,
            borderLeft: `1px solid ${rule}`,
            alignSelf: 'center',
          }}>Studio</div>
        )}
      </div>
    </div>
  );
}

// Compact horizontal mark + small wordmark — for navs, signatures, footers
function LockupCompact({ casing = 'upper', size = 18, primary = ARALO.forest, accent = ARALO.terracotta, markStroke = 3.4 }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.55, color: primary }}>
      <AAMark size={size * 1.05} stroke={markStroke} primary={primary} accent={accent} />
      <span style={{
        fontFamily: 'Inter, sans-serif', fontWeight: 600,
        fontSize: size * 0.95,
        letterSpacing: casing === 'upper' ? '0.04em' : '-0.025em',
        lineHeight: 1,
      }}>{casing === 'upper' ? 'ARALO' : casing === 'title' ? 'Aralo' : 'aralo'}</span>
    </span>
  );
}

Object.assign(window, { ARALO, AAMark, Wordmark, Lockup, LockupCompact });
