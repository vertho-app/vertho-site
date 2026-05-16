/* /legal/privacidade — MINUTA provisória (em revisão jurídica LGPD).
 * Estrutura real; texto definitivo virá do advogado. */
import type { Metadata } from "next";
import { LegalDoc, type LegalBlock } from "@/components/sections/legal-doc";

const DESCRIPTION =
  "Política de Privacidade da Vertho.ai (LGPD) — minuta em revisão jurídica.";

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

const BLOCKS: LegalBlock[] = [
  {
    h: "Controlador dos dados",
    p: [
      "A Vertho.ai é a controladora dos dados pessoais coletados por este site institucional. Contato: contato@vertho.ai.",
      "A razão social e o CNPJ que constarão na versão final estão pendentes de confirmação interna.",
    ],
  },
  {
    h: "Dados que coletamos",
    p: [
      "Dados que você fornece no formulário de contato: nome, e-mail corporativo, telefone (opcional), tipo e tamanho da organização, como conheceu a Vertho e a mensagem enviada.",
      "Dados técnicos mínimos de navegação (analytics agregado), sem perfilamento individual para publicidade.",
    ],
  },
  {
    h: "Finalidade e base legal",
    p: [
      "Usamos os dados de contato exclusivamente para responder à sua solicitação e conduzir conversas comerciais — base legal: procedimentos preliminares relacionados a contrato e legítimo interesse (art. 7º da LGPD).",
      "Não vendemos nem cedemos seus dados a terceiros para fins de marketing.",
    ],
  },
  {
    h: "Compartilhamento e operadores",
    p: [
      "Utilizamos operadores para hospedagem, armazenamento do lead e envio de e-mail transacional, que tratam os dados sob nossas instruções e contrato.",
      "Transferências internacionais, quando ocorrerem, seguirão as salvaguardas exigidas pela LGPD.",
    ],
  },
  {
    h: "Direitos do titular",
    p: [
      "Você pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade e eliminação dos seus dados, bem como revogar consentimento, pelo e-mail contato@vertho.ai.",
    ],
  },
  {
    h: "Segurança e retenção",
    p: [
      "Adotamos medidas técnicas e organizacionais para proteger os dados e os mantemos apenas pelo período necessário às finalidades informadas ou exigências legais.",
    ],
  },
  {
    h: "Encarregado (DPO) e alterações",
    p: [
      "O encarregado de dados será indicado na versão final. Esta política poderá ser atualizada; a data de vigência será sempre informada no topo.",
    ],
  },
];

export default function PrivacidadePage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Política de Privacidade"
      updated="16 de maio de 2026"
      blocks={BLOCKS}
    />
  );
}
