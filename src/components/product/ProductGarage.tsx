export default function ProductGarage() {
  return (
    <section className="relative bg-black">
      <div className="relative h-[788px] overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/figma/product/design-atom.png"
          alt="Распашные двери Атома"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(0,0,0,0) 34%, rgba(0,0,0,0.6) 100%), linear-gradient(270deg, rgba(0,0,0,0) 10%, rgba(0,0,0,0.45) 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1408px] h-full px-4 flex flex-col justify-between py-16">
          <div className="max-w-md">
            <p className="text-[11px] tracking-[0.3em] uppercase text-white">
              Распашные двери
            </p>
            <div className="mt-3 flex flex-col gap-1.5 text-[11px] tracking-[0.3em] uppercase text-white/50">
              <span>Интерьер</span>
              <span>Минимализм</span>
              <span>Забота о пассажире</span>
            </div>
          </div>

          <div className="max-w-xl">
            <h2 className="font-display text-3xl md:text-4xl lg:text-[40px] leading-none uppercase tracking-tight">
              Распашные двери
            </h2>
            <p className="mt-6 text-white/90 leading-relaxed max-w-lg">
              Одна из ключевых особенностей дизайна Атома — распашные двери без
              центральной стойки. Благодаря этому решению в салоне больше места,
              а садиться в машину и выходить из неё удобнее.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
