export default function SearchCard({ category, data }: propsType) {
  return (
    <section
      className="border-2 border-gray-200  bg-white rounded-[0.95rem] w-[78rem] h-[40rem] drop-shadow-[0_1.5rem__1.5rem_rgba(0,0,0,0.05)] hover:drop-shadow-[0_2rem_2rem_rgba(0,0,0,0.07)] mt-[5rem] mb-[1rem] pl-[7.5rem] py-[3rem]
      "
    >
      <div className="rounded=[0.625rem] w-[11.6rem] h-[3.6rem] bg-amber-200 flex justify-center items-center font-bold text-2xl mb-[3rem] rounded-[0.625rem]">
        {category}
      </div>

      {data?.map((item: any) => (
        <>
          <div className="flex justify-between w-[63rem] mb-[0.5rem] ">
            <text className="font-bold text-xl hover:underline underline-offset-4 w-[50rem] ">
              {item.title}
            </text>
            <text className="text-sm font-normal text-gray-500">
              등록일 {item.date}
            </text>
          </div>
          <p className="w-[40.5rem] h-[3.3rem]  mb-[3rem] text-base font-normal overflow-hidden">
            {item.content}
          </p>
        </>
      ))}

      <text className="font-normal text-sm text-gray-400 hover:underline underline-offset-4">
        내용 더보기
      </text>
    </section>
  );
}
interface propsType {
  category: String;
  data: object[];
}
