/* /legal/termos — versão inicial (em revisão jurídica). Conteúdo
 * fornecido pelo cliente. Layout simples via <LegalDoc>. */
import type { Metadata } from "next";
import { LegalDoc, type LegalBlock } from "@/components/sections/legal-doc";

const DESCRIPTION =
  "Termos para uso do site institucional vertho.ai. Versão inicial, em revisão jurídica.";

export const metadata: Metadata = {
  title: { absolute: "Termos de Uso — Vertho.ai" },
  description: DESCRIPTION,
  alternates: { canonical: "/legal/termos" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Termos de Uso — Vertho.ai",
    description: DESCRIPTION,
    url: "https://vertho.ai/legal/termos",
    siteName: "Vertho.ai",
    locale: "pt_BR",
    type: "article",
  },
};

const INTRO =
  "Este documento descreve os termos para uso do site institucional vertho.ai. Uma versão completa, revisada juridicamente, será publicada nas próximas semanas. Para os termos de uso da plataforma Mentor IA (app.vertho.ai), consulte o contrato comercial.";

const BLOCKS: LegalBlock[] = [
  {
    h: "Sobre a Vertho.ai",
    p: [
      "A Vertho.ai é uma plataforma brasileira de Inteligência de Pessoas com IA, focada em diagnóstico, desenvolvimento e acompanhamento de profissionais em escolas e empresas.",
    ],
  },
  {
    h: "Finalidade do site",
    p: [
      "Este site tem finalidade institucional e comercial: apresentar produtos, casos de uso e captar contato de organizações interessadas. Não oferece serviços operacionais via site.",
    ],
  },
  {
    h: "Propriedade intelectual",
    p: [
      "Todo o conteúdo deste site — textos, imagens, identidade visual, marca, código e qualquer outro material — é de propriedade da Vertho.ai ou licenciado a ela, e está protegido pela legislação brasileira de propriedade intelectual. Não é permitido reproduzir, redistribuir, modificar ou utilizar comercialmente o conteúdo sem autorização expressa.",
    ],
  },
  {
    h: "Links externos",
    p: [
      "Eventuais links para sites de terceiros são fornecidos apenas para conveniência. A Vertho.ai não se responsabiliza pelo conteúdo, políticas ou práticas desses sites.",
    ],
  },
  {
    h: "Modificações",
    p: [
      "Estes termos podem ser atualizados a qualquer momento. A data da última atualização aparece no topo desta página.",
    ],
  },
  {
    h: "Foro",
    p: ["Eventuais disputas serão dirimidas no foro da comarca de São Paulo/SP."],
  },
  {
    h: "Contato",
    p: ["Para dúvidas sobre estes termos: contato@vertho.ai."],
  },
];

export default function TermosPage() {
  return (
    <LegalDoc
      eyebrow="Versão inicial — em revisão jurídica"
      title="Termos de Uso"
      updated="16 de maio de 2026"
      intro={INTRO}
      blocks={BLOCKS}
    />
  );
}
