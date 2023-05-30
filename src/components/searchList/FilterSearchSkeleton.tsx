export default function FilterSearchSkeleton() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col pt-[3rem]">
        <text className="ml-[1rem] text-[0rem] sm:text-xl font-medium">
          당신을 위한 필터링 서비스
        </text>
        <div className="flex justify-center items-center gap-3 bg-yellowColor px-[1em] sm:px-[2rem] h-[4rem] sm:h-[5rem] rounded-[1.3rem] mt-[0.5rem] ">
          <div>
            <select
              name="age"
              className="bg-gray-50 border focus:outline-none font-medium text-base rounded-lg px-[0.4rem] lg:px-[1rem] h-[2.6rem] "
            >
              <option value="ALL">연령무관</option>
              <option value="INFANT">영유아</option>
              <option value="KINDERGARTEN">어린이</option>
              <option value="ELEMENTARY">청소년</option>
            </select>
          </div>
          <div>
            <select
              name="info"
              className="bg-gray-50 border focus:outline-none font-medium text-base rounded-lg px-[0.6rem] lg:px-[1rem] h-[2.6rem] "
            >
              <option value="OUTDOOR_FACILITY">야외시설</option>
              <option value="LIBRARY">도서관</option>
              <option value="MEDICAL_FACILITY">의료시설</option>
              <option value="EXPERIENCE_FACILITY">체험시설</option>
              <option value="CULTURE_EVENT">문화행사</option>
            </select>
          </div>
          <button className="bg-white shadow-lg hover:bg-gray-100 w-[4rem] sm:w-[6.125rem] h-[2rem] sm:h-[2.5rem] rounded-[0.9rem] text-sm sm:text-base">
            검색 🔍
          </button>
        </div>
      </div>
      <div className="my-[4rem] flex flex-col gap-10">
        <main className="flex flex-col items-center justify-between">
          <div className="my-[1rem] flex flex-col gap-10">
            <section className="flex flex-col w-[20rem] sm:w-[40rem] md:w-[50rem] lg:w-[60rem] border-2 border-gray-200 bg-white rounded-[1rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] hover:drop-shadow-[0_2rem_2rem_rgba(0,0,0,0.07)] p-[3rem] ">
              <div className="rounded=[0.625rem] sm:w-[11.6rem] h-[3rem] sm:h-[5rem] bg-amber-200 flex justify-center items-center font-bold text-2xl mb-[1rem] rounded-[0.625rem]"></div>
              <>
                <ul
                  role="status"
                  className="divide-y divide-gray-100 animate-pulse"
                >
                  <li className="flex flex-col justify-between gap-x-4 py-[2rem]">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <div className="h-[0.8rem] w-[8rem] rounded-full bg-gray-300 mb-[0.8rem]"></div>
                      </div>
                      <div className="h-[0.5rem] w-[12rem] md:w-[20rem] bg-gray-200 rounded-full"></div>
                    </div>
                  </li>
                  <li className="flex flex-col justify-between gap-x-4 py-[2rem]">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <div className="h-[0.8rem] w-[8rem] rounded-full bg-gray-300 mb-[0.8rem]"></div>
                      </div>
                      <div className="h-[0.5rem] w-[12rem] md:w-[20rem] bg-gray-200 rounded-full"></div>
                    </div>
                  </li>
                  <li className="flex flex-col justify-between gap-x-4 py-[2rem]">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <div className="h-[0.8rem] w-[8rem] rounded-full bg-gray-300 mb-[0.8rem]"></div>
                      </div>
                      <div className="h-[0.5rem] w-[12rem] md:w-[20rem] bg-gray-200 rounded-full"></div>
                    </div>
                  </li>
                  <li className="flex flex-col justify-between gap-x-4 py-[2rem]">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <div className="h-[0.8rem] w-[8rem] rounded-full bg-gray-300 mb-[0.8rem]"></div>
                      </div>
                      <div className="h-[0.5rem] w-[12rem] md:w-[20rem] bg-gray-200 rounded-full"></div>
                    </div>
                  </li>
                  <li className="flex flex-col justify-between gap-x-4 py-[2rem]">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <div className="h-[0.8rem] w-[8rem] rounded-full bg-gray-300 mb-[0.8rem]"></div>
                      </div>
                      <div className="h-[0.5rem] w-[12rem] md:w-[20rem] bg-gray-200 rounded-full"></div>
                    </div>
                  </li>
                  <li className="flex flex-col justify-between gap-x-4 py-[2rem]">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <div className="h-[0.8rem] w-[8rem] rounded-full bg-gray-300 mb-[0.8rem]"></div>
                      </div>
                      <div className="h-[0.5rem] w-[12rem] md:w-[20rem] bg-gray-200 rounded-full"></div>
                    </div>
                  </li>
                  <li className="flex flex-col justify-between gap-x-4 py-[2rem]">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <div className="h-[0.8rem] w-[8rem] rounded-full bg-gray-300 mb-[0.8rem]"></div>
                      </div>
                      <div className="h-[0.5rem] w-[12rem] md:w-[20rem] bg-gray-200 rounded-full"></div>
                    </div>
                  </li>
                  <li className="flex flex-col justify-between gap-x-4 py-[2rem]">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <div className="h-[0.8rem] w-[8rem] rounded-full bg-gray-300 mb-[0.8rem]"></div>
                      </div>
                      <div className="h-[0.5rem] w-[12rem] md:w-[20rem] bg-gray-200 rounded-full"></div>
                    </div>
                  </li>
                  <li className="flex flex-col justify-between gap-x-4 py-[2rem]">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <div className="h-[0.8rem] w-[8rem] rounded-full bg-gray-300 mb-[0.8rem]"></div>
                      </div>
                      <div className="h-[0.5rem] w-[12rem] md:w-[20rem] bg-gray-200 rounded-full"></div>
                    </div>
                  </li>
                  <li className="flex flex-col justify-between gap-x-4 py-[2rem]">
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <div className="h-[0.8rem] w-[8rem] rounded-full bg-gray-300 mb-[0.8rem]"></div>
                      </div>
                      <div className="h-[0.5rem] w-[12rem] md:w-[20rem] bg-gray-200 rounded-full"></div>
                    </div>
                  </li>
                </ul>
              </>
            </section>
          </div>
        </main>
      </div>
    </main>
  );
}
