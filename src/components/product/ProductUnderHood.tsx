"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = [
  {
    id: "adas",
    label: "Ассистенты вождения",
    icon: "/figma/product/platform/icon-adas.svg",
    image: "/figma/product/platform/platform.webp",
    title: (
      <>
        Ассистенты
        <br />
        вождения
      </>
    ),
    desc: "Комплекс ADAS в базе — адаптивный круиз-контроль, удержание в полосе, распознавание знаков и экстренное торможение. Всё, чтобы водителю было безопаснее и спокойнее за рулём.",
  },
  {
    id: "atom-os",
    label: "Атом ОС",
    icon: "/figma/product/platform/icon-atomos.svg",
    image: "/figma/product/platform/platform.webp",
    title: (
      <>
        Атом
        <br />
        ОС
      </>
    ),
    desc: "Собственная операционная система автомобиля, развивающаяся вместе с ним. Обновления «по воздуху», быстрый отклик и бесшовная интеграция со смартфоном.",
  },
  {
    id: "safety",
    label: "Безопасность",
    icon: "/figma/product/platform/icon-safety.svg",
    image: "/figma/product/platform/platform.webp",
    title: (
      <>
        Активная и пассивная
        <br />
        безопасность
      </>
    ),
    desc: "Силовая структура кузова, подушки безопасности по периметру и преднапряжённые ремни. Всё соответствует стандартам безопасности и адаптировано к российским дорогам.",
  },
  {
    id: "platform",
    label: "Платформа",
    icon: "/figma/product/platform/icon-platform.svg",
    image: "/figma/product/platform/platform.webp",
    title: (
      <>
        Собственная
        <br />
        EV-платформа
      </>
    ),
    desc: "Первая российская платформа электромобиля — собственная разработка Атома. Соответствует стандартам безопасности и адаптирована к российскому климату.",
  },
];

export default function ProductUnderHood() {
  // Figma screenshot shows "Платформа" as the active/visible tab
  const [activeId, setActiveId] = useState(tabs[3].id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[3];

  return (
    <section className="relative bg-white w-full h-[600px] md:h-[800px] overflow-hidden">
      {/* Left text block — absolute center-left like in Figma */}
      <div className="absolute left-6 md:left-[155px] top-1/2 -translate-y-1/2 z-10 max-w-[442px] md:max-w-[557px]">
        <h2 className="font-display text-[28px] md:text-[40px] leading-none uppercase text-black">
          {active.title}
        </h2>
        <p className="mt-4 font-body text-[14px] md:text-[16px] leading-[1.3] text-[#92979b] max-w-[442px]">
          {active.desc}
        </p>
      </div>

      {/* Right image */}
      <div className="absolute right-0 md:left-[628px] md:right-auto top-[120px] md:top-[150px] w-full md:w-[793px] h-[360px] md:h-[501px] pointer-events-none">
        <Image
          src={active.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 793px"
          className="object-contain"
        />
      </div>

      {/* Bottom-centered tabs pill (same style as wheel block) */}
      <div className="absolute bottom-[39px] left-0 right-0 z-20 flex justify-center px-4">
        <div className="flex items-center gap-px h-[44px] p-px rounded-full bg-white/50 backdrop-blur-[10px] border border-[rgba(102,102,102,0.1)]">
          {tabs.map((t) => {
            const isActive = t.id === activeId;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveId(t.id)}
                className={`h-full flex items-center gap-2 px-4 rounded-full transition font-body uppercase text-[13px] font-medium tracking-[0.05em] text-black whitespace-nowrap ${
                  isActive ? "bg-gray-0" : "opacity-30 hover:opacity-60"
                }`}
              >
                <Image
                  src={t.icon}
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4 shrink-0"
                />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
