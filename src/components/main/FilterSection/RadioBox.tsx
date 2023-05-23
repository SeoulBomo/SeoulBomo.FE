import RadioButton from "./RadioButton";

export default function RadioBox() {
  return (
    <div className="flex rounded-[0.3rem] w-[25rem] mt-[1rem] lg:mt-0 lg:h-[15.5rem]">
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <RadioButton name="야외시설" buttonValue="OUTDOOR_FACILITY" />
        <RadioButton name="관공서" buttonValue="OFFICES" />
        <RadioButton name="도서관" buttonValue="LIBRARY" />
        <RadioButton name="의료시설" buttonValue="MEDICAL_FACILITY" />
        <RadioButton name="문화행사" buttonValue="CULTURE_EVENT" />
        <button className="lg:w-[10rem] lg:h-[4.4rem] shadow-md rounded-md bg-yellow-200 p-5 hover:bg-yellow-300">
          <text className="text-sm md:text-md lg:text-xl font-semibold">
            검색 🔎
          </text>
        </button>
      </div>
    </div>
  );
}
