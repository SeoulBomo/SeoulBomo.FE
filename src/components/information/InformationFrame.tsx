import InformationCard from "./InformationCard";

export default function InformationFrame() {
  const policy = [
    {
      id: 1,
      name: "보육정책 연혁",
      path: "/information/history",
    },
    {
      id: 2,
      name: "국공립어린이집 확충",
      path: "/information/expansion",
    },
    {
      id: 3,
      name: "육아종합지원센터",
      path: "/information/center",
    },
    {
      id: 4,
      name: "보육지원체계개편",
      path: "/information/reform",
    },
    {
      id: 5,
      name: "보육정책 현황",
      path: "/information/status",
    },
    {
      id: 6,
      name: "아이행복카드",
      path: "/information/credit",
    },
    {
      id: 7,
      name: "보육인력의 전문성 제고",
      path: "/information/professional",
    },
  ];

  const business = [
    {
      id: 1,
      name: "영유아보육료",
      path: "/information/pay",
    },
    {
      id: 2,
      name: "시간제보육",
      path: "/information/care",
    },
    {
      id: 3,
      name: "가정양육수당",
      path: "/information/benefit",
    },
    {
      id: 4,
      name: "영아수당",
      path: "/information/infant-benefit",
    },
  ];

  const baseCare = [
    {
      id: 1,
      name: "3-5세 누리 과정",
      path: "/information/process",
    },
    {
      id: 2,
      name: "그 밖의 연장형 보육",
      path: "/information/extension-care",
    },
    {
      id: 3,
      name: "어린이집입소대기",
      path: "/information/waiting-admission",
    },
    {
      id: 4,
      name: "어린이집 평가제",
      path: "/information/evaluation",
    },
  ];

  return (
    <main className="w-screen bg-cardFrameColor flex flex-col items-center justify-between">
      <text className="font-bold text-xl md:text-2xl lg:text-3xl mt-[5rem] mb-[5rem]">
        보육정책
      </text>

      <InformationCard data={policy} text={"보육 정책"} />
      <InformationCard data={business} text={"보육 사업 기획"} />
      <InformationCard data={baseCare} text={"보육 기반"} />
    </main>
  );
}
