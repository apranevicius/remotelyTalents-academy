"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileStickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");

      if (!hero) {
        setIsVisible(false);
        return;
      }

      const heroBottom = hero.getBoundingClientRect().bottom;
      setIsVisible(heroBottom <= 88);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-[color:rgba(4,61,49,0.08)] bg-[color:rgba(247,247,241,0.96)] px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 shadow-[0_-10px_30px_rgba(4,61,49,0.08)] backdrop-blur transition-transform duration-300 md:hidden ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!isVisible}
    >
      <div className="relative mx-auto w-full max-w-md">
        <Link
          href="#offer"
          className="relative left-1/2 inline-flex min-h-14 -translate-x-1/2 items-center justify-center rounded-[7px] border border-[color:rgba(4,61,49,0.14)] bg-[var(--rt-yellow)] px-8 py-4 text-sm font-bold !text-[var(--rt-green)] shadow-[0_8px_20px_rgba(4,61,49,0.14)]"
        >
          Get Lifetime Access
        </Link>
      </div>
    </div>
  );
}
