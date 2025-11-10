import Image from "next/image";
import Container from "@/app/components/Container";
import PenWriting from "@/app/icons/PenWriting";

type Testimonial = {
  avatar: string;
  name: string;
  church: string;
  review: string;
};

export default function TestimonialSection() {
  return (
    <div className="w-full">
      <Container className="flex flex-row items-end lg:py-[120] py-[64] gap-[48]">
        <div className="flex flex-col flex-1 lg:gap-[48] gap-[32] px-[16] md:px-[64] lg:px-0">
          <TitleItem />
          <TestimonialList />
        </div>
      </Container>
    </div>
  );
}

function TitleItem() {
  return (
    <div className="gap-[48]">
      <div className="flex flex-col gap-[12] md:gap-[24]">
        <PenWriting className="w-[44] h-[44] md:w-[56] md:h-[56] lg:w-[64] lg:h-[64]" />
        <h2 className="font-gmarket font-medium text-[26px] md:text-[40px] lg:text-[44px] leading-[1.2]">
          비블레시아를 경험한
          <br />
          <span className="font-bold relative underline underline-offset-0 decoration-[8px] decoration-orange500/50">
            생생한 후기
          </span>
        </h2>
      </div>
    </div>
  );
}

function TestimonialList() {
  const testimonials: Testimonial[] = [
    {
      avatar: "/images/avatar_1.png",
      name: "윤수현",
      church: "엘사랑교회",
      review:
        "주일날 교회에서 예배드리기만 했던 선데이 크리스천인데, 사랑의 공동체를 만나서 매일 말씀을 통한 은혜와 감사를 나누고 있어요. 조금씩 큐티도 해보고 기도도 해보며 하나님을 깊이 알아가고 있어요. 혼자서 큐티를 매일 하는 건 쉬운 일이 아닌데, 사랑의 공동체와 함께 하니까 가능하더라고요. 예전에는 일주일에 한번 예배를 통해 하나님을 만났다면, 이제는 매일 공동체와 함께 하나님을 만납니다. 영적으로 함께하는 공동체가 있음에 감사합니다~",
    },
    {
      avatar: "/images/avatar_3.png",
      name: "7D맹고",
      church: "앱 스토어 리뷰",
      review:
        "수많은 어플을 쓰면서 한번도 리뷰를 써본적 없는데.. 우연히 남자친구가 같이 해보자고 해서 처음 접했는데 너무좋아요 정말 심플하지만 디테일하고 특히 마지막에 기도문이 참 위로가 되고 부담없이 핸드폰을 들고도 묵상하며 기도하고 감사할 수 있다는것이 정말 놀랍고 너무 좋습니다...!\n\n감사 일기도 세개를 쓰고나면 계속 하나씩 더 쓸 수 있게 되어있는것도 부담없이 생각나는대로 적을 수 있어서 좋았어요. 제가 다시 말씀과 기도의 자리에 설 수 있도록 이끌어주셔서 감사합니다.",
    },
    {
      avatar: "/images/avatar_2.png",
      name: "최형욱",
      church: "컴앤씨교회",
      review:
        "스무살에 처음 큐티 배우고 30년 간 전문적인 세미나와 훈련만 열번 넘게 참여했지만 왜 매일 할 수 없는 이유만 자꾸 늘어 가는지… 성경 읽기도, 기도 시간도,감사 일기도 마찬가지이지만 작심삼일… 결국 안되는 건가 포기하고 있을 때 찾아 온 하늘의 비밀 병기 비블레시아가 휴대폰에 장착되었다.\n\n할렐루야! 이제 늦게 일어나도, 출장이나 여행으로 성경책이나 큐티 노트, 해설서가 없어도 그냥 다 되네! 소그룹이나 공동체 설정하면 한번만 기록해도 원하는 곳에 나눌 수 있고, 서로 격려와 중보기도로 함께 자라갈 수 있는 비블레시아로 지금 몇 달 째 하루도 빠짐없이 말씀과 함께 살게 되었다. ",
    },
    {
      avatar: "/images/avatar_7.png",
      name: "곽은주",
      church: "컴앤씨교회",
      review:
        "I’ve been transformed completely. I wouldn’t use any other service.",
    },
    {
      avatar: "/images/avatar_4.png",
      name: "하늘해 그리고",
      church: "앱스토어 리뷰",
      review:
        "그저 스쳐 지날 수 있는 묵상들과 내 삶의 이야기들을 정리하는 시간을 갖고 공동체에서 서로 나누며 서로를 이해하고 함께 중보할 수 있음에 너무 감사하고 귀한 어플입니다 👏👏👏",
    },
    {
      avatar: "/images/avatar_6.png",
      name: "라니89",
      church: "앱스토어 리뷰",
      review:
        "큐티책에서 작성하게 되면 월이 끝나면 책을 보관하는데 어려움이 있어 버리게 될 때가 많은데 나의 큐티묵상을 기록하여 남길 수 있고 필요할때 언제든 찾아볼 수 있어 개인 신앙생활에 도움이 많이 된다!\n\n그리고 공동체로 묶여있는 사람들의 나눔을 보면서 내가 생각지 못한 깨달음을 얻게되고, 댓글과 이모티콘 등으로 나눔을 함께 응원할 수 있어 좋다!",
    },
    {
      avatar: "/images/avatar_5.png",
      name: "물바우",
      church: "앱스토어 리뷰",
      review:
        "출근길 지하철에서도, 잠시 쉬는 시간에도 마음만 먹으면 쉽게 큐티를 할수 있습니다. 내가 속한 공동체, 가족, 친구와 삶을 나눌수 있습니다. 큐티가 익숙하지 않아도 쉽게 할수 있는 점이 너무 좋습니다.",
    },
  ];

  // 👉 브레이크포인트별 “보여줄 인덱스”와 “표시 순서”를 원하는 대로 조정
  // (길이 긴 것과 짧은 것을 섞어서 배치하면 한쪽 컬럼만 지나치게 길어지는 현상을 줄일 수 있어요)
  const MOBILE_ORDER = [0, 2, 4, 6]; // 모바일: 4개만
  const TABLET_ORDER = [0, 1, 5, 2, 3, 6, 4]; // 태블릿: 6개 (길이 섞어서 재배치)
  const DESKTOP_ORDER = [0, 1, 2, 3, 4, 5, 6]; // 데스크탑: 전부(원하면 원래 순서 유지도 OK)

  // 헬퍼: 주어진 인덱스 배열을 매핑해서 카드 렌더 (CSS Columns + break-inside)
  const renderColumnFlow = (order: number[], className: string) => (
    <div className={className}>
      {order.map((idx) => (
        <div
          key={idx}
          className="
            mb-[16] md:mb-5
            break-inside-avoid [break-inside:avoid-column]
          "
        >
          <TestimonialItem {...testimonials[idx]} />
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* 모바일 전용: 1 컬럼 */}
      {renderColumnFlow(MOBILE_ORDER, "columns-1 gap-5 md:hidden")}

      {/* 태블릿 전용: 2 컬럼 */}
      {renderColumnFlow(
        TABLET_ORDER,
        "hidden md:block lg:hidden columns-2 gap-5"
      )}

      {/* 데스크탑 전용: 3 컬럼 */}
      {renderColumnFlow(DESKTOP_ORDER, "hidden lg:block columns-3 gap-5")}
    </>
  );
}

function TestimonialItem({ avatar, name, church, review }: Testimonial) {
  return (
    <div className="flex flex-col bg-white border border-black/10 rounded-[16] p-[32] gap-[16]">
      <div className="flex flex-row items-center gap-[8] md:gap-[12]">
        <Image src={avatar} alt="Avatar Image" width={48} height={48} className="w-[40] h-[40] md:w-[48] md:h-[48]" />
        <div className="flex flex-col">
          <div className="md:text-lg text-base font-semibold">{name}</div>
          <div
            className="md:text-base text-sm font-medium text-black/55"
            style={{ lineHeight: 1.2 }}
          >
            {church}
          </div>
        </div>
      </div>
      <p className="md:text-lg text-base break-keep whitespace-pre-line">{review}</p>
    </div>
  );
}
