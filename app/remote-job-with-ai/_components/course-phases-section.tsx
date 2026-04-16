import Image from "next/image";

import { steps } from "../_content/remote-job-with-ai-content";
import { SectionHeading } from "../../_components/section-heading";

export function CoursePhasesSection() {
  return (
    <section id="overview" className="bg-[var(--rt-surface-soft)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow=""
          title="What helps you apply better, search smarter, and get more interviews"
          description="This course walks you through six focused phases to help you stop guessing, avoid wasted effort, and build a clearer path to a real remote job."
          align="center"
        />
        <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-5">
          {steps.map((step) => (
            <article
              key={step.title}
              className="rounded-[2rem] border border-[var(--rt-line)] bg-white p-5 shadow-[0_16px_36px_rgba(4,61,49,0.05)] sm:p-6"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--rt-green-2)]">
                    {step.phase}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] text-[var(--rt-green)] sm:text-[1.8rem]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_80%,white)]">
                    {step.body}
                  </p>
                </div>
                <div className="sm:w-[220px] lg:w-[280px]">
                  <div className="overflow-hidden rounded-[1.6rem] border border-[var(--rt-line)] bg-[var(--rt-cream)]">
                    <Image
                      src={step.imageSrc}
                      alt={step.imageAlt}
                      width={640}
                      height={360}
                      className="h-36 w-full object-cover object-left-top sm:h-40 lg:h-44"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
