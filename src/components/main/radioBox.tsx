export default function RadioBox() {
  return (
    <div className="flex items-center mt-5">
      <input
        id="default-radio-1"
        type="radio"
        value=""
        name="default-radio"
        className="w-5 h-5 text-black bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-500 "
      />
      <label
        htmlFor="default-radio-1"
        className="ml-2 text-base font-semibold text-gray-900 dark:text-gray-300"
      >
        야외시설
      </label>
    </div>
  );
}
