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
    <div className="bg-yellowColor rounded-[10px] shadow-lg w-[20.5rem] h-[30rem] flex justify-center items-center">
      <div className="w-[18rem] h-[26.8rem]   flex flex-col items-center justify-between">
        <text className="font-bold text-[28px]">인기 복지</text>
        <div className="border-blue-500 w-[16.9rem] h-[22rem] bg-white rounded-[10px] flex flex-col justify-center">
          {dummy.map((item) => (
            <p
              key={item.id}
              className=" text-left font-semibold text-xl leading-loose pl-6 h-[3rem] w-[16.5rem] truncate"
            >
              <text className="hover:underline underline-offset-4 ">
                {item.id}.
              </text>
              <text className="pl-2 hover:underline underline-offset-4 ">
                {item.name}
              </text>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
