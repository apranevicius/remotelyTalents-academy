import type { Metadata } from "next";
import Image from "next/image";

import { AcademyFooter } from "../_components/academy-footer";
import { AcademyHeader } from "../_components/academy-header";
import { absoluteUrl } from "../_lib/site-config";
import { coachingProgramsContent } from "../coaching-programs/_content/coaching-programs-content";
import { IntroCallForm } from "./intro-call-form";

const pageTitle = "Request a 15-Minute Intro Call";
const pageDescription =
  "Request a quick 15-minute one-on-one video call with Anastasia to discuss which remote job coaching program may fit your situation.";
const pageUrl = absoluteUrl("/intro-call");
const introCallFaqItems = [
  {
    question: "What is the intro call for?",
    answer:
      "The intro call is a short fit conversation. Anastasia will ask about your current remote job search, what feels stuck, and whether one of the coaching programs is a sensible next step.",
  },
  {
    question: "Is this a sales call?",
    answer:
      "No. The call is there to understand your situation and explain the next step clearly. If coaching is not the right fit, we will say that.",
  },
  {
    question: "Do I need to prepare anything?",
    answer:
      "Just submit your LinkedIn profile and be ready to share what kind of remote role you are looking for, what you have already tried, and where you feel unsure.",
  },
] as const;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
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
        url: absoluteUrl("/coaching-programs/remote-coaching-video-call-anastasia.webp"),
        width: 1024,
        height: 1024,
        alt: "Remote job coaching intro call with Anastasia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | RemotelyTalents Academy`,
    description: pageDescription,
    images: [
      absoluteUrl("/coaching-programs/remote-coaching-video-call-anastasia.webp"),
    ],
  },
};

export default function IntroCallRoute() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: pageTitle,
    url: pageUrl,
    description: pageDescription,
    isPartOf: {
      "@type": "WebSite",
      name: "RemotelyTalents Academy",
      url: absoluteUrl("/"),
    },
    about: {
      "@type": "Service",
      name: "Remote Job Coaching Programs",
      serviceType: "Remote job search coaching",
      provider: {
        "@type": "Organization",
        name: "RemotelyTalents Academy",
        url: absoluteUrl("/"),
      },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: introCallFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-[var(--rt-cream)] text-[var(--rt-green)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <AcademyHeader {...coachingProgramsContent.header} />

      <section className="bg-[var(--rt-green)] [background-image:var(--rt-hero-surface)] text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-[0.92fr_0.8fr] lg:items-center lg:px-12 lg:py-18">
          <div>
            <h1 className="max-w-3xl text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl lg:text-[3.55rem] lg:leading-[1.04]">
              Book a short call before choosing a coaching program
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
              Tell us where you are in your remote job search. We will get back
              to you within 24 hours and arrange a quick 15-minute call with
              Anastasia.
              <br />
              <br />
              The call is there to understand your goals, your current search,
              and whether our coaching programs are a good fit.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "No pressure or hard sales call.",
                "A quick conversation about your remote job search.",
                "Clear guidance on the best next step.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[color:rgba(240,253,81,0.36)] bg-[color:rgba(240,253,81,0.12)] text-[11px] font-bold text-[var(--rt-yellow)]">
                    ✓
                  </span>
                  <p className="text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <IntroCallForm />
          </div>
        </div>
      </section>

      <section className="bg-[var(--rt-surface-soft)]">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-14 lg:px-12">
          <div className="grid gap-8 rounded-[2rem] border border-[color:rgba(4,61,49,0.08)] bg-white p-6 shadow-[0_14px_36px_rgba(4,61,49,0.04)] sm:p-8 lg:grid-cols-[0.72fr_1fr] lg:items-center lg:p-10">
            <div className="overflow-hidden rounded-[1.6rem] border border-[color:rgba(4,61,49,0.08)] bg-[var(--rt-cream)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/coaching-programs/anastasia-coach-portrait.webp"
                  alt="Anastasia Izotova, remote job search coach"
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-lg font-extrabold tracking-[-0.03em] text-[var(--rt-green)]">
                  Anastasia Izotova
                </p>
                <p className="mt-1 text-sm leading-6 text-[color:color-mix(in_srgb,var(--rt-green)_68%,white)]">
                  Recruitment experience + psychology-backed career strategy.
                </p>
              </div>
            </div>

            <div>
              <h2 className="max-w-2xl text-3xl font-extrabold tracking-[-0.04em] text-[var(--rt-green)] sm:text-4xl">
                A practical conversation before you decide
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[color:color-mix(in_srgb,var(--rt-green)_74%,white)] sm:text-lg">
                Use the intro call to talk through your current search, what
                feels stuck, and whether coaching is the right next step.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    title: "Hiring view",
                    body: "See your search through a recruitment lens.",
                    icon: <SearchIcon />,
                  },
                  {
                    title: "Quick diagnosis",
                    body: "Name the likely gap before you keep applying.",
                    icon: <TargetIcon />,
                  },
                  {
                    title: "Honest fit",
                    body: "No hard sales call. No job guarantees.",
                    icon: <CheckIcon />,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.2rem] border border-[color:rgba(4,61,49,0.08)] bg-[var(--rt-cream)] p-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-[12px] bg-[var(--rt-yellow)] text-[var(--rt-green)]">
                      {item.icon}
                    </div>
                    <h3 className="mt-4 text-base font-extrabold tracking-[-0.02em] text-[var(--rt-green)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[color:color-mix(in_srgb,var(--rt-green)_70%,white)]">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-16 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[var(--rt-green)] sm:text-4xl">
            Before you request a call
          </h2>
          <p className="mt-4 text-base leading-8 text-[color:color-mix(in_srgb,var(--rt-green)_74%,white)]">
            A few quick answers so you know exactly what you are signing up
            for.
          </p>
        </div>

        <div className="mt-10 grid gap-3">
          {introCallFaqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-[1.4rem] border border-[var(--rt-line)] bg-white p-5 shadow-[0_14px_32px_rgba(4,61,49,0.035)] open:bg-[var(--rt-surface)] sm:p-6"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left marker:hidden">
                <h3 className="text-lg font-extrabold tracking-[-0.02em] text-[var(--rt-green)] sm:text-xl">
                  {item.question}
                </h3>
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--rt-line)] bg-[var(--rt-cream)] text-lg font-semibold leading-none text-[var(--rt-green)] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_74%,white)] sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <AcademyFooter description="RemotelyTalents Academy helps professionals improve their remote job search through education, tools, and coaching. Results vary and depend on your experience, market conditions, and execution." />
    </main>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.2"
    >
      <path
        d="m20 20-4.2-4.2m1.2-5.3a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.2"
    >
      <path
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-4h.01"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2.2"
    >
      <path
        d="m5 12 4 4L19 6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
