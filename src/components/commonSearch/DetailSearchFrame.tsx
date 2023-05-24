import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

export default function DetailSearchFrame({ data }: any) {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="my-[1rem] flex flex-col gap-10">
        <section className="flex flex-col w-[20rem] sm:w-[40rem] md:w-[50rem] lg:w-[60rem] border-2 border-gray-200 bg-white rounded-[1rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] hover:drop-shadow-[0_2rem_2rem_rgba(0,0,0,0.07)] p-[3rem] ">
          <div className="rounded=[0.625rem] sm:w-[11.6rem] h-[3rem] sm:h-[5rem] bg-amber-200 flex justify-center items-center font-bold text-2xl mb-[1rem] rounded-[0.625rem]">
            <text className="text-xl sm:text-2xl">상세페이지</text>
          </div>
          {data.length !== 0 ? (
            <>
              {" "}
              <ul role="list" className="divide-y divide-gray-100">
                {data.map((item: any) => (
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
              {/* pagination */}
              <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-between sm:hidden">
                  <Link
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    이전
                  </Link>
                  <Link
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    다음
                  </Link>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-end">
                  <div>
                    <nav
                      className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                      aria-label="Pagination"
                    >
                      <Link
                        href="#"
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </Link>
                      {/* Current: "z-10 bg-yellow-400 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                      <Link
                        href="#"
                        aria-current="page"
                        className="relative z-10 inline-flex items-center bg-yellow-400 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                      >
                        1
                      </Link>
                      <Link
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        2
                      </Link>
                      <Link
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        3
                      </Link>
                      <Link
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                      >
                        4
                      </Link>
                      <Link
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                      >
                        5
                      </Link>
                      <Link
                        href="#"
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                      >
                        <span className="sr-only">다음</span>
                        <ChevronRightIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </Link>
                    </nav>
                  </div>
                </div>
              </div>
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
