import { cn } from "@/lib/utils";

/**
 * Self-flowing blue gradient background. Large soft gradient blobs drift slowly
 * on long, mismatched cycles for an organic, water-like motion that runs on its
 * own — no cursor interaction. CSS-only and GPU-accelerated (transforms), and
 * it pauses under prefers-reduced-motion.
 *
 *  - variant="accent": professional medium blue for emphasis bands.
 *  - variant="hero":   the darkest blue, sits over hero photography.
 *  - variant="footer": darkest navy (#0b307e), used only in the footer.
 *  - tint:             lowers cover so hero photography reads through.
 */
export function AuroraBackground({
  className,
  variant = "accent",
  tint = false,
  scrim = true,
}: {
  className?: string;
  variant?: "accent" | "hero" | "footer";
  tint?: boolean;
  scrim?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn("aurora", `aurora--${variant}`, tint && "aurora--tint", className)}
    >
      <div className="aurora-base" />
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      {scrim && !tint && <div className="aurora-scrim" />}
    </div>
  );
}
