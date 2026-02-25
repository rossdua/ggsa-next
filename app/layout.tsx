import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "GGSA - Asesores Contables",
    template: "%s | GGSA",
  },
  description: "GGSA Asesores Contables y Tributarios - Puerto Ordaz, Venezuela",
  icons: {
    // VERSIÓN MÍNIMA - 3 ARCHIVOS
    icon: '/ggsa2.ico',           // 32x32px ⭐ PRINCIPAL
    apple: '/ggsa2-180.png', // 180x180px iPhone ⭐
    shortcut: '/ggsa2-16.png', // 16x16px pestañas ⭐
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
