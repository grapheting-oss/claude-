import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Bold display face for headings.
const obviously = localFont({
  variable: "--font-display",
  src: [
    { path: "../../public/fonts/obviously-regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/obviously-medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/obviously-semibold.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NIUCOM | Agencia de Marketing y Comunicación",
  description:
    "Conectamos creatividad con propósito. Somos una agencia creativa que combina estrategia, diseño y tecnología para hacer crecer tu marca.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${obviously.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-white">
        {children}
      </body>
    </html>
  );
}
