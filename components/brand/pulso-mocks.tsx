/* ───────────────────────────────────────────────────────────────────────────
 * Mocks do Pulso de Desenvolvimento — componentes DS via MockupFrame.
 *   PulsoDashMock → hero (dashboard de pulso da equipe)
 *   PulsoT0Mock   → camada 1 (pergunta do Pulso T0)
 *   SinaisMock    → camada 2 (fontes de sinal ativas)
 * Fiéis a pulso-sections.jsx.
 * ─────────────────────────────────────────────────────────────────────────── */
import { MockupFrame } from "@/components/brand/mockup-frame";
import { AlertIcon } from "@/components/ui/icons";

export function PulsoDashMock() {
  const bars = [28, 34, 31, 38, 42, 40, 48, 52, 50, 56, 54, 60];
  return (
    <MockupFrame className="w-full max-w-[400px]">
      <div className="flex items-center justify-between border-b border-card-border bg-white/[0.02] px-[18px] py-3.5">
        <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-cyan">
          Pulso da Equipe
        </span>
        <span className="text-[9px] text-ink-faint">Maio 2026 · 23 participantes</span>
      </div>
      <div className="p-[18px]">
        <div className="mb-4 flex h-8 items-end gap-[3px]">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-[2px]"
              style={{
                height: `${h}%`,
                background:
                  i < 6
                    ? "rgba(52,197,204,0.15)"
                    : `rgba(52,197,204,${0.2 + (i - 6) * 0.08})`,
              }}
            />
          ))}
        </div>
        <div className="mb-4 flex justify-between">
          <span className="text-[8px] text-ink-faint">T0 · Fev</span>
          <span className="text-[8px] font-semibold text-cyan">Atual · Mai</span>
        </div>

        <div className="mb-3">
          <span className="text-[8px] font-bold uppercase tracking-[0.10em] text-cyan">
            Aceleradores
          </span>
          <div className="mt-1.5 flex flex-col gap-1">
            {[
              "Clareza de expectativas alta",
              "Liderança percebida como presente",
              "Conteúdo conectado ao trabalho real",
            ].map((t) => (
              <div
                key={t}
                className="flex items-center gap-1.5 rounded-[6px] border border-[rgba(52,197,204,0.12)] bg-[rgba(52,197,204,0.05)] px-2 py-1.5"
              >
                <span className="h-1 w-1 shrink-0 rounded-[2px] bg-cyan" />
                <span className="text-[10px] text-cyan-soft">{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-3">
          <span className="text-[8px] font-bold uppercase tracking-[0.10em] text-coral">
            Bloqueadores
          </span>
          <div className="mt-1.5 flex flex-col gap-1">
            {[
              "Sobrecarga relatada em 3 equipes",
              "Baixa aplicação prática na área comercial",
            ].map((t) => (
              <div
                key={t}
                className="flex items-center gap-1.5 rounded-[6px] border border-[rgba(249,115,84,0.15)] bg-[rgba(249,115,84,0.05)] px-2 py-1.5"
              >
                <span className="h-1 w-1 shrink-0 rounded-[2px] bg-coral" />
                <span className="text-[10px] text-[#fca898]">{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="text-[8px] font-bold uppercase tracking-[0.10em] text-lilac">
            Alerta
          </span>
          <div className="mt-1.5 flex items-center gap-1.5 rounded-[6px] border border-[rgba(225,170,239,0.15)] bg-[rgba(225,170,239,0.05)] px-2 py-1.5">
            <AlertIcon size={10} className="shrink-0 text-lilac" />
            <span className="text-[10px] text-lilac">
              Divergência Pulso × Sinais na equipe Comercial
            </span>
          </div>
        </div>
      </div>
    </MockupFrame>
  );
}

export function PulsoT0Mock() {
  return (
    <MockupFrame tilt={false} className="w-full md:w-[340px]">
      <div className="p-[18px]">
        <div className="mb-2.5 text-[8px] font-bold uppercase tracking-[0.10em] text-ink-faint">
          Pulso T0 · Pergunta 3 de 12
        </div>
        <p className="mb-3 text-[12px] leading-[1.5] text-white">
          “Tenho clareza sobre o que se espera de mim no meu papel.”
        </p>
        <div className="flex gap-1.5">
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className="flex-1 rounded-[8px] py-2 text-center"
              style={{
                background: n === 4 ? "rgba(52,197,204,0.15)" : "rgba(255,255,255,0.03)",
                border:
                  n === 4
                    ? "1px solid rgba(52,197,204,0.35)"
                    : "1px solid var(--card-border)",
              }}
            >
              <span
                className={n === 4 ? "font-bold text-cyan" : "text-ink-faint"}
                style={{ fontSize: 12 }}
              >
                {n}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-1.5 flex justify-between">
          <span className="text-[8px] text-ink-faint">Discordo totalmente</span>
          <span className="text-[8px] text-ink-faint">Concordo totalmente</span>
        </div>
      </div>
    </MockupFrame>
  );
}

export function SinaisMock() {
  const rows = [
    { label: "BETO", val: "47 interações", color: "var(--purple)" },
    { label: "Missões", val: "12 reflexões", color: "var(--lilac)" },
    { label: "Diagnóstico", val: "6 turnos", color: "var(--cyan)" },
    { label: "Conteúdo", val: "89% completude", color: "var(--cyan-soft)" },
    { label: "Evidências", val: "18 descritores", color: "var(--cyan)" },
  ];
  return (
    <MockupFrame tilt={false} className="w-full md:w-[340px]">
      <div className="p-[18px]">
        <div className="mb-3 text-[8px] font-bold uppercase tracking-[0.10em] text-ink-faint">
          Fontes de sinal ativas
        </div>
        {rows.map((s) => (
          <div
            key={s.label}
            className="flex items-center justify-between border-b border-card-border py-[7px] last:border-b-0"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-pill"
                style={{ background: s.color }}
              />
              <span className="text-[11px] text-ink-dim">{s.label}</span>
            </div>
            <span
              className="font-mono text-[10px] font-semibold"
              style={{ color: s.color }}
            >
              {s.val}
            </span>
          </div>
        ))}
      </div>
    </MockupFrame>
  );
}
