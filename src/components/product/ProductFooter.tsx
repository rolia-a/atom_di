import Image from "next/image";
import { CONTACTS, SOCIALS } from "@/content/site";

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

const contacts = CONTACTS.emails;

// Inline SVG icons — hand-coded, 24×24 viewBox, drawn to match the Figma
// design (VK, Telegram, Dzen, YouTube/Rutube). Fills are black; the tile
// background is #ebeff2 so they read correctly.
const VkIcon = () => (
  <svg width="32" height="32" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#000"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.46.95c.18-.56 0-.95-.82-.95H20.9c-.7 0-1.02.35-1.2.74 0 0-1.39 3.24-3.36 5.33-.65.61-.92.8-1.27.8-.18 0-.45-.19-.45-.75V.95c0-.67-.2-.95-.78-.95H9.55c-.43 0-.7.32-.7.6 0 .63.98.78 1.1 2.53v3.83c0 .84-.16.99-.51.99-.92 0-3.19-3.24-4.52-6.96C4.64.3 4.38 0 3.68 0H.94C.16 0 0 .35 0 .74c0 .69.92 4.12 4.32 8.65 2.27 3.09 5.46 4.76 8.36 4.76 1.74 0 1.96-.37 1.96-1.01v-2.34c0-.74.16-.9.73-.9.41 0 1.1.19 2.72 1.69 1.86 1.77 2.17 2.56 3.21 2.56h2.74c.78 0 1.17-.37.94-1.1-.26-.72-1.14-1.78-2.31-3.05-.65-.72-1.6-1.49-1.88-1.88-.41-.5-.29-.72 0-1.15 0-.02 3.34-4.49 3.67-6.02z"
    />
  </svg>
);

const TelegramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#000"
      d="M21.57 3.2c-.31-.25-.78-.29-1.28-.11L2.77 9.81c-.56.23-.93.68-.95 1.17-.02.5.32.96.87 1.23l4.25 1.86 1.64 5.25c.06.2.18.37.34.5.04.03.08.06.12.08.05.03.1.05.16.06.11.03.22.04.34.04.25 0 .49-.09.68-.24l2.41-2.1 4.26 3.13c.24.17.52.26.8.26.6 0 1.14-.38 1.29-.95l3.04-14.9c.13-.65-.1-1.25-.46-1.56zm-12.1 11.3l-.37 2.81-.95-2.99 8.76-7.38-7.44 7.56z"
    />
  </svg>
);

// Official Yandex Dzen logo (4 lens-petals meeting at centre)
const DzenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#2C3036"
      d="M16.7 16.7c-2.2 2.27-2.36 5.1-2.55 11.3 5.78 0 9.77-.02 11.83-2.02 2-2.06 2.02-6.24 2.02-11.83-6.2.2-9.03.35-11.3 2.55M0 14.15c0 5.59.02 9.77 2.02 11.83 2.06 2 6.05 2.02 11.83 2.02-.2-6.2-.35-9.03-2.55-11.3-2.27-2.2-5.1-2.36-11.3-2.55M13.85 0C8.08 0 4.08.02 2.02 2.02.02 4.08 0 8.26 0 13.85c6.2-.2 9.03-.35 11.3-2.55 2.2-2.27 2.36-5.1 2.55-11.3m2.85 11.3C14.5 9.03 14.34 6.2 14.15 0c5.78 0 9.77.02 11.83 2.02 2 2.06 2.02 6.24 2.02 11.83-6.2-.2-9.03-.35-11.3-2.55"
    />
    <path
      fill="#ebeff2"
      d="M28 14.15v-.3c-6.2-.2-9.03-.35-11.3-2.55-2.2-2.27-2.36-5.1-2.55-11.3h-.3c-.2 6.2-.35 9.03-2.55 11.3-2.27 2.2-5.1 2.36-11.3 2.55v.3c6.2.2 9.03.35 11.3 2.55 2.2 2.27 2.36 5.1 2.55 11.3h.3c.2-6.2.35-9.03 2.55-11.3 2.27-2.2 5.1-2.36 11.3-2.55"
    />
  </svg>
);

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#000"
      d="M11.76 3.14c-2.68.01-5.85.05-8.3.35C.9 3.8.25 5.35.12 7.9.05 9.29 0 10.36 0 11.53c0 1.17.05 2.24.12 3.63.13 2.55.78 4.1 3.33 4.41 2.46.3 5.64.34 8.32.35h.01c2.68-.01 5.85-.04 8.31-.35 2.55-.31 3.2-1.86 3.33-4.41.07-1.39.13-2.46.12-3.63 0-1.17-.05-2.24-.12-3.63-.13-2.55-.78-4.1-3.33-4.41-2.46-.3-5.63-.34-8.31-.35zm-2.19 4.71l6.2 3.57-6.2 3.57V7.85z"
    />
  </svg>
);

const socials = [
  { ...SOCIALS.vk, Icon: VkIcon },
  { ...SOCIALS.telegram, Icon: TelegramIcon },
  { ...SOCIALS.dzen, Icon: DzenIcon },
  { ...SOCIALS.rutube, Icon: PlayIcon },
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
          <ul className="flex flex-col gap-3 font-body text-[16px] leading-[1.3] text-gray-4">
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
                <a href="#" className={l.active ? "text-white" : "text-gray-4"}>
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
          <ul className="flex flex-col gap-3 font-body text-[16px] leading-[1.3] text-gray-4 w-[116px]">
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
            {CONTACTS.phone.display}
          </p>
          <ul className="flex flex-col gap-3">
            {contacts.map((c) => (
              <li key={c.address} className="relative flex flex-col gap-[2px]">
                <a
                  href={`mailto:${c.address}`}
                  className="font-body text-[16px] leading-[1.3] text-white"
                >
                  {c.address}
                </a>
                <span className="font-body text-[12px] leading-[1.4] tracking-[-0.02em] text-gray-4 whitespace-nowrap">
                  {c.department}
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
          {/* Background: Atom car body (692×916, exact 346×458 aspect ratio) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/figma/product/footer/newsletter-bg.webp"
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover"
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

          {/* Bottom: 4 social icon tiles */}
          <div className="relative z-10 flex gap-[10px] items-end w-full">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="relative flex-1 aspect-square bg-gray-0 rounded-2xl flex items-center justify-center hover:brightness-110 transition text-black"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom: Аэро credit — left:16 top:660 */}
        <div className="absolute left-4 top-[660px] flex flex-col gap-6">
          <p className="font-body text-[16px] leading-[1.3] text-gray-4 whitespace-nowrap">
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
          className="absolute top-[660px] w-[362px] flex flex-col gap-6 text-gray-4"
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
          className="absolute top-[660px] flex flex-col gap-3 font-body text-[16px] leading-[1.3] text-gray-4"
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
