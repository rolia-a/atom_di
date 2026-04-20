const steps = [
  {
    title: "Вносите стоимость предзаказа",
    big: "500 000 ₽",
    note: null,
  },
  {
    title: "В течение месяца мы готовим Атом для вас",
    big: "Подготовка",
    note: "Мы свяжемся для уточнения деталей.",
  },
  {
    title: "Пользуетесь умным и выгодным решением каждый день!",
    big: "Атом у вас",
    note: "Срок поставки — с мая по сентябрь 2026 года, ближайший доступный срок определяется местом в очереди.",
  },
];

export default function ProductAfter() {
  return (
    <section
      className="relative overflow-hidden text-[#081114]"
      style={{
        background:
          "linear-gradient(189.65deg, rgb(195,197,198) 25.7%, rgb(223,224,225) 77%)",
      }}
    >
      <div className="mx-auto max-w-[1408px] px-4 py-20 lg:py-24">
        <h2 className="font-display text-3xl md:text-4xl lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em] max-w-3xl">
          Что будет после покупки атом?
        </h2>

        {/* Timeline line with dots */}
        <div className="relative mt-24">
          <div
            aria-hidden
            className="absolute top-[165px] left-0 right-0 h-0 border-t-2 border-dashed border-[#0d161c]/40"
          />
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {steps.map((s, i) => (
              <li key={i} className="relative pt-[220px]">
                <div
                  aria-hidden
                  className="absolute top-[158px] left-0 w-[18px] h-[18px] rounded-full bg-[#0d161c]"
                />
                <p className="text-xl leading-7 max-w-sm">{s.title}</p>
                <p className="mt-4 font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em]">
                  {s.big}
                </p>
                {s.note && (
                  <p className="mt-4 text-sm text-[#5d7183] leading-relaxed max-w-sm">
                    {s.note}
                  </p>
                )}
                {i === 0 && (
                  <a
                    href="#preorder"
                    className="mt-6 inline-flex items-center justify-center h-14 px-8 rounded-2xl bg-white text-black font-medium hover:bg-black hover:text-white transition"
                  >
                    Заказать
                  </a>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
