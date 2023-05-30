"use client";
import SearchCard from "../commonSearch/SearchCard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import SearchSkeleton from "../commonSearch/SearchSkeleton";

export default function MainSearchFrame() {
  const router = useRouter(); //useRouter 설정
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/main-search?keyword=${event.currentTarget.search.value}`); //해당 url로 이동
  };
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");
  const getMainSearch = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/search/keyword?keyword=${keyword}`
    );
    return data;
  };

  const { isLoading, isError, data, error } = useQuery(
    ["mainSearch"],
    getMainSearch,
    {
      refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      retry: 0, // 실패시 재호출 몇번 할지
      onSuccess: (data: [][]) => {
        // 성공시 호출
      },
      onError: ({ e }) => {},
    }
  );
  if (isLoading) {
    return <SearchSkeleton keyword={keyword} />;
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
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col pt-[3rem]">
        <div className="ml-[1rem] text-[0rem] sm:text-xl font-medium">
          검색을 통해 각종 정보를 만나볼 수 있습니다
        </div>
        <form onSubmit={submitForm}>
          <section className="bg-yellowColor px-[1rem] sm:px-[2rem] h-[4rem] sm:h-[5rem] rounded-[1.3rem] mt-[0.5rem] flex justify-center items-center gap-[1rem]">
            <input
              type="text"
              name="search"
              id="search"
              defaultValue={keyword === null ? "" : keyword}
              className="placeholder:text-gray-400 pl-[1rem] w-[12rem] h-[2rem] sm:w-[20rem] sm:h-[2.5rem] md:w-[28rem] lg:w-[33rem]border-4 border-white rounded-[28px] focus:outline-yellow-300  p-[1rem] text-xl"
            ></input>
            <button className="bg-white shadow-lg hover:bg-gray-100 w-[4rem] sm:w-[6.125rem] h-[2rem] sm:h-[2.5rem] rounded-[0.9rem] text-sm sm:text-base">
              검색 🔍
            </button>
          </section>
        </form>
      </div>
      <div className="my-[4rem] flex flex-col gap-10">
        <SearchCard category="복지서비스" data={data[1]} word={keyword} />
        <SearchCard category="복지시설" data={data[0]} word={keyword} />
      </div>
    </main>
  );
}
