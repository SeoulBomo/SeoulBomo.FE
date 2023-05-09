import CalculateCard from "./CalculateCard";
import NewsCard from "./NewsCard";
import PopularCard from "./PopularCard";

export default function CardFrame() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="bg-cardFrameColor  shadow-lg w-[80.75rem] h-[45rem] flex  items-center justify-center">
        <div className="h-[35rem] w-[72rem] flex items-center justify-evenly">
          <CalculateCard />
          <PopularCard />
          <NewsCard />
        </div>
      </div>
    </div>
  );
}
