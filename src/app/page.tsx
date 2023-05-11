"use client";
import CardFrame from "@/components/main/CardFrame";
import FilterSection from "@/components/main/FilterSection";
import SearchSection from "@/components/main/SearchSection";

export default function Home() {
  return (
    <>
      <div className="bg-cardFrameColor shadow-lg w-screen h-screen flex justify-center items-center flex-wrap">
        <SearchSection />
        <FilterSection />
      </div>
      <div className="w-screen flex justify-center items-center">
        <CardFrame />
      </div>
    </>
  );
}
