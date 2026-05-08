import { SectionHeading } from "../../_components/section-heading";

type CoachingVideoSectionProps = {
  title: string;
  description: string;
  videoTitle: string;
  videoUrl: string;
};

export function CoachingVideoSection({
  title,
  description,
  videoTitle,
  videoUrl,
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
            <iframe
              src={videoUrl}
              title={videoTitle}
              className="aspect-video w-full rounded-[1.55rem] bg-[var(--rt-green)]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
