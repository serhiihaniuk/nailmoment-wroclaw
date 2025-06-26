import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Onest } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
      <head>
        <Script />
        <Script
          src="https://connect.facebook.net/en_US/fbevents.js"
          strategy="afterInteractive"
        />

        {/* initialise + track */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;
              n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];
              t=b.createElement(e);t.async=!0;t.src=v;
              s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','1253761369478754');
            fbq('track','PageView');
          `,
          }}
        />

        {/* noscript fallback */}
        <noscript>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1253761369478754&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
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
