import Pagination from "rc-pagination";

export default function DetailSearchFrame({
  content,
  totalPages,
  page,
}: propsType) {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="my-[1rem] flex flex-col gap-10">
        <section className="flex flex-col w-[20rem] sm:w-[40rem] md:w-[50rem] lg:w-[60rem] border-2 border-gray-200 bg-white rounded-[1rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] hover:drop-shadow-[0_2rem_2rem_rgba(0,0,0,0.07)] p-[3rem] ">
          <div className="rounded=[0.625rem] sm:w-[11.6rem] h-[3rem] sm:h-[5rem] bg-amber-200 flex justify-center items-center font-bold text-2xl mb-[1rem] rounded-[0.625rem]">
            <text className="text-xl sm:text-2xl">상세페이지</text>
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
                        <p className="text-lg sm:text-xl font-semibold text-gray-900 truncate pb-[0.25rem]">
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
              <Pagination
                showTotal={(totalPages: any) => `Total ${totalPages} items`}
                total={455}
              />
            </>
          ) : (
            <div className="2xl:py-[10rem] py-[5rem] sm:py-[7rem]">
              <p className="text-lg sm:text-2xl font-semibold text-gray-900 flex-wrap pb-[0.25rem]">
                해당 필터로 검색한 결과가 존재하지 않습니다!
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
interface propsType {
  content: any;
  totalPages: number;
  page: string | null;
}
