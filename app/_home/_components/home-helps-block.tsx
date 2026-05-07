import Link from "next/link";

import { SectionHeading } from "../../_components/section-heading";

type PathItem = {
  label: string;
  title: string;
  description: string;
  bullets: readonly string[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

type HomeHelpsBlockProps = {
  eyebrow?: string;
  title: string;
  description: string;
  paths: readonly PathItem[];
};

export function HomeHelpsBlock({
  eyebrow,
  title,
  description,
  paths,
}: HomeHelpsBlockProps) {
  return (
    <section className="px-6 py-18 sm:px-10 sm:py-22 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
        />

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
          {paths.map((item) => (
            <article
              key={item.title}
              className={[
                "flex h-full flex-col rounded-[2rem] border bg-white p-6 shadow-[0_18px_60px_rgba(4,61,49,0.08)] sm:p-7",
                item.featured
                  ? "border-[color:rgba(240,253,81,0.9)] ring-1 ring-[color:rgba(240,253,81,0.75)]"
                  : "border-[var(--rt-line)]",
              ].join(" ")}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--rt-green-2)]">
                {item.label}
              </p>
              <h3 className="mt-4 text-2xl font-extrabold tracking-[-0.04em] text-[var(--rt-green)]">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_78%,white)]">
                {item.description}
              </p>

              <ul className="mt-6 space-y-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--rt-green)] text-[10px] font-bold text-white">
                      ✓
                    </span>
                    <span className="text-sm leading-6 text-[color:color-mix(in_srgb,var(--rt-green)_82%,white)] sm:text-[0.96rem]">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-7">
                <Link
                  href={item.ctaHref}
                  className={[
                    "inline-flex min-h-12 w-full items-center justify-center rounded-[7px] px-5 py-3 text-sm font-bold transition-transform hover:-translate-y-0.5",
                    item.featured
                      ? "bg-[var(--rt-yellow)] !text-[var(--rt-green)]"
                      : "bg-[var(--rt-green)] !text-white hover:bg-[var(--rt-green-2)]",
                  ].join(" ")}
                >
                  {item.ctaLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
