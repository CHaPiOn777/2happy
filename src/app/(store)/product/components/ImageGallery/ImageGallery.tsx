import CloseIcon from "@/shared/components/icons/CloseIcon";
import OpenWideIcon from "@/shared/components/icons/OpenWideIcon";
import Container from "@/shared/components/UI/Container";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/UI/Dialog";
import { ReactNode, useState } from "react";
import ImageGallerySlider from "./ImageGallerySlider/ImageGallerySlider";
import { Image } from "@/shared/types/api";
import CloseWideIcon from "@/shared/components/icons/CloseWideIcon";

const ImageGallery = ({
  children,
  images,
  initialSlide,
}: {
  children: ReactNode;
  images: Image[];
  initialSlide: number;
}) => {
  const [openWide, setOpenWide] = useState(false);
  return (
    <Dialog>
      <DialogTrigger className="w-full h-full">{children}</DialogTrigger>
      <DialogContent className="w-screen max-w-screen h-screen" hideClose>
        <Container className="relative flex-col gap-4 h-full">
          <DialogTitle className="sr-only">
            Галлерея изображений товара
          </DialogTitle>
          <div className="w-full flex gap-4 justify-end">
            <button onClick={() => setOpenWide((prev) => !prev)}>
              {openWide ? <CloseWideIcon /> : <OpenWideIcon />}
            </button>
            <DialogClose>
              <CloseIcon className="hover:fill-gray" />
            </DialogClose>
          </div>
          <ImageGallerySlider
            openWide={openWide}
            initialSlide={initialSlide}
            images={images}
          />
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default ImageGallery;
