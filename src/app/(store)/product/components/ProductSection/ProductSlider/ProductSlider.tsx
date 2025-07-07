"use client";

import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import ImageWithZoom from "@/shared/components/UI/ImageWithZoom";

import { Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import SliderButton from "@/shared/components/Slider/SliderButton";
import ChevronDownIcon from "@/shared/components/icons/Chevron/ChevronDownIcon";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getProductByIdQueryOptions } from "@/features/Products/api/productsApi";
import ImageGallery from "../../ImageGallery/ImageGallery";
import { getProductChip } from "@/features/Products/utils/getProductChip";
import { Image as ImageType } from "@/shared/types/api";
import { Chip } from "@/shared/components/UI/Chip";
import { cn } from "@/shared/utils";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";
import { Progress } from "@/shared/components/UI/Progress";

const ProductSlider = ({
  id,
  images,
  className,
}: {
  id: number;
  images: ImageType[];
  className?: string;
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const { data } = useSuspenseQuery(getProductByIdQueryOptions(id));

  const [activeIndex, setActiveIndex] = useState(1);
  const totalSlides = images.length;

  const progressValue = (activeIndex / totalSlides) * 100;

  const chip = getProductChip(data);
  return (
    <div
      className={cn(
        "product-slider relative h-[624px] flex flex-col sm:flex-row gap-4 sm:gap-6 flex-1 basis-[51%] overflow-hidden",
        className
      )}
    >
      {chip && (
        <Chip
          className="absolute left-4 sm:right-4 sm:left-auto top-4 z-10"
          variant={chip.type}
          size="small"
        >
          {chip.text}
        </Chip>
      )}
      <Swiper
        className="relative thumbs-slider"
        onSwiper={setThumbsSwiper}
        direction="vertical"
        slidesPerView={5}
        spaceBetween={8}
        modules={[Thumbs]}
      >
        <SliderButton
          className="w-full flex justify-center absolute top-0 z-10 bg-white/80 disabled:opacity-0"
          slideType="prev"
        >
          <ChevronDownIcon className="rotate-180" />
        </SliderButton>
        {images.map((image) => (
          <SwiperSlide
            key={image.id}
            data-key={image.id}
            style={{ display: thumbsSwiper ? "block" : "none" }}
          >
            <Image
              fill
              src={image.src}
              className="object-cover cursor-pointer blur-[0.5px]"
              alt={image.alt ?? "product-image-slide"}
            />
          </SwiperSlide>
        ))}
        <SliderButton
          className="w-full flex justify-center absolute bottom-0 z-10 bg-white/80 disabled:opacity-0"
          slideType="next"
        >
          <ChevronDownIcon />
        </SliderButton>
      </Swiper>

      <Swiper
        direction="horizontal"
        touchStartPreventDefault={false}
        touchMoveStopPropagation={false}
        touchAngle={45}
        passiveListeners={true}
        threshold={5}
        thumbs={{ swiper: thumbsSwiper }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
        modules={[Thumbs]}
        spaceBetween={24}
        breakpoints={{
          0: {
            slidesPerView: 1,
            allowTouchMove: true,
            spaceBetween: 0,
          },
          480: { slidesPerView: 2, allowTouchMove: true, spaceBetween: 16 },
          768: { slidesPerView: 2, allowTouchMove: true },
          1024: { slidesPerView: 1, allowTouchMove: false },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.id}>
            <ImageGallery images={images} initialSlide={index}>
              <ImageWithZoom
                isDefaultTouchDevice={false}
                src={image.src}
                alt={image.alt}
              />
            </ImageGallery>
          </SwiperSlide>
        ))}
      </Swiper>
      <Progress
        className="w-full block sm:hidden h-[2px]"
        value={progressValue}
      />
    </div>
  );
};

export default ProductSlider;
