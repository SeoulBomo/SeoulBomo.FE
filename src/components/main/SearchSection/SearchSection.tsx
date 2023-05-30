"use client";
import { useRouter } from "next/navigation";

export default function SearchSection() {
  const router = useRouter(); //useRouter 설정
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/main-search?keyword=${event.currentTarget.search.value}`); //해당 url로 이동
  };
  return (
    <div className="p-[2rem] lg:p-[3rem] my-[4rem] bg-white rounded-[1.375rem] drop-shadow-xl flex justify-center items-center">
      <div>
        <div className=" pb-[1.2rem]">
          <text className="font-semibold text-[0.8rem] md:text-base ">
            추천 검색어
          </text>
          <br />
          <text className="font-medium text-[0.8rem] md:text-base text-slate-500">
            <span
              onClick={() => {
                router.push(`/main-search?keyword=어린이집`);
              }}
              className="cursor-pointer"
            >
              어린이집
            </span>
            ㅣ
            <span
              onClick={() => {
                router.push(`/main-search?keyword=돌봄`);
              }}
              className="cursor-pointer"
            >
              돌봄
            </span>
          </text>
        </div>
        <div>
          <form onSubmit={submitForm}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="검색어를 입력해주세요."
              className="placeholder:text-gray-400 w-[12rem] sm:w-[20rem] lg:w-[40rem] py-[0.7rem] border-4 border-yellowColor rounded-[28px] focus:outline-none focus:border-yellowColor focus:ring-1 focus:ring-yellowColor pl-[1rem] text-sm md:text-xl"
            ></input>
            <button className="px-[1rem] py-[0.5rem] bg-yellowColor rounded-[0.9rem] ml-[0.5rem] text-xl lg:text-2xl font-bold hover:bg-amber-200">
              🔍
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
