"use client";

import { Feature } from "../sections/FeatureSection";

export default function FeatureItem({
  emoji,
  title,
  description,
  active,
}: Feature) {
  const base =
    "group relative flex flex-col items-start gap-[16] md:gap-[24] px-[24] md:px-[32] py-[20] md:py-[32] " +
    "rounded-[16] bg-background border border-transparent " +
    "transition-transform duration-200 ease-out motion-safe:will-change-transform " + // ⬅️ duration/타이밍 GuideVideo와 동일
    "overflow-hidden"; // 스케일 시 테두리 넘침 방지

  // GuideVideoItemMobile 과 동일한 스케일 피드백
  const tactileScale = "hover:scale-[1.03] active:scale-[0.96]"; // ⬅️ hover ↑, active ↓

  // 보더/섀도우는 아주 미세하게만 (원하면 제거 가능)
  const subtleFX =
    "hover:shadow-sm hover:border-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black/10";

  const interactiveWhenActive = `${tactileScale} ${subtleFX} hover:cursor-pointer`;
  const nonInteractive = "opacity-70 hover:cursor-not-allowed"; // 스케일/섀도우 없음

  return (
    <div
      className={`${base} ${active ? interactiveWhenActive : nonInteractive}`}
      role="button"
      aria-disabled={!active}
      tabIndex={active ? 0 : -1}
      onClick={() => alert("가이드 영상 재생 기능이 곧 연결됩니다 :)")}
    >
      <div className="flex flex-col gap-[12] md:gap-[16]">
        {emoji}
        <div className="flex flex-col gap-[4] md:gap-[8]">
          <div className="font-gmarket lg:text-[22px] md:text-[20px] text-base flex items-center">
            {title}
          </div>

          <div className="lg:text-lg md:text-base text-[14px] break-keep">
            {description}
          </div>
        </div>
      </div>

      {active ? (
        <div className="md:flex font-gmarket text-black/80 items-center gap-1 text-[12px] md:text-[15px] lg:text-base">
          사용법 보기{" "}
          <span className="transition-transform duration-200 group-hover:translate-x-0.5">
            &gt;
          </span>
        </div>
      ) : (
        <div className="font-gmarket text-black/40 text-[12px] md:text-[15px] lg:text-base">
          25년 12월 추가 예정
        </div>
      )}
    </div>
  );
}
