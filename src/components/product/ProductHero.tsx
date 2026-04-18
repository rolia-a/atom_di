export default function ProductHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background — bridge cam reveal */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/figma/product/bridge-cam-05.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.6)_100%)]"
      />

      <div className="relative z-20 mx-auto max-w-[1408px] px-4 pt-40 pb-20 min-h-screen flex flex-col justify-end">
        <div className="max-w-[720px]">
          <p className="text-[11px] tracking-[0.4em] uppercase text-white/70">
            Описание в пару строк об Атоме
          </p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.05] uppercase tracking-[-0.01em]">
            Электромобиль-гаджет
            <br />
            с безграничными
            <br />
            возможностями
          </h1>

          <div className="mt-10 flex flex-wrap gap-4">
            {/* Button placeholders */}
            <button className="inline-flex items-center justify-center h-14 px-10 rounded-2xl bg-black border-2 border-[#9747ff] text-white font-medium hover:shadow-[0_0_24px_rgba(151,71,255,0.5)] transition">
              Хочу Атом
            </button>
            <button className="inline-flex items-center justify-center h-14 px-10 rounded-2xl bg-white/85 text-black/85 font-medium hover:bg-white transition">
              Записаться на показ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
