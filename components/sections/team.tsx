/* ───────────────────────────────────────────────────────────────────────────
 * Home · Time. Fotos reais dos sócios (public/socios/*.avif) + selo Bett.
 * Fiel a sections.jsx (TeamSection). Copy dos sócios já validada.
 * ─────────────────────────────────────────────────────────────────────────── */
import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TEAM = [
  {
    name: "Samuel Protetti",
    role: "Cofundador",
    photo: "/socios/samuel.avif",
    accent: "var(--cyan)",
    desc: "Especialista em educação pública, 29 anos formando educadores. Atuou em projetos com UNESCO, Banco Mundial e GIZ. MBA Executivo (FGV) e MBA em Gestão Escolar (USP).",
  },
  {
    name: "Juliane Cavalcante",
    role: "Cofundadora",
    photo: "/socios/juliane.avif",
    accent: "var(--lilac)",
    desc: 'Professora universitária, consultora e palestrante. 25 anos formando profissionais. Mestre em Comunicação (USP). Criadora do projeto "Tela Consciente".',
  },
  {
    name: "Rodrigo Naves",
    role: "Cofundador",
    photo: "/socios/rodrigo.avif",
    accent: "var(--purple)",
    desc: "Empreendedor sênior em desenvolvimento de pessoas, 20 anos de atuação. Liderou plataformas com mais de 23 mil usuários. Especialista em Liderança (FGV).",
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
            <h3 className="mb-1 text-[20px] font-semibold text-white">
              {t.name}
            </h3>
            <p
              className="mb-3.5 font-eyebrow text-[11px] font-bold uppercase tracking-[0.12em]"
              style={{ color: t.accent }}
            >
              {t.role}
            </p>
            <Text size="small" className="text-[14px] leading-[1.7]">
              {t.desc}
            </Text>
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
