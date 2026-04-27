type AboutBeliefsSectionProps = {
  title: string;
  items: readonly {
    title: string;
    body: string;
  }[];
};

export function AboutBeliefsSection({
  title,
  items,
}: AboutBeliefsSectionProps) {
  return (
    <section className="bg-[var(--rt-cream)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-16 lg:px-12">
        <div>
          <h2 className="max-w-sm text-3xl font-extrabold text-[var(--rt-green)] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-sm text-[0.98rem] leading-7 text-[var(--rt-green)]/64">
            A simple operating standard for how the Academy teaches remote work:
            practical, human, and grounded in real hiring behavior.
          </p>
        </div>

        <div className="border-y border-[var(--rt-line)]">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-5 border-b border-[var(--rt-line)] py-7 last:border-b-0 sm:grid-cols-[4rem_1fr] sm:py-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--rt-yellow)] text-sm font-extrabold text-[var(--rt-green)]">
                0{index + 1}
              </span>
              <div>
                <h3 className="max-w-2xl text-xl font-extrabold text-[var(--rt-green)] sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-2xl text-[0.98rem] leading-7 text-[var(--rt-green)]/70">
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
