import Image from "next/image";

const cards = [
  {
    label: "Управление Атомом в мобильном приложении",
    img: "/figma/product/atom-id-phone.webp",
  },
  {
    label: "Экосистема по управлению автопарком",
    img: "/figma/product/atom-id-fleet.webp",
  },
];

export default function ProductAtomID() {
  return (
    <section className="relative bg-white text-black">
      <div className="mx-auto max-w-[1408px] px-4 pt-16 pb-12">
        <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em] max-w-3xl">
          Atom ID.
          <br />
          Любой Атом — ваш Атом
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-2">
          {cards.map((c) => (
            <article
              key={c.label}
              className="relative h-[520px] rounded-[32px] overflow-hidden bg-black"
            >
              <Image
                src={c.img}
                alt={c.label}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.5)_100%)]" />
              <p className="absolute inset-x-6 top-6 text-[11px] tracking-[0.3em] uppercase text-white">
                {c.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
