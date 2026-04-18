export default function ProductBanner() {
  return (
    <section
      className="relative w-full h-[536px] overflow-hidden"
      style={{
        background:
          "linear-gradient(187.9deg, rgb(195,197,198) 25.7%, rgb(223,224,225) 77%)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/figma/product/front-atom.webp"
        alt="Atom front view"
        className="absolute left-[18%] top-[-10%] h-[120%] w-auto max-w-none object-contain pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-[1408px] h-full px-4 flex flex-col justify-between py-12">
        <div className="max-w-[480px]">
          <h2 className="font-display text-3xl md:text-4xl lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em] text-black">
            Записаться
            <br />
            на показ Атома
          </h2>
          <p className="mt-4 text-2xl md:text-3xl text-[#5d7183] leading-[1.2] max-w-md">
            Почувствуйте весь комфорт Атома перед покупкой
          </p>
        </div>

        {/* Button placeholder */}
        <button className="self-start inline-flex items-center justify-center h-14 px-8 rounded-2xl bg-black text-white font-medium hover:brightness-110 transition">
          Записаться на тест-драйв
        </button>
      </div>
    </section>
  );
}
