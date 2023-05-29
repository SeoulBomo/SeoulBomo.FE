import { userAtom } from "@/state";
import { Tab } from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";

export default function MypageReview() {
  const user = useRecoilValue(userAtom);
  const router = useRouter();

  const getMypageReviewData = async () => {
    if (user !== undefined) {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviews/me`,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      return data;
    }
  };

  const {
    isLoading,
    isError,
    data: reviewData,
    error,
  } = useQuery(["mypageReview"], getMypageReviewData, {
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
    return (
      <div className="flex items-center justify-center flex-col gap-[2rem] sm:p-[2rem]">
        <div className="lg:text-xl lg:font-bold p-[1rem] lg:leading-10 text-sm font-medium ">
          지금은 리뷰 글을 확인할 수 없습니다!
        </div>
      </div>
    );
  }

  return (
    <>
      {reviewData.list.length < 1 ? (
        <div className="flex items-center justify-center flex-col gap-[2rem] sm:p-[2rem]">
          <div className="lg:text-xl lg:font-bold p-[1rem] lg:leading-10 text-sm font-medium ">
            아직 리뷰한 글이 없어요
          </div>
          <div className="hidden lg:block">
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
              <ellipse cx="11.5" cy="17" fill="#664500" rx="2.5" ry="3.5" />
              <ellipse cx="24.5" cy="17" fill="#664500" rx="2.5" ry="3.5" />
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
        <ul key={reviewData.id}>
          {reviewData.list.map((post: IReviewData) =>
            post.targetType === "childCareInfo" ? (
              <li
                key={post.createdAt + post.id}
                className="flex justify-between rounded-md p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  router.push(`/care/${post.targetId}`);
                }}
              >
                <div className="flex flex-col">
                  <h3 className="lg:text-lg text-sm font-medium leading-5 truncate">
                    {post.targetName}
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-600 truncate">
                    {post.content}
                  </p>
                </div>
                <p className="text-xs truncate">
                  <time dateTime={post.createdAt} title="리뷰 작성일">
                    {`${new Date(post.createdAt).getFullYear()}-`}
                    {`${new Date(post.createdAt).getMonth() + 1}-`}
                    {`${new Date(post.createdAt).getDate()} `}
                    {`${new Date(post.createdAt).getHours()}:`}
                    {`${new Date(post.createdAt).getMinutes()}`}
                  </time>
                </p>
              </li>
            ) : (
              <li
                key={post.createdAt + post.id}
                className="flex justify-between rounded-md p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  router.push(`/center/${post.targetId}`);
                }}
              >
                <h3 className="text-sm font-medium leading-5 truncate">
                  {post.content}
                </h3>
                <p className="text-xs">
                  <time dateTime={post.createdAt} title="리뷰 작성일">
                    {`${new Date(post.createdAt).getFullYear()}-`}
                    {`${new Date(post.createdAt).getMonth() + 1}-`}
                    {`${new Date(post.createdAt).getDate()} `}
                    {`${new Date(post.createdAt).getHours()}:`}
                    {`${new Date(post.createdAt).getMinutes()}`}
                  </time>
                </p>
              </li>
            )
          )}
        </ul>
      )}
    </>
  );
}

interface IReviewData {
  id: number;
  name: string;
  content: string;
  createdAt: string;
  targetType: string;
  targetId: number;
  targetName: string;
}
