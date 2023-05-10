import FilterFrame from "./filterFrame";
import SearchFrame from "./searchFrame";

export default function FilterSection() {
  return (
    <section className=" w-screen h-[50rem] mt-[8.1rem]   bg-yellowColor/20">
      <SearchFrame />
      <FilterFrame />
    </section>
  );
}
