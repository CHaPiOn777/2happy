import { Swiper, SwiperSlide } from "swiper/react";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { Navigation } from "swiper/modules";
import ArrowRightIcon from "@/shared/components/icons/Arrows/ArrowRightIcon";
import { IconButton } from "@/shared/components/UI/IconButton";
import { useEffect, useRef, useState } from "react";
import SliderProgress from "@/shared/components/Slider/SliderProgress";
import { NavigationOptions, Swiper as SwiperType } from "swiper/types";
import { Image } from "@/shared/types/api";
import { cn } from "@/shared/utils/cn";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";
import ZoomedImage from "./ZoomedImage";
import ImageWithZoom from "@/shared/components/UI/ImageWithZoom";

const ImageGallerySlider = ({
  openWide,
  initialSlide,
  images,
}: {
  openWide: boolean;
  initialSlide: number;
  images: Image[];
}) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const [activeImage, setActiveImage] = useState<Image>(() => images[0]);
  const prevRef = (el: HTMLElement | null) => {
    if (el) navigation.current.prevEl = el;
  };
  const nextRef = (el: HTMLElement | null) => {
    if (el) navigation.current.nextEl = el;
  };

  const navigation = useRef<NavigationOptions>({
    nextEl: null,
    prevEl: null,
  });

  useEffect(() => {
    if (swiperRef.current) swiperRef.current.allowTouchMove = !openWide;
  }, [openWide]);

  return (
    <div className="w-full h-full flex justify-center">
      <div
        className={cn(
          "relative h-full w-full margin-x-auto max-w-[644px] transition-[max-width] duration-300",
          openWide && "w-auto max-w-full"
        )}
      >
        <Swiper
          className="gallery-slider"
          modules={[Navigation]}
          navigation={navigation.current}
          centeredSlides={true}
          allowTouchMove={false}
          initialSlide={initialSlide}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveImage(images[swiper.activeIndex]);
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              allowTouchMove: openWide ? false : true,
            },
            480: { slidesPerView: 1 },
          }}
          slidesPerView={1}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              {openWide ? (
                <ZoomedImage src={image.src} alt={image.alt} />
              ) : (
                <ImageWithZoom src={image.src} alt={image.alt} />
              )}
            </SwiperSlide>
          ))}

          <SliderProgress className="absolute left-0 bottom-0" />
        </Swiper>
        <IconButton
          ref={prevRef}
          className="absolute top-1/2 -translate-y-1/2 -left-[72px] z-10 disabled:bg-transparent hidden sm:inline-flex"
          variant="secondary"
          size="large"
        >
          <ArrowRightIcon className="rotate-180" />
        </IconButton>
        <IconButton
          ref={nextRef}
          className="absolute top-1/2 -translate-y-1/2 -right-[72px] z-10 disabled:bg-transparent hidden sm:inline-flex"
          variant="secondary"
          size="large"
        >
          <ArrowRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ImageGallerySlider;
