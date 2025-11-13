import Link from "next/link";
import Container from "../components/Container";
import Logo from "../components/Logo";
import Image from "next/image";
import DownloadRedirect from "./components/DownloadRedirect";

export const metadata = {
  title: "비블레시아 앱 다운로드",
  description: "iOS와 Android에서 비블레시아를 만나보세요.",
};

export default function DownloadPage() {
  return (
    <div className="flex flex-col w-full min-h-svh bg-background">
      <LocalNavbar />
      <DownloadRedirect />

      <div className="flex-1 flex flex-col items-center justify-center gap-[24] md:gap-[32] pb-[96] md:pb-[164]">
        <div className="flex flex-col items-center lg:gap-[24] md:gap-[20] gap-[16]">
          <Image
            src="/images/join-us-image.png"
            alt="Download Illustration"
            width={256}
            height={256}
            className="lg:w-[228px] md:w-56 w-[164px]"
          />
          <div className="flex flex-col items-center gap-[12]">
            <h1 className="font-gmarket font-medium text-center lg:text-4xl md:text-[36px] text-[24px] leading-[1.2]">
              <span className="font-bold relative underline underline-offset-0 md:decoration-[8px] decoration-[6px] decoration-orange500/50">
                앱 스토어 이동 중...
              </span>
            </h1>
            <div className="font-gmarket text-[16px] md:text-[20px] lg:text-[22px] text-black/55 whitespace-pre-line text-center">
              {"자동으로 이동하지 않는다면\n아래 버튼을 눌러주세요"}
            </div>

            {/* ✅ 다운로드 버튼들 */}
            <div className="mt-4 flex gap-3">
              {/* iOS */}
              <a
                href="https://apps.apple.com/kr/app/id6741053150"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-[16] bg-black text-white hover:opacity-90 transition"
              >
                <Image
                  src="/images/apple-icon.png"
                  alt="Apple Icon"
                  width={16}
                  height={16}
                />
                <span className="font-medium text-sm md:text-base">
                  App Store
                </span>
              </a>

              {/* Android */}
              <a
                href="https://play.google.com/store/apps/details?id=qt.bible.ekklesia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-[16] bg-black text-white hover:opacity-90 transition"
              >
                <Image
                  src="/images/play-icon.png"
                  alt="Google Play Icon"
                  width={16}
                  height={16}
                />
                <span className="font-medium text-sm md:text-base">
                  Google Play
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LocalNavbar() {
  return (
    <nav role="navigation" aria-label="Primary">
      <Container className="h-14 md:h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex flex-row items-center text-xl font-bold gap-1"
        >
          <Logo className="h-7 w-7 md:h-8 md:w-8" />
          <div className="text-lg md:text-xl font-gmarket font-bold text-black/80">
            비블레시아
          </div>
        </Link>
      </Container>
    </nav>
  );
}
