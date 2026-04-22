import Image from "next/image";

import { SectionHeading } from "../../_components/section-heading";

const instructorHighlights = [
  "Senior Recruiter at RemotelyTalents",
  "10+ years working in recruitment with a focus on remote roles",
  "Placed 500+ candidates across a wide range of remote positions",
];

export function InstructorSection() {
  return (
    <section className="bg-[var(--rt-surface-soft)]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionHeading
          title="Meet Your Instructor"
          description="This course is designed to feel practical and trustworthy because it comes from someone who understands how remote hiring actually works."
          align="center"
        />

        <div className="mt-12 grid gap-8 rounded-[2.2rem] border border-[var(--rt-line)] bg-white p-6 shadow-[0_18px_44px_rgba(4,61,49,0.05)] sm:p-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-10 lg:p-10">
          <div>
            <div className="overflow-hidden rounded-[1.9rem] border border-[var(--rt-line)] bg-[linear-gradient(180deg,#eef3e8_0%,#dfe8db_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="https://cdn.prod.website-files.com/62a0b732bafc8e2f190f701c/69e884046e9c9212289704a3_daria-litvinova.avif"
                  alt="Daria Litvinova, Senior Recruiter at RemotelyTalents"
                  fill
                  sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--rt-green-2)]">
                Senior Recruiter at RemotelyTalents
              </p>
              <div className="mt-4 flex items-center justify-center gap-3 lg:justify-start">
                <h3 className="text-3xl font-extrabold tracking-[-0.045em] text-[var(--rt-green)] sm:text-[2.2rem]">
                  Daria Litvinova
                </h3>
                <a
                  href="https://www.linkedin.com/in/daria-l-81608865/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View Daria Litvinova on LinkedIn"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--rt-line)] bg-white text-[#0A66C2] shadow-[0_10px_24px_rgba(4,61,49,0.05)] transition-colors hover:bg-[var(--rt-cream)]"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4.5 w-4.5 fill-current"
                  >
                    <path d="M6.94 8.5A1.56 1.56 0 1 1 6.9 5.38a1.56 1.56 0 0 1 .04 3.12ZM5.6 9.7h2.67V18H5.6V9.7Zm4.34 0H12.5v1.13h.04c.36-.68 1.24-1.4 2.56-1.4 2.74 0 3.25 1.8 3.25 4.14V18h-2.67v-3.95c0-.94-.02-2.16-1.32-2.16-1.32 0-1.52 1.03-1.52 2.1V18H9.94V9.7Z" />
                  </svg>
                </a>
              </div>

              <p className="mt-5 text-base leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_80%,white)] sm:text-[1.05rem] sm:leading-8">
                Daria Litvinova is a Senior Recruiter at RemotelyTalents with
                more than 10 years of recruitment experience, specializing in
                remote roles. She has helped place more than 500 candidates
                across a wide range of remote positions and built this course
                for people who want a real remote job without wasting time on
                fake opportunities, weak advice, and guesswork.
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {instructorHighlights.map((item) => (
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
              This is not recycled internet advice or empty AI hype. It is a
              practical plan shaped by real hiring experience, built to help
              you apply better, search smarter, and get more interviews without
              wasting months guessing your way through the market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
