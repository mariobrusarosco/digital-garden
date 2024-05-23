import type { Metadata } from "next";
import { Bitter, Cormorant, Josefin_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { IconFlower } from "@/domains/garden-components/icons/flower";
import { Header } from "@/domains/garden-components/header";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bitter",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: "Digital Garden - Mario Brusarosco",
  description: "Digital Garden - Mario Brusarosco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bitter.variable} ${josefinSans.variable} bg-french_gray-600`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
