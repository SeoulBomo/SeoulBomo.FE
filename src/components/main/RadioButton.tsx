export default function RadioButton({ name }: { name: string }) {
  return (
    <label className="cursor-pointer">
      <input type="radio" name="place" className="peer sr-only" value={name} />
      <div className="lg:w-[10rem] rounded-md bg-white p-5 shadow-sm text-gray-400 ring-2 ring-transparent transition-all hover:shadow-md peer-checked:bg-yellow-200 peer-checked:text-black peer-checked:ring-yellow-400 peer-checked:ring-offset-2">
        <div className="flex flex-col">
          <div className="flex items-end justify-between">
            <p>
              <span className="text-sm md:text-md lg:text-lg font-bold">
                {name}
              </span>
            </p>
            <div>
              <svg className="lg:w-[30px] lg:h-[30px]" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </label>
  );
}
