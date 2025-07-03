import ImageWithLoader from "@/shared/components/UI/ImageWithLoader";
import { cn } from "@/shared/utils/cn";
import ImageComponent, { ImageProps } from "next/image";
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
  }, [isDefaultTouchDevice]);

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

  const onUpdate = useCallback(({ x, y, scale }: UpdateAction) => {
    const img = imgRef.current;
    if (!img) return;

    const value = make3dTransformValue({ x, y, scale });
    img.style.transform = value;
  }, []);

  if (isTouchDevice.current) {
    return (
      <QuickPinchZoom draggableUnZoomed={false} onUpdate={onUpdate}>
        <div
          ref={containerRef}
          className="relative overflow-hidden w-full h-full mx-auto"
        >
          <ImageComponent
            ref={imgRef}
            fill
            src={props.src?.toString()}
            alt={props.alt || ""}
            className={cn("select-none w-full h-full object-cover", className)}
            draggable={false}
            style={{
              transformOrigin: "0 0",
              willChange: "transform",
            }}
          />
        </div>
      </QuickPinchZoom>
    );
  }

  return (
    <div
      ref={containerRef}
      className="zoom-container touch-pan-y overflow-hidden"
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
        draggable={false}
        {...props}
      />
    </div>
  );
};

export default ImageWithZoom;
