import type { Metadata } from "next";

import { absoluteUrl } from "../_lib/site-config";
import { CoachingProgramsPage } from "./coaching-programs-page";

const pageTitle = "Remote Job Coaching Waitlist";
const pageDescription =
  "Join the RemotelyTalents Academy waitlist for remote-job coaching with practical feedback on your CV, LinkedIn, applications, and interview prep.";
const pageUrl = absoluteUrl("/coaching-programs");
const socialImage = absoluteUrl(
  "/coaching-programs/remote-coaching-video-call.png",
);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "remote job coaching",
    "remote work coaching",
    "remote job search help",
    "CV review for remote jobs",
    "LinkedIn profile review",
    "interview prep for remote jobs",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: `${pageTitle} | RemotelyTalents Academy`,
    description: pageDescription,
    images: [
      {
        url: socialImage,
        width: 1024,
        height: 1024,
        alt: "Remote job coaching video call with coaching focus notes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | RemotelyTalents Academy`,
    description: pageDescription,
    images: [socialImage],
  },
};

export default function CoachingProgramsRoute() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageTitle,
    url: pageUrl,
    description: pageDescription,
    isPartOf: {
      "@type": "WebSite",
      name: "RemotelyTalents Academy",
      url: absoluteUrl("/"),
    },
    mainEntity: {
      "@type": "Service",
      name: "Remote job coaching waitlist",
      serviceType: "Remote job search coaching",
      description:
        "A waitlist for practical remote-job coaching focused on CV review, LinkedIn profile improvement, applications, and interview preparation.",
      provider: {
        "@type": "Organization",
        name: "RemotelyTalents Academy",
        url: absoluteUrl("/"),
      },
      audience: {
        "@type": "Audience",
        audienceType:
          "Professionals looking for their first real remote job or a clearer remote-job search process",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "RemotelyTalents Academy",
      url: absoluteUrl("/"),
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Coaching Programs",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <CoachingProgramsPage />
    </>
  );
}
