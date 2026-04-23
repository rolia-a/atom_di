import type { CSSProperties, ReactNode } from "react";

/**
 * Section title — uppercase Atom Display with the standard tight tracking
 * and 1.05 line-height used everywhere on the site.
 *
 * Intentionally **does not** set size, colour, max-width, or position —
 * those vary per section in Figma and are passed via `className`.
 *
 * @example
 *   <SectionHeading className="text-[36px] md:text-[48px] lg:text-[56px] text-white max-w-[615px]">
 *     Запуск года
 *   </SectionHeading>
 */
type Props = {
  as?: "h1" | "h2";
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

const BASE = "font-display leading-[1.05] uppercase tracking-[-0.01em]";

export function SectionHeading({
  as = "h2",
  className = "",
  ...rest
}: Props) {
  const Tag = as;
  return <Tag className={`${BASE} ${className}`.trim()} {...rest} />;
}
