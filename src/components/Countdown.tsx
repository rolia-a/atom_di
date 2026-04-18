"use client";

import { useEffect, useState } from "react";

// Target date — adjust as needed. For now: 47 days from build time.
const TARGET = new Date(Date.now() + 47 * 24 * 60 * 60 * 1000 + 7 * 60 * 60 * 1000 + 8 * 60 * 1000);

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

const events = [
  { num: "01", title: "Атом на Северном полюсе", img: "/figma/card-1-nord.png" },
  { num: "02", title: "Атом в зоопарке", img: "/figma/card-2-zoo.png" },
  { num: "03", title: "Атом на прогулке", img: "/figma/card-3-walk.png" },
  { num: "04", title: "Событие под ключ", img: "/figma/card-4-event.png" },
];

export default function Countdown() {
  const [time, setTime] = useState({ d: 47, h: 7, m: 8 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET.getTime() - Date.now());
      const d = Math.floor(diff / (24 * 60 * 60 * 1000));
      const h = Math.floor((diff / (60 * 60 * 1000)) % 24);
      const m = Math.floor((diff / (60 * 1000)) % 60);
      setTime({ d, h, m });
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="program"
      className="relative overflow-hidden border-t border-white/5"
      style={{
        background:
          "linear-gradient(180deg, #000 0%, #0b1e22 100%)",
      }}
    >
      {/* Soft teal glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[1036px] h-[307px] opacity-70"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, rgba(0,255,255,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1408px] px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-start">
          <div className="max-w-[656px]">
            <h2 className="font-display text-2xl md:text-3xl lg:text-[32px] font-medium leading-[1.2] text-white">
              12 партнёрских слотов на 2026 год. Шесть уже заняты.
            </h2>
            <p className="mt-2 text-white/85 leading-[1.3]">
              Оставь заявку и стань участником.
              <br />
              Заявки рассматриваются в порядке поступления.
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <TimeCell value={pad(time.d)} label="дней" />
            <TimeCell value={pad(time.h)} label="часов" />
            <TimeCell value={pad(time.m)} label="минут" />
          </div>
        </div>

        {/* Event cards row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {events.map((e) => (
            <article
              key={e.num}
              className="group relative aspect-[3/4] rounded-[32px] overflow-hidden bg-[#12272b] border border-white/5 hover:border-white/20 transition"
            >
              {/* Background image */}
              <img
                src={e.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              {/* Darken for text legibility */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.55)_100%)]" />
              <div className="relative z-10 p-5 flex flex-col h-full">
                <span className="text-[13px] tracking-[0.3em] uppercase text-white">
                  {e.num}
                </span>
                <h3 className="mt-3 text-xl md:text-2xl font-display font-medium leading-tight text-white">
                  {e.title}
                </h3>
                <span className="mt-auto text-sm text-white/80 leading-snug">
                  Блогер, платформа/СМИ
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimeCell({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center min-w-[90px]">
      <span className="font-display font-light text-[64px] md:text-[86px] leading-none tracking-tight">
        {value}
      </span>
      <span className="mt-1 text-sm text-white/85">{label}</span>
    </div>
  );
}
