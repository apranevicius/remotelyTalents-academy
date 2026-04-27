type AboutDirectionSectionProps = {
  title: string;
  body: string;
  columns: readonly {
    title: string;
    body: string;
  }[];
};

export function AboutDirectionSection({
  title,
  body,
  columns,
}: AboutDirectionSectionProps) {
  return (
    <section className="bg-[var(--rt-green)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-[-0.045em] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-8 text-white/76 sm:text-[1.05rem]">
            {body}
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {columns.map((column) => (
            <article
              key={column.title}
              className="rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-[0_18px_44px_rgba(0,0,0,0.08)] sm:p-7"
            >
              <h3 className="text-xl font-extrabold tracking-[-0.035em] text-white">
                {column.title}
              </h3>
              <p className="mt-4 text-[0.98rem] leading-7 text-white/72">
                {column.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
