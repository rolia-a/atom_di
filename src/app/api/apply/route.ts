import { NextResponse } from "next/server";

export const runtime = "edge"; // Fast cold start on Vercel

type Body = {
  name?: string;
  community?: string;
  contact?: string;
  about?: string;
};

function esc(s: string) {
  // HTML-escape for Telegram parse_mode=HTML
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
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

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Basic validation
  if (!body.name || !body.community || !body.contact) {
    return NextResponse.json(
      { error: "Заполните имя, сообщество и контакт" },
      { status: 400 }
    );
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn("Telegram env vars missing — dropping submission");
    return NextResponse.json({ ok: true, note: "dev" });
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const tgRes = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: fmtTelegram(body),
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });

  if (!tgRes.ok) {
    const t = await tgRes.text().catch(() => "");
    console.error("Telegram send failed", tgRes.status, t);
    return NextResponse.json(
      { error: "Не удалось отправить. Попробуйте позже." },
      { status: 502 }
    );
  }

  // Optional: forward to Yandex Forms later via YANDEX_FORM_WEBHOOK
  const yf = process.env.YANDEX_FORM_WEBHOOK;
  if (yf) {
    fetch(yf, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).catch(() => {});
  }

  return NextResponse.json({ ok: true });
}
