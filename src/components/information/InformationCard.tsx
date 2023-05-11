export default function InformationCard({ data, text }: propsType) {
  return (
    <section className="bg-white w-[80.25rem] h-[38rem] mb-[5rem] rounded-[1.25rem] drop-shadow-xl px-[7rem] pt-[3rem]">
      <text className="font-bold text-3xl">{text}</text>
      <div className="grid grid-cols-2 gap-10 mt-[3rem]">
        {data?.map((item: any) => (
          <div
            key={item.id}
            className="w-[29.625rem] h-[4.1rem] rounded-[10px] bg-amber-200 font-semibold text-2xl flex items-center hover:translate-x-3 ease-in-out duration-300"
          >
            <text className="ml-[1rem]">{item.name}</text>
          </div>
        ))}
      </div>
    </section>
  );
}
interface propsType {
  data: object[];
  text: String;
}
