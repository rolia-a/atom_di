import type { CSSProperties, ReactNode } from "react";

/**
 * Frosted-glass surface — `rounded-[32px]` + backdrop-blur + semi-transparent
 * fill. Two variants:
 *   - `dark` (default): grey-translucent over dark sections, white text
 *   - `light`: white-translucent over light sections, black text
 *
 * Padding/layout/content are intentionally left to the caller — only the
 * surface treatment is shared.
 */
type Variant = "dark" | "light";

type Props = {
  as?: "div" | "article" | "section";
  variant?: Variant;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

const VARIANTS: Record<Variant, string> = {
  dark: "bg-[rgba(102,102,102,0.41)] backdrop-blur-[10px] text-white",
  light: "bg-white/85 backdrop-blur-sm text-black",
};

const BASE = "rounded-[32px] overflow-clip";

export function FrostedCard({
  as: Tag = "div",
  variant = "dark",
  className = "",
  style,
  children,
}: Props) {
  return (
    <Tag
      className={`${BASE} ${VARIANTS[variant]} ${className}`.trim()}
      style={style}
    >
      {children}
    </Tag>
  );
}
