import Image from "next/image";

const stats = [
  { hint: "Разгон до 100 км/ч", value: "8 СЕК" },
  { hint: "Зарядка на 100 км", value: "8 МИН" },
  { hint: "Запас хода", value: "500 КМ" },
  { hint: "Радиус разворота", value: "4.9 М" },
];

export default function ProductIntro() {
  return (
    <section className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Atom on the wind-tunnel backdrop */}
      <Image
        src="/figma/product/atom-transparent.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center opacity-90 z-0 pointer-events-none select-none"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.15)_45%,rgba(0,0,0,0.85)_100%)]"
      />

      <div className="relative z-20 mx-auto max-w-[1408px] px-4 py-20 lg:py-28 min-h-[600px] md:min-h-[800px] flex items-end">
        {/* Centered key figures: hint on top, body below, 40px gaps */}
        <div className="w-full flex flex-wrap justify-center gap-x-10 gap-y-8 md:gap-x-[40px]">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col items-center text-center">
              <p className="font-display text-[16px] font-medium text-white/85 leading-none tracking-[0.02em]">
                {s.hint}
              </p>
              <p className="mt-3 font-display text-[28px] md:text-[40px] font-medium text-white leading-none tracking-tight">
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
