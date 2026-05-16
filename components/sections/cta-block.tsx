/* ───────────────────────────────────────────────────────────────────────────
 * <CtaBlock> — CTA final reutilizável (mesma hierarquia da Home/Produto):
 * primário "Agendar…" (variant cta) + "Falar no WhatsApp" (ghost).
 * Usado nas páginas sem CTA próprio do handoff (onboarding, pulso,
 * manifesto, quem-somos, etc.). WhatsApp confirmado: 5511975404356.
 * ─────────────────────────────────────────────────────────────────────────── */
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/icons";

export function CtaBlock({
  id = "cta-final",
  title,
  subtitle,
  primaryLabel = "Agendar demonstração",
  primaryHref = "/contato",
  whatsappMessage = "Olá! Vim pelo site da Vertho e quero saber mais.",
}: {
  id?: string;
  title: string;
  subtitle: string;
  primaryLabel?: string;
  primaryHref?: string;
  whatsappMessage?: string;
}) {
  const wpp =
    "https://wa.me/5511911807809?text=" + encodeURIComponent(whatsappMessage);
  return (
    <Section id={id} bare className="overflow-hidden">
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
          {title}
        </Heading>
        <Text size="lead" align="center" className="mx-auto mb-9 max-w-[520px]">
          {subtitle}
        </Text>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Button href={primaryHref} variant="cta" withArrow>
            {primaryLabel}
          </Button>
          <Button href={wpp} variant="ghost" external>
            <WhatsAppIcon size={16} />
            Falar no WhatsApp
          </Button>
        </div>
      </Container>
    </Section>
  );
}
