"use client";

import Image from "next/image";
import { useState } from "react";

const tabs = [
  {
    id: "wheel",
    label: "Руль",
    icon: "/figma/product/wheel/icon-wheel.svg",
    image: "/figma/product/wheel/wheel.webp",
    title: (
      <>
        Руль-штурвал
        <br />
        с&nbsp;сенсорным дисплеем
      </>
    ),
    desc: "Новый комфортный и цифровой опыт взаимодействия с электромобилем обеспечивает руль штурвальной формы со встроенным экраном. Подобных решений ещё нет на массовом рынке.",
  },
  {
    id: "display",
    label: "Дисплей",
    icon: "/figma/product/wheel/icon-display.svg",
    image: "/figma/product/wheel/wheel.webp",
    title: (
      <>
        Экран
        <br />
        водителя
      </>
    ),
    desc: "Встроенный сенсорный дисплей на руле выводит всё важное перед глазами водителя — без отвлечения на центральную панель.",
  },
  {
    id: "voice",
    label: "Голосовой ассистент",
    icon: "/figma/product/wheel/icon-voice.svg",
    image: "/figma/product/wheel/wheel.webp",
    title: (
      <>
        Голосовой
        <br />
        ассистент
      </>
    ),
    desc: "Управляйте климатом, музыкой и навигацией голосом — ассистент понимает естественную речь и учится вашим привычкам.",
  },
  {
    id: "app",
    label: "Приложение",
    icon: "/figma/product/wheel/icon-app.svg",
    image: "/figma/product/wheel/wheel.webp",
    title: (
      <>
        Мобильное
        <br />
        приложение
      </>
    ),
    desc: "Прогрев салона, разблокировка дверей, контроль заряда и маршрутов — всё в пару тапов на смартфоне.",
  },
];

export default function ProductAdvantages() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <section className="relative bg-white w-full h-[600px] md:h-[800px] overflow-hidden">
      {/* Left text block — absolute so it centers vertically like in Figma */}
      <div className="absolute left-6 md:left-[155px] top-1/2 -translate-y-1/2 z-10 max-w-[442px] md:max-w-[557px]">
        <h2 className="font-display text-[28px] md:text-[40px] leading-none uppercase text-black">
          {active.title}
        </h2>
        <p className="mt-4 font-body text-[14px] md:text-[16px] leading-[1.3] text-[#303134] max-w-[442px]">
          {active.desc}
        </p>
      </div>

      {/* Right image */}
      <div className="absolute right-0 md:left-[742px] md:right-auto top-[35px] md:top-[35px] w-full md:w-[698px] h-[400px] md:h-[704px] pointer-events-none">
        <Image
          src={active.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 698px"
          className="object-contain"
          priority
        />
      </div>

      {/* Bottom center pill of tabs */}
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
                  isActive
                    ? "bg-[#ebeff2]"
                    : "opacity-30 hover:opacity-60"
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
