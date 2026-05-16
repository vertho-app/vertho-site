/* ───────────────────────────────────────────────────────────────────────────
 * <LegalDoc> — documento legal: coluna estreita, tipografia limpa, tema
 * escuro, mesma NavBar/Footer globais. Eyebrow sinaliza "versão inicial —
 * em revisão jurídica"; o intro reforça. Sem numeração, sem caixa-aviso.
 * E-mails são linkados (mailto) automaticamente.
 * ─────────────────────────────────────────────────────────────────────────── */
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export type LegalBlock = { h: string; p: string[] };

const EMAIL = "contato@vertho.ai";

/** Quebra o parágrafo em torno de contato@vertho.ai, transformando em mailto. */
function renderParagraph(text: string) {
  const parts = text.split(EMAIL);
  if (parts.length === 1) return text;
  const out: React.ReactNode[] = [];
  parts.forEach((seg, i) => {
    out.push(seg);
    if (i < parts.length - 1) {
      out.push(
        <a
          key={i}
          href={`mailto:${EMAIL}`}
          className="text-cyan no-underline hover:text-cyan-soft"
        >
          {EMAIL}
        </a>,
      );
    }
  });
  return out;
}

export function LegalDoc({
  eyebrow,
  title,
  updated,
  intro,
  blocks,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  blocks: LegalBlock[];
}) {
  return (
    <Section width="narrow" className="pt-[140px]">
      <Eyebrow tone="lilac">{eyebrow}</Eyebrow>
      <Heading variant="section" className="mb-3">
        {title}
      </Heading>
      <Text size="small" tone="faint" className="mb-8">
        Última atualização: {updated}
      </Text>

      <Text size="lead" className="mb-12 leading-[1.8]">
        {renderParagraph(intro)}
      </Text>

      <div className="flex flex-col gap-9">
        {blocks.map((b, i) => (
          <div key={i}>
            <h2 className="mb-3 font-display text-[22px] font-normal text-cyan-soft">
              {b.h}
            </h2>
            <div className="flex flex-col gap-3">
              {b.p.map((para, j) => (
                <Text key={j} size="body" className="leading-[1.75]">
                  {renderParagraph(para)}
                </Text>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
