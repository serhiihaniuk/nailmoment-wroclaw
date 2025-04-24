import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onestSans = Onest({
  variable: "--font-onest",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Nail moment",
  description: "Головний nail-фестиваль Польщі",
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
