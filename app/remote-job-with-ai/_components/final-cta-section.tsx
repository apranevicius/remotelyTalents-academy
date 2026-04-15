import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section className="bg-[var(--rt-green)] text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 lg:px-12">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--rt-yellow)]">
          Final CTA
        </p>
        <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
          Stop guessing. Start following a better system.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
          If you want your first real remote job but you are tired of fake
          jobs, broken advice, and feeling stuck, this course gives you a more
          practical path forward.
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-white/72">
          Clear system. Better positioning. Smarter execution. More real
          chances.
        </p>
        <div className="mt-9">
          <Link
            href="#offer"
            className="inline-flex items-center justify-center rounded-[7px] border border-[color:rgba(4,61,49,0.14)] bg-[var(--rt-yellow)] px-8 py-4 text-sm font-bold !text-[var(--rt-green)] transition-transform hover:-translate-y-0.5"
          >
            Get Lifetime Access
          </Link>
        </div>
      </div>
    </section>
  );
}
