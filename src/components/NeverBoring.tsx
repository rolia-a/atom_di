"use client";

import { useState } from "react";

const tabs = [
  {
    id: "pole",
    label: "Северный полюс",
    title: "Первый в мире тест-драйв EV в Арктике",
    desc: "Компания объединила более 1600 экспертов из России, Китая, Европы и США. Благодаря их совместным усилиям был создан продукт, который открывает новую главу в российском автомобилестроении и демонстрирует, что будущее уже здесь.",
    link: "Первый электромобиль на Северном полюсе",
  },
  {
    id: "lemans",
    label: "Чемпион Ле-Мана",
    title: "Гоночная команда Атом на Ле-Мане",
    desc: "Наши инженеры поддерживают профессиональный гоночный коллектив, который показывает лучшие решения Атома в экстремальных условиях.",
    link: "Подробнее о гонках",
  },
  {
    id: "nur",
    label: "ИИ-инсталляции NUR",
    title: "Свет и звук, который живёт своей жизнью",
    desc: "Интерактивные ИИ-инсталляции NUR путешествуют по городам и превращают автомобиль в арт-объект и сцену.",
    link: "Как мы это сделали",
  },
  {
    id: "games",
    label: "Игры будущего",
    title: "Атом на Играх Будущего",
    desc: "Турниры, симуляторы и реальные заезды — формат, в котором классический спорт встречается с цифровой реальностью.",
    link: "Смотреть подборку",
  },
];

export default function NeverBoring() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section className="relative bg-black">
      <div className="mx-auto max-w-[1408px] px-4 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-end">
        {/* Left image area */}
        <div
          className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#0a1618]"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 60%, rgba(80,150,170,0.4) 0%, rgba(0,0,0,0) 70%), linear-gradient(180deg, #0b1820 0%, #050a0c 100%)",
          }}
        >
          <div className="absolute left-6 bottom-6 right-6">
            <h3 className="font-display text-3xl md:text-5xl leading-[1.05] uppercase">
              С Атом
              <br />
              никогда
              <br />
              не скучно
            </h3>
          </div>
        </div>

        {/* Right content */}
        <div>
          <p className="text-white/75">
            Каждый проект — событие, о котором пишут СМИ и говорят люди.
            <br />
            Вот что мы уже сделали
          </p>

          <div className="mt-16 flex flex-wrap gap-2 border-b border-white/10 pb-3 overflow-x-auto no-scrollbar">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`text-xs tracking-[0.3em] uppercase px-4 py-2 rounded-full border transition ${
                  active === t.id
                    ? "bg-white text-black border-white"
                    : "border-white/15 text-white/70 hover:text-white hover:border-white/40"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-6 max-w-xl">
            <h4 className="font-display text-2xl md:text-3xl font-medium leading-tight">
              {current.title}
            </h4>
            <p className="mt-4 text-white/75 leading-relaxed">{current.desc}</p>
            <a
              href="#"
              className="mt-6 inline-block text-[11px] tracking-[0.3em] uppercase text-atom hover:text-white transition"
              style={{ color: "#00ffff" }}
            >
              {current.link}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
