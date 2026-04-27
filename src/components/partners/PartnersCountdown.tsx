"use client";

import { useEffect, useState } from "react";
import { GradientButton } from "@/components/ui/GradientButton";
import { pluralizeRu } from "@/lib/i18n/pluralize";
import { APPLICATION_DEADLINE, SLOTS } from "@/content/site";

// Fixed deadline so the countdown actually counts down across page loads
// (was Date.now() + delta, which reset to ~47d on every reload).
const TARGET = new Date(APPLICATION_DEADLINE).getTime();

const pad = (n: number) => n.toString().padStart(2, "0");

const labelDays = (n: number) => pluralizeRu(n, ["день", "дня", "дней"]);
const labelHours = (n: number) => pluralizeRu(n, ["час", "часа", "часов"]);
const labelMinutes = (n: number) => pluralizeRu(n, ["минута", "минуты", "минут"]);

function compute() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    d: Math.floor(diff / 86_400_000),
    h: Math.floor((diff / 3_600_000) % 24),
    m: Math.floor((diff / 60_000) % 60),
  };
}

export default function PartnersCountdown() {
  // Initial state is static to avoid SSR/CSR hydration mismatch — replaced
  // with the real value on mount, then ticks every second.
  const [t, setT] = useState({ d: 100, h: 5, m: 0 });

  useEffect(() => {
    setT(compute());
    const id = setInterval(() => setT(compute()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Large muted-teal glow (ellipse 1574×643 in Figma, node 445:128439),
          anchored near the timer — softer/darker than pure cyan. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 160% 260% at 90% 100%, rgba(0,200,195,0.7) 0%, rgba(0,150,165,0.4) 30%, rgba(0,80,100,0.18) 60%, transparent 85%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
          <div className="max-w-[672px] text-center lg:text-left">
            <h2 className="font-display text-2xl md:text-[32px] lg:text-[36px] leading-[1.15] font-medium text-white">
              {`${SLOTS.total} партнёрских ${pluralizeRu(SLOTS.total, ["слот", "слота", "слотов"])} на 2026\u00A0год.`}
              <br />
              {`${SLOTS.taken}\u00A0уже ${pluralizeRu(SLOTS.taken, ["занят", "заняты", "заняты"])}`}
            </h2>
            <p className="mt-4 text-base md:text-lg lg:text-[18px] text-white/85 leading-snug">
              Оставь заявку и стань участником.
              <br />
              Заявки рассматриваются в порядке поступления.
            </p>
          </div>

          <div className="flex items-start gap-2 md:gap-4 text-white font-display justify-center lg:justify-start">
            {[
              { unit: "d", v: pad(t.d), l: labelDays(t.d) },
              { unit: "h", v: pad(t.h), l: labelHours(t.h) },
              { unit: "m", v: pad(t.m), l: labelMinutes(t.m) },
            ].map((c, i, arr) => (
              <div key={c.unit} className="flex items-start gap-2 md:gap-4">
                <div className="flex flex-col items-center">
                  <span className="font-display font-light text-5xl md:text-7xl lg:text-[86px] leading-[1.05] tracking-[-0.01em] tabular-nums">
                    {c.v}
                  </span>
                  <span className="mt-2 text-xs md:text-sm lg:text-[16px] text-white/75 font-body">
                    {c.l}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  // Two small rounded-square dots stacked vertically
                  // (per Figma 445:117185 — not the font's default ":").
                  <div
                    aria-hidden
                    className="flex flex-col justify-center gap-3 md:gap-4 lg:gap-[22px] h-[56px] md:h-[80px] lg:h-[90px]"
                  >
                    <span className="block w-[6px] h-[6px] md:w-2 md:h-2 lg:w-[10px] lg:h-[10px] rounded-[2px] bg-white/75" />
                    <span className="block w-[6px] h-[6px] md:w-2 md:h-2 lg:w-[10px] lg:h-[10px] rounded-[2px] bg-white/75" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <GradientButton
          href="#apply"
          className="mt-10 h-12 md:h-[71px] w-full md:w-auto px-6 md:px-10 rounded-2xl md:rounded-[20px] text-base md:text-[24px]"
        >
          Подать заявку
        </GradientButton>
      </div>
    </section>
  );
}
