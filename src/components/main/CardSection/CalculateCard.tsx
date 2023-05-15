import Link from "next/link";

const dummy = [
  {
    id: 1,
    name: "기초연금",
  },
  {
    id: 2,
    name: "초,중,고 교육비 지원",
  },
  {
    id: 3,
    name: "장애(아동)수당",
  },
  {
    id: 4,
    name: "국민기초 생활보장",
  },
  {
    id: 5,
    name: "장애인연금",
  },
  {
    id: 6,
    name: "한부모 가족 지원",
  },
  {
    id: 7,
    name: "산모신생아 건강관리",
  },
  {
    id: 8,
    name: "돌봄 서비스",
  },
  {
    id: 9,
    name: "청년월세지원",
  },
  {
    id: 10,
    name: "자산형성지원",
  },
];
export default function CalculateCard() {
  return (
    <div className="bg-cardColor rounded-[1rem] flex flex-col items-center shadow-lg p-[1rem] w-[18rem] h-[28rem] lg:w-[20.5rem] lg:h-[30rem]">
      <text className="font-bold text-[1.5rem] lg:text-[1.75rem]">
        모의 계산
      </text>
      <div className="flex flex-col justify-evenly w-[14rem] h-[28rem] lg:w-[16rem] lg:h-[28rem] p-[0.5rem]">
        {dummy?.map((item) => (
          <text
            key={item.id}
            className="font-medium text-lg lg:text-2xl truncate"
          >
            ✅ {item.name}
          </text>
        ))}
      </div>
      <Link
        href="https://www.bokjiro.go.kr/ssis-tbu/twatbz/mkclAsis/mkclPage.do"
        target="_blank"
      >
        <button className="px-[5rem] py-[0.3rem] lg:px-[6rem] lg:py-[0.5rem] bg-white rounded-md shadow-lg hover:bg-gray-100">
          <text className="text-xl font-semibold">GO {`->`}</text>
        </button>
      </Link>
    </div>
  );
}
