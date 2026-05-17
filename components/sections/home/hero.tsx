/* ───────────────────────────────────────────────────────────────────────────
 * Home · Hero — copy à esquerda, "Painel de Inteligência" à direita.
 * Mockup 100% HTML/SVG: radar comportamental + cards de sinal (aderência,
 * esforço adaptativo, PDI, prontidão, desgaste). Conecta pessoa→função→
 * desenvolvimento→decisão num só visual. Não entra em RevealOnScroll.
 * ─────────────────────────────────────────────────────────────────────────── */
import { Container } from "@/components/ui/container";
import { Eyebrow, Radar, Gauge, Surface, Pill } from "./_kit";

const WHATSAPP =
  "https://wa.me/5511911807809?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site da Vertho e quero agendar uma demonstração.",
  );

const RADAR_AXES = [
  "Função",
  "Cultura",
  "Competências",
  "Comunicação",
  "Adaptação",
  "Liderança",
];

function SignalRow({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "ok" | "warn" | "ai";
}) {
  const dot =
    tone === "ok"
      ? "bg-cyan"
      : tone === "warn"
        ? "bg-[#E8923C]"
        : "bg-ai";
  const val =
    tone === "ok"
      ? "text-[#0E8F96]"
      : tone === "warn"
        ? "text-[#C2741F]"
        : "text-ai";
  return (
    <div className="flex items-center justify-between gap-3 border-b border-line py-2.5 last:border-0">
      <span className="flex items-center gap-2 text-[12.5px] font-medium text-ink-body">
        <span className={`h-1.5 w-1.5 rounded-pill ${dot}`} />
        {label}
      </span>
      <span className={`text-[12px] font-bold ${val}`}>{value}</span>
    </div>
  );
}

function HeroDashboard() {
  return (
    <div className="relative w-full max-w-[520px]">
      {/* Painel principal */}
      <Surface className="overflow-hidden p-0">
        <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
          <span className="text-[12px] font-bold tracking-[-0.01em] text-ink-strong">
            Painel de Inteligência · Ana M.
          </span>
          <Pill tone="cyan">tempo real</Pill>
        </div>
        <div className="grid gap-5 p-5 sm:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col items-center justify-center rounded-[14px] bg-paper-soft p-3">
            <span className="mb-1 self-start text-[10px] font-bold uppercase tracking-[0.14em] text-ink-soft">
              Radar comportamental
            </span>
            <Radar
              values={[0.82, 0.64, 0.78, 0.7, 0.55, 0.6]}
              axes={RADAR_AXES}
              size={230}
              sweep
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 rounded-[14px] border border-line bg-card-light px-4 py-3">
              <Gauge value={82} label="aderência" size={74} />
              <div>
                <p className="text-[12px] font-bold text-ink-strong">
                  Aderência à função
                </p>
                <p className="mt-0.5 text-[11px] leading-snug text-ink-soft">
                  Alta para Coordenação Pedagógica
                </p>
              </div>
            </div>
            <div className="rounded-[14px] border border-line bg-card-light px-4 py-3">
              <SignalRow
                label="Esforço adaptativo"
                value="Alerta preventivo"
                tone="warn"
              />
              <SignalRow label="PDI recomendado" value="3 frentes" tone="ai" />
              <SignalRow label="Mobilidade" value="Mapeada" tone="ok" />
            </div>
          </div>
        </div>
      </Surface>

      {/* Card flutuante — prontidão */}
      <Surface className="animate-rise absolute -left-5 -bottom-9 hidden w-[210px] p-4 sm:block">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft">
            Prontidão p/ promoção
          </span>
          <span className="h-2 w-2 rounded-pill bg-cyan animate-glow" />
        </div>
        <p className="mt-2 font-display text-[26px] font-extrabold leading-none text-ink-strong">
          Alta
        </p>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-pill bg-mist">
          <span className="block h-full w-[78%] rounded-pill bg-[linear-gradient(90deg,#34C5CC,#8B5CF6)]" />
        </div>
      </Surface>

      {/* Card flutuante — desgaste */}
      <Surface className="absolute -right-4 -top-7 hidden w-[196px] p-4 md:block">
        <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink-soft">
          Sinal de desgaste
        </span>
        <div className="mt-2 flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-pill bg-[rgba(232,146,60,0.15)] text-[13px]">
            ⚠️
          </span>
          <p className="text-[12.5px] font-semibold leading-tight text-ink-strong">
            Acompanhar nas próximas 2 semanas
          </p>
        </div>
      </Surface>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-paper"
    >
      {/* glows sutis */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(820px 520px at 88% 6%, rgba(52,197,204,0.14), transparent 60%), radial-gradient(680px 480px at 6% 88%, rgba(139,92,246,0.10), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[6%] top-[14%] hidden h-[360px] w-[360px] rounded-pill animate-float lg:block"
        style={{
          border: "1px solid rgba(52,197,204,0.14)",
          background:
            "radial-gradient(circle, rgba(52,197,204,0.06), transparent 70%)",
        }}
      />
      <Container className="relative z-[1] grid items-center gap-14 pb-24 pt-[140px] lg:grid-cols-[1.05fr_1fr] lg:pb-32 lg:pt-[160px]">
        <div>
          <Pill tone="cyan" className="mb-6">
            <span className="h-1.5 w-1.5 rounded-pill bg-cyan" />
            Inteligência de Pessoas
          </Pill>
          <h1 className="font-display text-[clamp(34px,5vw,58px)] font-extrabold leading-[1.05] tracking-[-0.025em] text-ink-strong">
            Dificuldade para atrair, desenvolver e reter as{" "}
            <span className="bg-[linear-gradient(120deg,#34C5CC,#8B5CF6)] bg-clip-text text-transparent">
              pessoas certas?
            </span>
          </h1>
          <p className="mt-7 max-w-[560px] text-[clamp(15px,1.5vw,18px)] leading-[1.65] text-ink-body">
            A Vertho ajuda empresas, escolas e redes a entender melhor pessoas,
            funções e cultura — identificando aderência comportamental,
            necessidades de desenvolvimento, esforço adaptativo e sinais que
            impactam retenção, promoção e desempenho.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="#jornada"
              className="group inline-flex items-center gap-2 rounded-pill bg-[linear-gradient(135deg,#34C5CC,#2FB9C0)] px-7 py-4 text-[15px] font-bold text-[#071B33] no-underline shadow-[var(--shadow-cta)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-cta-hover)]"
            >
              Ver como funciona
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-pill border border-line-strong bg-card-light px-7 py-4 text-[15px] font-semibold text-brand no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[rgba(52,197,204,0.5)]"
            >
              Agendar demonstração
            </a>
          </div>
          <p className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] font-medium text-ink-soft">
            <span>Empresas</span>
            <span className="h-1 w-1 rounded-pill bg-ink-soft/40" />
            <span>Escolas e redes de ensino</span>
            <span className="h-1 w-1 rounded-pill bg-ink-soft/40" />
            <span>Decisão humana preservada</span>
          </p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <HeroDashboard />
        </div>
      </Container>
    </section>
  );
}
