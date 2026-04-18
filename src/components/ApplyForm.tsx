"use client";

import { FormEvent, useState } from "react";

export default function ApplyForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    // Replace with real endpoint later
    await new Promise((r) => setTimeout(r, 600));
    console.log("Application submitted:", data);
    setSubmitting(false);
    setDone(true);
  }

  return (
    <section
      id="apply"
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(60% 70% at 50% 30%, rgba(10,50,70,0.6) 0%, rgba(0,0,0,0) 70%), #000",
      }}
    >
      <div className="mx-auto max-w-[900px] px-4 lg:px-8 py-20 lg:py-28 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-[72px] leading-[1.05] uppercase tracking-tight">
          Подайте заявку
          <br />
          на отбор
        </h2>
        <p className="mt-4 text-white/70 text-lg">
          Расскажите о сообществе
          <br />и мы ответим за 24 часа
        </p>

        {done ? (
          <div className="mt-12 rounded-2xl border border-atom/40 p-8">
            <p className="font-display text-2xl">Спасибо!</p>
            <p className="mt-2 text-white/70">
              Мы получили вашу заявку. Ответим в течение 24 часов.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-4 max-w-[460px] mx-auto"
          >
            <Field name="name" placeholder="Имя" required />
            <Field
              name="community"
              placeholder="Сообщество, канал или клуб"
              required
            />
            <Field name="contact" placeholder="Telegram или email" required />
            <Field
              name="about"
              placeholder="Расскажите о вашей аудитории и идее"
              as="textarea"
            />

            <button
              type="submit"
              disabled={submitting}
              className="btn-gradient h-14 px-10 rounded-2xl text-white font-medium mt-2 hover:brightness-125 transition disabled:opacity-60"
            >
              {submitting ? "Отправляем…" : "Оставить заявку"}
            </button>
            <p className="mt-1 text-xs text-white/50">Без спама, без рассылок</p>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  name,
  placeholder,
  required,
  as,
}: {
  name: string;
  placeholder: string;
  required?: boolean;
  as?: "textarea";
}) {
  const className =
    "w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-left text-white placeholder:text-white/40 focus:border-atom/60 transition";

  if (as === "textarea") {
    return (
      <textarea
        name={name}
        placeholder={placeholder}
        rows={4}
        className={className + " resize-y min-h-[120px]"}
      />
    );
  }

  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      required={required}
      className={className}
    />
  );
}
