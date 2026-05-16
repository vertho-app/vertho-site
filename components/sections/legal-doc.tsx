/* ───────────────────────────────────────────────────────────────────────────
 * <LegalDoc> — layout de documento legal (coluna estreita, tema escuro).
 * Banner de MINUTA é obrigatório: o texto definitivo depende de revisão
 * jurídica (LGPD). NÃO é documento final / não é aconselhamento jurídico.
 * ─────────────────────────────────────────────────────────────────────────── */
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export type LegalBlock = { h: string; p: string[] };

export function LegalDoc({
  eyebrow,
  title,
  updated,
  blocks,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  blocks: LegalBlock[];
}) {
  return (
    <Section width="narrow" className="pt-[140px]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Heading variant="section" className="mb-3">
        {title}
      </Heading>
      <Text size="small" tone="faint" className="mb-6">
        Última atualização: {updated}
      </Text>

      <div
        role="note"
        className="mb-10 rounded-lg border border-[rgba(225,170,239,0.3)] bg-[rgba(158,78,221,0.06)] p-5"
      >
        <p className="text-[13.5px] leading-[1.7] text-ink-dim">
          <strong className="text-lilac">Minuta provisória.</strong> Este texto
          é um rascunho funcional e está{" "}
          <strong className="text-white/80">em revisão jurídica (LGPD)</strong>.
          Não constitui o documento definitivo nem aconselhamento jurídico. A
          versão final, revisada por escritório especializado, substituirá esta
          página. Dúvidas:{" "}
          <a
            href="mailto:contato@vertho.ai"
            className="text-cyan no-underline hover:text-cyan-soft"
          >
            contato@vertho.ai
          </a>
          .
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {blocks.map((b, i) => (
          <div key={i}>
            <h2 className="mb-3 font-display text-[22px] font-normal text-cyan-soft">
              {i + 1}. {b.h}
            </h2>
            <div className="flex flex-col gap-3">
              {b.p.map((para, j) => (
                <Text key={j} size="body" className="leading-[1.75]">
                  {para}
                </Text>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
