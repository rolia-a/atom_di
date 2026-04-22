import Image from "next/image";

const columns = [
  {
    title: "Продукт",
    links: [
      { label: "Модели в наличии", active: false },
      { label: "Конфигуратор", active: false },
      { label: "Технологии", active: false },
      { label: "Карта зарядок", active: false },
      { label: "Корпоративным клиентам", active: false },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "Наши ценности", active: true },
      { label: "Вакансии", active: false },
      { label: "Патенты", active: false },
      { label: "Пресс-центр", active: false },
    ],
  },
  {
    title: "Сообщество",
    links: [
      { label: "Наши ценности", active: false },
      { label: "Вакансии", active: false },
    ],
  },
];

const contacts = [
  { email: "support@atom.auto", label: "Отдел поддержки", copy: false },
  { email: "hr@atom.auto", label: "Отдел персонала", copy: true },
  { email: "compliance@atom.auto", label: "Линия доверия Комплаенса", copy: false },
];

const socials = [
  { href: "https://vk.com/atomauto", label: "VK", icon: "/figma/product/footer/vk.svg", inset: "inset-[28.56%_12.39%_27.22%_9.38%]" },
  { href: "https://t.me/atomauto", label: "Telegram", icon: "/figma/product/footer/telegram.svg", inset: "inset-[20.58%_21.88%_22.13%_9.38%]" },
  { href: "https://dzen.ru/atomauto", label: "Dzen", icon: "/figma/product/footer/dzen-1.svg", inset: "inset-[18.75%]" },
  { href: "https://rutube.ru/atomauto", label: "Rutube", icon: "/figma/product/footer/youtube.svg", inset: "inset-[23.75%_12.5%]" },
];

export default function ProductFooter() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 pt-4 pb-10">
        {/* Big ATOM wordmark */}
        <div className="relative h-[140px] md:h-[211px] w-full">
          <Image
            src="/figma/product/footer/atom-logo.svg"
            alt="ATOM"
            fill
            className="object-contain object-left"
            priority={false}
          />
        </div>

        {/* Main grid: 4 text columns + newsletter card (spans right) */}
        <div className="mt-[131px] grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-10 items-start">
          {/* Col 1: Продукт */}
          <div className="md:col-span-2 w-[188px]">
            <h3 className="font-display text-[24px] font-medium leading-[1.2] text-white">
              {columns[0].title}
            </h3>
            <ul className="mt-6 flex flex-col gap-3 font-body text-[16px] leading-[1.3]">
              {columns[0].links.map((l) => (
                <li key={l.label}>
                  <a href="#" className={l.active ? "text-white" : "text-[#7f7f7f]"}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Компания */}
          <div className="md:col-span-2 w-[188px]">
            <h3 className="font-display text-[24px] font-medium leading-[1.2] text-white">
              {columns[1].title}
            </h3>
            <ul className="mt-6 flex flex-col gap-3 font-body text-[16px] leading-[1.3]">
              {columns[1].links.map((l) => (
                <li key={l.label}>
                  <a href="#" className={l.active ? "text-white" : "text-[#7f7f7f]"}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Сообщество */}
          <div className="md:col-span-2">
            <h3 className="font-display text-[24px] font-medium leading-[1.2] text-white whitespace-nowrap">
              {columns[2].title}
            </h3>
            <ul className="mt-6 flex flex-col gap-3 font-body text-[16px] leading-[1.3]">
              {columns[2].links.map((l) => (
                <li key={l.label}>
                  <a href="#" className={l.active ? "text-white" : "text-[#7f7f7f]"}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Phone + emails */}
          <div className="md:col-span-3">
            <p className="font-display text-[24px] font-medium leading-[1.2] text-white whitespace-nowrap">
              8 (800) 301-93-95
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {contacts.map((c) => (
                <li key={c.email} className="relative flex flex-col gap-[2px]">
                  <a
                    href={`mailto:${c.email}`}
                    className="font-body text-[16px] leading-[1.3] text-white"
                  >
                    {c.email}
                  </a>
                  <span className="font-body text-[12px] leading-[1.4] tracking-[-0.02em] text-[#7f7f7f] whitespace-nowrap">
                    {c.label}
                  </span>
                  {c.copy && (
                    <button
                      type="button"
                      aria-label="Скопировать адрес"
                      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 rounded-full p-2 flex items-center"
                    >
                      <Image
                        src="/figma/product/footer/copy.svg"
                        alt=""
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Newsletter card with car background image */}
          <div className="md:col-span-3 md:col-start-10">
            <div className="relative h-[458px] w-full md:w-[346px] ml-auto rounded-[32px] overflow-hidden flex flex-col justify-between px-6 py-8">
              {/* Background car image */}
              <Image
                src="/figma/product/atomid/ecosystem-bg.webp"
                alt=""
                fill
                sizes="346px"
                className="object-cover"
                priority={false}
              />
              {/* Darkening overlay for text legibility */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.55) 100%)",
                }}
              />

              {/* Title + description (top) */}
              <div className="relative z-10 flex flex-col gap-5">
                <h3 className="font-display text-[24px] font-medium leading-[1.2] text-white">
                  Узнавайте новости Атома первым
                </h3>
                <p className="font-body text-[16px] leading-[1.3] text-white/50">
                  Подписывайтесь на наши соцсети и получайте информацию о старте
                  продаж, мероприятиях и другие новости
                </p>
              </div>

              {/* Social icons (bottom) */}
              <div className="relative z-10 flex gap-[10px] items-end w-full">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex-1 aspect-square bg-[#ebeff2] rounded-2xl flex items-center justify-center p-1 backdrop-blur-[20px] hover:brightness-110 transition"
                  >
                    <span className="relative w-8 h-8 block">
                      <Image
                        src={s.icon}
                        alt=""
                        fill
                        className={`object-contain ${s.inset}`}
                      />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: Aero (left) + copyright (center) + legal links (right) */}
        <div className="mt-[90px] grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-6 text-[#7f7f7f]">
          <div className="md:col-span-2 flex flex-col gap-6">
            <p className="font-body text-[16px] leading-[1.3] whitespace-nowrap">
              Разработано в Аэро
            </p>
            <div className="relative h-[14px] w-[155px]">
              <Image
                src="/figma/product/footer/aero.svg"
                alt="Аэро"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <p className="font-body text-[16px] leading-[1.3] whitespace-nowrap">
              2023, АО «Кама» образовано 5 августа 2021
            </p>
            <p className="font-body text-[12px] leading-[1.4] tracking-[-0.02em]">
              Аккредитовано в Минцифры РФ на основании решения о предоставлении
              государственной аккредитации организации, осуществляющей деятельность
              в области информационных технологий от 27 апреля 2022 года № АО-20
              220 427–4 340 137 495–3
            </p>
          </div>

          <ul className="md:col-span-3 md:col-start-7 flex flex-col gap-3 font-body text-[16px] leading-[1.3]">
            <li><a href="#" className="whitespace-nowrap">Политика конфиденциальности</a></li>
            <li><a href="#" className="whitespace-nowrap">Пользовательские соглашения</a></li>
            <li><a href="#" className="whitespace-nowrap">Оферта</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
