// Simplified brand marks for social widgets. All icons share the same
// 48×48 viewBox with a filled circle background, so they align identically
// inside their rounded containers.

type Props = { className?: string };

export function IconVK({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="20" fill="currentColor" />
      <path
        fill="#fff"
        d="M25.3 30.9c-8 0-12.7-5.5-12.9-14.6h4c.1 6.7 3.1 9.4 5.5 10V16.3h3.9v5.8c2.3-.2 4.8-3 5.6-5.8h3.9c-.3 1.5-.9 2.9-1.7 4.1-.9 1.2-1.9 2.3-3.2 3 1.3.8 2.5 1.7 3.5 2.9 1 1.2 1.8 2.6 2.3 4.1h-4.2c-1-2.9-3.1-5.1-6-5.5v5.5c-.4 0-.5.5-.7.5z"
      />
    </svg>
  );
}

export function IconTelegram({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="20" fill="currentColor" />
      <path
        fill="#fff"
        d="M34.8 15.5c.3-.2.7.1.6.5l-2.7 13.6c-.2.8-.7.9-1.4.6l-4-3-1.9 1.8c-.2.2-.4.4-.9.4l.3-4.2 7.8-7c.3-.3-.1-.5-.5-.3L22.4 23l-4.1-1.3c-.9-.3-.9-.9.2-1.3l15.1-5.8z"
      />
    </svg>
  );
}

export function IconDzen({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="20" fill="currentColor" />
      <path
        fill="#fff"
        d="M24 12c.3 4.8.5 6.9 1.9 8.2 1.3 1.3 3.4 1.6 8.2 1.9.2 0 .2.6 0 .6-4.8.3-6.9.5-8.2 1.9-1.4 1.3-1.6 3.4-1.9 8.2 0 .2-.6.2-.6 0-.3-4.8-.5-6.9-1.9-8.2-1.3-1.4-3.4-1.6-8.2-1.9-.2 0-.2-.6 0-.6 4.8-.3 6.9-.5 8.2-1.9 1.4-1.3 1.6-3.4 1.9-8.2 0-.2.6-.2.6 0z"
      />
    </svg>
  );
}

export function IconRutube({ className }: Props) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <circle cx="24" cy="24" r="20" fill="currentColor" />
      <path
        fill="#fff"
        d="M16.5 15h9.3c2.7 0 4.8 2.2 4.8 4.8 0 2.3-1.6 4.3-3.9 4.7l4.4 8.5h-4.4l-4-7.7h-2.6V33h-3.6V15zm3.6 3.3v4.2h5.2c1.2 0 2.1-.9 2.1-2.1 0-1.2-.9-2.1-2.1-2.1h-5.2z"
      />
    </svg>
  );
}
