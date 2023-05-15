export default function NewsCard() {
  return (
    <div className="bg-yellowColor rounded-[1rem] flex flex-col items-center shadow-lg p-[1rem] w-[18rem] h-[28rem] lg:w-[20.5rem] lg:h-[30rem]">
      <text className="font-bold text-[1.5rem] lg:text-[1.75rem] mb-[1rem]">
        복지 소식
      </text>
      <div className="flex flex-col justify-evenly w-[14rem] h-[28rem] lg:w-[18rem] lg:h-[28rem] p-[0.5rem] rounded-[1rem] bg-white">
        <text className="font-medium text-lg lg:text-2xl truncate hover:underline underline-offset-4 cursor-pointer"></text>
      </div>
    </div>
  );
}
