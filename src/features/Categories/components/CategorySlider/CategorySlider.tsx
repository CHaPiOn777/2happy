"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/UI/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Category } from "../../types";
import { paths } from "@/config/paths";

import Link from "next/link";
import SliderButton from "@/components/UI/SliderButton";
import ArrowRightIcon from "@/components/icons/Arrows/ArrowRightIcon";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

export const CategorySlider = ({
  categories,
  activeSlug,
}: {
  categories: Category[] | undefined;
  activeSlug?: string;
}) => {
  return (
    <div className="category-slider">
      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        slidesPerGroup={2}
        onSwiper={(swiper) => {
          swiper.wrapperEl.classList.add("swiper-wrapper");
          swiper.wrapperEl.classList.remove("gap-4");
        }}
        wrapperClass="gap-4"
      >
        <SliderButton
          className="absolute bg-white left-[-1px] top-0 z-10 disabled:hidden"
          slideType="prev"
          asChild
        >
          <Button variant="tertiary" size="iconSmall">
            <ArrowRightIcon className="rotate-180" />
          </Button>
        </SliderButton>
        {categories
          ?.sort((a, b) => a.menu_order - b.menu_order)
          ?.map((category) => (
            <SwiperSlide key={category.name} className="pb-1">
              <Button
                className={cn(
                  "py-2 px-4 hover:shadow-elevation-1",
                  activeSlug === category.slug && "bg-main text-white"
                )}
                variant="secondary"
                size="small"
                asChild
              >
                <Link
                  href={paths.catalog.category.getHref(
                    `${category.slug}_${category.id}`,
                    category.name
                  )}
                >
                  {category.name}
                </Link>
              </Button>
            </SwiperSlide>
          ))}
        <SliderButton
          className="absolute bg-white top-0 right-[-1px] z-10 disabled:hidden"
          slideType="next"
          asChild
        >
          <Button variant="tertiary" size="iconSmall">
            <ArrowRightIcon />
          </Button>
        </SliderButton>
      </Swiper>
    </div>
  );
};
