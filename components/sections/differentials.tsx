/* ───────────────────────────────────────────────────────────────────────────
 * Home · Diferenciais técnicos — numerais editoriais (sem ícones).
 * Section bg="fade" (gradiente sutil topo→transparente), igual ao mockup.
 * ─────────────────────────────────────────────────────────────────────────── */
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";

const ITEMS = [
  {
    num: "01",
    title: "Diagnóstico que conversa, não interroga.",
    desc: "Avaliação por chat com IA em 6 turnos socráticos. Acaba o questionário Likert chato.",
  },
  {
    num: "02",
    title: "Cada decisão validada por duas IAs.",
    desc: "Avaliações críticas passam por Sonnet + Gemini de forma independente. Decisão nunca é unilateral.",
  },
  {
    num: "03",
    title: "A IA fala como sua empresa fala.",
    desc: "RAG per-tenant: a inteligência da Vertho usa os valores e cultura da sua organização.",
  },
  {
    num: "04",
    title: "LGPD por design.",
    desc: "PII mascarado antes de qualquer chamada de IA externa. Auditoria de prompts. Sua organização nunca expõe dados pessoais.",
  },
];

export function DifferentialsSection() {
  return (
    <Section id="differentials" bg="fade">
      <Eyebrow>Diferenciais técnicos</Eyebrow>
      <Heading variant="section">Não é “tem IA”. É IA séria.</Heading>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {ITEMS.map((item) => (
          <Card key={item.num} variant="hover">
            <div className="mb-4 font-display text-[44px] font-normal leading-none tracking-[-0.02em] text-cyan opacity-25">
              {item.num}
            </div>
            <Heading variant="card-sans" className="mb-2.5">
              {item.title}
            </Heading>
            <Text size="body" className="leading-[1.65]">
              {item.desc}
            </Text>
          </Card>
        ))}
      </div>
    </Section>
  );
}
