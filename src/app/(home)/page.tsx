import ComplementFashion from "./components/ComplementFashion/ComplementFashion";
import Bestsellers from "./components/Bestsellers/Bestsellers";
import Categories from "./components/Categories/Categories";
import FinalSale from "./components/FinalSale/FinalSale";
import Instagram from "../../shared/components/Layout/Instagram/Instagram";
import NewCollection from "./components/NewCollection/NewCollection";
import NewMain from "./components/NewMain/NewMain";
import WhatsAppButton from "@/shared/components/Layout/MainLayout/components/WhatsAppButton";
import Collections from "./components/Collections/Collections";

export const revalidate = 380;

const HomePage = () => {
  return (
    <>
      <NewMain />
      <NewCollection />
      <Bestsellers />
      <Collections />
      <ComplementFashion />
      <Categories />
      <FinalSale />
      <Instagram />
      <WhatsAppButton />
    </>
  );
};

export default HomePage;
