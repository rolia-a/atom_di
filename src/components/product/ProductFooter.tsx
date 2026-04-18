const nav = [
  { label: "Параметры", href: "#params" },
  { label: "Условия покупки", href: "#preorder" },
  { label: "Зарядка", href: "#charging" },
  { label: "Атом для бизнеса", href: "#business" },
  { label: "История бренда", href: "#about" },
];

export default function ProductFooter() {
  return (
    <footer className="relative bg-black overflow-hidden">
      <div className="mx-auto max-w-[1408px] px-4 pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2">
              <svg width="28" height="20" viewBox="0 0 24 18" fill="none" aria-hidden>
                <path
                  d="M2 16 L12 2 L22 16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-display text-2xl font-medium tracking-[0.18em]">
                ATOM
              </span>
            </div>
            <p className="mt-6 max-w-md text-sm text-white/55 leading-relaxed">
              АТОМ — результат синтеза разработок ПО и смелых автомобильных
              решений. Современный городской электромобиль.
            </p>
          </div>

          <nav className="flex flex-col gap-3 text-sm text-white/70">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-white transition">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            {["VK", "TG", "YT", "R"].map((s) => (
              <button
                key={s}
                type="button"
                aria-label={s}
                className="h-[52px] w-[52px] rounded-xl border border-white/15 flex items-center justify-center text-sm hover:bg-white/10 transition"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Huge wordmark */}
        <div
          aria-hidden
          className="mt-20 font-display font-light text-[28vw] leading-[0.8] tracking-tight text-white/90 select-none"
        >
          АТОМ
        </div>

        <p className="mt-10 text-xs text-white/50 max-w-3xl leading-relaxed">
          2023, АО «Кама». Аккредитовано в Минцифры РФ от 27 апреля 2022 года №
          АО-20220427–4.340137495–3.
        </p>
      </div>
    </footer>
  );
}
