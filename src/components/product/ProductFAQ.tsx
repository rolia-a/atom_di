"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Зачем бронировать Атом",
    a: "Бронирование позволяет вам получить Атом одним из первых по фиксированной цене, не дожидаясь старта продаж.",
  },
  {
    q: "Как забронировать Атом",
    a: "Заполните форму на сайте и внесите стоимость бронирования — 500 000 ₽. Сумма будет зачтена в финальную стоимость.",
  },
  {
    q: "Когда я получу свой Атом",
    a: "Срок поставки автомобиля — с мая по сентябрь 2026 года. Ближайший доступный срок будет определён в зависимости от вашего места в очереди.",
  },
  {
    q: "Что означает фиксированная стоимость",
    a: "Цена Атома, зафиксированная в момент бронирования, не изменится до момента передачи автомобиля.",
  },
  {
    q: "Можно ли будет купить Атом в кредит",
    a: "Да. Мы сотрудничаем с банками-партнёрами — детали сообщим ближе к старту продаж.",
  },
  {
    q: "Смогу ли я получить субсидию",
    a: "Да, Атом подпадает под программу господдержки электромобилей. Условия уточняйте перед оформлением.",
  },
  {
    q: "Как получить субсидию на покупку электромобиля в 2026 году",
    a: "Субсидия оформляется в банке-партнёре на этапе покупки — поможем с документами.",
  },
  {
    q: "Будет ли учтён мой ранее оформленный предзаказ",
    a: "Да. Мы свяжемся со всеми, кто оформлял предзаказ, и предложим условия перехода в бронирование.",
  },
  {
    q: "Чем отличается специальная серия Атом",
    a: "Специальная серия — это автомобили первых партий с расширенной комплектацией и уникальным оформлением.",
  },
];

export default function ProductFAQ() {
  const [open, setOpen] = useState<string | null>(faqs[0].q);

  return (
    <section className="relative bg-black py-20 lg:py-24 border-t border-white/5">
      <div className="mx-auto max-w-[1408px] px-4">
        <h2 className="font-display text-3xl md:text-4xl lg:text-[48px] leading-[1.1] uppercase tracking-tight">
          Ответы на вопросы
        </h2>

        <ul className="mt-12 divide-y divide-white/10 border-t border-b border-white/10">
          {faqs.map((item) => {
            const isOpen = open === item.q;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.q)}
                  className="w-full flex items-center justify-between py-6 text-left"
                >
                  <span className="font-display text-lg md:text-xl font-medium pr-6">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 h-8 w-8 rounded-full border border-white/20 flex items-center justify-center transition ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 text-white/70 leading-relaxed max-w-3xl">
                    {item.a}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
