import Image from "next/image";
import Link from "next/link";
import { GradientButton } from "@/components/ui/GradientButton";

export default function ProductHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      {/* Big ATOM wordmark pinned to top-left, 16px padding per Figma */}
      <Link
        href="/"
        className="absolute left-4 top-4 block"
        aria-label="Атом"
      >
        <Image
          src="/figma/product/hero/atom-wordmark.svg"
          alt="ATOM"
          width={942}
          height={140}
          priority
          className="h-[60px] md:h-[100px] lg:h-[140px] w-auto"
        />
      </Link>

      {/* Top-right cluster: 'Хочу Атом' + profile + burger */}
      <div className="absolute right-4 top-4 flex items-center gap-2">
        <GradientButton
          href="#preorder"
          className="h-12 md:h-14 px-5 md:px-6 rounded-[16px] text-white text-sm md:text-[18px] font-body"
        >
          Хочу Атом
        </GradientButton>
        <button
          type="button"
          aria-label="Профиль"
          className="h-12 w-12 md:h-14 md:w-14 rounded-[16px] bg-[#ebeff2] text-black flex items-center justify-center hover:brightness-95 transition"
        >
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden>
            <circle cx="16" cy="11" r="5" stroke="currentColor" strokeWidth="2" />
            <path
              d="M6 26c1-4.5 5-7 10-7s9 2.5 10 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Меню"
          className="h-12 w-12 md:h-14 md:w-14 rounded-[16px] bg-[#ebeff2] text-black flex items-center justify-center hover:brightness-95 transition"
        >
          <svg width="22" height="14" viewBox="0 0 32 14" fill="none" aria-hidden>
            <path d="M2 2h28M2 12h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
