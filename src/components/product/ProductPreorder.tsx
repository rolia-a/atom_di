import Image from "next/image";

const widgets = [
  { title: "Габариты", desc: "Описание в пару строк об Атоме" },
  { title: "Что-то еще", desc: "Описание в пару строк об Атоме" },
  { title: "Что-то еще", desc: "Описание в пару строк об Атоме" },
];

export default function ProductPreorder() {
  return (
    <section id="preorder" className="relative bg-black overflow-hidden">
      {/* Top-ATOM transparent silhouette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(269.95deg, rgb(0,0,0) 66%, rgba(0,0,0,0) 88%)",
        }}
      />
      <Image
        src="/figma/product/top-atom.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-right opacity-70 pointer-events-none"
        priority={false}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.5)_60%,rgba(0,0,0,0.2)_100%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1408px] px-4 py-20 lg:py-24 min-h-[800px] flex flex-col justify-between gap-12">
        <div className="max-w-[700px]">
          <h2 className="font-display text-3xl md:text-4xl lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em]">
            Станьте владельцем Атома в числе первых
          </h2>
          <p className="mt-4 max-w-sm text-white/65 leading-relaxed">
            Возможно пару строк о продаже ещё. Возможно пару строк о продаже ещё.
            Возможно пару строк о продаже ещё.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4 items-end">
          {/* Feature widgets */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {widgets.map((w, i) => (
              <div
                key={i}
                className="rounded-[32px] bg-white/10 backdrop-blur-md p-6 min-h-[249px] flex flex-col justify-between"
              >
                <h3 className="font-display text-2xl lg:text-[28px] font-medium">
                  {w.title}
                </h3>
                <p className="text-sm text-white/80 leading-snug">{w.desc}</p>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="rounded-[32px] p-8 flex flex-col items-center gap-10 text-center">
            <p className="font-display text-3xl lg:text-[32px] text-[#00ffff] tracking-[-0.02em]">
              3 900 000 ₽
            </p>
            <div>
              <p className="text-xl text-[#b8c6d3]">Стоимость бронирования</p>
              <p className="mt-2 font-display text-5xl lg:text-[70px] text-[#b365ff] leading-none tracking-[-0.01em] uppercase">
                500 000 ₽
              </p>
            </div>
            <button className="w-full inline-flex items-center justify-center h-14 px-8 rounded-2xl bg-black border-2 border-[#9747ff] text-white font-medium hover:shadow-[0_0_24px_rgba(151,71,255,0.5)] transition">
              Заказать
            </button>
            <p className="text-xs text-[#b8c6d3] leading-snug">
              Сумма бронирования входит в финальную стоимость электромобиля
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
