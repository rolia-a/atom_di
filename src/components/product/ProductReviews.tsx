import Image from "next/image";

const reviews = [
  {
    title: "Атом это лучший автомобиль России!!!!!!!!",
    text: "АТОМ добрался до Северного полюса на атомном ледоколе «50 лет Победы». 10 дней под арктическими ветрами, спуск на лёд — батарея израсходовала всего 10% заряда.",
  },
  {
    title: "Первый в мире тест-драйв EV в Арктике",
    text: "Компактный и маневренный электромобиль-гаджет с просторным салоном и распашными дверями без центральных стоек.",
  },
  {
    title: "Атом это лучший автомобиль России!!!!!!!!",
    text: "АТОМ — результат синтеза разработок программного обеспечения и смелых автомобильных решений.",
  },
  {
    title: "Первый в мире тест-драйв EV в Арктике",
    text: "Технологичный, современный и удобный электромобиль, который станет частью новой комфортной городской среды.",
  },
];

export default function ProductReviews() {
  return (
    <section className="relative overflow-hidden text-black h-[812px]">
      {/* Winter aerial forest road w/ Atom — 1:1 Figma node 600:43325 */}
      <Image
        src="/figma/product/reviews-bg.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Top pale-blue fade for heading readability */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[385px] z-10"
        style={{
          background:
            "linear-gradient(180deg, #ddf1ff 0%, rgba(221,241,255,0) 100%)",
        }}
      />

      <h2 className="absolute z-20 left-4 top-[46px] font-display text-[32px] md:text-[48px] lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em] text-[#020303] max-w-[676px]">
        Отзывы реальных пользователей
      </h2>

      {/* Horizontal scrolling cards row, anchored to the bottom */}
      <div className="absolute z-20 left-0 right-0 top-[454px] overflow-x-auto pb-6">
        <div className="flex gap-5 px-4 min-w-max">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="rounded-[32px] bg-white p-5 h-[314px] w-[420px] flex flex-col justify-between shrink-0 overflow-clip"
            >
              <div className="flex flex-col gap-4">
                <h3 className="font-display text-[24px] font-medium leading-[1.2] text-[#16272d]">
                  {r.title}
                </h3>
                <p className="font-body text-[16px] leading-[1.3] text-[#020303]">
                  {r.text}
                </p>
              </div>
              <Image
                src="/figma/product/atomflot-logo.webp"
                alt="Атомфлот Росатом"
                width={136}
                height={52}
                className="object-contain"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
