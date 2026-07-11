import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teak Software Studio — SaaS, Web & Mobile Products",
  description:
    "Teak Software Studio builds polished SaaS products, web applications, and mobile apps for US and European clients. Thoughtful software, beautifully delivered.",
  keywords: ["SaaS development", "web app development", "mobile app development", "software studio", "product development"],
  authors: [{ name: "Teak Software Studio" }],
  openGraph: {
    title: "Teak Software Studio",
    description: "We build SaaS products, web apps, and mobile apps for clients who care about quality.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "Vbt4fYoi6zS6NsUODF5HxfiyHDR_C02rz38TS2sRR1w",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body>{children}</body>
      <GoogleAnalytics gaId="G-BNRX10MGW0" />
    </html>
  );
}