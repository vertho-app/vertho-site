/* ───────────────────────────────────────────────────────────────────────────
 * /produto · "Como funciona" — Mapear/Desenvolver/Acompanhar em zigue-zague,
 * com um mock por fase. Fiel a produto-sections.jsx (ZigzagSection).
 * ─────────────────────────────────────────────────────────────────────────── */
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import {
  DiagnosticMock,
  JourneyContentMock,
  EvolutionMock,
} from "@/components/brand/product-mocks";

const PHASES = [
  {
    num: "01",
    title: "Mapear",
    accent: "var(--cyan-soft)",
    text: "Diagnóstico DISC em 29 passos, Diagnóstico Conversacional com IA em 6 turnos, votação de competências com participação do profissional. O ponto de partida não é uma planilha — é uma conversa estruturada.",
    output:
      "Perfil comportamental + Top 5 competências priorizadas + linha de base individual.",
    Mock: DiagnosticMock,
  },
  {
    num: "02",
    title: "Desenvolver",
    accent: "var(--cyan)",
    text: "PDI personalizado gerado pela IA com base no diagnóstico. Trilha de 14 semanas com cadência por calendário. Microconteúdos em vídeo, texto, podcast e case. BETO, o tutor flutuante, disponível 24 horas. Missões práticas no contexto real da empresa.",
    output: "Plano de 30 dias acompanhado semanalmente.",
    Mock: JourneyContentMock,
  },
  {
    num: "03",
    title: "Acompanhar",
    accent: "var(--lilac)",
    text: "Avaliação acumulada validada por dual-IA. Cenário B realista na semana 14. Evolution Report individual em PDF. Plenária da equipe pronta para o gestor conduzir feedback.",
    output: "Documento individual + briefing pronto para coordenação/direção.",
    Mock: EvolutionMock,
  },
];

export function ZigzagSection() {
  return (
    <Section id="zigzag">
      <Eyebrow>Como funciona</Eyebrow>
      <Heading variant="section">Mapear. Desenvolver. Acompanhar.</Heading>
      <Text size="lead" measure className="mt-4">
        O ciclo completo do desenvolvimento individual, em três fases
        mensuráveis.
      </Text>

      <div className="mt-16 flex flex-col gap-[72px]">
        {PHASES.map((p, i) => {
          const reversed = i % 2 === 1;
          const { Mock } = p;
          return (
            <div
              key={p.num}
              className={`flex flex-col items-center gap-12 md:gap-12 ${
                reversed ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className="flex-1">
                <div className="mb-3 flex items-baseline gap-3">
                  <span
                    className="font-display text-[40px] font-normal leading-none tracking-[-0.02em] opacity-30"
                    style={{ color: p.accent }}
                  >
                    {p.num}
                  </span>
                  <h3
                    className="font-display text-[32px] font-normal leading-[1.1]"
                    style={{ color: p.accent }}
                  >
                    {p.title}
                  </h3>
                </div>
                <Text size="body" className="mb-4">
                  {p.text}
                </Text>
                <div className="flex items-start gap-2 rounded-sm border border-card-border bg-white/[0.02] px-3.5 py-2.5">
                  <span
                    className="mt-0.5 shrink-0 font-eyebrow text-[9px] font-bold uppercase tracking-[0.12em]"
                    style={{ color: p.accent }}
                  >
                    Output
                  </span>
                  <p className="m-0 text-[13px] leading-[1.5] text-ink-dim">
                    {p.output}
                  </p>
                </div>
              </div>
              <div className="w-full shrink-0 md:w-[380px]">
                <Mock />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
