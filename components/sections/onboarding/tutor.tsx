/* /produto/onboarding · Tutor humano + notificação. Fiel a TutorSection. */
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { TutorNotifMock } from "@/components/brand/onboarding-mocks";

export function TutorSection() {
  return (
    <Section id="tutor">
      <div className="flex flex-col items-center gap-14 md:flex-row">
        <div className="flex-1">
          <Eyebrow>Diferencial único</Eyebrow>
          <Heading variant="section" className="max-w-[520px]">
            A mentoria que toda empresa diz que faz e nenhuma faz
            consistentemente.
          </Heading>
          <Text size="body" className="mt-4 max-w-[500px] leading-[1.75]">
            O Vertho Onboarding institucionaliza o papel do tutor: um
            profissional sênior da empresa que recebe um ou dois
            recém-contratados, com check-ins programados nas semanas 4 e 7. A
            plataforma envia ao tutor a sugestão de pauta baseada no que o
            profissional executou nas missões. Conversa de mentoria deixa de ser
            “vou ver como ele está” e passa a ser conversa com agenda.
          </Text>
        </div>
        <TutorNotifMock />
      </div>
    </Section>
  );
}
