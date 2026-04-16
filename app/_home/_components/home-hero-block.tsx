import Image from "next/image";

type HomeHeroBlockProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export function HomeHeroBlock({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
}: HomeHeroBlockProps) {
  return (
    <section className="bg-[var(--rt-green)] [background-image:var(--rt-hero-surface)] px-6 py-18 text-white sm:px-10 sm:py-24 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--rt-yellow)] sm:text-[12px] sm:tracking-[0.28em]">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-[13ch] text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-[3.35rem] lg:text-[4rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-[38rem] text-base leading-7 text-white/80 sm:text-[1.05rem] sm:leading-8">
            {description}
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-[color:rgba(230,236,234,0.42)] bg-white shadow-[0_22px_60px_rgba(4,61,49,0.18)]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={900}
            height={750}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
