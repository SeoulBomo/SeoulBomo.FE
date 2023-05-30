export default function MapSearchSkeleton({
  borough,
}: {
  borough: string | null;
}) {
  return (
    <main className="w-screen flex flex-col items-center justify-between">
      <div className="mt-[3rem]">
        <div className="text-xl md:text-2xl lg:text-3xl font-bold">
          {borough} 보육 시설 알아보기
        </div>
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
