"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";

const mailerLiteAction =
  "https://assets.mailerlite.com/jsonp/106188/forms/185980224615220401/subscribe";

type MailerLiteResponse = {
  success?: boolean;
  errors?: {
    fields?: Record<string, string[]>;
    message?: string;
  };
  message?: string;
};

function getMailerLiteErrorMessage(response: MailerLiteResponse) {
  const fieldErrors = response.errors?.fields;

  if (fieldErrors) {
    const firstError = Object.values(fieldErrors).flat()[0];

    if (firstError) {
      return firstError;
    }
  }

  return (
    response.errors?.message ||
    response.message ||
    "We could not send your request. Please check the form and try again."
  );
}

export function IntroCallForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch(mailerLiteAction, {
        method: "POST",
        body: formData,
      });
      const result = (await response.json()) as MailerLiteResponse;

      if (!response.ok || !result.success) {
        setSubmitError(getMailerLiteErrorMessage(result));
        return;
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong while sending your request. Please try again in a moment.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="rounded-[2rem] border border-[color:rgba(4,61,49,0.1)] bg-white p-7 shadow-[0_20px_54px_rgba(4,61,49,0.08)] sm:p-9">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--rt-yellow)] text-xl font-extrabold text-[var(--rt-green)]">
          ✓
        </div>
        <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.04em] text-[var(--rt-green)]">
          Thank you
        </h2>
        <p className="mt-4 text-base leading-8 text-[color:color-mix(in_srgb,var(--rt-green)_76%,white)]">
          We received your request. We will get back to you within 24 hours
          about the next step for a quick 15-minute one-on-one video call with
          Anastasia.
        </p>
        <Link
          href="/coaching-programs"
          className="mt-7 inline-flex items-center justify-center rounded-[7px] bg-[var(--rt-green)] px-6 py-3.5 text-sm font-bold !text-white transition-transform hover:-translate-y-0.5 hover:bg-[var(--rt-green-2)]"
        >
          Back to coaching programs
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-[color:rgba(4,61,49,0.1)] bg-white p-6 shadow-[0_20px_54px_rgba(4,61,49,0.08)] sm:p-8"
    >
      <div>
        <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[var(--rt-green)]">
          Request your intro call
        </h2>
        <p className="mt-3 text-sm leading-6 text-[color:color-mix(in_srgb,var(--rt-green)_70%,white)]">
          Fill in the form and we will contact you within 24 hours.
        </p>
      </div>

      <div className="mt-7 space-y-5">
        <div>
          <label
            htmlFor="intro-call-name"
            className="text-sm font-bold text-[var(--rt-green)]"
          >
            First name
          </label>
          <input
            id="intro-call-name"
            name="fields[name]"
            type="text"
            autoComplete="given-name"
            required
            placeholder="Your first name"
            className="mt-2 w-full rounded-[10px] border border-[var(--rt-line)] bg-[var(--rt-cream)] px-4 py-3.5 text-base text-[var(--rt-green)] outline-none transition-colors placeholder:text-[var(--rt-green)]/42 focus:border-[var(--rt-green)] focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="intro-call-last-name"
            className="text-sm font-bold text-[var(--rt-green)]"
          >
            Last name
          </label>
          <input
            id="intro-call-last-name"
            name="fields[last_name]"
            type="text"
            autoComplete="family-name"
            required
            placeholder="Your last name"
            className="mt-2 w-full rounded-[10px] border border-[var(--rt-line)] bg-[var(--rt-cream)] px-4 py-3.5 text-base text-[var(--rt-green)] outline-none transition-colors placeholder:text-[var(--rt-green)]/42 focus:border-[var(--rt-green)] focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="intro-call-email"
            className="text-sm font-bold text-[var(--rt-green)]"
          >
            Email
          </label>
          <input
            id="intro-call-email"
            name="fields[email]"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className="mt-2 w-full rounded-[10px] border border-[var(--rt-line)] bg-[var(--rt-cream)] px-4 py-3.5 text-base text-[var(--rt-green)] outline-none transition-colors placeholder:text-[var(--rt-green)]/42 focus:border-[var(--rt-green)] focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="intro-call-linkedin"
            className="text-sm font-bold text-[var(--rt-green)]"
          >
            LinkedIn profile URL
          </label>
          <input
            id="intro-call-linkedin"
            name="fields[linkedin_profile_url]"
            type="text"
            required
            placeholder="linkedin.com/in/your-profile"
            className="mt-2 w-full rounded-[10px] border border-[var(--rt-line)] bg-[var(--rt-cream)] px-4 py-3.5 text-base text-[var(--rt-green)] outline-none transition-colors placeholder:text-[var(--rt-green)]/42 focus:border-[var(--rt-green)] focus:bg-white"
          />
        </div>
      </div>

      <input type="hidden" name="ml-submit" value="1" />
      <input type="hidden" name="anticsrf" value="true" />

      {submitError ? (
        <p
          role="alert"
          className="mt-5 rounded-[12px] border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800"
        >
          {submitError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-[7px] bg-[var(--rt-yellow)] px-6 py-4 text-sm font-extrabold !text-[var(--rt-green)] transition-transform hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {isSubmitting ? "Sending..." : "Request 15-minute intro call"}
      </button>

      <p className="mt-4 text-xs leading-5 text-[var(--rt-green)]/54">
        By submitting this form, you agree to be contacted about RemotelyTalents
        Academy coaching programs. See our{" "}
        <Link href="/terms-of-service" className="font-semibold underline">
          Terms
        </Link>{" "}
        and{" "}
        <Link
          href="https://www.remotelytalents.com/privacy-policy"
          className="font-semibold underline"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
