import Link from "next/link";

export default function SearchFrame() {
  return (
    <div className="p-[3rem] bg-white rounded-[1.375rem] drop-shadow-xl flex justify-center items-center">
      <div>
        <div className=" pb-[2rem]">
          <text className="font-semibold text-[0.8rem] md:text-base">
            추천 검색어
          </text>
          <br />

          <text className="font-medium text-[0.8rem] md:text-base text-slate-500">
            <Link href="#">어린이집</Link> ㅣ <Link href="#">돌봄 서비스</Link>
            ㅣ <Link href="#">정책</Link>
          </text>
        </div>
        <div className=" ">
          <input
            type="text"
            name="search"
            id="search"
            className="placeholder:text-gray-400 w-[10rem] sm:w-[20rem] lg:w-[40rem] py-[0.7rem] border-4 border-yellowColor rounded-[28px] focus:outline-none focus:border-yellowColor focus:ring-1 focus:ring-yellowColor pl-[1rem] text-sm md:text-xl"
          ></input>
          <button className="px-[1rem] py-[0.5rem] bg-yellowColor rounded-[0.9rem] ml-[0.5rem] text-sm font-bold hover:bg-amber-200">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
