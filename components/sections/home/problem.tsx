/* ───────────────────────────────────────────────────────────────────────────
 * Home · Bloco do problema — "É falta de conexão."
 * Visual: 4 fragmentos desconectados (Assessment→PDF, Treinamento→
 * Certificado, PDI→Planilha, Pesquisa→Dashboard) convergindo, por linhas
 * tracejadas, para a "Camada de Inteligência Vertho".
 * ─────────────────────────────────────────────────────────────────────────── */
import { Container } from "@/components/ui/container";
import { SectionHead, Surface } from "./_kit";

const FRAGMENTS = [
  { from: "Assessment", to: "PDF" },
  { from: "Treinamento", to: "Certificado" },
  { from: "PDI", to: "Planilha" },
  { from: "Pesquisa", to: "Dashboard" },
];

const BULLETS = ["Dados integrados", "IA aplicada", "Sinais acionáveis"];

function Fragment({ from, to }: { from: string; to: string }) {
  return (
    <div className="rounded-[16px] border border-dashed border-line-strong bg-card-light/60 px-4 py-4 text-center">
      <p className="text-[13px] font-bold text-ink-strong">{from}</p>
      <div className="my-2 flex items-center justify-center gap-1.5 text-ink-soft">
        <span className="h-px w-4 bg-ink-soft/40" />
        <span className="text-[11px]">vira</span>
        <span className="h-px w-4 bg-ink-soft/40" />
      </div>
      <p className="inline-block rounded-pill bg-mist px-2.5 py-1 text-[11.5px] font-semibold text-ink-soft">
        {to}
      </p>
    </div>
  );
}

export function Problem() {
  return (
    <section id="problema" className="relative bg-paper py-20 md:py-28">
      <Container>
        <SectionHead
          eyebrow="O problema"
          title={
            <>
              O problema não é falta de ferramentas.{" "}
              <span className="text-ink-soft">É falta de conexão.</span>
            </>
          }
          intro="Testes comportamentais viram PDFs. Treinamentos viram certificados. PDIs viram planilhas. Pesquisas viram dashboards. E decisões importantes sobre pessoas continuam sendo tomadas com dados incompletos."
          align="center"
        />

        <div className="relative mx-auto mt-16 max-w-[920px]">
          {/* Fragmentos desconectados */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {FRAGMENTS.map((f) => (
              <Fragment key={f.from} {...f} />
            ))}
          </div>

          {/* Linhas de conexão convergindo */}
          <svg
            viewBox="0 0 920 90"
            className="mx-auto hidden h-[90px] w-full md:block"
            aria-hidden
            preserveAspectRatio="none"
          >
            {[115, 345, 575, 805].map((x) => (
              <path
                key={x}
                d={`M${x},0 C${x},45 460,45 460,90`}
                fill="none"
                stroke="rgba(52,197,204,0.45)"
                strokeWidth="1.5"
                strokeDasharray="5 6"
                className="animate-dash-flow"
              />
            ))}
          </svg>

          {/* Camada de Inteligência Vertho */}
          <div className="relative mt-8 md:mt-0">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-10 -top-6 bottom-0 rounded-[28px] blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 30%, rgba(52,197,204,0.22), transparent 70%)",
              }}
            />
            <Surface className="relative overflow-hidden p-8 md:p-10">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#34C5CC,#8B5CF6)]"
              />
              <div className="flex flex-col items-center gap-7 text-center md:flex-row md:text-left">
                <div className="flex-1">
                  <p className="font-eyebrow text-[11px] font-bold uppercase tracking-[0.2em] text-[#0E8F96]">
                    A resposta da Vertho
                  </p>
                  <h3 className="mt-3 font-display text-[clamp(22px,2.6vw,30px)] font-bold leading-[1.15] text-ink-strong">
                    Camada de Inteligência Vertho
                  </h3>
                  <p className="mt-3 max-w-[440px] text-[14.5px] leading-relaxed text-ink-body">
                    Uma camada que conecta o que hoje vive solto — e transforma
                    dados dispersos em decisões melhores sobre pessoas.
                  </p>
                </div>
                <ul className="flex w-full max-w-[260px] flex-col gap-3">
                  {BULLETS.map((b, i) => (
                    <li
                      key={b}
                      className="flex items-center gap-3 rounded-[12px] border border-line bg-paper-soft px-4 py-3 text-left text-[14px] font-semibold text-ink-strong"
                    >
                      <span
                        className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-pill text-[11px] font-bold text-white"
                        style={{
                          background:
                            i === 2
                              ? "linear-gradient(135deg,#34C5CC,#8B5CF6)"
                              : i === 1
                                ? "#8B5CF6"
                                : "#34C5CC",
                        }}
                      >
                        {i + 1}
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Surface>
          </div>
        </div>
      </Container>
    </section>
  );
}
