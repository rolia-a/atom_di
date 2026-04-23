"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Round button next to an email address that copies it to the clipboard.
 * Shows a brief "✓" state for ~1.5s after a successful copy.
 */
type Props = {
  address: string;
};

export default function CopyEmailButton({ address }: Props) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Older browsers / clipboard blocked: silent no-op.
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={copied ? "Адрес скопирован" : "Скопировать адрес"}
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 rounded-full p-2 flex items-center"
    >
      {copied ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden
          className="w-4 h-4"
        >
          <path
            d="M3 8l3.5 3.5L13 5"
            stroke="white"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <Image
          src="/figma/product/footer/copy.svg"
          alt=""
          width={16}
          height={16}
          className="w-4 h-4"
        />
      )}
    </button>
  );
}
