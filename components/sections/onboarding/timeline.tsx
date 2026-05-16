/* /produto/onboarding · Timeline 10 semanas (espiral). Fiel a TimelineSection. */
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

type WType = "neutral" | "comp" | "integ" | "eval";

const WEEKS: { num: number; label: string; detail: string; type: WType }[] = [
  { num: 1, label: "Calibragem", detail: "DISC + Diagnóstico Conversacional + Onboarding institucional", type: "neutral" },
  { num: 2, label: "Competência 1", detail: "Fundamento + micro-prática", type: "comp" },
  { num: 3, label: "Competência 2", detail: "Fundamento + micro-prática", type: "comp" },
  { num: 4, label: "Integração 1", detail: "Missão Integradora + Check-in com tutor", type: "integ" },
  { num: 5, label: "Competência 3", detail: "Fundamento + micro-prática", type: "comp" },
  { num: 6, label: "Competência 4", detail: "Fundamento + micro-prática", type: "comp" },
  { num: 7, label: "Integração 2", detail: "Missão Integradora + Check-in com tutor", type: "integ" },
  { num: 8, label: "Competência 5", detail: "Fundamento + micro-prática", type: "comp" },
  { num: 9, label: "Integração final", detail: "Missão multi-competência envolvendo as 5", type: "integ" },
  { num: 10, label: "Avaliação", detail: "Cenário B + Evolution Report + Plenária", type: "eval" },
];

const C: Record<WType, { bg: string; border: string; text: string; dot: string }> = {
  neutral: { bg: "rgba(255,255,255,0.06)", border: "var(--card-border)", text: "var(--ink-dim)", dot: "rgba(255,255,255,0.3)" },
  comp: { bg: "rgba(52,197,204,0.06)", border: "rgba(52,197,204,0.2)", text: "var(--cyan-soft)", dot: "var(--cyan)" },
  integ: { bg: "rgba(225,170,239,0.06)", border: "rgba(225,170,239,0.25)", text: "var(--lilac)", dot: "var(--lilac)" },
  eval: { bg: "rgba(52,197,204,0.1)", border: "rgba(52,197,204,0.35)", text: "var(--cyan)", dot: "var(--cyan)" },
};

export function TimelineSection() {
  return (
    <Section id="timeline" bg="fade">
      <Eyebrow>Como funciona</Eyebrow>
      <Heading variant="section">
        10 semanas. 5 competências. Estrutura espiral.
      </Heading>
      <Text size="lead" measure className="mt-4">
        Linear é o caminho mais curto entre dois pontos. Espiral é o caminho
        mais curto entre alguém que chegou ontem e alguém pronto para atuar com
        autonomia.
      </Text>

      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {WEEKS.map((w) => {
          const c = C[w.type];
          const special = w.type === "integ" || w.type === "eval";
          return (
            <div
              key={w.num}
              className="rounded-[14px] p-3.5"
              style={{ background: c.bg, border: `1px solid ${c.border}` }}
            >
              <div
                className="mb-2.5 flex items-center justify-center rounded-pill"
                style={{
                  width: special ? 28 : 24,
                  height: special ? 28 : 24,
                  background: special ? c.dot : "transparent",
                  border: special ? "none" : `2px solid ${c.dot}`,
                }}
              >
                <span
                  className="font-bold"
                  style={{
                    fontSize: special ? 11 : 10,
                    color: special ? "var(--navy-deep)" : c.dot,
                  }}
                >
                  {w.num}
                </span>
              </div>
              <h4
                className="mb-1 text-[13px] font-semibold leading-[1.25]"
                style={{ color: c.text }}
              >
                {w.label}
              </h4>
              <p className="text-[10.5px] leading-[1.45] text-ink-faint">
                {w.detail}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap justify-center gap-5">
        {[
          { color: "var(--cyan)", label: "Competência" },
          { color: "var(--lilac)", label: "Integração + Tutor" },
          { color: "rgba(255,255,255,0.3)", label: "Calibragem" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-1.5">
            <span
              className="h-2 w-2 rounded-pill"
              style={{ background: l.color }}
            />
            <span className="text-[11px] text-ink-faint">{l.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
