import Image from "next/image";
import Link from "next/link";

import { SectionHeading } from "../../_components/section-heading";

type HomeFeaturedCourseBlockProps = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: readonly string[];
  imageSrc: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

export function HomeFeaturedCourseBlock({
  eyebrow,
  title,
  description,
  highlights,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref,
}: HomeFeaturedCourseBlockProps) {
  return (
    <section className="px-6 pb-18 sm:px-10 sm:pb-22 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-[2.25rem] bg-[var(--rt-green)] px-6 py-8 text-white shadow-[0_24px_80px_rgba(4,61,49,0.18)] sm:px-8 sm:py-10 lg:px-10">
        <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="flex flex-col gap-5">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
              invert
            />

            <div className="space-y-3">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/16 bg-white/8 text-[11px] font-bold text-[var(--rt-yellow)]">
                    ✓
                  </span>
                  <p className="text-sm font-medium leading-6 text-white/84 sm:text-[0.96rem]">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href={ctaHref}
              className="inline-flex w-fit items-center justify-center rounded-[7px] border border-[color:rgba(4,61,49,0.14)] bg-[var(--rt-yellow)] px-7 py-3.5 text-sm font-bold !text-[var(--rt-green)] transition-transform hover:-translate-y-0.5"
            >
              {ctaLabel}
            </Link>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-[1.85rem] border border-[color:rgba(4,61,49,0.08)] bg-[radial-gradient(circle_at_top,rgba(240,253,81,0.18),transparent_42%),linear-gradient(180deg,#fbfaf4_0%,#eef3e8_100%)] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_34px_rgba(4,61,49,0.14)] sm:px-5 sm:py-6">
              <div className="absolute inset-x-6 top-0 h-10 rounded-full bg-white/30 blur-2xl" />
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1600}
                height={768}
                sizes="(max-width: 1024px) 90vw, 32rem"
                className="relative z-10 h-auto w-full object-contain drop-shadow-[0_26px_36px_rgba(4,61,49,0.18)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
