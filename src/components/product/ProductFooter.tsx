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

// Inline SVG icons — hand-coded, 24×24 viewBox, drawn to match the Figma
// design (VK, Telegram, Dzen, YouTube/Rutube). Fills are black; the tile
// background is #ebeff2 so they read correctly.
const VkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#000"
      d="M13.162 17.584c-5.354 0-8.407-3.672-8.534-9.779h2.683c.089 4.482 2.067 6.382 3.634 6.774V7.805h2.528v3.87c1.547-.165 3.173-1.929 3.72-3.87h2.528c-.42 2.39-2.185 4.154-3.439 4.88 1.254.587 3.264 2.125 4.031 4.899h-2.784c-.6-1.867-2.09-3.31-4.056-3.503v3.503h-.311z"
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

const DzenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#000"
      d="M12.68 12.67c1.89-1.88 2.02-4.28 2.17-9.52-1.9.15-4.3.28-6.19 2.17-1.9 1.89-2.02 4.29-2.18 9.52 1.9-.15 4.3-.28 6.2-2.17zm-.01-2.51c-1.89 1.89-4.28 2.02-9.52 2.17.16 1.9.28 4.3 2.18 6.19 1.89 1.9 4.28 2.02 9.52 2.18-.16-1.91-.28-4.31-2.17-6.2-1.9-1.88-4.31-2.01-9.53-2.17h9.52zm9.79 0h-9.52c1.89 1.9 4.28 2.02 9.52 2.18-.15 1.9-.28 4.3-2.17 6.19-1.9 1.9-4.29 2.02-9.52 2.18.15-1.91.28-4.31 2.17-6.2 1.89-1.88 4.28-2.01 9.52-2.17v-2.18zm-9.52 0c5.24-.15 7.63-.28 9.52-2.17 1.9-1.89 2.03-4.29 2.18-9.52-5.23.15-7.63.28-9.52 2.17-1.9 1.89-2.03 4.29-2.18 9.52z"
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
  { href: "https://vk.com/atomauto", label: "VK", Icon: VkIcon },
  { href: "https://t.me/atomauto", label: "Telegram", Icon: TelegramIcon },
  { href: "https://dzen.ru/atomauto", label: "Dzen", Icon: DzenIcon },
  { href: "https://rutube.ru/atomauto", label: "Rutube", Icon: PlayIcon },
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
          {/* Background — Figma uses a video loop of dark Atom car body with
              cyan ambient lighting. We layer: a dark navy base, a cyan radial
              glow (bottom-left), and a subtle vignette — matching the mood
              without relying on an aspect-ratio-mismatched photo. */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(110% 60% at 15% 95%, rgba(0,220,220,0.35) 0%, rgba(0,120,140,0.2) 25%, rgba(10,25,35,0) 60%), linear-gradient(180deg, #091218 0%, #0c1a22 45%, #050b10 100%)",
            }}
          />
          {/* Soft highlight curve to suggest a car body edge */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(90% 40% at 85% 50%, rgba(120,200,220,0.12) 0%, rgba(0,0,0,0) 70%)",
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

          {/* Bottom: 4 social icon tiles */}
          <div className="relative z-10 flex gap-[10px] items-end w-full">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="relative flex-1 aspect-square bg-[#ebeff2] rounded-2xl flex items-center justify-center hover:brightness-110 transition text-black"
              >
                <Icon />
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
