"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function PopularCard() {
  const router = useRouter();
  const getPopularCard = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/child-care-info/popularity`
    );
    return data;
  };
  const HandleNavigate = (id: number) => {
    router.push(`detail/${id}`); //해당 url로 이동
  };

  const { isLoading, isError, data, error } = useQuery(
    ["popularCard"],
    getPopularCard,
    {
      refetchOnWindowFocus: false, // react-query는 사용자가 사용하는 윈도우가 다른 곳을 갔다가 다시 화면으로 돌아오면 이 함수를 재실행합니다. 그 재실행 여부 옵션 입니다.
      retry: 0, // 실패시 재호출 몇번 할지
      onSuccess: (data: any) => {
        // 성공시 호출
        console.log(data);
        console.log("성공입니다");
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
    <div className="bg-yellowColor rounded-[1rem] flex flex-col items-center shadow-lg p-[1rem] w-[18rem] lg:w-[20.5rem] lg:h-[30rem]">
      <div className="font-bold text-[1.5rem] lg:text-[1.75rem] mb-[1rem]">
        인기 복지
      </div>
      <div className="flex flex-col justify-evenly w-[14rem] h-[28rem] lg:w-[18rem] lg:h-[26rem] p-[0.5rem] rounded-[1rem] bg-white">
        {data.list?.map((item: any) => (
          <div
            key={item.id}
            className="font-medium text-lg lg:text-xl truncate hover:underline underline-offset-4 cursor-pointer"
            onClick={() => HandleNavigate(item.id)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
