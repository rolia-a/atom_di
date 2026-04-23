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
