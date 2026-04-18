import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background photo — use plain img to skip Next image optimization for this huge asset */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/figma/hero-big.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Darkening overlay for readability */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.55)_100%)]" />
      {/* Soft vignette at bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-20 mx-auto max-w-[1408px] px-4 lg:px-8 pt-40 pb-16 min-h-screen flex flex-col justify-end">
        <div className="max-w-[830px]">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em]">
            Запуск года.
            <br />
            Осталось 6 мест
          </h1>

          <p className="mt-6 max-w-[430px] text-base text-white leading-[1.3]">
            Первый серийный электромобиль страны ищет сообщества, с которыми
            хочется делать историю. Если это про вас — листайте дальше.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#apply" variant="outline">
              Оставить заявку
            </Button>
            <Button href="#about" variant="solid">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>

      {/* Floating "об атоме" chip — bottom-right glass card */}
      <a
        href="#about"
        className="hidden lg:flex absolute bottom-4 right-4 z-20 w-[235px] h-[235px] rounded-[32px] overflow-hidden backdrop-blur-[20px] bg-white/10 border border-white/15 text-white flex-col justify-between p-5 hover:bg-white/15 transition"
        aria-label="Подробнее об Атоме"
      >
        <span className="text-[11px] tracking-[0.5em] uppercase flex items-center gap-3">
          Подробнее об атоме
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
            <path
              d="M1 5h8M6 2l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <div
          aria-hidden
          className="absolute inset-x-0 -bottom-6 h-40 opacity-80"
          style={{
            background:
              "radial-gradient(60% 70% at 50% 70%, rgba(0,255,255,0.35) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
      </a>
    </section>
  );
}
