import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// nodejs runtime required for nodemailer (SMTP needs net module)
export const runtime = "nodejs";

type Body = {
  name?: string;
  community?: string;
  contact?: string;
  about?: string;
};

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function fmtTelegram(b: Body) {
  const lines = [
    "<b>📝 Новая заявка на партнёрство</b>",
    "",
    `<b>Имя:</b> ${esc(b.name || "—")}`,
    `<b>Сообщество:</b> ${esc(b.community || "—")}`,
    `<b>Контакт:</b> ${esc(b.contact || "—")}`,
  ];
  if (b.about) lines.push("", `<b>О сообществе:</b>`, esc(b.about));
  return lines.join("\n");
}

function fmtEmailText(b: Body) {
  return [
    "Новая заявка на партнёрство",
    "",
    `Имя: ${b.name || "—"}`,
    `Сообщество: ${b.community || "—"}`,
    `Контакт: ${b.contact || "—"}`,
    "",
    `О сообществе: ${b.about || "—"}`,
  ].join("\n");
}

async function sendTelegram(b: Body) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return { ok: false, skipped: true };

  // Hard-cap so a hung Telegram API doesn't keep the function alive for
  // the full 5-minute Node default (and burn Vercel function quota).
  const ctrl = new AbortController();
  const timeout = setTimeout(() => ctrl.abort(), 8000);
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: fmtTelegram(b),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
      signal: ctrl.signal,
    });
    return { ok: res.ok, skipped: false };
  } finally {
    clearTimeout(timeout);
  }
}

async function sendEmail(b: Body) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.SMTP_TO;
  if (!host || !user || !pass || !to) return { ok: false, skipped: true };

  const port = Number(process.env.SMTP_PORT || 465);
  const secure = port === 465;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: process.env.SMTP_FROM || user,
    to,
    subject: `Атом — заявка от ${b.name || "—"} (${b.community || "—"})`,
    text: fmtEmailText(b),
  });
  return { ok: true, skipped: false };
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.name || !body.community || !body.contact) {
    return NextResponse.json(
      { error: "Заполните имя, сообщество и контакт" },
      { status: 400 }
    );
  }

  // Send to both channels in parallel; individual failures don't fail the whole request
  const [tg, mail] = await Promise.allSettled([sendTelegram(body), sendEmail(body)]);

  const channels = {
    telegram: tg.status === "fulfilled" ? tg.value : { ok: false, error: String(tg.reason) },
    email: mail.status === "fulfilled" ? mail.value : { ok: false, error: String(mail.reason) },
  };

  const anyOk =
    (tg.status === "fulfilled" && tg.value.ok) ||
    (mail.status === "fulfilled" && mail.value.ok);
  const anyConfigured =
    (tg.status === "fulfilled" && !tg.value.skipped) ||
    (mail.status === "fulfilled" && !mail.value.skipped);

  if (!anyConfigured) {
    console.warn("No channels configured — dropping submission");
    return NextResponse.json({ ok: true, note: "dev" });
  }

  if (!anyOk) {
    console.error("All channels failed:", channels);
    return NextResponse.json(
      { error: "Не удалось отправить. Попробуйте позже." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
