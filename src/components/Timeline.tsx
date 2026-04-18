const steps = [
  {
    num: "01",
    title: "Заявка",
    desc: "Расскажите о своём сообществе и целях. Мы вернёмся с обратной связью в течение 24 часов",
  },
  {
    num: "02",
    title: "Стратегия",
    desc: "Вместе определяем, какой результат важен для вашей аудитории",
  },
  {
    num: "03",
    title: "Формат",
    desc: "Предлагаем конкретные идеи и механику — адаптированные под ваше сообщество",
  },
  {
    num: "04",
    title: "Продакшн",
    desc: "Воплощаем проект. Вы занимаетесь аудиторией — всё остальное на нашей стороне",
  },
  {
    num: "05",
    title: "Результат",
    desc: "Фиксируем итоги. Вы получаете контент и историю для своего комьюнити",
  },
];

export default function Timeline() {
  return (
    <section
      id="process"
      className="relative"
      style={{
        background: "linear-gradient(180deg, #f5f5f5 0%, #eaeaea 100%)",
        color: "#0a0a0a",
      }}
    >
      <div className="mx-auto max-w-[1408px] px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
          {/* Left: image + headline */}
          <div>
            <div
              className="aspect-[4/5] rounded-2xl overflow-hidden"
              style={{
                background:
                  "radial-gradient(60% 60% at 40% 40%, rgba(0,150,180,0.35) 0%, rgba(0,0,0,0) 70%), linear-gradient(180deg, #1a2a35 0%, #0b1114 100%)",
              }}
            />
            <h2 className="mt-8 font-display text-4xl md:text-5xl lg:text-[72px] leading-[1.05] tracking-tight">
              От заявки до результата —
              <br />6 недель
            </h2>
          </div>

          {/* Right: steps */}
          <ol className="space-y-10 lg:mt-12">
            {steps.map((s) => (
              <li key={s.num}>
                <span className="text-xs text-black/50">{s.num}</span>
                <h3 className="mt-1 font-display text-2xl md:text-3xl font-semibold leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-black/70 leading-snug max-w-md">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Core access block */}
        <div className="mt-16 lg:mt-24 border-t border-black/10 pt-8">
          <h3 className="font-display text-2xl md:text-3xl font-semibold">
            Доступ в «Ядро Атома»
          </h3>
          <ul className="mt-4 space-y-2 text-black/70">
            <li>— Закрытые встречи с командой и инженерами</li>
            <li>— Первые обновления и тест-драйвы ещё до релизов</li>
            <li>— Приглашения на ключевые события Атома</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
