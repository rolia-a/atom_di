import Image from "next/image";
import Link from "next/link";

export default function ProductHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 py-6 md:py-8">
      <div className="mx-auto max-w-[1408px] px-4 md:px-6 flex items-center justify-between">
        {/* Big ATOM wordmark — no icon */}
        <Link href="/" className="flex items-center" aria-label="Атом">
          <Image
            src="/figma/partners/footer-atom.svg"
            alt="ATOM"
            width={1408}
            height={211}
            className="h-10 md:h-[56px] lg:h-[72px] w-auto"
            priority
          />
        </Link>

        {/* Right side: CTA + profile + burger */}
        <div className="flex items-center gap-3 md:gap-4">
          <a
            href="#preorder"
            className="inline-flex items-center justify-center h-11 md:h-14 px-5 md:px-7 rounded-full bg-black/60 backdrop-blur border border-white/15 text-sm md:text-base text-white hover:bg-black/80 transition"
          >
            Хочу Атом
          </a>
          <button
            type="button"
            aria-label="Профиль"
            className="h-11 w-11 md:h-14 md:w-14 rounded-full bg-black/60 backdrop-blur border border-white/15 flex items-center justify-center text-white hover:bg-black/80 transition"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden>
              <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3.5 17c.5-3.3 3.2-5.5 6.5-5.5s6 2.2 6.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Меню"
            className="h-11 w-11 md:h-14 md:w-14 rounded-full bg-black/60 backdrop-blur border border-white/15 flex items-center justify-center text-white hover:bg-black/80 transition"
          >
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden>
              <path d="M1 1h18M1 7h18M1 13h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
