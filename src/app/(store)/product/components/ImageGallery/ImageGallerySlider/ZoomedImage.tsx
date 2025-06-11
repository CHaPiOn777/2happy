import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const debounce = (fn: () => void, delay: number) => {
  let timeout: NodeJS.Timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
};

const ZoomedImage = ({ src, alt }: { src: string; alt: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const zoomFactor = 1.1;

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [naturalAspectRatio, setNaturalAspectRatio] = useState<number | null>(
    null
  );

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [limits, setLimits] = useState({
    x: { min: 0, max: 0 },
    y: { min: 0, max: 0 },
  });

  // Загружаем изображение и определяем aspect ratio
  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      const ratio = img.naturalHeight / img.naturalWidth;
      setNaturalAspectRatio(ratio);
    };
  }, [src]);

  const clamp = (value: number, min: number, max: number) =>
    Math.max(min, Math.min(value, max));

  const updateSizes = () => {
    const container = containerRef.current;
    if (container && naturalAspectRatio !== null) {
      const rect = container.getBoundingClientRect();
      const containerWidth = rect.width;
      const containerHeight = rect.height;

      console.log(containerWidth, containerHeight, naturalAspectRatio);

      const zoomedWidth = containerWidth * zoomFactor;
      const zoomedHeight = zoomedWidth * naturalAspectRatio;

      console.log(zoomedWidth, zoomedHeight);

      const maxX = 0;
      const minX = Math.min(containerWidth - zoomedWidth, 0);
      const maxY = 0;
      const minY = Math.min(containerHeight - zoomedHeight, 0);

      setContainerSize({ width: containerWidth, height: containerHeight });
      setImageSize({ width: zoomedWidth, height: zoomedHeight });
      setLimits({
        x: { min: minX, max: maxX },
        y: { min: minY, max: maxY },
      });
      setPosition({
        x: clamp((containerWidth - zoomedWidth) / 2, minX, maxX),
        y: clamp((containerHeight - zoomedHeight) / 2, minY, maxY),
      });
    }
  };

  // Обновляем размеры при изменении aspectRatio
  useEffect(() => {
    if (!containerRef.current || naturalAspectRatio === null) return;

    const observer = new ResizeObserver(
      debounce(() => {
        updateSizes();
      }, 100)
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [naturalAspectRatio]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const newX = e.clientX - start.x;
    const newY = e.clientY - start.y;

    setPosition({
      x: clamp(newX, limits.x.min, limits.x.max),
      y: clamp(newY, limits.y.min, limits.y.max),
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-grab"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {naturalAspectRatio !== null && (
        <div
          ref={imageRef}
          onMouseDown={handleMouseDown}
          className="absolute select-none pointer-events-auto cursor-grab"
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
