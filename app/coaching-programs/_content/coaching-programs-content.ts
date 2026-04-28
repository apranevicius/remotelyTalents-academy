export const coachingProgramsContent = {
  header: {
    ctaLabel: "View Course",
    ctaHref: "/find-remote-job-with-ai",
    navLinks: [
      {
        href: "/about",
        label: "About us",
      },
      {
        href: "/coaching-programs",
        label: "Coaching",
      },
    ],
  },
  hero: {
    eyebrow: "Coming soon",
    title: "Coaching for your remote job search.",
    description:
      "Practical support, feedback, and accountability for professionals who want to land remote work.",
    primaryCta: {
      label: "Join the waiting list",
      href: "#interest",
    },
    visualAlt:
      "Remote coaching video call with a coach, job seeker, and coaching focus notes.",
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
  why: {
    title:
      "You do not need more random job-search advice. You need a clearer way forward.",
    body:
      "If you have already tried job boards, templates, LinkedIn applications, or AI tools and still feel stuck, coaching gives you more personal guidance, feedback, and accountability.",
    items: [
      {
        title: "Know what to fix first",
        body:
          "Get help spotting where your remote-job search is breaking down.",
      },
      {
        title: "Improve how you show up",
        body:
          "Strengthen your CV, LinkedIn, applications, and interview preparation.",
      },
      {
        title: "Keep moving with support",
        body:
          "Stay focused with practical next steps instead of searching alone.",
      },
    ],
  },
  interest: {
    title: "Join the waitlist for remote-job coaching.",
    body:
      "If you have tried applications, job boards, templates, or AI tools and still feel stuck, join the waitlist. We will let you know when personal coaching spots open.",
    emailLabel: "Email address",
    emailPlaceholder: "Enter your email",
    ctaLabel: "Join the waiting list",
    reassurance: "No spam. Just an update when coaching becomes available.",
    successTitle: "You are on the waitlist.",
    successBody:
      "Thank you. We will email you when remote-job coaching opens.",
  },
} as const;
