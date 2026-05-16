/* ───────────────────────────────────────────────────────────────────────────
 * Home · CTA final. Tweak de hierarquia aplicado:
 *   primário  → "Agendar demonstração"  (Button variant="cta", glow)
 *   secundário→ "Falar no WhatsApp"     (Button variant="ghost": só texto+ícone)
 * WhatsApp único confirmado: 5511975404356 (com mensagem pré-preenchida).
 * ─────────────────────────────────────────────────────────────────────────── */
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/icons";

const WPP =
  "https://wa.me/5511975404356?text=" +
  encodeURIComponent("Olá! Vim pelo site da Vertho e quero saber mais.");

export function CtaFinal() {
  return (
    <Section id="cta-final" bare className="overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 400px at 50% 50%, rgba(52,197,204,0.07), transparent 60%)",
        }}
      />
      <Container width="narrow" className="relative z-[1] text-center">
        <Heading variant="section" align="center" className="mx-auto mb-4">
          Quer ver a Vertho funcionando para sua organização?
        </Heading>
        <Text size="lead" align="center" className="mx-auto mb-9 max-w-[520px]">
          Agende uma demonstração de 20 minutos com um dos sócios. Ou fale
          direto no WhatsApp.
        </Text>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Button href="/contato" variant="cta" withArrow>
            Agendar demonstração
          </Button>
          <Button href={WPP} variant="ghost" external>
            <WhatsAppIcon size={16} />
            Falar no WhatsApp
          </Button>
        </div>
      </Container>
    </Section>
  );
}
