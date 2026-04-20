"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function PartnersApply() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Ошибка отправки");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="apply" className="relative bg-black overflow-hidden">
      {/* Bigger car, positioned right, clipped by left gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/figma/product/top-atom.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right scale-[1.6] md:scale-[1.8] origin-right"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 35%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 py-12 md:py-16 lg:py-20 min-h-[700px] md:min-h-[821px] flex flex-col">
        <div className="max-w-[701px]">
          <h2 className="font-display text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em] text-white">
            Подайте заявку
            <br />
            на отбор
          </h2>
          <p className="mt-6 max-w-[615px] text-lg md:text-xl lg:text-2xl text-white/90 leading-[1.3]">
            Расскажите о сообществе
            <br />
            и мы ответим за 24 часа
          </p>
        </div>

        {done ? (
          <div className="mt-12 max-w-[444px] rounded-[32px] bg-white p-8 text-black">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="h-[72px] w-[72px] rounded-full bg-[#00b2b2]/15 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M8 16l5 5 11-11" stroke="#00b2b2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="font-display text-2xl font-medium">Заявка отправлена</p>
                <p className="mt-2 text-sm text-black/60">
                  Мы получили вашу заявку и ответим в течение 24 часов.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setDone(false)}
                className="w-full h-14 rounded-2xl bg-black text-white font-medium hover:brightness-110 transition"
              >
                Хорошо
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 md:mt-12 max-w-[444px] flex flex-col gap-3"
          >
            <Input name="name" placeholder="Имя" required />
            <Input name="community" placeholder="Сообщество, канал или клуб" required />
            <Input name="contact" placeholder="Telegram или email" required />
            <Input name="about" placeholder="Коротко о вашей аудитории" />

            <button
              type="submit"
              disabled={submitting}
              className="mt-4 h-[60px] md:h-[71px] rounded-2xl md:rounded-[20px] bg-black border-2 border-[#9747ff] text-white text-base md:text-[24px] font-light hover:shadow-[0_0_24px_rgba(151,71,255,0.5)] transition disabled:opacity-60"
            >
              {submitting ? "Отправляем…" : "Занять место"}
            </button>
            {error && (
              <p className="mt-1 text-sm text-red-400 pl-4">{error}</p>
            )}
            <p className="mt-1 text-xs text-white/50 pl-4">
              Без спама, без рассылок
            </p>
            <p className="mt-3 text-xs text-white/60 pl-4">
              Или заполните{" "}
              <a
                href="https://forms.yandex.ru/u/69e5ed6b068ff0764f001311"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00b2b2] underline hover:text-white transition"
              >
                форму на Яндексе
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

function Input({
  name,
  placeholder,
  required,
}: {
  name: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full h-[60px] rounded-2xl bg-white/10 border border-white/15 px-5 text-white placeholder:text-white/40 focus:border-[#00b2b2] outline-none transition"
    />
  );
}
