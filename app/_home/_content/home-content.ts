export const homeContent = {
  header: {
    ctaLabel: "Find a Remote Job",
    ctaHref: "/coaching-programs",
    navLinks: [
      {
        href: "/find-remote-job-with-ai",
        label: "Remote Job Course",
      },
      {
        href: "/coaching-programs",
        label: "Coaching Programs",
      },
      {
        href: "/about",
        label: "About us",
      },
    ],
  },
  hero: {
    eyebrow: "RemotelyTalents Academy",
    title: "If you feel stuck trying to get a remote job, start here.",
    description:
      "RemotelyTalents Academy gives professionals a clearer, recruiter-led way to improve their positioning, search smarter, and move toward more real interview opportunities.",
    imageSrc:
      "https://cdn.prod.website-files.com/62a0b732bafc8e2f190f701c/69c3ae5456f9e60e8a2a0ee3_6-candidates.avif",
    imageAlt:
      "A shortlist-style visual showing three remote-job candidates in layered profile cards.",
  },
  trustStrip: {
    rating: "4.9 out of 5 stars from 3,000+ reviews",
    message:
      "Trusted by professionals looking for a clearer path to remote work.",
    avatars: [
      { src: "/trust-avatar-1.jpg", alt: "Academy audience profile 1" },
      { src: "/trust-avatar-2.jpg", alt: "Academy audience profile 2" },
      { src: "/trust-avatar-3.jpg", alt: "Academy audience profile 3" },
      { src: "/trust-avatar-4.jpg", alt: "Academy audience profile 4" },
    ],
  },
  helps: {
    title:
      "A clearer way to make progress toward a remote job.",
    description:
      "The Academy helps you stop guessing, strengthen how you present yourself, and focus your effort on actions that are more likely to lead to real interview opportunities.",
    paths: [
      {
        label: "Remote Job Course",
        title: "Find a Remote Job With AI",
        description:
          "A self-paced video course and toolkit for people who want a clearer remote job search process they can follow on their own.",
        bullets: [
          "29-day remote job search plan",
          "AI prompts, templates, and practical tools",
          "Best if you want structure without live coaching",
        ],
        ctaLabel: "View Remote Job Course",
        ctaHref: "/find-remote-job-with-ai",
      },
      {
        label: "Coaching Programs",
        title: "Remote Job Coaching Programs",
        description:
          "Live coaching programs for people who want expert feedback on their positioning, applications, interviews, and next steps.",
        bullets: [
          "Weekly coaching and expert interaction",
          "1:1 strategy sessions",
          "Best if you want direct support while applying",
        ],
        ctaLabel: "View Coaching Programs",
        ctaHref: "/coaching-programs",
        featured: true,
      },
    ],
  },
  agencyIntro: {
    title:
      "Built by a remote recruitment agency, not a generic online course brand.",
    description:
      "RemotelyTalents brings real remote hiring experience into the Academy so the guidance feels practical, credible, and shaped by how employers actually evaluate candidates.",
    highlights: [
      {
        title: "Launched in 2022",
        description:
          "RemotelyTalents was built to help companies hire for remote roles with a more modern, international approach.",
      },
      {
        title: "1,000+ placements across key regions",
        description:
          "Over the years, the team has placed more than a thousand candidates into remote roles across Europe, Latin America, and North America.",
      },
      {
        title: "Senior recruiters across core functions",
        description:
          "The team specializes in marketing, eCommerce, operations, finance, tech, and developer-type roles.",
      },
    ],
  },
  featuredCourse: {
    eyebrow: "Featured Course",
    title: "Find a Remote Job with the Help of AI in 29 Days",
    description:
      "A recruiter-led 29-day system for people who are tired of guessing, tired of low-response applications, and ready for a clearer path to a real remote job.",
    highlights: [
      "Fix how you show up in your CV, LinkedIn, and applications.",
      "Search smarter and avoid fake jobs, weak listings, and wasted effort.",
      "Use AI to save time, prepare better, and move toward more interviews.",
    ],
    imageSrc:
      "/course-assets/remote-job-with-ai-pricing-bundle.png",
    imageAlt: "Remote Job With AI course and toolkit bundle",
    ctaLabel: "Learn More About The Course",
    ctaHref: "/find-remote-job-with-ai",
  },
} as const;
