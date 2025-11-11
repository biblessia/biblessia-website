import Container from "@/app/components/Container";
import Logo from "@/app/components/Logo";
import Link from "next/link";

export default function FooterSection() {
  return (
    <div className="w-full bg-white ">
      <Container className="flex flex-row justify-between pt-[64] pb-[64] md:pt-[80] md:pb-[120] lg:px-0 md:px-[64] px-[32] gap-[48] md:gap-[16]">
        <LeftSide />
        <RightSide />
      </Container>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="flex-1 flex flex-col gap-[4] items-center md:items-start">
      <div className="flex flex-row gap-[4] items-center pr-[16] md:pr-0">
        <Logo />
        <div className="font-gmarket font-bold text-xl">비블레시아</div>
      </div>
      <div className="text-black/55 lg:text-base text-sm ">
        말씀과 기도록 연결되는 신앙 공동체
      </div>
      <div className="flex md:hidden flex-row items-center gap-[16] pt-[32] pr-[8]">
        <a
          href="https://slashpage.com/ekklesia/5r398nmn9dx132vwje7y"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-black/55 text-sm"
        >
          개인정보 이용정책
        </a>
        <a
          href="https://slashpage.com/ekklesia/n8pw9x2zdqeg12g7yrqv"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-black/55 text-sm"
        >
          이용약관
        </a>
      </div>
    </div>
  );
}

function RightSide() {
  return (
    <div className="hidden md:flex md:flex-row gap-[56]">
      <div className="flex flex-col gap-[8] ">
        <div className="font-bold pb-[16]">핵심 기능들</div>
        <Link href="/" className="font-medium text-black/55">
          공동체 연결
        </Link>
        <Link href="/" className="font-medium text-black/55">
          다양한 묵상 유형
        </Link>
      </div>
      <div className="flex flex-col gap-[8]">
        <div className="font-bold pb-[16]">더 알아보기</div>
        <Link href="/" className="font-medium text-black/55">
          블로그
        </Link>
        <Link href="/" className="font-medium text-black/55">
          사용자 가이드
        </Link>
        <Link href="/" className="font-medium text-black/55">
          사역 리포트
        </Link>
        <Link href="/" className="font-medium text-black/55">
          업데이트 소식
        </Link>
      </div>
      <div className="flex flex-col gap-[8]">
        <div className="font-bold pb-[16]">고객지원</div>
        <Link href="/" className="font-medium text-black/55">
          연락하기
        </Link>
        <a
          href="https://slashpage.com/ekklesia/5r398nmn9dx132vwje7y"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-black/55"
        >
          개인정보 처리방침
        </a>
        <a
          href="https://slashpage.com/ekklesia/n8pw9x2zdqeg12g7yrqv"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-black/55"
        >
          이용약관
        </a>
      </div>
    </div>
  );
}
