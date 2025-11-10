"use client";

export default function CTAButton() {
  const handleClick = () => {
    // 여기에 원하는 스크립트 실행!
    alert("앱 다운로드 기능이 곧 연결됩니다 :)");
    // 예: window.location.href = "/download";
    // 또는 앱 딥링크 / 모달 열기 등
  };

  return (
    <button
      onClick={handleClick}
      className="font-gmarket font-bold text-base md:text-xl px-[24] md:px-[32] py-[14] md:py-[16] bg-black text-white rounded-full 
        transition-transform duration-200 ease-out 
        hover:scale-105 active:scale-95 cursor-pointer"
    >
      앱 설치하기
    </button>
  );
}
