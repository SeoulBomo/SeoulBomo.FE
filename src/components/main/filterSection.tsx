import Image from "next/image";
import RadioBox from "./RadioBox";

export default function FilterSection() {
  const cardData = [
    {
      id: 1,
      path: "/images/infant.png",
      text: "영유아",
    },
    {
      id: 2,
      path: "/images/child.png",
      text: "어린이",
    },
    {
      id: 3,
      path: "/images/teen.png",
      text: "청소년",
    },
  ];
  return (
    <section className="w-[screen] mt-[2rem]  flex items-center justify-center">
      <div className="rounded-[0.625rem]">
        <div className="flex flex-col items-center justify-center">
          <text className="font-bold text-2xl ">
            당신을 위한 맞춤형 필터링 서비스
          </text>

          <text className="pt-[1rem] text-xl font-medium pb-[3rem]">
            우리 아이의 나이를 선택하고 필요한 정보를 받아보세요
          </text>
        </div>
        <div className="flex gap-[2rem]">
          <div className="bg-white w-[12rem] h-[15.5rem] ml-[4rem] drop-shadow-md rounded-[0.3rem] flex items-center justify-center flex-col hover:-translate-y-3 ease-in-out duration-300">
            <text className="font-semibold font-xl">연령무관</text>
          </div>
          {cardData.map((item) => (
            <div
              key={item.id}
              className="bg-white w-[12rem] h-[15.5rem] drop-shadow-md rounded-[0.3rem] flex items-center justify-center flex-col hover:-translate-y-3 ease-in-out duration-300"
            >
              <Image
                className="h-[6.5rem] w-[5.2rem]"
                src={item.path}
                width={200}
                height={200}
                alt="로고"
              />
              <text className="font-semibold font-lg mt-[2rem]">
                {item.text}
              </text>
            </div>
          ))}
          <RadioBox />
        </div>
      </div>
    </section>
  );
}
