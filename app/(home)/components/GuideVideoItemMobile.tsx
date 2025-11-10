"use client";
import Image from "next/image";
import PlayButton from "./PlayButton";

export default function GuideVideoItemMobile() {
  return (
    <div className="lg:hidden mt-[24] relative select-none">
      {/* ⬆️ 바깥 래퍼: overflow 없음 (라벨이 밖으로 나가도 안 잘림) */}

      {/* 상단 라벨 (항상 최상단) */}
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

      {/* 상단 라벨 모바일용 */}
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

      {/* 안쪽 래퍼: 스케일/클리핑 담당 */}
      <div
        onClick={() => alert("가이드 영상 재생 기능이 곧 연결됩니다 :)")}
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
      >
        {/* 재생 아이콘 (이미지 위) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <PlayButton />
        </div>

        {/* 썸네일 이미지 (맨 아래, transform 없음) */}
        <Image
          src="/images/guide-video-placeholder-mobile.png"
          alt="Guide Video Image"
          width={450}
          height={389}
          className="w-full h-auto rounded-[24] relative z-0"
        />
      </div>
    </div>
  );
}
