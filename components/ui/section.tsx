/* ───────────────────────────────────────────────────────────────────────────
 * <Section> — bloco de seção com ritmo vertical padrão dos mockups.
 *
 * Padding vertical: 64px mobile / 96px (var --section-y) em ≥ md.
 * bg:
 *   none → transparente (padrão; o fundo navy vem do body)
 *   fade → gradiente sutil topo→transparente (Diferenciais, Camadas,
 *          Entregáveis — destaca a seção sem mudar a cor de fundo)
 * Por padrão já embute um <Container>. Use bare quando precisar de um
 * wrapper de largura total (ex.: hero com background absoluto próprio).
 * ─────────────────────────────────────────────────────────────────────────── */
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/container";

type SectionBg = "none" | "fade";
type ContainerWidth = "default" | "narrow" | "wide";

const BG: Record<SectionBg, string> = {
  none: "",
  fade: "bg-[linear-gradient(180deg,rgba(6,23,44,0.5)_0%,transparent_100%)]",
};

export function Section({
  id,
  bg = "none",
  width = "default",
  bare = false,
  className,
  containerClassName,
  children,
}: {
  id?: string;
  bg?: SectionBg;
  width?: ContainerWidth;
  bare?: boolean;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("relative py-16 md:py-24", BG[bg], className)}
    >
      {bare ? (
        children
      ) : (
        <Container width={width} className={containerClassName}>
          {children}
        </Container>
      )}
    </section>
  );
}
