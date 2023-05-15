export default function MypageFrame() {
  return (
    <main className="py-[11rem] flex  px-[8rem] gap-[5rem] ">
      <section className="w-[16rem] h-[21rem]   flex flex-col justify-center items-center gap-4">
        <div className="w-[6rem] h-[6rem] border-2 border-red-500">이미지</div>
        <text className="font-bold text-3xl">000님</text>
        <text className="text-lg font-normal">카카오톡으로 로그인 중</text>
        <button className="w-[5.625rem] h-[2.25rem] border-slate-500 border-2 rounded-[0.625rem] hover:bg-gray-100">
          로그아웃
        </button>
      </section>
      <section>
        <text className="font-bold text-3xl ">나의 활동</text>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 w-[58.5rem] mt-[2rem]">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 border-b-2 border-transparent rounded-t-lg text-lg hover:text-gray-600 hover:border-gray-300 "
              >
                좋아요
              </a>
            </li>
            <li className="mr-2">
              <a
                href="#"
                className="inline-block p-4 text-yellow-500 border-b-2 border-yellow-500 text-lg rounded-t-lg active "
              >
                작성한 리뷰
              </a>
            </li>
          </ul>
        </div>
        <div className="w-[58.5rem] h-[3rem]  flex justify-between items-center text-gray-500 border-b">
          <text className="text-lg font-bold text-black hover:underline underline-offset-4 ">
            한 마음 어린이집
          </text>
          <text className="text-md font-medium text-slate-500">복지시설</text>
        </div>
      </section>
    </main>
  );
}
