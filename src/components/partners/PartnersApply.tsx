"use client";

import { FormEvent, useState } from "react";
import { GradientButton } from "@/components/ui/GradientButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { URLS } from "@/content/site";

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
      {/*
        Top-down Atom render. Figma proportions, measured from the dev-mode
        node 483:188902:
          • image box (pre-rotate): 1789w × 1360h centered at (1087, 42) in a 1440×821 section
          • rotated -90° CCW
          • the image itself is cropped inside the box so only the middle
            horizontal slice shows after rotation — front & rear of the car
            extend above/below the section edges
        We reproduce those proportions as percentages of the live section so
        the composition scales with the actual rendered section height.
      */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          // Fade the top of the section into pure black so the rear of the car
          // dissolves out (Figma: only the front half "emerges" from darkness).
          maskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 30%, black 80%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.05) 30%, black 80%)",
        }}
      >
        <img
          src="/figma/product/top-atom.webp"
          alt=""
          aria-hidden
          draggable={false}
          className="absolute max-w-none select-none"
          style={{
            left: "72%",
            // Larger (2×) per Figma — car fills most of the right half.
            top: "50%",
            height: "200%",
            width: "auto",
            transform: "translate(-50%, -50%) rotate(-90deg)",
            transformOrigin: "center",
          }}
        />
      </div>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          // Mild horizontal fade for the form side — kept subtle so it doesn't
          // fight the vertical mask above.
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 25%, rgba(0,0,0,0) 55%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 lg:pl-[156px] py-10 md:py-10 lg:py-10 h-[600px] md:h-[821px] flex flex-col">
        <div className="max-w-[701px]">
          <SectionHeading className="text-[36px] md:text-[48px] lg:text-[56px] text-white">
            Подайте заявку
            <br />
            на&nbsp;отбор
          </SectionHeading>
          <p className="mt-5 max-w-[615px] text-lg md:text-xl lg:text-[24px] text-ink-soft leading-[32px]">
            Расскажите о сообществе
            <br />
            и мы ответим за 24 часа
          </p>
        </div>

        {done ? (
          <div className="mt-12 max-w-[444px] rounded-[32px] bg-white p-8 text-black">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="h-[72px] w-[72px] rounded-full bg-teal/15 flex items-center justify-center">
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
            className="mt-10 md:mt-[80px] max-w-[444px] flex flex-col gap-5"
          >
            <Input name="name" placeholder="Имя" required />
            <Input name="community" placeholder="Сообщество, канал или клуб" required />
            <Input name="contact" placeholder="Telegram или email" required />
            <Input name="about" placeholder="Расскажите о вашей аудитории и идее" />

            <p className="text-[13px] text-white/70 leading-snug">
              Нажимая кнопку «Подать заявку», я даю{" "}
              <a
                href={URLS.consent}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Согласие на обработку персональных данных
              </a>
              {" "}в соответствии с{" "}
              <a
                href={URLS.privacyPolicy}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                политикой конфиденциальности
              </a>
            </p>
            <GradientButton
              type="submit"
              disabled={submitting}
              className="mt-2 h-[60px] md:h-[71px] rounded-2xl md:rounded-[20px] text-base md:text-[24px] disabled:opacity-60"
            >
              {submitting ? "Отправляем…" : "Подать заявку"}
            </GradientButton>
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
