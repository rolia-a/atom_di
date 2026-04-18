const reasons = [
  {
    title: "СМИ приходят сами",
    desc: "Атом — горячая тема для медиа. Каждое появление автомобиля генерирует публикации без медиабюджета. Ваш бренд оказывается рядом",
  },
  {
    title: "Доступ раньше всех",
    desc: "Ваша аудитория увидит и потрогает автомобиль до старта розничных продаж. Это эксклюзив, который вы дарите своему сообществу",
  },
  {
    title: "Автомобиль-контент",
    desc: "Распашные двери, руль-штурвал с экраном, AR-проекция, кибербезопасность от Касперского — каждая деталь провоцирует камер",
  },
  {
    title: "Вы — про аудиторию, остальное на нас",
    desc: "Концепция, продакшн, логистика, съёмка, информационная поддержка — мы закрываем всю цепочку. Вы фокусируетесь на своих людях",
  },
];

export default function PartnersReasons() {
  return (
    <section className="relative bg-white text-black">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <h2 className="font-display text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em] max-w-[657px]">
            4 причины сказать <span className="text-[#00b2b2]">— да</span>
          </h2>
          <p className="max-w-[328px] text-base md:text-lg lg:text-xl leading-[1.4]">
            Каждая интеграция с Атом — это готовый инфоповод, который
            работает на вас
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r) => (
            <article
              key={r.title}
              className="rounded-[32px] bg-[#f4f4f4] p-5 min-h-[280px] md:min-h-[327px] flex flex-col"
            >
              <h3 className="font-display text-xl md:text-2xl font-medium leading-tight">
                {r.title}
              </h3>
              <p className="mt-auto pt-6 text-sm md:text-base lg:text-lg text-black/80 leading-[1.4]">
                {r.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
