type AboutAgencyProofSectionProps = {
  title: string;
  description: string;
  stats: readonly {
    value: string;
    label: string;
  }[];
};

export function AboutAgencyProofSection({
  title,
  description,
  stats,
}: AboutAgencyProofSectionProps) {
  return (
    <section className="bg-[var(--rt-cream)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-[-0.045em] text-[var(--rt-green)] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-8 text-[var(--rt-green)]/72 sm:text-[1.05rem]">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-[2rem] border border-[var(--rt-line)] bg-white p-6 text-center shadow-[0_16px_38px_rgba(4,61,49,0.05)] sm:p-8"
            >
              <p className="text-4xl font-extrabold tracking-[-0.055em] text-[var(--rt-green)] sm:text-5xl">
                {stat.value}
              </p>
              <p className="mx-auto mt-3 max-w-[16rem] text-[0.98rem] leading-7 text-[var(--rt-green)]/68">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
