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
    <section className="relative overflow-hidden text-black">
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/figma/product/reviews-bg.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[385px]"
        style={{
          background:
            "linear-gradient(180deg, #ddf1ff 0%, rgba(221,241,255,0) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1408px] px-4 py-20 lg:py-24">
        <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em] max-w-3xl">
          Отзывы реальных пользователей
        </h2>

        <div className="mt-[380px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="rounded-[32px] bg-white p-6 min-h-[314px] flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-xl lg:text-2xl font-medium leading-tight text-[#16272d]">
                  {r.title}
                </h3>
                <p className="mt-4 text-sm text-black/80 leading-snug">
                  {r.text}
                </p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/figma/product/reviews-logo.webp"
                alt=""
                className="mt-6 h-[52px] w-[136px] object-contain"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
