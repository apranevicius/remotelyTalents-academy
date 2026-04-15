import { audienceFit } from "../_content/remote-job-with-ai-content";

export function AudienceFitSection() {
  return (
    <section className="bg-[var(--rt-cream)]">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 sm:px-10 sm:pt-16 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[var(--rt-green)] sm:text-[2.15rem] lg:text-[2.4rem]">
            A better way to start your remote job search.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_78%,white)] sm:text-[1.0625rem] sm:leading-8">
            This is not another generic job-search course. It is a practical
            system built to help you avoid fake jobs, weak advice, and
            scattered application effort by following a clearer process.
          </p>
          <div className="mx-auto mt-10 max-w-2xl rounded-[2rem] border border-[var(--rt-line)] bg-white p-8 text-left shadow-[0_16px_44px_rgba(4,61,49,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--rt-green-2)]">
              This is for you if
            </p>
            <div className="mt-6 space-y-3">
              {audienceFit.map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-4 rounded-[1.4rem] border border-[var(--rt-line)] bg-[var(--rt-cream)] px-4 py-4"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--rt-green)] text-sm font-bold text-white">
                    {item.icon}
                  </span>
                  <p className="text-base leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_82%,white)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
