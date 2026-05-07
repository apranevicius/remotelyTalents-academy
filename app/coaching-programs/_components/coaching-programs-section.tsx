"use client";

import Link from "next/link";
import { useState } from "react";

import { SectionHeading } from "../../_components/section-heading";

type CoachingProgramsSectionProps = {
  title: string;
  body: string;
  items: readonly {
    name: string;
    label?: string;
    price: string;
    duration: string;
    bestFor: string;
    includes: readonly string[];
    details: readonly string[];
    outcome: string;
    ctaLabel: string;
    ctaHref: string;
  }[];
};

export function CoachingProgramsSection({
  title,
  body,
  items,
}: CoachingProgramsSectionProps) {
  const [areDetailsOpen, setAreDetailsOpen] = useState(false);

  return (
    <section id="programs" className="bg-[var(--rt-surface-soft)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeading title={title} description={body} align="center" />

        <div className="mt-10 grid gap-5 lg:grid-cols-3 lg:items-start">
          {items.map((program) => {
            const isRecommended = Boolean(program.label);

            return (
              <article
                key={program.name}
                className={`relative flex h-full flex-col rounded-[2rem] border bg-white p-6 shadow-[0_18px_44px_rgba(4,61,49,0.05)] sm:p-7 ${
                  isRecommended
                    ? "border-[color:rgba(4,61,49,0.28)] ring-2 ring-[color:rgba(240,253,81,0.75)]"
                    : "border-[var(--rt-line)]"
                }`}
              >
                <div className="mb-4 min-h-0 lg:min-h-[1.7rem]">
                  {program.label ? (
                    <p className="w-fit rounded-full bg-[var(--rt-yellow)] px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--rt-green)]">
                      {program.label}
                    </p>
                  ) : null}
                </div>

                <div className="lg:min-h-[7rem]">
                  <h3 className="text-2xl font-extrabold tracking-[-0.045em] text-[var(--rt-green)]">
                    {program.name}
                  </h3>
                  <div className="mt-5 flex items-end gap-3">
                    <p className="text-4xl font-extrabold tracking-[-0.055em] text-[var(--rt-green)]">
                      {program.price}
                    </p>
                    <p className="pb-1 text-sm font-semibold text-[color:color-mix(in_srgb,var(--rt-green)_58%,white)]">
                      {program.duration}
                    </p>
                  </div>
                </div>

                <div className="mt-4 lg:min-h-[7.5rem]">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--rt-green-2)]">
                    Best for
                  </p>
                  <p className="mt-2 text-[0.98rem] leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_78%,white)]">
                    {program.bestFor}
                  </p>
                </div>

                <div className="mt-6 border-t border-[var(--rt-line)] pt-5 lg:min-h-[15rem]">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--rt-green-2)]">
                    Includes
                  </p>
                  <ul className="mt-4 space-y-3">
                    {program.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--rt-green)] text-[10px] font-bold text-white">
                          ✓
                        </span>
                        <span className="text-[0.98rem] leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_82%,white)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={areDetailsOpen ? "" : "mt-auto"}>
                  <div className="mt-6 border-t border-[var(--rt-line)] pt-5">
                    <button
                      type="button"
                      onClick={() => setAreDetailsOpen((isOpen) => !isOpen)}
                      aria-expanded={areDetailsOpen}
                      className="flex w-full items-center justify-between gap-4 text-left text-sm font-extrabold text-[var(--rt-green)]"
                    >
                      <span>
                        {areDetailsOpen
                          ? "Hide full details"
                          : "View full details"}
                      </span>
                      <span
                        className={`text-xl leading-none transition-transform ${
                          areDetailsOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {areDetailsOpen ? (
                      <div className="mt-4 space-y-4">
                        <ul className="space-y-2.5">
                          {program.details.map((item) => (
                            <li
                              key={item}
                              className="text-sm leading-6 text-[color:color-mix(in_srgb,var(--rt-green)_74%,white)]"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="rounded-[1.2rem] bg-[var(--rt-cream)] px-4 py-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--rt-green-2)]">
                            Outcome
                          </p>
                          <p className="mt-2 text-sm leading-6 text-[color:color-mix(in_srgb,var(--rt-green)_78%,white)]">
                            {program.outcome}
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <Link
                    href={program.ctaHref}
                    className={`mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-[7px] px-6 py-3.5 text-sm font-bold transition-transform hover:-translate-y-0.5 ${
                      isRecommended
                        ? "bg-[var(--rt-yellow)] !text-[var(--rt-green)]"
                        : "bg-[var(--rt-green)] !text-white hover:bg-[var(--rt-green-2)]"
                    }`}
                  >
                    {program.ctaLabel}
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
