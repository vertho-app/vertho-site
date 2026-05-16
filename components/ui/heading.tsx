/* ───────────────────────────────────────────────────────────────────────────
 * <Heading> — títulos. Display = Instrument Serif (font-display), peso 400.
 *
 * variant (tamanhos clamp exatos dos mockups):
 *   hero     → h1 do hero            clamp(38,4.8vw,64)  serif 400
 *   display  → tese de marca grande  clamp(40,5vw,60)    serif 400
 *   section  → título de seção (h2)  clamp(32,4vw,48)    serif 400
 *   quote    → citação editorial     clamp(36,5vw,56)    serif 400 itálico
 *   card     → h3 de card serif      ~24–28px            serif 400
 *   card-sans→ h3 de card sans       18px                Inter 600
 *
 * `as` controla a tag semântica (default coerente com a variante).
 * Cor padrão: branco puro (headlines). Use `tone` p/ exceções.
 * ─────────────────────────────────────────────────────────────────────────── */
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingVariant =
  | "hero"
  | "display"
  | "section"
  | "quote"
  | "card"
  | "card-sans";

const DEFAULT_TAG: Record<HeadingVariant, ElementType> = {
  hero: "h1",
  display: "h2",
  section: "h2",
  quote: "h2",
  card: "h3",
  "card-sans": "h3",
};

const VARIANT: Record<HeadingVariant, string> = {
  hero: "font-display font-normal text-[clamp(38px,4.8vw,64px)] leading-[1.06] tracking-[-0.025em]",
  display:
    "font-display font-normal text-[clamp(40px,5vw,60px)] leading-[1.08] tracking-[-0.025em]",
  section:
    "font-display font-normal text-[clamp(32px,4vw,48px)] leading-[1.12] tracking-[-0.02em]",
  quote:
    "font-display font-normal italic text-[clamp(36px,5vw,56px)] leading-[1.1] tracking-[-0.025em]",
  card: "font-display font-normal text-[26px] leading-[1.15]",
  "card-sans": "font-sans font-semibold text-[18px] leading-[1.3]",
};

const TONE = {
  white: "text-white",
  ink: "text-ink",
  cyan: "text-cyan",
  "cyan-soft": "text-cyan-soft",
  lilac: "text-lilac",
} as const;

export function Heading({
  variant = "section",
  as,
  tone = "white",
  align = "left",
  className,
  children,
}: {
  variant?: HeadingVariant;
  as?: ElementType;
  tone?: keyof typeof TONE;
  align?: "left" | "center";
  className?: string;
  children: ReactNode;
}) {
  const Tag = as ?? DEFAULT_TAG[variant];
  return (
    <Tag
      className={cn(
        VARIANT[variant],
        TONE[tone],
        align === "center" && "text-center",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
