import Link from "next/link";
import Image from "next/image";

type CoachingHeroSectionProps = {
  eyebrow: string;
  title: string;
  bullets: readonly string[];
  primaryCta: {
    label: string;
    href: string;
  };
  visualAlt: string;
};

export function CoachingHeroSection({
  eyebrow,
  title,
  bullets,
  primaryCta,
  visualAlt,
}: CoachingHeroSectionProps) {
  return (
    <section className="bg-[var(--rt-green)] [background-image:var(--rt-hero-surface)] text-white">
      <div className="mx-auto grid min-h-[min(760px,calc(84svh-73px))] max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_0.92fr] lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--rt-yellow)]">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl lg:text-[3.75rem] lg:leading-[1.03]">
            {title}
          </h1>

          <div className="mt-7 grid max-w-3xl gap-4">
            {bullets.map((bullet) => (
              <div key={bullet} className="flex items-start gap-3">
                <span className="mt-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[color:rgba(240,253,81,0.36)] bg-[color:rgba(240,253,81,0.12)] text-[11px] font-bold text-[var(--rt-yellow)]">
                  ✓
                </span>
                <p className="text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
                  {bullet}
                </p>
              </div>
            ))}
          </div>

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
            src="/coaching-programs/remote-coaching-video-call-anastasia-hero-v6.webp"
            alt={visualAlt}
            width={1190}
            height={990}
            priority
            sizes="(min-width: 1024px) 46vw, 92vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
