import Image from "next/image";

const types = [
  { label: "GB/T DC", desc: "Быстрая зарядка" },
  { label: "GB/T AC", desc: "Медленная AC" },
  { label: "CHAdeMO", desc: "Поддержка старых станций" },
  { label: "× 5", desc: "Одновременная зарядка" },
];

export default function ProductCharging() {
  return (
    <section id="charging" className="relative bg-black border-t border-white/5">
      <div className="mx-auto max-w-[1408px] px-4 py-20 lg:py-24">
        <h2 className="font-display text-3xl md:text-4xl lg:text-[48px] leading-[1.1] uppercase tracking-tight">
          Заряжайте Атом
          <br />
          дома и в городе
        </h2>
        <p className="mt-4 max-w-2xl text-white/70 leading-relaxed">
          Мы создали сеть зарядных станций, включающую наши собственные зарядки и
          станции партнёров. Выбирайте и бронируйте станции, оплачивайте и
          заряжайтесь через приложение «Я — Атом». Для домашней зарядки поможем
          установить необходимое оборудование.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16">
          {/* Charging map */}
          <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden bg-[#0b1618]">
            <Image
              src="/figma/product/map.webp"
              alt="Карта зарядных станций"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-white/70 leading-relaxed max-w-md">
              Наши партнёры ЭЗС готовы установить DC-станции с единой системой
              управления, предназначенной для одновременной зарядки 5 и более
              электромобилей.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {types.map((t) => (
                <div key={t.label} className="rounded-2xl border border-white/10 p-5">
                  <p className="font-display text-2xl font-medium">{t.label}</p>
                  <p className="mt-1 text-sm text-white/60">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
