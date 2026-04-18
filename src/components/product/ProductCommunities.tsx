import Image from "next/image";

const items = [
  {
    num: "01",
    title: "Компактный",
    desc: "Габариты, удобные для города",
    img: "/figma/product/card-compact.webp",
  },
  {
    num: "02",
    title: "Маневренный",
    desc: "Радиус разворота 4.9 м",
    img: "/figma/product/card-maneuver.webp",
  },
  {
    num: "03",
    title: "Просторный салон",
    desc: "Без центральной стойки",
    img: "/figma/product/card-spacious.webp",
  },
  {
    num: "04",
    title: "Гаджет",
    desc: "Непрерывные OTA-обновления",
    img: "/figma/product/card-gadget.webp",
  },
];

export default function ProductCommunities() {
  return (
    <section className="relative bg-white text-black">
      <div className="mx-auto max-w-[1408px] px-4 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em] max-w-3xl">
            Основные преимущества атома
          </h2>
          <p className="max-w-sm text-black/60 leading-snug">
            Тут можно какой-нибудь текст, дополняющий заголовок, о том, что Атом
            крут.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <article
              key={item.num}
              className="relative aspect-[3/4] rounded-[32px] overflow-hidden bg-[#0a1416]"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.55)_100%)]" />
              <div className="relative z-10 p-6 flex flex-col h-full text-white">
                <h3 className="font-display text-2xl font-medium leading-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/75 leading-snug">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
