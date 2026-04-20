import Image from "next/image";

const stats = [
  { value: "100+", label: "млн человек узнали\nоб Атом через СМИ" },
  { value: "105К", label: "предзаказов до начала\nсерийного производства" },
  { value: "1 600", label: "инженеров и специалистов\nв команде" },
  { value: "8", label: "партнёрских проектов\nза 2024-2025" },
];

export default function PartnersStats() {
  return (
    <section className="relative bg-black overflow-hidden">
      <div className="relative w-full min-h-[800px]">
        {/* Background per Figma: bridge-cam composite (base + overlay) */}
        <Image
          src="/figma/product/bridge-cam-05.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
        <Image
          src="/figma/product/bridge-cam-06.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{
            transform: "scale(1.07) translate(-1.6%, -9%)",
          }}
        />

        {/* Smooth gradient fade to black at the bottom (no hard plate) */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.95) 100%)",
          }}
        />

        {/* Centered stats strip */}
        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1440px] px-5 md:px-10 pb-10 md:pb-14">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 justify-items-center text-center">
            {stats.map((s) => (
              <div key={s.value} className="max-w-[240px]">
                <dt className="font-display text-4xl md:text-5xl lg:text-[56px] font-light leading-none tracking-[-0.01em] text-white">
                  {s.value}
                </dt>
                <dd className="mt-3 text-[18px] text-white/80 whitespace-pre-line leading-snug">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
