import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { cn } from "@/shared/utils/cn";
import { ImageProps } from "next/image";
import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import QuickPinchZoom, {
  make3dTransformValue,
  UpdateAction,
} from "react-quick-pinch-zoom";

const ImageWithZoom = ({
  className,
  isDefaultTouchDevice,
  ...props
}: ImageProps & { isDefaultTouchDevice?: boolean }) => {
  const [zoom, setZoom] = useState({ x: "50%", y: "50%", scale: 1 });
  const isTouchDevice = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    isTouchDevice.current =
      isDefaultTouchDevice ??
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // 🖱️ Мышь (десктоп)
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice.current) return;

    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoom({ x: `${x}%`, y: `${y}%`, scale: 1.5 });
  };

  const resetZoom = () => {
    setZoom((prev) => ({ ...prev, scale: 1 }));
  };

  // 📱 Touch-зум с react-quick-pinch-zoom
  const onUpdate = useCallback(({ x, y, scale }: UpdateAction) => {
    const { current: img } = imgRef;

    if (img) {
      const value = make3dTransformValue({ x, y, scale });

      img.style.setProperty("transform", value);
    }
  }, []);

  return (
    <>
      <div
        ref={containerRef}
        className="zoom-container touch-pan-y"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetZoom}
      >
        <ImageWithLoader
          className={cn(
            "transition-transform w-full h-auto select-none",
            zoom.scale > 1 ? "cursor-zoom-out" : "cursor-zoom-in",
            className
          )}
          style={{
            transformOrigin: `${zoom.x} ${zoom.y}`,
            transform: `scale(${zoom.scale})`,
          }}
          {...props}
        />
      </div>
    </>
  );
};

export default ImageWithZoom;
