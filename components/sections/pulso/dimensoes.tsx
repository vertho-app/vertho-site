/* /produto/pulso · 6 dimensões. Fiel a DimensoesSection. */
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";

const DIMS = [
  { title: "Clareza", icon: "◎", desc: "Expectativas e competências valorizadas pela organização" },
  { title: "Condições", icon: "◈", desc: "Tempo, recursos e espaço para colocar desenvolvimento em prática" },
  { title: "Liderança", icon: "◇", desc: "Apoio, acompanhamento e feedback do gestor direto" },
  { title: "Segurança", icon: "○", desc: "Espaço para pedir ajuda, testar, errar e ajustar sem punição" },
  { title: "Aplicação", icon: "▹", desc: "Conexão entre o que se aprende e o trabalho real do dia a dia" },
  { title: "Futuro", icon: "△", desc: "Percepção de evolução, crescimento e razão para permanecer" },
];

export function DimensoesSection() {
  return (
    <Section id="dimensoes">
      <Eyebrow>O que medimos</Eyebrow>
      <Heading variant="section">
        Seis dimensões do ambiente de desenvolvimento.
      </Heading>
      <Text size="lead" measure className="mt-4">
        Não cobrimos tudo — cobrimos o que importa para que pessoas evoluam.
        Inspirado em Gallup Q12, Qualtrics e literatura de segurança
        psicológica.
      </Text>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {DIMS.map((d, i) => (
          <Card key={d.title} variant="hover" className="p-6">
            <div
              className="mb-3.5 flex h-9 w-9 items-center justify-center rounded-sm text-[16px] text-cyan"
              style={{
                background: `rgba(52,197,204,${0.04 + i * 0.01})`,
                border: "1px solid rgba(52,197,204,0.15)",
              }}
            >
              {d.icon}
            </div>
            <h4 className="mb-1.5 text-[17px] font-semibold text-white">
              {d.title}
            </h4>
            <Text size="small" className="text-[13.5px]">
              {d.desc}
            </Text>
          </Card>
        ))}
      </div>
    </Section>
  );
}
