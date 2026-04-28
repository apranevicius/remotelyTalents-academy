import Link from "next/link";
import Image from "next/image";

type CoachingHeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  visualAlt: string;
};

export function CoachingHeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  visualAlt,
}: CoachingHeroSectionProps) {
  return (
    <section className="bg-[var(--rt-green)] [background-image:var(--rt-hero-surface)] text-white">
      <div className="mx-auto grid min-h-[min(760px,calc(84svh-73px))] max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_0.78fr] lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--rt-yellow)]">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl lg:text-[3.75rem] lg:leading-[1.03]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
            {description}
          </p>

          <div className="mt-8">
            <Link
              href={primaryCta.href}
              className="inline-flex min-h-12 items-center justify-center rounded-[7px] bg-[var(--rt-yellow)] px-7 py-3.5 text-sm font-bold !text-[var(--rt-green)] transition-transform hover:-translate-y-0.5"
            >
              {primaryCta.label}
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[620px] lg:max-w-none">
          <Image
            src="/coaching-programs/remote-coaching-video-call.png"
            alt={visualAlt}
            width={1024}
            height={1024}
            priority
            unoptimized
            sizes="(min-width: 1024px) 46vw, 92vw"
            className="h-auto w-full drop-shadow-[0_28px_70px_rgba(0,0,0,0.18)]"
          />
        </div>
      </div>
    </section>
  );
}
