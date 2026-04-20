import Image from "next/image";

export default function PartnersHero() {
  return (
    <section className="relative min-h-[640px] md:min-h-[760px] lg:min-h-[800px] w-full overflow-hidden bg-black">
      <Image
        src="/figma/partners/hero-bg.png"
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover z-0"
      />
      <Image
        src="/figma/partners/hero-overlay.webp"
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover z-0 opacity-90"
      />
      <div aria-hidden className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 mx-auto max-w-[1440px] px-5 md:px-10 pt-[120px] md:pt-[150px] lg:pt-[379px] pb-10 flex flex-col justify-end min-h-[640px] md:min-h-[760px] lg:min-h-[800px]">
        <div className="max-w-[615px]">
          <h1 className="font-display text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em] text-white">
            Запуск года.
            <br />
            Осталось 6 мест
          </h1>
          <p className="mt-5 max-w-[361px] text-base md:text-lg lg:text-xl text-white leading-[1.4]">
            Первый серийный электромобиль страны ищет сообщества, с которыми
            хочется делать историю. Если это про вас — листайте дальше
          </p>
          <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
            <a
              href="#apply"
              className="inline-flex items-center justify-center h-12 md:h-[71px] px-6 md:px-10 rounded-2xl md:rounded-[20px] bg-black border-2 border-[#9747ff] text-white text-base md:text-xl font-light hover:shadow-[0_0_24px_rgba(151,71,255,0.5)] transition"
            >
              Занять место
            </a>
            <a
              href="#events"
              className="inline-flex items-center justify-center h-12 md:h-[71px] px-6 md:px-10 rounded-2xl bg-white text-black text-base md:text-xl font-light hover:bg-white/90 transition"
            >
              Узнать больше
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
