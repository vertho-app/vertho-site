/* ───────────────────────────────────────────────────────────────────────────
 * Home · Como funciona — "Como a Vertho conecta dados, IA e ação."
 * 5 cards numerados, cada um com um mini-elemento visual distinto
 * (radar, score, comparação, checklist, relatório).
 * ─────────────────────────────────────────────────────────────────────────── */
import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { SectionHead, Surface, Radar, Gauge, Bars } from "./_kit";

function MiniChecklist() {
  return (
    <ul className="flex flex-col gap-2">
      {["Trilha personalizada", "Missões práticas", "Mentor IA"].map((t) => (
        <li
          key={t}
          className="flex items-center gap-2 rounded-[10px] bg-paper-soft px-3 py-2 text-[12px] font-semibold text-ink-strong"
        >
          <span className="flex h-4 w-4 items-center justify-center rounded-pill bg-cyan text-[9px] text-[#071B33]">
            ✓
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}

function MiniReport() {
  const rows = [
    { l: "Apoio recomendado", c: "#8B5CF6" },
    { l: "Pronto p/ crescer", c: "#34C5CC" },
    { l: "Acompanhar desgaste", c: "#E8923C" },
  ];
  return (
    <div className="flex flex-col gap-2">
      {rows.map((r) => (
        <div
          key={r.l}
          className="flex items-center justify-between rounded-[10px] border border-line bg-card-light px-3 py-2"
        >
          <span className="flex items-center gap-2 text-[12px] font-semibold text-ink-strong">
            <span
              className="h-1.5 w-1.5 rounded-pill"
              style={{ background: r.c }}
            />
            {r.l}
          </span>
          <span className="text-ink-soft">→</span>
        </div>
      ))}
    </div>
  );
}

function Compare() {
  return (
    <div className="flex flex-col gap-2.5">
      {[
        { l: "Pessoa", v: 72, c: "#34C5CC" },
        { l: "Função", v: 88, c: "#8B5CF6" },
      ].map((b) => (
        <div key={b.l}>
          <div className="mb-1 flex justify-between text-[11px] font-semibold text-ink-soft">
            <span>{b.l}</span>
            <span>{b.v}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-pill bg-mist">
            <span
              className="block h-full rounded-pill"
              style={{ width: `${b.v}%`, background: b.c }}
            />
          </div>
        </div>
      ))}
      <span className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-pill bg-[rgba(232,146,60,0.14)] px-2.5 py-1 text-[10.5px] font-bold text-[#C2741F]">
        tensão identificada
      </span>
    </div>
  );
}

const STEPS: { title: string; text: string; visual: ReactNode }[] = [
  {
    title: "Define o perfil de referência",
    text: "A organização configura cargos, competências, cultura, valores e desafios reais.",
    visual: (
      <Radar
        values={[0.85, 0.7, 0.9, 0.6, 0.75, 0.8]}
        showLabels={false}
        size={150}
        color="#142F57"
      />
    ),
  },
  {
    title: "Entende a pessoa",
    text: "Combina perfil comportamental, respostas conversacionais e evidências de competência.",
    visual: (
      <div className="flex items-center justify-center gap-4">
        <Gauge value={76} label="evidência" size={92} color="#34C5CC" />
        <div className="flex flex-col gap-1.5">
          <span className="h-2 w-16 rounded-pill bg-mist" />
          <span className="h-2 w-20 rounded-pill bg-mist" />
          <span className="h-2 w-12 rounded-pill bg-cyan/50" />
        </div>
      </div>
    ),
  },
  {
    title: "Identifica aderências e tensões",
    text: "Compara pessoa, função e cultura para revelar aderência, esforço adaptativo e pontos de atenção.",
    visual: <Compare />,
  },
  {
    title: "Direciona o desenvolvimento",
    text: "A IA gera PDI, trilha, missões práticas e recomendações personalizadas.",
    visual: <MiniChecklist />,
  },
  {
    title: "Entrega sinais para decisão",
    text: "Gestores e RH recebem relatórios, indicadores, alertas e recomendações de ação.",
    visual: <MiniReport />,
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative bg-paper-soft py-20 md:py-28">
      <Container>
        <SectionHead
          eyebrow="Como funciona"
          title="Como a Vertho conecta dados, IA e ação."
          align="center"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {STEPS.map((s, i) => (
            <Surface
              key={s.title}
              hover
              className={[
                "flex flex-col p-6 lg:col-span-2",
                i === 3 && "lg:col-start-2",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,#34C5CC,#8B5CF6)] font-display text-[15px] font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="font-display text-[16px] font-bold leading-tight text-ink-strong">
                  {s.title}
                </h3>
              </div>
              <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-ink-body">
                {s.text}
              </p>
              <div className="mt-5 flex min-h-[120px] items-center justify-center rounded-[14px] border border-line bg-paper p-4">
                <div className="w-full">{s.visual}</div>
              </div>
            </Surface>
          ))}
        </div>
      </Container>
    </section>
  );
}
