import Image from "next/image";
import {
  IconDzen,
  IconRutube,
  IconTelegram,
  IconVK,
} from "./SocialIcons";

const socials = [
  { label: "VK", href: "https://vk.com/atom_auto", Icon: IconVK },
  { label: "Telegram", href: "https://t.me/atom_auto", Icon: IconTelegram },
  { label: "Дзен", href: "https://dzen.ru/atom_auto", Icon: IconDzen },
  { label: "Rutube", href: "https://rutube.ru/channel/atom_auto", Icon: IconRutube },
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
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="h-[56px] w-[56px] md:h-[67px] md:w-[67px] rounded-2xl bg-white text-black flex items-center justify-center hover:brightness-110 transition"
              >
                <Icon className="w-[58%] h-[58%]" />
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
