import SearchCard from "../SearchCard";

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
    <main className="w-screen flex flex-col items-center justify-between">
      <div className="mt-[3rem]">
        <text className="text-xl font-medium">
          검색을 통해 각종 정보를 만나볼 수 있습니다
        </text>
        <section className="bg-yellowColor w-[46.8rem] h-[5rem] rounded-[1.3rem] mt-[0.5rem] flex items-center justify-evenly">
          <input
            type="text"
            name="search"
            id="search"
            className="placeholder:text-gray-400  w-[33.75rem] h-[2.5rem] border-4 border-white rounded-[28px]   focus:outline-none  pl-[1rem] text-xl"
          ></input>
          <button className="w-[6.125rem] h-[2.5rem] bg-white rounded-[0.9rem] ml-[0.3rem] text-sm font-bold hover:bg-gray-100">
            Search
          </button>
        </section>
      </div>
      <SearchCard category="복지서비스" data={dummy} />
      <SearchCard category="복지시설" data={dummy} />
      <SearchCard category="정책" data={dummy} />
    </main>
  );
}
