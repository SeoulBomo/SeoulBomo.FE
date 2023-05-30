import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DetailSearchFrame({
  content,
  totalElements,
  page,
}: propsType) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ageType = searchParams.get("age-type");
  const infoType = searchParams.get("info-type");
  const borough = searchParams.get("borough");
  const keyword = searchParams.get("keyword");
  const centerType = searchParams.get("center-type");
  const type = searchParams.get("type");

  const handlePageChange = (page: number) => {
    if (ageType && infoType) {
      // 필터 정보 전체 조회
      router.push(
        `${pathname}?page=${page}&age-type=${ageType}&info-type=${infoType}`
      );
    } else if (borough && centerType) {
      // 자치구명 전체 조회
      router.push(
        `${pathname}?page=${page}&size=10&borough=${borough}&center-type=${centerType}`
      );
    } else if (keyword && type) {
      // 검색어 전체 조회
      router.push(
        `/main-search-list?page=${page}&size=10&keyword=${keyword}&type=${type}`
      );
    }
  };

  const handleDetailRouter = (id: number) => {
    if (ageType && infoType) {
      router.push(`/care/${id}`);
    } else {
      router.push(`/center/${id}`);
    }
  };

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="my-[4rem] flex flex-col gap-10">
        <section className="flex flex-col w-[20rem] sm:w-[40rem] md:w-[50rem] lg:w-[60rem] border-2 border-gray-200 bg-white rounded-[1rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] hover:drop-shadow-[0_2rem_2rem_rgba(0,0,0,0.07)] p-[3rem] ">
          <div className="rounded=[0.625rem] sm:w-[11.6rem] h-[3rem] sm:h-[5rem] bg-amber-200 flex justify-center items-center font-bold text-2xl mb-[1rem] rounded-[0.625rem]">
            <div className="text-xl sm:text-2xl">
              {centerType !== null
                ? centerType
                : type === "center"
                ? "복지시설"
                : "복지서비스"}
            </div>
          </div>
          {content.length !== 0 ? (
            <>
              <ul role="list" className="divide-y divide-gray-100">
                {content.map((item: any) => (
                  <li
                    key={item.id}
                    className="flex flex-col justify-between gap-x-4 py-[2rem]"
                  >
                    <div className="flex flex-col">
                      <div className="flex justify-between">
                        <p
                          onClick={() => {
                            handleDetailRouter(item.id);
                          }}
                          className="cursor-pointer text-lg sm:text-xl font-semibold text-gray-900 truncate pb-[0.25rem]"
                        >
                          {item.name}
                        </p>
                      </div>
                      <p className="mt-1 truncate text-sm sm:text-md leading-5 text-gray-500">
                        {item.address}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <div className="2xl:py-[10rem] py-[5rem] sm:py-[7rem]">
              <p className="text-lg sm:text-2xl font-semibold text-gray-900 flex-wrap pb-[0.25rem]">
                해당 필터로 검색한 결과가 존재하지 않습니다!
              </p>
            </div>
          )}
          <div className="flex justify-end">
            <Pagination
              total={totalElements - 10}
              pageSize={10}
              current={page ? parseInt(page) : 1}
              onChange={(page) => handlePageChange(page)}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
interface propsType {
  content: any;
  totalElements: number;
  page: string | null;
}
