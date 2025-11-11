// app/not-found.tsx
import Link from "next/link";
import Image from "next/image";
import Logo from "./components/Logo";
import Container from "./components/Container";

export default function NotFound() {
  return (
    <div className="flex flex-col w-full min-h-svh bg-background">
      <LocalNavbar />
      <div className="flex-1 flex flex-col items-center justify-center gap-[24] md:gap-[32] pb-[64] md:pb-[128]">
        <div className="flex flex-col items-center lg:gap-[24] md:gap-[20] gap-[16]">
          <Image
            src="/images/not-found-image.png"
            alt="Not Found Image"
            width={256}
            height={256}
            className="lg:w-[228px] md:w-56 w-[164px]"
          />
          <div className="flex flex-col items-center gap-[12]">
            <h1 className="font-gmarket font-medium text-center lg:text-4xl md:text-[36px] text-[24px] leading-[1.2]">
              <span className="font-bold relative underline underline-offset-0 md:decoration-[8px] decoration-[6px] decoration-orange500/50">
                페이지를 준비중입니다
              </span>
            </h1>
            <div className="font-gmarket text-[16px] md:text-[20px] lg:text-[22px] text-black/55">
              아직은 페이지가 존재하지 않아요
            </div>
          </div>
        </div>
        <CTAButton />
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

function CTAButton() {
  return (
    <Link
      href={"/"}
      className="font-gmarket font-bold text-sm md:text-lg px-[24] md:px-[28] py-[12] md:py-[12] bg-black text-white rounded-full 
        transition-transform duration-200 ease-out 
        hover:scale-105 active:scale-95 cursor-pointer"
    >
      홈으로 돌아가기
    </Link>
  );
}
