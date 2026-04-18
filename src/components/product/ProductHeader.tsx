import Link from "next/link";

const navItems = [
  { label: "Параметры", href: "#params" },
  { label: "Условия покупки", href: "#preorder" },
  { label: "Зарядка", href: "#charging" },
  { label: "Атом для бизнеса", href: "#business" },
  { label: "История бренда", href: "#about" },
];

export default function ProductHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 py-4">
      <div className="mx-auto max-w-[1408px] px-4 flex items-center justify-between">
        <Link href="/product" className="flex items-center gap-2" aria-label="Атом">
          <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden>
            <path
              d="M2 16 L12 2 L22 16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-display text-[20px] font-medium tracking-[0.18em]">
            ATOM
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-sm text-white/80">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-white transition">
              {n.label}
            </a>
          ))}
        </nav>

        {/* Burger / Menu placeholder */}
        <button
          type="button"
          aria-label="Меню"
          className="h-14 w-14 rounded-2xl border border-white/15 flex items-center justify-center hover:bg-white/10 transition"
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
            <path d="M1 1h18M1 7h18M1 13h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
