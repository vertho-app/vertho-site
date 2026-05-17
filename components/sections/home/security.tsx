/* ───────────────────────────────────────────────────────────────────────────
 * Home · Segurança e confiança — "Inteligência de Pessoas com segurança,
 * contexto e responsabilidade." 6 cards pequenos.
 * ─────────────────────────────────────────────────────────────────────────── */
import {
  Lock,
  Brain,
  ShieldCheck,
  EyeOff,
  BarChart3,
  UserCheck,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHead } from "./_kit";

const ITEMS = [
  {
    Icon: Lock,
    title: "Dados isolados por organização",
    text: "Cada empresa ou escola opera em seu próprio espaço, sem cruzamento de dados.",
  },
  {
    Icon: Brain,
    title: "IA contextualizada à cultura",
    text: "A inteligência se adapta aos valores e ao contexto de cada organização.",
  },
  {
    Icon: ShieldCheck,
    title: "Avaliações críticas auditadas",
    text: "Decisões sensíveis passam por trilha de auditoria e revisão.",
  },
  {
    Icon: EyeOff,
    title: "Privacidade por design",
    text: "Coleta mínima, finalidade clara e proteção desde a concepção.",
  },
  {
    Icon: BarChart3,
    title: "Relatórios agregados para gestão",
    text: "Visões de conjunto que orientam decisão sem exposição individual indevida.",
  },
  {
    Icon: UserCheck,
    title: "Decisão humana preservada",
    text: "A IA apoia; quem decide sobre pessoas continua sendo gente.",
  },
];

export function Security() {
  return (
    <section id="seguranca" className="relative bg-paper py-20 md:py-28">
      <Container>
        <SectionHead
          eyebrow="Segurança e confiança"
          title="Inteligência de Pessoas com segurança, contexto e responsabilidade."
          align="center"
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-[18px] border border-line bg-card-light p-6 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(52,197,204,0.35)]"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] bg-[rgba(52,197,204,0.12)] text-[#0E8F96] transition-colors duration-300 group-hover:bg-[rgba(52,197,204,0.2)]">
                <Icon size={19} strokeWidth={2} />
              </span>
              <h3 className="mt-4 font-display text-[15.5px] font-bold leading-snug text-ink-strong">
                {title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-body">
                {text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
