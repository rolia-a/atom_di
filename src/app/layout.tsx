import type { Metadata } from "next";
import { Unbounded, Manrope } from "next/font/google";
import "./globals.css";

// Temporary open-source stand-ins for the brand "Atom" / "Atom Interphases".
// Replace with real .woff2 files when available via next/font/local.
const fontDisplay = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-display",
  display: "swap",
});

const fontBody = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Атом — электромобиль-гаджет",
  description:
    "Компактный и маневренный электромобиль-гаджет с просторным салоном и распашными дверями без центральных стоек.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`h-full antialiased ${fontDisplay.variable} ${fontBody.variable}`}
    >
      <body className="min-h-full flex flex-col bg-black text-white font-body">
        {children}
      </body>
    </html>
  );
}
