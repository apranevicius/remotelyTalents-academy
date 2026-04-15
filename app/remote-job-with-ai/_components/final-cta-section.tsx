import Link from "next/link";

const finalCtaReassuranceItems = [
  { icon: "$", label: "One payment" },
  { icon: "∞", label: "Lifetime access" },
  { icon: "✓", label: "No subscription" },
] as const;

export function FinalCtaSection() {
  return (
    <section className="bg-[var(--rt-green)] text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 lg:px-12">
        <h2 className="text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
          Stop guessing and start moving toward a real remote job
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
          You do not need more scattered advice, random prompts, or low-trust
          job boards. You need a recruiter-led plan that helps you apply
          better, search smarter, and create more real opportunities.
        </p>
        <div className="mt-9">
          <Link
            href="#offer"
            className="inline-flex items-center justify-center rounded-[7px] border border-[color:rgba(4,61,49,0.14)] bg-[var(--rt-yellow)] px-8 py-4 text-sm font-bold !text-[var(--rt-green)] transition-transform hover:-translate-y-0.5"
          >
            Get Lifetime Access
          </Link>
        </div>
        <div className="mt-5 flex flex-col items-center gap-3 text-sm text-white/72 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-5 sm:gap-y-3">
          {finalCtaReassuranceItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/18 bg-white/8 text-[11px] font-bold text-[var(--rt-yellow)]">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
