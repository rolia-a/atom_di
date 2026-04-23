/**
 * Site-wide content / data.
 *
 * Single source of truth for prices, contact details, and other values that
 * marketing may want to change without touching component code.
 */

export const PRICES = {
  /** Full electric-car price */
  full: 3_900_000,
  /** Reservation deposit (counted toward the full price) */
  reservation: 500_000,
} as const;

export const URLS = {
  /** Order / pre-order CTA destination */
  order: "/partners#apply",
} as const;

/** Partner-programme slot accounting (shown in Hero + Countdown). */
export const SLOTS = {
  total: 12,
  taken: 6,
} as const;
export const SLOTS_REMAINING = SLOTS.total - SLOTS.taken;
