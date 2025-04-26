import type { Metadata } from "next";
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
    url: "https://nailmoment.pl",
    title: "Nail Moment",
    description: "Найбільша nail конференція в Польщі.",

    siteName: "Nail Moment",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nail Moment",
    description: "Найбільша nail конференція в Польщі.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onestSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
