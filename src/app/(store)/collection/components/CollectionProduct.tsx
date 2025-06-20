import { Suspense, useState } from "react";
import ProductInfoLoader from "../../product/components/ProductSection/ProductInfo/ProductInfoLoader";
import ProductInfo from "../../product/components/ProductSection/ProductInfo/ProductInfo";
import Link from "next/link";
import { paths } from "@/config/paths";
import ProductSectionButtons from "../../product/components/ProductSection/ProductSectionButtons";
import { Separator } from "@/shared/components/UI/Separator";
import { Image } from "@/shared/types/api";
import CollectionProductImages from "./CollectionProductImages/CollectionProductImages";
import CollectionImagesLoader from "./CollectionImagesLoader";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";

const CollectionProduct = ({ id }: { id: number }) => {
  const [images, setImages] = useState<Image[]>([]);

  const isMedium = useMediaCustom("md");
  return (
    <div className="flex flex-col gap-6">
      {isMedium && (
        <Suspense fallback={<CollectionImagesLoader />}>
          <CollectionProductImages productId={id} images={images} />
        </Suspense>
      )}
      <Suspense
        fallback={<ProductInfoLoader className="gap-12 justify-normal h-min" />}
      >
        <ProductInfo
          id={id}
          classNames={{ wrapper: "gap-12 justify-normal h-min" }}
          setImages={setImages}
          renderName={(product) => (
            <Link href={paths.product.getHref(product.id, product.name)}>
              <h4 className="text-h4">{product.name}</h4>
            </Link>
          )}
          renderButtons={(product, variation, disabled) => (
            <div>
              <ProductSectionButtons
                product={product}
                variation={variation}
                showFixedButtons={false}
                disabled={disabled}
              />
              <Separator className="mt-8 sm:mt-12 md:mt-16" />
            </div>
          )}
        />
      </Suspense>
    </div>
  );
};

export default CollectionProduct;
