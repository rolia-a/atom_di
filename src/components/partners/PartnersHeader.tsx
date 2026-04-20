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
        <a
          href="#apply"
          className="btn-grad inline-flex items-center justify-center h-10 md:h-14 px-4 md:px-8 rounded-2xl text-sm md:text-[18px]"
        >
          Занять место
        </a>
      </div>
    </header>
  );
}
