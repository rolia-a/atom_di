import Image from "next/image";

// Figma node 600:43490 — desktop frame 1440×820
// All positions are absolute pixel coordinates from the design, matched 1:1.

const productLinks = [
  "Модели в наличии",
  "Конфигуратор",
  "Технологии",
  "Карта зарядок",
  "Корпоративным клиентам",
];

const companyLinks = [
  { label: "Наши ценности", active: true },
  { label: "Вакансии", active: false },
  { label: "Патенты", active: false },
  { label: "Пресс-центр", active: false },
];

const communityLinks = ["Наши ценности", "Вакансии"];

const contacts = [
  { email: "support@atom.auto", label: "Отдел поддержки", copy: false },
  { email: "hr@atom.auto", label: "Отдел персонала", copy: true },
  { email: "compliance@atom.auto", label: "Линия доверия Комплаенса", copy: false },
];

const socials = [
  { href: "https://vk.com/atomauto", label: "VK", icon: "/figma/product/footer/vk.svg" },
  { href: "https://t.me/atomauto", label: "Telegram", icon: "/figma/product/footer/telegram.svg" },
  { href: "https://dzen.ru/atomauto", label: "Dzen", icon: "/figma/product/footer/dzen-1.svg" },
  { href: "https://rutube.ru/atomauto", label: "Rutube", icon: "/figma/product/footer/youtube.svg" },
];

export default function ProductFooter() {
  return (
    <footer className="relative bg-black text-white w-full overflow-hidden">
      {/* Centered 1440 frame with 820px absolute positioning, matching Figma */}
      <div className="relative mx-auto w-full max-w-[1440px] h-[820px]">
        {/* Big ATOM wordmark — left:16 top:16 w:1408 h:211 */}
        <div className="absolute left-4 top-4 w-[calc(100%-32px)] h-[211px]">
          <Image
            src="/figma/product/footer/atom-logo.svg"
            alt="ATOM"
            fill
            className="object-contain object-left"
            priority={false}
          />
        </div>

        {/* Col 1: Продукт — left:16 top:358 w:188 */}
        <div className="absolute left-4 top-[358px] w-[188px] flex flex-col gap-6">
          <h3 className="font-display text-[24px] font-medium leading-[1.2] text-white whitespace-nowrap">
            Продукт
          </h3>
          <ul className="flex flex-col gap-3 font-body text-[16px] leading-[1.3] text-[#7f7f7f]">
            {productLinks.map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Col 2: Компания — left:calc(16.67%+12px) top:358 w:188 */}
        <div
          className="absolute top-[358px] w-[188px] flex flex-col gap-6"
          style={{ left: "calc(16.67% + 12px)" }}
        >
          <h3 className="font-display text-[24px] font-medium leading-[1.2] text-white whitespace-nowrap">
            Компания
          </h3>
          <ul className="flex flex-col gap-3 font-body text-[16px] leading-[1.3] w-[116px]">
            {companyLinks.map((l) => (
              <li key={l.label}>
                <a href="#" className={l.active ? "text-white" : "text-[#7f7f7f]"}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Сообщество — left:calc(33.33%+8px) top:358 */}
        <div
          className="absolute top-[358px] flex flex-col gap-6"
          style={{ left: "calc(33.33% + 8px)" }}
        >
          <h3 className="font-display text-[24px] font-medium leading-[1.2] text-white whitespace-nowrap">
            Сообщество
          </h3>
          <ul className="flex flex-col gap-3 font-body text-[16px] leading-[1.3] text-[#7f7f7f] w-[116px]">
            {communityLinks.map((l) => (
              <li key={l}><a href="#">{l}</a></li>
            ))}
          </ul>
        </div>

        {/* Col 4: Phone + contacts — left:calc(50%+4px) top:358 */}
        <div
          className="absolute top-[358px] flex flex-col gap-6"
          style={{ left: "calc(50% + 4px)" }}
        >
          <p className="font-display text-[24px] font-medium leading-[1.2] text-white whitespace-nowrap">
            8 (800) 301-93-95
          </p>
          <ul className="flex flex-col gap-3">
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

        {/* Newsletter card — left:calc(75%-2px) top:326 w:346 h:458 */}
        <div
          className="absolute top-[326px] w-[346px] h-[458px] rounded-[32px] overflow-hidden flex flex-col justify-between px-6 py-8"
          style={{ left: "calc(75% - 2px)" }}
        >
          {/* Background — dark car body with cyan ambient lighting, matching
              the mood of the Figma video (charging port closeup, shifted so
              the cyan glow sits near the bottom-left). */}
          <Image
            src="/figma/product/charging/port.webp"
            alt=""
            fill
            sizes="346px"
            className="object-cover object-[40%_60%] scale-[1.15]"
            priority={false}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.3) 100%)",
            }}
          />

          {/* Top: title + description */}
          <div className="relative z-10 flex flex-col gap-5 w-full">
            <h3 className="font-display text-[24px] font-medium leading-[1.2] text-white">
              Узнавайте новости Атома первым
            </h3>
            <p className="font-body text-[16px] leading-[1.3] text-white/50">
              Подписывайтесь на наши соцсети и получайте информацию о старте
              продаж, мероприятиях и другие новости
            </p>
          </div>

          {/* Bottom: 4 social icons */}
          <div className="relative z-10 flex gap-[10px] items-end w-full">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex-1 aspect-square bg-[#ebeff2] rounded-2xl flex items-center justify-center p-1 hover:brightness-110 transition"
              >
                <span className="relative block w-8 h-8">
                  <Image
                    src={s.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom: Аэро credit — left:16 top:660 */}
        <div className="absolute left-4 top-[660px] flex flex-col gap-6">
          <p className="font-body text-[16px] leading-[1.3] text-[#7f7f7f] whitespace-nowrap">
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

        {/* Bottom: Кама copyright — centered at left:calc(29.17%+13px), w:362, top:660 */}
        <div
          className="absolute top-[660px] w-[362px] flex flex-col gap-6 text-[#7f7f7f]"
          style={{
            left: "calc(29.17% + 13px)",
            transform: "translateX(-50%)",
          }}
        >
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

        {/* Bottom: Legal links — left:calc(50%+4px) top:660 */}
        <ul
          className="absolute top-[660px] flex flex-col gap-3 font-body text-[16px] leading-[1.3] text-[#7f7f7f]"
          style={{ left: "calc(50% + 4px)" }}
        >
          <li><a href="#" className="whitespace-nowrap">Политика конфиденциальности</a></li>
          <li><a href="#" className="whitespace-nowrap">Пользовательские соглашения</a></li>
          <li><a href="#" className="whitespace-nowrap">Оферта</a></li>
        </ul>
      </div>
    </footer>
  );
}
