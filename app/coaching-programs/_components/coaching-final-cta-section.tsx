import { ScrollLink } from "../../_components/scroll-link";

type CoachingFinalCtaSectionProps = {
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

export function CoachingFinalCtaSection({
  title,
  body,
  ctaLabel,
  ctaHref,
}: CoachingFinalCtaSectionProps) {
  return (
    <section id="interest" className="bg-[var(--rt-green)] text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--rt-yellow)]">
          Ready to choose?
        </p>
        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-extrabold tracking-normal sm:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
          {body}
        </p>

        <div className="mt-9">
          <ScrollLink
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-[7px] border border-[color:rgba(4,61,49,0.14)] bg-[var(--rt-yellow)] px-8 py-4 text-sm font-bold !text-[var(--rt-green)] transition-transform hover:-translate-y-0.5"
          >
            {ctaLabel}
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}
