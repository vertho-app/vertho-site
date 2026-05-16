/* /produto/pulso (Pulso de Desenvolvimento) — Fase 2. Ordem fiel a
 * "Vertho Pulso.html": Hero → Princípio → Camadas → Dimensões →
 * Entregáveis → NR-1/PGR (id="nr-1") → CTA. */
import type { Metadata } from "next";
import { SectionDivider } from "@/components/ui/section-divider";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { PulsoHero } from "@/components/sections/pulso/hero";
import { PrincipioSection } from "@/components/sections/pulso/principio";
import { CamadasSection } from "@/components/sections/pulso/camadas";
import { DimensoesSection } from "@/components/sections/pulso/dimensoes";
import { EntregaveisSection } from "@/components/sections/pulso/entregaveis";
import { NR1SubsidiosSection } from "@/components/sections/pulso/nr1-subsidios";
import { CtaBlock } from "@/components/sections/cta-block";

const DESCRIPTION =
  "Camada de inteligência contínua sobre o ambiente. Não é pesquisa de clima. É leitura dos sinais reais de desenvolvimento.";

export const metadata: Metadata = {
  title: { absolute: "Pulso de Desenvolvimento — Vertho.ai" },
  description: DESCRIPTION,
  alternates: { canonical: "/produto/pulso" },
  openGraph: {
    title: "Pulso de Desenvolvimento — Vertho.ai",
    description: DESCRIPTION,
    url: "https://vertho.ai/produto/pulso",
    siteName: "Vertho.ai",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulso de Desenvolvimento — Vertho.ai",
    description: DESCRIPTION,
  },
};

export default function PulsoPage() {
  return (
    <>
      <PulsoHero />
      <SectionDivider />
      <RevealOnScroll>
        <PrincipioSection />
      </RevealOnScroll>
      <SectionDivider />
      <RevealOnScroll>
        <CamadasSection />
      </RevealOnScroll>
      <SectionDivider />
      <RevealOnScroll>
        <DimensoesSection />
      </RevealOnScroll>
      <SectionDivider />
      <RevealOnScroll>
        <EntregaveisSection />
      </RevealOnScroll>
      <SectionDivider />
      <RevealOnScroll>
        <NR1SubsidiosSection />
      </RevealOnScroll>
      <SectionDivider />
      <RevealOnScroll>
        <CtaBlock
          id="pulso-cta"
          title="Quer ver o Pulso de Desenvolvimento rodando para sua organização?"
          subtitle="Demonstração de 20 minutos com um dos sócios. Ou fale direto no WhatsApp."
          whatsappMessage="Olá! Vim pela página do Pulso de Desenvolvimento e quero saber mais."
        />
      </RevealOnScroll>
    </>
  );
}
