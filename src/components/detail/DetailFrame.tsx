"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import ContentCard from "./ContentCard";
import { Tab } from "@headlessui/react";
import { useParams, usePathname, useRouter } from "next/navigation";
import axios from "axios";
import Review from "./Review";
import { useRecoilValue } from "recoil";
import { isLoginSelector, userAtom } from "@/state";
import Swal from "sweetalert2";
import DetailSkeleton from "./DetailSkeleton";
import KakaoMap from "./KakaoMap";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DetailFrame() {
  const router = useRouter();

  const pathname = usePathname();
  const params = useParams();

  // invalidateQueries를 사용하여 쿼리를 무효화 시키고 다시 호출하기 위해 queryClient를 사용합니다.
  const queryClient = useQueryClient();

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
      refetchOnWindowFocus: true, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      retry: 0, // 실패시 재호출 몇번 할지
      onSuccess: (data: IDetailData) => {
        // 성공시 호출
      },
    }
  );

  const user = useRecoilValue(userAtom);
  const isLogin = useRecoilValue(isLoginSelector);

  // 스크랩 버튼 클릭시
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isLogin) {
      Swal.fire({
        titleText: "스크랩을 하려면 로그인이 필요합니다.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#FBBF24",
        confirmButtonText: "로그인",
        cancelButtonText: "아니요",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          router.replace("/login");
        }
      });
      return;
    }
    postScrapMutate();
  };

  //2. 토큰 보내서 사용자 정보 받기(from Backend)
  const postScrap = async () => {
    if (pathname.search("care") === 1) {
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/like/care-info`, {
          userId: user?.id,
          careInfoId: params.id,
        })
        .then((res) => {
          Swal.fire({
            title: res.data,
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          });
        });
    } else {
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/like/center-info`, {
          userId: user?.id,
          centerId: params.id,
        })
        .then((res) => {
          Swal.fire({
            title: res.data,
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          });
        });
    }
  };

  const { mutate: postScrapMutate, isLoading: postScrapIsLoding } = useMutation(
    ["postScrap"],
    postScrap,
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["detail"] });
      },
      onError: () => {
        alert("알 수 없는 오류입니다.");
        router.push(pathname);
      },
    }
  );

  if (isLoading || postScrapIsLoding) {
    return (
      <DetailSkeleton>
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
              <div className="animate-pulse flex flex-col gap-[1rem]">
                <div className="flex gap-[1rem]">
                  <div className="h-[4rem] w-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[10rem] lg:h-[12rem] rounded-[0.3rem] shadow-md flex items-center justify-center flex-col bg-gray-400"></div>
                  <div className="h-[4rem] w-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[10rem] lg:h-[12rem] rounded-[0.3rem] shadow-md flex items-center justify-center flex-col bg-gray-400"></div>
                  <div className="h-[4rem] w-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[10rem] lg:h-[12rem] rounded-[0.3rem] shadow-md flex items-center justify-center flex-col bg-gray-400"></div>
                  <div className="h-[4rem] w-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[10rem] lg:h-[12rem] rounded-[0.3rem] shadow-md flex items-center justify-center flex-col bg-gray-400"></div>
                </div>
                <div className="text-base lg:text-xl font-semibold leading-[3rem] lg:leading-[4rem] border-l-4 border-yellow-200 pl-[1rem]">
                  <div className="h-[1rem] bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel
              className={classNames("rounded-xl bg-white p-3")}
            ></Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </DetailSkeleton>
    );
  }

  return (
    <main className="flex flex-col w-screen justify-start items-center">
      {/* Wrapper */}
      <section className="flex flex-col justify-center gap-[1rem] p-[1rem]">
        {/* 제목 및 스크랩 */}
        <div className="flex flex-row">
          <div className="flex flex-1 justify-center items-center gap-[1rem] rounded=[0.625rem] px-[1rem] py-[1rem] bg-amber-200 shadow-md font-bold text-base md:text-xl lg:text-2xl mb-[1rem] rounded-[0.625rem]">
            {data?.name}
          </div>
          <div className="flex justify-center items-center gap-[1rem] rounded=[0.625rem] px-[1rem] py-[1rem] font-bold text-base md:text-xl lg:text-2xl mb-[1rem] rounded-[0.625rem]">
            <form onSubmit={submitForm}>
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
                    {data?.likeCount}
                  </div>
                </div>
              </label>
            </form>
          </div>
        </div>
        <KakaoMap lat={data?.latitude} lng={data?.longitude} />
      </section>
      {/* 개요 및 리뷰 */}
      <div className="flex flex-col w-[20rem] sm:w-[30rem] md:w-[50rem] lg:w-[65rem] bg-white shadow-md drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] mb-[2rem] rounded-[1rem] justify-start gap-[1rem]">
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
                  {data?.preschoolType !== undefined && (
                    <ContentCard
                      type="kindergarten"
                      content={
                        data?.preschoolType === "PUBLIC" ? "국공립" : "사립"
                      }
                    />
                  )}
                  {data?.isFree !== undefined && (
                    <ContentCard
                      type="isFree"
                      content={data?.isFree ? "무료" : "유료"}
                    />
                  )}
                  {data?.cctvNum !== undefined && (
                    <ContentCard
                      type="cctv"
                      content={"CCTV " + data?.cctvNum + "개"}
                    />
                  )}
                  {data?.playgroundNum !== undefined && (
                    <ContentCard
                      type="playground"
                      content={"놀이터 " + data?.playgroundNum + "개"}
                    />
                  )}
                  {data?.isSchoolBus !== undefined && (
                    <ContentCard
                      type="bus"
                      content={
                        data?.isSchoolBus ? "통학 차량 있음" : "통학 차량 없음"
                      }
                    />
                  )}
                  {data?.isSatOpen !== undefined && (
                    <ContentCard
                      type="calender"
                      content={
                        data?.isSatOpen ? "토요일 운영" : "토요일 미운영"
                      }
                    />
                  )}
                  {data?.ageType !== undefined && (
                    <ContentCard type="ageType" content={data?.ageType} />
                  )}
                </div>
                <div className="text-base lg:text-xl font-semibold leading-[3rem] lg:leading-[4rem] border-l-4 border-yellow-200 pl-[1rem]">
                  {data?.address}
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className={classNames("rounded-xl bg-white p-3")}>
              <Review />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </main>
  );
}
// Intersection Type
type IDetailData = IChildCareData & IChildCenterData;
export interface IChildCareData {
  id: number;
  name: string;
  borough: string;
  latitude: string;
  longitude: string;
  address: string;
  isFree: boolean;
  reviewCount: number;
  likeCount: number;
  infoType: string;
  ageType: string;
  fee: string;
  startAt: string;
  endAt: string;
  infoUrl: string;
  facilityName: string;
}

export interface IChildCenterData {
  id: number;
  name: string;
  borough: string;
  latitude: string;
  longitude: string;
  address: string;
  isFree: boolean;
  reviewCount: number;
  likeCount: number;
  centerType: string;
  preschoolType: string;
  contactNumber: string;
  homepage: string;
  classNum: number;
  playgroundNum: number;
  cctvNum: number;
  teacherNum: number;
  isSchoolBus: boolean;
  fee: string;
  isSatOpen: boolean;
  serviceType: string;
}
