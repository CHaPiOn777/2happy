"use client";

import { getProductByIdQueryOptions } from "@/features/Products/api/productsApi";
import { Accordion } from "@/shared/components/UI/Accordion";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { useSuspenseQuery } from "@tanstack/react-query";
import AccordionDeliveryItem from "./AccordionItems/AccordionDeliveryItem";
import { useGetProductId } from "@/features/Products/hooks/useGetProductId";
import CopyButton from "@/shared/components/UI/CopyButton";
import CopyIcon from "@/shared/components/icons/CopyIcon";
import DescriptionItem from "./DescriptionItem";
import AccordionAboutItem from "./AccordionItems/AccordionAboutItem";
import AccordionWithRichText from "./AccordionItems/AccordionWithRichText";

const DescriptionTab = () => {
  const { id } = useGetProductId("productId");
  const { data } = useSuspenseQuery(getProductByIdQueryOptions(id));
  return (
    <div className="flex flex-col lg:gap-0 gap-8 lg:flex-row h-full">
      <div className="lg:basis-[600px]">
        <div className="mb-8">
          <div className="flex gap-2 text-gray-middle mb-4">
            <span>Артикул:</span>
            <span>{data.sku ? data.sku : "Артикул не указан"}</span>
            {data.sku && (
              <CopyButton
                copyText={data.sku}
                className="[&_svg]:fill-gray-middle"
              >
                <CopyIcon className="fill-gray-middle" />
              </CopyButton>
            )}
          </div>
          <DescriptionItem description={data.description} />
        </div>
        <Accordion type="multiple">
          <AccordionAboutItem meta={data.meta_data} />
          <AccordionWithRichText
            title="Состав и уход"
            value="_composition_and_care"
            meta={data.meta_data}
          />
          <AccordionWithRichText
            title="Параметры модели"
            value="_model_parameters"
            meta={data.meta_data}
          />
          <AccordionDeliveryItem />
        </Accordion>
      </div>
      <ImageWithLoader
        wrapperClassName="w-[304px] h-[400px] ml-auto lg:w-auto lg:h-auto lg:flex-1 lg:top-[-68px] bg-white"
        className="lg:pl-12"
        src="/images/Home/Main/slider-1.jpg"
        alt="desc-image"
      />
    </div>
  );
};

export default DescriptionTab;
