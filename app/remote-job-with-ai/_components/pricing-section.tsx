import Image from "next/image";
import Link from "next/link";

import { paymentLogos } from "../_content/remote-job-with-ai-content";

export function PricingSection() {
  return (
    <section id="offer" className="bg-[var(--rt-surface-soft)]">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl rounded-[2.4rem] bg-[var(--rt-green)] px-6 py-10 text-white shadow-[0_30px_80px_rgba(4,61,49,0.2)] sm:px-10 sm:py-12">
          <h2 className="text-center text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
            Get the Full Course + Toolkit
          </h2>
          <div className="mx-auto mt-6 max-w-xl text-center">
            <div className="mt-2 flex items-end justify-center gap-3">
              <span className="text-3xl font-extrabold tracking-[-0.05em] text-white/30 line-through sm:text-4xl">
                $289
              </span>
              <span className="text-6xl font-extrabold tracking-[-0.07em] text-white sm:text-7xl">
                $89
              </span>
            </div>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--rt-yellow)] sm:text-base">
              70% off • Save $200
            </p>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
              The full recruiter-led course, practical toolkit, and 29-day plan
              in one purchase.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-[24rem] sm:max-w-[28rem]">
            <div className="relative overflow-hidden rounded-[1.85rem] border border-[color:rgba(4,61,49,0.08)] bg-[radial-gradient(circle_at_top,rgba(240,253,81,0.18),transparent_42%),linear-gradient(180deg,#fbfaf4_0%,#eef3e8_100%)] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_18px_34px_rgba(4,61,49,0.14)] sm:px-5 sm:py-6">
              <div className="absolute inset-x-6 top-0 h-10 rounded-full bg-white/30 blur-2xl" />
              <Image
                src="/course-assets/remote-job-with-ai-pricing-bundle.png"
                alt="Remote Job With AI course and toolkit bundle"
                width={1600}
                height={768}
                sizes="(max-width: 640px) 85vw, 448px"
                className="relative z-10 h-auto w-full object-contain drop-shadow-[0_26px_36px_rgba(4,61,49,0.18)]"
              />
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/52 sm:text-sm">
              What&apos;s Included
            </p>

            <div className="mt-4 space-y-3">
              <div className="rounded-[1.45rem] border border-white/12 bg-white/6 px-5 py-4 text-left">
                <p className="text-lg font-bold tracking-[-0.03em] text-white">
                  Full recruiter-led course
                </p>
                <p className="mt-2 text-sm leading-6 text-white/76 sm:text-[0.95rem]">
                  A practical system to help you search smarter, apply better,
                  and get more interviews.
                </p>
              </div>

              <div className="rounded-[1.45rem] border border-white/12 bg-white/6 px-5 py-4 text-left">
                <p className="text-lg font-bold tracking-[-0.03em] text-white">
                  29-day action plan
                </p>
                <p className="mt-2 text-sm leading-6 text-white/76 sm:text-[0.95rem]">
                  Know what to do first, next, and after that without guessing
                  your way through the process.
                </p>
              </div>

              <div className="rounded-[1.45rem] border border-[color:rgba(240,253,81,0.22)] bg-[color:rgba(240,253,81,0.08)] px-5 py-4 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--rt-yellow)]">
                  Included toolkit
                </p>
                <p className="mt-2 text-sm leading-6 text-white/84 sm:text-[0.95rem]">
                  Applications, LinkedIn, outreach, remote job search,
                  interviews, prompts, and checklists all included in one
                  purchase.
                </p>
              </div>
            </div>
          </div>

          <Link
            href="#offer"
            className="mx-auto mt-8 flex w-fit items-center justify-center rounded-[7px] border border-[color:rgba(4,61,49,0.14)] bg-[var(--rt-yellow)] px-8 py-4 text-sm font-bold !text-[var(--rt-green)] transition-transform hover:-translate-y-0.5"
          >
            Get Instant Access
          </Link>

          <p className="mt-5 text-center text-sm font-semibold leading-6 text-white/72">
            One payment. Lifetime access. No subscription.
          </p>

          <div className="mx-auto mt-6 max-w-lg border-t border-white/12 pt-5">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white/58 sm:text-xs">
              Secure checkout
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
              {paymentLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex h-11 items-center justify-center rounded-full border border-white/12 bg-white/95 px-4 shadow-[0_8px_18px_rgba(3,47,38,0.08)]"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="block w-auto"
                    style={{ height: `${logo.height}px` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
