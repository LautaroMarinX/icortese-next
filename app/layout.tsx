import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./src/globals/components/organisms/Header";
import "@/app/src/globals/styles/globals.css"
import ObserverProvider from "./src/globals/components/organisms/ObserverProvider";
import Footer from "./src/globals/components/organisms/Footer";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Inmobiliaria Cortese",
  description:
    "Cortese Propiedades – Venta y Alquiler de Propiedades - Inmobiliaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} antialiased`}
      >
        <ObserverProvider>
          <Header />
          {children}
          <Footer />
        </ObserverProvider>
      </body>
    </html>
  );
}
