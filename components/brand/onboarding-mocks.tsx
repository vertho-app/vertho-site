/* ───────────────────────────────────────────────────────────────────────────
 * Mocks do Vertho Onboarding — componentes DS via MockupFrame.
 *   OnboardingWeekMock → hero (semana 4 · missão integradora)
 *   TutorNotifMock     → seção do tutor (notificação de check-in)
 * Fiéis a onboarding-sections.jsx.
 * ─────────────────────────────────────────────────────────────────────────── */
import { MockupFrame } from "@/components/brand/mockup-frame";

export function OnboardingWeekMock() {
  return (
    <MockupFrame className="w-full max-w-[380px]">
      <div className="flex items-center justify-between border-b border-card-border bg-white/[0.02] px-[18px] py-3.5">
        <span className="font-eyebrow text-[9px] font-bold uppercase tracking-[0.12em] text-lilac">
          Semana 4 · Missão Integradora
        </span>
        <span className="font-mono text-[9px] text-ink-faint">4 de 10</span>
      </div>
      <div className="p-[18px]">
        <p className="mb-1 font-display text-[18px] italic leading-[1.2] text-white">
          Integração de competências 1 e 2
        </p>
        <p className="mb-4 text-[10px] leading-[1.5] text-ink-dim">
          Aplique o que aprendeu em Gestão de Sala e Planejamento de Aula numa
          situação real.
        </p>
        <div className="mb-3 rounded-sm border border-[rgba(225,170,239,0.2)] bg-[rgba(225,170,239,0.04)] p-3">
          <span className="font-eyebrow text-[8px] font-bold uppercase tracking-[0.10em] text-lilac">
            Missão integradora 1
          </span>
          <p className="mt-1 text-[10.5px] leading-[1.5] text-ink-dim">
            Planeje e conduza uma aula usando a estrutura que aprendeu. Registre
            3 decisões que tomou e por quê.
          </p>
          <div className="mt-2 flex gap-1.5">
            <span className="rounded-pill border border-[rgba(225,170,239,0.2)] bg-[rgba(225,170,239,0.1)] px-2 py-[3px] text-[8px] font-semibold text-lilac">
              Em andamento
            </span>
            <span className="rounded-pill border border-card-border bg-white/[0.03] px-2 py-[3px] text-[8px] font-semibold text-ink-faint">
              Prazo: Sex 23/05
            </span>
          </div>
        </div>
        <div className="mb-3.5 flex items-center gap-2.5 rounded-sm border border-card-border bg-white/[0.02] p-3">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-pill border border-[rgba(52,197,204,0.25)] bg-[linear-gradient(135deg,rgba(52,197,204,0.15),rgba(52,197,204,0.05))]">
            <span className="text-[9px] font-bold text-cyan">MS</span>
          </div>
          <div>
            <span className="font-eyebrow text-[8px] font-bold uppercase tracking-[0.10em] text-cyan">
              Check-in com tutor
            </span>
            <p className="mt-0.5 text-[10px] text-ink-dim">
              Maria Silva · Agendado para Seg 26/05
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-1.5 py-1">
          {Array.from({ length: 10 }, (_, i) => (
            <span
              key={i}
              className={`rounded-pill ${i < 4 ? "h-2.5 w-2.5" : "h-2 w-2"}`}
              style={{
                background:
                  i < 4
                    ? i === 3
                      ? "var(--lilac)"
                      : "var(--cyan)"
                    : "rgba(255,255,255,0.08)",
                border: i === 3 ? "2px solid rgba(225,170,239,0.4)" : "none",
              }}
            />
          ))}
        </div>
      </div>
    </MockupFrame>
  );
}

export function TutorNotifMock() {
  return (
    <MockupFrame tilt={false} className="w-full max-w-[380px]">
      <div className="flex items-center gap-2 border-b border-card-border bg-[rgba(52,197,204,0.04)] px-4 py-3">
        <span className="h-2 w-2 rounded-pill bg-cyan shadow-[0_0_6px_rgba(52,197,204,0.4)]" />
        <span className="font-eyebrow text-[9px] font-bold uppercase tracking-[0.10em] text-cyan">
          Nova notificação
        </span>
      </div>
      <div className="p-[18px]">
        <div className="mb-3">
          <div className="mb-1.5 flex justify-between">
            <span className="text-[10px] text-ink-faint">Para:</span>
            <span className="text-[10px] font-semibold text-white">
              Maria Silva (Tutora)
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] text-ink-faint">Sobre:</span>
            <span className="text-[10px] font-semibold text-white">
              Bruno Costa (Tutorado)
            </span>
          </div>
        </div>
        <div className="mb-3.5 rounded-[8px] border border-[rgba(225,170,239,0.18)] bg-[rgba(225,170,239,0.06)] px-3 py-2">
          <span className="text-[10px] font-bold text-lilac">
            Semana 4 — Check-in agendado
          </span>
        </div>
        <p className="mb-3 text-[11px] leading-[1.55] text-ink-dim">
          Bruno completou as missões 1 e 2. Sugestão de pauta:
        </p>
        <ul className="mb-4 flex list-none flex-col gap-1.5 p-0">
          {[
            "Como ele conduziu a missão integradora 1",
            "Dúvidas recorrentes em conversa com BETO",
            "Próxima competência: Avaliação da Aprendizagem",
          ].map((t, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-[11px] leading-[1.5] text-ink-dim"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-[2px] bg-lilac opacity-50" />
              {t}
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <div className="flex-1 rounded-[8px] bg-[linear-gradient(135deg,#34c5cc,#2aa8ae)] py-2 text-center">
            <span className="text-[10px] font-bold text-navy-deep">
              Agendar conversa
            </span>
          </div>
          <div className="flex-1 rounded-[8px] border border-card-border py-2 text-center">
            <span className="text-[10px] font-semibold text-ink-dim">
              Ver progresso
            </span>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}
