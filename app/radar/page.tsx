/* /radar — página-ponte para radar.vertho.ai (subdomínio existente,
 * não tocar). Sem mockup; padrão visual das âncoras. Copy: brief. */
import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/ui/section-divider";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";

const DESCRIPTION =
  "180 mil escolas do Brasil em uma tela. Saeb, Ideb, ENEM, Censo e FUNDEB com narrativa por IA. Acesso livre.";

export const metadata: Metadata = {
  title: { absolute: "Radar Vertho — Inteligência pública educacional" },
  description: DESCRIPTION,
  alternates: { canonical: "/radar" },
  openGraph: {
    title: "Radar Vertho — Inteligência pública educacional",
    description: DESCRIPTION,
    url: "https://vertho.ai/radar",
    siteName: "Vertho.ai",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Radar Vertho — Inteligência pública educacional", description: DESCRIPTION },
};

const PONTOS = [
  { t: "+180 mil escolas", d: "Toda a educação básica do Brasil consolidada e navegável." },
  { t: "Saeb · Ideb · ENEM", d: "Indicadores oficiais reunidos por escola, rede e município." },
  { t: "Censo · FUNDEB", d: "Matrícula, infraestrutura e financiamento no mesmo lugar." },
  { t: "Narrativa por IA", d: "A leitura dos números vira texto que qualquer gestor entende." },
];

export default function RadarPage() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(900px 600px at 50% 0%, rgba(52,197,204,0.09), transparent 60%), radial-gradient(700px 500px at 80% 90%, rgba(59,10,109,0.12), transparent 60%)",
          }}
        />
        <Container width="narrow" className="relative z-[1] pb-16 pt-[140px] text-center">
          <Eyebrow align="center">Nosso outro produto</Eyebrow>
          <Heading variant="hero" align="center" className="mx-auto max-w-[720px]">
            Radar Vertho
          </Heading>
          <Text size="lead" align="center" className="mx-auto mb-9 mt-5 max-w-[560px]">
            Inteligência pública sobre escolas, redes e municípios do Brasil.
            Saeb, Ideb, ENEM, Censo e FUNDEB consolidados, com narrativa por IA.
            Sem login. Grátis.
          </Text>
          <div className="flex justify-center">
            <Button
              href="https://radar.vertho.ai"
              variant="cta"
              external
              withArrow
            >
              Acessar o Radar
            </Button>
          </div>
        </Container>
      </section>

      <SectionDivider />

      <RevealOnScroll>
        <Section>
          <Eyebrow>O que tem dentro</Eyebrow>
          <Heading variant="section">A educação básica do Brasil, legível.</Heading>
          <div className="mt-12 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 md:grid-cols-4">
            {PONTOS.map((p) => (
              <Card key={p.t} variant="hover" className="flex h-full flex-col">
                <h3 className="mb-2 font-display text-[22px] font-normal text-cyan-soft">
                  {p.t}
                </h3>
                <Text size="small" className="text-[14px] leading-[1.65]">
                  {p.d}
                </Text>
              </Card>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button
              href="https://radar.vertho.ai"
              variant="secondary"
              external
            >
              radar.vertho.ai
            </Button>
          </div>
        </Section>
      </RevealOnScroll>
    </>
  );
}
