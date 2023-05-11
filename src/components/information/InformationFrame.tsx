import InformationCard from "./InformationCard";

export default function InformationFrame() {
  const policy = [
    {
      id: 1,
      name: "보육 정책 연혁",
    },
    {
      id: 2,
      name: "국공립 어린이집 활동",
    },
    {
      id: 3,
      name: "육아 종합 지원 센터",
    },
    {
      id: 4,
      name: "보육 지원 체계 개편",
    },
    {
      id: 5,
      name: "보육 정책 현황",
    },
    {
      id: 6,
      name: "아이 행복 카드",
    },
    {
      id: 7,
      name: "보육인력의 전문성 제고",
    },
  ];

  const business = [
    {
      id: 1,
      name: "영유아 보육료",
    },
    {
      id: 2,
      name: "시간제 보육",
    },
    {
      id: 3,
      name: "가정 양육 수당",
    },
  ];

  const baseCare = [
    {
      id: 1,
      name: "3-5세 누리 과정",
    },
    {
      id: 2,
      name: "그 밖의 연장형 보육",
    },
    {
      id: 3,
      name: "어린이 집입소 대기",
    },
    {
      id: 4,
      name: "어린이집 평가제",
    },
  ];

  return (
    <main className="w-screen bg-cardFrameColor flex flex-col items-center justify-between">
      <text className="font-bold text-4xl mt-[5rem] mb-[5rem]">
        Information
      </text>

      <InformationCard data={policy} text={"보육 정책"} />
      <InformationCard data={business} text={"보육 사업 기획"} />
      <InformationCard data={baseCare} text={"보육 기반"} />
    </main>
  );
}
