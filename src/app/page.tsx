import Header from "@/components/header";
import CardFrame from "@/components/main/CardFrame";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <CardFrame />
    </>
  );
}
