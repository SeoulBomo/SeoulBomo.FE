"use client";
import { userAtom } from "@/state";
import { Menu, Transition } from "@headlessui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { Fragment, useState } from "react";
import { useRecoilValue } from "recoil";
import Swal from "sweetalert2";

export default function Review() {
  const pathname = usePathname();
  const params = useParams();

  // invalidateQueries를 사용하여 쿼리를 무효화 시키고 다시 호출하기 위해 queryClient를 사용합니다.
  const queryClient = useQueryClient();

  const user = useRecoilValue(userAtom);

  // 리뷰 수정 상태
  const [isEdit, setIsEdit] = useState<boolean | undefined>(undefined);
  const [reviewId, setReviewId] = useState<number | undefined>(undefined);

  // center인지 care인지 구분하는 변수
  const isCenter = `/center/${params.id}` === pathname;

  const getReviewData = async () => {
    if (isCenter) {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviews/center-info/${params.id}`,
        {
          headers: { Authorization: `Bearer ${user?.accessToken}` },
        }
      );
      return data;
    } else {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviews/care-info/${params.id}`,
        {
          headers: { Authorization: `Bearer ${user?.accessToken}` },
        }
      );
      return data;
    }
  };

  const { isLoading, isError, data, error } = useQuery(
    ["reviewData"],
    getReviewData,
    {
      refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      retry: 0, // 실패시 재호출 몇번 할지
      onSuccess: (data: any) => {
        // 성공시 호출
      },
      onError: ({ e }: any) => {},
    }
  );

  interface IcommentType {
    comment: string;
  }

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    postReviewMutation({ comment: event.currentTarget.comment.value });
  };

  const editForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsEdit(false);
    editReviewMutation({ comment: event.currentTarget.comment.value });
  };

  const postReview = async (newComment: IcommentType) => {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviews`,
      {
        targetType: isCenter ? "ChildCenterInfo" : "ChildCareInfo", // ChildCenterInfo, ChildCareInfo 택 1 (대소문자 구분 x)
        targetId: params.id,
        content: newComment.comment,
      },
      {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      }
    );
    return data;
  };

  const {
    mutate: postReviewMutation,
    isLoading: reviewIsLoding,
    isError: reviewIsError,
  } = useMutation(["postReview"], postReview, {
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["reviewData"] });
    },
  });

  const editReview = async (newComment: IcommentType) => {
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviews/${reviewId}`,
      {
        targetType: isCenter ? "ChildCenterInfo" : "ChildCareInfo", // ChildCenterInfo, ChildCareInfo 택 1 (대소문자 구분 x)
        content: newComment.comment,
      },
      {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      }
    );
    return data;
  };

  const {
    mutate: editReviewMutation,
    isLoading: editIsLoding,
    isError: editIsError,
  } = useMutation(["editReview"], editReview, {
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["reviewData"] });
    },
  });

  const deleteReview = async (id: number) => {
    const { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/reviews/${id}?target-type=${
        isCenter ? "ChildCenterInfo" : "ChildCareInfo"
      }`,
      {
        headers: { Authorization: `Bearer ${user?.accessToken}` },
      }
    );
    return data;
  };

  const {
    mutate: deleteReviewMutation,
    isLoading: deleteIsLoding,
    isError: deleteIsError,
  } = useMutation(["deleteReview"], deleteReview, {
    onSuccess: (res) => {
      queryClient.invalidateQueries({ queryKey: ["reviewData"] });
    },
  });

  if (isLoading || reviewIsLoding || editIsLoding || deleteIsLoding) {
    return <span>Loading...</span>;
  }

  if (isError || reviewIsError || editIsError || deleteIsError) {
    return (
      <div className="flex gap-[1rem] justify-center items-center">
        <div className="text-base md:text-lg">
          로그인 후에 리뷰를 보실 수 있습니다 :D
        </div>
        <Link href="/login">
          <div className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-yellow-400 rounded-lg focus:ring-4 focus:ring-yellow-200 hover:bg-yellow-300">
            로그인 하러 가기
          </div>
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-white py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
            전체 리뷰 ({data?.list?.length ?? 0}개)
          </h2>
        </div>
        <form onSubmit={submitForm} className="mb-6">
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
            <textarea
              id="comment"
              name="comment"
              rows={6}
              className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
              placeholder="리뷰를 작성해주세요!"
              required
            ></textarea>
          </div>
          <div className="flex flex-1 justify-end">
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-yellow-400 rounded-lg focus:ring-4 focus:ring-yellow-200 hover:bg-yellow-300"
            >
              리뷰 남기기
            </button>
          </div>
        </form>
        {data?.list.map((item: IReviewData) => (
          <article
            className="p-6 mb-6 text-base bg-white border-t border-gray-200"
            key={item.id}
          >
            <footer className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900">
                  {item.name}
                </p>
                <p className="text-xs text-gray-600">
                  {/* 2023-05-26T01:59:42 이 형식을 "YYYY-MM-DD HH:MM" 형식으로 바꾸는 코드 */}
                  <time dateTime={item.createdAt} title="리뷰 작성일">
                    {`${new Date(item.createdAt).getFullYear()}-`}
                    {`${new Date(item.createdAt).getMonth() + 1}-`}
                    {`${new Date(item.createdAt).getDate()} `}
                    {`${new Date(item.createdAt).getHours()}:`}
                    {`${new Date(item.createdAt).getMinutes()}`}
                  </time>
                </p>
              </div>
              {item.isWriter ? (
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50">
                      <svg
                        className="w-5 h-5"
                        aria-hidden={true}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      </svg>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-amber-300 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              onClick={() => {
                                setIsEdit(true);
                                setReviewId(item.id);
                              }}
                            >
                              {active ? (
                                <EditActiveIcon
                                  className="mr-2 h-5 w-5"
                                  aria-hidden={true}
                                />
                              ) : (
                                <EditInactiveIcon
                                  className="mr-2 h-5 w-5"
                                  aria-hidden={true}
                                />
                              )}
                              수정
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={`${
                                active
                                  ? "bg-amber-300 text-white"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              onClick={() => {
                                Swal.fire({
                                  titleText: "리뷰를 삭제하시겠습니까?",
                                  icon: "warning",
                                  showCancelButton: true,
                                  confirmButtonColor: "#FBBF24",
                                  confirmButtonText: "네",
                                  cancelButtonText: "아니요",
                                }).then((result) => {
                                  /* Read more about isConfirmed, isDenied below */
                                  if (result.isConfirmed) {
                                    deleteReviewMutation(item.id);
                                    Swal.fire({
                                      title: "리뷰가 삭제되었습니다 :D",
                                      icon: "success",
                                      showConfirmButton: false,
                                      timer: 1500,
                                    });
                                  }
                                });
                              }}
                            >
                              {active ? (
                                <DeleteActiveIcon
                                  className="mr-2 h-5 w-5 text-yellow-400"
                                  aria-hidden={true}
                                />
                              ) : (
                                <DeleteInactiveIcon
                                  className="mr-2 h-5 w-5 text-yellow-400"
                                  aria-hidden={true}
                                />
                              )}
                              삭제
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : null}
            </footer>
            {isEdit && reviewId === item.id ? (
              <form onSubmit={editForm} className="mb-6">
                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                  <textarea
                    id="comment"
                    name="comment"
                    rows={6}
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                    placeholder="리뷰를 작성해주세요!"
                    defaultValue={item.content}
                    required
                  ></textarea>
                </div>
                <div className="flex flex-1 justify-end gap-1">
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-yellow-400 rounded-lg focus:ring-4 focus:ring-yellow-200 hover:bg-yellow-300"
                  >
                    리뷰 수정하기
                  </button>
                  <button
                    onClick={() => {
                      setIsEdit(false);
                      setReviewId(undefined);
                    }}
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-yellow-500 rounded-lg focus:ring-4 focus:ring-yellow-200 hover:bg-yellow-400"
                  >
                    취소
                  </button>
                </div>
              </form>
            ) : (
              <p className="text-sm lg:text-base">{item.content}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

interface IReviewData {
  id: number;
  name: string;
  content: string;
  createdAt: string;
  isWriter: boolean;
}

type IconProps = {
  className?: string;
  "aria-hidden"?: boolean;
};

function EditInactiveIcon(props: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#FFFFFF"
        stroke="#FDE047"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#FDE047"
        stroke="#FDE047"
        strokeWidth="2"
      />
    </svg>
  );
}

function DeleteInactiveIcon(props: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#FFFFFF"
        stroke="#FDE047"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#FDE047" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#FDE047" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props: IconProps) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#FDE047"
        stroke="#FDE047"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#FDE047" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#FDE047" strokeWidth="2" />
    </svg>
  );
}
