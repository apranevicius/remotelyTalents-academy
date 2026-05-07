"use client";

import Image from "next/image";
import { useState } from "react";

import { SectionHeading } from "../../_components/section-heading";

type CoachingTestimonialsSectionProps = {
  title: string;
  body: string;
  trustNote: string;
  items: readonly {
    name: string;
    initials: string;
    context: string;
    result: string;
    quote: string;
    avatar: string;
  }[];
};

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
  testimonial: CoachingTestimonialsSectionProps["items"][number];
}) {
  return (
    <article className="flex flex-col gap-4 rounded-[2rem] border border-[var(--rt-line)] bg-white p-5 shadow-[0_14px_32px_rgba(4,61,49,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(4,61,49,0.08)] sm:p-6">
      <StarRow />

      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[color:rgba(4,61,49,0.08)] bg-[var(--rt-surface-soft)]">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-[1.05rem] font-bold tracking-normal text-[var(--rt-green)]">
            {testimonial.name}
          </p>
          <p className="mt-0.5 text-[0.92rem] leading-5 text-[color:color-mix(in_srgb,var(--rt-green)_60%,white)]">
            {testimonial.context}
          </p>
        </div>
      </div>

      <p className="text-[0.98rem] font-semibold leading-6 tracking-normal text-[var(--rt-green-2)]">
        {testimonial.result}
      </p>

      <p className="text-[0.98rem] leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_82%,white)] sm:text-base">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
    </article>
  );
}

export function CoachingTestimonialsSection({
  title,
  body,
  trustNote,
  items,
}: CoachingTestimonialsSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleItems = isExpanded ? items : items.slice(0, 3);

  return (
    <section className="bg-[var(--rt-surface-soft)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeading title={title} description={body} align="center" />

        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:mt-7 sm:flex-row sm:gap-4">
          <div className="flex items-center gap-2.5">
            <StarRow />
            <div className="text-base font-bold tracking-normal text-[var(--rt-green)] sm:text-lg">
              4.9 out of 5
            </div>
          </div>
          <div className="hidden h-1 w-1 rounded-full bg-[color:color-mix(in_srgb,var(--rt-green)_28%,white)] sm:block" />
          <div className="flex -space-x-2">
            {items.slice(0, 4).map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-[var(--rt-cream)] shadow-[0_8px_18px_rgba(4,61,49,0.08)]"
                style={{ zIndex: 10 - index }}
              >
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-sm leading-6 text-[color:color-mix(in_srgb,var(--rt-green)_64%,white)]">
            <span className="font-semibold text-[var(--rt-green)]">
              {trustNote}
            </span>
          </div>
        </div>

        <div className="relative mt-10">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="flex min-w-0 flex-col gap-4">
              {visibleItems[0] ? (
                <TestimonialCard testimonial={visibleItems[0]} />
              ) : null}
              {visibleItems[3] ? (
                <TestimonialCard testimonial={visibleItems[3]} />
              ) : null}
            </div>

            <div className="flex min-w-0 flex-col gap-4">
              {visibleItems[1] ? (
                <TestimonialCard testimonial={visibleItems[1]} />
              ) : null}
              {visibleItems[4] ? (
                <TestimonialCard testimonial={visibleItems[4]} />
              ) : null}
            </div>

            <div className="flex min-w-0 flex-col gap-4">
              {visibleItems[2] ? (
                <TestimonialCard testimonial={visibleItems[2]} />
              ) : null}
            </div>
          </div>

          {!isExpanded ? (
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--rt-surface-soft)] to-transparent" />
          ) : null}
        </div>

        {items.length > 3 ? (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setIsExpanded((value) => !value)}
              aria-expanded={isExpanded}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[7px] border border-[color:rgba(4,61,49,0.14)] bg-white px-6 py-3 text-sm font-semibold text-[var(--rt-green)] shadow-[0_10px_24px_rgba(4,61,49,0.05)] transition-colors hover:bg-[var(--rt-cream)] focus:outline-none focus:ring-2 focus:ring-[color:rgba(4,61,49,0.22)]"
            >
              {isExpanded ? "View less" : "View more"}
              <span className="text-base leading-none">
                {isExpanded ? "−" : "+"}
              </span>
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
