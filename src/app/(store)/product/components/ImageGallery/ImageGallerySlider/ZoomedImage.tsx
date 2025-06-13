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

  const zoomFactor = 1.2;

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

      const zoomedWidth = containerWidth * zoomFactor;
      const zoomedHeight = zoomedWidth * naturalAspectRatio;

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
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      {naturalAspectRatio !== null && (
        <div
          ref={imageRef}
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
