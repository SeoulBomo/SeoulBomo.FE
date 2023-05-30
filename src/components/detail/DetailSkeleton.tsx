import KakaoMap from "./KakaoMap";

export default function DetailSkeleton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col w-screen justify-start items-center">
      {/* Wrapper */}
      <section className="flex flex-col justify-center gap-[1rem] p-[1rem]">
        {/* 제목 및 스크랩 */}
        <div className="flex flex-row">
          <div className="flex flex-1 justify-center items-center gap-[1rem] rounded=[0.625rem] px-[28rem] py-[1rem] bg-amber-200 shadow-md font-bold text-base md:text-xl lg:text-2xl mb-[1rem] rounded-[0.625rem]"></div>
          <div className="flex justify-center items-center gap-[1rem] rounded=[0.625rem] px-[1rem] py-[1rem] font-bold text-base md:text-xl lg:text-2xl mb-[1rem] rounded-[0.625rem]">
            <label className="cursor-pointer">
              <button type="submit" className="peer hidden" />
              <div className="group p-[0.7rem] gap-[0.4rem] bg-white-300 text-gray-600 flex justify-start items-center font-bold text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  <path
                    className="group-hover:fill-[#f59e0b] ease-in-out duration-300 "
                    stroke="#f59e0b"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    fill="none"
                    d="m37 43l-13-6l-13 6V9c0-2.2 1.8-4 4-4h18c2.2 0 4 1.8 4 4v34z"
                  />
                </svg>
                <div className="text-gray-600 font-bold text-lg lg:block">
                  <div className="font-bold text-gray-900 text-sm">
                    <svg
                      aria-hidden="true"
                      className="inline w-4 h-4 mr-2 text-gray-500 animate-spin fill-yellow-200"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>
        {/* 카카오맵 */}
        <KakaoMap lat={33.5563} lng={126.795841} />
      </section>
      {/* 개요 및 리뷰 */}
      <div className="flex flex-col w-[20rem] sm:w-[30rem] md:w-[50rem] lg:w-[65rem] bg-white shadow-md drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] justify-start gap-[1rem]">
        {children}
      </div>
    </main>
  );
}
