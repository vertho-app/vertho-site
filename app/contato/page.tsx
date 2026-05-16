/* /contato — formulário (Server Action) + alternativas sempre visíveis
 * (WhatsApp/e-mail) para nenhum lead se perder. Copy: brief §4.8. */
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { ContactForm } from "@/components/forms/contact-form";

const DESCRIPTION =
  "Agende uma demonstração de 20 minutos ou fale direto com a equipe da Vertho.";

export const metadata: Metadata = {
  title: { absolute: "Contato — Vertho.ai" },
  description: DESCRIPTION,
  alternates: { canonical: "/contato" },
  openGraph: {
    title: "Contato — Vertho.ai",
    description: DESCRIPTION,
    url: "https://vertho.ai/contato",
    siteName: "Vertho.ai",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Contato — Vertho.ai", description: DESCRIPTION },
};

const WPP =
  "https://wa.me/5511911807809?text=" +
  encodeURIComponent("Olá! Vim pelo site da Vertho e quero saber mais.");

export default function ContatoPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-[140px]">
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(800px 500px at 75% 0%, rgba(52,197,204,0.08), transparent 60%), radial-gradient(600px 400px at 15% 90%, rgba(59,10,109,0.12), transparent 60%)",
        }}
      />
      <Container className="relative z-[1]">
        <Eyebrow>Contato</Eyebrow>
        <Heading variant="hero" className="max-w-[640px]">
          Vamos conversar sobre sua organização.
        </Heading>
        <Text size="lead" className="mt-5 max-w-[560px]">
          Preencha o formulário ou fale direto no WhatsApp. Um dos sócios
          responde — sem fila de SDR.
        </Text>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Card variant="base" className="p-8">
            <ContactForm />
          </Card>

          <div className="flex flex-col gap-5">
            <Card variant="accent-top" accent="cyan" className="flex flex-col">
              <h3 className="mb-2 font-display text-[22px] font-normal text-white">
                Prefere WhatsApp?
              </h3>
              <Text size="small" className="mb-5 text-[14px] leading-[1.65]">
                Atendimento direto para Educação e Empresas no mesmo número.
                Resposta rápida em horário comercial.
              </Text>
              <Button href={WPP} variant="primary" external withArrow>
                <WhatsAppIcon size={16} />
                Falar no WhatsApp
              </Button>
            </Card>

            <Card variant="base" className="flex flex-col">
              <h3 className="mb-2 font-display text-[22px] font-normal text-white">
                E-mail
              </h3>
              <Text size="small" className="mb-4 text-[14px] leading-[1.65]">
                Para propostas, imprensa ou parcerias.
              </Text>
              <a
                href="mailto:contato@vertho.ai"
                className="text-[15px] font-semibold text-cyan no-underline hover:text-cyan-soft"
              >
                contato@vertho.ai
              </a>
            </Card>

            <Card variant="base" className="flex flex-col">
              <h3 className="mb-2 font-display text-[18px] font-semibold text-white">
                Demonstração de 20 minutos
              </h3>
              <Text size="small" className="text-[13.5px] leading-[1.65]">
                Mostramos o Mentor IA rodando com diagnóstico, PDI e trilha — no
                contexto da sua organização.
              </Text>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
