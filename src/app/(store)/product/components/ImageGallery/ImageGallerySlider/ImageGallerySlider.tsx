import { Swiper, SwiperSlide } from "swiper/react";
import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { Navigation } from "swiper/modules";
import ArrowRightIcon from "@/shared/components/icons/Arrows/ArrowRightIcon";
import { IconButton } from "@/shared/components/UI/IconButton";
import { useRef, useState } from "react";
import SliderProgress from "@/shared/components/Slider/SliderProgress";
import ImageWithZoom from "@/shared/components/UI/ImageWithZoom";
import { NavigationOptions } from "swiper/types";
import { Image } from "@/shared/types/api";
import { cn } from "@/shared/utils/cn";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";
import ZoomedImage from "./ZoomedImage";

const ImageGallerySlider = ({
  openWide,
  initialSlide,
  images,
}: {
  openWide: boolean;
  initialSlide: number;
  images: Image[];
}) => {
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
  return (
    <div className="w-full h-full flex justify-center">
      <div
        className={cn(
          "relative h-full w-full margin-x-auto max-w-[644px] transition-[max-width] duration-300",
          openWide && "w-auto max-w-full"
        )}
      >
        {/* <div
          className={cn(
            "absolute w-full h-full transition-opacity opacity-0 pointer-events-none z-50",
            openWide && "opacity-100 pointer-events-auto"
          )}
        >
          <ImageWithZoom
            fill
            src={activeImage.src}
            className="object-cover"
            alt={`scaled-${activeImage.alt}`}
          />
        </div> */}
        <Swiper
          className="gallery-slider"
          modules={[Navigation]}
          navigation={navigation.current}
          centeredSlides={true}
          allowTouchMove={false}
          initialSlide={initialSlide}
          onSlideChange={(swiper) => {
            setActiveImage(images[swiper.activeIndex]);
          }}
          slidesPerView={1}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              {openWide ? (
                <ZoomedImage src={image.src} alt={image.alt} />
              ) : (
                <ImageWithLoader
                  className="object-center"
                  src={image.src}
                  alt={image.alt}
                />
              )}
            </SwiperSlide>
          ))}

          <SliderProgress className="absolute left-0 bottom-0" />
        </Swiper>
        <IconButton
          ref={prevRef}
          className="absolute top-1/2 -translate-y-1/2 -left-[72px] z-10 disabled:bg-transparent"
          variant="secondary"
          size="large"
        >
          <ArrowRightIcon className="rotate-180" />
        </IconButton>
        <IconButton
          ref={nextRef}
          className="absolute top-1/2 -translate-y-1/2 -right-[72px] z-10 disabled:bg-transparent"
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
