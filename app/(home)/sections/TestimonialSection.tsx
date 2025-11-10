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
      <Container className="flex flex-row items-end py-[120] gap-[48]">
        <div className="flex flex-col flex-1 gap-[48]">
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
      <div className="flex flex-col gap-[24]">
        <PenWriting size={64} />
        <h2 className="font-gmarket font-medium text-[44px] leading-[1.2]">
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
        "수많은 어플을 쓰면서 한번도 리뷰를 써본적 없는데.. 우연히 남자친구가 같이 해보자고 해서 처음 접했는데 너무 좋아요. 정말 심플하지만 디테일하고 특히 마지막에 기도문이 참 위로가 되고 부담없이",
    },
    {
      avatar: "/images/avatar_2.png",
      name: "최형욱",
      church: "컴앤씨교회",
      review:
        "When we began building this colony, I was skeptical about how we could make sure the right bugs would find us to join in. Namedly's integrated solution exceeded all my expectations.",
    },
    {
      avatar: "/images/avatar_3.png",
      name: "손은지",
      church: "서울홍성교회",
      review:
        "It’s a delicate time when butterflies emerge. They’re searching for their place among the leaves. And that’s where Namedly popped in to help.",
    },
    {
      avatar: "/images/avatar_5.png",
      name: "여성진",
      church: "강남교회",
      review:
        "I’ve been transformed completely. I wouldn’t use any other service.",
    },
    {
      avatar: "/images/avatar_6.png",
      name: "이승가",
      church: "주님의교회",
      review:
        "Namedly's tools for managing our identity through many stages of development—larval, pupal, and far beyond—were top notch. I’ve been through metamorphosis many times, and I was impressed.",
    },
    {
      avatar: "/images/avatar_4.png",
      name: "조희정",
      church: "온누리교회",
      review:
        "In the garden of life, some things are just very sweet. This is one of them. Namedly made it so easy to find the flowers we needed in our busy summer season.",
    },
  ];
  const chunks = [
    testimonials.slice(0, 2),
    testimonials.slice(2, 4),
    testimonials.slice(4, 6),
  ];

  return (
    <div className="grid grid-cols-3 gap-x-5">
      {chunks.map((col, ci) => (
        <div key={ci} className="flex flex-col gap-y-5">
          {col.map((testimonial, i) => (
            <TestimonialItem key={i} {...testimonial} />
          ))}
        </div>
      ))}
    </div>
  );
}

function TestimonialItem({ avatar, name, church, review }: Testimonial) {
  return (
    <div className="flex flex-col bg-white border border-black/10 rounded-[16] p-[32] gap-[16]">
      <div className="flex flex-row items-center gap-[12]">
        <Image src={avatar} alt="Avatar Image" width={48} height={48} />
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{name}</div>
          <div
            className="text-base font-medium text-black/55"
            style={{ lineHeight: 1.2 }}
          >
            {church}
          </div>
        </div>
      </div>
      <p className="text-lg break-keep">{review}</p>
    </div>
  );
}
