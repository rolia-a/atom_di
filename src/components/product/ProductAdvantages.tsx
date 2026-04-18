"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = [
  {
    id: "interfaces",
    label: "Интерфейсы управления",
    title: "Руль штурвальной формы со встроенным экраном",
    desc: "Новый комфортный и цифровой опыт управления автомобилем обеспечивает руль штурвальной формы со встроенным экраном.",
  },
  {
    id: "app",
    label: "Приложение",
    title: "Управление Атомом в мобильном приложении",
    desc: "Пользуйтесь умным и выгодным решением каждый день.",
  },
  {
    id: "safety",
    label: "Безопасность",
    title: "Забота о пассажире",
    desc: "Комплекс ассистентов вождения ADAS — помогает и защищает в любой ситуации.",
  },
  {
    id: "interior",
    label: "Интерьер",
    title: "Минимализм и распашные двери",
    desc: "Распашные двери без центральной стойки и максимум свободного пространства в салоне.",
  },
];

export default function ProductAdvantages() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section className="relative bg-black py-20 lg:py-28">
      <div className="mx-auto max-w-[1408px] px-4">
        <h2 className="font-display text-3xl md:text-4xl lg:text-[48px] uppercase tracking-tight">
          Основные преимущества атома
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-start">
          {/* Left: tabs + description */}
          <div>
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActive(t.id)}
                  className={`text-[11px] tracking-[0.3em] uppercase px-4 py-2 rounded-full border transition ${
                    active === t.id
                      ? "bg-white text-black border-white"
                      : "border-white/15 text-white/70 hover:text-white hover:border-white/40"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-medium leading-tight">
              {current.title}
            </h3>
            <p className="mt-4 text-white/70 leading-relaxed max-w-md">
              {current.desc}
            </p>
            {/* Button placeholder */}
            <button className="mt-8 text-[11px] tracking-[0.3em] uppercase text-[#00ffff] hover:text-white transition">
              Подробнее →
            </button>
          </div>

          {/* Right: steering wheel render */}
          <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-white">
            <Image
              src="/figma/product/steering-wheel.webp"
              alt={current.label}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
