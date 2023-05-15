import CardFrame from "@/components/main/CardFrame";
import FilterSection from "@/components/main/FilterSection";
import SearchSection from "@/components/main/SearchSection";

export default function Home() {
  return (
    <div className="bg-cardFrameColor shadow-lg flex justify-center items-center flex-wrap">
      <SearchSection />
      <FilterSection />
      <CardFrame />
    </div>
  );
}
