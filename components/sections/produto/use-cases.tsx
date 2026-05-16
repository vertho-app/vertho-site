/* ───────────────────────────────────────────────────────────────────────────
 * /produto · "Casos de uso" — Onboarding / Pulso / Subsídios NR-1.
 * Decisões: NÃO existe /nr-1 → o card NR-1 linka para /produto/pulso#nr-1.
 * "NR-1" não quebra de linha (whitespace-nowrap). Onboarding/Pulso ainda
 * 404 até a próxima entrega (esperado).
 * ─────────────────────────────────────────────────────────────────────────── */
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { ArrowIcon } from "@/components/ui/icons";

const CASES = [
  {
    title: <>Vertho Onboarding</>,
    accent: "cyan" as const,
    accentVar: "var(--cyan)",
    desc: "Programa de 10 semanas para profissionais recém-contratados. Estrutura espiral, tutor humano integrado, 5 competências essenciais. Reduz turnover no primeiro semestre.",
    href: "/produto/onboarding",
  },
  {
    title: <>Pulso de Desenvolvimento</>,
    accent: "lilac" as const,
    accentVar: "var(--lilac)",
    desc: "Camada de inteligência contínua sobre o ambiente que favorece (ou bloqueia) a evolução da equipe. Menos questionários, mais sinais reais de desenvolvimento.",
    href: "/produto/pulso",
  },
  {
    title: (
      <>
        Subsídios para <span className="whitespace-nowrap">NR-1</span>
      </>
    ),
    accent: "purple" as const,
    accentVar: "var(--purple)",
    desc: "Evidências contínuas sobre fatores psicossociais ligados ao desenvolvimento — integráveis ao PGR conduzido pelo SESMT da sua organização.",
    href: "/produto/pulso#nr-1",
  },
];

export function UseCasesSection() {
  return (
    <Section id="use-cases">
      <Eyebrow>Casos de uso</Eyebrow>
      <Heading variant="section">Mentor IA em ação.</Heading>
      <Text size="lead" measure className="mt-4">
        Três configurações pré-pensadas para necessidades específicas — todas
        dentro da mesma plataforma.
      </Text>

      <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
        {CASES.map((c, idx) => (
          <Card
            key={idx}
            variant="accent-top"
            accent={c.accent}
            className="flex h-full flex-col"
          >
            <h3 className="mb-3 font-display text-[22px] font-normal leading-[1.2] text-white">
              {c.title}
            </h3>
            <Text size="small" className="mb-5 flex-1 text-[14px] leading-[1.7]">
              {c.desc}
            </Text>
            <a
              href={c.href}
              className="group inline-flex items-center gap-1.5 text-[13px] font-bold no-underline"
              style={{ color: c.accentVar }}
            >
              Saber mais
              <ArrowIcon
                size={12}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}
