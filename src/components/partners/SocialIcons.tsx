// Brand glyphs for social-stats tiles. Each icon is a single dark glyph on
// a transparent background, sized to ~70% of the 48×48 viewBox so all four
// look optically balanced when placed inside the white tile.

type Props = { className?: string };

export function IconVK({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M25.4 32.6h2.4c.7 0 .9-.3.9-1 0-1.6.6-2.6 1.7-2.6 1 0 1.5.5 3 1.9 1.6 1.5 2 1.7 2.9 1.7H39c1.1 0 1.5-.4 1.2-1.4-.4-1-2.5-3.5-3.4-4.3-.7-.7-1-1.1-.4-2 .8-1.1 4.4-6.1 4.7-7.6.2-.7-.1-1.1-.8-1.1h-2.6c-.8 0-1.2.4-1.5 1.1-1.5 3.2-3 5-3.6 5.7-.4.4-.7.5-1 .3-.4-.2-.5-.6-.5-1.4v-4.8c0-.6-.2-.9-.7-.9h-4.2c-.4 0-.6.3-.6.5 0 .6.9.7.9 2.5v3.5c0 .8-.1 1-.5 1-1.1 0-2.9-3-3.9-7-.4-1.4-.7-1.6-1.5-1.6h-2.6c-.8 0-1 .4-.8 1.1 1.7 5.4 5.5 11.4 9.6 11.4 0 0 .8 0 .8-1z"
      />
    </svg>
  );
}

export function IconTelegram({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M37.2 12.4 9.5 23.1c-1.9.7-1.9 1.8-.4 2.3l7.1 2.2 2.7 8.4c.3 1 .6 1.4 1.3 1.4.5 0 .8-.2 1.1-.6l3.6-3.5 7.5 5.5c1.4.8 2.4.4 2.7-1.3l5-23.4c.5-2.1-.8-3-2.1-2.4-.6.3-.9.5-.8.5zm-3.6 5.7-13.4 12.1-.5 5.6-2.6-8.1 16.8-10.6c.4-.3.7-.1.4.3z"
      />
    </svg>
  );
}

export function IconDzen({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M24 6c.4 7.7.8 11 3 13.3 2.2 2.2 5.5 2.6 13.3 3 .4 0 .4 1.1 0 1.1-7.7.4-11 .8-13.3 3-2.2 2.2-2.6 5.5-3 13.3 0 .4-1.1.4-1.1 0-.4-7.7-.8-11-3-13.3-2.2-2.2-5.5-2.6-13.3-3-.4 0-.4-1.1 0-1.1 7.7-.4 11-.8 13.3-3 2.2-2.2 2.6-5.5 3-13.3 0-.4 1.1-.4 1.1 0z"
      />
    </svg>
  );
}

export function IconRutube({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M5 13h21.5c4.7 0 8.3 3.7 8.3 8.3 0 3.6-2.3 6.7-5.5 7.8L43 35H32.5l-9-5.4h-7v5.4H6V13zm6 5.5v6.4h13.7c1.7 0 3.1-1.4 3.1-3.2s-1.4-3.2-3.1-3.2H11z"
      />
    </svg>
  );
}
