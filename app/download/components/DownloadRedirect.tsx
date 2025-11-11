// app/download/DownloadRedirect.tsx
"use client";

import { useEffect } from "react";

export default function DownloadRedirect() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const ua = navigator.userAgent;

      const isIOS = /iPad|iPhone|iPod|Macintosh/.test(ua);
      const isAndroid = /Android/.test(ua);
      const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(ua); // 모바일 기기 감지

      // ✅ PC 환경이라면 이동하지 않음
      if (!isMobile) return;

      if (isIOS) {
        window.location.href =
          "https://apps.apple.com/kr/app/qt-%EA%B3%B5%EB%8F%99%EC%B2%B4/id6741053150";
      } else if (isAndroid) {
        window.location.href =
          "https://play.google.com/store/apps/details?id=qt.bible.ekklesia";
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
