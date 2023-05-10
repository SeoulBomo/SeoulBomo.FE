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
    <div className="bg-cardColor rounded-[10px] shadow-lg w-[20.5rem] h-[30rem] flex justify-center items-center">
      <div className="w-[18rem] h-[26.8rem]  flex flex-col items-center">
        <text className="font-bold text-[28px] font-inter">모의 계산</text>
        <div className="w-[15.5rem] h-[19rem]  mt-2 mb-7 ml-8">
          {dummy.map((item) => (
            <div
              key={item.id}
              className="text-left font-medium text-2xl font-inter"
            >
              ✅ {item.name}
            </div>
          ))}
        </div>

        <button className="w-[14.75rem] h-[3.3rem] bg-white rounded-lg shadow-lg hover:bg-gray-100">
          <text className="text-xl font-semibold">GO</text>
        </button>
      </div>
    </div>
  );
}
