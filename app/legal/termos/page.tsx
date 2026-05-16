/* /legal/termos — MINUTA provisória (em revisão jurídica). */
import type { Metadata } from "next";
import { LegalDoc, type LegalBlock } from "@/components/sections/legal-doc";

const DESCRIPTION = "Termos de Uso da Vertho.ai — minuta em revisão jurídica.";

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

const BLOCKS: LegalBlock[] = [
  {
    h: "Aceitação",
    p: [
      "Ao acessar e usar este site institucional da Vertho.ai, você concorda com estes Termos. Se não concordar, não utilize o site.",
    ],
  },
  {
    h: "Objeto",
    p: [
      "Este site apresenta a plataforma Vertho (Mentor IA, Onboarding, Pulso) e permite contato comercial. O acesso ao produto em si é regido por contrato específico.",
    ],
  },
  {
    h: "Uso adequado",
    p: [
      "Você concorda em não utilizar o site para fins ilícitos, em não tentar comprometer sua segurança e em fornecer informações verídicas no formulário de contato.",
    ],
  },
  {
    h: "Propriedade intelectual",
    p: [
      "Marca, identidade visual, textos e componentes são de titularidade da Vertho.ai, salvo indicação em contrário. É vedada a reprodução sem autorização.",
    ],
  },
  {
    h: "Limitação de responsabilidade",
    p: [
      "O conteúdo é informativo e pode ser alterado sem aviso. A Vertho.ai não se responsabiliza por decisões tomadas exclusivamente com base no conteúdo institucional.",
      "Conteúdos sobre NR-1 são subsídios e não substituem avaliação técnica de riscos psicossociais por profissional habilitado.",
    ],
  },
  {
    h: "Privacidade",
    p: [
      "O tratamento de dados pessoais segue a Política de Privacidade, parte integrante destes Termos.",
    ],
  },
  {
    h: "Lei aplicável e foro",
    p: [
      "Estes Termos são regidos pela legislação brasileira. O foro competente será definido na versão final, revisada juridicamente.",
    ],
  },
];

export default function TermosPage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Termos de Uso"
      updated="16 de maio de 2026"
      blocks={BLOCKS}
    />
  );
}
