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
  /** Privacy / personal-data policy (официальный сайт atom.auto) */
  privacyPolicy: "https://atom.auto/services/privacy",
  /** Consent for processing of personal data */
  consent: "https://atom.auto/services/soglasie-pdn",
} as const;

/** Partner-programme slot accounting (shown in Hero + Countdown). */
export const SLOTS = {
  total: 12,
  taken: 6,
} as const;
export const SLOTS_REMAINING = SLOTS.total - SLOTS.taken;

/**
 * Application deadline shown by the countdown timer.
 * Set so the timer starts at ≈ 100 days / 5 hours / 00 minutes at launch.
 * (2026-04-24 12:22 MSK + 100d 5h = 2026-08-02 17:22 MSK.)
 */
export const APPLICATION_DEADLINE = "2026-08-02T17:22:00+03:00";

/** Contact details shown in the site footer. */
export const CONTACTS = {
  phone: {
    /** Human-readable form for display */
    display: "8 (800) 301-93-95",
    /** RFC 3966 form for `tel:` URLs */
    tel: "+78003019395",
  },
  /** Partners-programme dedicated contact (shown in /partners footer) */
  partners: {
    phone: { display: "8 (495) 320-20-30", tel: "+74953202030" },
    email: "partners@atom.team",
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
  max: { label: "MAX", href: "https://max.ru/atomauto" },
} as const;
