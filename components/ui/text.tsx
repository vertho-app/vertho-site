/* ───────────────────────────────────────────────────────────────────────────
 * <Text> — texto corrido (não-títulos). Inter (font-sans).
 *
 * size:
 *   lead  → 17px / 1.65  subtítulo de seção (SectionSub dos mockups)
 *   body  → 15px / 1.7   corpo padrão de card/parágrafo
 *   small → 13.5px / 1.6 descrições densas, legendas
 *   tiny  → 12px / 1.5   metadados, rodapé legal
 * tone:
 *   dim   → leitura padrão (--ink-dim)        [default]
 *   faint → secundário/metadado (--ink-faint)
 *   ink   → texto forte (--ink)
 *   cyan-soft → destaque suave
 * `measure` aplica largura de leitura confortável (~620px).
 * ─────────────────────────────────────────────────────────────────────────── */
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type TextSize = "lead" | "body" | "small" | "tiny";

const SIZE: Record<TextSize, string> = {
  lead: "text-[17px] leading-[1.65]",
  body: "text-[15px] leading-[1.7]",
  small: "text-[13.5px] leading-[1.6]",
  tiny: "text-[12px] leading-[1.5]",
};

const TONE = {
  dim: "text-ink-dim",
  faint: "text-ink-faint",
  ink: "text-ink",
  "cyan-soft": "text-cyan-soft",
} as const;

export function Text({
  as: As = "p",
  size = "body",
  tone = "dim",
  measure = false,
  align = "left",
  className,
  children,
}: {
  as?: ElementType;
  size?: TextSize;
  tone?: keyof typeof TONE;
  measure?: boolean;
  align?: "left" | "center";
  className?: string;
  children: ReactNode;
}) {
  return (
    <As
      className={cn(
        SIZE[size],
        TONE[tone],
        measure && "max-w-[620px]",
        align === "center" && "text-center",
        className,
      )}
    >
      {children}
    </As>
  );
}
