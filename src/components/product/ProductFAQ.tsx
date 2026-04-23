"use client";

import { useState } from "react";
import { GradientButton } from "@/components/ui/GradientButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatRubles } from "@/lib/format";
import { PRICES, URLS } from "@/content/site";

// Order matches Figma node 600:43443
const faqs = [
  {
    q: "Зачем бронировать Атом",
    a: "Бронирование позволяет вам получить Атом одним из первых по фиксированной цене, не дожидаясь старта продаж.",
  },
  {
    q: "Чем отличается специальная серия Атом",
    a: "Специальная серия — это автомобили первых партий с расширенной комплектацией и уникальным оформлением.",
  },
  {
    q: "Как забронировать Атом",
    a: `Заполните форму на сайте и внесите стоимость бронирования — ${formatRubles(PRICES.reservation)}. Сумма будет зачтена в финальную стоимость.`,
  },
  {
    q: "Будет ли учтен мой ранее оформленный предзаказ",
    a: "Да. Мы свяжемся со всеми, кто оформлял предзаказ, и предложим условия перехода в бронирование.",
  },
  {
    q: "Что означает фиксированная стоимость",
    a: "Цена Атома, зафиксированная в момент бронирования, не изменится до момента передачи автомобиля.",
  },
  {
    q: "Когда я получу свой Атом",
    a: "Срок поставки автомобиля — с мая по сентябрь 2026 года. Ближайший доступный срок будет определён в зависимости от вашего места в очереди.",
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
];

export default function ProductFAQ() {
  const [open, setOpen] = useState<string | null>(faqs[0].q);

  return (
    <section className="relative bg-white text-ink">
      <div className="mx-auto max-w-[1408px] flex gap-[181px] items-start pt-6 pb-14 pl-4 pr-10">
        {/* Left column: heading top + order button bottom */}
        <div className="self-stretch flex flex-col justify-between shrink-0">
          <SectionHeading className="text-[40px] md:text-[56px] text-ink whitespace-nowrap">
            <span className="block">Ответы</span>
            <span className="block">на вопросы</span>
          </SectionHeading>
          <GradientButton
            href={URLS.order}
            className="rounded-[20px] px-10 py-6 font-display text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.02em]"
          >
            Заказать
          </GradientButton>
        </div>

        {/* Right column: FAQ list */}
        <div className="flex-1 min-w-0 flex flex-col gap-9 pt-[60px]">
          {faqs.map((item, i) => {
            const isOpen = open === item.q;
            return (
              <div key={item.q} className="flex flex-col gap-9">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : item.q)}
                  className="w-full flex gap-6 items-start text-left"
                >
                  <div className="flex-1 min-w-0 flex flex-col gap-[26px] text-ink">
                    <span className="block font-display text-[24px] md:text-[32px] leading-[1.2] tracking-[-0.02em]">
                      {item.q}
                    </span>
                    {isOpen && (
                      <p className="font-display text-[16px] md:text-[20px] leading-[28px] text-ink">
                        {item.a}
                      </p>
                    )}
                  </div>
                  <span
                    aria-hidden
                    className={`shrink-0 w-6 h-6 flex items-center justify-center transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
                      <path
                        d="M1 1l6 6 6-6"
                        stroke="#05080a"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
                {i < faqs.length - 1 && (
                  <div className="h-px w-full bg-ink/10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
