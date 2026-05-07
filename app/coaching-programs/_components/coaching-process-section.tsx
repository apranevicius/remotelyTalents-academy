import { SectionHeading } from "../../_components/section-heading";

type CoachingProcessSectionProps = {
  title: string;
  body: string;
  steps: readonly {
    title: string;
    body: string;
  }[];
  advisoryNote: string;
};

export function CoachingProcessSection({
  title,
  body,
  steps,
  advisoryNote,
}: CoachingProcessSectionProps) {
  return (
    <section className="bg-[var(--rt-cream)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeading title={title} description={body} align="center" />

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[2rem] border border-[var(--rt-line)] bg-white p-6 shadow-[0_16px_38px_rgba(4,61,49,0.045)] sm:p-7"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--rt-green)] text-sm font-extrabold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.045em] text-[var(--rt-green)]">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_78%,white)]">
                {step.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-5 max-w-6xl rounded-[1.45rem] border border-[color:rgba(4,61,49,0.12)] bg-[color:rgba(240,253,81,0.22)] px-5 py-4 text-center sm:px-7">
          <p className="text-sm font-semibold leading-6 text-[var(--rt-green)] sm:text-base sm:leading-7">
            {advisoryNote}
          </p>
        </div>
      </div>
    </section>
  );
}
