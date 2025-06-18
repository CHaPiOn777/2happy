"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SIZES, SLIDES_SIZES } from "../../consts";
import SliderButton from "@/shared/components/Slider/SliderButton";
import ArrowRightIcon from "@/shared/components/icons/Arrows/ArrowRightIcon";
import { ProductServer } from "@/features/Products/types";
import ProductServerCard from "@/features/Products/components/Cards/ProductServerCard";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getProductsQueryOptions } from "@/features/Products/api/productsApi";
import { tagIds } from "@/features/Categories/consts/consts";
import CustomSlide from "./CustomSlide";

import "swiper/css";
import "swiper/css/navigation";

import "./styles.scss";

const NewCollectionSlider = () => {
  const { data } = useSuspenseQuery(
    getProductsQueryOptions({
      tag: tagIds["new"],
      exclude_type: "grouped",
      per_page: 9,
    })
  );

  const productsWithCustom: (ProductServer | "custom")[] = [
    ...data.items.slice(0, 2),
    "custom",
    ...data.items.slice(2),
  ];

  return (
    <Swiper
      modules={[Navigation]}
      className="new-collection-slider relative"
      spaceBetween={24}
      slidesPerView="auto"
      onSwiper={(swiper) => {
        swiper.wrapperEl.classList.add("swiper-wrapper");
        swiper.wrapperEl.classList.remove("gap-6");
      }}
      wrapperClass="gap-6"
    >
      {productsWithCustom.map((slide, index) => {
        if (slide === "custom") {
          return (
            <SwiperSlide key="custom" className="custom-slide">
              <CustomSlide />
            </SwiperSlide>
          );
        } else {
          const size = SLIDES_SIZES[index];
          return (
            <SwiperSlide key={slide.id} style={SIZES[size]}>
              <ProductServerCard product={slide} />
            </SwiperSlide>
          );
        }
      })}
      <div className="absolute flex gap-4 right-0 bottom-0">
        <SliderButton slideType="prev" className="group">
          <ArrowRightIcon className="w-[48px] h-[48px] rotate-180 fill-main group-disabled:fill-dark-disabled" />
        </SliderButton>
        <SliderButton slideType="next" className="group">
          <ArrowRightIcon className="w-[48px] h-[48px] fill-main group-disabled:fill-dark-disabled" />
        </SliderButton>
      </div>
    </Swiper>
  );
};

export default NewCollectionSlider;
