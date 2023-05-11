import SearchCard from "../SearchCard";

export default function MapSearchFrame() {
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
        <text className="text-3xl font-bold">관악구 복지 시설 알아보기</text>
      </div>
      <SearchCard category="야외시설" data={dummy} />
      <SearchCard category="체험시설" data={dummy} />
      <SearchCard category="관공서" data={dummy} />
      <SearchCard category="문화행사" data={dummy} />
      <SearchCard category="도서관" data={dummy} />
      <SearchCard category="의료시설" data={dummy} />
    </main>
  );
}
