import type { Metadata } from "next";

import { absoluteUrl } from "../_lib/site-config";
import { CoachingProgramsPage } from "./coaching-programs-page";
import { coachingProgramsContent } from "./_content/coaching-programs-content";

const pageTitle = "Remote Job Coaching Programs";
const pageDescription =
  "Get structured remote job coaching with expert support on your positioning, CV, LinkedIn, applications, interviews, and remote job search strategy.";
const pageUrl = absoluteUrl("/coaching-programs");
const socialImage = absoluteUrl(
  "/coaching-programs/remote-coaching-video-call-anastasia-hero-v6.webp",
);
const organizationSchema = {
  "@type": "Organization",
  name: "RemotelyTalents Academy",
  url: absoluteUrl("/"),
};

function parseUsdPrice(price: string) {
  return price.replace(/[^0-9.]/g, "");
}

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
      name: "Remote Job Coaching Programs",
      serviceType: "Remote job search coaching",
      description:
        "Structured remote job search coaching programs from RemotelyTalents Academy, including 1:1 strategy sessions, weekly coaching, CV and LinkedIn feedback, application support, interview preparation, and advisory support depending on the selected package.",
      provider: organizationSchema,
      audience: {
        "@type": "Audience",
        audienceType:
          "Professionals looking for their first real remote job or a clearer remote-job search process",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Remote job coaching program packages",
        itemListElement: coachingProgramsContent.programs.items.map(
          (program, index) => ({
            "@type": "Offer",
            position: index + 1,
            name: program.name,
            price: parseUsdPrice(program.price),
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: `${pageUrl}#programs`,
            itemOffered: {
              "@type": "Service",
              name: program.name,
              serviceType: "Remote job search coaching",
              description: `${program.bestFor} Duration: ${program.duration}. Outcome: ${program.outcome}`,
              provider: organizationSchema,
            },
          }),
        ),
      },
    },
    publisher: organizationSchema,
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: coachingProgramsContent.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <CoachingProgramsPage />
    </>
  );
}
