import { SectionHeading } from "../../_components/section-heading";

type CoachingFitSectionProps = {
  title: string;
  body: string;
  goodFitTitle: string;
  notFitTitle: string;
  goodFitItems: readonly string[];
  notFitItems: readonly string[];
};

export function CoachingFitSection({
  title,
  body,
  goodFitTitle,
  notFitTitle,
  goodFitItems,
  notFitItems,
}: CoachingFitSectionProps) {
  return (
    <section className="bg-[var(--rt-cream)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeading title={title} description={body} align="center" />

        <div className="mx-auto mt-10 grid max-w-6xl overflow-hidden rounded-[2rem] border border-[var(--rt-line)] bg-white shadow-[0_18px_44px_rgba(4,61,49,0.05)] lg:grid-cols-2">
          <FitColumn
            title={goodFitTitle}
            items={goodFitItems}
            variant="positive"
          />
          <FitColumn
            title={notFitTitle}
            items={notFitItems}
            variant="neutral"
          />
        </div>
      </div>
    </section>
  );
}

function FitColumn({
  title,
  items,
  variant,
}: {
  title: string;
  items: readonly string[];
  variant: "positive" | "neutral";
}) {
  const isPositive = variant === "positive";

  return (
    <div
      className={`p-6 sm:p-8 lg:p-10 ${
        isPositive
          ? "border-b border-[var(--rt-line)] lg:border-b-0 lg:border-r"
          : "bg-[color:rgba(238,242,239,0.48)]"
      }`}
    >
      <h3 className="text-2xl font-extrabold tracking-normal text-[var(--rt-green)] sm:text-3xl">
        {title}
      </h3>

      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3">
            <span
              className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                isPositive
                  ? "bg-[var(--rt-green)] text-white"
                  : "border border-[color:rgba(4,61,49,0.18)] bg-white text-[var(--rt-green)]/58"
              }`}
            >
              {isPositive ? "✓" : "–"}
            </span>
            <p className="text-[0.98rem] leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_80%,white)] sm:text-base">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
