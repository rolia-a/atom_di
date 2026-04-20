"use client";

import { useEffect, useState } from "react";

const TARGET =
  Date.now() + 47 * 24 * 60 * 60 * 1000 + 7 * 60 * 60 * 1000 + 8 * 60 * 1000;

const pad = (n: number) => n.toString().padStart(2, "0");

export default function PartnersCountdown() {
  const [t, setT] = useState({ d: 47, h: 7, m: 8 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET - Date.now());
      setT({
        d: Math.floor(diff / 86_400_000),
        h: Math.floor((diff / 3_600_000) % 24),
        m: Math.floor((diff / 60_000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Bright gradient shifted toward the timer (right) */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[1200px] h-[700px] translate-x-[10%]"
        style={{
          background:
            "radial-gradient(55% 60% at 60% 50%, rgba(0,178,178,0.55) 0%, rgba(0,178,178,0.15) 45%, transparent 75%)",
          filter: "blur(30px)",
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

          <div className="flex items-start gap-3 md:gap-5 text-white font-display">
            {[
              { v: pad(t.d), l: "дней" },
              { v: pad(t.h), l: "часов" },
              { v: pad(t.m), l: "минут" },
            ].map((c, i, arr) => (
              <div key={c.l} className="flex items-start gap-3 md:gap-5">
                <div className="flex flex-col items-center">
                  <span className="text-5xl md:text-7xl lg:text-[86px] leading-none font-medium tabular-nums">
                    {c.v}
                  </span>
                  <span className="mt-2 text-xs md:text-sm lg:text-[18px] text-white/75 font-body">
                    {c.l}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <span className="text-5xl md:text-7xl lg:text-[86px] leading-none text-white/60">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <a
          href="#apply"
          className="mt-10 inline-flex items-center justify-center h-12 md:h-[71px] px-6 md:px-10 rounded-2xl md:rounded-[20px] bg-black border-2 border-[#9747ff] text-white text-base md:text-[24px] font-light hover:shadow-[0_0_24px_rgba(151,71,255,0.5)] transition"
        >
          Занять место
        </a>
      </div>
    </section>
  );
}
