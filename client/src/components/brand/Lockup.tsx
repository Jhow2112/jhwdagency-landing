/* Lockup — full Aralo Studio lockup
   Composition: [A-A mark] [gap] [ARALO wordmark] [hairline divider] [Studio]
   Use in: site header, large-scale brand placements
   For small contexts (footer bar, favicon meta), use LockupCompact instead */
import AAMark from "./AAMark";
import Wordmark from "./Wordmark";

type LockupProps = {
  /** Mark height in px. Wordmark + tag scale to match. Default 28. */
  markSize?: number;
  /** Color of mark's forest A + wordmark + tag — defaults to forest */
  primary?: string;
  /** Color of mark's terracotta A — defaults to terracotta */
  accent?: string;
  /** Optional className passthrough */
  className?: string;
};

export default function Lockup({
  markSize = 28,
  primary = "#1f2a22",
  accent = "#9a4528",
  className,
}: LockupProps) {
  // Wordmark sized roughly to mark cap-height
  const wordmarkSize = Math.round(markSize * 0.78);
  const tagSize = Math.round(markSize * 0.42);
  const dividerHeight = Math.round(markSize * 0.55);

  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: `${markSize * 0.45}px`,
        lineHeight: 1,
      }}
    >
      <AAMark size={(markSize * 60) / 56} strokeWidth={2.6} primary={primary} accent={accent} />
      <Wordmark size={wordmarkSize} color={primary} />
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: "1px",
          height: `${dividerHeight}px`,
          background: primary,
          opacity: 0.32,
        }}
      />
      <span
        style={{
          fontFamily: '"JetBrains Mono", ui-monospace, monospace',
          fontWeight: 500,
          fontSize: `${tagSize}px`,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: primary,
          opacity: 0.72,
        }}
      >
        Studio
      </span>
    </span>
  );
}
