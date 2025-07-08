import { ProductCardLoader } from "@/features/Products/components/Cards/ProductCard";
import CustomSlide from "./CustomSlide";
import { SIZES_TW } from "../../consts";

const NewCollectionLoader = () => {
  return (
    <div className="flex h-[500px] gap-6">
      <ProductCardLoader className={SIZES_TW.big} />
      <ProductCardLoader className={SIZES_TW.small} />
      <div className="w-[280px] h-[288px] shrink-0">
        <CustomSlide />
      </div>
      <ProductCardLoader className={SIZES_TW.small} />
      <ProductCardLoader className={`hidden lg:flex ${SIZES_TW.medium}`} />
    </div>
  );
};

export default NewCollectionLoader;
