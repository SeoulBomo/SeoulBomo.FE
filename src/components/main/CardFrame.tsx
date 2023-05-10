import CalculateCard from "./CalculateCard";
import NewsCard from "./NewsCard";
import PopularCard from "./PopularCard";

export default function CardFrame() {
  return (
    <div className="bg-cardFrameColor shadow-lg w-[90%] flex lg:flex-row md:flex-col justify-center items-center gap-[2rem] flex-wrap lg:py-[10rem] py-[2rem]">
      <CalculateCard />
      <PopularCard />
      <NewsCard />
    </div>
  );
}
