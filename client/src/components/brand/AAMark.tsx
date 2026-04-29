/* AAMark — Aralo Studio identity mark
   Two overlapping triangular A-strokes: forest (primary) + terracotta (accent)
   Reusable across nav, footer, favicon, social cards
   Source proportions per the brand identity-marks reference */
type AAMarkProps = {
  /** Width in px. Height is computed from viewBox aspect ratio (60:56). */
  size?: number;
  /** Stroke width — defaults to 2.6, use 4.0 for favicon/dense use */
  strokeWidth?: number;
  /** Forest A color */
  primary?: string;
  /** Terracotta A color */
  accent?: string;
  /** Filled vs. outline */
  fill?: boolean;
  /** Horizontal offset between the two A's, in mark-space units (default 20) */
  gap?: number;
  /** Optional className passthrough */
  className?: string;
};

export default function AAMark({
  size = 60,
  strokeWidth = 2.6,
  primary = "#1f2a22",
  accent = "#b85433",
  fill = false,
  gap = 20,
  className,
}: AAMarkProps) {
  const height = (size * 56) / 60;
  const ax2 = `M2 50 L20 6 L38 50 Z`;
  const bx2 = `M${2 + gap} 50 L${20 + gap} 6 L${38 + gap} 50 Z`;
  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 60 56"
      fill="none"
      role="img"
      aria-label="Aralo"
      className={className}
    >
      <path
        d={ax2}
        stroke={primary}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill={fill ? primary : "none"}
      />
      <path
        d={bx2}
        stroke={accent}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        fill={fill ? accent : "none"}
      />
    </svg>
  );
}
