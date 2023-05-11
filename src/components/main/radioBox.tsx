import RadioButton from "./RadioButton";

export default function RadioBox() {
  return (
    <>
      <div className="flex flex-wrap rounded-[0.3rem] w-[25rem] h-[16.2rem]">
        <div className="flex flex-wrap gap-2">
          <RadioButton name="야외시설" />
          <RadioButton name="관공서" />
          <RadioButton name="도서관" />
          <RadioButton name="의료시설" />
          <RadioButton name="문화행사" />
          <button className="w-[10rem] h-[4.4rem] shadow-md rounded-md bg-yellow-200 p-5 hover:bg-yellow-300">
            <text className="text-xl font-semibold">검색 🔎</text>
          </button>
        </div>
      </div>
    </>
  );
}
