/* ───────────────────────────────────────────────────────────────────────────
 * <Card> — superfície de conteúdo translúcida sobre o navy.
 *
 * variant:
 *   base        → card padrão (radius lg, padding 32)
 *   hover       → base + elevação/realce de borda no hover (cards clicáveis)
 *   accent-top  → barra colorida no topo (cards "Para quem é")
 *   accent-left → barra colorida à esquerda (entregáveis do Pulso)
 *   callout     → caixa de destaque NR-1 (radius xl, borda 2px lilás/roxo)
 * accent: cor da barra/realce (cyan | lilac | purple | cyan-soft | coral)
 *
 * Sombra: cards NÃO têm sombra (regra do design system). Sombra só em
 * elementos que flutuam de verdade (ver <MockupFrame>).
 * ─────────────────────────────────────────────────────────────────────────── */
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardVariant = "base" | "hover" | "accent-top" | "accent-left" | "callout";
type CardAccent = "cyan" | "cyan-soft" | "lilac" | "purple" | "coral";

const ACCENT_VAR: Record<CardAccent, string> = {
  cyan: "var(--cyan)",
  "cyan-soft": "var(--cyan-soft)",
  lilac: "var(--lilac)",
  purple: "var(--purple)",
  coral: "var(--coral)",
};

export function Card({
  variant = "base",
  accent = "cyan",
  className,
  children,
}: {
  variant?: CardVariant;
  accent?: CardAccent;
  className?: string;
  children: ReactNode;
}) {
  const c = ACCENT_VAR[accent];

  if (variant === "callout") {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-xl px-8 py-12 md:px-12 md:py-14",
          className,
        )}
        style={{
          border: "2px solid color-mix(in srgb, var(--purple) 35%, transparent)",
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--purple) 6%, transparent), color-mix(in srgb, var(--lilac) 3%, transparent))",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-pill"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--purple) 8%, transparent), transparent 70%)",
          }}
        />
        <div className="relative z-[1]">{children}</div>
      </div>
    );
  }

  const interactive =
    variant === "hover" || variant === "accent-top" || variant === "accent-left"
      ? "transition-all duration-200 ease-out hover:-translate-y-0.5 " +
        "hover:border-[rgba(52,197,204,0.3)] " +
        "hover:shadow-[0_14px_34px_-12px_rgba(0,0,0,0.5)]"
      : "";

  const bar =
    variant === "accent-top" ? (
      <span
        aria-hidden
        className="absolute left-0 right-0 top-0 h-0.5 opacity-50"
        style={{ background: c }}
      />
    ) : variant === "accent-left" ? (
      <span
        aria-hidden
        className="absolute left-0 top-0 h-full w-[3px] opacity-50"
        style={{ background: c }}
      />
    ) : null;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-card-border bg-card-bg p-8",
        interactive,
        className,
      )}
    >
      {bar}
      {children}
    </div>
  );
}
