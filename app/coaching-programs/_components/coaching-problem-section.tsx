import { SectionHeading } from "../../_components/section-heading";

type CoachingProblemSectionProps = {
  title: string;
  body: string;
  items: readonly string[];
};

export function CoachingProblemSection({
  title,
  body,
  items,
}: CoachingProblemSectionProps) {
  return (
    <section className="bg-[var(--rt-surface-soft)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeading title={title} description={body} align="center" />

        <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-[var(--rt-line)] bg-white p-5 shadow-[0_18px_44px_rgba(4,61,49,0.05)] sm:p-7">
          <div className="grid gap-1">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 border-b border-[var(--rt-line)] py-4 last:border-b-0"
              >
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--rt-green)] text-[11px] font-bold text-white">
                  ✓
                </span>
                <p className="text-base font-semibold leading-7 tracking-[-0.01em] text-[var(--rt-green)] sm:text-[1.05rem]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
