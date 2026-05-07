import { SectionHeading } from "../../_components/section-heading";

type CoachingVideoSectionProps = {
  title: string;
  description: string;
  placeholderLabel: string;
};

export function CoachingVideoSection({
  title,
  description,
  placeholderLabel,
}: CoachingVideoSectionProps) {
  return (
    <section className="bg-[var(--rt-cream)]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeading
          title={title}
          description={description}
          align="center"
        />

        <div className="mx-auto mt-10 max-w-4xl">
          <div className="overflow-hidden rounded-[2rem] border border-[var(--rt-line)] bg-[var(--rt-green)] p-3 shadow-[0_24px_70px_rgba(4,61,49,0.14)] sm:p-4">
            <div className="relative aspect-video overflow-hidden rounded-[1.55rem] bg-[radial-gradient(circle_at_top_left,rgba(240,253,81,0.18),transparent_34%),linear-gradient(135deg,#043d31_0%,#032f26_100%)]">
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[color:rgba(240,253,81,0.38)] bg-[color:rgba(240,253,81,0.14)] text-[var(--rt-yellow)] shadow-[0_18px_45px_rgba(0,0,0,0.18)]">
                  <span className="ml-1 text-2xl">▶</span>
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--rt-yellow)]">
                  {placeholderLabel}
                </p>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/72 sm:text-base sm:leading-7">
                  Video placeholder. Replace this area with the final embedded
                  video when Anastasia&apos;s recording is ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
