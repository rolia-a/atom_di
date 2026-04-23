"use client";

import { useEffect, useState } from "react";
import { GradientButton } from "@/components/ui/GradientButton";

// Fixed deadline so the countdown actually counts down across page loads
// (was Date.now() + delta, which reset to ~47d on every reload).
const TARGET = new Date("2026-06-07T07:08:00+03:00").getTime();

const pad = (n: number) => n.toString().padStart(2, "0");

function compute() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    d: Math.floor(diff / 86_400_000),
    h: Math.floor((diff / 3_600_000) % 24),
    m: Math.floor((diff / 60_000) % 60),
    s: Math.floor((diff / 1_000) % 60),
  };
}

export default function PartnersCountdown() {
  // Initial state is static to avoid SSR/CSR hydration mismatch — replaced
  // with the real value on mount, then ticks every second.
  const [t, setT] = useState({ d: 47, h: 7, m: 8, s: 0 });

  useEffect(() => {
    setT(compute());
    const id = setInterval(() => setT(compute()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Subtle blue glow behind the timer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 55% at 78% 50%, rgba(0,120,160,0.45) 0%, rgba(0,60,90,0.18) 45%, transparent 80%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
          <div className="max-w-[672px]">
            <h2 className="font-display text-2xl md:text-[32px] lg:text-[36px] leading-[1.15] font-medium text-white">
              12 партнёрских слотов на 2026&nbsp;год.
              <br />
              6&nbsp;уже заняты
            </h2>
            <p className="mt-4 text-base md:text-lg lg:text-[18px] text-white/85 leading-snug">
              Оставь заявку и стань участником.
              <br />
              Заявки рассматриваются в порядке поступления
            </p>
          </div>

          <div className="flex items-start gap-2 md:gap-4 text-white font-display">
            {[
              { v: pad(t.d), l: "дней" },
              { v: pad(t.h), l: "часов" },
              { v: pad(t.m), l: "минут" },
              { v: pad(t.s), l: "секунд" },
            ].map((c, i, arr) => (
              <div key={c.l} className="flex items-start gap-2 md:gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-6xl lg:text-[72px] leading-none font-medium tabular-nums">
                    {c.v}
                  </span>
                  <span className="mt-2 text-xs md:text-sm lg:text-[16px] text-white/75 font-body">
                    {c.l}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <span className="text-4xl md:text-6xl lg:text-[72px] leading-none text-white/60">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <GradientButton
          href="#apply"
          className="mt-10 h-12 md:h-[71px] px-6 md:px-10 rounded-2xl md:rounded-[20px] text-base md:text-[24px]"
        >
          Занять место
        </GradientButton>
      </div>
    </section>
  );
}
