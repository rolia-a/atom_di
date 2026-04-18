import Image from "next/image";

const columns = [
  {
    title: "Продукт",
    links: [
      "Модели в наличии",
      "Конфигуратор",
      "Технологии",
      "Карта зарядок",
      "Корпоративным клиентам",
    ],
  },
  {
    title: "Компания",
    links: ["Наши ценности", "Вакансии", "Патенты", "Пресс-центр"],
  },
  {
    title: "Сообщество",
    links: ["Наши ценности", "Вакансии"],
  },
];

const contacts = [
  { email: "support@atom.auto", label: "Отдел поддержки" },
  { email: "hr@atom.auto", label: "Отдел персонала" },
  { email: "compliance@atom.auto", label: "Линия доверия Комплаенса" },
];

export default function ProductFooter() {
  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Big ATOM logotype */}
      <div className="mx-auto max-w-[1408px] px-4 pt-8 pb-10">
        <div className="relative h-[140px] md:h-[211px] w-full">
          <Image
            src="/figma/product/footer-atom.svg"
            alt="ATOM"
            fill
            className="object-contain object-left"
            priority={false}
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1408px] px-4 pb-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-display text-2xl font-medium">{col.title}</h3>
            <ul className="mt-6 space-y-3 text-[#7f7f7f]">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-white transition">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="font-display text-2xl font-medium">8 (800) 301-93-95</p>
          <ul className="mt-6 space-y-4">
            {contacts.map((c) => (
              <li key={c.email}>
                <a href={`mailto:${c.email}`} className="text-white hover:text-[#00ffff] transition">
                  {c.email}
                </a>
                <p className="text-xs text-[#7f7f7f] mt-0.5">{c.label}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter card */}
        <div className="col-span-2 md:col-span-4 lg:col-span-1 relative rounded-[32px] overflow-hidden p-8 min-h-[360px] flex flex-col justify-between"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 80%, rgba(0,200,220,0.35) 0%, rgba(0,0,0,0) 70%), linear-gradient(180deg, #0a1418 0%, #000 100%)",
          }}
        >
          <div>
            <h3 className="font-display text-2xl font-medium">Узнавайте новости Атома первым</h3>
            <p className="mt-4 text-white/50 leading-snug">
              Подписывайтесь на наши соцсети и получайте информацию о старте
              продаж, мероприятиях и другие новости
            </p>
          </div>
          <div className="flex gap-2">
            {["VK", "TG", "YT", "R"].map((s) => (
              <button
                key={s}
                type="button"
                aria-label={s}
                className="flex-1 aspect-square rounded-2xl bg-[#ebeff2] text-black flex items-center justify-center font-medium hover:brightness-110 transition"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1408px] px-4 pb-10 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-[#7f7f7f] text-sm">
        <div className="space-y-2">
          <p>2023, АО «Кама» образовано 5 августа 2021</p>
          <p className="text-xs">
            Аккредитовано в Минцифры РФ на основании решения о предоставлении
            государственной аккредитации организации, осуществляющей деятельность
            в области информационных технологий от 27 апреля 2022 года № АО-20
            220 427–4 340 137 495–3
          </p>
        </div>
        <ul className="space-y-2">
          <li><a href="#" className="hover:text-white transition">Политика конфиденциальности</a></li>
          <li><a href="#" className="hover:text-white transition">Пользовательские соглашения</a></li>
          <li><a href="#" className="hover:text-white transition">Оферта</a></li>
        </ul>
        <div>
          <p>Разработано в Аэро</p>
        </div>
      </div>
    </footer>
  );
}
