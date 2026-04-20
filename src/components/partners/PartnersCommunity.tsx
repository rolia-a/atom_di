const socials = [
  {
    value: "120К",
    name: "Вконтакте",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-[60%] h-[60%]" aria-hidden>
        <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm9.9 22.9c.9.9 1.85 1.73 2.65 2.72.36.44.7.9.95 1.42.36.74.04 1.55-.62 1.6h-4.11c-1.06.09-1.9-.34-2.61-1.07-.57-.58-1.1-1.2-1.65-1.8-.22-.25-.46-.48-.74-.66-.56-.37-1.04-.25-1.36.34-.33.6-.4 1.27-.43 1.94-.05.98-.34 1.24-1.33 1.29-2.1.1-4.1-.23-5.95-1.29-1.64-.94-2.91-2.27-4.02-3.78-2.16-2.95-3.82-6.18-5.3-9.51-.34-.75-.1-1.15.73-1.17 1.34-.02 2.68-.02 4.02 0 .56.01.93.33 1.15.86.73 1.79 1.62 3.5 2.74 5.09.3.42.6.84 1.04 1.14.48.33.85.22 1.07-.31.14-.34.2-.7.23-1.06.1-1.26.11-2.52-.08-3.77-.11-.78-.55-1.28-1.33-1.43-.4-.08-.34-.22-.15-.45.34-.4.66-.65 1.3-.65h4.65c.76.15.93.49 1.03 1.26v5.17c-.01.3.14 1.18.68 1.37.43.14.71-.2 1-.48 1.1-1.18 1.88-2.58 2.58-4.01.31-.64.58-1.3.84-1.96.19-.49.5-.73 1.05-.72h4.47c.13 0 .26 0 .39.02.76.13.97.45.73 1.2-.37 1.18-1.11 2.16-1.82 3.14-.76 1.05-1.58 2.07-2.33 3.14-.68.98-.63 1.47.27 2.32z" />
      </svg>
    ),
  },
  {
    value: "24К",
    name: "Телеграм",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-[58%] h-[58%]" aria-hidden>
        <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10.28 13.36l-3.44 16.23c-.26 1.15-.94 1.43-1.9.89l-5.25-3.87-2.54 2.44c-.28.28-.51.51-1.05.51l.37-5.35 9.74-8.8c.42-.38-.09-.59-.66-.21l-12.04 7.58-5.18-1.62c-1.13-.35-1.15-1.12.23-1.66l20.25-7.81c.94-.34 1.76.22 1.47 1.67z" />
      </svg>
    ),
  },
  {
    value: "2 734",
    name: "Дзен",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-[55%] h-[55%]" aria-hidden>
        <path d="M24 4c.44 6.3.72 9 2.5 10.78C28.28 16.56 30.98 16.84 37.28 17.28c.48.04.48.92 0 .96-6.3.44-9 .72-10.78 2.5-1.78 1.78-2.06 4.48-2.5 10.78-.04.48-.92.48-.96 0-.44-6.3-.72-9-2.5-10.78-1.78-1.78-4.48-2.06-10.78-2.5-.48-.04-.48-.92 0-.96 6.3-.44 9-.72 10.78-2.5C22.32 13 22.6 10.3 23.04 4c.04-.48.92-.48.96 0z" />
      </svg>
    ),
  },
  {
    value: "230",
    name: "Rutube",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" className="w-[60%] h-[60%]" aria-hidden>
        <rect x="4" y="12" width="40" height="24" rx="6" />
        <path d="M20 19l10 5-10 5v-10z" fill="#fff" />
      </svg>
    ),
  },
];

export default function PartnersCommunity() {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Brighter gradient shifted toward the socials on the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[1400px] h-[700px] translate-x-[15%]"
        style={{
          background:
            "radial-gradient(55% 60% at 65% 50%, rgba(0,178,178,0.55) 0%, rgba(0,178,178,0.18) 45%, transparent 75%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center">
          <div className="max-w-[672px]">
            <h2 className="font-display text-2xl md:text-[32px] lg:text-[36px] leading-[1.15] font-medium text-white">
              Объединяем людей, способных изменить мир
            </h2>
            <p className="mt-4 text-base md:text-lg lg:text-[18px] text-white/85 leading-snug">
              В наших соцсетях уже более 150 000 единомышленников,
              <br />
              и это число продолжает расти
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {socials.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-3">
                <div className="h-[120px] md:h-[137px] w-full md:w-[137px] rounded-[24px] bg-white text-black flex items-center justify-center">
                  {s.icon}
                </div>
                <div className="text-center">
                  <p className="font-display text-3xl md:text-[40px] font-medium text-white leading-none">
                    {s.value}
                  </p>
                  <p className="text-[13px] tracking-[0.05em] uppercase text-white/70 mt-2">
                    {s.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#apply"
          className="btn-grad mt-10 inline-flex items-center justify-center h-12 md:h-[71px] px-6 md:px-10 rounded-2xl md:rounded-[20px] text-base md:text-[24px]"
        >
          Занять место
        </a>
      </div>
    </section>
  );
}
