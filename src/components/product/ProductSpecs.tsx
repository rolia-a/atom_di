"use client";

import Image from "next/image";
import { useState } from "react";

type Variant = {
  id: string;
  label: string;
  image: string;
};

const variants: Variant[] = [
  { id: "atom", label: "Атом", image: "/figma/product/atom-transparent.webp" },
  { id: "taxi", label: "Такси", image: "/figma/product/specs-block/atom-front.webp" },
  { id: "carshare", label: "Каршеринг", image: "/figma/product/atom-transparent.webp" },
  { id: "delivery", label: "Доставка", image: "/figma/product/atom-transparent.webp" },
  { id: "fleet", label: "Госавтопарки", image: "/figma/product/atom-transparent.webp" },
];

const COLOR_SWATCHES = [
  "/figma/product/specs-block/color-1.webp",
  "/figma/product/specs-block/color-2.webp",
  "/figma/product/specs-block/color-3.webp",
  "/figma/product/specs-block/color-4.webp",
  "/figma/product/specs-block/color-5.webp",
];

const INTERFACE_ICONS = [
  "/figma/product/specs-block/icon-iface-1.svg",
  "/figma/product/specs-block/icon-iface-2.svg",
  "/figma/product/specs-block/icon-iface-3.svg",
];

const SpecRow = ({ label, children }: { label: React.ReactNode; children: React.ReactNode }) => (
  <div className="flex flex-col gap-1">
    <p className="font-body text-[11px] font-medium tracking-[0.08em] uppercase text-[#92979b]">
      {label}
    </p>
    <div className="font-body text-[14px] text-black">{children}</div>
  </div>
);

export default function ProductSpecs() {
  const [activeId, setActiveId] = useState(variants[0].id);
  const active = variants.find((v) => v.id === activeId) ?? variants[0];

  return (
    <section
      id="params"
      className="relative bg-white w-full min-h-[600px] md:min-h-[800px] overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1440px] px-4 md:px-10 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-[minmax(0,450px)_1fr] gap-10">
        {/* LEFT column: description + specs + CTAs */}
        <div className="relative z-10 flex flex-col gap-6">
          <p className="font-body text-[14px] leading-[1.3] text-black max-w-[400px]">
            Компактный и маневренный электромобиль-гаджет с просторным салоном
            и распашными дверями без центральных стоек.
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            <SpecRow label="Цвет кузова">
              <div className="flex items-center gap-1.5 pt-1">
                {COLOR_SWATCHES.map((src) => (
                  <span
                    key={src}
                    className="relative inline-block w-6 h-6 rounded-full overflow-hidden ring-1 ring-black/10"
                  >
                    <Image src={src} alt="" fill sizes="24px" className="object-cover" />
                  </span>
                ))}
              </div>
            </SpecRow>
            <SpecRow label="Исполнение">
              <div className="flex items-center gap-1 pt-1">
                <Image
                  src="/figma/product/specs-block/icon-seat.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="text-[16px] text-black">× 5</span>
              </div>
            </SpecRow>

            <SpecRow label="Габариты">3995 × 1790 × 1643 мм</SpecRow>
            <SpecRow label="Клиренс">170 мм</SpecRow>

            <SpecRow label="Разгон">8 сек до 100 км/ч</SpecRow>
            <SpecRow label="Радиус разворота">4.9 м (мин)</SpecRow>

            <SpecRow label="Макс. мощность">150 кВт</SpecRow>
            <SpecRow label="Макс. скорость">170 км/ч</SpecRow>

            <SpecRow label="Запас хода">до 500 км</SpecRow>
            <SpecRow label="Время зарядки">30 мин (20-80%)</SpecRow>

            <SpecRow label="Atom ID">
              <div className="flex flex-col gap-1">
                <span>
                  Перенос своих настроек
                  <br />в любой Атом
                </span>
              </div>
            </SpecRow>
            <SpecRow label="Интерфейсы управления">
              <div className="flex items-center gap-2 pt-1">
                {/*
                  Each icon is placed inside a 24×24 brand-icon box at the
                  exact insets used by Figma (node 600:43206). That positioning
                  is what makes the middle (speech-bubble) glyph read as a
                  side-mirror, and the third one as a framed photo.
                */}
                <div className="relative w-6 h-6 overflow-hidden">
                  <div className="absolute inset-[17.86%_7.14%]">
                    <Image
                      src={INTERFACE_ICONS[0]}
                      alt=""
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="relative w-6 h-6 overflow-hidden">
                  <div className="absolute top-1/4 right-[5.36%] bottom-[10.71%] left-[16.07%]">
                    <Image
                      src={INTERFACE_ICONS[1]}
                      alt=""
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="relative w-6 h-6 overflow-hidden">
                  <div className="absolute inset-[6.37%_6.5%_11.24%_11.12%]">
                    <Image
                      src={INTERFACE_ICONS[2]}
                      alt=""
                      fill
                      sizes="24px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </SpecRow>
          </div>

          <SpecRow
            label={
              <span className="inline-flex items-center gap-1.5">
                Гарантия
                <Image
                  src="/figma/product/specs-block/icon-info.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="w-4 h-4 inline-block"
                />
              </span>
            }
          >
            5 лет с момента покупки или 150 000 км пробега
          </SpecRow>

          {/* Two CTA tiles */}
          <div className="grid grid-cols-2 gap-3 max-w-[410px]">
            <a
              href="#preorder"
              className="relative aspect-[16/10] rounded-[12px] overflow-hidden bg-black flex items-end p-3 hover:brightness-110 transition"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #0b1118 0%, #0b1f2a 60%, #0e3340 100%)",
              }}
            >
              <Image
                src="/figma/product/atom-transparent.webp"
                alt=""
                fill
                sizes="200px"
                className="object-contain object-[55%_40%] scale-[1.15]"
              />
              <span className="relative z-10 font-body text-[11px] font-medium tracking-[0.08em] uppercase text-white flex items-center gap-1">
                Хочу Атом
                <Image src="/figma/product/specs-block/arrow-right.svg" alt="" width={10} height={10} className="inline-block opacity-90" />
              </span>
            </a>

            <a
              href="#b2b"
              className="relative aspect-[16/10] rounded-[12px] overflow-hidden bg-black hover:brightness-110 transition"
            >
              {/* Source is a wide landscape (front bumper + motion lines on
                  left, rest of car off-frame). Anchor to LEFT so we show that
                  hero portion — matches Figma 600:43232 (450×164 image
                  positioned at left=10 inside 201px container). */}
              <Image
                src="/figma/product/specs-block/tile-corp.webp"
                alt=""
                fill
                sizes="200px"
                className="object-cover object-left"
              />
              <span className="absolute z-10 left-3 top-3 font-body text-[11px] font-medium tracking-[0.08em] uppercase text-white leading-[1.2] inline-flex items-start gap-1">
                Корпоративным
                <br />
                клиентам
                <Image
                  src="/figma/product/specs-block/arrow-right.svg"
                  alt=""
                  width={10}
                  height={10}
                  className="inline-block opacity-90 ml-0.5 mt-0.5"
                />
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT: big Atom render */}
        <div className="relative min-h-[400px] lg:min-h-0 lg:h-auto">
          <Image
            src={active.image}
            alt={active.label}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-contain object-center"
            priority={false}
          />
        </div>
      </div>

      {/* Bottom-right: 5 tabs pill */}
      <div className="absolute bottom-6 md:bottom-8 right-4 md:right-10 z-20">
        <div className="flex items-center gap-px h-[44px] p-px rounded-full bg-white/60 backdrop-blur-[10px] border border-[rgba(102,102,102,0.1)]">
          {variants.map((v) => {
            const isActive = v.id === activeId;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setActiveId(v.id)}
                className={`h-full flex items-center px-4 rounded-full transition font-body uppercase text-[13px] font-medium tracking-[0.05em] whitespace-nowrap ${
                  isActive
                    ? "bg-gray-0 text-black"
                    : "text-black opacity-40 hover:opacity-70"
                }`}
              >
                {v.label}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
