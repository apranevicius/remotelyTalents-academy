"use client";

import Image from "next/image";
import { useState } from "react";

import { SectionHeading } from "../../_components/section-heading";

type AcademyTestimonial = {
  name: string;
  initials: string;
  context: string;
  result: string;
  quote: string;
  avatar: string;
  image?: string | null;
  verified?: boolean;
};

const testimonials: AcademyTestimonial[] = [
  {
    name: "Maya Patel",
    initials: "MP",
    context: "Career changer, Canada",
    result: "Stopped guessing what to fix first",
    quote:
      "I had been jumping between random advice, templates, and AI tools without knowing what actually mattered. This helped me focus on the right fixes first instead of wasting time on everything at once.",
    avatar: "/testimonials/academy-placeholders/woman-brown-hair.jpg",
    image: "/testimonials/academy-placeholders/maya-patel-cms-laptop-cafe.png",
  },
  {
    name: "James Mitchell",
    initials: "JM",
    context: "Sales background, United States",
    result: "Made my applications feel much stronger",
    quote:
      "Before this, I kept rewriting my CV and still felt unsure about what recruiters would actually notice. The examples and templates made my applications feel sharper, clearer, and faster to put together.",
    avatar: "/testimonials/academy-placeholders/james-mitchell-profile.jpg",
  },
  {
    name: "Carlos",
    initials: "C",
    context: "Operations background, Mexico",
    result: "Helped me use LinkedIn in a more useful way",
    quote:
      "LinkedIn always felt noisy and a bit pointless to me. The course showed me what to improve, what to post less of, and how to use it in a way that actually supports the job search.",
    avatar: "/testimonials/academy-placeholders/carlos-profile.jpg",
  },
  {
    name: "Alex Thompson",
    initials: "AT",
    context: "Marketing professional, Australia",
    result: "Made interview prep feel much less stressful",
    quote:
      "The interview prep part helped me think through better answers before calls instead of panicking the night before. I felt calmer because I knew what I wanted to communicate.",
    avatar: "/testimonials/academy-placeholders/man-professional-beard.jpg",
    image:
      "/testimonials/academy-placeholders/alex-thompson-cms-laptop-office-workspace.png",
  },
  {
    name: "Marcus",
    initials: "M",
    context: "Consulting background, Singapore",
    result: "Helped me waste less time on bad-fit roles",
    quote:
      "What helped most was learning how to be more selective instead of applying everywhere and hoping for the best. It made the whole process feel more focused and much less draining.",
    avatar: "/testimonials/academy-placeholders/man-with-stylish-glasses.png",
  },
  {
    name: "Tyler Brooks",
    initials: "TB",
    context: "Customer success, United States",
    result: "Made outreach feel much less awkward",
    quote:
      "Outreach always felt uncomfortable because I never knew what to say or how direct to be. The examples made it much easier to write messages that felt natural and actually worth sending.",
    avatar: "/testimonials/academy-placeholders/man-young.jpg",
    image:
      "/testimonials/academy-placeholders/tyler-brooks-cms-laptop-home-workspace.png",
  },
  {
    name: "Sophie Laurent",
    initials: "SL",
    context: "Returning to work, France",
    result: "Gave me a 29-day plan I could actually follow",
    quote:
      "I needed something that broke the job search into steps I could realistically follow without feeling lost after two days. The 29-day plan gave me that and made it easier to keep momentum.",
    avatar: "/testimonials/academy-placeholders/woman-blonde.jpg",
    image:
      "/testimonials/academy-placeholders/sophie-laurent-cms-laptop-home-office.png",
  },
  {
    name: "Emma Richardson",
    initials: "ER",
    context: "Administrative background, United Kingdom",
    result: "Helped me present my experience more credibly",
    quote:
      "I already had useful experience, but I was not presenting it in a way that felt relevant for remote roles. The course helped me frame my background more clearly and more convincingly.",
    avatar: "/testimonials/academy-placeholders/woman-curly-hair.jpg",
    image:
      "/testimonials/academy-placeholders/emma-richardson-cms-laptop-office.png",
  },
  {
    name: "Nina",
    initials: "N",
    context: "Career transition, Poland",
    result: "Made the whole process feel more trustworthy",
    quote:
      "I had reached the point where so much online advice felt recycled or unrealistic. This felt more trustworthy because it was practical, specific, and clearly based on how remote hiring actually works.",
    avatar: "/testimonials/academy-placeholders/nina-profile.jpg",
    image:
      "/testimonials/academy-placeholders/nina-cms-laptop-mama-bear-home-office.png",
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className="inline-flex h-5 w-5 items-center justify-center rounded-[2px] bg-[#00b67a] text-[11px] font-bold text-white"
        >
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: AcademyTestimonial;
}) {
  return (
    <article className="flex flex-col gap-4 rounded-[2rem] border border-[var(--rt-line)] bg-white p-5 shadow-[0_14px_32px_rgba(4,61,49,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(4,61,49,0.08)] sm:p-6">
      <StarRow />

      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[color:rgba(4,61,49,0.08)] bg-[var(--rt-surface-soft)]">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-[1.05rem] font-bold tracking-[-0.03em] text-[var(--rt-green)]">
            {testimonial.name}
          </p>
          <p className="mt-0.5 text-[0.92rem] leading-5 text-[color:color-mix(in_srgb,var(--rt-green)_60%,white)]">
            {testimonial.context}
          </p>
        </div>
      </div>

      <p className="text-[0.98rem] font-semibold tracking-[-0.01em] leading-6 text-[var(--rt-green-2)]">
        {testimonial.result}
      </p>

      <p className="text-[0.98rem] leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_82%,white)] sm:text-base">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {testimonial.image ? (
        <div className="relative mt-1 overflow-hidden rounded-[1.35rem] border border-[var(--rt-line)] bg-[var(--rt-surface-soft)]">
          <div className="relative aspect-[1.45/1] w-full">
            <Image
              src={testimonial.image}
              alt={`${testimonial.name} workspace`}
              fill
              sizes="(min-width: 1024px) 26vw, (min-width: 640px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      ) : null}
    </article>
  );
}

export function AcademyTestimonials() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="bg-[var(--rt-cream)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeading
          title="What students are saying"
          description="From stronger applications and better LinkedIn positioning to more confident outreach, interview prep, and smarter use of AI, these are the kinds of wins this course is designed to create."
          align="center"
        />

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:mt-7 sm:flex-row sm:gap-4">
          <div className="flex items-center gap-2.5">
            <StarRow />
            <div className="text-base font-bold tracking-[-0.02em] text-[var(--rt-green)] sm:text-lg">
              4.9 out of 5
            </div>
          </div>
          <div className="hidden h-1 w-1 rounded-full bg-[color:color-mix(in_srgb,var(--rt-green)_28%,white)] sm:block" />
          <div className="text-sm leading-6 text-[color:color-mix(in_srgb,var(--rt-green)_62%,white)]">
            Based on{" "}
            <span className="font-semibold text-[var(--rt-green)]">
              3,000+ reviews
            </span>
          </div>
        </div>

        <div className="relative mt-10">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="flex min-w-0 flex-col gap-4">
              <TestimonialCard testimonial={testimonials[0]} />
              {isExpanded ? (
                <>
                  <TestimonialCard testimonial={testimonials[4]} />
                  <TestimonialCard testimonial={testimonials[6]} />
                </>
              ) : null}
            </div>

            <div className="flex min-w-0 flex-col gap-4">
              <TestimonialCard testimonial={testimonials[1]} />
              <TestimonialCard testimonial={testimonials[2]} />
              {isExpanded ? (
                <TestimonialCard testimonial={testimonials[5]} />
              ) : null}
            </div>

            <div className="flex min-w-0 flex-col gap-4">
              <TestimonialCard testimonial={testimonials[3]} />
              {isExpanded ? (
                <>
                  <TestimonialCard testimonial={testimonials[7]} />
                  <TestimonialCard testimonial={testimonials[8]} />
                </>
              ) : null}
            </div>
          </div>

          {!isExpanded ? (
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[var(--rt-cream)] via-[color:rgba(247,247,241,0.95)] to-transparent" />
          ) : null}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex w-full flex-col items-center gap-4 rounded-[1.8rem] border border-[var(--rt-line)] bg-white px-5 py-5 shadow-[0_14px_32px_rgba(4,61,49,0.05)] sm:w-auto sm:flex-row sm:justify-between sm:px-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 4).map((testimonial, index) => (
                  <div
                    key={testimonial.name}
                    className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white shadow-[0_8px_18px_rgba(4,61,49,0.08)]"
                    style={{ zIndex: 10 - index }}
                  >
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-left text-sm leading-6">
                <span className="font-bold text-[var(--rt-green)]">
                  3,000+ job seekers trust RemotelyTalents Academy
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsExpanded((value) => !value)}
              aria-expanded={isExpanded}
              aria-label={
                isExpanded ? "View less testimonials" : "View more testimonials"
              }
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[7px] border border-[color:rgba(4,61,49,0.14)] bg-[var(--rt-cream)] px-6 py-3 text-sm font-semibold text-[var(--rt-green)] transition-colors hover:bg-[var(--rt-surface-soft)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(4,61,49,0.22)] sm:min-h-0 sm:w-auto"
            >
              {isExpanded ? "View less" : "View more"}
              <span className="text-base leading-none">{isExpanded ? "−" : "+"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
