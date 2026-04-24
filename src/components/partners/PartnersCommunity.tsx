import {
  IconDzen,
  IconMax,
  IconTelegram,
  IconVK,
} from "./SocialIcons";
import { GradientButton } from "@/components/ui/GradientButton";
import { formatCompactRu } from "@/lib/format";

const socials = [
  { count: 120_000, name: "Вконтакте", Icon: IconVK },
  { count: 24_000, name: "Телеграм", Icon: IconTelegram },
  { count: 2_734, name: "Дзен", Icon: IconDzen },
  { count: 1_433, name: "MAX", Icon: IconMax },
];

export default function PartnersCommunity() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Brighter gradient shifted toward the socials on the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 180% at 95% 50%, rgba(0,210,200,0.75) 0%, rgba(0,160,170,0.45) 30%, rgba(0,90,110,0.2) 60%, transparent 85%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
          <div className="max-w-[672px]">
            <h2 className="font-display text-2xl md:text-[32px] lg:text-[36px] leading-[1.15] font-medium text-white">
              Объединяем людей,
              <br />
              способных изменить мир
            </h2>
            <p className="mt-4 text-base md:text-lg lg:text-[18px] text-white/85 leading-snug">
              В наших соцсетях уже более 150 000 единомышленников,
              <br />
              и это число продолжает расти.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {socials.map(({ count, name, Icon }) => (
              <div key={name} className="flex flex-col items-center gap-3">
                <div className="h-[120px] md:h-[137px] w-full md:w-[137px] rounded-[32px] bg-gray-0 text-black flex items-center justify-center">
                  <Icon className="w-[48%] h-[48%]" />
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl md:text-[40px] font-medium text-white leading-none">
                    {formatCompactRu(count)}
                  </p>
                  <p className="text-[13px] tracking-[0.05em] uppercase text-white/70 mt-2">
                    {name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <GradientButton
          href="#apply"
          className="mt-10 h-12 md:h-[71px] px-6 md:px-10 rounded-2xl md:rounded-[20px] text-base md:text-[24px]"
        >
          Подать заявку
        </GradientButton>
      </div>
    </section>
  );
}
