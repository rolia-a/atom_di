import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "gradient" | "ghost" | "outline" | "solid";
  href?: string;
  className?: string;
} & Omit<ComponentProps<"button">, "className">;

export default function Button({
  children,
  variant = "gradient",
  href,
  className = "",
  ...rest
}: Props) {
  const base =
    "inline-flex items-center justify-center h-14 px-10 rounded-2xl text-base font-medium whitespace-nowrap transition hover:brightness-125";

  let styles: string;
  switch (variant) {
    case "gradient":
      styles = `btn-gradient text-white ${base}`;
      break;
    case "outline":
      // Black bg with purple border — matches Figma "Оставить заявку"
      styles = `${base} bg-black text-white border-2 border-[#9747ff] hover:shadow-[0_0_24px_rgba(151,71,255,0.5)]`;
      break;
    case "solid":
      // White translucent with dark text — matches Figma "Узнать больше"
      styles = `${base} bg-white/85 text-black/85 hover:bg-white`;
      break;
    case "ghost":
    default:
      styles = `${base} border border-white/25 text-white hover:border-white/60 bg-transparent`;
      break;
  }

  if (href) {
    return (
      <Link href={href} className={`${styles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`${styles} ${className}`} {...rest}>
      {children}
    </button>
  );
}
