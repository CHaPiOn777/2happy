"use client";

import { IconButton } from "@/shared/components/UI/IconButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Category } from "../../types";

import CategoryButton from "../CategoryButton";
import SliderButton from "@/shared/components/Slider/SliderButton";
import ArrowRightIcon from "@/shared/components/icons/Arrows/ArrowRightIcon";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

export const CategorySlider = ({
  categories,
  activeSlug,
  getHref,
}: {
  categories: Category[] | undefined;
  activeSlug?: string;
  getHref: (category: Category) => string;
}) => {
  const activeSlugIndex = categories?.findIndex(
    (item) => item.slug === activeSlug
  );
  return (
    <div className="category-slider">
      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        slidesPerGroup={2}
        initialSlide={activeSlugIndex ?? 0}
        onSwiper={(swiper) => {
          swiper.wrapperEl.classList.add("swiper-wrapper");
          swiper.wrapperEl.classList.remove("gap-4");
        }}
        wrapperClass="gap-4"
      >
        <SliderButton
          className="absolute hidden sm:inline-flex bg-white left-[-1px] top-0 z-10 disabled:hidden"
          slideType="prev"
          asChild
        >
          <IconButton variant="secondary" size="small">
            <ArrowRightIcon className="rotate-180" />
          </IconButton>
        </SliderButton>
        {categories
          ?.sort((a, b) => a.menu_order - b.menu_order)
          ?.map((category) => (
            <SwiperSlide key={category.name} className="pb-1">
              <CategoryButton
                href={getHref(category)}
                isActive={activeSlug === category.slug}
              >
                {category.name}
              </CategoryButton>
            </SwiperSlide>
          ))}
        <SliderButton
          className="absolute hidden sm:inline-flex bg-white top-0 right-[-1px] z-10 disabled:hidden"
          slideType="next"
          asChild
        >
          <IconButton variant="secondary" size="small">
            <ArrowRightIcon />
          </IconButton>
        </SliderButton>
      </Swiper>
    </div>
  );
};
