import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { num: "01", title: "Заявка", desc: "Расскажите о своём сообществе и целях. Мы вернёмся с обратной связью в течение 24 часов." },
  { num: "02", title: "Стратегия", desc: "Вместе определяем, какой результат важен для вашей аудитории." },
  { num: "03", title: "Формат", desc: "Предлагаем конкретные идеи и механику — адаптированные под ваше сообщество." },
  { num: "04", title: "Продакшн", desc: "Воплощаем проект. Вы занимаетесь аудиторией — всё остальное на нас." },
  { num: "05", title: "Результат", desc: "Фиксируем итоги. Вы получаете контент и историю для своего комьюнити." },
];

export default function PartnersTimeline() {
  return (
    <section className="relative bg-white text-black">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-12 md:py-16">
        <SectionHeading className="text-[36px] md:text-[48px] lg:text-[56px] max-w-[900px]">
          От заявки
          <br />
          до результата&nbsp;—
          <br />
          <span className="text-teal">5&nbsp;недель</span>
        </SectionHeading>

        {/* Titles row (above the line on desktop) */}
        <div className="mt-12 md:mt-16">
          <ol className="hidden md:grid md:grid-cols-5 md:gap-6">
            {steps.map((s) => (
              <li key={s.num}>
                <h3 className="font-display text-2xl md:text-3xl font-medium leading-tight">
                  {s.title}
                </h3>
              </li>
            ))}
          </ol>

          {/* Dashed line with numbered circles + trailing arrow */}
          <div className="hidden md:block relative mt-6">
            <svg
              aria-hidden
              viewBox="0 0 1360 24"
              preserveAspectRatio="none"
              className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-6"
            >
              <line
                x1="22"
                y1="12"
                x2="1320"
                y2="12"
                stroke="#c4c9d0"
                strokeWidth="2"
                strokeDasharray="6 8"
              />
              {/* Softer chevron — thick strokes with rounded caps/joins,
                  wider opening angle (~110°) */}
              <polyline
                points="1326,1 1334,12 1326,23"
                fill="none"
                stroke="#c4c9d0"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <ol className="relative grid grid-cols-5 gap-6">
              {steps.map((s) => (
                <li key={s.num} className="flex justify-start">
                  <div className="h-10 w-10 rounded-full bg-teal text-white font-medium flex items-center justify-center text-sm">
                    {s.num}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Descriptions */}
          <ol className="mt-6 hidden md:grid md:grid-cols-5 md:gap-6">
            {steps.map((s) => (
              <li key={s.num} className="text-sm md:text-base text-black/70 leading-snug max-w-[220px]">
                {s.desc}
              </li>
            ))}
          </ol>

          {/* Mobile: vertical list */}
          <ol className="md:hidden space-y-6">
            {steps.map((s) => (
              <li key={s.num} className="flex gap-4">
                <div className="shrink-0 h-10 w-10 rounded-full bg-teal text-white font-medium flex items-center justify-center text-sm">
                  {s.num}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-black/70 leading-snug">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
