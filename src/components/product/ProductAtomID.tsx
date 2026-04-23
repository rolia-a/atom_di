import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cards = [
  {
    label: "Управление Атомом в мобильном приложении",
    bg: "/figma/product/atomid/ecosystem-bg.webp",
    overlay: "/figma/product/atomid/phones.webp",
  },
  {
    label: "Экосистема по управлению автопарком",
    bg: "/figma/product/atomid/fleet.webp",
    overlay: null,
  },
];

export default function ProductAtomID() {
  return (
    <section className="relative bg-white text-black">
      <div className="mx-auto max-w-[1408px] px-4 pt-16 pb-12">
        <SectionHeading className="text-4xl md:text-5xl lg:text-[56px] max-w-3xl">
          Atom ID.
          <br />
          Любой Атом — ваш Атом
        </SectionHeading>

        {/* Two cards side by side — Figma 600:43352 */}
        <div className="mt-12 flex flex-col lg:flex-row gap-2">
          {cards.map((c) => (
            <article
              key={c.label}
              className="relative flex-1 h-[520px] rounded-[32px] overflow-hidden"
            >
              {/* Base image (and optional overlay of phones for the first card) */}
              <Image
                src={c.bg}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
                priority={false}
              />
              {c.overlay && (
                <Image
                  src={c.overlay}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover"
                />
              )}

              {/* Top label — centered with chevron, matches Figma flex layout */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-center gap-1 px-6 py-8 pointer-events-none">
                <span className="font-body text-[13px] font-medium tracking-[0.05em] uppercase text-white">
                  {c.label}
                </span>
                <Image
                  src="/figma/product/atomid/chevron.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4 [filter:brightness(0)_invert(1)]"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
