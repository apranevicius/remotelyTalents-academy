import { SectionHeading } from "../../_components/section-heading";

type HighlightItem = {
  title: string;
  description: string;
};

type HomeAgencyIntroBlockProps = {
  title: string;
  description: string;
  highlights: readonly HighlightItem[];
};

export function HomeAgencyIntroBlock({
  title,
  description,
  highlights,
}: HomeAgencyIntroBlockProps) {
  return (
    <section className="px-6 pb-18 sm:px-10 sm:pb-22 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title={title} description={description} align="center" />

        <div className="mx-auto mt-10 max-w-4xl border-y border-[var(--rt-line)]">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`py-5 sm:py-6 ${index === 0 ? "" : "border-t border-[var(--rt-line)]"}`}
            >
              <div className="mx-auto max-w-[34rem] text-center">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-[var(--rt-green)] sm:text-[1.15rem]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[color:color-mix(in_srgb,var(--rt-green)_76%,white)] sm:text-[0.98rem]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
