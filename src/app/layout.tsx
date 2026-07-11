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
  metadataBase: new URL("https://www.teaksoftware.studio"),
  title: "Teak Software Studio — Web, Mobile & AI Products",
  description:
    "Teak Software Studio builds polished web applications, mobile apps, and AI systems for US and European clients. Thoughtful software, beautifully delivered.",
  keywords: ["web app development", "mobile app development", "AI systems", "software studio", "product development"],
  authors: [{ name: "Teak Software Studio" }],
  openGraph: {
    title: "Teak Software Studio",
    description: "We build web apps, mobile apps, and AI systems for clients who care about quality.",
    type: "website",
    siteName: "Teak Software Studio",
    url: "https://www.teaksoftware.studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teak Software Studio",
    description: "We build web apps, mobile apps, and AI systems for clients who care about quality.",
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