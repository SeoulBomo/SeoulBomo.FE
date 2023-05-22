"use client";
import Image from "next/image";
import KakaoMap from "./KakaoMap";
import ContentCard from "./ContentCard";

const dummy = {
  id: 21,
  name: "행복어린이집",
  centerType: "PRE_SCHOOL",
  borough: "JUNGNANG",
  address: "서울특별시 중랑구 양원역로 92 (망우동)",
  preschoolType: "PUBLIC",
  contactNumber: "02-2208-1891",
  homepage: "",
  classNum: 5,
  playgroundNum: 1,
  cctvNum: 11,
  teacherNum: 18,
  latitude: 37.60916279874149,
  longitude: 127.10675103372358,
  isSchoolBus: false,
  isFree: false,
  fee: "0",
  isSatOpen: false,
  serviceType: "COMMON",
};

export default function DetailFrame() {
  return (
    <main className="flex flex-col w-screen justify-start items-center">
      {/* Wrapper */}
      <section className="flex flex-col-reverse lg:flex-row lg:items-start justify-center gap-[1rem] p-[1rem]">
        <KakaoMap lat={dummy.latitude} lng={dummy.longitude} />
        <div className="flex lg:flex-col justify-center items-center gap-[1rem] lg:pt-[3rem]">
          <div className="rounded=[0.625rem] lg:px-[4rem] px-[2rem] h-[5rem] bg-amber-200 shadow-md flex items-center font-bold text-2xl mb-[1rem] rounded-[0.625rem] whitespace-nowrap">
            한 마음 어린이집
          </div>
          <div className="flex flex-col lg:flex-row gap-[0.7rem] items-center">
            <div className="p-[1rem] gap-[0.1rem] sm:gap-[1rem] rounded=[0.625rem] h-[3rem] lg:h-[4rem]   justify-start items-center font-bold text-[0.1rem] md:text-xl rounded-[0.625rem] sm:whitespace-nowrap lg:flex hidden">
              <Image
                src={"/images/telephone.png"}
                width={30}
                height={30}
                alt=""
              />
              <text>02-2208-1891</text>
            </div>
            <div className="flex">
              <label className="cursor-pointer">
                <input type="checkbox" className="peer hidden" />
                <div className="p-[0.7rem] gap-[0.4rem] bg-amber-200/30 rounded=[0.625rem] bg-white-300 text-gray-600 flex justify-start items-center font-bold text-xl rounded-md shadow-lg hover:bg-amber-200 ease-in-out duration-300 peer-checked:bg-yellow-200 peer-checked:text-black peer-checked:ring-yellow-400 peer-checked:ring-offset-2 ring-2 ring-transparent">
                  <text className="lg:text-gray-600 lg:font-medium lg:text-base lg:block hidden">
                    22
                  </text>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#f59e0b"
                      d="m37 43l-13-6l-13 6V9c0-2.2 1.8-4 4-4h18c2.2 0 4 1.8 4 4v34z"
                    />
                  </svg>
                </div>
              </label>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white shadow-md lg:w-[60rem] py-[3rem] px-[1rem] sm:px-[3rem] lg:px-[6rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] flex flex-col justify-start gap-[1rem]">
        <div className="flex gap-[1rem]">
          <ContentCard
            type="kindergarten"
            content={dummy.preschoolType === "PUBLIC" ? "국공립" : "사립"}
          />
          <ContentCard type="isFree" content={dummy.isFree ? "무료" : "유료"} />
          <ContentCard type="cctv" content={"CCTV " + dummy.cctvNum + "개"} />
          <ContentCard
            type="playground"
            content={"놀이터 " + dummy.playgroundNum + "개"}
          />
          <ContentCard
            type="bus"
            content={dummy.isSchoolBus ? "통학 차량 있음" : "통학 차량 없음"}
          />
          <ContentCard
            type="calender"
            content={dummy.isSatOpen ? "토요일 운영" : "토요일 미운영"}
          />
        </div>
        <text className="text-lg lg:text-xl font-semibold leading-[3rem] lg:leading-[4rem] border-l-4 border-yellow-200 pl-[1rem]">
          주소: 서울특별시 중랑구 양원역로 92 (망우동)
        </text>
      </div>
    </main>
  );
}
