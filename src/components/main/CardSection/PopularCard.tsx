export default function PopularCard() {
  const dummy = [
    {
      id: 1,
      name: "오늘 어린이 집에서 ~",
    },
    {
      id: 2,
      name: "오늘 어린이 집에서 ~",
    },
    {
      id: 3,
      name: "오늘 어린이 집에서 ~",
    },
    {
      id: 4,
      name: "오늘 어린이 집에서 ~",
    },
    {
      id: 5,
      name: "오늘 어린이 집에서 ~",
    },
    {
      id: 6,
      name: "오늘 어린이 집에서 ~",
    },
    {
      id: 7,
      name: "오늘 어린이 집에서 가나다라마바사 아자차카",
    },
  ];
  return (
    <div className="bg-yellowColor rounded-[1rem] flex flex-col items-center shadow-lg p-[1rem] w-[18rem] lg:w-[20.5rem] lg:h-[30rem]">
      <text className="font-bold text-[1.5rem] lg:text-[1.75rem] mb-[1rem]">
        인기 복지
      </text>
      <div className="flex flex-col justify-evenly w-[14rem] h-[28rem] lg:w-[18rem] lg:h-[26rem] p-[0.5rem] rounded-[1rem] bg-white">
        {dummy?.map((item) => (
          <text
            key={item.id}
            className="font-medium text-lg lg:text-2xl truncate hover:underline underline-offset-4 cursor-pointer"
          >
            {item.name}
          </text>
        ))}
      </div>
    </div>
  );
}
