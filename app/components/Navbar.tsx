"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "./Container";
import clsx from "clsx";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className={clsx(
        "sticky top-0 z-50 w-full",
        "border-b transition-[background-color,border-color] duration-200 ease-out",
        "will-change:[background-color,border-color]",
        scrolled
          ? ["bg-white border-b-background-dark"]
          : ["bg-transparent border-transparent"]
      )}
    >
      <Container className="h-14 md:h-16 flex items-center justify-between">
        <div className="flex flex-row items-center text-xl font-bold gap-1">
          <Logo className="h-7 w-7 md:h-8 md:w-8" />
          <Link href="/" className="text-lg md:text-xl font-gmarket font-bold">
            비블레시아
          </Link>
        </div>
      </Container>
    </nav>
  );
}
