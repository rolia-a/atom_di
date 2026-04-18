const socials = [
  { value: "120К", name: "Вконтакте", icon: "VK" },
  { value: "24К", name: "ТЕЛЕГРАМ", icon: "TG" },
  { value: "2 734", name: "ДЗЕН", icon: "Д" },
  { value: "230", name: "RUTUBE", icon: "R" },
];

export default function PartnersCommunity() {
  return (
    <section className="relative bg-black overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1574px] h-[643px] opacity-50"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, rgba(0,178,178,0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
          <div className="max-w-[672px]">
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] leading-[1.15] font-medium text-white">
              Объединяем людей, способных изменить мир
            </h2>
            <p className="mt-4 text-base md:text-lg lg:text-xl text-white/85 leading-snug">
              В наших соцсетях уже более 150 000 единомышленников, и это
              число продолжает расти
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
            {socials.map((s) => (
              <div key={s.name} className="flex flex-col gap-3">
                <div className="h-[120px] md:h-[137px] w-full md:w-[137px] rounded-[24px] bg-white/10 flex items-center justify-center text-white font-display text-4xl">
                  {s.icon}
                </div>
                <div>
                  <p className="font-display text-2xl md:text-[28px] font-medium text-white">
                    {s.value}
                  </p>
                  <p className="text-[13px] tracking-[0.4em] uppercase text-white/70 mt-1">
                    {s.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="mt-10 h-12 md:h-[71px] px-6 md:px-10 rounded-2xl md:rounded-[20px] bg-black border-2 border-[#9747ff] text-white text-base md:text-xl font-light hover:shadow-[0_0_24px_rgba(151,71,255,0.5)] transition">
          Занять место
        </button>
      </div>
    </section>
  );
}
