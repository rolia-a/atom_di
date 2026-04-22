import Image from "next/image";

const widgets = [
  { title: "Габариты", desc: "Описание в пару строк об Атоме" },
  { title: "Что-то еще", desc: "Описание в пару строк об Атоме" },
  { title: "Что-то еще", desc: "Описание в пару строк об Атоме" },
];

export default function ProductPreorder() {
  return (
    <section
      id="preorder"
      className="relative bg-black w-full h-[800px] overflow-hidden"
    >
      {/*
        Top-down Atom render, rotated -90° so the car points downward.
        Anchored to the right edge so only the upper half of the car (rear
        roof → front bumper w/ cyan glow) occupies the right ~40% of the
        section, matching Figma node 600:43393.
      */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/figma/product/top-atom.webp"
          alt=""
          aria-hidden
          draggable={false}
          className="absolute max-w-none select-none"
          style={{
            top: "50%",
            left: "calc(50% + 367px)",
            transform: "translate(-50%, -50%) rotate(-90deg)",
            transformOrigin: "center",
            height: "1789px",
            width: "1360px",
            objectFit: "cover",
          }}
        />
      </div>
      {/* Left-to-right fade: black on left → transparent on right, so the car
          emerges out of darkness on the right side */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(269.947deg, rgb(0, 0, 0) 66.019%, rgba(0, 0, 0, 0) 87.926%)",
        }}
      />

      {/* Top-left heading + description */}
      <h2 className="absolute z-10 left-4 top-[46px] font-display text-[36px] md:text-[56px] leading-[1.05] uppercase tracking-[-0.01em] text-white max-w-[701px]">
        Станьте владельцем Атома в&nbsp;числе первых
      </h2>
      <p className="absolute z-10 left-4 top-[184px] max-w-[366px] font-body text-[14px] md:text-[16px] leading-[1.3] text-white/65">
        Возможно пару строк о продаже ещё. Возможно пару строк о продаже ещё.
        Возможно пару строк о продаже ещё.
      </p>

      {/* Bottom-left: 3 frosted-glass feature cards (Figma w=815 @ left≈30%) */}
      <div className="absolute z-10 left-4 md:left-[calc(50%-407.5px+124px)] top-[519px] h-[249px] flex gap-4 md:w-[815px] max-md:right-[48%] max-md:max-w-[calc(52%-16px)]">
        {widgets.map((w, i) => (
          <div
            key={i}
            className="flex-1 min-w-0 h-full rounded-[32px] bg-[rgba(102,102,102,0.41)] backdrop-blur-[10px] p-6 flex flex-col justify-between overflow-clip text-white"
          >
            <h3 className="font-display text-[22px] md:text-[28px] font-medium leading-none">
              {w.title}
            </h3>
            <p className="font-body text-[14px] md:text-[16px] leading-[1.3]">
              {w.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom-right: price + gradient button (Figma w=424 @ left≈67%) */}
      <div className="absolute z-10 right-4 md:left-[calc(50%+241px)] md:right-auto top-[519px] w-[90%] md:w-[424px] max-w-[424px] flex flex-col gap-[26px]">
        <div className="flex flex-col gap-[39px] items-start">
          <p className="font-display text-[28px] md:text-[32px] leading-[1.2] tracking-[-0.02em] text-[#00ffff] whitespace-nowrap">
            3 900 000&nbsp;₽
          </p>
          <div className="flex flex-col gap-1 items-start">
            <p className="font-display text-[18px] md:text-[20px] leading-[28px] text-[#b8c6d3]">
              Стоимость бронирования
            </p>
            <p className="font-display text-[48px] md:text-[70px] leading-[1.05] uppercase tracking-[-0.01em] text-[#b365ff] whitespace-nowrap">
              500 000&nbsp;₽
            </p>
          </div>
        </div>
        <a
          href="/partners#apply"
          className="btn-grad w-full inline-flex items-center justify-center h-[56px] md:h-[60px] rounded-2xl font-body text-[16px] md:text-[18px] tracking-[-0.01em]"
        >
          Заказать
        </a>
      </div>
    </section>
  );
}
