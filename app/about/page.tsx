import type { Metadata } from "next";

import { absoluteUrl } from "../_lib/site-config";
import { AboutPage } from "./about-page";

export const metadata: Metadata = {
  title: "About RemotelyTalents Academy",
  description:
    "Learn why RemotelyTalents Academy was built, how it connects to the RemotelyTalents recruitment agency, and where its recruiter-led education and coaching direction is going.",
  alternates: {
    canonical: absoluteUrl("/about"),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/about"),
    title: "About RemotelyTalents Academy",
    description:
      "RemotelyTalents Academy turns remote recruitment experience into practical education, tools, and future coaching programs for professionals pursuing remote work.",
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
    title: "About RemotelyTalents Academy",
    description:
      "RemotelyTalents Academy turns remote recruitment experience into practical education, tools, and future coaching programs for professionals pursuing remote work.",
    images: [
      "https://cdn.prod.website-files.com/62a0b732bafc8e2f190f701c/69c3ae5456f9e60e8a2a0ee3_6-candidates.avif",
    ],
  },
};

export default function AboutRoute() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About RemotelyTalents Academy",
    url: absoluteUrl("/about"),
    description:
      "RemotelyTalents Academy turns remote recruitment experience into practical education, tools, and future coaching programs for professionals pursuing remote work.",
    publisher: {
      "@type": "Organization",
      name: "RemotelyTalents Academy",
      url: absoluteUrl("/"),
      founder: {
        "@type": "Person",
        name: "Adomas Pranevicius",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />
      <AboutPage />
    </>
  );
}
