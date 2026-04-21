import Image from "next/image";

export default function ProductHero() {
  return (
    <section className="relative h-screen min-h-[700px] md:min-h-[800px] w-full overflow-hidden bg-black">
      {/* Sunset bridge background — pulled 1:1 from Figma node 600:42892 */}
      <Image
        src="/figma/product/hero/bridge-sunset.webp"
        alt=""
        fill
        sizes="100vw"
        priority
        className="object-cover object-center z-0"
      />
      <div
        aria-hidden
        className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.5)_100%)]"
      />

      {/* Title absolute bottom-left so it never gets squeezed by the CTA */}
      <h1 className="absolute z-20 left-4 bottom-6 md:bottom-8 font-display font-normal text-[28px] md:text-[42px] lg:text-[56px] leading-[1.05] uppercase tracking-[-0.01em] text-white max-w-[830px]">
        Электромобиль-гаджет
        <br />
        с&nbsp;безграничными ИТ-
        <br />
        возможностями
      </h1>

      {/* CTA absolute bottom-right with cyan→purple gradient border */}
      <a
        href="#preorder"
        className="btn-grad absolute z-20 right-4 bottom-6 md:bottom-8 inline-flex items-center justify-center h-[60px] md:h-[80px] w-[200px] md:w-[257px] rounded-2xl md:rounded-[20px] font-display text-xl md:text-[32px] font-normal tracking-[-0.02em]"
      >
        Заказать
      </a>
    </section>
  );
}
