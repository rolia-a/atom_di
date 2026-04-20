import Image from "next/image";

const socials = [
  {
    label: "VK",
    href: "https://vk.com/atom_auto",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-[60%] h-[60%]" aria-hidden>
        <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm9.9 22.9c.9.9 1.85 1.73 2.65 2.72.36.44.7.9.95 1.42.36.74.04 1.55-.62 1.6h-4.11c-1.06.09-1.9-.34-2.61-1.07-.57-.58-1.1-1.2-1.65-1.8-.22-.25-.46-.48-.74-.66-.56-.37-1.04-.25-1.36.34-.33.6-.4 1.27-.43 1.94-.05.98-.34 1.24-1.33 1.29-2.1.1-4.1-.23-5.95-1.29-1.64-.94-2.91-2.27-4.02-3.78-2.16-2.95-3.82-6.18-5.3-9.51-.34-.75-.1-1.15.73-1.17 1.34-.02 2.68-.02 4.02 0 .56.01.93.33 1.15.86.73 1.79 1.62 3.5 2.74 5.09.3.42.6.84 1.04 1.14.48.33.85.22 1.07-.31.14-.34.2-.7.23-1.06.1-1.26.11-2.52-.08-3.77-.11-.78-.55-1.28-1.33-1.43-.4-.08-.34-.22-.15-.45.34-.4.66-.65 1.3-.65h4.65c.76.15.93.49 1.03 1.26v5.17c-.01.3.14 1.18.68 1.37.43.14.71-.2 1-.48 1.1-1.18 1.88-2.58 2.58-4.01.31-.64.58-1.3.84-1.96.19-.49.5-.73 1.05-.72h4.47c.13 0 .26 0 .39.02.76.13.97.45.73 1.2-.37 1.18-1.11 2.16-1.82 3.14-.76 1.05-1.58 2.07-2.33 3.14-.68.98-.63 1.47.27 2.32z" />
      </svg>
    ),
  },
  {
    label: "Telegram",
    href: "https://t.me/atom_auto",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-[58%] h-[58%]" aria-hidden>
        <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10.28 13.36l-3.44 16.23c-.26 1.15-.94 1.43-1.9.89l-5.25-3.87-2.54 2.44c-.28.28-.51.51-1.05.51l.37-5.35 9.74-8.8c.42-.38-.09-.59-.66-.21l-12.04 7.58-5.18-1.62c-1.13-.35-1.15-1.12.23-1.66l20.25-7.81c.94-.34 1.76.22 1.47 1.67z" />
      </svg>
    ),
  },
  {
    label: "Дзен",
    href: "https://dzen.ru/atom_auto",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-[55%] h-[55%]" aria-hidden>
        <path d="M24 4c.44 6.3.72 9 2.5 10.78C28.28 16.56 30.98 16.84 37.28 17.28c.48.04.48.92 0 .96-6.3.44-9 .72-10.78 2.5-1.78 1.78-2.06 4.48-2.5 10.78-.04.48-.92.48-.96 0-.44-6.3-.72-9-2.5-10.78-1.78-1.78-4.48-2.06-10.78-2.5-.48-.04-.48-.92 0-.96 6.3-.44 9-.72 10.78-2.5C22.32 13 22.6 10.3 23.04 4c.04-.48.92-.48.96 0z" />
      </svg>
    ),
  },
  {
    label: "Rutube",
    href: "https://rutube.ru/channel/atom_auto",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-[60%] h-[60%]" aria-hidden>
        <rect x="4" y="12" width="40" height="24" rx="6" />
        <path d="M20 19l10 5-10 5v-10z" fill="#fff" />
      </svg>
    ),
  },
];

export default function PartnersFooter() {
  return (
    <footer className="relative bg-black overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 pt-12 md:pt-[120px] pb-8">
        <div className="relative w-full h-[80px] md:h-[140px] lg:h-[211px]">
          <Image
            src="/figma/partners/footer-atom.svg"
            alt="ATOM"
            fill
            className="object-contain object-left"
          />
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-end">
          <div className="space-y-4 max-w-[735px]">
            <p className="font-body text-lg md:text-xl text-[#7f7f7f] leading-snug">
              2023, АО «Кама» образовано 5 августа 2021
            </p>
            <p className="text-xs md:text-[13px] tracking-normal uppercase text-[#7b7473] leading-relaxed">
              Аккредитовано в Минцифры РФ на основании решения о предоставлении
              государственной аккредитации организации, осуществляющей
              деятельность в области информационных технологий от 27 апреля
              2022 года № АО-20 220 427–4 340 137 495–3
            </p>
          </div>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="h-[56px] w-[56px] md:h-[67px] md:w-[67px] rounded-2xl bg-white text-black flex items-center justify-center hover:brightness-110 transition"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 md:mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[#7b7473] text-sm md:text-lg">
          <a href="#" className="hover:text-white transition">
            Политика конфиденциальности
          </a>
          <a href="#" className="hover:text-white transition">
            Пользовательские соглашения
          </a>
          <a href="#" className="hover:text-white transition">
            Оферта
          </a>
        </div>
      </div>
    </footer>
  );
}
