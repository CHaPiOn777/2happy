import { useRef, useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useMediaCustom } from "@/shared/hooks/useMediaQuery";

const debounce = (fn: () => void, delay: number) => {
  let timeout: NodeJS.Timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
};

const ZoomedImage = ({ src, alt }: { src: string; alt: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaCustom("small");
  const isMedium = useMediaCustom("md");

  const getZoomFactor = () => {
    switch (true) {
      case isMobile:
        return 0.65;
      case isMedium:
        return 0.8;

      default:
        return 1;
    }
  };

  const zoomFactor = useMemo(getZoomFactor, [isMobile, isMedium]);

  // Сохраняем натуральные размеры изображения
  const [naturalSize, setNaturalSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [limits, setLimits] = useState({
    x: { min: 0, max: 0 },
    y: { min: 0, max: 0 },
  });

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
      setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight });
    };
  }, [src]);

  const clamp = (value: number, min: number, max: number) =>
    Math.max(min, Math.min(value, max));

  const updateSizes = () => {
    const container = containerRef.current;
    if (container && naturalSize) {
      const rect = container.getBoundingClientRect();
      const containerWidth = rect.width;
      const containerHeight = rect.height;

      // Вычисляем зум относительно натурального размера
      const zoomedWidth = naturalSize.width * zoomFactor;
      const zoomedHeight = naturalSize.height * zoomFactor;

      const maxX = 0;
      const minX = Math.min(containerWidth - zoomedWidth, 0);
      const maxY = 0;
      const minY = Math.min(containerHeight - zoomedHeight, 0);

      setImageSize({ width: zoomedWidth, height: zoomedHeight });
      setLimits({
        x: { min: minX, max: maxX },
        y: { min: minY, max: maxY },
      });
      // Центруем картинку
      setPosition({
        x: clamp((containerWidth - zoomedWidth) / 2, minX, maxX),
        y: clamp((containerHeight - zoomedHeight) / 2, minY, maxY),
      });
    }
  };

  // Следим за изменением naturalSize и размеров контейнера
  useEffect(() => {
    if (!containerRef.current || !naturalSize) return;

    const observer = new ResizeObserver(
      debounce(() => {
        updateSizes();
      }, 100)
    );
    observer.observe(containerRef.current);

    // Инициалный вызов
    updateSizes();

    return () => observer.disconnect();
  }, [naturalSize]);

  // Drag handlers
  const startDrag = (x: number, y: number) => {
    setDragging(true);
    setStart({ x: x - position.x, y: y - position.y });
  };

  const updateDrag = (x: number, y: number) => {
    if (!dragging) return;
    const newX = x - start.x;
    const newY = y - start.y;

    setPosition({
      x: clamp(newX, limits.x.min, limits.x.max),
      y: clamp(newY, limits.y.min, limits.y.max),
    });
  };

  const endDrag = () => {
    setDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    startDrag(e.clientX, e.clientY);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    updateDrag(e.clientX, e.clientY);
  };
  const handleMouseUp = () => endDrag();
  const handleMouseLeave = () => endDrag();

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      startDrag(touch.clientX, touch.clientY);
    }
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      updateDrag(touch.clientX, touch.clientY);
    }
  };
  const handleTouchEnd = () => endDrag();
  const handleTouchCancel = () => endDrag();

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden touch-none select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      {isLoading && (
        <div className="flex items-center justify-center absolute w-full h-full bg-white z-50">
          <h2 className="text-h3Akira animate-pulse">2happy</h2>
        </div>
      )}
      {naturalSize && (
        <div
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          className="absolute select-none pointer-events-auto touch-none"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transition: dragging ? "none" : "transform 0.2s ease-out",
            width: `${imageSize.width}px`,
            height: `${imageSize.height}px`,
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={imageSize.width}
            height={imageSize.height}
            className="pointer-events-none select-none object-contain"
            draggable={false}
            priority
          />
        </div>
      )}
    </div>
  );
};

export default ZoomedImage;
