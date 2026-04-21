"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = [
  {
    id: "doors",
    label: "Распашные двери",
    title: "Распашные двери",
    desc: "Одна из ключевых особенностей дизайна Атома — распашные двери без центральной стойки. Благодаря этому решению в салоне больше места, а садиться в машину и выходить из нее удобнее.",
  },
  {
    id: "interior",
    label: "Интерьер",
    title: "Минималистичный интерьер",
    desc: "Лаконичная архитектура салона: крупный дисплей на руле, продуманная эргономика и просторный второй ряд.",
  },
  {
    id: "minimalism",
    label: "Минимализм",
    title: "Минимализм во всём",
    desc: "Убраны лишние элементы: физических кнопок минимум, поверхности чистые, внимание водителя — только на дороге.",
  },
  {
    id: "passenger",
    label: "Забота о пассажире",
    title: "Забота о пассажире",
    desc: "Продуманные мелочи — от подогрева задних сидений до удобных USB-C и держателей — делают каждую поездку комфортнее.",
  },
];

// Same hero photo is cropped for thumbnails via object-position.
const THUMBS = [
  { id: "t1", pos: "50% 55%" },
  { id: "t2", pos: "30% 40%" },
  { id: "t3", pos: "70% 40%" },
] as const;

export default function ProductGarage() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeThumb, setActiveThumb] = useState(THUMBS[0].id);
  const current = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section className="relative w-full h-[700px] md:h-[800px] overflow-hidden bg-black">
      {/* Full-bleed hero photo */}
      <Image
        src="/figma/product/garage/main.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center z-0"
        priority={false}
      />
      <div
        aria-hidden
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Top-left: heading */}
      <h2 className="absolute z-20 top-8 md:top-16 left-6 md:left-10 font-display text-[32px] md:text-[40px] leading-none uppercase text-white">
        {current.title}
      </h2>

      {/* Middle-left: vertical tab nav */}
      <nav className="absolute z-20 left-6 md:left-10 top-[36%] flex flex-col gap-1.5 w-[200px]">
        {tabs.map((t) => {
          const isActive = t.id === activeTab;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              className={`flex items-center gap-2 h-4 font-body text-[13px] font-medium tracking-[0.05em] uppercase text-white text-left transition ${
                isActive ? "opacity-100" : "opacity-50 hover:opacity-80"
              }`}
            >
              {isActive && (
                <Image
                  src="/figma/product/garage/icon-door.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4 shrink-0"
                />
              )}
              <span>{t.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom-left: description */}
      <p className="absolute z-20 bottom-10 md:bottom-16 left-6 md:left-10 max-w-[505px] font-body text-[14px] md:text-[16px] leading-[1.3] text-white/90">
        {current.desc}
      </p>

      {/* Bottom-center: gallery thumbnails with chevrons */}
      <div className="absolute z-20 bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          type="button"
          aria-label="Предыдущее"
          className="w-5 h-5 flex items-center justify-center text-white/70 hover:text-white transition"
          onClick={() => {
            const idx = THUMBS.findIndex((t) => t.id === activeThumb);
            setActiveThumb(THUMBS[(idx - 1 + THUMBS.length) % THUMBS.length].id);
          }}
        >
          <Image src="/figma/product/garage/chevron.svg" alt="" width={20} height={20} className="w-5 h-5 rotate-180" />
        </button>

        <div className="flex items-center gap-[14px]">
          {THUMBS.map((t) => {
            const isActive = t.id === activeThumb;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveThumb(t.id)}
                className={`relative h-14 w-14 rounded-[10px] overflow-hidden transition ${
                  isActive
                    ? "ring-2 ring-[#00ffff] ring-offset-0"
                    : "opacity-60 hover:opacity-90"
                }`}
              >
                <Image
                  src="/figma/product/garage/main.webp"
                  alt=""
                  fill
                  sizes="56px"
                  className="object-cover"
                  style={{ objectPosition: t.pos }}
                />
              </button>
            );
          })}
        </div>

        <button
          type="button"
          aria-label="Следующее"
          className="w-5 h-5 flex items-center justify-center text-white/70 hover:text-white transition"
          onClick={() => {
            const idx = THUMBS.findIndex((t) => t.id === activeThumb);
            setActiveThumb(THUMBS[(idx + 1) % THUMBS.length].id);
          }}
        >
          <Image src="/figma/product/garage/chevron.svg" alt="" width={20} height={20} className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
