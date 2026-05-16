/* /produto/pulso · Hero. Fiel a pulso-sections.jsx (PulsoHero). */
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { PulsoDashMock } from "@/components/brand/pulso-mocks";

export function PulsoHero() {
  return (
    <section
      id="pulso-hero"
      className="relative flex min-h-[88vh] items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(800px 500px at 70% 15%, rgba(52,197,204,0.08), transparent 60%), radial-gradient(600px 400px at 25% 75%, rgba(225,170,239,0.06), transparent 60%)",
        }}
      />
      <Container className="relative z-[1] flex flex-col items-center gap-14 pb-20 pt-[120px] md:flex-row">
        <div className="flex-1">
          <Eyebrow>Módulo Mentor IA</Eyebrow>
          <h1 className="mb-3 font-display text-[clamp(42px,5.5vw,72px)] font-normal leading-[1.04] tracking-[-0.03em] text-white">
            Pulso de Desenvolvimento
          </h1>
          <p className="mb-5 max-w-[500px] font-display text-[clamp(20px,2.2vw,26px)] font-normal leading-[1.25] text-ink-dim">
            Menos questionários. Mais sinais reais de desenvolvimento.
          </p>
          <p className="mb-8 max-w-[480px] text-[15px] leading-[1.7] text-ink-faint">
            Não é pesquisa de clima organizacional. É uma camada de inteligência
            contínua sobre o ambiente que favorece — ou bloqueia — a evolução
            das pessoas.
          </p>
          <Button href="/contato" variant="primary" withArrow>
            Ver demonstração
          </Button>
        </div>
        <PulsoDashMock />
      </Container>
    </section>
  );
}
