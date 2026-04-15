import Link from "next/link";

const legalLinks = [
  {
    href: "https://www.remotelytalents.com/terms-of-service",
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

export function LegalFooter() {
  return (
    <section className="border-t border-[color:rgba(4,61,49,0.08)] bg-[var(--rt-surface-soft)] text-[var(--rt-green)]">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-5 text-center sm:gap-4">
          <p className="text-sm leading-6 text-[var(--rt-green)]/65">
            © 2026 Remotely Talents LLC. All rights reserved.
          </p>
          <p className="mx-auto max-w-3xl text-sm leading-6 text-[var(--rt-green)]/58">
            This course is designed for educational purposes and does not
            guarantee interviews, job offers, or employment outcomes. Results
            depend on experience, market conditions, and execution.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-[var(--rt-green)]/72">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[var(--rt-green)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
