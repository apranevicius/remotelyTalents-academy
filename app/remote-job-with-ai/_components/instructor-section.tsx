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
              <div className="flex aspect-[4/5] items-center justify-center px-6">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[color:rgba(4,61,49,0.1)] bg-white/80 text-4xl font-extrabold tracking-[-0.05em] text-[var(--rt-green)] shadow-[0_18px_30px_rgba(4,61,49,0.08)]">
                  DL
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm leading-6 text-[color:color-mix(in_srgb,var(--rt-green)_62%,white)]">
              Instructor photo placeholder
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-center lg:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--rt-green-2)]">
                Daria Litvinova
              </p>
              <h3 className="mt-4 text-3xl font-extrabold tracking-[-0.045em] text-[var(--rt-green)] sm:text-[2.2rem]">
                Senior Recruiter at RemotelyTalents
              </h3>

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
