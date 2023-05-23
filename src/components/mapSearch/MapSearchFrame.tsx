"use client";
import SearchCard from "../commonSearch/SearchCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function MapSearchFrame() {
  const searchParams = useSearchParams();

  const borough = searchParams.get("borough");
  const getMapSearch = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/search/borough-center?borough=${borough}`
    );
    return data;
  };

  const { isLoading, isError, data, error } = useQuery(
    ["mapSearch"],
    getMapSearch,
    {
      refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      retry: 0, // 실패시 재호출 몇번 할지
      onSuccess: (data: any) => {
        // 성공시 호출
        console.log(data);
        console.log("지도성공입니다");
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
    <main className="w-screen flex flex-col items-center justify-between">
      <div className="mt-[3rem]">
        <div className="text-xl md:text-2xl lg:text-3xl font-bold">
          관악구 복지 시설 알아보기
        </div>
      </div>
      <div className="my-[4rem] flex flex-col gap-10">
        <SearchCard category="어린이집" data={data[2]} />
        <SearchCard category="공동나눔터" data={data[1]} />
        <SearchCard category="키움센터" data={data[0]} />
      </div>
    </main>
  );
}
