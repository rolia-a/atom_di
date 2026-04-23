import Image from "next/image";
import { GradientButton } from "@/components/ui/GradientButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pluralizeRu } from "@/lib/i18n/pluralize";
import { SLOTS_REMAINING } from "@/content/site";

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
        <div className="max-w-[615px]">
          <SectionHeading as="h1" className="text-[36px] md:text-[48px] lg:text-[56px] text-white">
            Запуск года.
            <br />
            Осталось {SLOTS_REMAINING}&nbsp;{pluralizeRu(SLOTS_REMAINING, ["место", "места", "мест"])}
          </SectionHeading>
          <p className="mt-5 max-w-[360px] text-base md:text-lg lg:text-xl text-white leading-[1.4]">
            Первый серийный электромобиль страны ищет сообщества, с которыми
            хочется делать историю. Если это про вас — листайте дальше
          </p>
          <div className="mt-8 md:mt-10 flex flex-wrap gap-3">
            <GradientButton
              href="#apply"
              className="h-12 md:h-[71px] px-6 md:px-10 rounded-2xl md:rounded-[20px] text-base md:text-[24px]"
            >
              Занять место
            </GradientButton>
            <a
              href="#events"
              className="inline-flex items-center justify-center h-12 md:h-[71px] px-6 md:px-10 rounded-2xl md:rounded-[20px] bg-white text-black text-base md:text-[24px] hover:bg-white/90 transition"
            >
              Узнать больше
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
