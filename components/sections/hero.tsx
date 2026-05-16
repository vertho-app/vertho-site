/* ───────────────────────────────────────────────────────────────────────────
 * Home · Hero — copy à esquerda, mockup "Diagnóstico Conversacional" à direita.
 * Fiel a sections.jsx (HeroSection + HeroMockup). Hero NÃO entra em reveal.
 * ─────────────────────────────────────────────────────────────────────────── */
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { MockupFrame } from "@/components/brand/mockup-frame";

function HeroMockup() {
  return (
    <MockupFrame
      title="Diagnóstico Conversacional"
      className="w-full max-w-[380px] shrink-0"
    >
      {/* Conversa */}
      <div className="flex flex-col gap-3 p-5">
        <div className="max-w-[88%] rounded-[16px_16px_16px_4px] border border-[rgba(52,197,204,0.15)] bg-[rgba(52,197,204,0.08)] px-4 py-3">
          <p className="text-[12.5px] leading-[1.55] text-cyan-soft">
            Me conta de uma vez recente em que você precisou tomar uma decisão
            difícil em time. O que foi, e como você conduziu?
          </p>
        </div>
        <div className="ml-auto max-w-[88%] rounded-[16px_16px_4px_16px] border border-card-border bg-[rgba(255,255,255,0.05)] px-4 py-3">
          <p className="text-[12.5px] leading-[1.55] text-white/75">
            A gente tinha prazo apertado e duas propostas opostas. Reuni o time,
            cada um apresentou seu argumento, e decidi pela que tinha mais
            evidência.
          </p>
        </div>
        <div className="max-w-[88%] rounded-[16px_16px_16px_4px] border border-[rgba(52,197,204,0.15)] bg-[rgba(52,197,204,0.08)] px-4 py-3">
          <p className="text-[12.5px] leading-[1.55] text-cyan-soft">
            E quando a evidência não era tão clara assim — como você lidou com a
            incerteza dentro do time?
          </p>
        </div>
        <div className="flex items-center gap-1 px-4 py-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-pill bg-white/20"
              style={{ animation: `pulse-dot 1.2s ease-in-out ${i * 0.2}s infinite` }}
            />
          ))}
        </div>
      </div>
      {/* Progresso */}
      <div className="flex items-center justify-between border-t border-card-border px-5 py-3">
        <span className="text-[10px] font-semibold text-ink-faint">
          Turno 3 de 6
        </span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`h-[3px] w-5 rounded-[2px] ${
                i < 3 ? "bg-cyan" : "bg-white/[0.08]"
              }`}
            />
          ))}
        </div>
      </div>
    </MockupFrame>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(900px 600px at 75% 10%, rgba(52,197,204,0.09), transparent 60%), radial-gradient(700px 500px at 20% 80%, rgba(59,10,109,0.14), transparent 60%), radial-gradient(500px 400px at 50% 50%, rgba(158,78,221,0.05), transparent 50%)",
        }}
      />
      <div
        aria-hidden
        className="absolute right-[5%] top-[12%] z-0 hidden h-[420px] w-[420px] rounded-pill animate-float md:block"
        style={{
          border: "1px solid rgba(52,197,204,0.06)",
          background:
            "radial-gradient(circle, rgba(52,197,204,0.03), transparent 70%)",
        }}
      />
      <Container className="relative z-[1] flex flex-col items-center gap-14 pb-20 pt-[120px] md:flex-row">
        <div className="flex-1">
          <Eyebrow>Inteligência de Pessoas · Com IA</Eyebrow>
          <Heading variant="hero" className="mb-7 max-w-[580px]">
            Para desenvolver pessoas, primeiro é preciso conhecê-las.
          </Heading>
          <Text size="lead" className="mb-9 max-w-[520px] leading-[1.7]">
            A Vertho é uma plataforma de IA que ajuda escolas, redes de ensino e
            empresas a desenvolverem profissionais — do diagnóstico ao plano de
            ação, em uma só ferramenta.
          </Text>
          <div className="flex flex-wrap gap-3.5">
            <Button href="/produto" variant="primary" withArrow>
              Ver como funciona
            </Button>
            <Button href="/contato" variant="secondary">
              Falar com a gente
            </Button>
          </div>
        </div>
        <HeroMockup />
      </Container>
    </section>
  );
}
