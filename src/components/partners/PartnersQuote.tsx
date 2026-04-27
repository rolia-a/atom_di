import Image from "next/image";

export default function PartnersQuote() {
  return (
    <section className="relative min-h-[500px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden bg-black">
      {/* Background photo of the steering wheel and interior. */}
      <Image
        src="/figma/partners/quote-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Overlay: dashboard screen with the correct 3-widget UI
          (perspective-distorted polygon from Figma — Vector 55). */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/figma/partners/wheel-screen.svg"
        alt=""
        aria-hidden
        draggable={false}
        className="absolute pointer-events-none select-none"
        style={{
          // Positioned over the steering-wheel screen area in the BG photo.
          left: "50%",
          top: "55%",
          width: "23%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(rgba(57,48,47,0.12) 0%, rgba(0,0,0,0) 56%, rgba(4,4,4,0.8) 81%, rgba(8,8,8,0.4) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 py-12 md:py-16 lg:py-20 min-h-[500px] md:min-h-[700px] lg:min-h-[800px] flex items-start">
        <blockquote className="max-w-[714px] mx-auto text-center">
          <p className="font-body text-lg md:text-xl lg:text-2xl leading-[1.3] text-white">
            «Мы встроили экран в руль, убрали центральную стойку, отвезли
            машину на Северный полюс и создали{" "}
            <span className="text-teal">
              первый серийный электромобиль в стране.
            </span>{" "}
            Если ваше сообщество тоже привыкло делать то, что до вас никто
            не пробовал — мы открыты к диалогу»
          </p>
          <footer className="mt-6 text-[13px] md:text-sm tracking-[0.08em] uppercase text-white/70">
            Команда Атома
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
