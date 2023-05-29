"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import ContentCard from "@/components/detail/ContentCard";

export default function AboutUs() {
  const cardData = [
    {
      id: 1,
      path: "/images/infant.png",
      text: "영유아",
      value: "INFANT",
    },
    {
      id: 2,
      path: "/images/child.png",
      text: "어린이",
      value: "KINDERGARTEN",
    },
    {
      id: 3,
      path: "/images/teen.png",
      text: "청소년",
      value: "ELEMENTARY",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  return (
    <main className="bg-cardColor">
      <div className="flex  items-center flex-col h-[80vh] lg:gap-[4rem] gap-[2rem]">
        <div className="lg:text-5xl text-3xl  text-center leading-8 font-extrabold tracking-tight text-gray-900 lg:pt-[17rem] pt-[10rem]">
          서울 보육의 모든 것 : 보모
        </div>
        <p className="lg:text-xl text-base text-gray-500 leading-8">
          우리 아이를 위한 각종 복지 정보과 시설들을 알고 싶지만 그동안 찾기
          어려웠나요?
          <br />
          보육의 모든 것은 바쁜 당신을 위해 필요한 정보만 모아봤어요
        </p>
      </div>
      {/* 서울 보모 인사 */}
      <div
        className="h-[50vh] flex items-center justify-evenly lg:gap-[5rem] lg:flex-row flex-col"
        data-aos="fade-right"
      >
        <div className="flex gap-[2rem]">
          {cardData.map((item) => (
            <label key={item.id}>
              <input
                type="radio"
                className="peer hidden"
                name="age"
                value={item.value}
              />
              <div className=" cursor-pointer bg-white text-gray-400 w-[4rem] h-[4rem] md:w-[8rem] md:h-[8rem] lg:w-[12rem] lg:h-[15.5rem] rounded-[0.3rem] shadow-md flex items-center justify-center flex-col ease-in-out duration-300 peer-checked:bg-yellow-200 peer-checked:text-black peer-checked:ring-yellow-400 peer-checked:ring-offset-2 ring-2 ring-transparent">
                <Image
                  className="h-0 w-0 lg:h-[6.5rem] lg:w-[5.2rem]"
                  src={item.path}
                  width={200}
                  height={200}
                  alt="로고"
                />
                <div className="font-semibold text-xl lg:text-lg lg:mt-[2rem]">
                  {item.text}
                </div>
              </div>
            </label>
          ))}
        </div>
        <div className="lg:text-4xl text-xl font-bold ">
          필터링으로 궁금한 정보만 찾아보아요
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="h-[50vh] flex items-center justify-evenly lg:gap-[5rem] lg:flex-row flex-col "
      >
        <div className="flex flex-col gap-[1rem]">
          <div className="lg:text-4xl text-xl font-bold ">
            우리 동네 복지 시설 찾기
          </div>
          <p className="lg:text-xl text-base text-gray-500 leading-8">
            내가 사는 곳을 선택하고 각종 복지 시설에
            <br /> 대한 정보를 알아보아요!
          </p>
        </div>
        <div className="flex gap-[1rem]">
          <ContentCard type="playground" content={"놀이터"} />
          <ContentCard type="bus" content={"통학차량"} />
          <ContentCard type="isFree" content="무료" />
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="h-[50vh] flex items-center justify-center "
      >
        <div className="flex flex-col gap-[3rem]">
          <div className="lg:text-4xl text-xl font-bold text-center">
            스크랩과 리뷰
          </div>
          <p className="lg:block hidden lg:text-xl text-base text-gray-500 leading-8 mx-[1rem]">
            회원가입 후 원하는 정보에 스크랩과 리뷰를 남겨보아요
          </p>
          <p className="lg:hidden block lg:text-xl text-base text-gray-500 leading-8 mx-[1rem]">
            회원가입 후 원하는 정보에 <br />
            스크랩과 리뷰를 남겨보아요
          </p>
        </div>
      </div>
    </main>
  );
}
