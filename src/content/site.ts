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

/** Application deadline shown by the countdown timer. */
export const APPLICATION_DEADLINE = "2026-06-07T07:08:00+03:00";

/** Contact details shown in the site footer. */
export const CONTACTS = {
  phone: {
    /** Human-readable form for display */
    display: "8 (800) 301-93-95",
    /** RFC 3966 form for `tel:` URLs */
    tel: "+78003019395",
  },
  emails: [
    {
      address: "support@atom.auto",
      department: "Отдел поддержки",
      copy: false,
    },
    {
      address: "hr@atom.auto",
      department: "Отдел персонала",
      copy: true,
    },
    {
      address: "compliance@atom.auto",
      department: "Линия доверия Комплаенса",
      copy: false,
    },
  ],
} as const;

/**
 * Canonical social-network links. Each footer/community block adds its own
 * icon component, but URLs and labels live here so they stay in sync.
 */
export const SOCIALS = {
  vk: { label: "VK", href: "https://vk.com/atomauto" },
  telegram: { label: "Telegram", href: "https://t.me/atomauto" },
  dzen: { label: "Dzen", href: "https://dzen.ru/atomauto" },
  rutube: { label: "Rutube", href: "https://rutube.ru/atomauto" },
} as const;
