import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ToasterProvider } from "@/lib/ToasterProvider";
import IntersectionObserverEffect from "@/lib/client/IntersectionObserver";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <ToasterProvider />
        <IntersectionObserverEffect />
      </body>
    </html>
  );
}
