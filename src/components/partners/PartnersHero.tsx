import Image from "next/image";
import { GradientButton } from "@/components/ui/GradientButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function PartnersHero() {
  return (
    <section className="relative min-h-[640px] md:min-h-[760px] lg:min-h-[800px] w-full overflow-hidden bg-black">
      <Image
        src="/figma/partners/hero-overlay.webp"
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover z-0"
      />
      <div aria-hidden className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 mx-auto max-w-[1440px] px-5 md:px-10 pt-[120px] md:pt-[150px] lg:pt-[379px] pb-10 flex flex-col justify-end min-h-[640px] md:min-h-[760px] lg:min-h-[800px]">
        <div className="max-w-[720px]">
          <SectionHeading as="h1" className="text-[36px] md:text-[48px] lg:text-[56px] text-white">
            Первый российский
            <br />
            электромобиль.
          </SectionHeading>
          <p className="mt-4 md:mt-5 font-display text-[20px] md:text-[24px] lg:text-[28px] font-medium leading-[1.2] text-white">
            До&nbsp;официальных продаж. В&nbsp;вашем сообществе.
          </p>
          <p className="mt-4 md:mt-5 max-w-[544px] text-base md:text-lg lg:text-xl text-white leading-[1.4]">
            Закрытые мероприятия с&nbsp;ранним доступом
            к&nbsp;электромобилю Атом&nbsp;— для сообществ, формирующих
            культуру нового. Если это о&nbsp;вас&nbsp;— листайте дальше.
          </p>
          <div className="mt-8 md:mt-10 flex gap-3">
            {/* Side-by-side on mobile (each takes ~half width); on md+ they
                shrink to content width like in the desktop design. */}
            <GradientButton
              href="#apply"
              className="flex-1 md:flex-initial h-12 md:h-[71px] px-4 md:px-10 rounded-2xl md:rounded-[20px] text-base md:text-[24px]"
            >
              Подать заявку
            </GradientButton>
            <a
              href="#events"
              className="flex-1 md:flex-initial inline-flex items-center justify-center h-12 md:h-[71px] px-4 md:px-10 rounded-2xl md:rounded-[20px] bg-white text-black text-base md:text-[24px] hover:bg-white/90 transition"
            >
              Узнать больше
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
