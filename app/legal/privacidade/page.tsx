/* /legal/privacidade — versão inicial (em revisão jurídica). Conteúdo
 * fornecido pelo cliente. Layout simples via <LegalDoc>. */
import type { Metadata } from "next";
import { LegalDoc, type LegalBlock } from "@/components/sections/legal-doc";

const DESCRIPTION =
  "Como a Vertho.ai trata os dados pessoais coletados no site (LGPD). Versão inicial, em revisão jurídica.";

export const metadata: Metadata = {
  title: { absolute: "Política de Privacidade — Vertho.ai" },
  description: DESCRIPTION,
  alternates: { canonical: "/legal/privacidade" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Política de Privacidade — Vertho.ai",
    description: DESCRIPTION,
    url: "https://vertho.ai/legal/privacidade",
    siteName: "Vertho.ai",
    locale: "pt_BR",
    type: "article",
  },
};

const INTRO =
  "Esta página descreve, de forma resumida, como a Vertho.ai trata os dados pessoais coletados no site institucional vertho.ai. Uma versão completa, revisada juridicamente, será publicada nas próximas semanas.";

const BLOCKS: LegalBlock[] = [
  { h: "Controlador dos dados", p: ["Vertho.ai · contato@vertho.ai"] },
  {
    h: "Quais dados coletamos",
    p: [
      "Coletamos apenas os dados que você nos fornece voluntariamente via formulário de contato: nome, e-mail corporativo, telefone (opcional), tipo e tamanho da organização, origem do contato e mensagem.",
    ],
  },
  {
    h: "Para que usamos",
    p: [
      "Os dados são usados exclusivamente para responder seu contato comercial, agendar conversas de demonstração e enviar materiais relacionados ao seu interesse. Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing.",
    ],
  },
  {
    h: "Base legal",
    p: [
      "Tratamos seus dados com base no consentimento (Art. 7º, I da LGPD) e no legítimo interesse em responder solicitações comerciais (Art. 7º, IX).",
    ],
  },
  {
    h: "Por quanto tempo guardamos",
    p: [
      "Mantemos os dados pelo tempo necessário para responder seu contato e, se houver evolução comercial, durante a vigência da relação. Após esse período, os dados são eliminados ou anonimizados.",
    ],
  },
  {
    h: "Seus direitos",
    p: [
      "Você pode solicitar a qualquer momento o acesso, correção, anonimização ou exclusão dos seus dados, conforme os Arts. 17 e 18 da LGPD. Para isso, envie e-mail para contato@vertho.ai.",
    ],
  },
  {
    h: "Cookies",
    p: [
      "Este site não utiliza cookies de rastreamento de terceiros. Cookies técnicos podem ser usados para funcionamento básico da navegação.",
    ],
  },
  {
    h: "Encarregado (DPO)",
    p: [
      "Em definição. Para questões sobre seus dados, escreva para contato@vertho.ai.",
    ],
  },
];

export default function PrivacidadePage() {
  return (
    <LegalDoc
      eyebrow="Versão inicial — em revisão jurídica"
      title="Política de Privacidade"
      updated="16 de maio de 2026"
      intro={INTRO}
      blocks={BLOCKS}
    />
  );
}
