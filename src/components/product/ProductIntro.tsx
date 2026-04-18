const tabs = [
  { label: "8 СЕК", sub: "до 100 км/ч" },
  { label: "500 КМ", sub: "запас хода" },
  { label: "8 МИН", sub: "зарядка на 100 км" },
  { label: "4.9 М", sub: "радиус разворота" },
];

export default function ProductIntro() {
  return (
    <section className="relative bg-black border-t border-white/5">
      <div className="mx-auto max-w-[1408px] px-4 py-20 lg:py-28">
        <p className="max-w-3xl text-lg md:text-xl text-white/80 leading-snug">
          Компактный и маневренный электромобиль-гаджет с просторным салоном и
          распашными дверями без центральных стоек.
        </p>

        {/* Key figures row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {tabs.map((t) => (
            <div key={t.label} className="border-t border-white/15 pt-4">
              <p className="font-display text-4xl lg:text-[48px] font-light leading-none tracking-tight">
                {t.label}
              </p>
              <p className="mt-2 text-sm text-white/60">{t.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
