import Button from "./Button";

export default function Quote() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(60% 70% at 50% 40%, rgba(20,60,80,0.6) 0%, rgba(0,0,0,0) 70%), linear-gradient(180deg, #05090a 0%, #000 100%)",
      }}
    >
      <div className="mx-auto max-w-[1408px] px-4 lg:px-8 py-20 lg:py-28 min-h-[600px] flex flex-col items-center text-center">
        <blockquote className="max-w-3xl">
          <p className="font-display text-xl md:text-2xl lg:text-[28px] leading-snug text-white">
            «Мы встроили экран в руль, убрали центральную стойку, отвезли
            машину на Северный полюс и создали первый серийный электромобиль в
            стране. Если ваше сообщество тоже привыкло делать то, что до вас
            никто не пробовал — мы открыты к диалогу»
          </p>
          <footer className="mt-6 text-[11px] tracking-[0.3em] uppercase text-white/60">
            Команда Атом
          </footer>
        </blockquote>

        {/* Car interior visual placeholder */}
        <div
          aria-hidden
          className="relative mt-10 w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden"
          style={{
            background:
              "radial-gradient(50% 70% at 50% 60%, rgba(30,100,120,0.5) 0%, rgba(0,0,0,0) 70%), linear-gradient(180deg, #0a1418 0%, #050709 100%)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-white/10 font-display text-7xl font-light">
            ATOM
          </div>
        </div>

        <div className="mt-10">
          <Button href="#apply">Оставить заявку</Button>
        </div>
      </div>
    </section>
  );
}
