import Image from "next/image";

export default function ProductCharging() {
  return (
    <section
      id="charging"
      className="relative bg-white w-full h-[700px] md:h-[788px] overflow-hidden"
    >
      {/*
        Map covers the left 2/3 of the section. Fills the container with
        object-cover so it scales to any viewport width (was fixed 1028px
        which created an ugly gap on wide screens).
      */}
      <div className="absolute left-0 top-0 w-[62%] h-full">
        <Image
          src="/figma/product/charging/map.webp"
          alt="Карта зарядных станций"
          fill
          sizes="62vw"
          className="object-cover object-right"
          priority={false}
        />
      </div>

      {/*
        Right column text — vertically centered in the white area ABOVE the
        cards (cards sit at the bottom ~y=544 of the 788 section; centering
        between 0 and 544 → ~35%).
      */}
      <div className="absolute left-[66.67%] top-[35%] -translate-y-1/2 flex flex-col gap-6 w-[419px] max-w-[90%] z-10">
        <Image
          src="/figma/product/charging/icon-station.svg"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <h2 className="font-display text-[32px] md:text-[40px] leading-none uppercase text-black">
          Заряжайте Атом дома и&nbsp;в&nbsp;городе
        </h2>
        <div className="font-body text-[16px] leading-[1.3] text-black flex flex-col gap-[1em]">
          <p>
            Мы создали сеть зарядных станций, включающую наши собственные
            зарядки и станции партнёров. Выбирайте и бронируйте станции,
            оплачивайте и заряжайтесь через приложение «Я&nbsp;–&nbsp;Атом».
          </p>
          <p>
            Для домашней зарядки поможем установить необходимое оборудование
          </p>
        </div>
      </div>

      {/* Two small cards anchored to the bottom-right */}
      <div className="absolute left-[66.67%] top-[544px] w-[464px] max-w-[90%] flex gap-2 z-10">
        {/* 1) QR — download app */}
        <a
          href="#app"
          className="relative flex-1 h-[228px] rounded-[32px] overflow-hidden bg-black hover:brightness-110 transition"
        >
          {/* Cyan glow behind the QR */}
          <Image
            src="/figma/product/charging/glow.svg"
            alt=""
            aria-hidden
            width={600}
            height={600}
            className="absolute -left-[70px] -bottom-[70px] w-[298px] h-[307px] pointer-events-none select-none"
          />
          {/* QR code */}
          <Image
            src="/figma/product/charging/qr.webp"
            alt=""
            width={122}
            height={121}
            className="absolute left-[21px] top-[90px] w-[122px] h-[121px] object-cover"
          />
          <div className="absolute left-[82px] top-[24px] flex flex-col items-start gap-[2px]">
            <span className="font-body text-[13px] font-medium tracking-[0.05em] uppercase text-white leading-[1.2]">
              Скачать
            </span>
            <span className="flex items-center gap-1 font-body text-[13px] font-medium tracking-[0.05em] uppercase text-white leading-[1.2]">
              Приложение
              <Image
                src="/figma/product/specs-block/arrow-right.svg"
                alt=""
                width={10}
                height={10}
                className="inline-block"
              />
            </span>
          </div>
        </a>

        {/* 2) Charging port closeup — home stations */}
        <a
          href="#home-charge"
          className="relative flex-1 h-[228px] rounded-[32px] overflow-hidden bg-[#1c2023] hover:brightness-110 transition"
        >
          {/* Zoomed charging port photo, positioned to show the cable/port detail */}
          <Image
            src="/figma/product/charging/port.webp"
            alt=""
            fill
            sizes="230px"
            className="object-cover object-[30%_50%] scale-[1.4]"
          />
          <div className="absolute left-[24px] top-[24px] flex flex-col items-start gap-[2px]">
            <span className="font-body text-[13px] font-medium tracking-[0.05em] uppercase text-white leading-[1.2]">
              Станции
            </span>
            <span className="flex items-center gap-1 font-body text-[13px] font-medium tracking-[0.05em] uppercase text-white leading-[1.2]">
              для дома
              <Image
                src="/figma/product/specs-block/arrow-right.svg"
                alt=""
                width={10}
                height={10}
                className="inline-block"
              />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
