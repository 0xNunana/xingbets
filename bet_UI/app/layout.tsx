import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Footersvg from "@/components/Footersvg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Salis Odds",
  description: "Surest odds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`inter.className relative`}>
        {/* <Navigation/> */}
        {children}
        <Footersvg/>
        <Footer/>
        </body>
    </html>
  );
}
