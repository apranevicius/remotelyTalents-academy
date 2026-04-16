import type { Metadata } from "next";

import { absoluteUrl } from "./_lib/site-config";
import { HomePage } from "./_home/home-page";

export const metadata: Metadata = {
  title: "Recruiter-Led Courses to Help You Get a Remote Job",
  description:
    "Recruiter-led courses from RemotelyTalents Academy designed to help professionals search smarter, improve their applications, and move toward real remote job opportunities.",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    url: absoluteUrl("/"),
    title: "RemotelyTalents Academy | Recruiter-Led Courses to Help You Get a Remote Job",
    description:
      "Recruiter-led courses from RemotelyTalents Academy designed to help professionals search smarter, improve their applications, and move toward real remote job opportunities.",
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
    title: "RemotelyTalents Academy | Recruiter-Led Courses to Help You Get a Remote Job",
    description:
      "Recruiter-led courses from RemotelyTalents Academy designed to help professionals search smarter, improve their applications, and move toward real remote job opportunities.",
    images: [
      "https://cdn.prod.website-files.com/62a0b732bafc8e2f190f701c/69c3ae5456f9e60e8a2a0ee3_6-candidates.avif",
    ],
  },
};

export default function Page() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RemotelyTalents",
    url: absoluteUrl("/"),
    logo: absoluteUrl("/icon.png"),
    foundingDate: "2022",
    areaServed: [
      "Europe",
      "Latin America",
      "North America",
    ],
    description:
      "Remote recruitment agency and recruiter-led academy helping professionals search smarter and move toward real remote job opportunities.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <HomePage />
    </>
  );
}
