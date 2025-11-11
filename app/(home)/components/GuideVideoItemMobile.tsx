"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import PlayButton from "./PlayButton";
import X from "@/app/icons/X";

export default function GuideVideoItemMobile() {
  const [open, setOpen] = useState(false);
  const [showControl, setShowControl] = useState(false);

  // ESC로 닫기 (태블릿/모바일 키보드 대응)
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // 오픈 시 스크롤 잠금
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <div className="lg:hidden mt-[24] relative select-none">
      {/* 상단 라벨 (태블릿) */}
      <div
        className="
          hidden md:block
          absolute top-[-24] left-1/2 -translate-x-1/2 z-20
          px-[24] py-[12] rounded-[10]
          bg-black text-white text-xl font-gmarket font-bold
          -rotate-[4deg] pointer-events-none
        "
      >
        공동체 연결 가이드 영상 보기!
      </div>

      {/* 상단 라벨 (모바일) */}
      <div
        className="
          md:hidden
          absolute top-[-16] left-[-4] z-20 
          px-[16] py-[8] rounded-[10]
          bg-black text-white text-base font-gmarket font-bold
          -rotate-[4deg] pointer-events-none
        "
      >
        공동체 연결 가이드 영상
      </div>

      {/* 썸네일 카드 */}
      <div
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleOpen();
        }}
        className="
          relative w-full
          rounded-[24] overflow-hidden
          cursor-pointer
          transition-transform duration-200 ease-out
          hover:scale-[1.03] active:scale-[0.96]
          motion-safe:will-change-transform
        "
        role="button"
        tabIndex={0}
        aria-label="가이드 영상 열기"
      >
        {/* 재생 아이콘 */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <PlayButton />
        </div>

        {/* 썸네일 이미지 */}
        <Image
          src="/images/guide-video-placeholder-mobile.png"
          alt="Guide Video Image"
          width={450}
          height={389}
          className="w-full h-auto rounded-[24] relative z-0"
        />
      </div>

      {/* 전체 화면 오버레이 (모바일/태블릿 공통) */}
      {open && (
        <div
          className="fixed inset-0 z-100 bg-background-dark"
          role="dialog"
          aria-modal="true"
        >
          {/* 닫기 버튼 (우상단) */}
          <button
            onClick={handleClose}
            aria-label="닫기"
            className="
              absolute top-4 right-4
              p-2 rounded-full
              bg-white border border-black/10
              active:scale-95 transition
            "
          >
            <X />
          </button>

          {/* 배경 클릭 시 닫기 */}
          <div className="w-full h-full flex items-center justify-center">
            {/* 영상 컨테이너: 버블링 방지 */}
            <div
              className="w-full aspect-video"
              onClick={(e) => {
                e.stopPropagation();
                setShowControl(!showControl);
              }}
            >
              {/* 로컬/자체 호스팅 영상: 자동재생 자유롭게 가능 */}
              <video
                src="/videos/test_video.mp4" // 필요 시 파일 경로만 바꿔줘
                autoPlay
                playsInline
                controls={showControl}
                className="w-full h-full "
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
