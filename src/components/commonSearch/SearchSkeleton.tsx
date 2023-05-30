export default function SearchSkeleton({
  keyword,
}: {
  keyword: string | null;
}) {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col pt-[3rem]">
        <text className="ml-[1rem] text-[0rem] sm:text-xl font-medium">
          검색을 통해 각종 정보를 만나볼 수 있습니다
        </text>
        <section className="bg-yellowColor px-[1rem] sm:px-[2rem] h-[4rem] sm:h-[5rem] rounded-[1.3rem] mt-[0.5rem] flex justify-center items-center gap-[1rem]">
          <input
            type="text"
            name="search"
            id="search"
            defaultValue={keyword === null ? "" : keyword}
            className="placeholder:text-gray-400 pl-[1rem] w-[12rem] h-[2rem] sm:w-[20rem] sm:h-[2.5rem] md:w-[28rem] lg:w-[33rem]border-4 border-white rounded-[28px] focus:outline-yellow-300  p-[1rem] text-xl"
          ></input>
          <button className="bg-white shadow-lg hover:bg-gray-100 w-[4rem] sm:w-[6.125rem] h-[2rem] sm:h-[2.5rem] rounded-[0.9rem] text-sm sm:text-base">
            검색 🔍
          </button>
        </section>
      </div>
      <div className="my-[4rem] flex flex-col gap-10">
        <section className="flex flex-col w-[20rem] sm:w-[40rem] md:w-[50rem] lg:w-[60rem] border-2 border-gray-200 bg-white rounded-[1rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] hover:drop-shadow-[0_2rem_2rem_rgba(0,0,0,0.07)] p-[1rem] sm:p-[3rem]">
          <div className="rounded=[0.625rem] sm:w-[11.6rem] h-[3rem] sm:h-[5rem] bg-amber-200 flex justify-center items-center font-bold text-2xl mb-[1rem] rounded-[0.625rem]"></div>
          <ul role="status" className="divide-y divide-gray-100 animate-pulse">
            <li className="flex flex-col justify-between gap-x-4 py-[2rem]">
              <div className="flex flex-col">
                <div className="h-[0.8rem] w-[8rem] rounded-full bg-gray-300 mb-[0.8rem]"></div>
                <div className="h-[0.5rem] w-[12rem] md:w-[20rem] bg-gray-200 rounded-full"></div>
              </div>
            </li>
            <li className="flex flex-col justify-between gap-x-4 py-[2rem]">
              <div className="flex flex-col">
                <div className="h-[0.8rem] w-[8rem] rounded-full bg-gray-300 mb-[0.8rem]"></div>
                <div className="h-[0.5rem] w-[12rem] md:w-[20rem] bg-gray-200 rounded-full"></div>
              </div>
            </li>
            <li className="flex flex-col justify-between gap-x-4 py-[2rem]">
              <div className="flex flex-col">
                <div className="h-[0.8rem] w-[8rem] rounded-full bg-gray-300 mb-[0.8rem]"></div>
                <div className="h-[0.5rem] w-[12rem] md:w-[20rem] bg-gray-200 rounded-full"></div>
              </div>
            </li>
          </ul>
        </section>
        <section className="flex flex-col w-[20rem] sm:w-[40rem] md:w-[50rem] lg:w-[60rem] border-2 border-gray-200 bg-white rounded-[1rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] hover:drop-shadow-[0_2rem_2rem_rgba(0,0,0,0.07)] p-[1rem] sm:p-[3rem]">
          <div className="rounded=[0.625rem] sm:w-[11.6rem] h-[3rem] sm:h-[5rem] bg-amber-200 flex justify-center items-center font-bold text-2xl mb-[1rem] rounded-[0.625rem]"></div>
          <ul role="status" className="divide-y divide-gray-100 animate-pulse">
            <li className="flex flex-col justify-between gap-x-4 py-[2rem]">
              <div className="flex flex-col">
                <div className="h-[0.8rem] w-[8rem] rounded-full bg-gray-300 mb-[0.8rem]"></div>
                <div className="h-[0.5rem] w-[12rem] md:w-[20rem] bg-gray-200 rounded-full"></div>
              </div>
            </li>
            <li className="flex flex-col justify-between gap-x-4 py-[2rem]">
              <div className="flex flex-col">
                <div className="h-[0.8rem] w-[8rem] rounded-full bg-gray-300 mb-[0.8rem]"></div>
                <div className="h-[0.5rem] w-[12rem] md:w-[20rem] bg-gray-200 rounded-full"></div>
              </div>
            </li>
            <li className="flex flex-col justify-between gap-x-4 py-[2rem]">
              <div className="flex flex-col">
                <div className="h-[0.8rem] w-[8rem] rounded-full bg-gray-300 mb-[0.8rem]"></div>
                <div className="h-[0.5rem] w-[12rem] md:w-[20rem] bg-gray-200 rounded-full"></div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
