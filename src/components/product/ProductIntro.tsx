import Image from "next/image";

const stats = [
  { hint: "Разгон до 100 км/ч", value: "8 СЕК" },
  { hint: "Зарядка на 100 км", value: "8 МИН" },
  { hint: "Запас хода", value: "500 КМ" },
  { hint: "Радиус разворота", value: "4.9 М" },
];

export default function ProductIntro() {
  return (
    <section className="relative bg-black w-full h-[600px] md:h-[800px] overflow-hidden">
      {/* Wind-tunnel backdrop — sourced 1:1 from Figma node 600:42914 */}
      <Image
        src="/figma/product/specs/wind-tunnel.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center z-0 pointer-events-none select-none"
      />

      {/* Stats row pinned to bottom (matches Figma container at y=697, h=71) */}
      <div className="absolute left-4 right-4 bottom-[32px] md:bottom-[32px] z-20 flex justify-center">
        <div className="flex flex-wrap justify-center gap-x-[40px] gap-y-6 md:gap-x-[72px]">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col items-center text-center">
              <p className="font-body text-[14px] md:text-[16px] font-medium text-white/85 leading-none">
                {s.hint}
              </p>
              <p className="mt-3 font-display text-[32px] md:text-[40px] font-medium text-white leading-none tracking-[-0.02em]">
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
