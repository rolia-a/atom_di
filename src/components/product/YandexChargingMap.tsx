"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";

// Charging-station markers around Saint-Petersburg (lng, lat).
const STATIONS: [number, number][] = [
  [30.05, 60.1],   // Парголово / Мурино
  [29.98, 60.05],
  [30.32, 59.94],  // центр
  [30.38, 59.94],
  [30.44, 59.93],
  [30.05, 59.93],
  [29.87, 59.88],  // Петергоф / Стрельна
  [30.0, 59.83],   // Красное Село
  [30.2, 59.72],   // Пушкин / Колпино
  [30.58, 59.75],  // Колпино восток
];

// Minimal typing for the bits of ymaps3 we touch.
type YMaps3 = {
  ready: Promise<void>;
  YMap: new (el: HTMLElement, opts: { location: { center: [number, number]; zoom: number }; behaviors?: string[] }) => unknown;
  YMapDefaultSchemeLayer: new (opts?: { theme?: "light" | "dark" }) => unknown;
  YMapDefaultFeaturesLayer: new () => unknown;
  YMapMarker: new (opts: { coordinates: [number, number] }, el: HTMLElement) => unknown;
};

type YMapInstance = {
  addChild: (child: unknown) => void;
  destroy: () => void;
};

declare global {
  interface Window {
    ymaps3?: YMaps3;
  }
}

function makeMarker(): HTMLElement {
  const el = document.createElement("div");
  el.style.cssText =
    "width:32px;height:32px;border-radius:50%;background:#00b2b2;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 3px rgba(0,178,178,0.25),0 4px 12px rgba(0,0,0,0.35);transform:translate(-50%,-50%);";
  el.innerHTML =
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 2L3 9h3v5l6-7H9V2z" fill="#0a0a0a"/></svg>';
  return el;
}

export default function YandexChargingMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<YMapInstance | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [failed, setFailed] = useState(false);

  const apiKey = process.env.NEXT_PUBLIC_YMAPS_API_KEY;

  useEffect(() => {
    if (!scriptReady || !containerRef.current || !window.ymaps3) return;
    let cancelled = false;

    (async () => {
      try {
        const ymaps3 = window.ymaps3!;
        await ymaps3.ready;
        if (cancelled || !containerRef.current) return;

        const map = new ymaps3.YMap(containerRef.current, {
          location: { center: [30.27, 59.93], zoom: 9 },
          behaviors: ["drag", "pinchZoom", "mouseRotate", "mouseTilt"],
        }) as unknown as YMapInstance;

        map.addChild(new ymaps3.YMapDefaultSchemeLayer({ theme: "dark" }));
        map.addChild(new ymaps3.YMapDefaultFeaturesLayer());

        for (const coord of STATIONS) {
          map.addChild(
            new ymaps3.YMapMarker({ coordinates: coord }, makeMarker()) as unknown as object,
          );
        }

        mapRef.current = map;
      } catch {
        if (!cancelled) setFailed(true);
      }
    })();

    return () => {
      cancelled = true;
      mapRef.current?.destroy?.();
      mapRef.current = null;
    };
  }, [scriptReady]);

  // No API key → just keep the static fallback image.
  if (!apiKey) {
    return <StaticMapFallback />;
  }

  return (
    <>
      <Script
        src={`https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=ru_RU`}
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
        onError={() => setFailed(true)}
      />
      {failed ? (
        <StaticMapFallback />
      ) : (
        <div ref={containerRef} className="absolute inset-0 w-full h-full" />
      )}
    </>
  );
}

function StaticMapFallback() {
  return (
    <Image
      src="/figma/product/charging/map.webp"
      alt="Карта зарядных станций"
      fill
      sizes="62vw"
      className="object-cover object-right"

    />
  );
}
