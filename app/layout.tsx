import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Onest, Montserrat } from "next/font/google";
import { AppProviders } from "@/widgets/app-providers";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/shared/config/seo";
import "./globals.css";

const onestSans = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nail Moment 2026 | Nail-фестиваль у Варшаві",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Nail Moment 2026 у Варшаві — головний nail-фестиваль Польщі для майстрів манікюру, спікерів, брендів і професійної спільноти.",
  keywords:
    "Nail Moment, nail festival, nail conference, Warsaw, Warsaw nail event, manicure, beauty event, nail майстри, nail-фестиваль, Варшава, Польща, квитки",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Nail Moment 2026 | Nail-фестиваль у Варшаві",
    description:
      "Nail Moment 2026 у Варшаві — головний nail-фестиваль Польщі для майстрів манікюру, спікерів, брендів і професійної спільноти.",
    siteName: SITE_NAME,
    locale: "uk_UA",
    alternateLocale: ["pl_PL"],
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nail Moment 2026 | Nail-фестиваль у Варшаві",
    description:
      "Nail Moment 2026 у Варшаві — головний nail-фестиваль Польщі для майстрів манікюру, спікерів, брендів і професійної спільноти.",
    images: [OG_IMAGE.url],
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
      <head></head>
      <body
        className={`${onestSans.variable} ${montserrat.variable} antialiased min-h-[100dvh] flex flex-col`}
      >
        <AppProviders>{children}</AppProviders>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
