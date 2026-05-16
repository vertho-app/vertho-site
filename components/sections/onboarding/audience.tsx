/* /produto/onboarding · "Dois públicos". Fiel a OnbAudienceSection. */
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";

const EDU_CHIPS = [
  "Gestão de Sala",
  "Planejamento de Aula",
  "Avaliação da Aprendizagem",
  "Comunicação com Famílias",
  "Postura Profissional",
];

export function OnbAudienceSection() {
  return (
    <Section id="onb-audience" bg="fade">
      <Eyebrow>Dois públicos</Eyebrow>
      <Heading variant="section">Mesmo programa, contextos diferentes.</Heading>

      <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
        <Card variant="accent-top" accent="cyan" className="flex h-full flex-col">
          <div className="mb-3.5 flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[rgba(52,197,204,0.18)] bg-[rgba(52,197,204,0.08)] text-cyan">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
              </svg>
            </div>
            <h3 className="font-display text-[22px] font-normal text-white">
              Para escolas e redes de ensino
            </h3>
          </div>
          <Text size="small" className="mb-3.5 text-[14px] leading-[1.65]">
            Professor recém-formado, coordenador pedagógico em primeira função,
            novo diretor escolar.
          </Text>
          <div className="mb-4 flex flex-wrap gap-1.5">
            {EDU_CHIPS.map((c) => (
              <span
                key={c}
                className="rounded-pill border border-[rgba(52,197,204,0.18)] bg-[rgba(52,197,204,0.06)] px-2.5 py-1 text-[10px] font-semibold text-cyan-soft"
              >
                {c}
              </span>
            ))}
          </div>
          <div className="mt-auto flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-pill bg-cyan opacity-60" />
            <span className="text-[12px] font-semibold text-cyan opacity-80">
              Em pilotos iniciados após a Bett Brasil 2026
            </span>
          </div>
        </Card>

        <Card variant="accent-top" accent="lilac" className="flex h-full flex-col">
          <div className="mb-3.5 flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-[rgba(225,170,239,0.18)] bg-[rgba(225,170,239,0.06)] text-lilac">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <path d="M12 12v4" />
              </svg>
            </div>
            <h3 className="font-display text-[22px] font-normal text-white">
              Para empresas
            </h3>
          </div>
          <Text size="small" className="mb-2 text-[14px] leading-[1.65]">
            Jovem profissional em primeiro emprego, profissional em mudança de
            área, novo gestor em primeira liderança.
          </Text>
          <Text size="small" className="mb-4 text-[14px] leading-[1.65]">
            Competências configuráveis por cargo via IA — o sistema rankeia
            automaticamente as 5 mais críticas para a função, respeitando a fase
            de carreira.
          </Text>
          <div className="mt-auto flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-pill bg-lilac opacity-60" />
            <span className="text-[12px] font-semibold text-lilac opacity-80">
              Para empresas de 50 a 500 colaboradores
            </span>
          </div>
        </Card>
      </div>
    </Section>
  );
}
