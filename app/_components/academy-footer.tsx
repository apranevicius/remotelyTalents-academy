import Image from "next/image";
import Link from "next/link";

const productLinks = [
  {
    href: "/coaching-programs",
    label: "Coaching Programs",
  },
  {
    href: "/intro-call",
    label: "Book an Intro Call",
  },
  {
    href: "/find-remote-job-with-ai",
    label: "Remote Job Course",
  },
  {
    href: "/about",
    label: "About us",
  },
  {
    href: "https://www.remotelytalents.com",
    label: "Recruitment Services",
  },
] as const;

const legalLinks = [
  {
    href: "/terms-of-service",
    label: "Terms of Service",
  },
  {
    href: "https://www.remotelytalents.com/privacy-policy",
    label: "Privacy Policy",
  },
  {
    href: "https://www.remotelytalents.com/disclaimer",
    label: "Disclaimer",
  },
  {
    href: "https://www.remotelytalents.com/cookies-policy",
    label: "Cookies Policy",
  },
] as const;

type AcademyFooterProps = {
  description?: string;
};

export function AcademyFooter({ description }: AcademyFooterProps) {
  return (
    <footer className="border-t border-[color:rgba(4,61,49,0.08)] bg-[var(--rt-surface-soft)] text-[var(--rt-green)]">
      <div className="mx-auto max-w-6xl px-6 py-7 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-4 text-center">
          <div className="space-y-2">
            <Link
              href="/"
              className="mx-auto flex w-fit items-center gap-2.5"
            >
              <Image
                src="/remotelytalents-logo.png"
                alt="RemotelyTalents"
                width={220}
                height={65}
                className="h-auto w-[82px] sm:w-[94px]"
              />
              <span className="h-5 w-px rounded-full bg-[color:rgba(4,61,49,0.14)]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--rt-green-2)] sm:text-[11px] sm:tracking-[0.26em]">
                Academy
              </span>
            </Link>
            <p className="text-sm leading-6 text-[var(--rt-green)]/60">
              © 2026 Remotely Talents LLC. All rights reserved.
            </p>
          </div>

          {description ? (
            <p className="mx-auto max-w-3xl text-sm leading-6 text-[var(--rt-green)]/54">
              {description}
            </p>
          ) : null}

          <nav
            aria-label="Academy products"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-sm font-semibold text-[var(--rt-green)]"
          >
            {productLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="transition-colors hover:text-[var(--rt-green-2)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-sm text-[var(--rt-green)]/68">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="transition-colors hover:text-[var(--rt-green)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
