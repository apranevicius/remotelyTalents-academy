import Link from "next/link";

export function MidPageCtaSection() {
  return (
    <section className="bg-[var(--rt-green)] text-white">
      <div className="mx-auto max-w-4xl px-6 py-10 text-center sm:px-10 sm:py-12 lg:px-12">
        <h2 className="text-[2rem] font-extrabold tracking-[-0.045em] sm:text-[2.3rem]">
          Stop wasting time on fake jobs and broken advice
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-white/78 sm:mt-4">
          Get the recruiter-led course, toolkit, and 29-day plan that helps
          you apply better, search smarter, and get more interviews.
        </p>
        <div className="mt-5 sm:mt-6">
          <Link
            href="#offer"
            className="inline-flex items-center justify-center rounded-[7px] border border-[color:rgba(4,61,49,0.14)] bg-[var(--rt-yellow)] px-7 py-3.5 text-sm font-bold !text-[var(--rt-green)] transition-transform hover:-translate-y-0.5"
          >
            Get Lifetime Access
          </Link>
        </div>
      </div>
    </section>
  );
}
