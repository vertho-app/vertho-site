/* /manifesto — sem mockup; segue o padrão editorial das âncoras (tratamento
 * tipográfico da seção "Princípio" do Pulso). Copy: brief §4.6. */
import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { SectionDivider } from "@/components/ui/section-divider";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { CtaBlock } from "@/components/sections/cta-block";

const DESCRIPTION =
  "Para desenvolver pessoas, primeiro é preciso conhecê-las. Nossa filosofia em uma página.";

export const metadata: Metadata = {
  title: { absolute: "Manifesto — Vertho.ai" },
  description: DESCRIPTION,
  alternates: { canonical: "/manifesto" },
  openGraph: {
    title: "Manifesto — Vertho.ai",
    description: DESCRIPTION,
    url: "https://vertho.ai/manifesto",
    siteName: "Vertho.ai",
    locale: "pt_BR",
    type: "article",
  },
  twitter: { card: "summary_large_image", title: "Manifesto — Vertho.ai", description: DESCRIPTION },
};

const PRINCIPIOS = [
  {
    head: "Primeiro, em respeito ao profissional.",
    body: "Nossa IA não interroga: conversa. Não vigia: escuta. Não julga: ajuda a refletir. Identificado para personalizar — sim. Agregado para gerir — sempre.",
  },
  {
    head: "Segundo, em rigor técnico.",
    body: "Cada decisão de IA passa por dois modelos independentes. Cada prompt é versionado com hash criptográfico. Cada dado pessoal é mascarado antes de tocar IA externa. Não é “temos IA” — é IA séria, auditável, replicável.",
  },
  {
    head: "Terceiro, em ciclo fechado.",
    body: "Não vendemos diagnóstico solto, nem treinamento solto, nem dashboard solto. Vendemos o ciclo inteiro — porque desenvolver pessoas só funciona quando mapeamento, desenvolvimento e acompanhamento conversam entre si. Cada peça em separado é commodity. A integração é o produto.",
  },
];

export default function ManifestoPage() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(900px 600px at 50% 0%, rgba(52,197,204,0.08), transparent 60%), radial-gradient(700px 500px at 20% 90%, rgba(59,10,109,0.12), transparent 60%)",
          }}
        />
        <Container width="narrow" className="relative z-[1] pb-16 pt-[140px] text-center">
          <Eyebrow align="center">Manifesto</Eyebrow>
          <Heading variant="hero" align="center" className="mx-auto max-w-[760px]">
            Para desenvolver pessoas, primeiro é preciso conhecê-las.
          </Heading>
        </Container>
      </section>

      <SectionDivider />

      <RevealOnScroll>
        <Section width="narrow">
          <div className="flex flex-col gap-6">
            <Text size="lead" className="text-[19px] leading-[1.75] text-ink">
              A Vertho nasceu de uma constatação incômoda: a área que mais
              precisa desenvolver pessoas — a educação — é justamente a que tem
              menos gestão de pessoas estruturada. E não é só a educação.
              Empresas pequenas e médias vivem o mesmo paradoxo: investem em
              treinamentos pontuais, mas não conseguem mapear competências, dar
              feedback útil ou acompanhar planos de desenvolvimento de forma
              individualizada.
            </Text>
            <Text size="lead" className="leading-[1.8]">
              A gente entendeu que isso não é um problema de boa vontade — é um
              problema de tecnologia.
            </Text>
            <Text size="lead" className="leading-[1.8]">
              A Vertho é uma plataforma de Inteligência de Pessoas. Usamos IA
              própria em múltiplas camadas — para mapear competências, para
              construir perfis comportamentais, para gerar cenários
              personalizados de aprendizagem, e para extrair sinais do ambiente
              que ajudam ou bloqueiam a evolução das pessoas.
            </Text>
            <Text size="lead" className="leading-[1.8]">
              Cada profissional recebe um plano de desenvolvimento feito sob
              medida, com mentor disponível 24/7, conteúdo no formato que ele
              aprende melhor, e acompanhamento que não depende da
              disponibilidade do gestor. Cada gestor recebe uma leitura clara do
              que está acontecendo com sua equipe — em dados, não em vibes. Cada
              organização ganha um espelho honesto de quem ela é, do que sabe
              fazer, e do que precisa cultivar.
            </Text>
            <p className="font-display text-[clamp(24px,3vw,34px)] font-normal italic leading-[1.3] text-white">
              Mapear. Desenvolver. Acompanhar.{" "}
              <span className="text-ink-dim">
                Esse é o nosso ciclo. Em escolas, redes municipais, empresas de
                qualquer porte — porque desenvolver pessoas é o trabalho mais
                antigo e mais novo do mundo.
              </span>
            </p>
            <Text size="lead" className="leading-[1.8]">
              A gente acredita em três coisas, e elas guiam tudo o que
              construímos.
            </Text>

            <div className="mt-2 flex flex-col gap-5">
              {PRINCIPIOS.map((p) => (
                <div
                  key={p.head}
                  className="rounded-lg border border-card-border bg-card-bg p-6"
                >
                  <h3 className="mb-2 font-display text-[22px] font-normal text-cyan-soft">
                    {p.head}
                  </h3>
                  <Text size="body" className="text-[15px] leading-[1.7]">
                    {p.body}
                  </Text>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-card-border pt-8 text-center">
              <p className="font-display text-[20px] text-white">
                Vertho.ai — Inteligência de Pessoas. Com IA.
              </p>
              <p className="mt-2 font-eyebrow text-[12px] font-bold uppercase tracking-[0.14em] text-ink-faint">
                Samuel Protetti · Juliane Cavalcante · Rodrigo Naves
              </p>
            </div>
          </div>
        </Section>
      </RevealOnScroll>

      <SectionDivider />
      <RevealOnScroll>
        <CtaBlock
          title="Quer ver a Vertho funcionando para sua organização?"
          subtitle="Agende uma demonstração de 20 minutos com um dos sócios. Ou fale direto no WhatsApp."
          whatsappMessage="Olá! Li o manifesto da Vertho e quero conversar."
        />
      </RevealOnScroll>
    </>
  );
}
