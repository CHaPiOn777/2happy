import Instagram from "@/shared/components/Layout/Instagram/Instagram";
import FavoriteSection from "./components/FavoriteSection";
import FavoriteSimilarProducts from "./components/FavoriteSimilarProducts";

const FavoritePage = () => {
  return (
    <>
      <FavoriteSection />
      <FavoriteSimilarProducts />
      <Instagram />
    </>
  );
};

export default FavoritePage;
