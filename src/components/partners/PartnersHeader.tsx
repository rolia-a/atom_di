import Image from "next/image";
import Link from "next/link";

export default function PartnersHeader() {
  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 h-[72px] md:h-[90px] flex items-center justify-between">
        <Link href="/partners" aria-label="Атом">
          <Image
            src="/figma/partners/atom-logo.svg"
            alt="ATOM"
            width={223}
            height={60}
            className="h-8 md:h-10 lg:h-[60px] w-auto"
            priority
          />
        </Link>
        <button
          type="button"
          className="h-10 md:h-14 px-4 md:px-8 rounded-2xl bg-black border-2 border-[#9747ff] text-white text-sm md:text-base font-medium hover:shadow-[0_0_24px_rgba(151,71,255,0.5)] transition"
        >
          Занять место
        </button>
      </div>
    </header>
  );
}
