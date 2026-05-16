/* ───────────────────────────────────────────────────────────────────────────
 * /design — página interna de QA do design system (Fase 0).
 * Não linkada na navegação, noindex e bloqueada no robots.txt.
 * Mostra TODOS os primitivos em TODAS as variantes sobre o tema escuro.
 * Route group (internal) → não afeta a URL (continua /design).
 * ─────────────────────────────────────────────────────────────────────────── */
import type { Metadata } from "next";
import {
  Container,
  Heading,
  Text,
  Eyebrow,
  Button,
  TextLink,
  Badge,
  Card,
  Input,
  FormField,
  SectionDivider,
  RevealOnScroll,
} from "@/components/ui";
import { MockupFrame } from "@/components/brand/mockup-frame";

export const metadata: Metadata = {
  title: "Design System (QA interno)",
  robots: { index: false, follow: false },
};

const SWATCHES: { name: string; varName: string }[] = [
  { name: "navy-deep", varName: "--navy-deep" },
  { name: "navy-dark", varName: "--navy-dark" },
  { name: "navy", varName: "--navy" },
  { name: "navy-card", varName: "--navy-card" },
  { name: "cyan", varName: "--cyan" },
  { name: "cyan-soft", varName: "--cyan-soft" },
  { name: "lilac", varName: "--lilac" },
  { name: "purple", varName: "--purple" },
  { name: "purple-deep", varName: "--purple-deep" },
  { name: "coral", varName: "--coral" },
];

const RADII = [
  { name: "sm · 10", cls: "rounded-sm" },
  { name: "md · 12", cls: "rounded-md" },
  { name: "cta · 14", cls: "rounded-cta" },
  { name: "lg · 20", cls: "rounded-lg" },
  { name: "xl · 24", cls: "rounded-xl" },
  { name: "pill", cls: "rounded-pill" },
];

function Block({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12">
      <Eyebrow>{title}</Eyebrow>
      {desc && (
        <Text size="body" className="mb-8 max-w-[640px]">
          {desc}
        </Text>
      )}
      <div className={desc ? "" : "mt-6"}>{children}</div>
    </section>
  );
}

export default function DesignPage() {
  return (
    <Container className="pb-24 pt-28">
      <Heading variant="display" className="mb-3">
        Vertho — Design System
      </Heading>
      <Text size="lead" className="mb-2 max-w-[640px]">
        QA da Fase 0. Cada bloco é um primitivo em todas as variantes que os 4
        mockups-âncora usam. Critério de aprovação: “isso parece a Vertho”.
      </Text>

      <SectionDivider />

      {/* ── Cores ── */}
      <Block title="Tokens · Cores" desc="Paleta oficial (idêntica ao Mentor IA). Tema é sempre escuro.">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {SWATCHES.map((s) => (
            <div key={s.name}>
              <div
                className="h-20 w-full rounded-lg border border-card-border"
                style={{ background: `var(${s.varName})` }}
              />
              <p className="mt-2 text-[12px] text-ink-dim">{s.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-6">
          <p className="text-ink">ink — texto forte</p>
          <p className="text-ink-dim">ink-dim — corpo</p>
          <p className="text-ink-faint">ink-faint — metadados</p>
        </div>
      </Block>

      <SectionDivider />

      {/* ── Raio & sombra ── */}
      <Block title="Tokens · Raio e sombra">
        <div className="flex flex-wrap gap-5">
          {RADII.map((r) => (
            <div key={r.name} className="text-center">
              <div
                className={`h-16 w-16 border border-card-border bg-card-bg ${r.cls}`}
              />
              <p className="mt-2 text-[12px] text-ink-dim">{r.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-8">
          <div className="text-center">
            <div className="h-16 w-28 rounded-lg bg-navy-card shadow-[var(--shadow-glass)]" />
            <p className="mt-2 text-[12px] text-ink-dim">shadow-glass</p>
          </div>
          <div className="text-center">
            <div className="h-16 w-28 rounded-lg bg-cyan shadow-[var(--shadow-cta)]" />
            <p className="mt-2 text-[12px] text-ink-dim">shadow-cta</p>
          </div>
        </div>
      </Block>

      <SectionDivider />

      {/* ── Tipografia ── */}
      <Block title="Tipografia · Heading">
        <div className="flex flex-col gap-6">
          <Heading variant="hero">Hero — Para desenvolver pessoas.</Heading>
          <Heading variant="display">Display — Atrair. Desenvolver. Reter.</Heading>
          <Heading variant="section">Section — Não é “tem IA”. É IA séria.</Heading>
          <Heading variant="quote">
            Quote — Identificado para personalizar.{" "}
            <span className="text-cyan">Agregado para gerir.</span>
          </Heading>
          <Heading variant="card">Card serif — Diagnóstico conversacional</Heading>
          <Heading variant="card-sans">Card sans — LGPD por design.</Heading>
        </div>
      </Block>

      <Block title="Tipografia · Text & Eyebrow">
        <div className="flex flex-col gap-3">
          <Text size="lead">Lead — subtítulo de seção, leitura confortável.</Text>
          <Text size="body">Body — corpo padrão de parágrafo e card.</Text>
          <Text size="small">Small — descrições densas e legendas.</Text>
          <Text size="tiny" tone="faint">Tiny faint — metadados, rodapé legal.</Text>
          <div className="mt-4 flex flex-wrap gap-6">
            <Eyebrow>Eyebrow cyan-soft</Eyebrow>
            <Eyebrow tone="cyan">Eyebrow cyan</Eyebrow>
            <Eyebrow tone="lilac">Eyebrow lilac</Eyebrow>
          </div>
        </div>
      </Block>

      <SectionDivider />

      {/* ── Botões ── */}
      <Block title="Button" desc="Hover é 100% CSS — passe o mouse para validar transições.">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="primary" withArrow>Primary</Button>
          <Button variant="cta" withArrow>CTA grande</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="nav">Nav</Button>
          <Button variant="nr1" withArrow>NR-1</Button>
        </div>
      </Block>

      {/* ── Links ── */}
      <Block title="TextLink">
        <div className="flex flex-wrap items-center gap-8">
          <TextLink href="#" variant="nav">Nav link</TextLink>
          <TextLink href="#" variant="default">Default link</TextLink>
          <TextLink href="#" variant="accent">Accent link</TextLink>
          <TextLink href="#" variant="arrow">Saber mais</TextLink>
        </div>
      </Block>

      <SectionDivider />

      {/* ── Badges ── */}
      <Block title="Badge">
        <div className="flex flex-wrap items-center gap-4">
          <Badge variant="soft" tone="cyan">Manter</Badge>
          <Badge variant="soft" tone="coral">Mexer</Badge>
          <Badge variant="soft" tone="lilac">Investigar</Badge>
          <Badge variant="soft" tone="cyan-soft">Executar</Badge>
          <Badge variant="dot">Presença confirmada na Bett Brasil 2026</Badge>
          <Badge variant="alert" tone="lilac">
            Fiscalização a partir de 26.05.2026
          </Badge>
        </div>
      </Block>

      <SectionDivider />

      {/* ── Cards ── */}
      <Block title="Card">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <Card variant="base">
            <Heading variant="card-sans" className="mb-2">Base</Heading>
            <Text size="small">Card padrão, sem interação.</Text>
          </Card>
          <Card variant="hover">
            <Heading variant="card-sans" className="mb-2">Hover</Heading>
            <Text size="small">Passe o mouse: eleva e clareia a borda.</Text>
          </Card>
          <Card variant="accent-top" accent="cyan">
            <Heading variant="card-sans" className="mb-2">Accent-top</Heading>
            <Text size="small">Barra superior colorida.</Text>
          </Card>
          <Card variant="accent-left" accent="coral">
            <Heading variant="card-sans" className="mb-2">Accent-left</Heading>
            <Text size="small">Barra lateral (entregáveis do Pulso).</Text>
          </Card>
          <Card variant="callout" className="md:col-span-2">
            <Badge variant="alert" tone="lilac" className="mb-4">
              Fiscalização a partir de 26.05.2026
            </Badge>
            <Heading variant="section" className="mb-3">
              Callout NR-1
            </Heading>
            <Text size="body" className="mb-6 max-w-[560px]">
              Caixa de destaque com borda 2px lilás/roxo e brilho radial.
            </Text>
            <Button variant="nr1" withArrow>Entenda como</Button>
          </Card>
        </div>
      </Block>

      <SectionDivider />

      {/* ── Form ── */}
      <Block title="FormField + Input" desc="Form real chega na Fase 4; o estilo já está fechado.">
        <div className="grid max-w-[560px] grid-cols-1 gap-5">
          <FormField label="Nome" htmlFor="d-nome" required>
            <Input id="d-nome" placeholder="Seu nome" />
          </FormField>
          <FormField label="Tipo de organização" htmlFor="d-org">
            <Input as="select" id="d-org" defaultValue="">
              <option value="" disabled>Selecione…</option>
              <option>Escola / Rede de ensino</option>
              <option>Empresa</option>
              <option>Secretaria municipal</option>
            </Input>
          </FormField>
          <FormField label="Mensagem" htmlFor="d-msg" hint="Opcional.">
            <Input as="textarea" id="d-msg" placeholder="Como podemos ajudar?" />
          </FormField>
          <FormField label="E-mail" htmlFor="d-email" error="E-mail inválido.">
            <Input id="d-email" defaultValue="errado@" invalid />
          </FormField>
        </div>
      </Block>

      <SectionDivider />

      {/* ── MockupFrame + Reveal ── */}
      <Block title="MockupFrame + RevealOnScroll" desc="Único elemento com sombra forte e tilt 3D. Bloco abaixo entra com fade ao rolar.">
        <RevealOnScroll>
          <MockupFrame title="Diagnóstico Conversacional" className="w-[380px] max-w-full">
            <div className="flex flex-col gap-3 p-5">
              <div className="max-w-[88%] rounded-[16px_16px_16px_4px] border border-[rgba(52,197,204,0.15)] bg-[rgba(52,197,204,0.08)] px-4 py-3">
                <Text size="small" tone="cyan-soft">
                  Me conta de uma decisão difícil que você conduziu em time.
                </Text>
              </div>
              <div className="ml-auto max-w-[88%] rounded-[16px_16px_4px_16px] border border-card-border bg-[rgba(255,255,255,0.05)] px-4 py-3">
                <Text size="small">Prazo apertado e duas propostas opostas…</Text>
              </div>
              <div className="flex items-center gap-1 px-4 py-2">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 rounded-pill bg-white/20"
                    style={{ animation: `pulse-dot 1.2s ease-in-out ${i * 0.2}s infinite` }}
                  />
                ))}
              </div>
            </div>
          </MockupFrame>
        </RevealOnScroll>
      </Block>
    </Container>
  );
}
