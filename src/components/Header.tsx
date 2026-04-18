import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-[1408px] px-4 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-white"
          aria-label="Атом"
        >
          {/* Atom wordmark — caret over ATOM */}
          <svg
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
            className="shrink-0"
            aria-hidden
          >
            <path
              d="M2 16 L12 2 L22 16"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-display text-[22px] font-medium tracking-[0.18em]">
            ATOM
          </span>
        </Link>

        <Button href="#apply" variant="outline" className="h-12 px-6">
          Оставить заявку
        </Button>
      </div>
    </header>
  );
}
