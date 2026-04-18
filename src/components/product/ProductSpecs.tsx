"use client";

import { useState } from "react";

const tabs = [
  { id: "all", label: "Все" },
  { id: "dimensions", label: "Габариты" },
  { id: "interior", label: "Интерьер" },
  { id: "charging", label: "Зарядка" },
];

const specs = [
  { label: "Габариты", value: "3995 × 1790 × 1643 мм" },
  { label: "Запас хода", value: "до 500 км" },
  { label: "Разгон до 100 км/ч", value: "8 сек" },
  { label: "Макс. скорость", value: "170 км/ч" },
  { label: "Макс. мощность", value: "150 кВт" },
  { label: "Клиренс", value: "170 мм" },
  { label: "Радиус разворота", value: "4.9 м (мин)" },
  { label: "Время зарядки", value: "30 мин (20-80%)" },
  { label: "Гарантия", value: "5 лет или 150 000 км" },
];

export default function ProductSpecs() {
  const [active, setActive] = useState(tabs[0].id);

  return (
    <section id="params" className="relative bg-black py-20 lg:py-24 border-t border-white/5">
      <div className="mx-auto max-w-[1408px] px-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="font-display text-3xl md:text-4xl lg:text-[48px] leading-[1.1] uppercase tracking-tight">
            Параметры
          </h2>

          <div className="flex flex-wrap gap-2">
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
        </div>

        <dl className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
          {specs.map((s) => (
            <div key={s.label} className="border-t border-white/10 pt-4">
              <dt className="text-sm text-white/60">{s.label}</dt>
              <dd className="mt-2 font-display text-xl md:text-2xl font-medium">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
