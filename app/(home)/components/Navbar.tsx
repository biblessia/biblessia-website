"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Container from "../../components/Container";
import clsx from "clsx";
import Logo from "../../components/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 메뉴 열릴 때 배경 스크롤 잠금
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ESC로 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav
      role="navigation"
      aria-label="Primary"
      className={clsx(
        "sticky top-0 z-50 w-full relative",
        "border-b transition-[background-color,border-color] duration-200 ease-out",
        scrolled
          ? "bg-white border-b-background-dark"
          : "bg-transparent border-transparent"
      )}
    >
      <Container className="h-14 md:h-16 flex items-center justify-between">
        {/* 로고 */}
        <Link
          href="/"
          className="flex flex-row items-center text-xl font-bold gap-1"
        >
          <Logo className="h-7 w-7 md:h-8 md:w-8" />
          <div className="text-lg md:text-xl font-gmarket font-bold text-black/80">
            비블레시아
          </div>
        </Link>

        {/* 데스크탑 메뉴 */}
        <div className="hidden lg:flex flex-row gap-[32]">
          <Link
            href="/user-guide"
            className="text-sm md:text-base font-gmarket font-medium"
          >
            사용 가이드
          </Link>
          <Link
            href="/update-news"
            className="text-sm md:text-base font-gmarket font-medium"
          >
            업데이트 소식
          </Link>
        </div>

        {/* 햄버거 (lg 미만에서 표시) */}
        <button
          type="button"
          aria-label="Open menu"
          aria-haspopup="true"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-lg transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black/20 hover:bg-black/5"
        >
          {/* 아이콘 토글 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={clsx("h-6 w-6", open ? "hidden" : "block")}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className={clsx("h-6 w-6", open ? "block" : "hidden")}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
          </svg>
        </button>
      </Container>

      {/* ✅ 풀스크린 오버레이 메뉴: 화면 맨 위에서 시작 (nav 위로) */}
      <div
        id="mobile-menu"
        className={clsx(
          "lg:hidden fixed inset-0 z-60", // 화면 전체, nav(z-50)보다 위
          "bg-white", // 필요시 bg-white/95 + backdrop-blur-[2px]
          "transition-all duration-200 ease-out",
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        )}
      >
        {/* 상단 바(닫기 버튼) */}
        <div className="h-14 md:h-16 flex items-center justify-end px-3 border-b border-background-dark">
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-black/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </div>

        {/* 메뉴 항목 */}
        <Container className="py-3">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/user-guide"
                onClick={() => setOpen(false)}
                className="block px-1 py-3 text-base font-gmarket font-medium hover:bg-black/5 rounded-[8]"
              >
                사용 가이드
              </Link>
            </li>
            <li>
              <Link
                href="/update-news"
                onClick={() => setOpen(false)}
                className="block px-1 py-3 text-base font-gmarket font-medium hover:bg-black/5 rounded-[8]"
              >
                업데이트 소식
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </nav>
  );
}
