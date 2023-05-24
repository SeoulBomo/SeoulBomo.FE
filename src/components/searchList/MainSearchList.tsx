"use client";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import DetailSearchFrame from "../commonSearch/DetailSearchFrame";

export default function MainSearchList() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");
  const type = searchParams.get("type");
  const page = searchParams.get("page");
  console.log(type);
  console.log(keyword);
  const getMainSearchList = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/keyword/${type}-list?keyword=${keyword}&page=${page}&size=10`
    );
    return data;
  };

  const { isLoading, isError, data, error } = useQuery(
    ["mainSearchList"],
    getMainSearchList,
    {
      refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      retry: 0, // 실패시 재호출 몇번 할지
      onSuccess: (data: any) => {
        // 성공시 호출
        console.log(data);
      },
      onError: ({ e }: any) => {
        console.log(e.message);
        console.log("실행");
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
    <DetailSearchFrame
      content={data.content}
      totalElements={data.totalElements}
      page={page}
    />
  );
}
