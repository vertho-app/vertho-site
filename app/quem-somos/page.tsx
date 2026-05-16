/* /quem-somos — sem mockup; padrão visual das âncoras. Copy: brief §4.7.
 * Reusa <TeamSection> (fotos + selo Bett). */
import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { SectionDivider } from "@/components/ui/section-divider";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { TeamSection } from "@/components/sections/team";
import { CtaBlock } from "@/components/sections/cta-block";

const DESCRIPTION =
  "Samuel Protetti, Juliane Cavalcante e Rodrigo Naves. Mais de 70 anos de experiência somada em desenvolvimento de pessoas.";

export const metadata: Metadata = {
  title: { absolute: "Quem somos — Vertho.ai" },
  description: DESCRIPTION,
  alternates: { canonical: "/quem-somos" },
  openGraph: {
    title: "Quem somos — Vertho.ai",
    description: DESCRIPTION,
    url: "https://vertho.ai/quem-somos",
    siteName: "Vertho.ai",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Quem somos — Vertho.ai", description: DESCRIPTION },
};

const VALORES = [
  { t: "Respeito", d: "Cada profissional é tratado como adulto capaz. A IA conversa, não interroga." },
  { t: "Responsabilidade", d: "Decisão de IA auditável, dado pessoal protegido, promessa que se sustenta." },
  { t: "Colaboração", d: "O ciclo só funciona quando colaborador, gestor e RH conversam entre si." },
  { t: "Curiosidade", d: "Perguntar antes de concluir. Testar antes de afirmar." },
  { t: "Empatia", d: "Desenvolver gente é entender contexto, não aplicar fórmula." },
];

const CONQUISTAS = [
  "Apresentada na Bett Brasil 2026",
  "Programa Apex",
  "Parcerias institucionais em educação",
  "Pilotos em curso em escolas e empresas",
];

export default function QuemSomosPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(800px 500px at 50% 0%, rgba(52,197,204,0.08), transparent 60%), radial-gradient(600px 400px at 25% 90%, rgba(59,10,109,0.12), transparent 60%)",
          }}
        />
        <Container className="relative z-[1] pb-12 pt-[140px]">
          <Eyebrow>Quem somos</Eyebrow>
          <Heading variant="hero" className="max-w-[760px]">
            Gente que passou a vida desenvolvendo gente.
          </Heading>
          <Text size="lead" className="mt-6 max-w-[620px]">
            A Vertho é fundada por três profissionais com mais de 70 anos de
            experiência somada em educação e desenvolvimento de pessoas.
          </Text>
        </Container>
      </section>

      <SectionDivider />

      <RevealOnScroll>
        <Section width="narrow">
          <Eyebrow>História</Eyebrow>
          <Heading variant="section" className="mb-6">
            Por que a Vertho existe.
          </Heading>
          <div className="flex flex-col gap-5">
            <Text size="lead" className="leading-[1.8]">
              A área que mais precisa desenvolver pessoas é, paradoxalmente, a
              que tem menos estrutura para isso. A educação vive esse paradoxo —
              e empresas de pequeno e médio porte também. Treinamento pontual
              não vira competência; manual em PDF não vira integração; planilha
              não vira acompanhamento.
            </Text>
            <Text size="lead" className="leading-[1.8]">
              A Vertho nasceu da decisão de resolver isso com tecnologia séria,
              não com mais um curso. Reunimos experiência de sala de aula, de
              formação de profissionais e de construção de plataformas para
              entregar o ciclo inteiro — mapear, desenvolver e acompanhar — em
              uma só ferramenta.
            </Text>
          </div>
        </Section>
      </RevealOnScroll>

      <SectionDivider />
      <RevealOnScroll>
        <TeamSection />
      </RevealOnScroll>

      <SectionDivider />
      <RevealOnScroll>
        <Section>
          <Eyebrow>Valores</Eyebrow>
          <Heading variant="section">No que a gente acredita.</Heading>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {VALORES.map((v) => (
              <Card key={v.t} variant="hover" className="flex h-full flex-col">
                <h3 className="mb-2 font-display text-[22px] font-normal text-cyan-soft">
                  {v.t}
                </h3>
                <Text size="small" className="text-[14px] leading-[1.65]">
                  {v.d}
                </Text>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <Eyebrow>Conquistas</Eyebrow>
            <div className="mt-4 flex flex-wrap gap-3">
              {CONQUISTAS.map((c) => (
                <span
                  key={c}
                  className="rounded-pill border border-[rgba(52,197,204,0.18)] bg-[rgba(52,197,204,0.06)] px-4 py-2 text-[13px] font-semibold text-cyan-soft"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Section>
      </RevealOnScroll>

      <SectionDivider />
      <RevealOnScroll>
        <CtaBlock
          title="Quer conversar com quem constrói a Vertho?"
          subtitle="Fale direto com um dos sócios — demonstração de 20 minutos ou WhatsApp."
          primaryLabel="Falar com a gente"
          whatsappMessage="Olá! Vim pela página Quem somos da Vertho e quero conversar."
        />
      </RevealOnScroll>
    </>
  );
}
