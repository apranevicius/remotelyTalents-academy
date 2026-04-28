import { SectionHeading } from "../../_components/section-heading";

type CoachingWhySectionProps = {
  title: string;
  body: string;
  items: readonly {
    title: string;
    body: string;
  }[];
};

export function CoachingWhySection({
  title,
  body,
  items,
}: CoachingWhySectionProps) {
  return (
    <section className="bg-[var(--rt-cream)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeading title={title} description={body} align="center" />

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.8rem] border border-[var(--rt-line)] bg-white p-6 text-center shadow-[0_14px_32px_rgba(4,61,49,0.05)] sm:p-7"
            >
              <h3 className="text-xl font-extrabold tracking-[-0.035em] text-[var(--rt-green)]">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_74%,white)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
