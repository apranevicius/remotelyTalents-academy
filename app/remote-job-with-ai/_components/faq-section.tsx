import { faqs } from "../_content/remote-job-with-ai-content";
import { SectionHeading } from "./section-heading";

export function FaqSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions a skeptical buyer will ask before acting."
        description="This section exists to answer the fears that often kill action: trust, experience, AI use, and whether this is really for them."
      />
      <div className="mt-12 grid gap-5">
        {faqs.map((faq) => (
          <article
            key={faq.question}
            className="rounded-[2rem] border border-[var(--rt-line)] bg-white p-7 shadow-[0_14px_32px_rgba(4,61,49,0.04)]"
          >
            <h3 className="text-2xl font-bold tracking-[-0.04em] text-[var(--rt-green)]">
              {faq.question}
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_80%,white)]">
              {faq.answer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
