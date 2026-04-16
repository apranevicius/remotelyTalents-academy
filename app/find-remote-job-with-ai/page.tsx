import type { Metadata } from "next";

import { absoluteUrl } from "../_lib/site-config";
import { faqs } from "../remote-job-with-ai/_content/remote-job-with-ai-content";
import { RemoteJobWithAIPageContent } from "../remote-job-with-ai/remote-job-with-ai-page";

export const metadata: Metadata = {
  title: "Find a Remote Job with the Help of AI in 29 Days",
  description:
    "A recruiter-led 29-day course to help you stop guessing, improve your CV and LinkedIn, use AI properly, and get more remote job interview opportunities.",
  alternates: {
    canonical: absoluteUrl("/find-remote-job-with-ai"),
  },
  openGraph: {
    type: "article",
    url: absoluteUrl("/find-remote-job-with-ai"),
    title:
      "Find a Remote Job with the Help of AI in 29 Days | RemotelyTalents Academy",
    description:
      "A recruiter-led 29-day course to help you stop guessing, improve your CV and LinkedIn, use AI properly, and get more remote job interview opportunities.",
    images: [
      {
        url: "https://cdn.prod.website-files.com/62a0b732bafc8e2f190f701c/69c260f396f613675d5aecba_a70d2a2ab3c6c8c83da9f903fbf73039_hero-picture.avif",
        width: 1024,
        height: 1024,
        alt: "Professional working remotely while using the Remote Job With AI course",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Find a Remote Job with the Help of AI in 29 Days | RemotelyTalents Academy",
    description:
      "A recruiter-led 29-day course to help you stop guessing, improve your CV and LinkedIn, use AI properly, and get more remote job interview opportunities.",
    images: [
      "https://cdn.prod.website-files.com/62a0b732bafc8e2f190f701c/69c260f396f613675d5aecba_a70d2a2ab3c6c8c83da9f903fbf73039_hero-picture.avif",
    ],
  },
};

export default function FindRemoteJobWithAIPage() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Find a Remote Job with the Help of AI in 29 Days",
    description:
      "A recruiter-led 29-day course that helps professionals search smarter, improve their applications, use AI properly, and move toward more remote job interviews.",
    provider: {
      "@type": "Organization",
      name: "RemotelyTalents Academy",
      url: absoluteUrl("/"),
    },
    educationalCredentialAwarded: "Remote job search system",
    url: absoluteUrl("/find-remote-job-with-ai"),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <RemoteJobWithAIPageContent />
    </>
  );
}
