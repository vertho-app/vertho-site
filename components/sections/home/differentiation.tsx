/* ───────────────────────────────────────────────────────────────────────────
 * Home · Bloco de diferenciação — fundo azul profundo (acento escuro).
 * "Não é mais uma ferramenta isolada de RH." 4 cards "Não é só…".
 * ─────────────────────────────────────────────────────────────────────────── */
import { Container } from "@/components/ui/container";

const CARDS = [
  {
    title: "Não é só assessment",
    text: "O perfil não termina em relatório. Ele alimenta decisões sobre função, desenvolvimento, retenção e mobilidade.",
    accent: "#34C5CC",
  },
  {
    title: "Não é só treinamento",
    text: "O conteúdo não é genérico. Ele nasce dos gaps, do contexto e da função.",
    accent: "#8B5CF6",
  },
  {
    title: "Não é só IA",
    text: "A IA conversa, analisa, recomenda e acompanha. O humano valida, orienta e decide.",
    accent: "#34C5CC",
  },
  {
    title: "Não é só dashboard",
    text: "Cada sinal aponta para uma ação: conversa, apoio, desenvolvimento, realocação ou promoção.",
    accent: "#8B5CF6",
  },
];

export function Differentiation() {
  return (
    <section
      id="diferenciacao"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background:
          "radial-gradient(900px 540px at 80% 0%, rgba(52,197,204,0.12), transparent 60%), radial-gradient(700px 460px at 5% 100%, rgba(139,92,246,0.14), transparent 60%), linear-gradient(180deg,#071B33 0%,#0C2342 60%,#142F57 100%)",
      }}
    >
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <p className="flex items-center justify-center gap-2.5 font-eyebrow text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-soft">
            <span className="h-px w-7 bg-current opacity-40" />
            Diferenciação
          </p>
          <h2 className="mt-5 font-display text-[clamp(28px,3.6vw,46px)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            Não é mais uma ferramenta isolada de RH.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.16] md:p-8"
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 h-full w-[3px] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: c.accent }}
              />
              <h3
                className="font-display text-[20px] font-bold leading-tight"
                style={{ color: c.accent }}
              >
                {c.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
