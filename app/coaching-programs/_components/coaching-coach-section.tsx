import Image from "next/image";

import { SectionHeading } from "../../_components/section-heading";

type CoachingCoachSectionProps = {
  title: string;
  description: string;
  name: string;
  role: string;
  bio: string;
  finalNote: string;
  imageLabel: string;
  proofPoints: readonly string[];
};

export function CoachingCoachSection({
  title,
  description,
  name,
  role,
  bio,
  finalNote,
  proofPoints,
}: CoachingCoachSectionProps) {
  return (
    <section className="bg-[var(--rt-surface-soft)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeading
          title={title}
          description={description}
          align="center"
        />

        <div className="mt-12 grid gap-8 rounded-[2.2rem] border border-[var(--rt-line)] bg-white p-6 shadow-[0_18px_44px_rgba(4,61,49,0.05)] sm:p-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-10 lg:p-10">
          <div>
            <div className="overflow-hidden rounded-[1.9rem] border border-[var(--rt-line)] bg-[linear-gradient(180deg,#eef3e8_0%,#dfe8db_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/coaching-programs/anastasia-portrait.avif"
                  alt="Anastasia Izotova, remote job career coach"
                  fill
                  sizes="(min-width: 1024px) 34vw, (min-width: 640px) 52vw, 88vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--rt-green-2)]">
                {role}
              </p>
              <h3 className="mt-4 text-3xl font-extrabold tracking-normal text-[var(--rt-green)] sm:text-[2.2rem]">
                {name}
              </h3>

              <p className="mt-5 text-base leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_80%,white)] sm:text-[1.05rem] sm:leading-8">
                {bio}
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {proofPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[1.3rem] border border-[var(--rt-line)] bg-[var(--rt-cream)] px-4 py-4"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--rt-green)] text-xs font-bold text-white">
                    ✓
                  </span>
                  <p className="text-[0.98rem] leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_82%,white)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-base leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_80%,white)] sm:text-[1.05rem] sm:leading-8">
              {finalNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
