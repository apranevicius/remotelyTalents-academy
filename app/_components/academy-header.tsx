"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type AcademyHeaderProps = {
  ctaHref?: string;
  ctaLabel?: string;
  navLinks?: readonly {
    href: string;
    label: string;
  }[];
};

export function AcademyHeader({
  ctaHref,
  ctaLabel,
  navLinks = [],
}: AcademyHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hasMobileMenu = navLinks.length > 0 || Boolean(ctaHref && ctaLabel);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-20 border-b border-[var(--rt-line)] bg-[color:rgba(247,247,241,0.92)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-4"
          onClick={closeMenu}
        >
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

        {hasMobileMenu ? (
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="academy-mobile-menu"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[7px] border border-[var(--rt-line)] bg-white text-[var(--rt-green)] shadow-[0_8px_18px_rgba(4,61,49,0.05)] sm:hidden"
          >
            <span className="sr-only">
              {isMenuOpen ? "Close menu" : "Open menu"}
            </span>
            <span className="grid gap-1.5">
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        ) : null}

        <div className="hidden items-center gap-6 sm:flex">
          {navLinks.length > 0 ? (
            <nav
              aria-label="Academy navigation"
              className="flex items-center gap-5"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-[var(--rt-green)]/72 transition-colors hover:text-[var(--rt-green)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : null}

          {ctaHref && ctaLabel ? (
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-[6px] bg-[var(--rt-green)] px-5 py-3 text-sm font-bold !text-white transition-transform hover:-translate-y-0.5 hover:bg-[var(--rt-green-2)]"
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>
      </div>

      {hasMobileMenu ? (
        <div
          id="academy-mobile-menu"
          className={`border-t border-[var(--rt-line)] bg-[var(--rt-cream)] px-6 pb-5 pt-2 shadow-[0_18px_28px_rgba(4,61,49,0.06)] sm:hidden ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {navLinks.length > 0 ? (
            <nav aria-label="Academy mobile navigation" className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-[7px] px-2 py-3 text-base font-semibold text-[var(--rt-green)]/78 transition-colors hover:bg-white hover:text-[var(--rt-green)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : null}

          {ctaHref && ctaLabel ? (
            <Link
              href={ctaHref}
              onClick={closeMenu}
              className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-[6px] bg-[var(--rt-green)] px-5 py-3 text-sm font-bold !text-white transition-transform hover:-translate-y-0.5 hover:bg-[var(--rt-green-2)]"
            >
              {ctaLabel}
            </Link>
          ) : null}
        </div>
      ) : null}
    </header>
  );
}
