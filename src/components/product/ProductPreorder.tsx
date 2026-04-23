import { GradientButton } from "@/components/ui/GradientButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatRubles } from "@/lib/format";
import { PRICES, URLS } from "@/content/site";

const widgets = [
  { title: "Габариты", desc: "Описание в пару строк об Атоме" },
  { title: "Что-то еще", desc: "Описание в пару строк об Атоме" },
  { title: "Что-то еще", desc: "Описание в пару строк об Атоме" },
];

export default function ProductPreorder() {
  return (
    <section
      id="preorder"
      className="relative bg-black w-full h-[800px] overflow-clip"
    >
      {/*
        Top-down Atom render inside a rotated wrapper — matches Figma 600:43393.
        The wrapper is 1360×1789 centered at (50%+367px, 50%-675.5px), then its
        inner child is -rotate-90, so on screen the car points downward and the
        bumper/cyan glow sits in the upper-right quadrant.
      */}
      <div
        aria-hidden
        className="absolute flex items-center justify-center pointer-events-none"
        style={{
          left: "calc(50% + 367px)",
          top: "calc(50% - 675.5px)",
          transform: "translate(-50%, -50%)",
          width: "1360px",
          height: "1789px",
        }}
      >
        <div className="-rotate-90 flex-none">
          <div className="relative" style={{ width: "1789px", height: "1360px" }}>
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="/figma/product/top-atom.webp"
                alt=""
                aria-hidden
                draggable={false}
                className="absolute max-w-none select-none"
                style={{
                  left: "-18.73%",
                  top: "-1.15%",
                  width: "135.04%",
                  height: "100%",
                }}
              />
            </div>
            {/* Gradient lives INSIDE the rotated wrapper — after -90° this fades
                black into transparent along the reveal axis in the final frame. */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(269.947deg, rgb(0, 0, 0) 66.019%, rgba(0, 0, 0, 0) 87.926%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Heading — bottom-anchored (flex-col justify-end) so baseline lands on
          y=164px, width 701px, left edge at (50% - 704px) like Figma. */}
      <SectionHeading
        className="absolute z-10 flex flex-col justify-end text-[36px] md:text-[56px] text-white"
        style={{
          left: "max(16px, calc(50% - 704px))",
          top: "164px",
          transform: "translateY(-100%)",
          width: "min(701px, calc(100vw - 32px))",
        }}
      >
        Станьте&nbsp;владельцем Атома в&nbsp;числе первых
      </SectionHeading>

      {/* Description — 16px from frame-left, top 184px, width 366px */}
      <p
        className="absolute z-10 font-body text-[14px] md:text-[16px] leading-[1.3] text-white/65"
        style={{
          left: "max(16px, calc(50% - 688px))",
          top: "184px",
          width: "min(366px, calc(100vw - 32px))",
        }}
      >
        Возможно пару строк о продаже ещё. Возможно пару строк о продаже ещё.
        Возможно пару строк о продаже ещё.
      </p>

      {/* 3 frosted feature cards — Figma: left calc(50%-283.5px), top 519,
          width 815, translate-x-1/2. So card row is centered at x=(50%-283.5). */}
      <div
        className="absolute z-10 flex gap-4 items-center h-[249px]"
        style={{
          left: "calc(50% - 283.5px)",
          top: "519px",
          transform: "translateX(-50%)",
          width: "815px",
        }}
      >
        {widgets.map((w, i) => (
          <div
            key={i}
            className="flex-1 min-w-0 h-full rounded-[32px] bg-[rgba(102,102,102,0.41)] backdrop-blur-[10px] p-6 flex flex-col justify-between overflow-clip text-white"
          >
            <h3 className="font-display text-[28px] font-medium leading-none">
              {w.title}
            </h3>
            <p className="font-body text-[16px] leading-[1.3]">{w.desc}</p>
          </div>
        ))}
      </div>

      {/* Price + CTA — Figma: left calc(50%+453px), top 519, width 424,
          translate-x-1/2. Column center sits at x=(50%+453). */}
      <div
        className="absolute z-10 flex flex-col gap-[26px] w-[424px]"
        style={{
          left: "calc(50% + 453px)",
          top: "519px",
          transform: "translateX(-50%)",
        }}
      >
        <div className="flex flex-col gap-[39px] items-start w-full">
          <p className="w-full font-display text-[32px] leading-[1.2] tracking-[-0.02em] text-[#00ffff] whitespace-nowrap">
            {formatRubles(PRICES.full)}
          </p>
          <div className="flex flex-col gap-1 items-start">
            <p className="font-display text-[20px] leading-[28px] text-[#b8c6d3]">
              Стоимость бронирования
            </p>
            <p className="font-display text-[70px] leading-[1.05] tracking-[-0.01em] uppercase text-[#b365ff] whitespace-nowrap">
              {formatRubles(PRICES.reservation)}
            </p>
          </div>
        </div>
        <GradientButton
          href={URLS.order}
          className="w-full h-[60px] rounded-2xl font-body text-[18px] tracking-[-0.01em]"
        >
          Заказать
        </GradientButton>
      </div>
    </section>
  );
}
