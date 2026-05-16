/* ───────────────────────────────────────────────────────────────────────────
 * Home · Bloco NR-1 (janela quente). Card variant="callout" (caixa roxa).
 * Fiel a sections.jsx (NR1Section). Linka para a landing /nr-1.
 * ─────────────────────────────────────────────────────────────────────────── */
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

export function NR1Section() {
  return (
    <Section id="nr1">
      <Card variant="callout">
        <Badge variant="alert" tone="lilac" className="mb-4">
          Fiscalização a partir de 26.05.2026
        </Badge>
        <h2 className="mb-0 max-w-[700px] font-display text-[clamp(28px,3.5vw,42px)] font-normal leading-[1.12] tracking-[-0.02em] text-white">
          A fiscalização da NR-1 começa em 26 de maio. Sua empresa está
          preparada?
        </h2>
        <Text size="lead" className="mb-8 mt-4 max-w-[620px] text-[16px] leading-[1.7]">
          A Vertho contribui com evidências contínuas sobre os fatores
          psicossociais ligados ao desenvolvimento — integráveis ao PGR
          conduzido pelo SESMT da sua organização.
        </Text>
        <Button href="/produto/pulso#nr-1" variant="nr1" withArrow>
          Entenda como
        </Button>
      </Card>
    </Section>
  );
}
