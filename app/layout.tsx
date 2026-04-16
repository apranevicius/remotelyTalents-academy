import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { absoluteUrl, siteConfig } from "./_lib/site-config";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: absoluteUrl("/"),
    siteName: siteConfig.siteName,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: "https://cdn.prod.website-files.com/62a0b732bafc8e2f190f701c/69c3ae5456f9e60e8a2a0ee3_6-candidates.avif",
        width: 1200,
        height: 1000,
        alt: "RemotelyTalents Academy remote-job candidate shortlist visual",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      "https://cdn.prod.website-files.com/62a0b732bafc8e2f190f701c/69c3ae5456f9e60e8a2a0ee3_6-candidates.avif",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
