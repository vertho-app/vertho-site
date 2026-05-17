/* ───────────────────────────────────────────────────────────────────────────
 * Home · Jornada Vertho — "Uma inteligência única para toda a jornada de
 * pessoas." Timeline de 5 etapas: horizontal/zigue no desktop, vertical
 * no mobile. Âncora da NavBar "Solução" → #jornada.
 * ─────────────────────────────────────────────────────────────────────────── */
import { Container } from "@/components/ui/container";
import { SectionHead, Surface } from "./_kit";

const STEPS = [
  {
    title: "Antes da contratação",
    text: "Apoia a identificação de maior aderência comportamental à função, à cultura e aos desafios reais da posição.",
  },
  {
    title: "Entrada",
    text: "Transforma onboarding em adaptação prática, cultural e comportamental.",
  },
  {
    title: "Desenvolvimento",
    text: "Conecta competências, PDI, conteúdo, missões práticas e Mentor IA.",
  },
  {
    title: "Retenção",
    text: "Identifica esforço adaptativo, bloqueadores, queda de engajamento e riscos de desgaste.",
  },
  {
    title: "Mobilidade",
    text: "Apoia promoções, sucessão e realocação com mais evidências.",
  },
];

export function Journey() {
  return (
    <section id="jornada" className="relative bg-paper py-20 md:py-28">
      <Container>
        <SectionHead
          eyebrow="Jornada Vertho"
          title="Uma inteligência única para toda a jornada de pessoas."
          align="center"
        />

        <ol className="relative mt-16 grid gap-6 md:grid-cols-5 md:gap-4">
          {/* trilho horizontal (desktop) */}
          <span
            aria-hidden
            className="absolute left-[7%] right-[7%] top-[19px] hidden h-[2px] bg-[linear-gradient(90deg,#34C5CC,#8B5CF6)] opacity-30 md:block"
          />
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative flex gap-5 md:flex-col">
              {/* nó + trilho vertical (mobile) */}
              <div className="flex flex-col items-center md:block">
                <span className="relative z-[1] flex h-10 w-10 items-center justify-center rounded-pill border border-[rgba(52,197,204,0.4)] bg-card-light font-display text-[15px] font-extrabold text-brand shadow-[var(--shadow-soft)]">
                  {i + 1}
                </span>
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="mt-1 w-[2px] flex-1 bg-line-strong md:hidden"
                  />
                )}
              </div>
              <Surface
                hover
                className="flex-1 p-5 md:mt-6 md:p-6"
              >
                <span className="font-eyebrow text-[10px] font-bold uppercase tracking-[0.16em] text-[#0E8F96]">
                  Etapa {i + 1}
                </span>
                <h3 className="mt-2 font-display text-[17px] font-bold leading-tight text-ink-strong">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-body">
                  {s.text}
                </p>
              </Surface>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
