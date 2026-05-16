/* ───────────────────────────────────────────────────────────────────────────
 * /produto · Hero — copy à esquerda + painel do colaborador (DashboardMock).
 * Fiel a produto-sections.jsx (ProdutoHero). H1 maior que o da Home.
 * ─────────────────────────────────────────────────────────────────────────── */
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { DashboardMock } from "@/components/brand/product-mocks";

export function ProdutoHero() {
  return (
    <section
      id="produto-hero"
      className="relative flex min-h-[88vh] items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(800px 500px at 70% 15%, rgba(52,197,204,0.08), transparent 60%), radial-gradient(600px 400px at 25% 75%, rgba(59,10,109,0.12), transparent 60%)",
        }}
      />
      <Container className="relative z-[1] flex flex-col items-center gap-14 pb-20 pt-[120px] md:flex-row">
        <div className="flex-1">
          <Eyebrow>Produto principal</Eyebrow>
          <h1 className="mb-3 font-display text-[clamp(48px,6vw,80px)] font-normal leading-none tracking-[-0.03em] text-white">
            Mentor IA
          </h1>
          <p className="mb-5 max-w-[500px] font-display text-[clamp(22px,2.5vw,30px)] font-normal leading-[1.25] tracking-[-0.01em] text-ink-dim">
            A plataforma que conhece cada profissional para desenvolvê-lo com
            profundidade.
          </p>
          <p className="mb-8 max-w-[480px] text-[16px] leading-[1.7] text-ink-faint">
            Diagnóstico, plano individual e trilha guiada de 14 semanas. Tudo em
            um só lugar, personalizado por empresa.
          </p>
          <Button href="/contato" variant="primary" withArrow>
            Agendar demonstração
          </Button>
        </div>
        <div className="relative">
          <DashboardMock />
        </div>
      </Container>
    </section>
  );
}
