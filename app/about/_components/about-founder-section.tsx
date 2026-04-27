import Image from "next/image";

type AboutFounderSectionProps = {
  name: string;
  role: string;
  body: string;
  principles: readonly string[];
};

export function AboutFounderSection({
  name,
  role,
  body,
  principles,
}: AboutFounderSectionProps) {
  return (
    <section className="bg-[var(--rt-surface-soft)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[0.38fr_0.62fr] lg:gap-14 lg:px-12">
        <div className="lg:border-r lg:border-[var(--rt-line)] lg:pr-12">
          <div className="relative h-36 w-36 overflow-hidden rounded-full bg-white shadow-[0_18px_42px_rgba(4,61,49,0.16)] ring-4 ring-white">
            <Image
              src="/about/AP_400x400.jpg"
              alt="Adomas Pranevicius"
              fill
              sizes="144px"
              className="object-cover"
            />
          </div>

          <div className="mt-8">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              {name}
            </h2>
            <p className="mt-3 text-base font-semibold leading-7 text-[var(--rt-green)]/64">
              {role}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/adomaspranevicius/"
                target="_blank"
                rel="noreferrer"
                aria-label="Adomas Pranevicius on LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--rt-green)] shadow-[0_10px_24px_rgba(4,61,49,0.08)] ring-1 ring-[var(--rt-line)] transition hover:bg-[var(--rt-yellow)] hover:text-[var(--rt-green)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--rt-green)]"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://x.com/apranevicius"
                target="_blank"
                rel="noreferrer"
                aria-label="Adomas Pranevicius on X"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--rt-green)] shadow-[0_10px_24px_rgba(4,61,49,0.08)] ring-1 ring-[var(--rt-line)] transition hover:bg-[var(--rt-yellow)] hover:text-[var(--rt-green)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--rt-green)]"
              >
                <XIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="max-w-3xl text-xl font-semibold leading-9 text-[var(--rt-green)] sm:text-2xl sm:leading-10">
            {body}
          </p>

          <div className="mt-8 space-y-4 border-t border-[var(--rt-line)] pt-7">
            {principles.map((principle) => (
              <div
                key={principle}
                className="flex items-start gap-4"
              >
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--rt-green)] text-xs font-bold text-white">
                  ✓
                </span>
                <p className="text-[0.98rem] leading-7 text-[var(--rt-green)]/74">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.39 8.08h4.22V23H.39V8.08Zm7.34 0h4.04v2.04h.06c.56-1.06 1.94-2.18 3.99-2.18 4.27 0 5.06 2.81 5.06 6.47V23h-4.21v-7.61c0-1.82-.03-4.15-2.53-4.15-2.53 0-2.92 1.98-2.92 4.02V23H7.73V8.08Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-6.4L6.46 22H3.35l7.25-8.28L2.95 2h6.4l4.43 5.86L18.9 2Zm-1.1 17.84h1.72L8.42 4.05H6.57L17.8 19.84Z" />
    </svg>
  );
}
