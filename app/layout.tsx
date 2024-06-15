import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Nunito, Josefin_Sans } from "next/font/google";
import { getCanonicalUrl } from "@/utils";

const inter = Nunito({ subsets: ["latin"] });
const cuteFont = Josefin_Sans({ subsets: ["latin"], weight: "500" });
export const metadata: Metadata = {
  title: "Weather App",
  description: "Get weather today!",
  alternates: {
    canonical: getCanonicalUrl(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-951`}>
        <Header font={cuteFont.className} />
        <>{children}</>
      </body>
    </html>
  );
}
