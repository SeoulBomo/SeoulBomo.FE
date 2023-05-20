import CardFrame from "@/components/main/CardSection/CardFrame";
import FilterSection from "@/components/main/FilterSection/FilterSection";
import SearchSection from "@/components/main/SearchSection/SearchSection";
import MapFrame from "@/components/main/map/MapFrame";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <SearchSection />
      <FilterSection />
      <MapFrame />
      <CardFrame />
    </div>
  );
}
