import Image from "next/image";
import Container from "@/app/components/Container";
import Link from "next/link";
import CTAButton from "../components/CTA";

export default function HeroSection() {
  return (
    <div className="w-full">
      <Container className="gap-[32]">
        <div className="flex flex-col justify-center items-center pt-[64] pb-[120] gap-[40]">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={440}
            height={389}
          />
          <HeroTitle />
          <CTAButton />
          <HeroDescription />
        </div>
      </Container>
    </div>
  );
}

function HeroTitle() {
  return (
    <div className="pt-[8]">
      <h1 className="font-gmarket font-medium text-center text-5xl leading-[1.2]">
        당신의 공동체가
        <br />
        <span className="font-bold relative underline underline-offset-0 decoration-[8px] decoration-orange500/50">
          말씀과 기도로 연결
        </span>
        됩니다
      </h1>
    </div>
  );
}

function HeroDescription() {
  return (
    <div className="flex flex-row gap-[36] pt-[24]">
      <div className="flex flex-col flex-1 gap-[24]">
        <p className="text-lg break-keep ">
          오늘날 우리는 신앙을 지키기 어려운 시대에 살고 있습니다. 바쁜 일상,
          끊임없는 정보와 자극 속에서 주일에 받은 은혜는 금세 희미해지고
          하나님과의 관계는 쉽게 멀어집니다.
        </p>
        <p className="text-lg break-keep">
          그렇지만 하나님은 우리에게 서로를 붙들어줄 공동체를 주셨습니다. 우리가
          <span className="font-semibold">
            서로의 묵상과 기도를 나눌 때, 하나님이 오늘도 우리 삶 속에서 일하고
            계심을 경험하며 함께 믿음을 지켜
          </span>
          나갈 수 있습니다.
        </p>
      </div>
      <div className="flex flex-col flex-1 gap-[24]">
        <p className="text-lg break-keep">
          비블레시아 앱은 분주한 하루 속에서도, 멀리 떨어져 있어도 사랑하는
          가족, 친구, 교회 공동체와의 영적 교제가 이어지도록 돕는 도구입니다.
          묵상과 기도로 믿음의 공동체가 세워지는 놀라운 여정에 지금
          함께해보세요!
        </p>
        <Profile />
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="flex flex-row items-center justify-end gap-[6] pr-[12]">
      <Image
        src="/images/yuhwan-avatar.png"
        alt="Developer Avatar"
        width={52}
        height={52}
      />
      <div>
        <div className="font-bold">Yuhwan Kim</div>
        <div className="text-sm leading-[0.8]">Faith-driven App Developer</div>
        <Link
          href="mailto:hello@biblessia.com"
          className="text-sm text-[#4F6FA3] underline"
        >
          hello@biblessia.com
        </Link>
      </div>
    </div>
  );
}
