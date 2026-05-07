"use client";

import { useState } from "react";

import { SectionHeading } from "../../_components/section-heading";

type CoachingFaqSectionProps = {
  title: string;
  body: string;
  items: readonly {
    question: string;
    answer: string;
  }[];
};

export function CoachingFaqSection({
  title,
  body,
  items,
}: CoachingFaqSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
      <SectionHeading title={title} description={body} align="center" />

      <div className="mt-10 grid gap-3">
        {items.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={faq.question}
              className="overflow-hidden rounded-[1.8rem] border border-[var(--rt-line)] bg-white shadow-[0_14px_32px_rgba(4,61,49,0.04)]"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left sm:px-7"
              >
                <h3 className="text-xl font-bold tracking-normal text-[var(--rt-green)] sm:text-[1.55rem]">
                  {faq.question}
                </h3>
                <span className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--rt-line)] bg-[var(--rt-cream)] text-lg font-semibold leading-none text-[var(--rt-green)]">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen ? (
                <div className="border-t border-[var(--rt-line)] px-6 pb-6 pt-4 sm:px-7">
                  <p className="max-w-3xl text-base leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_80%,white)]">
                    {faq.answer}
                  </p>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
