import type { Metadata } from "next";
import { Onest, Bowlby_One } from "next/font/google";
import "./globals.css";

const onestSans = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
});

const bowlbyOne = Bowlby_One({
  variable: "--font-bowlby-one",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nail Moment 🍋",
  description: "🍋Найбільша nail конференція в Польщі🍊",
  keywords:
    "nail, moment, conference, poland, ukraine, конференція, польща, найбільша, квиток",
  robots: "index,follow",
  openGraph: {
    type: "website",
    url: "https://nailmoment.pl",
    title: "Nail Moment",
    description: "🍋Найбільша nail конференція в Польщі.🍊",

    siteName: "Nail Moment",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nail Moment",
    description: "🍋Найбільша nail конференція в Польщі. ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍊</text></svg>"
        />
      </head>
      <body
        className={`${onestSans.variable} ${bowlbyOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
