import Image from "next/image";
import {
  IconDzen,
  IconMax,
  IconTelegram,
  IconVK,
} from "./SocialIcons";
import { CONTACTS, SOCIALS, URLS } from "@/content/site";

const socials = [
  { ...SOCIALS.vk, Icon: IconVK },
  { ...SOCIALS.telegram, Icon: IconTelegram },
  { ...SOCIALS.dzen, Icon: IconDzen },
  { ...SOCIALS.max, Icon: IconMax },
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

        <div className="mt-12 md:mt-20 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">
          <div className="space-y-4 max-w-[735px]">
            <p className="font-body text-lg md:text-xl text-gray-4 leading-snug">
              2023, АО «Кама» образовано 5 августа 2021
            </p>
            <p className="text-xs md:text-[13px] tracking-normal uppercase text-[#7b7473] leading-relaxed">
              Аккредитовано в Минцифры РФ на основании решения о предоставлении
              государственной аккредитации организации, осуществляющей
              деятельность в области информационных технологий от 27 апреля
              2022 года № АО-20 220 427–4 340 137 495–3
            </p>
          </div>

          {/* Right column nudged down so the top of the social-icons row
              lines up with the start of the "АККРЕДИТОВАНО..." paragraph
              on the left. */}
          <div className="flex flex-col gap-5 lg:items-end lg:mt-12">
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
            <div className="text-white text-sm md:text-base lg:text-right">
              <a
                href={`tel:${CONTACTS.partners.phone.tel}`}
                className="font-display text-lg md:text-xl hover:text-teal transition"
              >
                {CONTACTS.partners.phone.display}
              </a>
              <p className="mt-3 text-xs md:text-sm text-[#7b7473]">
                По срочным вопросам:
              </p>
              <a
                href={`mailto:${CONTACTS.partners.email}`}
                className="text-sm md:text-base hover:text-teal transition"
              >
                {CONTACTS.partners.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-16 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 text-[#7b7473] text-sm md:text-lg">
          <a
            href={URLS.consent}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Согласие на обработку персональных данных
          </a>
          <a
            href={URLS.privacyPolicy}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
