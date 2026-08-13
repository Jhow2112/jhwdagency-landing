/* Wordmark — "ARALO" in Inter SemiBold 600, uppercase, +0.04em tracking
   Used inside Lockup. Standalone use is rare; prefer Lockup. */
type WordmarkProps = {
  /** Font size in px. Default 22. */
  size?: number;
  /** Color — defaults to forest */
  color?: string;
  className?: string;
};

export default function Wordmark({
  size = 22,
  color = "#1f2a22",
  className,
}: WordmarkProps) {
  return (
    <span
      className={className}
      style={{
        fontFamily: '"Inter", sans-serif',
        fontWeight: 600,
        fontSize: `${size}px`,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color,
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      Aralo
    </span>
  );
}
