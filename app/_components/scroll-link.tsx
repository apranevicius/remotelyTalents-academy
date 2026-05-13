"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

type ScrollLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export function ScrollLink({ href, className, children }: ScrollLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!href.startsWith("#")) {
      return;
    }

    const target = document.getElementById(href.slice(1));

    if (!target) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", href);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
