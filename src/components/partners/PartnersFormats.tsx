import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Card = {
  num: string;
  title: string;
  desc: string;
  img: string;
  /** CSS `object-position` value (e.g. "30% center"). */
  imgPosition?: string;
};

const cards: Card[] = [
  {
    num: "01",
    title: "Аренда Атома",
    // Non-breaking space ties "и" to "логистика" (no orphan on a new line).
    desc: "Автомобиль под вашу активность: ивент, промо, контент. Брендирование и\u00A0логистика — на\u00A0нас.",
    img: "/figma/partners/comm-rent.webp",
  },
  {
    num: "02",
    title: "Интеграция продукта",
    desc: "Мы придумываем механику под ваше сообщество, создаём контент и\u00A0обеспечиваем\u00A0PR.",
    img: "/figma/partners/comm-integration.webp",
    // Show the woman-and-car area — not fully left, not fully right;
    // shifted 10px down per mobile review.
    imgPosition: "72% calc(50% + 10px)",
  },
  {
    num: "03",
    title: "Брендированный\nавтопробег",
    desc: "Авто становятся мобильными медиа-носителями — по\u00A0городу\nили между точками вашего\nкомьюнити.",
    img: "/figma/partners/comm-autorun.webp",
  },
  {
    num: "04",
    title: "Событие под ключ",
    desc: "Организуем мероприятие,\nвыставку или фан-зону с Атомом\nкак центральным объектом.",
    img: "/figma/partners/comm-event.webp",
  },
];

export default function PartnersFormats() {
  return (
    <section className="relative bg-white text-black">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <SectionHeading className="text-[36px] md:text-[48px] lg:text-[56px] max-w-[657px]">
            <span className="text-teal">Всё за наш счёт.</span>
            <br />
            Серьёзно.
          </SectionHeading>
          <p className="max-w-[328px] text-base md:text-lg lg:text-xl leading-[1.4]">
            Четыре формата сотрудничества.
            <br />
            Мы подберём подходящий —
            <br />
            или придумаем новый для вас.
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c) => (
            <article
              key={c.num}
              className="relative h-[400px] md:h-[440px] lg:h-[475px] rounded-[32px] overflow-hidden bg-black"
            >
              <Image
                src={c.img}
                alt=""
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                className="object-cover"
                style={
                  c.imgPosition
                    ? { objectPosition: c.imgPosition }
                    : undefined
                }
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 p-5 h-full flex flex-col justify-between text-white">
                <div className="space-y-2">
                  <p className="text-[13px] tracking-[0.08em] uppercase font-medium">
                    {c.num}
                  </p>
                  <h3 className="font-display text-xl md:text-2xl font-medium leading-tight whitespace-pre-line">
                    {c.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg lg:text-xl leading-[1.4] whitespace-pre-line">
                  {c.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-black/50">
          Концепция, реализация, автомобиль, контент и продвижение входят
          в каждый формат
        </p>
      </div>
    </section>
  );
}
