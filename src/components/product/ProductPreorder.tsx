export default function ProductPreorder() {
  return (
    <section id="preorder" className="relative border-t border-white/5"
      style={{
        background:
          "radial-gradient(60% 70% at 50% 40%, rgba(20,60,80,0.5) 0%, rgba(0,0,0,0) 70%), linear-gradient(180deg, #000 0%, #050a0c 100%)",
      }}
    >
      <div className="mx-auto max-w-[1408px] px-4 py-20 lg:py-24">
        <h2 className="font-display text-3xl md:text-4xl lg:text-[48px] leading-[1.1] uppercase tracking-tight max-w-3xl">
          Станьте владельцем
          <br />
          Атома в числе первых
        </h2>
        <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
          Бронирование позволяет вам получить Атом одним из первых по
          фиксированной цене, не дожидаясь старта продаж.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Price card */}
          <article className="rounded-[32px] bg-white/[0.04] border border-white/10 p-8 lg:col-span-2 flex flex-col justify-between min-h-[320px]">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-white/60">
                Стоимость Атома от
              </p>
              <p className="mt-3 font-display text-5xl md:text-6xl lg:text-[72px] font-light leading-none tracking-tight">
                3 900 000 ₽
              </p>
              <p className="mt-6 text-white/70 max-w-lg leading-relaxed">
                Сумма бронирования входит в финальную стоимость электромобиля.
                Срок поставки — с мая по сентябрь 2026 года.
              </p>
            </div>
          </article>

          <article className="rounded-[32px] bg-[#00ffff]/10 border border-[#00ffff]/40 p-8 flex flex-col justify-between min-h-[320px]">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-[#00ffff]">
                Стоимость бронирования
              </p>
              <p className="mt-3 font-display text-4xl md:text-5xl font-light leading-none">
                500 000 ₽
              </p>
            </div>
            {/* Button placeholder */}
            <button className="mt-8 inline-flex items-center justify-center h-14 rounded-2xl bg-[#00ffff] text-black font-medium hover:brightness-110 transition">
              Забронировать
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
