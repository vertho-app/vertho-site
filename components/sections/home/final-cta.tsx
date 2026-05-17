/* ───────────────────────────────────────────────────────────────────────────
 * Home · CTA final — fundo azul profundo, linhas de conexão, brilho ciano
 * e a marca Vertho abstrata. CTA "Agendar demonstração" → WhatsApp.
 * ─────────────────────────────────────────────────────────────────────────── */
import Image from "next/image";
import { Container } from "@/components/ui/container";

const WHATSAPP =
  "https://wa.me/5511911807809?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site da Vertho e quero agendar uma demonstração.",
  );

export function FinalCta() {
  return (
    <section
      id="agendar"
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background:
          "radial-gradient(900px 520px at 50% 0%, rgba(52,197,204,0.16), transparent 60%), radial-gradient(700px 460px at 85% 100%, rgba(139,92,246,0.16), transparent 60%), linear-gradient(180deg,#142F57 0%,#0C2342 50%,#071B33 100%)",
      }}
    >
      {/* linhas de conexão decorativas */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.5]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 600"
      >
        <defs>
          <linearGradient id="cl" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#34C5CC" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {[
          "M0,120 C300,60 500,260 1200,140",
          "M0,420 C400,520 800,300 1200,480",
          "M120,600 C260,360 520,420 760,0",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="url(#cl)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
            className="animate-dash-flow"
          />
        ))}
      </svg>

      {/* marca abstrata */}
      <Image
        src="/logo-vertho-sem-texto.png"
        alt=""
        width={1140}
        height={1196}
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-[-60px] h-[320px] w-auto opacity-[0.06] md:opacity-[0.09]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-pill animate-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(52,197,204,0.16), transparent 70%)",
        }}
      />

      <Container width="narrow" className="relative z-[1] text-center">
        <p className="flex items-center justify-center gap-2.5 font-eyebrow text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-soft">
          <span className="h-px w-7 bg-current opacity-40" />
          Vertho · Inteligência de Pessoas
        </p>
        <h2 className="mt-6 font-display text-[clamp(28px,4vw,48px)] font-extrabold leading-[1.08] tracking-[-0.025em] text-white">
          Quer entender melhor quem entra, quem cresce e quem pode sair?
        </h2>
        <p className="mx-auto mt-6 max-w-[560px] text-[clamp(15px,1.5vw,18px)] leading-[1.65] text-white/70">
          Veja como a Vertho conecta pessoas, funções e desenvolvimento em uma
          única inteligência para apoiar decisões melhores sobre talentos.
        </p>
        <div className="mt-10 flex justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-pill bg-[linear-gradient(135deg,#34C5CC,#2FB9C0)] px-9 py-[18px] text-[16px] font-bold text-[#071B33] no-underline shadow-[var(--shadow-cta)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-cta-hover)]"
          >
            Agendar demonstração
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
