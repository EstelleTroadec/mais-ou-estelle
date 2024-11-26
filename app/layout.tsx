import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mais où Est-elle ?",
  description: "Blog de voyages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} antialiased h-full w-full m-auto bg-background`
        )} /* cz-shortcut-listen="true" */ >
        <Header />
        <div className="m-auto mb-12 flex flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
