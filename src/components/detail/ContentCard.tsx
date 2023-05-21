import Image from "next/image";

export default function ContentCard({
  type,
  content,
}: {
  type: string;
  content: string | number;
}) {
  return (
    <div className="bg-yellow-200 h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[10rem] lg:h-[12rem] rounded-[0.3rem] shadow-md flex items-center justify-center flex-col">
      <Image
        className="h-0 w-0 lg:h-[6.5rem] lg:w-[5.2rem]"
        src={`/images/${type}.png`}
        width={200}
        height={200}
        alt=""
      />
      <text className="text-center font-bold text-sm md:text-base lg:text-xl lg:mt-[2rem]">
        {content}
      </text>
    </div>
  );
}
