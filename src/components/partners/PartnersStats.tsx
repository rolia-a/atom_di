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
      <div className="relative w-full h-[300px] md:h-[500px] lg:h-[703px] overflow-hidden">
        <Image
          src="/figma/product/bridge-cam-05.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>

      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-12 md:py-16">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((s) => (
            <div key={s.value}>
              <dt className="font-display text-4xl md:text-5xl lg:text-[56px] font-light leading-none tracking-[-0.01em] text-white">
                {s.value}
              </dt>
              <dd className="mt-4 text-sm md:text-base text-white/70 whitespace-pre-line leading-snug">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
