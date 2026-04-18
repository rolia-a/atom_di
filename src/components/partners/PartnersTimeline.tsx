const steps = [
  { num: "01", title: "Заявка", desc: "Расскажите о своём сообществе и целях. Мы вернёмся с обратной связью в течение 24 часов" },
  { num: "02", title: "Стратегия", desc: "Вместе определяем, какой результат важен для вашей аудитории" },
  { num: "03", title: "Формат", desc: "Предлагаем конкретные идеи и механику — адаптированные под ваше сообщество" },
  { num: "04", title: "Продакшн", desc: "Воплощаем проект. Вы занимаетесь аудиторией — всё остальное на нас" },
  { num: "05", title: "Результат", desc: "Фиксируем итоги. Вы получаете контент и историю для своего комьюнити" },
];

export default function PartnersTimeline() {
  return (
    <section className="relative bg-white text-black">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-12 md:py-16">
        <h2 className="font-display text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em] max-w-[615px]">
          От заявки до результата —
          <br />
          6 недель
        </h2>

        <div className="mt-12 md:mt-16 relative">
          {/* dashed line on desktop */}
          <div
            aria-hidden
            className="hidden md:block absolute top-[60px] left-0 right-0 h-0 border-t-2 border-dashed border-black/20"
          />
          <ol className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 relative">
            {steps.map((s) => (
              <li key={s.num} className="relative">
                {/* dot */}
                <div
                  aria-hidden
                  className="hidden md:block absolute -top-[11px] left-0 w-[22px] h-[22px] rounded-full bg-[#00b2b2]"
                />
                <p className="md:hidden text-[13px] tracking-[0.4em] uppercase text-[#00b2b2] font-medium">
                  {s.num}
                </p>
                <h3 className="mt-4 md:mt-16 font-display text-2xl md:text-3xl font-medium leading-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm md:text-base text-black/70 leading-snug">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
