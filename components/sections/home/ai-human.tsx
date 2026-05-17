/* ───────────────────────────────────────────────────────────────────────────
 * Home · Bloco IA + humano — "IA quando escala. Humano quando importa."
 * Diagrama em duas colunas (IA · Humano) convergindo no centro:
 * "Decisões melhores sobre pessoas". Âncora "IA e Segurança" → #ia-humano.
 * ─────────────────────────────────────────────────────────────────────────── */
import { Container } from "@/components/ui/container";
import { SectionHead } from "./_kit";

const IA = ["Analisa", "Recomenda", "Acompanha", "Audita", "Personaliza"];
const HUMANO = ["Valida", "Contextualiza", "Conversa", "Decide", "Desenvolve"];

function Column({
  label,
  items,
  accent,
  side,
}: {
  label: string;
  items: string[];
  accent: string;
  side: "ia" | "humano";
}) {
  return (
    <div
      className="relative rounded-[20px] border border-line bg-card-light p-6 shadow-[var(--shadow-soft)] md:p-7"
      style={{ borderTop: `3px solid ${accent}` }}
    >
      <p
        className="font-eyebrow text-[11px] font-bold uppercase tracking-[0.2em]"
        style={{ color: accent }}
      >
        {label}
      </p>
      <ul className="mt-4 flex flex-col gap-2.5">
        {items.map((it) => (
          <li
            key={it}
            className="flex items-center gap-3 rounded-[12px] bg-paper-soft px-4 py-2.5 text-[14px] font-semibold text-ink-strong"
          >
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-pill"
              style={{ background: accent }}
            />
            {it}
            <span
              className={`ml-auto text-ink-soft ${side === "ia" ? "" : "rotate-180"}`}
            >
              →
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AiHuman() {
  return (
    <section id="ia-humano" className="relative bg-paper py-20 md:py-28">
      <Container>
        <SectionHead
          eyebrow="IA + humano"
          title="IA quando escala. Humano quando importa."
          intro="A Vertho usa IA para conversar, extrair evidências, personalizar planos, acompanhar jornadas e gerar relatórios. Mas decisões sobre pessoas continuam sendo humanas, apoiadas por dados, contexto e responsabilidade."
          align="center"
        />

        <div className="relative mt-16 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* linha de conexão (desktop) */}
          <span
            aria-hidden
            className="absolute left-[24%] right-[24%] top-1/2 hidden h-[2px] -translate-y-1/2 bg-[linear-gradient(90deg,#8B5CF6,#34C5CC)] opacity-25 lg:block"
          />

          <Column label="IA" items={IA} accent="#8B5CF6" side="ia" />

          <div className="relative z-[1] mx-auto flex max-w-[220px] flex-col items-center rounded-[20px] border border-[rgba(52,197,204,0.35)] bg-card-light px-6 py-7 text-center shadow-[var(--shadow-glow-cyan)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-pill bg-[linear-gradient(135deg,#34C5CC,#8B5CF6)] text-[16px] text-white animate-glow">
              ◆
            </span>
            <p className="mt-3 font-display text-[16px] font-extrabold leading-tight text-ink-strong">
              Decisões melhores sobre pessoas
            </p>
          </div>

          <Column
            label="Humano"
            items={HUMANO}
            accent="#34C5CC"
            side="humano"
          />
        </div>
      </Container>
    </section>
  );
}
