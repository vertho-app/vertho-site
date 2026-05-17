/* ───────────────────────────────────────────────────────────────────────────
 * Home · Bloco de promessa — "Pessoas certas. Funções certas. Desenvolvimento
 * certo." Diagrama hub-and-spoke (pessoa no centro ↔ 6 dimensões) + cards
 * de perguntas que a Vertho ajuda a responder.
 * ─────────────────────────────────────────────────────────────────────────── */
import { Container } from "@/components/ui/container";
import { SectionHead, Surface } from "./_kit";

const SPOKES = [
  { label: "Função", x: 50, y: 4 },
  { label: "Cultura", x: 92, y: 27 },
  { label: "Competências", x: 92, y: 73 },
  { label: "Desenvolvimento", x: 50, y: 96 },
  { label: "Evolução", x: 8, y: 73 },
  { label: "Retenção", x: 8, y: 27 },
];

const QUESTIONS = [
  "Está no lugar certo?",
  "O que precisa desenvolver?",
  "Está atuando com alto esforço adaptativo?",
  "Quem precisa de apoio antes de desgastar?",
  "Quem está pronto para crescer?",
  "Quem pode ser promovido com menor risco?",
];

function Hub() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[400px]">
      {/* linhas */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        aria-hidden
        preserveAspectRatio="none"
      >
        {SPOKES.map((s) => (
          <line
            key={s.label}
            x1="50"
            y1="50"
            x2={s.x}
            y2={s.y}
            stroke="rgba(52,197,204,0.40)"
            strokeWidth="0.5"
            strokeDasharray="2 2"
          />
        ))}
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="rgba(20,47,87,0.10)"
          strokeWidth="0.4"
        />
      </svg>

      {/* centro: pessoa */}
      <div className="absolute left-1/2 top-1/2 flex h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-pill border border-[rgba(52,197,204,0.35)] bg-card-light text-center shadow-[var(--shadow-glow-cyan)]">
        <span className="flex h-9 w-9 items-center justify-center rounded-pill bg-[linear-gradient(135deg,#34C5CC,#8B5CF6)] text-[15px] text-white">
          ◑
        </span>
        <span className="mt-1.5 text-[12px] font-bold text-ink-strong">
          Pessoa
        </span>
        <span className="text-[9.5px] font-medium text-ink-soft">
          perfil + contexto
        </span>
      </div>

      {/* nós */}
      {SPOKES.map((s) => (
        <div
          key={s.label}
          className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-pill border border-line bg-card-light px-3.5 py-2 text-[12px] font-bold text-brand shadow-[var(--shadow-soft)]"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
        >
          {s.label}
        </div>
      ))}
    </div>
  );
}

export function Promise() {
  return (
    <section id="promessa" className="relative bg-paper-soft py-20 md:py-28">
      <Container>
        <SectionHead
          eyebrow="A promessa"
          title="Pessoas certas. Funções certas. Desenvolvimento certo."
          intro="A Vertho compara pessoas, funções, competências e cultura para ajudar sua organização a tomar decisões melhores sobre entrada, desenvolvimento, retenção e mobilidade."
          align="center"
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Surface className="p-8 md:p-10">
            <Hub />
          </Surface>

          <div className="grid gap-3.5 sm:grid-cols-2">
            {QUESTIONS.map((q, i) => (
              <Surface
                key={q}
                hover
                className="flex items-start gap-3 p-5"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-pill bg-[rgba(52,197,204,0.12)] text-[12px] font-bold text-[#0E8F96]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[14.5px] font-semibold leading-snug text-ink-strong">
                  {q}
                </p>
              </Surface>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
