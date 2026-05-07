import { SectionHeading } from "../../_components/section-heading";

type CoachingApproachSectionProps = {
  title: string;
  body: string;
  items: readonly {
    title: string;
    body: string;
  }[];
};

export function CoachingApproachSection({
  title,
  body,
  items,
}: CoachingApproachSectionProps) {
  return (
    <section className="bg-[var(--rt-cream)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeading title={title} description={body} align="center" />

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-[2rem] border border-[var(--rt-line)] bg-white shadow-[0_18px_44px_rgba(4,61,49,0.05)]">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-3 border-b border-[var(--rt-line)] px-5 py-5 last:border-b-0 sm:grid-cols-[4rem_1fr] sm:gap-6 sm:px-7 sm:py-6"
            >
              <div>
                <span className="text-sm font-extrabold tracking-[-0.02em] text-[var(--rt-green-2)]/42">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-extrabold tracking-[-0.03em] text-[var(--rt-green)] sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.98rem] leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_76%,white)] sm:text-base">
                  {item.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
