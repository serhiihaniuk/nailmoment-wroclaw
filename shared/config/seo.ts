import type { Metadata } from "next";

export const SITE_URL = "https://www.nailmoment.pl";
export const SITE_NAME = "Nail Moment";
export const OG_IMAGE = {
  url: "https://oet9iwqxtk87xaxw.public.blob.vercel-storage.com/nailmoment-wroclaw/assets/og2-itM99A0oDYEdytAq1F2DfFNlQ4CZC5.jpg",
  width: 500,
  height: 196,
  alt: SITE_NAME,
};

type PageSeo = {
  title: string;
  description: string;
  path: string;
  robots?: Metadata["robots"];
};

export function createPageMetadata({
  description,
  path,
  robots,
  title,
}: PageSeo): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
      locale: "uk_UA",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
    robots,
  };
}
