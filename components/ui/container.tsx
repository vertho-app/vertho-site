/* ───────────────────────────────────────────────────────────────────────────
 * <Container> — caixa centralizada com largura máxima e gutter padrão.
 *
 * width:
 *   default → 1120px  (todas as seções de conteúdo dos mockups)
 *   narrow  → 700px   (CTA final centrado, páginas legais, manifesto)
 *   wide    → 1280px  (raro; grids muito largos)
 * Gutter: 24px no mobile, 40px (var --gutter) em ≥ md. Sempre mx-auto.
 * Use SEMPRE Container para limitar largura — nunca max-w solto.
 * ─────────────────────────────────────────────────────────────────────────── */
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerWidth = "default" | "narrow" | "wide";

const WIDTH: Record<ContainerWidth, string> = {
  default: "max-w-[var(--content-width)]",
  narrow: "max-w-[var(--content-narrow)]",
  wide: "max-w-[1280px]",
};

export function Container({
  as: As = "div",
  width = "default",
  className,
  children,
}: {
  as?: ElementType;
  width?: ContainerWidth;
  className?: string;
  children: ReactNode;
}) {
  return (
    <As className={cn("mx-auto w-full px-6 md:px-10", WIDTH[width], className)}>
      {children}
    </As>
  );
}
