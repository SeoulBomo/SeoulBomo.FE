import Link from "next/link";

export default function InformationCard({ data, text }: propsType) {
  return (
    <section className="bg-white mb-[5rem] rounded-[1.25rem] drop-shadow-xl md:px-[5rem] p-[3rem]">
      <text className="font-bold text-2xl md:text-3xl">{text}</text>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[3rem]">
        {data?.map((item: any) => (
          <Link href={item.path} key={item.id}>
            <div className="w-[15rem] sm:w-[25rem] h-[4.1rem] rounded-[10px] bg-amber-200 font-semibold text-lg md:text-2xl flex items-center lg:hover:translate-x-3 ease-in-out duration-300">
              <text className="ml-[1rem]">{item.name}</text>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
interface propsType {
  data: object[];
  text: String;
}
