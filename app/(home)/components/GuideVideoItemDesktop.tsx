"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import DownArrow from "@/app/icons/DownArrow";
import PlayButton from "../components/PlayButton";
import X from "@/app/icons/X";

export default function GuideVideoItemDesktop() {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   if (!open) return;
  //   const onKey = (e: KeyboardEvent) => {
  //     if (e.key === "Escape") setOpen(false);
  //   };
  //   window.addEventListener("keydown", onKey);
  //   return () => window.removeEventListener("keydown", onKey);
  // }, [open]);

  // useEffect(() => {
  //   if (open) {
  //     const prev = document.body.style.overflow;
  //     document.body.style.overflow = "hidden";
  //     return () => {
  //       document.body.style.overflow = prev;
  //     };
  //   }
  // }, [open]);

  // const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);
  const handleOpen = () => alert("가이드 영상을 준비중입니다 :)");

  return (
    <>
      {/* 썸네일 */}
      <div
        className="
          hidden lg:flex
          relative flex-row justify-center group hover:cursor-pointer
          transition-transform duration-300 ease-out
          hover:scale-101
        "
        role="button"
        tabIndex={0}
        onClick={handleOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleOpen();
        }}
        aria-label="공동체 연결 가이드 영상 열기"
      >
        <div className="absolute px-[24] py-[12] rounded-[10] bg-black text-white text-xl font-gmarket font-bold top-[-24] -rotate-[4deg]">
          공동체 연결 가이드 영상 보기!
        </div>
        <div className="absolute top-[40]">
          <DownArrow width={36} height={54} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayButton />
        </div>

        <Image
          src="/images/guide-video-placeholder.png"
          alt="Guide Video Image"
          width={450}
          height={389}
          className="rounded-[24] transition-transform duration-300 ease-out"
        />
      </div>

      {/* 전체 화면 오버레이 */}
      {open && (
        <div
          className="fixed inset-0 z-100 bg-background-dark"
          aria-modal="true"
          role="dialog"
        >
          {/* 닫기 버튼 */}
          <button
            onClick={handleClose}
            aria-label="닫기"
            className="absolute bg-white top-4 hover:cursor-pointer right-[24] h-12 w-12 rounded-full border border-black/10 flex items-center justify-center text-2xl leading-none hover:scale-105 transition"
          >
            <X />
          </button>

          <div className="w-full h-full flex items-center justify-center p-4">
            <div
              className="w-full max-w-5xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/videos/test_video.mp4" // public 폴더에 있는 경우
                autoPlay
                playsInline
                controls
                loop={false}
                className="w-full h-full rounded-[16]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
