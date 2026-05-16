/* ───────────────────────────────────────────────────────────────────────────
 * /produto · "Três papéis" — Colaborador / Gestor / RH-Coordenação.
 * Ajustes pedidos: (a) RH com lilás mais brilhante (#B888E8) p/ contraste;
 * (b) bullet extra no RH para igualar Colaborador/Gestor.
 * ─────────────────────────────────────────────────────────────────────────── */
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";

const ROLES = [
  {
    title: "Colaborador",
    accent: "var(--cyan)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    items: [
      "Recebe seu PDI personalizado",
      "Estuda no formato que aprende melhor",
      "Conversa com BETO quando precisa",
      "Executa missões aplicadas no trabalho real",
      "Vê sua evolução em tempo real",
    ],
  },
  {
    title: "Gestor",
    accent: "var(--lilac)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    items: [
      "Acompanha a equipe sem invadir privacidade individual",
      "Recebe Plenária mensal pronta para conduzir",
      "Conversa com cada liderado baseado em dado, não em vibes",
      "Identifica quem está pronto, quem precisa de mais tempo",
    ],
  },
  {
    title: "RH / Coordenação",
    accent: "#B888E8",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    items: [
      "Mapeia competências por cargo e por equipe",
      "Configura programas por área da empresa",
      "Recebe relatório consolidado periódico",
      "Decide investimento com base em dado real",
      "Documenta o ciclo completo para auditoria e relatórios institucionais",
    ],
  },
];

export function RolesSection() {
  return (
    <Section id="roles" bg="fade">
      <Eyebrow>Três papéis, uma experiência</Eyebrow>
      <Heading variant="section">Para cada papel, uma visão.</Heading>

      <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
        {ROLES.map((r) => (
          <Card key={r.title} variant="hover" className="flex h-full flex-col">
            <div
              className="mb-4 flex h-11 w-11 items-center justify-center rounded-md"
              style={{
                background: `color-mix(in srgb, ${r.accent} 9%, transparent)`,
                border: `1px solid color-mix(in srgb, ${r.accent} 16%, transparent)`,
                color: r.accent,
              }}
            >
              {r.icon}
            </div>
            <h3 className="mb-4 text-[20px] font-semibold text-white">
              {r.title}
            </h3>
            <ul className="flex flex-1 list-none flex-col gap-2.5 p-0">
              {r.items.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-ink-dim"
                >
                  <span
                    className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-[2px] opacity-50"
                    style={{ background: r.accent }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
