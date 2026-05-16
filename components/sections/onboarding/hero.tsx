/* /produto/onboarding · Hero — fiel a onboarding-sections.jsx (OnboardingHero). */
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { OnboardingWeekMock } from "@/components/brand/onboarding-mocks";

export function OnboardingHero() {
  return (
    <section
      id="onb-hero"
      className="relative flex min-h-[88vh] items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(800px 500px at 70% 15%, rgba(225,170,239,0.06), transparent 60%), radial-gradient(600px 400px at 25% 75%, rgba(52,197,204,0.08), transparent 60%)",
        }}
      />
      <Container className="relative z-[1] flex flex-col items-center gap-14 pb-20 pt-[120px] md:flex-row">
        <div className="flex-1">
          <Eyebrow>Caso de uso</Eyebrow>
          <h1 className="mb-3 font-display text-[clamp(42px,5.5vw,72px)] font-normal leading-[1.04] tracking-[-0.03em] text-white">
            Vertho Onboarding
          </h1>
          <p className="mb-5 max-w-[500px] font-display text-[clamp(20px,2.2vw,26px)] font-normal leading-[1.25] text-ink-dim">
            Para que profissional recém-contratado não vire estatística de
            turnover.
          </p>
          <p className="mb-8 max-w-[480px] text-[15px] leading-[1.7] text-ink-faint">
            Programa de 10 semanas que pega o profissional recém-contratado no
            dia zero e o leva até autonomia supervisionada — com diagnóstico,
            mentor de IA, trilha personalizada e tutor humano da própria
            empresa.
          </p>
          <Button href="/contato" variant="primary" withArrow>
            Conversar sobre piloto
          </Button>
        </div>
        <OnboardingWeekMock />
      </Container>
    </section>
  );
}
