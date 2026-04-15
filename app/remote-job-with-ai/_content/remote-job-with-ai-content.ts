export type Step = {
  phase: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
};

export type Asset = {
  title: string;
  body: string;
  label: string;
  chips: string[];
  imageSrc: string;
  imageAlt: string;
};

export type ReassuranceItem = {
  icon: string;
  label: string;
};

export type TrustAvatar = {
  src: string;
  alt: string;
};

export type PaymentLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type AudienceFitItem = {
  icon: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const steps: Step[] = [
  {
    phase: "Phase 1",
    title: "Know if remote work is the right move for you",
    body: "Understand whether remote work is actually the right fit for you and what remote employers expect from strong candidates. This phase helps you stop guessing and start building the habits that matter. You will also identify the strengths you already have and learn how to turn them into proof later in the process.",
    imageSrc: "/phases/1.png",
    imageAlt: "Phase 1 mindset and fit overview",
  },
  {
    phase: "Phase 2",
    title: "Make your CV, LinkedIn, and applications stronger",
    body: "This phase helps you stop looking generic. You will improve your CV, cover letters, LinkedIn profile, and other application assets so they feel more relevant, more credible, and more aligned with remote roles. The goal is to help recruiters understand your value faster and take you more seriously.",
    imageSrc: "/phases/2.avif",
    imageAlt: "Phase 2 positioning overview",
  },
  {
    phase: "Phase 3",
    title: "Find better remote jobs worth applying for",
    body: "Learn where to find better remote roles and how to avoid wasting time on weak, fake, or misleading opportunities. This phase helps you build a smarter search system so you are not relying only on crowded job boards. You will also get a clearer sense of which channels are actually worth your effort.",
    imageSrc: "/phases/3.avif",
    imageAlt: "Phase 3 opportunities overview",
  },
  {
    phase: "Phase 4",
    title: "Use AI to save time without sounding fake",
    body: "Use AI in a practical way that helps you move faster without sounding fake or robotic. This phase shows you how to use AI to research roles, improve applications, prepare for interviews, and reduce repetitive work. The goal is not to replace your real experience, but to help you use it better.",
    imageSrc: "/phases/4.avif",
    imageAlt: "Phase 4 AI advantage overview",
  },
  {
    phase: "Phase 5",
    title: "Show up better in interviews and offer conversations",
    body: "This phase helps you handle interviews, screening calls, and offer conversations with more confidence. You will learn how to structure stronger answers, present yourself more clearly, and approach negotiation in a calmer, smarter way. It is about helping you feel more prepared at the moments that matter most.",
    imageSrc: "/phases/5.avif",
    imageAlt: "Phase 5 offer strategy overview",
  },
  {
    phase: "Phase 6",
    title: "Create more opportunities through smarter outreach",
    body: "Create more opportunities outside the standard application flow. This phase focuses on outreach, hidden-job tactics, and finding smarter ways to reach recruiters or hiring managers directly. It is designed to help you stop waiting passively and start creating more real chances for yourself.",
    imageSrc: "/phases/6.avif",
    imageAlt: "Phase 6 advanced outreach overview",
  },
];

export const assets: Asset[] = [
  {
    title: "Make your applications stronger",
    body: "Use templates, examples, and simple checklists to write better cover letters, improve your CV, and send applications with less guesswork.",
    label: "Application Help",
    chips: ["CV", "Cover letters", "Checklists"],
    imageSrc:
      "https://cdn.prod.website-files.com/62a0b732bafc8e2f190f701c/69df3698f678dff1c4264c5c_application_guide.avif",
    imageAlt: "Application guide bundle preview",
  },
  {
    title: "Turn LinkedIn into a better job-search tool",
    body: "Get practical help to improve your profile, stay visible, and show up more clearly with post ideas, comment scripts, and a simple daily plan.",
    label: "LinkedIn Help",
    chips: ["Profile", "Posts", "Visibility"],
    imageSrc:
      "https://cdn.prod.website-files.com/62a0b732bafc8e2f190f701c/69df3b30b9d7a0006cef733e_linkedin_pack.avif",
    imageAlt: "LinkedIn visibility pack bundle preview",
  },
  {
    title: "Know what to say when reaching out",
    body: "Use ready-to-go prompts and message templates for recruiters, hiring managers, follow-ups, and referral requests without sounding stiff or robotic.",
    label: "Outreach Help",
    chips: ["Recruiters", "Follow-ups", "Referrals"],
    imageSrc:
      "https://cdn.prod.website-files.com/62a0b732bafc8e2f190f701c/69df3d50bca5c6bc7ef095cf_outreach_messages.avif",
    imageAlt: "Outreach message pack bundle preview",
  },
  {
    title: "Find better places to look for remote jobs",
    body: "Get access to job boards, niche sources, and remote-work communities that help you search beyond crowded mainstream listings.",
    label: "Search Guide",
    chips: ["Job boards", "Communities", "Hidden finds"],
    imageSrc:
      "https://cdn.prod.website-files.com/62a0b732bafc8e2f190f701c/69df3e1de53a198fad5a4a4f_remote_job_pack.avif",
    imageAlt: "Remote job search pack bundle preview",
  },
  {
    title: "Follow a clearer plan from day one",
    body: "Use the 29-day action plan to know what to focus on first, what to do next, and how to keep moving without feeling lost.",
    label: "Action Plan",
    chips: ["29 days", "Focus", "Next steps"],
    imageSrc:
      "https://cdn.prod.website-files.com/62a0b732bafc8e2f190f701c/69df3f685682e71e14f63938_29_day_plan.avif",
    imageAlt: "29-day action plan bundle preview",
  },
  {
    title: "Feel more prepared for remote interviews",
    body: "Use the interview checklist and readiness assessment to prepare more calmly, feel more confident, and show up better on screen.",
    label: "Prep Guide",
    chips: ["Interviews", "Readiness", "Confidence"],
    imageSrc:
      "https://cdn.prod.website-files.com/62a0b732bafc8e2f190f701c/69df40837d3a70d4b26c3184_interview_pack.avif",
    imageAlt: "Remote interview readiness pack bundle preview",
  },
];

export const heroReassuranceItems: ReassuranceItem[] = [
  { icon: "$", label: "One-time purchase" },
  { icon: "∞", label: "Lifetime access" },
  { icon: "✓", label: "No subscription required" },
];

export const trustAvatars: TrustAvatar[] = [
  { src: "/trust-avatar-1.jpg", alt: "Course audience profile 1" },
  { src: "/trust-avatar-2.jpg", alt: "Course audience profile 2" },
  { src: "/trust-avatar-3.jpg", alt: "Course audience profile 3" },
  { src: "/trust-avatar-4.jpg", alt: "Course audience profile 4" },
];

export const paymentLogos: PaymentLogo[] = [
  { src: "/payment-logos/stripe.svg", alt: "Stripe", width: 56, height: 24 },
  { src: "/payment-logos/paypal.svg", alt: "PayPal", width: 62, height: 24 },
  { src: "/payment-logos/visa.svg", alt: "Visa", width: 52, height: 18 },
  {
    src: "/payment-logos/mastercard-wordmark.svg",
    alt: "Mastercard",
    width: 44,
    height: 28,
  },
  {
    src: "/payment-logos/amex.svg",
    alt: "American Express",
    width: 58,
    height: 26,
  },
];

export const audienceFit: AudienceFitItem[] = [
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

export const faqs: FaqItem[] = [
  {
    question: "Is this just another generic online course?",
    answer:
      "No. This course is built around real remote hiring experience, not recycled internet advice. It gives you a practical 29-day plan, recruiter-led guidance, templates, prompts, checklists, and concrete help with applications, LinkedIn, outreach, and interviews.",
  },
  {
    question: "Will this work if I have no remote experience yet?",
    answer:
      "Yes. The course is designed for people trying to land their first real remote role, especially if they need help understanding what remote employers expect and how to present their existing experience more clearly.",
  },
  {
    question: "What exactly do I get inside the course?",
    answer:
      "You get the full recruiter-led course, a 29-day action plan, and a practical toolkit covering applications, LinkedIn, outreach, remote job search, interviews, prompts, and checklists. The goal is to give you practical help you can use right away, not vague motivation.",
  },
  {
    question: "Why not just use ChatGPT on my own?",
    answer:
      "ChatGPT is a tool, not a recruiter-led plan. This course adds hiring judgment, sequencing, scam filtering, practical templates, and real-world direction so you know what to do, what to avoid, and how to use AI without sounding generic or fake.",
  },
  {
    question: "Will this help me get more interviews?",
    answer:
      "That is the main practical outcome the course is designed to improve. It helps you strengthen your applications, search smarter, avoid wasting time on weak opportunities, and show up more clearly to recruiters. It does not guarantee results, but it is built to improve your chances in real ways.",
  },
  {
    question: "Does 29 days mean I will get hired in 29 days?",
    answer:
      "No. The 29-day framing refers to the structure of the action plan, not a guaranteed hiring deadline. It means you get a focused, guided way to stop guessing and move through the process with clearer next steps.",
  },
];
