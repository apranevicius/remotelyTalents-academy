import Image from "next/image";
import Link from "next/link";

import {
  heroReassuranceItems,
  trustAvatars,
} from "../_content/remote-job-with-ai-content";

export function HeroSection() {
  return (
    <>
      <section
        id="hero"
        className="bg-[var(--rt-green)] [background-image:var(--rt-hero-surface)] text-white"
      >
        <div className="mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-center gap-14 px-6 py-20 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--rt-yellow)]">
              Start Your Remote Chapter
            </p>
            <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.045em] sm:text-5xl lg:text-[3.6rem]">
              Find a Remote Job with the Help of AI in 29 Days
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Stop wasting time on fake jobs, broken advice, and low-response
              applications. Follow a recruiter-led plan to apply better, search
              smarter, and get more interviews.
            </p>
            <div className="mt-9">
              <Link
                href="#offer"
                className="inline-flex items-center justify-center rounded-[7px] border border-[color:rgba(4,61,49,0.14)] bg-[var(--rt-yellow)] px-7 py-4 text-sm font-bold !text-[var(--rt-green)] transition-transform hover:-translate-y-0.5"
              >
                Get Lifetime Access
              </Link>
            </div>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/72 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-3">
              {heroReassuranceItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/18 bg-white/8 text-[11px] font-bold text-[var(--rt-yellow)]">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-[21rem] sm:max-w-[25rem] lg:max-w-[38rem]">
              <Image
                src="https://cdn.prod.website-files.com/62a0b732bafc8e2f190f701c/69c260f396f613675d5aecba_a70d2a2ab3c6c8c83da9f903fbf73039_hero-picture.avif"
                alt="Professional working remotely"
                width={1024}
                height={1024}
                sizes="(max-width: 640px) 84vw, (max-width: 1024px) 44vw, 38rem"
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 -mt-8 sm:-mt-10 lg:-mt-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
          <div className="mx-auto max-w-xl rounded-[1.9rem] border border-[color:rgba(4,61,49,0.08)] bg-white px-5 py-5 shadow-[0_20px_42px_rgba(4,61,49,0.08)] sm:max-w-2xl sm:px-7 sm:py-6">
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-5 sm:text-left">
              <div className="flex items-center justify-center">
                {trustAvatars.map((avatar, index) => (
                  <div
                    key={avatar.src}
                    className={`relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-[0_8px_18px_rgba(4,61,49,0.08)] ${
                      index === 0 ? "" : "-ml-3"
                    }`}
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center gap-2 sm:items-start">
                <div className="flex items-center justify-center gap-1.5 sm:justify-start">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span
                      key={index}
                      className="inline-flex h-6 w-6 items-center justify-center rounded-[2px] bg-[#00b67a] text-[13px] font-bold text-white"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="max-w-[24rem] text-sm font-semibold leading-6 text-[var(--rt-green)] sm:text-[0.96rem]">
                  4.9 out of 5 stars from 3,000+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
