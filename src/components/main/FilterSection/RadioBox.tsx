import Link from "next/link";
import RadioButton from "./RadioButton";

export default function RadioBox() {
  return (
    <div className="flex rounded-[0.3rem] w-[25rem] mt-[1rem] lg:mt-0 lg:h-[15.5rem]">
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <RadioButton name="야외시설" />
        <RadioButton name="관공서" />
        <RadioButton name="도서관" />
        <RadioButton name="의료시설" />
        <RadioButton name="문화행사" />
        <Link href="/filter-search">
          <button className="lg:w-[10rem] lg:h-[4.4rem] shadow-md rounded-md bg-yellow-200 p-5 hover:bg-yellow-300">
            <text className="text-sm md:text-md lg:text-xl font-semibold">
              검색 🔎
            </text>
          </button>
        </Link>
      </div>
    </div>
  );
}
