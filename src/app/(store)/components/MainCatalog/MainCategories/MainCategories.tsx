"use client";

import { paths } from "@/config/paths";
import CategoryButton from "@/features/Categories/components/CategoryButton";
import CategoryLink from "@/features/Categories/components/CategoryLink";
import Container from "@/shared/components/UI/Container";
import { useScrollDirection } from "@/shared/hooks/useScrollDirection";
import { cn } from "@/shared/utils";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./styles.scss";

const MainCategories = () => {
  const show = useScrollDirection({ delayScroll: 600 });

  return (
    <div
      className={cn(
        "sticky top-[56px] sm:top-[80px] z-behind-header w-full bg-white transition-all duration-700 sm:duration-500",
        show
          ? "translate-y-0"
          : "-translate-y-[350px] sm:-translate-y-[200px] md:-translate-y-[150px]"
      )}
    >
      <Container className="main-categories-slider py-3">
        <Swiper
          spaceBetween={16}
          slidesPerView="auto"
          wrapperClass="gap-4"
          onSwiper={(swiper) => {
            swiper.wrapperEl.classList.add("swiper-wrapper");
            swiper.wrapperEl.classList.remove("gap-4");
          }}
        >
          <SwiperSlide>
            <CategoryButton
              href={paths.catalog.new_collection.getHref("Новая коллекция")}
            >
              Новинки
            </CategoryButton>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryButton asChild>
              <CategoryLink category="clothes" name="Одежда">
                Одежда
              </CategoryLink>
            </CategoryButton>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryButton asChild>
              <CategoryLink category="accessories" name="Аксессуары">
                Аксессуары
              </CategoryLink>
            </CategoryButton>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryButton asChild>
              <CategoryLink category="outerwear" name="Верхняя одежда">
                Верхняя одежда
              </CategoryLink>
            </CategoryButton>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryButton href={paths.catalog.bestsellers.getHref()}>
              Бестселлеры
            </CategoryButton>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryButton
              href={paths.catalog.collections.getHref("Готовые образы")}
            >
              Коллекции
            </CategoryButton>
          </SwiperSlide>
          <SwiperSlide>
            <CategoryButton
              className="text-red"
              href={paths.catalog.final_sale.getHref()}
            >
              Final sale
            </CategoryButton>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default MainCategories;
