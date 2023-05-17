import CalculateCard from "./CalculateCard";
import NewsCard from "./NewsCard";
import PopularCard from "./PopularCard";

export default function CardFrame() {
  return (
    <div className="min-h-screen gap-[3rem] justify-center items-center justify-items-center grid grid-cols-1 lg:grid-cols-3">
      <CalculateCard />
      <PopularCard />
      <NewsCard />
    </div>
  );
}
