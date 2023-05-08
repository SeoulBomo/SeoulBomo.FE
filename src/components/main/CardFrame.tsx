import CalculateCard from "./CalculateCard";
import PopularCard from "./PopularCard";

export default function CardFrame() {
  return (
    <div className="bg-cardFrameColor  shadow-lg w-[80.75rem] h-[45rem] flex  items-center justify-center">
      <div className="h-[35rem] w-[72rem] flex items-center justify-evenly">
        <CalculateCard />
        <PopularCard />
      </div>
    </div>
  );
}
