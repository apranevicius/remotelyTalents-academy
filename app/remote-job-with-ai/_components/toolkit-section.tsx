import Image from "next/image";

import { assets } from "../_content/remote-job-with-ai-content";
import { SectionHeading } from "./section-heading";

export function ToolkitSection() {
  return (
    <section className="bg-[var(--rt-cream)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow=""
          title="You’re not just getting the course. You’re getting practical help you can use right away."
          description="From templates and checklists to outreach help, job-search resources, and interview prep, these tools are here to make the whole process feel clearer, easier, and more manageable."
          align="center"
        />
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {assets.map((asset) => (
            <article
              key={asset.title}
              className="rounded-[2rem] border border-[var(--rt-line)] bg-white p-7 shadow-[0_16px_36px_rgba(4,61,49,0.05)]"
            >
              <div className="mb-6 flex min-h-[224px] items-center justify-center sm:min-h-[248px]">
                <div className="relative w-full max-w-[260px] overflow-hidden rounded-[1.35rem] sm:max-w-[272px]">
                  <Image
                    src={asset.imageSrc}
                    alt={asset.imageAlt}
                    width={640}
                    height={430}
                    sizes="(max-width: 768px) 72vw, 272px"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-[-0.04em] text-[var(--rt-green)]">
                {asset.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_80%,white)]">
                {asset.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
