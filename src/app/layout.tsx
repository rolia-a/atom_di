import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Атом — партнёрская программа",
  description:
    "Первый серийный электромобиль страны ищет сообщества, с которыми хочется делать историю.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-white font-sans">
        {children}
      </body>
    </html>
  );
}
