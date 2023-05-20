"use client";
import KakaoMap from "./KakaoMap";

export default function DetailFrame() {
  return (
    <main className="">
      <section className=" flex flex-col items-center pt-[4rem]">
        <KakaoMap />
        <div className="mt-[2rem]  ">
          <div className="bg-yellowColor rounded-[0.7rem] w-[13rem] h-[4rem] lg:w-[21rem] lg:h-[6rem] flex items-center justify-center font-bold lg:text-2xl text-lg">
            한 마음 어린이집
          </div>
          <div className="w-[10rem] h-[6rem] bg-white">
            좋아요 버튼 여기다가..!?
          </div>
        </div>
      </section>
    </main>
  );
}
