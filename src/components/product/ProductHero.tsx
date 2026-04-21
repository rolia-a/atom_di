import Image from "next/image";

export default function ProductHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <Image
        src="/figma/product/bridge-cam-06.webp"
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover z-0"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.6)_100%)]"
      />

      <div className="relative z-20 mx-auto max-w-[1408px] px-4 md:px-6 pt-40 pb-12 md:pb-16 min-h-screen flex flex-col justify-end">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em] max-w-[820px]">
            Электромобиль-гаджет
            <br />
            с безграничными ИТ-
            <br />
            возможностями
          </h1>

          <a
            href="#preorder"
            className="inline-flex items-center justify-center h-14 md:h-[71px] px-10 md:px-12 rounded-2xl md:rounded-[20px] bg-black border-2 border-[#9747ff] text-white text-base md:text-[24px] font-medium hover:shadow-[0_0_24px_rgba(151,71,255,0.5)] transition self-start md:self-end"
          >
            Заказать
          </a>
        </div>
      </div>
    </section>
  );
}
