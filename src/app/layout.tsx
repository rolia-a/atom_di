import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Brand display font — Atom (provided by client)
const fontDisplay = localFont({
  src: [
    { path: "../../public/fonts/atom/Atom-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/atom/Atom-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/atom/Atom-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/atom/Atom-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

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
