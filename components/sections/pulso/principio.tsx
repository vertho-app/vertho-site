/* /produto/pulso · Princípio (citação editorial). Fiel a PrincipioSection. */
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export function PrincipioSection() {
  return (
    <Section id="principio">
      <div className="mx-auto max-w-[900px] text-center">
        <Eyebrow align="center">Princípio de produto</Eyebrow>
        <Heading variant="quote" align="center" className="mx-auto max-w-[750px]">
          Identificado para personalizar.{" "}
          <span className="text-cyan">Agregado para gerir.</span>
        </Heading>
        <div className="mx-auto mb-7 mt-6 h-0.5 w-16 rounded-[2px] bg-[linear-gradient(90deg,var(--cyan),var(--lilac))]" />
        <Text size="lead" align="center" className="mx-auto mb-10 max-w-[640px] text-[16px] leading-[1.75]">
          A jornada individual de cada profissional segue identificada — porque
          PDI, trilha e mentor precisam ser personalizados. Mas a leitura
          organizacional é sempre agregada, com mínimo de 7 participantes por
          recorte. Sua organização recebe os padrões. Nenhuma resposta
          individual aparece para gestores ou RH.
        </Text>

        <div className="mx-auto grid max-w-[600px] grid-cols-[1fr_auto_1fr] items-center">
          <div className="px-4 py-6 text-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <p className="mb-1 text-[13px] font-semibold text-cyan-soft">
              Personalização
            </p>
            <p className="text-[11px] leading-[1.45] text-ink-faint">
              Cada pessoa recebe trilha, PDI e mentor únicos
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 px-4">
            <div className="h-10 w-px bg-[linear-gradient(180deg,transparent,var(--card-border-hover),transparent)]" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-faint)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <div className="h-10 w-px bg-[linear-gradient(180deg,transparent,var(--card-border-hover),transparent)]" />
          </div>
          <div className="px-4 py-6 text-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--lilac)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-3">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <p className="mb-1 text-[13px] font-semibold text-lilac">
              Inteligência agregada
            </p>
            <p className="text-[11px] leading-[1.45] text-ink-faint">
              Gestores veem padrões, nunca respostas individuais
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
