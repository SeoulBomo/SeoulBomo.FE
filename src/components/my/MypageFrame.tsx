"use client";
import { Tab } from "@headlessui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isLoginSelector, userAtom } from "@/state";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import MypageReview from "./MypageReview";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function MypageFrame() {
  const router = useRouter();
  const isLogin = useRecoilValue(isLoginSelector);
  const [user, setUser] = useRecoilState(userAtom);

  const getMypageLikeData = async () => {
    if (user !== undefined) {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/like/me?userId=${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      return data;
    }
  };

  type IMypageData = IMyChildCareData & IMyChildCenterData;
  const {
    isLoading,
    isError,
    data: likeData,
    error,
  } = useQuery(["mypageLikeData"], getMypageLikeData, {
    refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
    retry: 0, // 실패시 재호출 몇번 할지
    onSuccess: (data: any) => {
      console.log(data);
    },
    onError: ({ e }: any) => {},
  });
  if (isLoading) {
    return <></>;
  }

  if (isError) {
    return <span>Error:</span>;
  }
  //마이페이지 스크랩 데이터 조회

  const handleLogout = () => {
    setUser(undefined);
    router.replace("/");
  };

  if (!isLogin) {
    router.replace("/");
    return <></>;
  }
  //로그아웃 로직

  return (
    <main className="flex flex-col w-screen  min-h-screen justify-center p-[2rem] gap-[0.5rem]">
      <section className="flex flex-col gap-[1rem] justify-start items-center">
        <Image
          className="w-[6rem] h-[6rem] rounded-full ring-2 ring-white"
          src={user === undefined ? "" : user?.profileImage}
          alt="profile_img"
          width={100}
          height={100}
        />
        <div className="font-bold text-2xl lg:text-4xl">
          {user !== undefined ? user.name : "회원"}님
        </div>
        <div className="text-md lg:text-lg font-bold whitespace-nowrap">
          {user !== undefined
            ? user.socialType === "KAKAO"
              ? "카카오톡"
              : "네이버"
            : ""}{" "}
          로그인 중
        </div>
        <button
          className="w-[6rem] lg:w-[8rem] h-[1.7rem] lg:h-[2rem] font-[500] text-sm lg:text-[1rem] bg-white rounded-xl hover:bg-gray-100"
          onClick={() => {
            handleLogout();
          }}
        >
          로그아웃
        </button>
      </section>

      <section className="flex flex-col justify-start mt-[2rem] lg:px-[8rem]">
        <div className="font-bold lg:text-3xl py-[2rem] text-xl">나의 활동</div>
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
                스크랩
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
                {likeData[0].length < 1 && likeData[1].length < 1 ? (
                  <div className="flex items-center justify-center flex-col gap-[2rem]">
                    <div className="lg:text-xl lg:font-bold p-[1rem] lg:leading-10 text-sm font-medium ">
                      아직 스크랩한 글이 없어요
                    </div>
                    <div className="hidden lg:block">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100"
                        height="100"
                        viewBox="0 0 36 36"
                      >
                        <path
                          fill="#FFCC4D"
                          d="M36 18c0 9.941-8.059 18-18 18c-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"
                        />
                        <ellipse
                          cx="11.5"
                          cy="17"
                          fill="#664500"
                          rx="2.5"
                          ry="3.5"
                        />
                        <ellipse
                          cx="24.5"
                          cy="17"
                          fill="#664500"
                          rx="2.5"
                          ry="3.5"
                        />
                        <path
                          fill="#664500"
                          d="M5.999 13.5a1 1 0 0 1-.799-1.6c3.262-4.35 7.616-4.4 7.8-4.4a1 1 0 0 1 .004 2c-.155.002-3.568.086-6.204 3.6a.998.998 0 0 1-.801.4zm24.002 0a.998.998 0 0 1-.801-.4c-2.641-3.521-6.061-3.599-6.206-3.6a1.002 1.002 0 0 1-.991-1.005A.997.997 0 0 1 23 7.5c.184 0 4.537.05 7.8 4.4a1 1 0 0 1-.799 1.6zm-6.516 14.879C23.474 28.335 22.34 24 18 24s-5.474 4.335-5.485 4.379a.496.496 0 0 0 .232.544a.51.51 0 0 0 .596-.06C13.352 28.855 14.356 28 18 28c3.59 0 4.617.83 4.656.863a.5.5 0 0 0 .829-.484z"
                        />
                        <path
                          fill="#5DADEC"
                          d="M16 31c0 2.762-2.238 5-5 5s-5-2.238-5-5s4-10 5-10s5 7.238 5 10z"
                        />
                      </svg>
                    </div>
                  </div>
                ) : (
                  likeData.map((item: any) => (
                    <ul key={item.id}>
                      {item.map((post: any) => (
                        <li
                          key={post.id}
                          className="relative rounded-md p-3 hover:bg-gray-100 cursor-pointer"
                        >
                          <h3 className="lg:text-lg text-sm font-medium leading-5 truncate">
                            {post.name}
                          </h3>
                        </li>
                      ))}
                    </ul>
                  ))
                )}
              </Tab.Panel>
            </Tab.Panels>
            <Tab.Panels className="mt-2">
              <Tab.Panel className={classNames("rounded-xl bg-white p-3")}>
                <MypageReview />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </main>
  );
}
interface IMyChildCenterData {
  createdAt: string;
  modifiedAt: string;
  id: number;
  name: string;
  centerType: string;
  borough: string;
  address: string;
  preschoolType: string;
  contactNumber: string;
  homepage: string;
  classNum: number;
  playgroundNum: number;
  cctvNum: number;
  teacherNum: number;
  latitude: string;
  longitude: string;
  isSchoolBus: boolean;
  fee: string;
  isSatOpen: boolean;
  serviceType: string;
  visible: boolean;
}
interface IMyChildCareData {
  createdAt: string;
  modifiedAt: string;
  id: number;
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
  visible: boolean;
}
