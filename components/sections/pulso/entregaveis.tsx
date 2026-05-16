/* /produto/pulso · Entregáveis. Fiel a EntregaveisSection. */
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ITEMS = [
  { title: "Aceleradores", accent: "cyan" as const, verb: "Manter", desc: "O que está ajudando a evolução da equipe — manter." },
  { title: "Bloqueadores", accent: "coral" as const, verb: "Mexer", desc: "O que está travando o desenvolvimento — mexer." },
  { title: "Alertas", accent: "lilac" as const, verb: "Investigar", desc: "Quedas de engajamento, barreiras recorrentes, divergências entre o que diz e o que faz." },
  { title: "Recomendações", accent: "cyan-soft" as const, verb: "Executar", desc: "Ações práticas para a próxima semana — não para o próximo trimestre." },
];

export function EntregaveisSection() {
  return (
    <Section id="entregaveis" bg="fade">
      <Eyebrow>O que o gestor recebe</Eyebrow>
      <Heading variant="section">Diagnóstico que vira ação.</Heading>
      <Text size="lead" measure className="mt-4">
        Cada Pulso gera quatro entregáveis — não relatórios para arquivar,
        recomendações para executar.
      </Text>

      <div className="mt-12 grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
        {ITEMS.map((it) => (
          <Card
            key={it.title}
            variant="accent-left"
            accent={it.accent}
            className="flex h-full flex-col"
          >
            <div className="mb-2 flex items-center justify-between">
              <h4 className="text-[18px] font-semibold text-white">
                {it.title}
              </h4>
              <Badge variant="soft" tone={it.accent}>
                {it.verb}
              </Badge>
            </div>
            <Text size="small" className="text-[14px] leading-[1.65]">
              {it.desc}
            </Text>
          </Card>
        ))}
      </div>
    </Section>
  );
}
