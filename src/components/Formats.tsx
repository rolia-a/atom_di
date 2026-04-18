const formats = [
  {
    num: "01",
    title: "Аренда Атома",
    desc: "Автомобиль под вашу активность: ивент, промо, контент. Брендирование и логистика — на нас.",
  },
  {
    num: "02",
    title: "Интеграция продукта",
    desc: "Мы придумываем механику под ваше сообщество, создаём контент и обеспечиваем PR.",
  },
  {
    num: "03",
    title: "Брендированный автопробег",
    desc: "Авто становятся мобильными медиа-носителями — по городу или между точками вашего комьюнити.",
  },
  {
    num: "04",
    title: "Событие под ключ",
    desc: "Организуем мероприятие, выставку или фан-зону с Атом как центральным объектом.",
  },
];

export default function Formats() {
  return (
    <section id="formats" className="relative bg-black">
      <div className="mx-auto max-w-[1408px] px-4 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="font-display text-3xl md:text-4xl lg:text-[32px] font-medium leading-[1.2]">
            Все за наш счет!
          </h2>
          <h3 className="font-display text-3xl md:text-4xl lg:text-[32px] font-medium leading-[1.2]">
            Что именно?
          </h3>
          <p className="mt-3 max-w-md text-white/70 leading-snug">
            Четыре формата сотрудничества. Мы подберём подходящий — или придумаем
            новый для вас.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {formats.map((f) => (
            <article
              key={f.num}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#0b0b0b] border border-white/5 hover:border-white/20 transition"
            >
              <div
                className="absolute inset-0 opacity-60 group-hover:opacity-80 transition"
                style={{
                  background:
                    "radial-gradient(70% 50% at 50% 35%, rgba(40,100,110,0.4) 0%, rgba(0,0,0,0) 70%), linear-gradient(180deg, #0a1216 0%, #000 100%)",
                }}
              />
              <div className="relative z-10 flex flex-col h-full p-5">
                <span className="text-xs text-white/60">{f.num}</span>
                <h3 className="mt-3 font-display text-xl md:text-2xl font-medium leading-tight">
                  {f.title}
                </h3>
                <p className="mt-auto text-sm text-white/70 leading-snug">
                  {f.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-white/50">
          Концепция, реализация, автомобиль, контент и продвижение входят в
          каждый формат
        </p>
      </div>
    </section>
  );
}
