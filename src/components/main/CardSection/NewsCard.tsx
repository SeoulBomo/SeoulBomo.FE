"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import Image from "next/image";

export default function NewsCard() {
  return (
    <div className="bg-yellowColor rounded-[1rem] flex flex-col items-center shadow-lg p-[1rem] w-[18rem] lg:w-[20.5rem] lg:h-[30rem]">
      <text className="font-bold text-[1.5rem] lg:text-[1.75rem] mb-[1rem]">
        복지 소식
      </text>
      <div className="flex flex-col justify-evenly w-[14rem] lg:w-[18rem] h-[25rem] p-[0.5rem] rounded-[1rem] bg-white">
        <text className="font-medium text-lg lg:text-2xl truncate hover:underline underline-offset-4 cursor-pointer">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                src={"/images/news/1.png"}
                width={250}
                height={100}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"/images/news/2.jpeg"}
                width={250}
                height={100}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={"/images/news/3.jpeg"}
                width={250}
                height={100}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </text>
      </div>
    </div>
  );
}
