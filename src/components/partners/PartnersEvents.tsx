import Image from "next/image";

const cards = [
  {
    title: "Твоя история",
    text: "Девятый слот ждёт сообщество, готовое написать следующую главу вместе с нами",
    accent: true,
    img: { src: "/figma/product/atom-transparent.webp", w: 298, h: 217 },
  },
  {
    title: "Первый в мире тест-драйв EV в Арктике",
    text: "АТОМ добрался до Северного полюса на атомном ледоколе «50 лет Победы». 10 дней под арктическими ветрами, спуск на лёд, езда по рыхлому снегу — батарея израсходовала всего 10% заряда",
    logo: { src: "/figma/partners/event-arctic.webp", w: 136, h: 52 },
  },
  {
    title: "Тест-драйв с чемпионом «24 часов Ле-Мана»",
    text: "Алексей Басов — победитель Ле-Мана 2015 и чемпион мира по гонкам на выносливость — тестировал АТОМ на картодроме с отключенной ESP. Вердикт: «собранный, уверенно проходит повороты, динамика на высоком уровне»",
    logo: { src: "/figma/partners/event-lemans.webp", w: 72, h: 47 },
  },
  {
    title: "Инсталляция с «Силой Света» на основе ИИ",
    text: "Медиафестиваль NUR в Казани. Арт-директор Илья Балакин создал ИИ-инсталляцию вокруг АТОМа. Для большинства из 6 000 гостей это был первый контакт с брендом",
    logo: { src: "/figma/partners/event-nur.svg", w: 171, h: 18 },
  },
  {
    title: "Атом на Играх Будущего в Казани",
    text: "Международный мультиспортивный турнир, 100 000 гостей. АТОМ стоял как арт-объект на площадке — и собирал очереди на фото",
    logo: { src: "/figma/partners/event-games.webp", w: 129, h: 52 },
  },
  {
    title: "Атом на экранах московского транспорта",
    text: "Через контакты с Департаментом транспорта — ролик с АТОМом появился на медиаэкранах метро и наземного транспорта столицы",
    logo: { src: "/figma/partners/event-metro.webp", w: 133, h: 50 },
  },
  {
    title: "Ливрея от художника Need for Speed",
    text: "Художник Ciay, создающий скины для NFS, разработал кастомную ливрею для АТОМа. Показ на фестивале дрифта Grounded в Сочи и на выставке Дептранса в Манеже",
    logo: { src: "/figma/partners/event-nfs.webp", w: 127, h: 38 },
  },
  {
    title: "Центральный объект форума Касперского",
    text: "Крупнейший форум по кибербезопасности. Логичная связка: Атом ОС работает на базе шлюза Касперского — совместная история, а не рекламная интеграция",
    logo: { src: "/figma/partners/event-kaspersky.svg", w: 130, h: 25 },
  },
  {
    title: "Фестиваль DDX в парке Коломенское",
    text: "40 000 гостей, городская культура, музыка и арт. АТОМ вписался как объект среди инсталляций — минимальные затраты, максимальный контакт",
    logo: { src: "/figma/partners/event-ddx.svg", w: 140, h: 46 },
  },
];

export default function PartnersEvents() {
  return (
    <section id="events" className="relative bg-[#0a1a20] overflow-hidden">
      {/* Background image per Figma (Widget Medium) */}
      <Image
        src="/figma/product/team.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-black/40"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 py-12 md:py-16 lg:py-[60px]">
        <h2 className="font-display text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em] text-white max-w-[615px]">
          С Атом
          <br />
          никогда не скучно
        </h2>
      </div>

      {/* Carousel — bleeds to screen edges, scrollable horizontally */}
      <div className="relative z-10 pb-12 md:pb-16 overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth">
        <ul className="flex gap-3 md:gap-4 w-max pl-5 md:pl-10 pr-5 md:pr-10">
          {cards.map((c, i) => (
            <li
              key={i}
              className={`w-[300px] sm:w-[360px] md:w-[420px] h-[330px] rounded-[32px] p-5 relative overflow-hidden flex flex-col justify-between ${
                c.accent
                  ? "bg-[rgba(0,178,178,0.85)] text-white"
                  : "bg-white text-black"
              }`}
            >
              <div className="relative z-10 space-y-3 md:space-y-4">
                <h3
                  className={`font-display leading-tight font-medium ${
                    c.accent
                      ? "text-white text-xl md:text-2xl lg:text-[28px]"
                      : "text-[#16272d] text-lg md:text-xl lg:text-[24px]"
                  }`}
                >
                  {c.title}
                </h3>
                <p
                  className={`leading-[1.35] ${
                    c.accent
                      ? "text-white text-sm md:text-base lg:text-[20px]"
                      : "text-black text-sm md:text-base lg:text-[18px]"
                  }`}
                >
                  {c.text}
                </p>
              </div>
              {c.logo && (
                <Image
                  src={c.logo.src}
                  alt=""
                  width={c.logo.w}
                  height={c.logo.h}
                  className="relative z-10 object-contain"
                />
              )}
              {c.img && (
                <Image
                  src={c.img.src}
                  alt=""
                  width={c.img.w}
                  height={c.img.h}
                  className="absolute bottom-0 right-0 pointer-events-none"
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 pb-12 md:pb-16 flex justify-center">
        <a
          href="#apply"
          className="inline-flex items-center justify-center h-12 md:h-[71px] w-full max-w-[442px] px-6 md:px-10 rounded-2xl md:rounded-[20px] bg-black border-2 border-[#9747ff] text-white text-base md:text-[24px] font-light hover:shadow-[0_0_24px_rgba(151,71,255,0.5)] transition"
        >
          Занять место
        </a>
      </div>
    </section>
  );
}
