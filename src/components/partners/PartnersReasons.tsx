import { FrostedCard } from "@/components/ui/FrostedCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    num: "01",
    title: "СМИ приходят сами",
    desc: "Атом — горячая тема для\u00A0медиа. Каждое появление автомобиля генерирует публикации без\u00A0медиабюджета. Ваш бренд оказывается рядом.",
  },
  {
    num: "02",
    title: "Доступ раньше всех",
    desc: "Ваша аудитория увидит и потрогает автомобиль до\u00A0старта розничных продаж. Это эксклюзив, который вы дарите своему сообществу.",
  },
  {
    num: "03",
    title: "Автомобиль-контент",
    desc: "Распашные двери, руль\nс экраном, проекция дополненной реальности на лобовом стекле, голосовой ассистент — каждая деталь привлекает интерес.",
  },
  {
    num: "04",
    title: "Вы — про аудиторию, остальное на нас",
    desc: "Концепция, продакшн, логистика, съёмка, информационная поддержка — мы закрываем всю цепочку. Вы фокусируетесь\nна своих людях.",
  },
];

export default function PartnersReasons() {
  return (
    <section className="relative bg-gray-0 text-black overflow-hidden">
      {/* Light gradient per Figma */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(235,239,242,1) 0%, rgba(220,225,230,1) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
          <SectionHeading className="text-[36px] md:text-[48px] lg:text-[56px] max-w-[700px]">
            4 причины
            <br />
            сказать&nbsp;— <span className="text-teal">да</span>
          </SectionHeading>
          <p className="max-w-[328px] text-base md:text-lg lg:text-[20px] leading-[1.4]">
            Каждая интеграция с&nbsp;Атомом — это готовый инфоповод, который
            работает на&nbsp;вас.
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r) => (
            <FrostedCard
              key={r.num}
              as="article"
              variant="light"
              className="p-5 min-h-[280px] md:min-h-[327px] flex flex-col gap-4"
            >
              <p className="text-[13px] tracking-[0.08em] uppercase font-medium text-black/60">
                {r.num}
              </p>
              <h3 className="font-display text-xl md:text-2xl font-medium leading-tight text-black">
                {r.title}
              </h3>
              <p className="mt-3 text-[17px] md:text-lg lg:text-[20px] text-black/80 leading-[1.4] whitespace-pre-line">
                {r.desc}
              </p>
            </FrostedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
