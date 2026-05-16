/* /produto/pulso · "Três fontes. Uma leitura." Fiel a CamadasSection. */
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { PulsoT0Mock, SinaisMock } from "@/components/brand/pulso-mocks";

function CamadaText({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1">
      <div className="mb-2.5 flex items-baseline gap-2.5">
        <span className="font-display text-[36px] leading-none text-cyan opacity-25">
          {num}
        </span>
        <h3 className="font-display text-[26px] font-normal text-cyan-soft">
          {title}
        </h3>
      </div>
      <Text size="body">{children}</Text>
    </div>
  );
}

function TriangulacaoDiagram() {
  return (
    <div className="relative flex h-[260px] w-full items-center justify-center md:w-[340px]">
      <div className="absolute left-10 top-2.5 h-40 w-40 rotate-[-5deg] rounded-xl border border-[rgba(52,197,204,0.18)] bg-[rgba(52,197,204,0.06)]" />
      <div className="absolute right-10 top-7 h-40 w-40 rotate-[3deg] rounded-xl border border-[rgba(225,170,239,0.18)] bg-[rgba(225,170,239,0.06)]" />
      <div className="absolute bottom-2.5 left-1/2 -ml-20 h-40 w-40 rotate-[-1deg] rounded-xl border border-[rgba(154,226,230,0.15)] bg-[rgba(154,226,230,0.05)]" />
      <div className="absolute left-[65px] top-9 text-[10px] font-semibold text-cyan-soft">
        Pulso T0
      </div>
      <div className="absolute right-[55px] top-14 text-[10px] font-semibold text-lilac">
        Sinais da Jornada
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-cyan-soft">
        Pulso T2
      </div>
      <div className="relative z-[2] rounded-md border border-[rgba(52,197,204,0.3)] bg-[rgba(52,197,204,0.1)] px-[18px] py-3 backdrop-blur-[8px]">
        <span className="mb-[3px] block text-[9px] font-bold uppercase tracking-[0.10em] text-purple">
          Dual-IA · Insight
        </span>
        <span className="text-[10px] text-ink-dim">
          O que a pesquisa sozinha não vê
        </span>
      </div>
    </div>
  );
}

export function CamadasSection() {
  return (
    <Section id="camadas" bg="fade">
      <Eyebrow>Como funciona</Eyebrow>
      <Heading variant="section">Três fontes. Uma leitura.</Heading>
      <Text size="lead" measure className="mt-4">
        O Pulso combina dois pulsos curtos com sinais extraídos da jornada — e
        triangula as três fontes para detectar até o que a pessoa não percebe
        que está sentindo.
      </Text>

      <div className="mt-14 flex flex-col gap-12">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <CamadaText num="01" title="Pulso T0 e T2">
            12 perguntas em escala 1-5 aplicadas no início (T0) e no fim (T2) da
            jornada. Tempo: 4-6 minutos por aplicação. Apenas dois momentos — não
            há fadiga de questionário.
          </CamadaText>
          <PulsoT0Mock />
        </div>
        <div className="flex flex-col items-center gap-12 md:flex-row-reverse">
          <CamadaText num="02" title="Sinais da jornada">
            Análise contínua do que cada profissional produz na plataforma:
            reflexões pós-missão, conversas com BETO, engajamento com
            microconteúdos, evidências socráticas. Sem questionário adicional.
          </CamadaText>
          <SinaisMock />
        </div>
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <CamadaText num="03" title="Triangulação">
            As três fontes são cruzadas com Dual-IA (Sonnet + Gemini) que
            detectam discrepâncias. Quando o que a equipe responde no pulso
            diverge do que ela demonstra na jornada, surge insight invisível
            para qualquer pesquisa isolada.
          </CamadaText>
          <TriangulacaoDiagram />
        </div>
      </div>
    </Section>
  );
}
