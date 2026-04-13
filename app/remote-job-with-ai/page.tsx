import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remote Job With AI | RemotelyTalents Academy",
  description:
    "Find a remote job with the help of AI in 29 days with a recruiter-led system from RemotelyTalents Academy.",
};

const steps = [
  {
    phase: "Phase 1",
    title: "Is Remote Work Right for You?",
    body: "Understand whether remote work is actually the right fit for you and what remote employers expect from strong candidates. This phase helps you stop guessing and start building the habits that matter. You will also identify the strengths you already have and learn how to turn them into proof later in the process.",
    imageSrc: "/phases/1.png",
    imageAlt: "Phase 1 mindset and fit overview",
  },
  {
    phase: "Phase 2",
    title: "Fix How You Show Up",
    body: "This phase helps you stop looking generic. You will improve your CV, cover letters, LinkedIn profile, and other application assets so they feel more relevant, more credible, and more aligned with remote roles. The goal is to help recruiters understand your value faster and take you more seriously.",
    imageSrc: "/phases/2.avif",
    imageAlt: "Phase 2 positioning overview",
  },
  {
    phase: "Phase 3",
    title: "Find Better Remote Opportunities",
    body: "Learn where to find better remote roles and how to avoid wasting time on weak, fake, or misleading opportunities. This phase helps you build a smarter search system so you are not relying only on crowded job boards. You will also get a clearer sense of which channels are actually worth your effort.",
    imageSrc: "/phases/3.avif",
    imageAlt: "Phase 3 opportunities overview",
  },
  {
    phase: "Phase 4",
    title: "Use AI Without Sounding Fake",
    body: "Use AI in a practical way that helps you move faster without sounding fake or robotic. This phase shows you how to use AI to research roles, improve applications, prepare for interviews, and reduce repetitive work. The goal is not to replace your real experience, but to help you use it better.",
    imageSrc: "/phases/4.avif",
    imageAlt: "Phase 4 AI advantage overview",
  },
  {
    phase: "Phase 5",
    title: "Handle Interviews and Offers Better",
    body: "This phase helps you handle interviews, screening calls, and offer conversations with more confidence. You will learn how to structure stronger answers, present yourself more clearly, and approach negotiation in a calmer, smarter way. It is about helping you feel more prepared at the moments that matter most.",
    imageSrc: "/phases/5.avif",
    imageAlt: "Phase 5 offer strategy overview",
  },
  {
    phase: "Phase 6",
    title: "Create More Opportunities",
    body: "Create more opportunities outside the standard application flow. This phase focuses on outreach, hidden-job tactics, and finding smarter ways to reach recruiters or hiring managers directly. It is designed to help you stop waiting passively and start creating more real chances for yourself.",
    imageSrc: "/phases/6.avif",
    imageAlt: "Phase 6 advanced outreach overview",
  },
];

const assets = [
  {
    title: "Make your CV look clearer and more relevant",
    body: "Use practical CV guidance and checklists to make your profile look stronger, clearer, and more relevant for remote roles.",
    label: "Checklist Pack",
    chips: ["CV audit", "Positioning", "Quick fixes"],
  },
  {
    title: "Turn LinkedIn into a stronger job-search asset",
    body: "Turn your profile into a stronger remote-job asset with clearer positioning, better visibility, and more recruiter-friendly messaging.",
    label: "Profile Guide",
    chips: ["Headline", "About", "Visibility"],
  },
  {
    title: "Use AI to save time and improve applications",
    body: "Use prompts and structured guidance to research roles, personalize applications, prepare for interviews, and speed up repetitive tasks.",
    label: "Prompt Pack",
    chips: ["Research", "Tailoring", "Prep"],
  },
  {
    title: "Filter out bad jobs faster",
    body: "Use clearer evaluation logic so you can spend less time on weak opportunities and more time on real ones.",
    label: "Cheat Sheet",
    chips: ["Red flags", "Filters", "Signal check"],
  },
  {
    title: "Feel more prepared for interviews and offers",
    body: "Prepare for screening calls, interviews, and offer conversations with stronger structure, clearer answers, and calmer negotiation guidance.",
    label: "Support Scripts",
    chips: ["Answers", "Confidence", "Negotiation"],
  },
  {
    title: "Create more chances through smarter outreach",
    body: "Use direct outreach ideas to create more opportunities beyond public job boards.",
    label: "Message Kit",
    chips: ["Outreach", "Follow-up", "Hidden jobs"],
  },
];

const heroReassuranceItems = [
  { icon: "$", label: "One-time purchase" },
  { icon: "∞", label: "Lifetime access" },
  { icon: "✓", label: "No subscription required" },
];

const trustAvatars = [
  { src: "/trust-avatar-1.jpg", alt: "Course audience profile 1" },
  { src: "/trust-avatar-2.jpg", alt: "Course audience profile 2" },
  { src: "/trust-avatar-3.jpg", alt: "Course audience profile 3" },
  { src: "/trust-avatar-4.jpg", alt: "Course audience profile 4" },
];

const audienceFit = [
  {
    icon: "↗",
    text: "You want a remote job, but the whole process feels messy and hard to trust",
  },
  {
    icon: "!",
    text: "You are tired of trying random things and still feeling stuck",
  },
  {
    icon: "✓",
    text: "You want a calmer, clearer way to move forward",
  },
];

const faqs = [
  {
    question: "Is this course for beginners?",
    answer:
      "Yes. This course is designed for people who want their first real remote job and need a clearer, more practical system.",
  },
  {
    question: "Do I need remote work experience already?",
    answer:
      "No. The course is built to help people who are trying to land their first remote role, especially if they need help understanding what remote employers expect.",
  },
  {
    question: "Do I need to be highly technical?",
    answer:
      "No. The course is not only for technical roles. It is built for people in a range of professional fields who want to improve how they position themselves for remote work.",
  },
  {
    question: "Is this just a course about AI?",
    answer:
      "No. The main goal is to help you get a remote job. AI is used as a support tool to help you move faster and work more effectively.",
  },
  {
    question: "Will this guarantee I get hired in 29 days?",
    answer:
      "No. The 29 days framing refers to the structure of the action plan. Results still depend on your background, effort, positioning, and the roles you apply for.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  invert?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.22em] ${
            invert ? "text-[var(--rt-yellow)]" : "text-[var(--rt-green-2)]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`${eyebrow ? "mt-4" : ""} text-3xl font-extrabold tracking-[-0.04em] sm:text-[2.15rem] lg:text-[2.4rem] ${
          invert ? "text-white" : "text-[var(--rt-green)]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-7 sm:text-[1.0625rem] sm:leading-8 ${
            align === "center" ? "mx-auto" : ""
          } ${
            invert
              ? "text-white/78"
              : "text-[color:color-mix(in_srgb,var(--rt-green)_78%,white)]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function RemoteJobWithAIPage() {
  return (
    <main id="top" className="bg-[var(--rt-cream)] text-[var(--rt-green)]">
      <header className="sticky top-0 z-20 border-b border-[var(--rt-line)] bg-[color:rgba(247,247,241,0.92)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-4">
            <Image
              src="/remotelytalents-logo.png"
              alt="RemotelyTalents"
              width={220}
              height={65}
              className="h-auto w-[104px] sm:w-[132px]"
              priority
            />
            <span className="hidden h-8 w-[2px] rounded-full bg-[color:rgba(4,61,49,0.14)] sm:block" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[var(--rt-green-2)] sm:text-sm sm:tracking-[0.32em]">
              Academy
            </span>
          </Link>
          <Link
            href="#offer"
            className="hidden items-center justify-center rounded-[6px] bg-[var(--rt-green)] px-5 py-3 text-sm font-bold !text-white transition-transform hover:-translate-y-0.5 hover:bg-[var(--rt-green-2)] sm:inline-flex"
          >
            Get Lifetime Access
          </Link>
        </div>
      </header>

      <section className="bg-[radial-gradient(circle_at_top_left,rgba(240,253,81,0.2),transparent_28%),linear-gradient(180deg,#043d31_0%,#032f26_100%)] text-white">
        <div className="mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--rt-yellow)]">
              Start Your Remote Chapter
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl lg:text-[3.6rem]">
              Find a Remote Job with the Help of AI in 29 Days
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Use a step-by-step course to position yourself better, apply with
              more confidence, and find more real remote opportunities.
            </p>
            <div className="mt-9">
              <Link
                href="#offer"
                className="inline-flex items-center justify-center rounded-[7px] border border-[color:rgba(4,61,49,0.14)] bg-[var(--rt-yellow)] px-7 py-4 text-sm font-bold !text-[var(--rt-green)] transition-transform hover:-translate-y-0.5"
              >
                Get Lifetime Access
              </Link>
            </div>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/72 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-3">
              {heroReassuranceItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/18 bg-white/8 text-[11px] font-bold text-[var(--rt-yellow)]">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative min-h-[320px] sm:min-h-[360px]">
              <Image
                src="https://cdn.prod.website-files.com/62a0b732bafc8e2f190f701c/69c260f396f613675d5aecba_a70d2a2ab3c6c8c83da9f903fbf73039_hero-picture.avif"
                alt="Professional working remotely"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="scale-[1.4] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 -mt-8 sm:-mt-10 lg:-mt-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-xl rounded-[1.9rem] border border-[color:rgba(4,61,49,0.08)] bg-white px-5 py-5 shadow-[0_20px_42px_rgba(4,61,49,0.08)] sm:max-w-2xl sm:px-7 sm:py-6">
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-5 sm:text-left">
              <div className="flex items-center justify-center">
                {trustAvatars.map((avatar, index) => (
                  <div
                    key={avatar.src}
                    className={`relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-[0_8px_18px_rgba(4,61,49,0.08)] ${
                      index === 0 ? "" : "-ml-3"
                    }`}
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-2 sm:items-start">
                <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="inline-flex h-6 w-6 items-center justify-center rounded-[2px] bg-[#00b67a] text-[13px] font-bold text-white"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="max-w-[24rem] text-sm font-semibold leading-6 text-[var(--rt-green)] sm:text-[0.96rem]">
                  4.9 out of 5 stars from 3,000+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[var(--rt-cream)]">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 sm:px-10 sm:pt-16 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[var(--rt-green)] sm:text-[2.15rem] lg:text-[2.4rem]">
              A better way to start your remote job search.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_78%,white)] sm:text-[1.0625rem] sm:leading-8">
              This is not another generic job-search course. It is a practical
              system built to help you avoid fake jobs, weak advice, and
              scattered application effort by following a clearer process.
            </p>
            <div className="mx-auto mt-10 max-w-2xl rounded-[2rem] border border-[var(--rt-line)] bg-white p-8 text-left shadow-[0_16px_44px_rgba(4,61,49,0.06)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--rt-green-2)]">
                This is for you if
              </p>
              <div className="mt-6 space-y-3">
                {audienceFit.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-4 rounded-[1.4rem] border border-[var(--rt-line)] bg-[var(--rt-cream)] px-4 py-4"
                  >
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--rt-green)] text-sm font-bold text-white">
                      {item.icon}
                    </span>
                    <p className="text-base leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_82%,white)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="bg-[var(--rt-surface-soft)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <SectionHeading
            eyebrow=""
            title="Here’s what you’ll learn to do differently"
            description="This course walks you through six focused phases to help you stop guessing, avoid wasted effort, and build a clearer path to a real remote job."
            align="center"
          />
          <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-5">
            {steps.map((step) => (
              <article
                key={step.title}
                className="rounded-[2rem] border border-[var(--rt-line)] bg-white p-5 shadow-[0_16px_36px_rgba(4,61,49,0.05)] sm:p-6"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--rt-green-2)]">
                      {step.phase}
                    </p>
                    <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-[var(--rt-green)] sm:text-[1.8rem]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_80%,white)]">
                      {step.body}
                    </p>
                  </div>
                  <div className="sm:w-[220px] lg:w-[280px]">
                    <div className="overflow-hidden rounded-[1.6rem] border border-[var(--rt-line)] bg-[var(--rt-cream)]">
                      <Image
                        src={step.imageSrc}
                        alt={step.imageAlt}
                        width={640}
                        height={360}
                        className="h-36 w-full object-cover object-left-top sm:h-40 lg:h-44"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--rt-cream)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <SectionHeading
            eyebrow=""
            title="Your Remote Job Toolkit"
            description="You’re not only getting the course. You’re also getting practical templates, prompts, checklists, and cheat sheets that help you apply better, save time, and move forward with more clarity."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
            {assets.map((asset, index) => (
              <article
                key={asset.title}
                className="rounded-[2rem] border border-[var(--rt-line)] bg-white p-7 shadow-[0_16px_36px_rgba(4,61,49,0.05)]"
              >
                <div className="mb-6 rounded-[1.6rem] bg-[var(--rt-cream)] p-4">
                  {index === 0 ? (
                    <div className="relative mx-auto max-w-[250px]">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-[1.2rem] border border-[var(--rt-line)] bg-white p-3 shadow-[0_14px_24px_rgba(4,61,49,0.06)]">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[color:color-mix(in_srgb,var(--rt-green)_55%,white)]">
                            Before
                          </p>
                          <div className="mt-3 space-y-2">
                            <div className="h-2.5 w-3/4 rounded-full bg-[color:color-mix(in_srgb,var(--rt-green)_18%,white)]" />
                            <div className="h-2 w-full rounded-full bg-[color:color-mix(in_srgb,var(--rt-green)_12%,white)]" />
                            <div className="h-2 w-[88%] rounded-full bg-[color:color-mix(in_srgb,var(--rt-green)_12%,white)]" />
                            <div className="h-2 w-[82%] rounded-full bg-[color:color-mix(in_srgb,var(--rt-green)_12%,white)]" />
                            <div className="rounded-[0.8rem] border border-dashed border-[color:rgba(4,61,49,0.18)] px-2 py-2 text-[10px] font-medium leading-4 text-[color:color-mix(in_srgb,var(--rt-green)_60%,white)]">
                              Generic title
                              <br />
                              No metrics
                            </div>
                          </div>
                        </div>
                        <div className="rounded-[1.2rem] border border-[color:rgba(6,80,64,0.14)] bg-white p-3 shadow-[0_18px_30px_rgba(4,61,49,0.08)]">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--rt-green-2)]">
                            After
                          </p>
                          <div className="mt-3 space-y-2">
                            <div className="h-2.5 w-4/5 rounded-full bg-[var(--rt-green-2)]" />
                            <div className="h-2 w-full rounded-full bg-[color:color-mix(in_srgb,var(--rt-green)_22%,white)]" />
                            <div className="h-2 w-[90%] rounded-full bg-[color:color-mix(in_srgb,var(--rt-green)_22%,white)]" />
                            <div className="h-2 w-[84%] rounded-full bg-[color:color-mix(in_srgb,var(--rt-green)_22%,white)]" />
                            <div className="rounded-[0.8rem] bg-[color:rgba(240,253,81,0.55)] px-2 py-2 text-[10px] font-semibold leading-4 text-[var(--rt-green)]">
                              Clear role
                              <br />
                              Stronger proof
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--rt-green)] text-sm font-bold text-white shadow-[0_10px_20px_rgba(4,61,49,0.18)]">
                        →
                      </div>
                    </div>
                  ) : index === 1 ? (
                    <div className="relative mx-auto max-w-[250px]">
                      <div className="rounded-[1.2rem] border border-[var(--rt-line)] bg-white p-3 shadow-[0_16px_26px_rgba(4,61,49,0.08)]">
                        <div className="rounded-[1rem] bg-[linear-gradient(135deg,rgba(10,102,194,0.16),rgba(240,253,81,0.28))] px-3 py-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-[0.8rem] bg-[#0A66C2] text-lg font-bold text-white">
                              in
                            </div>
                            <div className="flex-1">
                              <div className="h-2.5 w-4/5 rounded-full bg-[var(--rt-green)]" />
                              <div className="mt-2 h-2 w-3/5 rounded-full bg-[color:color-mix(in_srgb,var(--rt-green)_24%,white)]" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <div className="rounded-[0.9rem] bg-[var(--rt-cream)] px-3 py-2.5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--rt-green-2)]">
                              Headline
                            </p>
                            <p className="mt-1 text-[11px] font-medium leading-4 text-[var(--rt-green)]">
                              Clear role + value
                            </p>
                          </div>
                          <div className="rounded-[0.9rem] bg-[var(--rt-cream)] px-3 py-2.5">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--rt-green-2)]">
                              About
                            </p>
                            <p className="mt-1 text-[11px] font-medium leading-4 text-[var(--rt-green)]">
                              Stronger proof
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="rounded-full bg-[color:rgba(240,253,81,0.7)] px-2 py-1 text-[10px] font-semibold text-[var(--rt-green)]">
                            Better banner
                          </span>
                          <span className="rounded-full bg-[color:rgba(240,253,81,0.7)] px-2 py-1 text-[10px] font-semibold text-[var(--rt-green)]">
                            Stronger keywords
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="relative mx-auto flex h-32 max-w-[220px] items-end justify-center">
                      <div className="absolute bottom-0 left-1/2 h-6 w-36 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(4,61,49,0.18),transparent_70%)] blur-md" />
                      <div className="absolute bottom-2 left-[18px] h-24 w-[72px] -rotate-6 rounded-[1rem] border border-[var(--rt-line)] bg-white px-3 py-3 shadow-[0_18px_28px_rgba(4,61,49,0.08)]" />
                      <div className="absolute bottom-3 right-[18px] h-24 w-[72px] rotate-6 rounded-[1rem] border border-[var(--rt-line)] bg-white px-3 py-3 shadow-[0_18px_28px_rgba(4,61,49,0.08)]" />
                      <div className="relative z-10 h-28 w-[92px] rounded-[1.1rem] border border-[color:rgba(4,61,49,0.12)] bg-[linear-gradient(180deg,#ffffff_0%,#f7f7f1_100%)] px-3 py-3 shadow-[0_22px_34px_rgba(4,61,49,0.12)]">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--rt-green-2)]">
                          {asset.label}
                        </p>
                        <div className="mt-3 space-y-1.5">
                          {asset.chips.map((chip) => (
                            <div
                              key={chip}
                              className="rounded-full bg-white px-2 py-1 text-[10px] font-medium leading-none text-[var(--rt-green)] shadow-[0_6px_10px_rgba(4,61,49,0.06)]"
                            >
                              {chip}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="text-2xl font-bold tracking-[-0.04em] text-[var(--rt-green)]">
                  {asset.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_80%,white)]">
                  {asset.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="offer" className="bg-[var(--rt-surface-soft)]">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="rounded-[2.4rem] bg-[var(--rt-green)] p-8 text-white shadow-[0_30px_80px_rgba(4,61,49,0.2)] sm:p-12">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.22em] text-[var(--rt-yellow)]">
              Offer
            </p>
            <h2 className="mt-4 text-center text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
              Get Lifetime Access
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-8 text-white/80">
              Get the full Remote Job With AI course and use the 29-day system
              to improve your positioning, search smarter, and start creating
              more real opportunities.
            </p>
            <div className="mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-[2rem] bg-white/7 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/62">
                  Launch pricing
                </p>
                <p className="mt-3 text-5xl font-extrabold tracking-[-0.05em]">
                  Under $100
                </p>
                <p className="mt-3 text-sm leading-6 text-white/72">
                  Final price can be tightened before launch. For now, the page
                  reflects the intended accessible one-time purchase range.
                </p>
                <p className="mt-4 text-sm font-semibold leading-6 text-[var(--rt-yellow)]">
                  One-time purchase. Lifetime access. Guided 29-day system.
                </p>
                <Link
                  href="#top"
                  className="mt-7 inline-flex items-center justify-center rounded-[7px] border border-[color:rgba(4,61,49,0.14)] bg-[var(--rt-yellow)] px-7 py-4 text-sm font-bold !text-[var(--rt-green)] transition-transform hover:-translate-y-0.5"
                >
                  Get Lifetime Access
                </Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Full course access",
                  "Structured 29-day framework",
                  "Templates, prompts, and checklists",
                  "Practical remote job search guidance",
                  "Beginner-friendly step-by-step learning flow",
                  "Recruiter-led perspective",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-white/12 bg-white/6 px-4 py-4 text-sm font-medium text-white/84"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions a skeptical buyer will ask before acting."
          description="This section exists to answer the fears that often kill action: trust, experience, AI use, and whether this is really for them."
        />
        <div className="mt-12 grid gap-5">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-[2rem] border border-[var(--rt-line)] bg-white p-7 shadow-[0_14px_32px_rgba(4,61,49,0.04)]"
            >
              <h3 className="text-2xl font-bold tracking-[-0.04em] text-[var(--rt-green)]">
                {faq.question}
              </h3>
              <p className="mt-4 max-w-3xl text-base leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_80%,white)]">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--rt-green)] text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--rt-yellow)]">
            Final CTA
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
            Stop guessing. Start following a better system.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
            If you want your first real remote job but you are tired of fake
            jobs, broken advice, and feeling stuck, this course gives you a
            more practical path forward.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-white/72">
            Clear system. Better positioning. Smarter execution. More real
            chances.
          </p>
          <div className="mt-9">
            <Link
              href="#offer"
              className="inline-flex items-center justify-center rounded-[7px] border border-[color:rgba(4,61,49,0.14)] bg-[var(--rt-yellow)] px-8 py-4 text-sm font-bold !text-[var(--rt-green)] transition-transform hover:-translate-y-0.5"
            >
              Get Lifetime Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
