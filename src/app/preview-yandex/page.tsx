export const metadata = {
  title: "Preview — Yandex Forms iframe",
};

export default function PreviewYandex() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4">
      <div className="mx-auto max-w-[700px]">
        <h1 className="font-display text-3xl md:text-4xl uppercase tracking-tight mb-4">
          Превью: форма Яндекса в iframe
        </h1>
        <p className="text-white/70 mb-8 leading-relaxed">
          Именно так она выглядела бы на странице `/partners` вместо текущей
          кастомной формы. Параметры: фон тёмный, ширина 100%, высота фикс.
          Стилизация внутри iframe ограничена — только то, что даёт админка
          Яндекса.
        </p>

        <div className="rounded-[32px] overflow-hidden border border-white/10 bg-white">
          <iframe
            src="https://forms.yandex.ru/u/69e5ed6b068ff0764f001311/?iframe=1"
            title="Форма заявки (Яндекс)"
            width="100%"
            height="900"
            frameBorder="0"
            className="block w-full"
          />
        </div>

        <p className="mt-8 text-sm text-white/50 leading-relaxed">
          Плюсы: данные идут прямо в Яндекс, минуя наш сервер (compliance). Можно
          дополнительно настроить webhook в админке Яндекса, и заявка
          автоматом падает к нам в Telegram.
          <br />
          <br />
          Минусы: выглядит не как наш сайт, отступы и шрифт внутри iframe
          яндексовские.
        </p>
      </div>
    </main>
  );
}
