import { Separator } from "@/shared/components/UI/Separator";
import ProductInfoLoader from "../../product/components/ProductSection/ProductInfo/ProductInfoLoader";
import CollectionImagesLoader from "./CollectionImagesLoader";

const CollectionProductsLoader = () => {
  return (
    <div className="flex flex-col gap-16 w-full">
      <div className="flex flex-col gap-12">
        <CollectionImagesLoader className="flex md:hidden" />
        <ProductInfoLoader />
        <Separator />
      </div>
      <div className="flex flex-col gap-12">
        <CollectionImagesLoader className="flex md:hidden" />
        <ProductInfoLoader />
        <Separator />
      </div>
      <div className="flex flex-col gap-12">
        <CollectionImagesLoader className="flex md:hidden" />
        <ProductInfoLoader />
        <Separator />
      </div>
    </div>
  );
};

export default CollectionProductsLoader;
