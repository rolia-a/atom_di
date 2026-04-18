const steps = [
  {
    num: "01",
    title: "Бронирование",
    desc: "Вносите стоимость предзаказа 500 000 ₽.",
  },
  {
    num: "02",
    title: "Подготовка",
    desc: "В течение месяца мы готовим Атом для вас.",
  },
  {
    num: "03",
    title: "Доставка",
    desc: "Мы с вами свяжемся для уточнения деталей.",
  },
  {
    num: "04",
    title: "Атом у вас",
    desc: "Пользуйтесь умным и выгодным решением каждый день.",
  },
];

export default function ProductAfter() {
  return (
    <section className="relative bg-black py-20 lg:py-24 border-t border-white/5">
      <div className="mx-auto max-w-[1408px] px-4">
        <h2 className="font-display text-3xl md:text-4xl lg:text-[48px] leading-[1.1] uppercase tracking-tight max-w-3xl">
          Что будет после покупки Атом?
        </h2>

        <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s) => (
            <li
              key={s.num}
              className="rounded-[28px] bg-white/[0.04] border border-white/10 p-6 min-h-[220px] flex flex-col"
            >
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#00ffff]">
                {s.num}
              </span>
              <h3 className="mt-3 font-display text-2xl font-medium leading-tight">
                {s.title}
              </h3>
              <p className="mt-auto text-sm text-white/70 leading-snug">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
