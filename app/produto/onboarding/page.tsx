/* /produto/onboarding (Vertho Onboarding) — Fase 2. Ordem fiel a
 * "Vertho Onboarding.html": Hero → Problema → Timeline → Tutor →
 * Dois públicos → CTA. og:image re-exportada (gotcha Next). */
import type { Metadata } from "next";
import { SectionDivider } from "@/components/ui/section-divider";
import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { OnboardingHero } from "@/components/sections/onboarding/hero";
import { DorSection } from "@/components/sections/onboarding/dor";
import { TimelineSection } from "@/components/sections/onboarding/timeline";
import { TutorSection } from "@/components/sections/onboarding/tutor";
import { OnbAudienceSection } from "@/components/sections/onboarding/audience";
import { CtaBlock } from "@/components/sections/cta-block";

const DESCRIPTION =
  "Programa de 10 semanas que leva o profissional recém-contratado até autonomia. Estrutura espiral, tutor humano, 5 competências.";

export const metadata: Metadata = {
  title: { absolute: "Vertho Onboarding — Para recém-contratados" },
  description: DESCRIPTION,
  alternates: { canonical: "/produto/onboarding" },
  openGraph: {
    title: "Vertho Onboarding — Para recém-contratados",
    description: DESCRIPTION,
    url: "https://vertho.ai/produto/onboarding",
    siteName: "Vertho.ai",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertho Onboarding — Para recém-contratados",
    description: DESCRIPTION,
  },
};

export default function OnboardingPage() {
  return (
    <>
      <OnboardingHero />
      <SectionDivider />
      <RevealOnScroll>
        <DorSection />
      </RevealOnScroll>
      <SectionDivider />
      <RevealOnScroll>
        <TimelineSection />
      </RevealOnScroll>
      <SectionDivider />
      <RevealOnScroll>
        <TutorSection />
      </RevealOnScroll>
      <SectionDivider />
      <RevealOnScroll>
        <OnbAudienceSection />
      </RevealOnScroll>
      <SectionDivider />
      <RevealOnScroll>
        <CtaBlock
          id="onb-cta"
          title="Quer rodar um piloto no próximo grupo de novos contratados?"
          subtitle="Conversa de 20 minutos com um dos sócios. Estamos abrindo até três pilotos no semestre."
          primaryLabel="Agendar conversa"
          whatsappMessage="Olá! Vim pela página do Vertho Onboarding e quero conversar sobre um piloto."
        />
      </RevealOnScroll>
    </>
  );
}
