import { SectionHeading } from "../../_components/section-heading";

type ChecklistItem = {
  title: string;
  description: string;
};

type HomeHelpsBlockProps = {
  eyebrow?: string;
  title: string;
  description: string;
  checklist: readonly ChecklistItem[];
};

export function HomeHelpsBlock({
  eyebrow,
  title,
  description,
  checklist,
}: HomeHelpsBlockProps) {
  return (
    <section className="px-6 py-18 sm:px-10 sm:py-22 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
        />

        <div className="mx-auto mt-10 max-w-4xl rounded-[2rem] border border-[var(--rt-line)] bg-white p-5 shadow-[0_18px_60px_rgba(4,61,49,0.08)] sm:p-7">
          <div className="space-y-4">
            {checklist.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-[1.3rem] bg-[var(--rt-surface-soft)] px-4 py-4 sm:px-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--rt-green)] text-sm font-bold text-white">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[var(--rt-green)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[color:color-mix(in_srgb,var(--rt-green)_76%,white)] sm:text-[0.98rem]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
