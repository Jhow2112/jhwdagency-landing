/* LockupCompact — small-scale lockup
   Composition: [A-A mark] [gap] [ARALO wordmark]
   Drops the divider and Studio tag for tight contexts (nav, footer, etc.)*/
import AAMark from "./AAMark";
import Wordmark from "./Wordmark";

type LockupCompactProps = {
  /** Mark height in px. Wordmark scales to match. Default 24. */
  markSize?: number;
  primary?: string;
  accent?: string;
  className?: string;
};

export default function LockupCompact({
  markSize = 24,
  primary = "#1f2a22",
  accent = "#b85433",
  className,
}: LockupCompactProps) {
  const wordmarkSize = Math.round(markSize * 0.78);
  return (
    <span
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: `${markSize * 0.42}px`,
        lineHeight: 1,
      }}
    >
      <AAMark size={(markSize * 60) / 56} strokeWidth={2.6} primary={primary} accent={accent} />
      <Wordmark size={wordmarkSize} color={primary} />
    </span>
  );
}
