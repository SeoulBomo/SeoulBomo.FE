export default function SearchFrame() {
  return (
    <section className="flex items-center justify-center">
      <div className="w-[54.375rem]  h-[17.5rem] bg-white rounded-[1.375rem] drop-shadow-xl flex justify-center items-center  ">
        <div>
          <div className=" pb-[2rem]">
            <text className="font-semibold text-base ">추천 검색어</text>
            <br />

            <text className="font-medium text-base text-slate-500">
              어린이집 ㅣ 돌봄 서비스 ㅣ 정책
            </text>
          </div>
          <div className=" ">
            <input
              type="text"
              name="search"
              id="search"
              className="placeholder:text-gray-400  w-[40rem] h-[3.5rem] border-4 border-yellowColor rounded-[28px]   focus:outline-none focus:border-yellowColor focus:ring-1 focus:ring-yellowColor pl-[1rem] text-xl"
            ></input>
            <button className="w-[6.125rem] h-[2.3rem] bg-yellowColor rounded-[0.9rem] ml-[0.3rem] text-sm font-bold hover:bg-amber-200">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
