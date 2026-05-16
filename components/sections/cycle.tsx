/* ───────────────────────────────────────────────────────────────────────────
 * Home · Ciclo "Atrair. Desenvolver. Reter." — tese de marca.
 * Tweak aplicado: os 3 cards têm ALTURA IGUAL (grid stretch + h-full flex).
 * ─────────────────────────────────────────────────────────────────────────── */
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";

const CARDS = [
  {
    num: "01",
    title: "Atrair",
    accent: "text-cyan-soft",
    desc: "Diagnóstico de fit comportamental e de competências antes da contratação. Você sabe quem entra, e por quê.",
  },
  {
    num: "02",
    title: "Desenvolver",
    accent: "text-cyan",
    desc: "Trilha personalizada de 14 semanas com mentor de IA, conteúdo no formato que cada pessoa aprende e missões práticas no contexto real da empresa.",
  },
  {
    num: "03",
    title: "Reter",
    accent: "text-lilac",
    desc: "Sinais contínuos sobre o ambiente de desenvolvimento. Você vê o que segura e o que afasta as pessoas certas.",
  },
];

export function CycleSection() {
  return (
    <Section id="cycle">
      <Eyebrow>O que entregamos</Eyebrow>
      <Heading variant="display" className="mb-3">
        Atrair. Desenvolver. Reter.
      </Heading>
      <div className="mb-4 h-0.5 w-16 rounded-[2px] bg-[linear-gradient(90deg,var(--cyan),var(--lilac))]" />
      <Text size="lead" measure>
        O ciclo completo de inteligência sobre pessoas, em três tempos.
      </Text>

      <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
        {CARDS.map((c) => (
          <Card
            key={c.title}
            variant="hover"
            className="flex h-full min-h-[220px] flex-col"
          >
            <span className="mb-4 block font-eyebrow text-[10px] font-bold tracking-[0.14em] text-ink-faint">
              {c.num}
            </span>
            <h3
              className={`mb-3.5 font-display text-[28px] font-normal leading-[1.15] ${c.accent}`}
            >
              {c.title}
            </h3>
            <Text size="body" className="flex-1">
              {c.desc}
            </Text>
          </Card>
        ))}
      </div>
    </Section>
  );
}
