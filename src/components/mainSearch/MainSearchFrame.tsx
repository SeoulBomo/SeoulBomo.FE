import SearchCard from "../commonSearch/SearchCard";

export default function MainSearchFrame() {
  const dummy = [
    {
      id: 1,
      title: "모성보호육아지원",
      date: "2022.12.31",
      content:
        "출산전후 휴가급여, 육아휴직급여 등의 지급을 통해 일과 과정의 양립 지원하고 모성보호를 도모합니다 출산전후 휴가급여, 육아휴직급여 등의 지급을 통해 일과 과정의 양립을 지원하고 모성보호를 도모합니다",
    },
    {
      id: 2,
      title: "육아에 대해",
      date: "2022.12.31",
      content:
        "출산전후 휴가급여, 육아휴직급여 등의 지급을 통해 일과 과정의 양립 지원하고 모성보호를 도모합니다 출산전후 휴가급여, 육아휴직급여 등의 지급을 통해 일과 과정의 양립을 지원하고 모성보호를 도모합니다",
    },
    {
      id: 3,
      title: "돌봄",
      date: "2022.12.31",
      content:
        "출산전후 휴가급여, 육아휴직급여 등의 지급을 통해 일과 과정의 양립 지원하고 모성보호를 도모합니다 출산전후 휴가급여, 육아휴직급여 등의 지급을 통해 일과 과정의 양립을 지원하고 모성보호를 도모합니다",
    },
  ];
  //dummy 데이터
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col pt-[3rem]">
        <text className="ml-[1rem] text-[0rem] sm:text-xl font-medium">
          검색을 통해 각종 정보를 만나볼 수 있습니다
        </text>
        <section className="bg-yellowColor px-[1rem] sm:px-[2rem] h-[4rem] sm:h-[5rem] rounded-[1.3rem] mt-[0.5rem] flex justify-center items-center gap-3">
          <input
            type="text"
            name="search"
            id="search"
            className="placeholder:text-gray-400 pl-[1rem] w-[12rem] h-[2rem] sm:w-[20rem] sm:h-[2.5rem] md:w-[28rem] lg:w-[33rem]border-4 border-white rounded-[28px] focus:outline-yellow-300  p-[1rem] text-xl"
          ></input>
          <button className="w-[4rem] sm:w-[6.125rem] h-[2rem] sm:h-[2.5rem] bg-white rounded-[0.9rem] text-xs sm:text-sm font-bold hover:bg-gray-100">
            Search
          </button>
        </section>
      </div>
      <div className="my-[4rem] flex flex-col gap-10">
        <SearchCard category="복지서비스" data={dummy} />
        <SearchCard category="복지시설" data={dummy} />
        <SearchCard category="정책" data={dummy} />
      </div>
    </main>
  );
}
