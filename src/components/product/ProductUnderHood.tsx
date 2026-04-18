const features = [
  { title: "Платформа", desc: "Модульная, собственной разработки" },
  { title: "Запас хода", desc: "До 500 км на одном заряде" },
  { title: "Зарядка", desc: "30 мин от 20 до 80%" },
  { title: "Ассистенты вождения", desc: "Комплекс ADAS в базе" },
];

export default function ProductUnderHood() {
  return (
    <section className="relative bg-black py-20 lg:py-24 border-t border-white/5">
      <div className="mx-auto max-w-[1408px] px-4">
        <h2 className="font-display text-3xl md:text-4xl lg:text-[48px] leading-[1.1] uppercase tracking-tight">
          Загляните под капот
          <br />
          Атома
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-black">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/figma/product/platform.webp"
              alt="EV-платформа Атома"
              className="absolute inset-0 w-full h-full object-contain"
              loading="lazy"
            />
          </div>

          <dl className="space-y-8">
            {features.map((f) => (
              <div key={f.title} className="border-t border-white/10 pt-4">
                <dt className="font-display text-xl md:text-2xl font-medium">
                  {f.title}
                </dt>
                <dd className="mt-2 text-white/70 leading-snug">{f.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
