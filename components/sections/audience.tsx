/* ───────────────────────────────────────────────────────────────────────────
 * Home · "Quem usa a Vertho hoje" — 2 públicos com mini-mockup, prova e link.
 * Fiel a sections.jsx (AudienceSection + AudienceMockup edu/corp).
 * ─────────────────────────────────────────────────────────────────────────── */
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { ArrowIcon } from "@/components/ui/icons";

function MiniLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2.5 font-eyebrow text-[9px] font-bold uppercase tracking-[0.14em] text-ink-faint">
      {children}
    </div>
  );
}

function EduMockup() {
  const rows = [
    { name: "Gestão de Sala", pct: 72, color: "var(--cyan)" },
    { name: "Planejamento de Aula", pct: 58, color: "var(--cyan-soft)" },
    { name: "Avaliação da Aprendizagem", pct: 45, color: "var(--lilac)" },
  ];
  return (
    <div className="mb-5 rounded-md border border-card-border bg-[rgba(255,255,255,0.02)] p-4">
      <MiniLabel>Competências docentes</MiniLabel>
      <div className="flex flex-col gap-2">
        {rows.map((r) => (
          <div key={r.name}>
            <div className="mb-1 flex justify-between">
              <span className="text-[11px] text-ink-dim">{r.name}</span>
              <span className="text-[11px] font-bold" style={{ color: r.color }}>
                {r.pct}%
              </span>
            </div>
            <div className="h-[3px] rounded-[2px] bg-white/[0.06]">
              <div
                className="h-full rounded-[2px]"
                style={{ width: `${r.pct}%`, background: r.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CorpMockup() {
  const rows = [
    { label: "Comunicação assertiva", status: "Em andamento", color: "var(--cyan)" },
    { label: "Gestão de conflitos", status: "Semana 3", color: "var(--cyan-soft)" },
    { label: "Feedback estruturado", status: "Próxima", color: "var(--ink-faint)" },
  ];
  return (
    <div className="mb-5 rounded-md border border-card-border bg-[rgba(255,255,255,0.02)] p-4">
      <MiniLabel>PDI · Plano 30 dias</MiniLabel>
      <div className="flex flex-col">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between border-b border-card-border py-2 last:border-b-0"
          >
            <span className="text-[12px] text-ink-dim">{r.label}</span>
            <span
              className="font-eyebrow text-[10px] font-bold"
              style={{ color: r.color }}
            >
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const BLOCKS = [
  {
    title: "Para escolas e redes de ensino",
    accent: "cyan" as const,
    accentVar: "var(--cyan)",
    text: "A área que mais precisa desenvolver pessoas é, paradoxalmente, a que tem menos estrutura para isso. A Vertho ocupa esse vazio. Diagnóstico de competências docentes, trilha com mentor de IA, onboarding estruturado para professores recém-formados e relatórios consolidados para coordenação e direção.",
    proof: "Em pilotos com escolas conhecidas na Bett Brasil 2026",
    href: "/produto",
    mockup: <EduMockup />,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
      </svg>
    ),
  },
  {
    title: "Para empresas",
    accent: "lilac" as const,
    accentVar: "var(--lilac)",
    text: "Empresas pequenas e médias raramente têm equipe para mapear, desenvolver e acompanhar pessoas com profundidade. A Vertho entrega isso por IA, no padrão de programa de trainee — sem o custo de programa de trainee. Diagnóstico, PDI, mentor 24/7, missões aplicadas e feedback sem viés.",
    proof: "Para empresas de 50 a 500 colaboradores",
    href: "/produto",
    mockup: <CorpMockup />,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M12 12v4" />
      </svg>
    ),
  },
];

export function AudienceSection() {
  return (
    <Section id="audience">
      <Eyebrow>Dois públicos, um produto</Eyebrow>
      <Heading variant="section">Quem usa a Vertho hoje.</Heading>

      <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
        {BLOCKS.map((b) => (
          <Card
            key={b.title}
            variant="accent-top"
            accent={b.accent}
            className="flex h-full flex-col hover:-translate-y-0.5 hover:border-card-border-hover"
          >
            <div className="mb-4 flex items-center gap-3.5">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md"
                style={{
                  background: `color-mix(in srgb, ${b.accentVar} 9%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${b.accentVar} 16%, transparent)`,
                  color: b.accentVar,
                }}
              >
                {b.icon}
              </div>
              <h3 className="font-display text-[24px] font-normal leading-[1.2] text-white">
                {b.title}
              </h3>
            </div>

            {b.mockup}

            <Text size="small" className="mb-4 flex-1 text-[14.5px] leading-[1.7]">
              {b.text}
            </Text>

            <div className="mb-5 flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-pill opacity-60"
                style={{ background: b.accentVar }}
              />
              <span
                className="text-[12px] font-semibold opacity-80"
                style={{ color: b.accentVar }}
              >
                {b.proof}
              </span>
            </div>

            <a
              href={b.href}
              className="group inline-flex items-center gap-1.5 text-[13px] font-bold no-underline"
              style={{ color: b.accentVar }}
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
