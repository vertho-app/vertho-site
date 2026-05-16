/* ───────────────────────────────────────────────────────────────────────────
 * <Eyebrow> — rótulo curto acima do título da seção.
 * Manrope, 11px, 700, UPPERCASE, tracking 0.18em. Default cyan-soft.
 * Para o eyebrow do NR-1 (com ícone) use <Badge variant="alert">.
 * ─────────────────────────────────────────────────────────────────────────── */
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const TONE = {
  "cyan-soft": "text-cyan-soft",
  cyan: "text-cyan",
  lilac: "text-lilac",
  faint: "text-ink-faint",
} as const;

export function Eyebrow({
  tone = "cyan-soft",
  align = "left",
  className,
  children,
}: {
  tone?: keyof typeof TONE;
  align?: "left" | "center";
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={cn(
        "mb-4 font-eyebrow text-[11px] font-bold uppercase tracking-[0.18em]",
        TONE[tone],
        align === "center" && "text-center",
        className,
      )}
    >
      {children}
    </p>
  );
}
