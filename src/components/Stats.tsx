const stats = [
  { value: "100+", label: "млн человек узнали\nоб Атом через СМИ" },
  { value: "105К", label: "предзаказов до начала\nсерийного производства" },
  { value: "1 600", label: "инженеров и специалистов\nв команде" },
  { value: "8", label: "партнёрских проектов\nза 2024–2025" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Car + wind tunnel visual placeholder */}
      <div
        className="relative mx-auto max-w-[1408px] aspect-[1440/600] overflow-hidden"
        style={{
          background:
            "radial-gradient(50% 70% at 50% 40%, rgba(80,200,210,0.25) 0%, rgba(0,0,0,0) 70%), linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)",
        }}
      >
        {/* Wind-stream lines */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "repeating-linear-gradient(90deg, transparent 0, transparent 24px, rgba(255,255,255,0.05) 24px, rgba(255,255,255,0.05) 25px)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-display text-white/10 text-9xl font-light tracking-tight">
            АТОМ
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1408px] px-4 lg:px-8 py-16 lg:py-20">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s) => (
            <div key={s.value}>
              <dt className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                {s.value}
              </dt>
              <dd className="mt-3 text-sm text-white/70 whitespace-pre-line leading-snug">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
