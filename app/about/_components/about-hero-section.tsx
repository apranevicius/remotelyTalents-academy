import Image from "next/image";

type AboutHeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function AboutHeroSection({
  eyebrow,
  title,
  description,
}: AboutHeroSectionProps) {
  return (
    <section className="bg-[var(--rt-green)] [background-image:var(--rt-hero-surface)] text-white">
      <div className="mx-auto grid min-h-[calc(82svh-73px)] max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_0.82fr] lg:px-12 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--rt-yellow)]">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl lg:text-[3.55rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>

        <div className="relative mx-auto flex w-full max-w-[34rem] items-end justify-center lg:mx-0 lg:justify-self-end xl:max-w-[37rem]">
          <div className="absolute bottom-5 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[var(--rt-yellow)]/12 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-36 w-[82%] -translate-x-1/2 rounded-full bg-black/14 blur-2xl" />
          <div className="absolute inset-x-6 bottom-4 h-px bg-[linear-gradient(90deg,transparent,rgba(240,253,81,0.42),transparent)]" />

          <Image
            src="/about/remote-work-professional-laptop.webp"
            alt="Professional working calmly on a laptop"
            width={1200}
            height={800}
            sizes="(max-width: 640px) 94vw, (max-width: 1024px) 58vw, 37rem"
            className="relative z-10 h-auto w-full max-w-[31rem] object-contain drop-shadow-[0_32px_48px_rgba(0,0,0,0.22)] sm:max-w-[34rem] xl:max-w-[37rem]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
