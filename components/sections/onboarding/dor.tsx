/* /produto/onboarding · "O problema" + stats. Fiel a DorSection. */
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const STATS = [
  { num: "R$ 30-50k", label: "Custo médio de um turnover de professor em escola privada" },
  { num: "6 meses", label: "Tempo médio até pedido de demissão sem onboarding estruturado" },
  { num: "30%", label: "Redução de turnover observada em programas estruturados de integração" },
];

export function DorSection() {
  return (
    <Section id="a-dor">
      <Eyebrow>O problema</Eyebrow>
      <Heading variant="section" className="max-w-[720px]">
        Recém-contratado é a maior fonte de turnover. E o menos preparado para
        receber.
      </Heading>
      <div className="mt-9 grid grid-cols-1 gap-8 md:grid-cols-2">
        <Text size="body" className="leading-[1.75]">
          Em escolas, professor recém-formado sai antes do fim do primeiro
          semestre. Em empresas, o jovem profissional pede demissão antes dos 6
          meses. O problema raramente é talento — é estrutura de integração.
        </Text>
        <Text size="body" className="leading-[1.75]">
          A maioria das organizações ainda trata onboarding como uma palestra de
          boas-vindas e um manual em PDF. O custo aparece três meses depois, em
          forma de saída, retrabalho e equipes frustradas.
        </Text>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {STATS.map((s) => (
          <div
            key={s.num}
            className="rounded-xl border border-card-border bg-card-bg px-6 py-7 text-center"
          >
            <div className="mb-2.5 font-display text-[36px] font-normal leading-none text-cyan">
              {s.num}
            </div>
            <Text size="small" className="text-[13px]">
              {s.label}
            </Text>
          </div>
        ))}
      </div>
    </Section>
  );
}
