export const aboutContent = {
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
    eyebrow: "About RemotelyTalents Academy",
    title:
      "Remote jobs are real. The hard part is knowing where to look, what to trust, and how to show up clearly.",
    description:
      "RemotelyTalents Academy helps professionals navigate the remote-job market with recruiter-led education, practical tools, and future coaching programs built from real hiring experience, not recycled internet advice.",
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
  agencyProof: {
    title: "The Academy is built on the experience of a real remote recruitment agency.",
    description:
      "RemotelyTalents launched in 2022 to help companies hire remote professionals across key business functions. That recruiting work gives the Academy a practical foundation: what employers look for, where candidates lose trust, and how stronger positioning can make the hiring process clearer.",
    stats: [
      {
        value: "2022",
        label: "RemotelyTalents launched",
      },
      {
        value: "1,000+",
        label: "remote placements across key regions",
      },
      {
        value: "3",
        label: "core regions: Europe, Latin America, and North America",
      },
    ],
  },
  founder: {
    name: "Adomas Pranevicius",
    role: "Founder & CEO of RemotelyTalents",
    body:
      "Adomas founded RemotelyTalents to help companies build remote teams more clearly and effectively. The Academy extends that mission to candidates: helping professionals understand the remote-job market, avoid weak advice, and build a more structured path toward better opportunities.",
    principles: [
      "Keep the advice practical and grounded in hiring reality.",
      "Avoid inflated promises, fake urgency, and guaranteed-outcome language.",
      "Build education first, then add coaching programs where human support creates real value.",
    ],
  },
  beliefs: {
    title: "What we believe",
    items: [
      {
        title: "Remote work should be pursued with clarity, not fantasy.",
        body:
          "The promise is not beach-laptop lifestyle imagery. The real value is flexibility, better fit, and a more intentional way to work.",
      },
      {
        title: "AI should support your search, not replace your judgment.",
        body:
          "AI can save time and improve preparation, but it should help people sound more precise and human, not generic.",
      },
      {
        title: "Trust matters more than hype.",
        body:
          "Career decisions are personal. The Academy should be clear about what it can help with, what it cannot guarantee, and who it is best suited for.",
      },
    ],
  },
  direction: {
    title: "Where the Academy is going",
    body:
      "We are building the Academy in layers. First, clear self-paced lessons for people who feel stuck and want a better remote-job search. Then practical tools that reduce wasted effort. Next, coaching for people who want feedback, structure, and support while they put the work into action.",
    columns: [
      {
        title: "Courses",
        body:
          "Step-by-step lessons for finding real remote roles, improving your CV and LinkedIn, and using AI without sounding generic.",
      },
      {
        title: "Tools and resources",
        body:
          "Checklists, prompts, templates, and filters that help people spot better opportunities, prepare faster, and stop applying in a vacuum.",
      },
      {
        title: "Coaching programs",
        body:
          "Future guided programs for people who want feedback, accountability, and a calmer way to keep moving when the search gets discouraging.",
      },
    ],
  },
} as const;
