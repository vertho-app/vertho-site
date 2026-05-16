/* Placeholder de Fase 0. A Home real é entregue na Fase 1. */
import { Section, Heading, Text, Button, Eyebrow } from "@/components/ui";

export default function HomePlaceholder() {
  return (
    <Section className="pt-32" width="narrow">
      <div className="text-center">
        <Eyebrow align="center">Vertho.ai · Site · Fase 0</Eyebrow>
        <Heading variant="hero" align="center" className="mb-6">
          Design system pronto para validação.
        </Heading>
        <Text size="lead" align="center" className="mx-auto mb-9 max-w-[520px]">
          Esta é uma página temporária. A Home real entra na Fase 1. Revise os
          componentes e tokens na página interna de QA.
        </Text>
        <div className="flex justify-center">
          <Button href="/design" variant="cta" withArrow>
            Abrir o /design
          </Button>
        </div>
      </div>
    </Section>
  );
}
