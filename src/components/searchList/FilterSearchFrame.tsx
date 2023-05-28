"use client";
import DetailSearchFrame from "../commonSearch/DetailSearchFrame";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FilterSearchFrame() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const ageType = searchParams.get("age-type");
  const infoType = searchParams.get("info-type");
  const getFilterSearch = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/child-care-info/list?page=${page}&age-type=${ageType}&info-type=${infoType}`
    );
    return data;
  };

  // 검색 조건이 바뀔 때마다 쿼리를 재호출합니다.
  useEffect(() => {
    queryClient.fetchQuery(["filterSearch"], getFilterSearch);
  }, [searchParams]);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(
      `filter-search?page=1&age-type=${event.currentTarget.age.value}&info-type=${event.currentTarget.info.value}`
    );
  };

  const { isLoading, isError, data, error } = useQuery(
    ["filterSearch"],
    getFilterSearch,
    {
      refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      retry: 0, // 실패시 재호출 몇번 할지
      onSuccess: (data: any) => {
        // 성공시 호출
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
  //dummy 데이터
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col pt-[3rem]">
        <text className="ml-[1rem] text-[0rem] sm:text-xl font-medium">
          당신을 위한 필터링 서비스
        </text>
        <form
          onSubmit={submitForm}
          className="flex justify-center items-center gap-3 bg-yellowColor px-[1em] sm:px-[2rem] h-[4rem] sm:h-[5rem] rounded-[1.3rem] mt-[0.5rem] "
        >
          <div>
            <select
              name="age"
              className="bg-gray-50 border focus:outline-none font-medium text-base rounded-lg px-[0.4rem] lg:px-[1rem] h-[2.6rem] "
              defaultValue={String(ageType)}
            >
              <option value="ALL">연령무관</option>
              <option value="INFANT">영유아</option>
              <option value="KINDERGARTEN">어린이</option>
              <option value="ELEMENTARY">청소년</option>
            </select>
          </div>
          <div>
            <select
              name="info"
              className="bg-gray-50 border focus:outline-none font-medium text-base rounded-lg px-[0.6rem] lg:px-[1rem] h-[2.6rem] "
              defaultValue={String(infoType)}
            >
              <option value="OUTDOOR_FACILITY">야외시설</option>
              <option value="LIBRARY">도서관</option>
              <option value="MEDICAL_FACILITY">의료시설</option>
              <option value="EXPERIENCE_FACILITY">체험시설</option>
              <option value="CULTURE_EVENT">문화행사</option>
            </select>
          </div>
          <button className="px-[0.6rem] lg:px-[1rem] py-[0.6rem] bg-white rounded-lg shadow-md hover:bg-gray-100">
            <text className="font-inter text-base font-semibold">GO</text>
          </button>
        </form>
      </div>
      <div className="my-[4rem] flex flex-col gap-10">
        <DetailSearchFrame
          content={data.content}
          totalElements={data.totalElements}
          page={page}
        />
      </div>
    </main>
  );
}
