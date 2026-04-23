import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

/**
 * Cyan-to-purple gradient-bordered CTA used across the site.
 *
 * Behaves as an `<a>` if `href` is passed, otherwise as a `<button>`.
 * The `.btn-grad` base class (defined in globals.css) provides the gradient
 * border + hover. All sizing/typography is intentionally left to the caller
 * via `className` so per-section pixel-perfect Figma sizes are preserved.
 *
 * @example
 *   <GradientButton href="/partners#apply" className="h-[60px] rounded-2xl text-[18px]">
 *     Заказать
 *   </GradientButton>
 */
type CommonProps = {
  className?: string;
  children: ReactNode;
};

type AnchorProps = CommonProps & {
  href: string;
} & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "className" | "children"
  >;

type ButtonProps = CommonProps & {
  href?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

const BASE = "btn-grad inline-flex items-center justify-center";

export function GradientButton(props: AnchorProps | ButtonProps) {
  if (props.href !== undefined) {
    const { href, className = "", children, ...rest } = props;
    return (
      <a href={href} className={`${BASE} ${className}`.trim()} {...rest}>
        {children}
      </a>
    );
  }
  const { className = "", children, ...rest } = props;
  return (
    <button className={`${BASE} ${className}`.trim()} {...rest}>
      {children}
    </button>
  );
}
