import Container from "@/app/components/Container";
import Diamond from "@/app/icons/Diamond";
import EmojiBook from "@/app/icons/EmojiBook";
import EmojiJournal from "@/app/icons/EmojiJournal";
import EmojiPrayer from "@/app/icons/EmojiPrayer";
import EmojiQT from "@/app/icons/EmojiQT";
import EmojiReading from "@/app/icons/EmojiReading";
import { ReactNode } from "react";

type Feature = {
  emoji: ReactNode;
  title: string;
  description: string;
  active: boolean;
};

export default function FeatureSection() {
  return (
    <div className="w-full bg-white">
      <Container className="flex flex-row items-end py-[120] gap-[48]">
        <div className="flex flex-col flex-1 gap-[48]">
          <TitleItem />
          <FeatureItemList />
        </div>
      </Container>
    </div>
  );
}

function TitleItem() {
  return (
    <div className="gap-[48]">
      <div className="flex flex-col gap-[24]">
        <Diamond size={64} />
        <h2 className="font-gmarket font-medium text-[44px] leading-[1.2]">
          말씀부터 기도까지
          <br />
          <span className="font-bold relative underline underline-offset-0 decoration-[8px] decoration-orange500/50">
            모든 묵상을 한 곳에서
          </span>
        </h2>
      </div>
    </div>
  );
}

function FeatureItemList() {
  const features: Feature[] = [
    {
      emoji: <EmojiQT width={52} height={56} />,
      title: "말씀 묵상",
      description:
        "매일 성경, 생명의 삶, 날마다 솟는 샘물 등 대한민국 대표 큐티 책의 묵상 일정을 통해 매일 하나님을 만나요!",
      active: true,
    },
    {
      emoji: <EmojiReading width={52} height={56} />,
      title: "성경 읽기",
      description:
        "리딩 지저스, 맥체인, 어성경 1년 1독 등 대표적인 성경 읽기 일정을 통해 성경 통독을 성공해보세요!",
      active: true,
    },
    {
      emoji: <EmojiPrayer width={52} height={56} />,
      title: "중보 기도",
      description:
        "사랑하는 공동체 멤버들의 기도 제목을 실시간으로 불러와 그들의 삶과 영혼을 위해 기도할 수 있어요!",
      active: true,
    },
    {
      emoji: <EmojiJournal width={52} height={56} />,
      title: "감사 일기",
      description:
        "오늘 하나님께서 나에게 허락한 하루 중 3가지 감사 제목을 찾아 기록하면 기도문으로 만들어드려요!",
      active: true,
    },
    {
      emoji: <EmojiBook width={52} height={56} />,
      title: "신앙 서적",
      description:
        "나의 믿음을 더욱 깊게 만들어줄 신앙 서적을 읽고 깨달은 내용을 공동체와 나눌 수 있어요!",
      active: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20]">
      {features.map((feature, index) => (
        <FeatureItem key={index} {...feature} />
      ))}
    </div>
  );
}

function FeatureItem({ emoji, title, description, active }: Feature) {
  return (
    <div
      className={`flex flex-col items-start gap-[24] px-[32] py-[32] rounded-[16] bg-background ${
        active ? "hover:cursor-pointer" : "hover:cursor-not-allowed"
      }`}
    >
      <div className="flex flex-col gap-[12]">
        {emoji}
        <div className="flex flex-col gap-[8]">
          <div className="font-gmarket text-[22px]">{title}</div>
          <div className="text-lg break-keep">{description}</div>
        </div>
      </div>
      {active ? (
        <div className="font-gmarket text-black/80">
          사용법 보기 &nbsp;{">"}
        </div>
      ) : (
        <div className="font-gmarket text-black/40">25년 12월 추가 예정 </div>
      )}
    </div>
  );
}
