import SearchCard from "../SearchCard";

export default function FilterSearchFrame() {
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
        <text className="text-xl font-medium">당신을 위한 필터링 서비스</text>
        <section className="bg-yellowColor w-[46.8rem] h-[5rem] rounded-[1.3rem] mt-[0.5rem] flex items-center justify-center gap-5">
          <div>
            <select
              name="연령"
              className="bg-gray-50 border focus:outline-none font-medium text-base rounded-lg w-[8rem] h-[2.6rem] "
            >
              <option disabled selected>
                연령
              </option>
              <option value="all">연령무관</option>
              <option value="infant">영유아</option>
              <option value="child">어린이</option>
              <option value="teen">청소년</option>
            </select>
          </div>
          <div>
            <select
              name="카테고리"
              className="bg-gray-50 border focus:outline-none font-medium text-base rounded-lg w-[8rem] h-[2.6rem] "
            >
              <option disabled selected>
                카테고리
              </option>
              <option value="all">야외시설</option>
              <option value="infant">체험시설</option>
              <option value="child">도서관</option>
              <option value="teen">의료시설</option>
              <option value="child">관공서</option>
              <option value="teen">문화행사</option>
            </select>
          </div>
          <button className="w-[8rem] h-[2.6rem]  bg-white rounded-lg shadow-md hover:bg-gray-100">
            <text className="font-inter text-base font-semibold">GO</text>
          </button>
        </section>
      </div>
      <SearchCard category="야외 시설" data={dummy} />
    </main>
  );
}
