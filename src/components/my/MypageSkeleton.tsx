export default function MypageSkeleton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col w-screen justify-center p-[1rem] lg:p-[5rem] gap-[0.5rem]">
      <section className="flex flex-col gap-[1rem] justify-start items-center">
        <svg
          className="animate-pulse mr-2 text-gray-200 w-[6rem] h-[6rem] rounded-full ring-2 ring-white"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <div className="animate-pulse h-[2.5rem] w-[7rem] mb-[0.3rem] rounded-full bg-gray-500"></div>
        <div className="animate-pulse h-[1.5rem] w-[9rem] rounded-full bg-gray-400"></div>
        <button className="w-[6rem] lg:w-[8rem] h-[1.7rem] lg:h-[2rem] font-[500] text-sm lg:text-[1rem] bg-white rounded-xl hover:bg-gray-100">
          로그아웃
        </button>
      </section>

      <section className="flex flex-col justify-start mt-[1rem] px-[0] lg:px-[8rem]">
        <div className="font-bold lg:text-3xl py-[2rem] text-xl">나의 활동</div>
        <div className="flex flex-col">{children}</div>
      </section>
    </main>
  );
}
