/* ───────────────────────────────────────────────────────────────────────────
 * Home · Portas de entrada — "Para organizações que precisam decidir melhor
 * sobre pessoas." Cards Empresas / Educação. Âncoras: #empresas (seção) e
 * #educacao (card). CTAs → WhatsApp (decisão do projeto).
 * ─────────────────────────────────────────────────────────────────────────── */
import { Building2, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHead } from "./_kit";

const wa = (msg: string) =>
  "https://wa.me/5511911807809?text=" + encodeURIComponent(msg);

const CARDS = [
  {
    id: "empresas",
    Icon: Building2,
    accent: "#34C5CC",
    title: "Empresas",
    text: "Seleção com mais evidências, onboarding, desenvolvimento, retenção e mobilidade interna.",
    cta: "Ver solução para empresas",
    href: wa(
      "Olá! Sou de uma empresa e quero ver a solução da Vertho para empresas.",
    ),
    bullets: ["Seleção com evidências", "Retenção e mobilidade", "Decisão de gestão"],
  },
  {
    id: "educacao",
    Icon: GraduationCap,
    accent: "#8B5CF6",
    title: "Educação",
    text: "Atraia, desenvolva e retenha educadores com inteligência comportamental, competências e dados educacionais.",
    cta: "Ver solução para educação",
    href: wa(
      "Olá! Sou de uma escola/rede de ensino e quero ver a solução da Vertho para educação.",
    ),
    bullets: ["Atração de educadores", "Desenvolvimento docente", "Dados educacionais"],
  },
];

export function Entries() {
  return (
    <section id="empresas" className="relative bg-paper-soft py-20 md:py-28">
      <Container>
        <SectionHead
          eyebrow="Portas de entrada"
          title="Para organizações que precisam decidir melhor sobre pessoas."
          align="center"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {CARDS.map(({ id, Icon, accent, title, text, cta, href, bullets }) => (
            <div
              key={id}
              id={id}
              className="group relative flex scroll-mt-24 flex-col overflow-hidden rounded-[24px] border border-line bg-card-light p-8 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] md:p-10"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-pill opacity-50 blur-2xl transition-opacity duration-300 group-hover:opacity-90"
                style={{
                  background: `radial-gradient(circle, ${accent}33, transparent 70%)`,
                }}
              />
              <span
                className="relative inline-flex h-12 w-12 items-center justify-center rounded-[14px]"
                style={{ background: `${accent}1F`, color: accent }}
              >
                <Icon size={22} strokeWidth={2} />
              </span>
              <h3 className="relative mt-5 font-display text-[24px] font-extrabold tracking-[-0.01em] text-ink-strong">
                {title}
              </h3>
              <p className="relative mt-3 text-[15px] leading-relaxed text-ink-body">
                {text}
              </p>
              <ul className="relative mt-5 flex flex-wrap gap-2">
                {bullets.map((b) => (
                  <li
                    key={b}
                    className="rounded-pill border border-line bg-paper px-3 py-1 text-[12px] font-semibold text-ink-soft"
                  >
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-7 inline-flex w-fit items-center gap-2 rounded-pill px-5 py-3 text-[14px] font-bold no-underline transition-all duration-200 hover:gap-3"
                style={{ background: `${accent}1A`, color: accent }}
              >
                {cta}
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
