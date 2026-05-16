/* /produto/pulso · Subsídios NR-1 / PGR. Fiel a NR1SubsidiosSection.
 * id="nr-1" — ALVO das âncoras /produto/pulso#nr-1 (Home e /produto).
 * scroll-mt-24 compensa a NavBar fixa. */
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

const MAP = [
  { factor: "Clareza de papel e expectativas", contrib: "Dimensão Clareza + Diagnóstico Conversacional" },
  { factor: "Sobrecarga e ritmo de trabalho", contrib: "Dimensão Condições + análise de barreiras em Missões" },
  { factor: "Qualidade da relação com chefia", contrib: "Dimensão Liderança + sinais agregados em conversas com BETO" },
  { factor: "Segurança psicológica", contrib: "Dimensão Segurança + Evidências Socráticas" },
  { factor: "Autonomia e controle", contrib: "Dimensão Aplicação + reflexões pós-missão" },
  { factor: "Reconhecimento e perspectiva", contrib: "Dimensão Futuro + sinais agregados de engajamento" },
];

export function NR1SubsidiosSection() {
  return (
    <Section id="nr-1" className="scroll-mt-24">
      <Card variant="callout">
        <Badge variant="alert" tone="lilac" className="mb-4">
          Fiscalização a partir de 26.05.2026
        </Badge>
        <h2 className="mb-0 max-w-[600px] font-display text-[clamp(28px,3.5vw,40px)] font-normal leading-[1.12] tracking-[-0.02em] text-white">
          Subsídios contínuos para o seu PGR.
        </h2>
        <Text size="lead" className="mb-9 mt-4 max-w-[640px] text-[15px] leading-[1.7]">
          A Vertho não substitui a avaliação técnica de riscos psicossociais
          exigida pela NR-1. Contribui com evidências contínuas e auditáveis
          sobre o ambiente de desenvolvimento, integráveis ao PGR conduzido pelo
          SESMT da sua organização.
        </Text>

        <div className="mb-7 overflow-hidden rounded-md border border-card-border">
          <div className="grid grid-cols-2 bg-[rgba(158,78,221,0.08)]">
            <div className="border-r border-card-border px-4 py-3">
              <span className="font-eyebrow text-[10px] font-bold uppercase tracking-[0.10em] text-lilac">
                Fator psicossocial NR-1
              </span>
            </div>
            <div className="px-4 py-3">
              <span className="font-eyebrow text-[10px] font-bold uppercase tracking-[0.10em] text-cyan">
                Contribuição Vertho
              </span>
            </div>
          </div>
          {MAP.map((m, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 border-t border-card-border ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}
            >
              <div className="border-r border-card-border px-4 py-2.5">
                <span className="text-[13px] text-ink-dim">{m.factor}</span>
              </div>
              <div className="px-4 py-2.5">
                <span className="text-[13px] text-cyan-soft">{m.contrib}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-7 rounded-md border border-card-border bg-white/[0.02] px-5 py-4">
          <p className="text-[14px] leading-[1.7] text-ink-dim">
            <strong className="text-white/70">Cabe à sua organização:</strong>{" "}
            contratar a avaliação técnica de riscos psicossociais (SESMT, médico
            do trabalho ou consultoria especializada), manter o PGR atualizado e
            documentar plano de ação com responsáveis e prazos. A Vertho fornece
            uma das fontes de evidência para esse processo — não substitui as
            outras.
          </p>
        </div>

        <Button href="/contato" variant="nr1" withArrow>
          Conversar sobre o uso para NR-1
        </Button>
      </Card>
    </Section>
  );
}
