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
      {/* Mobile layout — full-width logo, then socials spread to screen edges,
          contact block, and legal copy. */}
      <div className="lg:hidden px-5 pt-12 pb-8 flex flex-col gap-8">
        <div className="relative w-full">
          <Image
            src="/figma/partners/footer-atom-v2.svg"
            alt="ATOM"
            width={358}
            height={55}
            className="w-full h-auto"
          />
        </div>

        {/* Socials spread across the full screen width */}
        <div className="flex justify-between gap-2">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="h-[64px] w-[64px] rounded-2xl bg-white text-black flex items-center justify-center hover:brightness-110 transition"
            >
              <Icon className="w-[58%] h-[58%]" />
            </a>
          ))}
        </div>

        <div className="text-white">
          <a
            href={`tel:${CONTACTS.partners.phone.tel}`}
            className="font-display text-xl hover:text-teal transition"
          >
            {CONTACTS.partners.phone.display}
          </a>
          <p className="mt-3 text-sm text-[#7b7473]">По срочным вопросам:</p>
          <a
            href={`mailto:${CONTACTS.partners.email}`}
            className="text-base hover:text-teal transition"
          >
            {CONTACTS.partners.email}
          </a>
        </div>

        <p className="font-body text-lg text-gray-4 leading-snug">
          2023, АО «Кама»
          <br />
          образовано 5 августа 2021
        </p>

        <p className="text-xs uppercase text-[#7b7473] leading-relaxed">
          Аккредитовано в Минцифры РФ на основании решения о предоставлении
          государственной аккредитации организации, осуществляющей деятельность
          в области информационных технологий от 27 апреля 2022 года № АО-20
          220 427–4 340 137 495–3
        </p>

        <div className="flex flex-col gap-4 text-[#7b7473] text-sm">
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

      {/* Desktop layout (unchanged) */}
      <div className="hidden lg:block mx-auto max-w-[1440px] px-10 pt-[120px] pb-8">
        <div className="relative w-full h-[211px]">
          <Image
            src="/figma/partners/footer-atom.svg"
            alt="ATOM"
            fill
            className="object-contain object-left"
          />
        </div>

        <div className="mt-20 grid grid-cols-[1fr_auto] gap-12 items-stretch">
          <div className="flex flex-col gap-8 max-w-[735px]">
            <div className="space-y-4">
              <p className="font-body text-xl text-gray-4 leading-snug">
                2023, АО «Кама» образовано 5 августа 2021
              </p>
              <p className="text-[13px] tracking-normal uppercase text-[#7b7473] leading-relaxed">
                Аккредитовано в Минцифры РФ на основании решения о предоставлении
                государственной аккредитации организации, осуществляющей
                деятельность в области информационных технологий от 27 апреля
                2022 года № АО-20 220 427–4 340 137 495–3
              </p>
            </div>
            <div className="mt-auto flex flex-row items-center gap-12 text-[#7b7473] text-lg">
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

          <div className="flex flex-col gap-5 items-end mt-[3px]">
            <div className="flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-[67px] w-[67px] rounded-2xl bg-white text-black flex items-center justify-center hover:brightness-110 transition"
                >
                  <Icon className="w-[58%] h-[58%]" />
                </a>
              ))}
            </div>
            <div className="text-white text-base text-right">
              <a
                href={`tel:${CONTACTS.partners.phone.tel}`}
                className="font-display text-xl hover:text-teal transition"
              >
                {CONTACTS.partners.phone.display}
              </a>
              <p className="mt-3 text-sm text-[#7b7473]">
                По срочным вопросам:
              </p>
              <a
                href={`mailto:${CONTACTS.partners.email}`}
                className="text-base hover:text-teal transition"
              >
                {CONTACTS.partners.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
