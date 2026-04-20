import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Brand body font — Atom Interphases (provided by client)
const fontBody = localFont({
  src: [
    { path: "../../public/fonts/atom-interphases/Atom_Interphases_ExtraLight.woff", weight: "200", style: "normal" },
    { path: "../../public/fonts/atom-interphases/Atom_Interphases_Light.woff", weight: "300", style: "normal" },
    { path: "../../public/fonts/atom-interphases/Atom_Interphases_Regular.woff", weight: "400", style: "normal" },
    { path: "../../public/fonts/atom-interphases/Atom_Interphases_Medium.woff", weight: "500", style: "normal" },
    { path: "../../public/fonts/atom-interphases/Atom_Interphases_DemiBold.woff", weight: "600", style: "normal" },
    { path: "../../public/fonts/atom-interphases/Atom_Interphases_Bold.woff", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

// Display font stand-in until client provides real "Atom" font files
const fontDisplay = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-display",
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
