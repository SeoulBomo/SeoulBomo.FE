"use client";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoginSelector, userAtom } from "@/state";
import { useRouter } from "next/navigation";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function MypageFrame() {
  const router = useRouter();

  const isLogin = useRecoilValue(isLoginSelector);
  const setUser = useSetRecoilState(userAtom);

  const handleLogout = () => {
    setUser(null);
    router.replace("/");
  };

  let [categories] = useState({
    좋아요: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    "내가 작성한 리뷰": [
      {
        id: 1,
        title:
          "Is tech making coffee better or worse?Is tech making coffee better or worse?Is tech making coffee better or worse?Is tech making coffee better or worse?Is tech making coffee better or worse?Is tech making coffee better or worse?Is tech making coffee better or worse?Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  });

  if (!isLogin) {
    router.replace("/");
    return <></>;
  }

  return (
    <main className="flex flex-col w-screen h-screen justify-center p-[2rem] gap-[2rem]">
      <section className="flex flex-col gap-[1rem] justify-start items-center">
        <div className="font-bold text-2xl lg:text-4xl">000님</div>
        <div className="text-md lg:text-lg font-bold whitespace-nowrap">
          카카오톡으로 로그인 중
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
        <text className="font-bold text-3xl py-[2rem]">나의 활동</text>
        <div className="flex flex-col">
          <Tab.Group>
            <Tab.List className="bg-yellowColor flex rounded-xl p-4 border-b-2 border-transparent rounded-t-lg text-lg hover:text-gray-600 hover:border-gray-30">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
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
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames("rounded-xl bg-white p-3")}
                >
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 hover:bg-gray-100"
                      >
                        <h3 className="text-sm font-medium leading-5 truncate">
                          {post.title}
                        </h3>

                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                          <li>{post.date}</li>
                          <li>&middot;</li>
                          <li>{post.commentCount} comments</li>
                          <li>&middot;</li>
                          <li>{post.shareCount} shares</li>
                        </ul>

                        <a
                          href="#"
                          className={classNames(
                            "absolute inset-0 rounded-md",
                            "ring-yellow-400 focus:z-10 focus:outline-none focus:ring-2"
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </main>
  );
}
