/* ───────────────────────────────────────────────────────────────────────────
 * <Badge> — pílula curta. Cor tonalizada via color-mix sobre token da paleta.
 *
 * variant:
 *   soft  → pílula uppercase pequena (verbo de ação: "Manter", "Mexer"…)
 *   dot   → ponto luminoso + label (selo "Bett Brasil 2026")
 *   alert → ícone de alerta + label (cabeçalho do callout NR-1)
 * tone: cyan | cyan-soft | lilac | purple | coral  (default cyan)
 *
 * Não usar Badge como botão. Para ação use <Button variant="nav">.
 * ─────────────────────────────────────────────────────────────────────────── */
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { AlertIcon } from "@/components/ui/icons";

type BadgeVariant = "soft" | "dot" | "alert";
type BadgeTone = "cyan" | "cyan-soft" | "lilac" | "purple" | "coral";

const TONE_VAR: Record<BadgeTone, string> = {
  cyan: "var(--cyan)",
  "cyan-soft": "var(--cyan-soft)",
  lilac: "var(--lilac)",
  purple: "var(--purple)",
  coral: "var(--coral)",
};

export function Badge({
  variant = "soft",
  tone = "cyan",
  className,
  children,
}: {
  variant?: BadgeVariant;
  tone?: BadgeTone;
  className?: string;
  children: ReactNode;
}) {
  const c = TONE_VAR[tone];
  const tint = (pct: number) => `color-mix(in srgb, ${c} ${pct}%, transparent)`;

  if (variant === "dot") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2.5 rounded-pill px-5 py-2.5 text-[12px] font-semibold",
          className,
        )}
        style={{
          background: tint(6),
          border: `1px solid ${tint(15)}`,
          color: "var(--cyan-soft)",
        }}
      >
        <span
          className="h-2 w-2 shrink-0 rounded-pill"
          style={{ background: c, boxShadow: `0 0 8px ${tint(40)}` }}
        />
        {children}
      </span>
    );
  }

  if (variant === "alert") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 font-eyebrow text-[11px] font-bold uppercase tracking-[0.18em]",
          className,
        )}
        style={{ color: c }}
      >
        <AlertIcon size={16} />
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-2.5 py-1 font-eyebrow text-[9px] font-bold uppercase tracking-[0.10em]",
        className,
      )}
      style={{
        background: tint(12),
        border: `1px solid ${tint(25)}`,
        color: c,
      }}
    >
      {children}
    </span>
  );
}
