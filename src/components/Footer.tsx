const socials = [
  { label: "VK", href: "#" },
  { label: "TG", href: "#" },
  { label: "+", href: "#" },
  { label: "R", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="mx-auto max-w-[1408px] px-4 lg:px-8 pt-16 pb-10">
        {/* Huge ATOM wordmark */}
        <div
          aria-hidden
          className="font-display font-light text-[28vw] leading-[0.8] tracking-tight text-white select-none"
          style={{ fontStretch: "expanded" }}
        >
          АТОМ
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end">
          <div className="text-xs text-white/55 space-y-3 max-w-xl leading-relaxed">
            <p>2023, АО «Кама» образовано 5 августа 2021</p>
            <p>
              Аккредитовано в Минцифры РФ на основании решения о предоставлении
              государственной аккредитации организации, осуществляющей
              деятельность в области информационных технологий от 27 апреля 2022
              года № АО-20220427–4.340137495–3
            </p>
          </div>

          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="h-[52px] w-[52px] rounded-xl border border-white/15 flex items-center justify-center text-sm hover:bg-white/10 hover:border-white/40 transition"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
