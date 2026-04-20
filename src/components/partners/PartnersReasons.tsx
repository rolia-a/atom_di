const reasons = [
  {
    num: "01",
    title: "СМИ приходят сами",
    desc: "Атом — горячая тема для медиа. Каждое появление автомобиля генерирует публикации без медиабюджета. Ваш бренд оказывается рядом",
  },
  {
    num: "02",
    title: "Доступ раньше всех",
    desc: "Ваша аудитория увидит и потрогает автомобиль до старта розничных продаж. Это эксклюзив, который вы дарите своему сообществу",
  },
  {
    num: "03",
    title: "Автомобиль-контент",
    desc: "Распашные двери, руль-штурвал с экраном, AR-проекция, кибербезопасность от Касперского — каждая деталь провоцирует камер",
  },
  {
    num: "04",
    title: "Вы — про аудиторию, остальное на нас",
    desc: "Концепция, продакшн, логистика, съёмка, информационная поддержка — мы закрываем всю цепочку. Вы фокусируетесь на своих людях",
  },
];

export default function PartnersReasons() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Teal radial gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 70% at 50% 50%, rgba(0,178,178,0.35) 0%, rgba(0,178,178,0.08) 45%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <h2 className="font-display text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em] max-w-[700px]">
            4 причины
            <br />
            сказать&nbsp;— <span className="text-[#00b2b2]">да</span>
          </h2>
          <p className="max-w-[328px] text-base md:text-lg lg:text-[20px] leading-[1.4]">
            Каждая интеграция с Атом — это готовый инфоповод, который
            работает на вас
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r) => (
            <article
              key={r.num}
              className="rounded-[32px] bg-white/85 backdrop-blur-sm p-5 min-h-[280px] md:min-h-[327px] flex flex-col gap-4 text-black"
            >
              <p className="text-[13px] tracking-[0.08em] uppercase font-medium text-black/60">
                {r.num}
              </p>
              <h3 className="font-display text-xl md:text-2xl font-medium leading-tight text-black">
                {r.title}
              </h3>
              <p className="mt-auto text-sm md:text-base lg:text-[20px] text-black/80 leading-[1.4]">
                {r.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
