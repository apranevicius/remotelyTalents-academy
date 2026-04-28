"use client";

import { useState } from "react";

type CoachingInterestSectionProps = {
  title: string;
  body: string;
  emailLabel: string;
  emailPlaceholder: string;
  ctaLabel: string;
  reassurance: string;
  successTitle: string;
  successBody: string;
};

export function CoachingInterestSection({
  title,
  body,
  emailLabel,
  emailPlaceholder,
  ctaLabel,
  reassurance,
  successTitle,
  successBody,
}: CoachingInterestSectionProps) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="interest" className="bg-[var(--rt-green)] text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--rt-yellow)]">
            Coaching waitlist
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/76">
            {body}
          </p>

          <div className="mx-auto mt-9 max-w-2xl rounded-[2rem] border border-white/12 bg-white p-4 text-[var(--rt-green)] shadow-[0_26px_70px_rgba(0,0,0,0.16)] sm:p-5">
            {submitted ? (
              <div className="px-4 py-7 text-center sm:px-6">
                <h3 className="text-2xl font-extrabold tracking-[-0.04em]">
                  {successTitle}
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[color:color-mix(in_srgb,var(--rt-green)_76%,white)]">
                  {successBody}
                </p>
              </div>
            ) : (
              <form
                action="https://assets.mailerlite.com/jsonp/106188/forms/185980224615220401/subscribe"
                method="post"
                target="mailerlite-coaching-waitlist"
                className="flex flex-col gap-3 sm:flex-row"
                onSubmit={() => {
                  window.setTimeout(() => setSubmitted(true), 400);
                }}
              >
                <label className="sr-only" htmlFor="coaching-waitlist-email">
                  {emailLabel}
                </label>
                <input
                  id="coaching-waitlist-email"
                  aria-label={emailLabel}
                  aria-required="true"
                  type="email"
                  name="fields[email]"
                  placeholder={emailPlaceholder}
                  autoComplete="email"
                  required
                  className="min-h-12 flex-1 rounded-[7px] border border-[var(--rt-line)] bg-[var(--rt-cream)] px-4 py-3 text-base text-[var(--rt-green)] outline-none transition-colors placeholder:text-[color:color-mix(in_srgb,var(--rt-green)_48%,white)] focus:border-[var(--rt-green)]"
                />
                <input type="hidden" name="ml-submit" value="1" />
                <input type="hidden" name="anticsrf" value="true" />
                <button
                  type="submit"
                  className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-[7px] bg-[var(--rt-yellow)] px-7 py-3.5 text-sm font-bold text-[var(--rt-green)] transition-transform hover:-translate-y-0.5"
                >
                  {ctaLabel}
                </button>
              </form>
            )}
            <iframe
              title="MailerLite coaching waitlist submission"
              name="mailerlite-coaching-waitlist"
              className="hidden"
            >
              MailerLite waitlist submission
            </iframe>
          </div>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/64">
            {reassurance}
          </p>
        </div>
      </div>
    </section>
  );
}
