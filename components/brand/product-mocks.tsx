/* ───────────────────────────────────────────────────────────────────────────
 * Mocks esquemáticos do Mentor IA — componentes do design system (NÃO imagens).
 * Container = <MockupFrame> da Fase 0. Fiéis a produto-sections.jsx.
 *   DashboardMock        → hero da /produto (painel do colaborador + BETO)
 *   DiagnosticMock       → fase Mapear (Diagnóstico Conversacional)
 *   JourneyContentMock   → fase Desenvolver (microconteúdo + missão + BETO)
 *   EvolutionMock        → fase Acompanhar (Evolution Report)
 * ─────────────────────────────────────────────────────────────────────────── */
import { MockupFrame } from "@/components/brand/mockup-frame";

/* ── Hero: painel do colaborador ── */
export function DashboardMock() {
  return (
    <MockupFrame className="w-full max-w-[420px]">
      <div className="relative bg-[linear-gradient(180deg,#091D35_0%,#0F2A4A_100%)]">
        <div className="flex h-[340px]">
          {/* sidebar */}
          <div className="flex w-[42px] flex-col items-center gap-3.5 border-r border-card-border bg-[rgba(9,29,53,0.95)] py-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-pill border border-[rgba(52,197,204,0.25)] bg-[rgba(52,197,204,0.15)]">
              <span className="text-[8px] font-bold text-cyan">RC</span>
            </div>
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`h-4 w-4 rounded-[4px] ${i === 0 ? "bg-[rgba(52,197,204,0.2)]" : "bg-white/[0.05]"}`}
              />
            ))}
          </div>
          {/* conteúdo */}
          <div className="flex-1 overflow-hidden px-[18px] py-4">
            <p className="mb-0.5 text-[9px] text-ink-faint">Olá, Rodrigo</p>
            <p className="mb-3.5 font-display text-[18px] italic leading-[1.15] text-white">
              Seu próximo <span className="text-cyan">avanço</span> começa hoje
            </p>

            <div className="mb-2.5 rounded-sm border border-card-border bg-white/[0.025] p-3">
              <div className="mb-1.5 flex items-baseline justify-between">
                <div>
                  <span className="font-eyebrow text-[8px] font-bold uppercase tracking-[0.12em] text-cyan">
                    Sua jornada
                  </span>
                  <div className="font-display text-[28px] leading-none text-cyan">
                    20<span className="text-[12px] text-ink-faint">%</span>
                  </div>
                </div>
                <div className="text-right font-mono text-[8px] text-ink-faint">
                  <div>FASE 02</div>
                  <div>DE 05</div>
                </div>
              </div>
              <div className="flex gap-[3px]">
                {["OPQ", "AVAL", "PDI", "TEMP", "EVOL"].map((l, i) => (
                  <div key={l} className="flex-1 text-center">
                    <div
                      className={`mb-[3px] h-[3px] rounded-[2px] ${
                        i === 0
                          ? "bg-cyan"
                          : i === 1
                            ? "bg-[rgba(52,197,204,0.4)]"
                            : "bg-white/[0.06]"
                      }`}
                    />
                    <span
                      className={`text-[6px] font-bold tracking-[0.06em] ${i <= 1 ? "text-cyan" : "text-ink-faint"}`}
                    >
                      {l}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-2.5 rounded-sm border border-card-border bg-white/[0.025] p-3">
              <span className="font-eyebrow text-[7px] font-bold uppercase tracking-[0.12em] text-cyan">
                Foco da semana
              </span>
              <p className="mt-0.5 font-display text-[16px] italic text-white">
                Preparação
              </p>
              <p className="mt-[3px] text-[9px] text-ink-dim">
                Sua trilha de desenvolvimento está sendo montada.
              </p>
              <div className="mt-2 rounded-[8px] bg-[linear-gradient(135deg,#34c5cc,#2aa8ae)] py-2 text-center">
                <span className="text-[10px] font-bold text-navy-deep">
                  Iniciar avaliação →
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-sm border border-card-border bg-white/[0.025] px-3 py-2">
              <div className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-pill bg-[rgba(52,197,204,0.12)]">
                <span className="text-[10px] text-cyan">⚡</span>
              </div>
              <div>
                <span className="font-eyebrow text-[7px] font-bold uppercase tracking-[0.10em] text-cyan">
                  Insight do dia
                </span>
                <p className="m-0 font-display text-[11px] italic text-white">
                  Novas técnicas de liderança
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* BETO flutuante */}
        <div className="absolute bottom-3.5 right-3.5 z-[2] flex h-8 w-8 items-center justify-center rounded-pill bg-[linear-gradient(135deg,#9E4EDD,#7B3BBB)] shadow-[0_4px_12px_rgba(158,78,221,0.4)]">
          <span className="text-[8px] font-extrabold text-white">B</span>
        </div>
      </div>
    </MockupFrame>
  );
}

/* ── Mapear: Diagnóstico Conversacional ── */
export function DiagnosticMock() {
  return (
    <MockupFrame tilt={false} className="w-full">
      <div className="p-5">
        <div className="mb-3 font-eyebrow text-[8px] font-bold uppercase tracking-[0.12em] text-ink-faint">
          Diagnóstico Conversacional · Turno 4 de 6
        </div>
        <div className="flex flex-col gap-2">
          <div className="max-w-[90%] rounded-[12px_12px_12px_3px] border border-[rgba(52,197,204,0.15)] bg-[rgba(52,197,204,0.08)] px-3.5 py-2.5">
            <p className="text-[11.5px] leading-[1.5] text-cyan-soft">
              Me conta de uma vez recente em que você precisou tomar uma decisão
              difícil em time.
            </p>
          </div>
          <div className="ml-auto max-w-[90%] rounded-[12px_12px_3px_12px] border border-card-border bg-white/[0.04] px-3.5 py-2.5">
            <p className="text-[11.5px] leading-[1.5] text-white/70">
              A gente tinha prazo apertado e duas propostas opostas. Reuni o time
              e decidi pela que tinha mais evidência.
            </p>
          </div>
          <div className="max-w-[90%] rounded-[12px_12px_12px_3px] border border-[rgba(52,197,204,0.15)] bg-[rgba(52,197,204,0.08)] px-3.5 py-2.5">
            <p className="text-[11.5px] leading-[1.5] text-cyan-soft">
              E quando a evidência não era tão clara assim — como você lidou com
              a incerteza dentro do time?
            </p>
          </div>
        </div>
        <div className="mt-2.5 flex gap-[3px]">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`h-[3px] w-7 rounded-[2px] ${i < 4 ? "bg-cyan" : "bg-white/[0.08]"}`}
            />
          ))}
        </div>
      </div>
    </MockupFrame>
  );
}

/* ── Desenvolver: microconteúdo + missão + BETO ── */
export function JourneyContentMock() {
  return (
    <MockupFrame tilt={false} className="w-full">
      <div className="p-5">
        <div className="mb-1 font-eyebrow text-[8px] font-bold uppercase tracking-[0.12em] text-cyan">
          Semana 5 · Comunicação assertiva
        </div>
        <p className="mb-3 font-display text-[16px] italic text-white">
          Como dar feedback sem defensividade
        </p>
        <div className="mb-3.5 flex flex-wrap gap-1.5">
          {["Vídeo 8min", "Texto", "Podcast", "Case study"].map((f, i) => (
            <span
              key={f}
              className={`rounded-pill px-2.5 py-1 text-[9px] font-semibold ${
                i === 0
                  ? "border border-[rgba(52,197,204,0.25)] bg-[rgba(52,197,204,0.12)] text-cyan"
                  : "border border-card-border bg-white/[0.04] text-ink-dim"
              }`}
            >
              {f}
            </span>
          ))}
        </div>
        <div className="rounded-sm border border-[rgba(158,78,221,0.2)] bg-[rgba(158,78,221,0.04)] p-2.5">
          <span className="font-eyebrow text-[8px] font-bold uppercase tracking-[0.10em] text-lilac">
            Missão prática
          </span>
          <p className="mt-1 text-[10.5px] leading-[1.5] text-ink-dim">
            Conduza uma conversa de feedback com um colega usando a estrutura
            SBI. Relate o resultado.
          </p>
        </div>
        <div className="mt-3 flex items-center gap-2 py-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-pill bg-[linear-gradient(135deg,#9E4EDD,#7B3BBB)]">
            <span className="text-[7px] font-extrabold text-white">B</span>
          </div>
          <p className="m-0 text-[10px] italic text-ink-dim">
            Precisa de ajuda com a missão? Estou aqui 24/7.
          </p>
        </div>
      </div>
    </MockupFrame>
  );
}

/* ── Acompanhar: Evolution Report ── */
export function EvolutionMock() {
  const comps = [
    { name: "Liderança pedagógica", before: 1.4, after: 2.8, color: "#ff6b6b" },
    { name: "Comunicação e influência", before: 2.1, after: 3.2, color: "var(--cyan)" },
    { name: "Gestão de conflitos", before: 1.2, after: 2.5, color: "var(--lilac)" },
  ];
  return (
    <MockupFrame tilt={false} className="w-full">
      <div className="p-5">
        <div className="mb-2.5 font-eyebrow text-[8px] font-bold uppercase tracking-[0.12em] text-ink-faint">
          Evolution Report
        </div>
        {comps.map((c) => (
          <div key={c.name} className="mb-3">
            <div className="mb-1 flex justify-between">
              <span className="text-[10.5px] text-ink-dim">{c.name}</span>
              <span className="text-[10px] font-bold text-cyan">
                {c.before.toFixed(1)} → {c.after.toFixed(1)}
              </span>
            </div>
            <div className="flex h-1.5 gap-[2px] overflow-hidden rounded-[3px]">
              <div
                className="rounded-[3px] bg-white/[0.08]"
                style={{ width: `${(c.before / 4) * 100}%` }}
              />
              <div
                className="rounded-[3px] opacity-70"
                style={{
                  width: `${((c.after - c.before) / 4) * 100}%`,
                  background: c.color,
                }}
              />
            </div>
          </div>
        ))}
        <div className="mt-2 rounded-[8px] border border-[rgba(52,197,204,0.12)] bg-[rgba(52,197,204,0.06)] p-2.5">
          <span className="font-eyebrow text-[8px] font-bold uppercase tracking-[0.10em] text-cyan">
            Evolução confirmada
          </span>
          <p className="mt-1 text-[10px] leading-[1.5] text-ink-dim">
            Avanço médio de +1.3 pontos em 14 semanas. Maior evolução em
            Liderança pedagógica.
          </p>
        </div>
        <div className="mt-2.5 rounded-[6px] border border-card-border py-[7px] text-center">
          <span className="text-[9px] font-semibold text-ink-dim">
            ↓ Exportar PDF
          </span>
        </div>
      </div>
    </MockupFrame>
  );
}
