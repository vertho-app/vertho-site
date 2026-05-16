/* ───────────────────────────────────────────────────────────────────────────
 * Home · "Quem move a Vertho". Cards vendem COMPLEMENTARIDADE, não currículo:
 * Nome → eyebrow papel → especialidade (destaque) → bio condensada →
 * linha de contribuição (separada, seta sutil, cor mais clara).
 * Fotos reais dos sócios mantidas (public/socios/*.avif). Selo Bett (passado).
 * Reusado também em /quem-somos.
 * ─────────────────────────────────────────────────────────────────────────── */
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowIcon } from "@/components/ui/icons";

const TEAM = [
  {
    name: "Samuel Protetti",
    role: "Cofundador",
    photo: "/socios/samuel.avif",
    accent: "var(--cyan)",
    specialty: "Educação pública e gestão escolar",
    bio: "29 anos formando educadores. MBA Executivo (FGV) e MBA em Gestão Escolar (USP). Atuou em projetos com UNESCO, Banco Mundial e GIZ.",
    contribution:
      "Traz profundidade pedagógica e conhecimento do chão da escola.",
  },
  {
    name: "Juliane Cavalcante",
    role: "Cofundadora",
    photo: "/socios/juliane.avif",
    accent: "var(--lilac)",
    specialty: "Comunicação e aprendizagem",
    bio: '25 anos formando profissionais. Professora universitária, consultora e palestrante. Mestre em Comunicação (USP). Criadora do projeto "Tela Consciente".',
    contribution: "Conecta conteúdo, linguagem e formação de adultos.",
  },
  {
    name: "Rodrigo Naves",
    role: "Cofundador",
    photo: "/socios/rodrigo.avif",
    accent: "var(--purple)",
    specialty: "Desenvolvimento de pessoas e tecnologia aplicada",
    bio: "20 anos de atuação. Liderou plataformas com mais de 23 mil usuários. Especialista em Liderança (FGV).",
    contribution: "Conecta metodologia, produto e escala comercial.",
  },
];

export function TeamSection() {
  return (
    <Section id="team">
      <Eyebrow>Quem move a Vertho</Eyebrow>
      <Heading variant="section">
        74 anos de experiência somada em desenvolvimento de pessoas.
      </Heading>

      <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
        {TEAM.map((t) => (
          <Card key={t.name} variant="hover" className="flex h-full flex-col">
            <div
              className="relative mb-5 h-[72px] w-[72px] overflow-hidden rounded-pill"
              style={{
                border: `2px solid color-mix(in srgb, ${t.accent} 32%, transparent)`,
              }}
            >
              <Image
                src={t.photo}
                alt={t.name}
                fill
                sizes="72px"
                className="object-cover"
              />
            </div>

            <h3 className="text-[20px] font-semibold leading-tight text-white">
              {t.name}
            </h3>
            <p
              className="mt-1.5 font-eyebrow text-[11px] font-bold uppercase tracking-[0.14em]"
              style={{ color: t.accent }}
            >
              {t.role}
            </p>

            <p
              className="mt-3 font-display text-[18px] italic leading-snug"
              style={{ color: t.accent }}
            >
              {t.specialty}
            </p>

            <Text size="small" className="mt-3 text-[14px] leading-[1.7]">
              {t.bio}
            </Text>

            <div className="mt-auto flex items-start gap-2 border-t border-card-border pt-4">
              <ArrowIcon
                size={13}
                className="mt-[3px] shrink-0"
                style={{ color: t.accent }}
              />
              <p className="text-[13px] leading-[1.6] text-ink-dim">
                {t.contribution}
              </p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Badge variant="dot" tone="cyan">
          Apresentada na Bett Brasil 2026
        </Badge>
      </div>
    </Section>
  );
}
