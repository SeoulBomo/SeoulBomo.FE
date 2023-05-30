"use client";
import SearchCard from "../commonSearch/SearchCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import MapSearchSkeleton from "./MapSearchSkeleton";

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
      onSuccess: (data: [][]) => {},
      onError: ({ e }: any) => {},
    }
  );
  if (isLoading) {
    return <MapSearchSkeleton borough={borough} />;
  }

  if (isError) {
    return (
      <main className="flex flex-col items-center justify-between">
        <div className="flex flex-col pt-[3rem]">
          해당 정보에 대한 결과를 불러올 수 없습니다!
        </div>
      </main>
    );
  }
  return (
    <main className="w-screen flex flex-col items-center justify-between">
      <div className="mt-[3rem]">
        <div className="text-xl md:text-2xl lg:text-3xl font-bold">
          {borough} 보육 시설 알아보기
        </div>
      </div>
      <div className="my-[4rem] flex flex-col gap-10">
        <SearchCard category="어린이집" data={data[2]} word={borough} />
        <SearchCard category="공동육아나눔터" data={data[1]} word={borough} />
        <SearchCard category="키움센터" data={data[0]} word={borough} />
      </div>
    </main>
  );
}
