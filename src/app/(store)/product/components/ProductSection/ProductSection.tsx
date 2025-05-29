"use client";

import Container from "@/shared/components/UI/Container";
import ProductSlider from "./ProductSlider/ProductSlider";
import ProductInfo from "./ProductInfo/ProductInfo";
import { Suspense } from "react";
import ProductInfoLoader from "./ProductInfo/ProductInfoLoader";
import ProductSliderLoader from "./ProductSlider/ProductSliderLoader";
import { useProductStore } from "@/features/Products/store/productStore";
import ProductSectionButtons from "./ProductSectionButtons";
import { useGetProductId } from "@/features/Products/hooks/useGetProductId";
import { useSearchParams } from "next/navigation";
import { useQueryParams } from "@/shared/hooks/useQueryParams";

const ProductSection = () => {
  const params = useSearchParams();
  const setSearchParams = useQueryParams();

  const { id } = useGetProductId("productId");

  const { images, setImages } = useProductStore();

  return (
    <div className="border-b border-main">
      <Container className="my-section flex gap-12">
        <Suspense fallback={<ProductSliderLoader />}>
          <ProductSlider id={id} images={images} />
        </Suspense>
        <Suspense
          fallback={<ProductInfoLoader className="flex-1 basis-[49%]" />}
        >
          <ProductInfo
            id={id}
            className="flex-1 basis-[49%]"
            defaultColor={params.get("color")}
            defaultSize={params.get("size")}
            handleChange={({ type, value }) => {
              setSearchParams({ [type]: value });
            }}
            setImages={setImages}
            renderButtons={(variation, disabled) => (
              <ProductSectionButtons
                variation={variation}
                disabled={disabled}
              />
            )}
          />
        </Suspense>
      </Container>
    </div>
  );
};

export default ProductSection;
