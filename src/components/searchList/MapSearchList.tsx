"use client";
import axios from "axios";
import DetailSearchFrame from "../commonSearch/DetailSearchFrame";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import SearchListSkeleton from "./SearchListSkeleton";

export default function MapSearchList() {
  const searchParams = useSearchParams();
  const borough = searchParams.get("borough");
  const centerType = searchParams.get("center-type");
  const page = searchParams.get("page");
  const getMapSearchList = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/child-center-info/list/borough?page=${page}&size=10&borough=${borough}&center-type=${centerType}`
    );
    return data;
  };

  const { isLoading, isError, data, error } = useQuery(
    ["mapSearchList"],
    getMapSearchList,
    {
      refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      retry: 0, // 실패시 재호출 몇번 할지
      onSuccess: (data: IMapSearchListData) => {},
      onError: ({ e }: any) => {},
    }
  );
  if (isLoading) {
    return <SearchListSkeleton />;
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
    <DetailSearchFrame
      content={data.content}
      totalElements={data.totalElements}
      page={page}
    />
  );
}
export interface IMapSearchListData {
  totalPages: number;
  totalElements: number;
  islast: boolean;
  content: Content[];
}

interface Content {
  id: number;
  name: string;
  borough: string;
  address: string;
  centerType: string;
  latitude: number;
  longitude: number;
}
