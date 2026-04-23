/**
 * Number / currency / date formatting helpers (ru-RU locale).
 *
 * Centralised so individual components don't reinvent number-grouping logic
 * with their own buggy `String(n).replace(...)` snippets.
 */

const RU_NUMBER = new Intl.NumberFormat("ru-RU");

const RU_RUB = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
});

/**
 * Group digits with a non-breaking thin space — `1234567` → `1 234 567`.
 *
 * @example formatNumber(3900000) // "3 900 000"
 */
export function formatNumber(n: number): string {
  return RU_NUMBER.format(n);
}

/**
 * Format as Russian rubles, no fractional part — `3900000` → `3 900 000 ₽`.
 *
 * @example formatRubles(500000) // "500 000 ₽"
 */
export function formatRubles(n: number): string {
  return RU_RUB.format(n);
}

/**
 * Marketing-style compact form used for follower counts.
 * For values ≥ 10_000 collapses to thousands with the Cyrillic «К» suffix
 * (matches Figma copy); smaller values use the regular grouped form.
 *
 * @example
 *   formatCompactRu(120_000) // "120К"
 *   formatCompactRu(24_000)  // "24К"
 *   formatCompactRu(2_734)   // "2 734"
 *   formatCompactRu(230)     // "230"
 */
export function formatCompactRu(n: number): string {
  if (n >= 10_000) {
    return `${Math.round(n / 1000)}К`;
  }
  return formatNumber(n);
}
