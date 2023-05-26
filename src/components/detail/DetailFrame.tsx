"use client";
import KakaoMap from "./KakaoMap";
import { useQuery } from "@tanstack/react-query";
import ContentCard from "./ContentCard";
import { Tab } from "@headlessui/react";
import { useParams, usePathname } from "next/navigation";
import axios from "axios";
import Review from "./Review";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DetailFrame() {
  const pathname = usePathname();
  const params = useParams();
  console.log(`/center/${params.id}`);
  const getDetailData = async () => {
    if (`/center/${params.id}` === pathname) {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/child-center-info/${params.id}`
      );
      return data;
    } else {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/child-care-info/${params.id}`
      );
      return data;
    }
  };

  const { isLoading, isError, data, error } = useQuery(
    ["detail"],
    getDetailData,
    {
      refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      retry: 0, // 실패시 재호출 몇번 할지
      onSuccess: (data: any) => {
        // 성공시 호출
        console.log(data);
        console.log(data.latitude);
        console.log(data.longitude);
      },
      onError: ({ e }: any) => {
        console.log(e.message);
      },
    }
  );
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <main className="flex flex-col w-screen justify-start items-center">
      {/* Wrapper */}
      <section className="flex flex-col-reverse lg:flex-row lg:items-start justify-center gap-[1rem] p-[1rem]">
        {/* <KakaoMap lat={Number(data.latitude)} lng={Number(data.longitude)} /> */}
        <KakaoMap lat={data.latitude} lng={data.longitude} />
        <div className="flex lg:flex-col justify-center items-center gap-[1rem] lg:pt-[3rem]">
          <div className="rounded=[0.625rem] lg:px-[4rem] px-[2rem] h-[5rem] bg-amber-200 shadow-md flex items-center font-bold text-2xl mb-[1rem] rounded-[0.625rem] whitespace-nowrap">
            {data.name}
          </div>
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
      </section>
      {/* 개요 및 리뷰 */}
      <div className="bg-white shadow-md lg:w-[60rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] flex flex-col justify-start gap-[1rem]">
        <div className="flex flex-col">
          <Tab.Group>
            <Tab.List className="bg-yellowColor flex rounded-xl p-4 border-b-2 border-transparent rounded-t-lg text-lg hover:text-gray-600 hover:border-gray-30">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-yellow-400 focus:outline-none focus:ring-2",
                    selected
                      ? "text-gray-900 bg-white shadow-md"
                      : "text-gray-400 hover:bg-white/[0.2] hover:text-gray-800"
                  )
                }
              >
                개요
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-yellow-400 focus:outline-none focus:ring-2",
                    selected
                      ? "text-gray-900 bg-white shadow-md"
                      : "text-gray-400 hover:bg-white/[0.2] hover:text-gray-800"
                  )
                }
              >
                리뷰
              </Tab>
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel className={classNames("rounded-xl bg-white p-3")}>
                <div className="flex flex-col gap-[1rem]">
                  <div className="flex gap-[1rem]">
                    {data.preschoolType !== undefined && (
                      <ContentCard
                        type="kindergarten"
                        content={
                          data.preschoolType === "PUBLIC" ? "국공립" : "사립"
                        }
                      />
                    )}
                    {data.isFree !== undefined && (
                      <ContentCard
                        type="isFree"
                        content={data.isFree ? "무료" : "유료"}
                      />
                    )}
                    {data.cctv !== undefined && (
                      <ContentCard
                        type="cctv"
                        content={"CCTV " + data.cctvNum + "개"}
                      />
                    )}
                    {data.playground !== undefined && (
                      <ContentCard
                        type="playground"
                        content={"놀이터 " + data.playgroundNum + "개"}
                      />
                    )}
                    {data.bus !== undefined && (
                      <ContentCard
                        type="bus"
                        content={
                          data.isSchoolBus ? "통학 차량 있음" : "통학 차량 없음"
                        }
                      />
                    )}
                    {data.calender !== undefined && (
                      <ContentCard
                        type="calender"
                        content={
                          data.isSatOpen ? "토요일 운영" : "토요일 미운영"
                        }
                      />
                    )}
                    {data.ageType !== undefined && (
                      <ContentCard type="ageType" content={data.ageType} />
                    )}
                  </div>
                  <text className="text-lg lg:text-xl font-semibold leading-[3rem] lg:leading-[4rem] border-l-4 border-yellow-200 pl-[1rem]">
                    {data.address}
                  </text>
                </div>
              </Tab.Panel>
              <Tab.Panel className={classNames("rounded-xl bg-white p-3")}>
                <Review />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </main>
  );
}
