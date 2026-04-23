import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

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
      <div className="mx-auto max-w-[1408px] px-4 pt-[46px] pb-4 flex flex-col h-[700px] md:h-[800px]">
        {/* Heading top-left + helper text aligned to top */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-8 pl-4">
          <SectionHeading className="text-4xl md:text-5xl lg:text-[56px] max-w-[640px]">
            Основные
            <br />
            преимущества
            <br />
            атома
          </SectionHeading>
          <p className="font-display text-[16px] text-black/85 leading-snug max-w-[280px] pt-2">
            Тут можно какой-нибудь текст, дополняющий заголовок, о&nbsp;том, что
            Атом крут.
          </p>
        </div>

        {/* Cards pinned to bottom (16px from edge) */}
        <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
              {/* Stronger darkening on the photo */}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.25)_50%,rgba(0,0,0,0.85)_100%)]" />
              <div className="relative z-10 p-6 flex flex-col h-full text-white">
                <h3 className="font-display text-2xl font-medium leading-tight">
                  {item.title}
                </h3>
                {/* Description pushed to bottom */}
                <p className="mt-auto text-sm text-white/85 leading-snug">
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
