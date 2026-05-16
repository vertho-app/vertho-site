"use server";
/* ───────────────────────────────────────────────────────────────────────────
 * Server Action do /contato. Degrada com clareza:
 *  - honeypot preenchido → descarta silenciosamente (anti-bot).
 *  - Turnstile: verifica se TURNSTILE_SECRET_KEY existir; senão pula.
 *  - Supabase (schema "marketing", tabela "leads"): grava se env existir.
 *  - Resend: envia e-mail interno se env existir.
 *  - Se NADA estiver configurado, NÃO finge sucesso: retorna erro pedindo
 *    WhatsApp/e-mail (lead não é perdido em silêncio).
 * ─────────────────────────────────────────────────────────────────────────── */

export type ContactState = {
  ok: boolean;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function verifyTurnstile(token: string | null): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // não configurado → pula (dev)
  if (!token) return false;
  try {
    const r = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token }),
      },
    );
    const data = (await r.json()) as { success?: boolean };
    return Boolean(data.success);
  } catch {
    return false;
  }
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot
  if ((formData.get("website") as string)?.trim()) {
    return { ok: true, message: "Mensagem enviada. Em breve entramos em contato." };
  }

  const data = {
    nome: ((formData.get("nome") as string) || "").trim(),
    email: ((formData.get("email") as string) || "").trim(),
    telefone: ((formData.get("telefone") as string) || "").trim(),
    org_tipo: ((formData.get("org_tipo") as string) || "").trim(),
    org_tamanho: ((formData.get("org_tamanho") as string) || "").trim(),
    origem: ((formData.get("origem") as string) || "").trim(),
    mensagem: ((formData.get("mensagem") as string) || "").trim(),
  };

  if (!data.nome || data.nome.length < 2)
    return { ok: false, message: "Informe seu nome." };
  if (!EMAIL_RE.test(data.email))
    return { ok: false, message: "Informe um e-mail válido." };
  if (!data.org_tipo)
    return { ok: false, message: "Selecione o tipo de organização." };

  const okTurnstile = await verifyTurnstile(
    formData.get("cf-turnstile-response") as string | null,
  );
  if (!okTurnstile)
    return {
      ok: false,
      message: "Falha na verificação anti-spam. Tente novamente.",
    };

  let stored = false;
  let mailed = false;

  // Supabase
  const sbUrl = process.env.SUPABASE_URL;
  const sbKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (sbUrl && sbKey) {
    try {
      const { createClient } = await import("@supabase/supabase-js");
      const sb = createClient(sbUrl, sbKey, {
        db: { schema: "marketing" },
        auth: { persistSession: false },
      });
      const { error } = await sb.from("leads").insert({
        nome: data.nome,
        email: data.email,
        telefone: data.telefone || null,
        org_tipo: data.org_tipo,
        org_tamanho: data.org_tamanho || null,
        origem: data.origem || null,
        mensagem: data.mensagem || null,
        page_path: "/contato",
      });
      if (!error) stored = true;
    } catch {
      /* falha silenciosa → tratada abaixo */
    }
  }

  // Resend
  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM || "Site Vertho <contato@vertho.ai>";
  const to = (process.env.CONTACT_TO || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (resendKey && to.length) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(resendKey);
      const { error } = await resend.emails.send({
        from,
        to,
        replyTo: data.email,
        subject: `Novo lead — ${data.nome} (${data.org_tipo})`,
        text: [
          `Nome: ${data.nome}`,
          `E-mail: ${data.email}`,
          `Telefone: ${data.telefone || "—"}`,
          `Organização: ${data.org_tipo} · ${data.org_tamanho || "—"}`,
          `Como conheceu: ${data.origem || "—"}`,
          "",
          "Mensagem:",
          data.mensagem || "—",
        ].join("\n"),
      });
      if (!error) mailed = true;
    } catch {
      /* falha silenciosa → tratada abaixo */
    }
  }

  if (stored || mailed) {
    return {
      ok: true,
      message:
        "Mensagem enviada. Um dos sócios entra em contato em até 1 dia útil.",
    };
  }

  return {
    ok: false,
    message:
      "Não foi possível registrar agora. Fale no WhatsApp ou escreva para contato@vertho.ai — respondemos rápido.",
  };
}
