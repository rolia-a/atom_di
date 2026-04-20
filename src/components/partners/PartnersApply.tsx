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
      {/* Top-down Atom render: anchored to right edge, bigger than viewport */}
      <div className="absolute inset-y-0 right-0 w-[70%] md:w-[65%] pointer-events-none">
        <Image
          src="/figma/product/top-atom.webp"
          alt=""
          fill
          sizes="70vw"
          className="object-contain object-right-top"
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 lg:pl-[156px] py-12 md:py-16 lg:py-20 min-h-[700px] md:min-h-[821px] flex flex-col">
        <div className="max-w-[701px]">
          <h2 className="font-display text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em] text-white">
            Подайте заявку на отбор
          </h2>
          <p className="mt-5 max-w-[615px] text-lg md:text-xl lg:text-[24px] text-[#b8c6d3] leading-[32px]">
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
            className="mt-12 md:mt-[102px] max-w-[444px] flex flex-col gap-5"
          >
            <Input name="name" placeholder="Имя" required />
            <Input name="community" placeholder="Сообщество, канал или клуб" required />
            <Input name="contact" placeholder="Telegram или email" required />
            <Input name="about" placeholder="Расскажите о вашей аудитории и идее" />

            <button
              type="submit"
              disabled={submitting}
              className="btn-grad mt-5 h-[60px] md:h-[71px] rounded-2xl md:rounded-[20px] text-base md:text-[24px] disabled:opacity-60"
            >
              {submitting ? "Отправляем…" : "Занять место"}
            </button>
            {error && (
              <p className="mt-2 text-sm text-red-400 text-center">{error}</p>
            )}
            <p className="mt-2 text-center text-[12px] text-white/35 font-display font-light">
              Без спама, без рассылок
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
      className="w-full h-[60px] rounded-[16px] bg-white/10 backdrop-blur-[10px] px-5 text-[16px] text-white placeholder:text-white/85 focus:bg-white/15 outline-none transition"
    />
  );
}
