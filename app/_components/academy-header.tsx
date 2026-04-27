import Image from "next/image";
import Link from "next/link";

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
  return (
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

        <div className="hidden items-center gap-6 sm:flex">
          {navLinks.length > 0 ? (
            <nav aria-label="Academy navigation" className="flex items-center gap-5">
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
    </header>
  );
}
