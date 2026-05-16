/* ───────────────────────────────────────────────────────────────────────────
 * <Footer> — rodapé global. 3 colunas (marca + Produto + Empresa) e barra
 * legal embaixo. Renderizado uma vez no app/layout.tsx.
 * E-mail/links confirmados pelo cliente: contato@vertho.ai.
 * ─────────────────────────────────────────────────────────────────────────── */
import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/link";
import { LinkedInIcon, InstagramIcon } from "@/components/ui/icons";

const PRODUTO = [
  { href: "/produto", label: "Mentor IA" },
  { href: "/produto/onboarding", label: "Onboarding" },
  { href: "/produto/pulso", label: "Pulso" },
];

const EMPRESA = [
  { href: "/manifesto", label: "Manifesto" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/contato", label: "Contato" },
];

function ColTitle({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-eyebrow text-[10px] font-bold uppercase tracking-[0.16em] text-ink-faint">
      {children}
    </p>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-card-border pb-8 pt-14">
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <div className="mb-2 font-sans text-[20px] font-bold tracking-[-0.02em] text-white">
            vertho<span className="text-cyan">.ai</span>
          </div>
          <p className="mb-5 max-w-[220px] text-[13px] leading-[1.5] text-ink-faint">
            Inteligência de Pessoas. Com IA.
          </p>
          <div className="flex gap-3">
            <a
              href="https://br.linkedin.com/in/vertho-ai-a6a954372"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn da Vertho"
              className="text-ink-faint transition-colors duration-200 hover:text-white"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.instagram.com/vertho.ai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Vertho"
              className="text-ink-faint transition-colors duration-200 hover:text-white"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div>
          <ColTitle>Produto</ColTitle>
          <div className="flex flex-col gap-2.5">
            {PRODUTO.map((l) => (
              <TextLink key={l.href} href={l.href} className="text-[14px]">
                {l.label}
              </TextLink>
            ))}
          </div>
        </div>

        <div>
          <ColTitle>Empresa</ColTitle>
          <div className="flex flex-col gap-2.5">
            {EMPRESA.map((l) => (
              <TextLink key={l.href} href={l.href} className="text-[14px]">
                {l.label}
              </TextLink>
            ))}
          </div>
        </div>
      </Container>

      <Container className="mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-card-border pt-5">
        <span className="text-[12px] text-ink-faint">
          © 2026 Vertho.ai · contato@vertho.ai
        </span>
        <div className="flex gap-5">
          <TextLink href="/legal/privacidade" className="text-[12px]">
            Privacidade
          </TextLink>
          <TextLink href="/legal/termos" className="text-[12px]">
            Termos
          </TextLink>
        </div>
      </Container>
    </footer>
  );
}
