import Container from "@/app/components/Container";
import Highfive from "@/app/icons/Highfive";
import GuideVideoItemMobile from "../components/GuideVideoItemMobile";
import GuideVideoItemDesktop from "../components/GuideVideoItemDesktop";

export default function IntroSection() {
  return (
    <div className="w-full bg-white">
      <Container className="flex flex-row items-end lg:py-[120] md:py-[96] py-[64] gap-[48]">
        <div className="flex flex-col flex-1 lg:gap-[48] gap-[20] px-[16] md:px-[64] lg:px-0">
          <TitleItem />
          <GuideVideoItemMobile />
          <StepItem />
        </div>
        <GuideVideoItemDesktop />
      </Container>
    </div>
  );
}

function TitleItem() {
  return (
    <div className="gap-[48]">
      <div className="flex flex-col gap-[12] md:gap-[24]">
        <Highfive className="w-[44] h-[44] md:w-[56] md:h-[56] lg:w-[64] lg:h-[64]" />
        <h2 className="font-gmarket font-medium text-[26px] md:text-[40px] lg:text-[44px] leading-[1.2]">
          1분이면 끝나는
          <br />
          <span className="font-bold relative underline underline-offset-0 decoration-[8px] decoration-orange500/50">
            공동체 연결하기
          </span>
        </h2>
      </div>
    </div>
  );
}

function StepItem() {
  const steps = [
    {
      title: "공동체 생성",
      description:
        "공동체 이름, 한 줄 설명만 입력하면 누구든지 비블레시아 앱 안에 공동체를 생성할 수 있어요.",
    },
    {
      title: "카톡으로 초대",
      description:
        "카카오톡을 이용해서 초대장을 보내 공동체 멤버들을 초대할 수 있어요. 개인톡이나 그룹톡에 우리 공동체 초대장을 보내보세요.",
    },
    {
      title: "초대장 사용",
      description:
        "공동체 멤버들은 앱을 설치한 후 카카오톡으로 받은 초대장에 있는 초대장 사용하기 버튼을 클릭하면 우리 공동체 연결 끝!",
    },
  ];

  return (
    <div className="lg:flex lg:flex-col md:grid md:grid-cols-2 flex flex-col gap-[8] md:gap-[16]">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col gap-[4] md:gap-[8] px-[20] py-[16] md:p-[24] bg-background rounded-[16]"
        >
          <div className="flex flex-row items-center gap-[8] md:gap-[12] lg:text-[22px] md:text-[20px] text-base font-gmarket">
            <div className="font-bold">{index + 1}</div>
            <div className="font-medium">{step.title}</div>
          </div>
          <p className="md:text-lg text-[14px] break-keep text-black/80">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}
