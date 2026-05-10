import type { Metadata } from "next";
import { DM_Sans, Fraunces, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veterinaria Mutualismo | Clínica Veterinaria en Celaya, Guanajuato",
  description:
    "Veterinaria Mutualismo en Celaya, Gto. Más de 20 años de experiencia. Consultas, vacunación, cirugías, estética, hospitalización y emergencias 24/7. 2 sucursales.",
  keywords: [
    "veterinaria Celaya",
    "veterinaria Mutualismo",
    "clínica veterinaria Celaya",
    "veterinario Celaya Guanajuato",
    "vacunación mascotas Celaya",
    "cirugía veterinaria Celaya",
    "emergencias veterinarias 24 horas Celaya",
    "estética canina Celaya",
    "hospitalización mascotas Celaya",
  ],
  metadataBase: new URL("https://www.veterinariamutualismo.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Veterinaria Mutualismo | Celaya, Guanajuato",
    description:
      "Más de 20 años cuidando mascotas en Celaya. Consultas, cirugías, estética y emergencias 24/7. 2 sucursales.",
    url: "https://www.veterinariamutualismo.com",
    siteName: "Veterinaria Mutualismo",
    locale: "es_MX",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${fraunces.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
