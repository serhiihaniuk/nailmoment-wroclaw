import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Onest } from "next/font/google";
import "./globals.css";

const onestSans = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Nail Moment",
  description: "Найбільша nail конференція в Польщі",
  keywords:
    "nail, moment, conference, poland, ukraine, конференція, польща, найбільша, квиток",
  robots: "index,follow",
  openGraph: {
    type: "website",
    url: "https://www.nailmoment.pl",
    title: "Nail Moment",
    description: "Найбільша nail конференція в Польщі.",
    siteName: "Nail Moment",
    images: [
      {
        url: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/assets/og2-itM99A0oDYEdytAq1F2DfFNlQ4CZC5.jpg",
        width: 500,
        height: 196,
        alt: "Nail Moment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nail Moment",
    description: "Найбільша nail конференція в Польщі.",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${onestSans.variable} antialiased min-h-[100dvh] flex flex-col`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
