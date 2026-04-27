import Image from "next/image";

const stats = [
  { value: "100+", label: "млн человек\nузнали об Атоме\nчерез СМИ" },
  { value: ">105К", label: "предзаказов\nдо начала серийного\nпроизводства" },
  { value: "1 600", label: "инженеров\nи специалистов\nв команде" },
  { value: "8", label: "партнёрских\nпроектов\nза 2024-2025" },
];

export default function PartnersStats() {
  return (
    <section className="relative bg-black overflow-hidden">
      <div className="relative w-full min-h-[720px] md:min-h-[800px]">
        {/* Background per Figma: bridge-cam composite (base + overlay).
            On mobile we drop the cover-zoom so the whole car/tunnel
            fits inside the viewport instead of being cropped. */}
        <Image
          src="/figma/product/bridge-cam-05.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <Image
          src="/figma/product/bridge-cam-06.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center calc(35% - 120px)" }}
        />

        {/* Grey gradient fade — denser at the bottom so the stats sit on a
            solid surface instead of overlapping the car image. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(41,41,41,0) 35%, rgba(41,41,41,0.85) 55%, rgba(41,41,41,1) 65%)",
          }}
        />

        {/* Left-aligned stats strip */}
        <div className="absolute inset-x-0 bottom-0 z-10 mx-auto max-w-[1440px] px-5 md:px-10 pb-10 md:pb-14">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 justify-items-start text-left">
            {stats.map((s) => (
              <div key={s.value} className="max-w-[240px]">
                <dt className="font-display text-4xl md:text-5xl lg:text-[56px] font-light leading-none tracking-[-0.01em] text-white">
                  {s.value}
                </dt>
                <dd className="mt-3 text-[14px] md:text-[18px] text-white/80 whitespace-pre-line leading-snug">
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
