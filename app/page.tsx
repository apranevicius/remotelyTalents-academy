import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--rt-cream)] text-[var(--rt-green)]">
      <header className="sticky top-0 z-20 border-b border-[var(--rt-line)] bg-[color:rgba(247,247,241,0.92)] backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
          <Link href="/" className="flex items-center gap-2.5 sm:gap-4">
            <Image
              src="/remotelytalents-logo.png"
              alt="RemotelyTalents"
              width={220}
              height={65}
              className="h-auto w-[104px] sm:w-[132px]"
              priority
            />
            <span className="hidden h-8 w-[2px] rounded-full bg-[color:rgba(4,61,49,0.14)] sm:block" />
            <span className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[var(--rt-green-2)] sm:text-sm sm:tracking-[0.32em]">
              Academy
            </span>
          </Link>

          <Link
            href="/remote-job-with-ai"
            className="hidden items-center justify-center rounded-[6px] bg-[var(--rt-green)] px-5 py-3 text-sm font-bold !text-white transition-transform hover:-translate-y-0.5 hover:bg-[var(--rt-green-2)] sm:inline-flex"
          >
            View Course
          </Link>
        </div>
      </header>

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20 sm:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--rt-green-2)]">
            RemotelyTalents Academy
          </p>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-[-0.035em] text-[var(--rt-green)] sm:text-5xl lg:text-[3.5rem]">
            Recruiter-led courses for people building remote careers.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_76%,white)] sm:text-lg">
            This is the Academy home for RemotelyTalents. The first course is
            already mapped and ready to review as a full landing page concept.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-[2rem] bg-[var(--rt-green)] p-8 text-white shadow-[0_24px_80px_rgba(4,61,49,0.18)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--rt-yellow)]">
              First Course
            </p>
            <h2 className="mt-4 max-w-2xl text-[1.75rem] font-extrabold tracking-[-0.035em] sm:text-[2rem]">
              Remote Job With AI
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/82">
              A recruiter-led 29-day course designed to help people position
              themselves better, search smarter, avoid fake listings, and start
              getting more real remote job opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/85">
              <span className="rounded-full border border-white/20 px-4 py-2">
                Recruiter-led
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2">
                29-day system
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2">
                AI-supported
              </span>
            </div>
            <div className="mt-10">
              <Link
                href="/remote-job-with-ai"
                className="inline-flex items-center justify-center rounded-[7px] border border-[color:rgba(4,61,49,0.14)] bg-[var(--rt-yellow)] px-7 py-4 text-sm font-bold !text-[var(--rt-green)] transition-transform hover:-translate-y-0.5"
              >
                Open Course Page
              </Link>
            </div>
          </article>

          <aside className="rounded-[2rem] border border-[var(--rt-line)] bg-white p-8 shadow-[0_18px_60px_rgba(4,61,49,0.08)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--rt-green-2)]">
              What This Site Will Hold
            </p>
            <ul className="mt-6 space-y-4 text-base leading-7 text-[color:color-mix(in_srgb,var(--rt-green)_82%,white)]">
              <li>Course landing pages</li>
              <li>Future Academy course library</li>
              <li>Recruiter-led learning products</li>
              <li>Consistent RemotelyTalents brand experience</li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
